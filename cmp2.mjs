import fs from 'node:fs';import {stripTypeScriptTypes} from 'node:module';
const js=stripTypeScriptTypes(fs.readFileSync('logic.ts','utf8'),{mode:'strip'}).replace(/^export /gm,'');
const A=new Function(js+';return wordsAr;')();
const N=new Function(fs.readFileSync(process.env.NAW||'/tmp/naw.js','utf8')+';return nArabicWords;')();
const nz=s=>s.replace(/[ًٌٍَُِّْ]/g,'').replace(/\s+/g,' ').trim().replace(/اثنا عشر/g,'X12').replace(/اثنى عشر/g,'X12').replace(/مائتا/g,'M2').replace(/مئتا/g,'M2').replace(/مائتان/g,'M2').replace(/مئتان/g,'M2').replace(/مائتين/g,'M2').replace(/مئتين/g,'M2').replace(/مائة/g,'م').replace(/مئة/g,'م').replace(/ماية/g,'م').replace(/[ةه](?=\s|$)/g,'ه').replace(/أ|إ|آ/g,'ا').replace(/ وواحد (الف|مليون|مليار)/g,' و$1').replace(/ واثنان الف/g,' والفان').replace(/ واثنان مليون/g,' ومليونان').replace(/ واثنان مليار/g,' وملياران');
let diff=0,n=0,ex=[];
const list=[];for(let i=1;i<=1200;i++)list.push(i);for(let i=0;i<40000;i++)list.push(Math.floor(Math.random()*2e9)+1);
for(const sc of [1e3,1e6,1e9])for(let h=100;h<=900;h+=100)for(let r=0;r<=12;r++)for(const a of [0,500,25])list.push((h+r)*sc+a);
for(const v of list){n++;let a,b;try{a=nz(A(v))}catch(e){a='ERR '+e.message}try{b=nz(N(v,{Miah:'on'}))}catch(e){b='ERR '+e.message}
 if(a!==b){diff++;if(ex.length<15)ex.push([v,a,b])}}
console.log('checked',n,'diffs',diff);ex.forEach(e=>console.log(e.join(' | ')));
