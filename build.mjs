import fs from 'node:fs';
import {stripTypeScriptTypes} from 'node:module';
if(parseInt(process.versions.node)<22){console.error('Node 22 or newer is required');process.exit(1)}
const need=f=>{if(!fs.existsSync(f)){console.error('Missing file: '+f);process.exit(1)}return fs.readFileSync(f,'utf8')};
const src=need('logic.ts');
if(/^\s*import\s/m.test(src)){console.error('logic.ts must not contain import (it is inlined into the page)');process.exit(1)}
let js=stripTypeScriptTypes(src,{mode:'strip'}).replace(/^export /gm,'');
if(/^\s*export\s/m.test(js)){console.error('logic.ts has an unsupported export form');process.exit(1)}
const tpl=need('tpl.html');
for(const k of ['__FONTS__','__LOGIC__'])if(tpl.split(k).length!==2){console.error(k+' must appear exactly once in tpl.html');process.exit(1)}
{const F=new Function(js+';return {parse,wordsAr};')();const bad=F.wordsAr(1000)!=='ألف'||F.wordsAr(101000000)!=='مائة وواحد مليون'||F.parse('sale','عقد بيع شقة. الثمن 1500000 جنيه').price!=='1,500,000 جنيه مصري';if(bad){console.error('Smoke test failed: logic.ts is broken');process.exit(1)}}
const out=process.argv[2]&&!process.argv[2].startsWith('-')?process.argv[2]:'index.html';
fs.writeFileSync(out,tpl.replace('__FONTS__',()=>need('fonts.css')).replace('__LOGIC__',()=>js));
