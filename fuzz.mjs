import {parse,runChecks,build} from './logic.ts';
import fs from 'node:fs';
const cases=JSON.parse(fs.readFileSync('cases.json','utf8'));
const base=cases.map(c=>c[1]).join(' ');
const rnd=(n)=>{let s='';const al='ابتثجحخدذرزسشصضطظعغفقكلمنهوي ،.١٢٣٤٥٦٧٨٩0123456789abc\n';for(let i=0;i<n;i++)s+=al[Math.floor(Math.random()*al.length)];return s};
let errs=0,maxt=0;
const run=(k,t,label)=>{const t0=performance.now();try{const p=parse(k,t);runChecks(k,p);build(k,p).join('\n')}catch(e){errs++;console.log('ERR',label,e.message)}const d=performance.now()-t0;maxt=Math.max(maxt,d);if(d>500)console.log('SLOW',label,Math.round(d))};
for(let i=0;i<300;i++){for(const k of ['sale','lease'])run(k,rnd(50+Math.floor(Math.random()*2000)),'rnd'+i)}
for(const k of ['sale','lease']){run(k,base.repeat(20),'long-'+base.length*20);run(k,'ا'.repeat(50000),'a50k');run(k,' '.repeat(50000)+'البايع',' sp');run(k,'المشتري '.repeat(5000),'rep');run(k,'١'.repeat(30000),'digits');run(k,'جنيه '.repeat(8000),'gn');run(k,'مليون '.repeat(5000)+'جنيه','mil');run(k,'<script>alert(1)</script> البايع "><img src=x onerror=1>','xss');run(k,'😀'.repeat(1000),'emoji');run(k,'\u0000\u202e',"ctl");run(k,'','empty')}
console.log('errors',errs,'maxms',Math.round(maxt));
