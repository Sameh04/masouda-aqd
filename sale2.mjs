import fs from 'node:fs';import {stripTypeScriptTypes} from 'node:module';
const js=stripTypeScriptTypes(fs.readFileSync('logic.ts','utf8'),{mode:'strip'}).replace(/^export /gm,'');
const F=new Function(js+';return {parse,build,runChecks,fixText,wordsAr};')();
let bad=0;const ck=(n,c)=>{if(!c){bad++;console.log('FAIL',n)}};
const run=(t)=>{const p=F.parse('sale',t);return {p,L:F.build('sale',p).join('\n'),C:F.runChecks('sale',p).map(c=>c.name).join('|')}};
// 1 plain full cash
let r=run('البائع أحمد سعيد رقمه القومي 28001011234567 يسكن القاهرة والمشتري منى علي رقمها القومي 29001011234567 باع شقة رقم 5 بالدور الثالث بعمارة 4 شارع الجمهورية دمياط مساحتها 120 متر الثمن مليون ومئتين ألف جنيه دفعها كاش بالكامل عند التوقيع الملكية بعقد مسجل التسليم فوري');
ck('title','# عقد بيع شقة'===r.L.split('\n')[0]);
for(const s of ['باع وأسقط وتنازل الطرف الأول بكافة الضمانات','(الحيازة)','(مستندات الملكية)','(التوثيق ونقل الملكية)','م 462','(الضرائب والفواتير)','م 458','(عدم العدول)','(الموطن المختار)','والله ولي التوفيق','الشاهد الأول','الشاهد الثاني','غير خاضعين للحراسة','مخالصة نهائية']) ck('has '+s,r.L.includes(s));
ck('penalty always core',r.L.includes('(الشرط الجزائي)')&&r.L.includes('\u0001قيمة الشرط الجزائي\u0002')&&r.L.includes('يخل بأي شرط من شروط هذا العقد'));ck('core check',r.C.split('|').includes('الشرط الجزائي'));ck('rights clause',/تمكينًا أو رهنًا أو بيعًا لكل المبيع أو لجزء منه، أو توكيلات صادرة منه لأي شخص، أو عقودًا صادرة منه/.test(r.L));ck('224 note',r.C.includes('ملاحظة على الشرط الجزائي'));
ck('words 1.2M',/مليون ومائتا ألف/.test(r.L)||/مليون وم.*ألف/.test(r.L));
console.log(r.L.split('\n').filter(l=>/\(الثمن\)|\(السداد\)/.test(l)).join('\n'));
// 2 penalty + installments
r=run('البائع كريم نبيل رقمه القومي 28001011234567 والمشتري سلمى حسن رقمها القومي 29001011234567 باع محل رقم 9 بشارع النصر طنطا الثمن 900 ألف جنيه، المقدم 300 ألف والباقي على 10 أقساط شهرية، التسليم بعد آخر قسط، الشرط الجزائي 100 ألف جنيه، عقد ابتدائي');
ck('penalty clause',/\(الشرط الجزائي\): اتفق الطرفان على شرط جزائي قدره 100,000 جنيه مصري \(فقط/.test(r.L));
ck('price not penalty',/ثمن البيع هو 900,000/.test(r.L));
ck('inst clause',r.L.includes('(الأقساط)'));
ck('prelim title',r.L.split('\n')[0]==='# عقد بيع محل ابتدائي');
ck('penalty filled not blank',!r.L.includes('\u0001قيمة الشرط الجزائي\u0002'));
// 3 multi buyers equal
r=run('البائع هاني فؤاد رقمه القومي 28001011234567 والمشتريين منى ورنا وسارة باع شقة رقم 7 بالمعادي دفعوا الثمن 2 مليون جنيه بالتساوي');
ck('multi line',r.L.includes('ثالثًا:'));ck('multi clause',r.L.includes('(المشترون)'));ck('copies placeholder',/عدد النسخ/.test(r.L));
r=run('البائع كريم نبيل رقمه القومي 28001011234567 ساكن في المعادي، والمشتريين سلمى حسن رقمها القومي 29001011234567 ومنى علي، باع شقة رقم 9 بالمعادي الثمن 900 ألف جنيه');
ck('multi p1',r.p.p1==='كريم نبيل'&&r.p.m1==='y'&&!r.p.f1);ck('multi p2',r.p.p2==='سلمى حسن'&&r.p.f2==='y');
// 4 car (no real-estate clauses)
r=run('البائع عمر رقمه القومي 28001011234567 والمشتري ياسر رقمه القومي 29001011234567 باع سيارة ملاكي موديل 2018 لوحات أ ب ج 123 الثمن 400 ألف جنيه');
ck('car no registration',!r.L.includes('(التوثيق ونقل الملكية)')&&!r.L.includes('(الضرائب والفواتير)'));
// 5 empty/garbage
for(const t of ['','باع','###','البائع المشتري']){try{F.build('sale',F.parse('sale',t));}catch(e){ck('crash '+t,false)}}
// numbering unique
r=run('البائع أحمد رقمه القومي 28001011234567 والمشتريين منى ورنا باع شقة رقم 3 بالمعادي الثمن 500 ألف جنيه على 5 أقساط الشرط الجزائي 50 ألف جنيه بالتساوي');
const heads=[...r.L.matchAll(/^(البند [^(]+)\(/gm)].map(m=>m[1]);
ck('unique ord',new Set(heads).size===heads.length&&!heads.some(h=>/undefined/.test(h)));console.log(heads.length,'clauses');
// review additions: plain digits, dates, zero
{const q=t=>F.parse('sale',t);
 let a=q('عقد بيع شقة. الثمن 1500000 جنيه. التسليم 5/3/2027');ck('plain digits price',a.price==='1,500,000 جنيه مصري');ck('slash date kept',/5\/3\/2027/.test(a.delivery));
 a=q('عقد بيع شقة. الثمن 1500000 جنيه. التسليم 2027-03-05');ck('iso date kept',/2027-03-05/.test(a.delivery));
 a=q('عقد بيع سيارة. الثمن ١٥٠٠٠٠٠ جنيه. التسليم ٥ مارس ٢٠٢٧');ck('eastern digits+month',a.price==='1,500,000 جنيه مصري'&&/5 مارس 2027/.test(a.delivery));
 a=q('عقد بيع شقة. الثمن 0 جنيه');ck('zero price not accepted',a.price==='');
 a=q('عقد بيع شقة. الثمن 1500000 جنيه');ck('words for plain digits',/مليون وخمسمائة ألف/.test(F.build('sale',a).map(x=>x.join?x.join(' '):String(x)).join(' ')+JSON.stringify(F.build('sale',a))));}
// review2 additions
{const q=t=>F.parse('sale',t);const bl=t=>F.build('sale',q(t)).join('\n');
 let x=bl('عقد بيع شقة. الثمن مليون جنيه. السداد دفعة مقدم 500000 جنيه والباقي يوم 1/1/2027');ck('year not comma-split',/1\/1\/2027/.test(x)&&!/2,027/.test(x)&&/500,000 جنيه/.test(x));
 x=bl('عقد بيع شقة. الثمن مليون جنيه. السداد على دفعتين الاولى 500000 جنيه سنة 2027 والثانية في 2028');ck('plain years kept',/سنة 2027 والثانية في 2028/.test(x)&&/500,000 جنيه/.test(x));
 x=bl('عقد بيع شقة. الثمن مليون جنيه. السداد 2500 جنيه شهريا');ck('4-digit amount with currency formatted',/2,500 جنيه/.test(x));
 ck('price in next segment',q('عقد بيع شقة. الثمن. مليون وخمسمية ألف جنيه').price==='1,500,000 جنيه مصري');
 ck('price still ok normal',q('عقد بيع شقة، الثمن، 1500000 جنيه').price==='1,500,000 جنيه مصري');
 const big=F.build('sale',q('البائع أحمد رقمه القومي 28001011234567 والمشتريين منى ورنا باع شقة رقم 3 بالمعادي الثمن 500 ألف جنيه على 5 أقساط الشرط الجزائي 50 ألف جنيه بالتساوي'));ck('clause count within ORD',big.filter(l=>/^البند /.test(l)).length<=21&&!big.some(l=>/^البند رقم/.test(l)));
 ck('years rounded',F.parse('lease','عقد إيجار شقة. المؤجر أحمد المستأجر محمود. المدة سنتين وشهر. الايجار 6000 جنيه').years==='2.08');
 for(const v of [101000000,102000000,201000,101000,102000,1001000000,201000000,305000000,101000102,1002000]){}
}
// review3 additions
{const ls=d=>F.build('lease',F.parse('lease','عقد إيجار شقة. المؤجر أحمد المستأجر محمود. '+d+' من 1/1/2027. الايجار 6000 جنيه')).join('\n');
 ck('dur شهرين',/مدة هذا الإيجار شهرين،/.test(ls('المدة شهرين')));
 ck('dur سنتين وشهرين',/سنتين وشهرين،/.test(ls('المدة سنتين وشهرين')));
 ck('dur سنة وشهرين',/سنة واحدة وشهرين،/.test(ls('لمدة سنة وشهرين')));
 ck('dur سنة وشهر',/سنة واحدة وشهر واحد،/.test(ls('المدة سنة وشهر')));
 const pr=t=>F.parse('sale','عقد بيع شقة. '+t).price;
 ck('spaced و 1',pr('الثمن مليون و خمسمائة ألف جنيه')==='1,500,000 جنيه مصري');
 ck('spaced و 2',pr('الثمن 2 مليون و 300 ألف جنيه')==='2,300,000 جنيه مصري');
 ck('unspaced و',pr('الثمن مليون وخمسمائة ألف جنيه')==='1,500,000 جنيه مصري');
 const co=F.build('sale',F.parse('sale','عقد بيع شقة. البائع شركة الأمل للتطوير والمشتري محمود حسن')).join('\n');
 ck('company no rep asks for rep',/شركة الأمل للتطوير، ويمثلها \u0001اسم الممثل القانوني\u0002/.test(co));
 const co2=F.build('sale',F.parse('sale','عقد بيع شقة. البائع شركة الأمل للتطوير ويمثلها أحمد علي رقمه القومي 28001011234567 والمشتري محمود حسن')).join('\n');
 ck('company with rep no dup',!/ويمثلها \u0001اسم/.test(co2)&&/ويمثلها أحمد علي/.test(co2));
 ck('الاقساط fix',F.fixText('سداد الاقساط')==='سداد الأقساط');}
// review4 additions: explicit x01/x02 forms, company labels
{const W=F.wordsAr;const eq=(v,e)=>ck('words '+v,W(v)===e);
 eq(101000,'مائة وواحد ألف');eq(102000,'مائة واثنان ألف');eq(201000,'مائتان وواحد ألف');eq(202000,'مائتان واثنان ألف');
 eq(101000000,'مائة وواحد مليون');eq(102000000,'مائة واثنان مليون');eq(1001000,'مليون وألف');eq(1101000,'مليون ومائة وواحد ألف');
 eq(1001000000,'مليار ومليون');eq(111000,'مائة وأحد عشر ألفًا');eq(103000,'مائة وثلاثة آلاف');eq(2000,'ألفان');eq(1000,'ألف');
 const co=F.build('sale',F.parse('sale','عقد بيع شقة. البائع شركة الأمل للتطوير والمشتري محمود حسن')).join('\n');
 ck('company id label',/الرقم القومي لممثلها \u0001الرقم القومي للممثل\u0002/.test(co)&&/ومقرها \u0001عنوان الشركة\u0002/.test(co));
 const rp=F.build('sale',F.parse('sale','عقد بيع شقة. البائع محمد محمود محمد والمشتري علي')).join('\n');ck('repeated name intact',/محمد محمود محمد/.test(rp));
 const pe=F.build('sale',F.parse('sale','عقد بيع شقة. البائع أحمد علي والمشتري محمود حسن')).join('\n');
 ck('person labels unchanged',/الرقم القومي للبائع/.test(pe)&&/عنوان البائع/.test(pe));}
console.log(bad?'FAILED '+bad:'ALL PASS');
