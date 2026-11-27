

                             

const SAMPLES                       = {
    sale: 'البائع أحمد محمد علي، رقمه القومي 28001011234567، يسكن القاهرة. المشتري محمود سمير حسن، رقمه القومي 29005051234567. باع الشقة رقم 5 بالدور الثالث بالعقار رقم 12 شارع التحرير مدينة نصر القاهرة مساحتها 120 متر. الثمن 1500000 جنيه. المشتري دفع مقدم 500000 جنيه والباقي على 10 أقساط شهرية. التسليم بتاريخ 1/1/2027.',
    lease: 'المؤجر خالد إبراهيم السيد، رقمه القومي 27503031234567. المستأجر ياسر عادل فوزي، رقمه القومي 29207071234567. أجّر شقة سكنية رقم 8 بالدور الثاني بالعقار 3 شارع الجمهورية الجيزة. مدة العقد سنتين تبدأ من 1/1/2027. الأجرة 6000 جنيه شهريا تدفع أول كل شهر. التأمين 12000 جنيه. زيادة سنوية 10 بالمائة. المستأجر يتحمل فواتير الكهرباء والمياه.',
    'lease:vehicle': 'المؤجر محمد أحمد علي، رقمه القومي 27503031234567، يسكن 5 شارع النيل الدقي الجيزة. المستأجر هاني سمير فؤاد، رقمه القومي 29207071234567، يسكن 10 شارع الهرم فيصل. أجّر سيارة تويوتا كورولا موديل 2023 لوحات أ ب ج 123. مدة الإيجار 3 أيام تبدأ من 1/3/2027 الساعة 10 صباحا. الأجرة 1500 جنيه في اليوم تدفع عند الاستلام. وديعة تأمين 5000 جنيه. التأمين شامل. المستأجر يتحمل البنزين ومخالفات المرور. قراءة العداد 45000 كيلومتر. معاه رخصة قيادة رقم 123456. التأخير في الرد 500 جنيه عن كل يوم. الشرط الجزائي 3000 جنيه.',
    'sale:vehicle': 'البائع محمد أحمد علي، رقمه القومي 27503031234567، يسكن 5 شارع النيل الدقي الجيزة. المشتري هاني سمير فؤاد، رقمه القومي 29207071234567. باع سيارة تويوتا كورولا موديل 2023 لوحات أ ب ج 123. الثمن 450000 جنيه. المشتري دفع 100000 جنيه مقدم والباقي عند التسليم. التسليم بتاريخ 1/4/2027. معاه رخصة السيارة. قراءة العداد 45000 كيلومتر. الشرط الجزائي 10000 جنيه.',

    'lease:equipment': 'المؤجر محمد أحمد علي، رقمه القومي 27503031234567، يسكن 5 شارع النيل الدقي الجيزة. المستأجر هاني سمير فؤاد، رقمه القومي 29207071234567، يسكن 10 شارع الهرم فيصل. أجّر ماكينة تصوير ريكو رقم 5566. مدة الإيجار سنة تبدأ من 1/5/2027. الأجرة 2000 جنيه شهريا تدفع أول كل شهر. وديعة تأمين 4000 جنيه. الشرط الجزائي 5000 جنيه.',
    'sale:equipment': 'البائع محمد أحمد علي، رقمه القومي 27503031234567، يسكن 5 شارع النيل الدقي الجيزة. المشتري هاني سمير فؤاد، رقمه القومي 29207071234567، يسكن 10 شارع الهرم فيصل. باع ماكينة تصوير ريكو رقم 5566. الثمن 25000 جنيه. المشتري دفع 5000 جنيه مقدم والباقي عند التسليم. التسليم بتاريخ 1/5/2027. الشرط الجزائي 3000 جنيه.',
    'lease:other': 'المؤجر محمد أحمد علي، رقمه القومي 27503031234567، يسكن 5 شارع النيل الدقي الجيزة. المستأجر هاني سمير فؤاد، رقمه القومي 29207071234567، يسكن 10 شارع الهرم فيصل. أجّر موبايل ايفون 15 برو. مدة الإيجار 6 أشهر تبدأ من 1/2/2027. الأجرة 500 جنيه شهريا تدفع أول كل شهر. وديعة تأمين 2000 جنيه. الشرط الجزائي 1500 جنيه.',
    'sale:other': 'البائع محمد أحمد علي، رقمه القومي 27503031234567، يسكن 5 شارع النيل الدقي الجيزة. المشتري هاني سمير فؤاد، رقمه القومي 29207071234567، يسكن 10 شارع الهرم فيصل. باع موبايل ايفون 15 برو. الثمن 40000 جنيه. التسليم عند التوقيع. الشرط الجزائي 2000 جنيه.',};

const norm = (s        ) => s
    .replace(/[٠-٩]/g, (d) => String('٠١٢٣٤٥٦٧٨٩'.indexOf(d)))
    .replace(/[أإآ]/g, 'ا').replace(/ى/g, 'ي').replace(/ة/g, 'ه')
    .replace(/[\u064B-\u0652\u0640]/g, '')
    .replace(/(المستاجر|المؤجر|البايع|البائع|المشتري|المالك)ه(?=\s|$)/g, '$1 ');

const MARKS = 'ال?بايع|البائع|المشتري|المؤجر|المستاجر|المالك|الطرف|باع|ب?يبيع|اجر|ب?يؤجر|ل?لمشتري|للمستاجر|ثمنه|ثمنها|سعرها|سعره|المبيع|بمبلغ|بثمن|بسعر|سعر|ثمن|الثمن|(?:ال)?مده|لمده|(?:ال)?اجره|اجرتها|بااجره|بايجار|بالايجار|الايجار|ايجارها|ايجار|(?:ال)?تامين|(?:ال)?زياده|(?:ال)?تسليم|العقد(?=\\s+مسجل)|عقد(?=\\s+(?:تملك|التملك|سابق|البيع|بيع))';
const PROPW = '(?:ال)?(?:شقه|عقار|ارض|سياره|عربيه|موتوسيكل|دراجه|شاحنه|اتوبيس|تريلا|محل|وحده|فيلا|مخزن|قطعه|منزل|بيت|دكان|مكتب|عياده|مصنع|مزرعه|ماكينه|معدات|معدة|جهاز|اثاث|تجهيزات|موتور|كمبروسر|موبايل|هاتف|تليفون|لابتوب|كمبيوتر|تابلت)';
const SALE_VERBS = '|(?<=جنيه\\s)(?:كاش|نقدا|نقدي)|ب?يدفع|ت?ب?تدفع|ب?يسدد|ب?تسدد|الدفع|السداد|دفع|ملكيه|ملكية|(?:ال)?شرط\\s+(?:ال)?جزائي|(?:ال)?تعويض\\s+(?:ال)?اتفاقي|(?:ال)?مقدم(?=\\s+\\d)|ال?باقي(?=\\s+(?:على|يتقسط|اقساط))';

                                    

function segments(text        , kind      )        {
    const n = norm(text);
    const marks = MARKS + (kind === 'sale' ? SALE_VERBS : '');
    const re = new RegExp('(?<!المشتري)(?<!المستاجر)(?<!باسم)(?<!دفع)(?<!دفعت)(?<!يدفع)(?<!لمده)(?<!مده)(?<!كل)(?<!العقد)(?<!قطعه)(?<!ملكيه)(?<!رخصه)(?<!ترخيص)\\s+و?(?=(?:(?:' + marks + ')|(?<!الدور\\s+\\S+\\s)(?<!الدول\\s)(?<!باسم\\s)(?:' + PROPW + '))(?=\\s|$))|(?<!كل)(?<!لمده)(?<!مده)(?<!العقد)\\s+(?=(?:\\d+\\s+(?:سنه|سنوات|اشهر)|سنتين|سنه\\s+واحده)(?=\\s|$))|(?:\\.(?!\\d)|(?<!\\d)\\.|[\\n؟!])+', 'g');
    const out        = [];
    let last = 0;
    let m                        ;
    const push = (a        , b        ) => { const o = text.slice(a, b).replace(/^[\s،,:;-]+|[\s،,:;-]+$/g, ''); if (o) out.push({ o, n: norm(o) }); };
    while ((m = re.exec(n))) { if (m[0].length === 0) { re.lastIndex++; continue; } push(last, m.index); last = m.index + m[0].length; }
    push(last, text.length);
    return out;
}

function party(text        , strong        , weak        )         {
    const n = norm(text);
    const mk = (words        ) => new RegExp('(?:' + words + ')\\s*(?:هو|هي|اسمه|الاسم|:|-)?\\s*(?:السيده|السيد|الاستاذه|الاستاذ|الدكتور|الدكتوره)?\\s*([^،,.\\n؛;]+?)(?=\\s+(?:رقم\\S*|ورقم\\S*|يسكن|ساكن\\S*|عنوان\\S*|اللي|وهو|وهي|\\d|مقيم|ومقيم|بطاق\\S*|يحمل|اتفق\\S*|و?(?:ال?مشتري|المستاجر|الطرف|ال?بايع|البائع|المؤجر)(?=\\s|$)|و?(?:ال)?(?:شقه|عقار|ارض|سياره|محل|وحده|فيلا|مخزن|مكتب|عياده|مصنع|مزرعه|منزل|بيت|دكان|باع|يبيع|اجر|يؤجر|بمبلغ|بثمن|لمده|مده|الاجره|بايجار|ايجار|ايجارها|الايجار|اجره|اجرتها)(?=\\s|$))|[،,.\\n؛;]|$)');
    const m = mk(strong).exec(n) || mk(weak).exec(n);
    if (!m || !m[1]) return '';
    const start = m.index + m[0].lastIndexOf(m[1]);
    return text.slice(start, start + m[1].length).trim().replace(/^باسم\s+(?:السيد\s+)?/, '').replace(/^الوكيل\s+/, '');
}


const D = (s        ) => s.replace(/٫/g, '.').replace(/[٠-٩]/g, (d) => String('٠١٢٣٤٥٦٧٨٩'.indexOf(d)));
const NW                         = {};
const addNW = (v        , ws        ) => ws.split(' ').forEach((w) => { NW[w] = v; });
addNW(1, 'واحد واحده'); addNW(2, 'اتنين اثنين اثنان اتنان'); addNW(3, 'تلاته ثلاثه تلات ثلاث تلت'); addNW(4, 'اربعه اربع'); addNW(5, 'خمسه خمس');
addNW(6, 'سته ست'); addNW(7, 'سبعه سبع'); addNW(8, 'تمانيه ثمانيه تمن ثمان'); addNW(9, 'تسعه تسع'); addNW(10, 'عشره عشر');
addNW(11, 'احداشر حداشر'); addNW(12, 'اتناشر اثناشر'); addNW(13, 'تلتاشر ثلاثتاشر'); addNW(14, 'اربعتاشر'); addNW(15, 'خمستاشر'); addNW(16, 'ستاشر'); addNW(17, 'سبعتاشر'); addNW(18, 'تمنتاشر'); addNW(19, 'تسعتاشر');
addNW(1, 'احد احدى'); addNW(2, 'اثنا اثني اثنتا اثنتي'); addNW(20, 'عشرون'); addNW(30, 'ثلاثون'); addNW(40, 'اربعون'); addNW(50, 'خمسون'); addNW(60, 'ستون'); addNW(70, 'سبعون'); addNW(80, 'ثمانون'); addNW(90, 'تسعون'); addNW(200, 'مائتان مئتان مائتا مئتا'); addNW(300, 'ثلاثمئه'); addNW(400, 'اربعمئه'); addNW(500, 'خمسمئه'); addNW(600, 'ستمئه'); addNW(700, 'سبعمئه'); addNW(800, 'ثمانمئه'); addNW(900, 'تسعمئه');
addNW(20, 'عشرين'); addNW(30, 'تلاتين ثلاثين'); addNW(40, 'اربعين'); addNW(50, 'خمسين'); addNW(60, 'ستين'); addNW(70, 'سبعين'); addNW(80, 'تمانين ثمانين'); addNW(90, 'تسعين');
addNW(300, 'تلتميت تلاتميت ثلاثميت'); addNW(400, 'ربعميت اربعميت'); addNW(500, 'خمسميت'); addNW(600, 'ستميت'); addNW(700, 'سبعميت'); addNW(800, 'تمنميت ثمانميت'); addNW(900, 'تسعميت');
addNW(100, 'ميه مايه مائه مئه ميت مئة مائة مية'); addNW(200, 'ميتين مائتين مئتين'); addNW(300, 'تلتميه تلتمايه ثلاثمائه ثلاثميه تلاتميه'); addNW(400, 'ربعميه اربعمائه اربعميه ربعمايه'); addNW(500, 'خمسميه خمسمائه خمسمايه');
addNW(600, 'ستميه ستمائه ستمايه'); addNW(700, 'سبعميه سبعمائه سبعمايه'); addNW(800, 'تمنميه ثمانمائه تمانميه تمنمايه'); addNW(900, 'تسعميه تسعمائه تسعمايه');
const MULT                         = { الف: 1000, الفا: 1000, الاف: 1000, الفين: 2000, الفان: 2000, مليون: 1000000, ملايين: 1000000, مليونين: 2000000, مليونان: 2000000 };
const isNumTok = (t        ) => { const b = t.replace(/^و/, ''); return /^\d[\d,]*(?:\.\d+)?$/.test(b) || b in NW || b in MULT || b === 'نص' || b === 'نصف' || b === 'ربع'; };
function numFrom(toks          )         {
    let total = 0, cur = 0, last = 0;
    for (let ti = 0; ti < toks.length; ti++) {
        const t = toks[ti];
        const b = t.replace(/^و/, '');
        const nb = (toks[ti + 1] || '').replace(/^و/, '');
        if ((b === 'نص' || b === 'نصف' || b === 'ربع') && !last && (nb in MULT) && nb !== 'الفين' && nb !== 'الفان' && nb !== 'مليونين' && nb !== 'مليونان') { cur += b === 'ربع' ? 0.25 : 0.5; continue; }
        if (/^\d/.test(b)) cur += parseFloat(b.replace(/,/g, ''));
        else if (b in NW) cur += NW[b];
        else if (b === 'الفين' || b === 'الفان' || b === 'مليونين' || b === 'مليونان') { total += MULT[b]; last = MULT[b] / 2; cur = 0; }
        else if (b in MULT) { total += (cur || 1) * MULT[b]; last = MULT[b]; cur = 0; }
        else if ((b === 'نص' || b === 'نصف') && last) { total += last / 2; last = 0; }
        else if (b === 'ربع' && last) { total += last / 4; last = 0; }
    }
    return total + cur;
}
const toks = (n        ) => n.replace(/(\d)\.(\d)/g, '$1\u0001$2').replace(/[،,؛;.]/g, ' ').replace(/\u0001/g, '.').split(/\s+/).filter(Boolean);
const joinW = (t          )           => { const o           = []; for (let i = 0; i < t.length; i++) { if (t[i] === 'و' && t[i + 1] && isNumTok(t[i + 1])) { o.push('و' + t[i + 1]); i++; } else o.push(t[i]); } return o; };
const ONES = ['', 'واحد', 'اثنان', 'ثلاثة', 'أربعة', 'خمسة', 'ستة', 'سبعة', 'ثمانية', 'تسعة', 'عشرة', 'أحد عشر', 'اثنا عشر', 'ثلاثة عشر', 'أربعة عشر', 'خمسة عشر', 'ستة عشر', 'سبعة عشر', 'ثمانية عشر', 'تسعة عشر'];
const TENS = ['', '', 'عشرون', 'ثلاثون', 'أربعون', 'خمسون', 'ستون', 'سبعون', 'ثمانون', 'تسعون'];
const HUND = ['', 'مائة', 'مائتان', 'ثلاثمائة', 'أربعمائة', 'خمسمائة', 'ستمائة', 'سبعمائة', 'ثمانمائة', 'تسعمائة'];
function below1000(n        )         {
    const h = Math.floor(n / 100), r = n % 100, parts           = [];
    if (h) parts.push(HUND[h]);
    if (r) parts.push(r < 20 ? ONES[r] : (r % 10 ? ONES[r % 10] + ' و' : '') + TENS[Math.floor(r / 10)]);
    return parts.join(' و');
}
function scale(n        , one        , two        , few        , many        )         {
    if (n === 1) return one;
    if (n === 2) return two;
    if (n >= 3 && n <= 10) return ONES[n] + ' ' + few;
    if (n % 100 === 0) return (n === 200 ? 'مائتا' : below1000(n)) + ' ' + one;
    const r = n % 100, h = n - r;
    if (h && r === 1) return below1000(h) + ' وواحد ' + one;
    if (h && r === 2) return below1000(h) + ' واثنان ' + one;
    if (h && r >= 3 && r <= 10) return below1000(h) + ' و' + ONES[r] + ' ' + few;
    return below1000(n) + ' ' + many;
}
function wordsAr(v        )         {
    if (!Number.isFinite(v) || v <= 0 || v >= 1e12 || !Number.isInteger(v)) return '';
    const parts           = [];
    const bn = Math.floor(v / 1e9), mn = Math.floor((v % 1e9) / 1e6), th = Math.floor((v % 1e6) / 1e3), rest = v % 1000;
    if (bn) parts.push(scale(bn, 'مليار', 'ملياران', 'مليارات', 'مليارًا'));
    if (mn) parts.push(scale(mn, 'مليون', 'مليونان', 'ملايين', 'مليونًا'));
    if (th) parts.push(scale(th, 'ألف', 'ألفان', 'آلاف', 'ألفًا'));
    if (rest) parts.push(below1000(rest));
    return parts.join(' و');
}
const fmtMoney = (v        ) => v.toLocaleString('en-US') + ' جنيه مصري';
const fmtN = (t        ) => (t || '').replace(/(?<![\d,.\/])(\d{4,})(?![\d\/])/g, (m0) => m0.replace(/\B(?=(\d{3})+(?!\d))/g, ','));
const withWords = (m        )         => {
    const x = /^([\d,]+) جنيه مصري/.exec(m || '');
    if (!x) return m;
    const w = wordsAr(Number(x[1].replace(/,/g, ''))).replace(/(ألف|مليون|مليار)ًا$/, '$1');
    return w ? x[1] + ' جنيه مصري (فقط ' + w + ' جنيه مصري لا غير)' + m.slice(x[0].length) : m;
};
const FIX                     = [['الاقساط', 'الأقساط'], ['الارضي', 'الأرضي'], ['الاصلي', 'الأصلي'], ['الاصليه', 'الأصلية'], ['ورخصه', 'ورخصة'], ['تتدفع', 'تدفع'], ['كاش', 'نقدًا'], ['ارض', 'أرض'], ['الارض', 'الأرض'], ['الاول', 'الأول'], ['الاولى', 'الأولى'], ['الاولي', 'الأولى'], ['التالت', 'الثالث'], ['التالته', 'الثالثة'], ['التاني', 'الثاني'], ['الرابع', 'الرابع'], ['الاجره', 'الأجرة'], ['الايجار', 'الإيجار'], ['ايجار', 'إيجار'], ['اجره', 'أجرة'], ['الاسكندريه', 'الإسكندرية'], ['الاسكندرية', 'الإسكندرية'], ['اول', 'أول'], ['اخر', 'آخر'], ['الاخير', 'الأخير'], ['اقساط', 'أقساط'], ['اشهر', 'أشهر'], ['الاف', 'ألف'], ['الف', 'ألف'], ['مقدما', 'مقدمًا'], ['نقدا', 'نقدًا'], ['النص', 'النصف'], ['نص', 'نصف'], ['بيدفع', 'يدفع'], ['بتدفع', 'تدفع'], ['تلتمية', 'ثلاثمائة'], ['تلتميه', 'ثلاثمائة'], ['مية', 'مائة'], ['ميه', 'مائة'], ['مايه', 'مائة'], ['خمسمية', 'خمسمائة'], ['خمسميه', 'خمسمائة'], ['ربعمية', 'أربعمائة'], ['الشقه', 'الشقة'], ['الارضيه', 'الأرضية'], ['اتفاق', 'اتفاق'], ['المستاجر', 'المستأجر'], ['المؤجر', 'المؤجر'], ['التسليم', 'التسليم'], ['اللي', 'الذي'], ['عمارة', 'عمارة'], ['الاكتر', 'الأكثر'], ['التمن', 'الثمن'], ['تمن', 'ثمن'], ['شهريه', 'شهرية'], ['شهريا', 'شهريًا'], ['سنويا', 'سنويًا'], ['كاملا', 'كاملًا'], ['اسبوع', 'أسبوع'], ['اسبوعين', 'أسبوعين'], ['ثلاثه', 'ثلاثة'], ['تلاته', 'ثلاثة'], ['خمسه', 'خمسة'], ['ستة', 'ستة'], ['سته', 'ستة'], ['عشره', 'عشرة'], ['الدور', 'الدور'], ['اتنين', 'اثنين'], ['وقت', 'وقت'], ['الاستلام', 'الاستلام'], ['استلام', 'استلام'], ['التوقيع', 'التوقيع'], ['عاين', 'عاين'], ['الاتفاق', 'الاتفاق']];
const FIXMAP = new Map(FIX.filter(([a, b]) => a !== b));
function fixText(t        )         {
    return D(t).replace(/(^|[\s،(])([وبلفك]?)([\u0621-\u064A]+)(?=$|[\s،.)؛:])/g, (m, pre, pf, w) => {
        if (FIXMAP.has(w)) return pre + pf + FIXMAP.get(w);
        if (pf && FIXMAP.has(pf + w)) return pre + FIXMAP.get(pf + w);
        return m;
    }).replace(/(^|[\s،])(بالشهر|بالدور)\s+(?:الاول)/g, '$1$2 الأول');
}

function money(s     )         {
    const t = joinW(toks(D(s.n).replace(/(\d),(\d)/g, '$1$2')));
    let ci = t.findIndex((x) => /^(?:جنيه|جنيها|جنيهات|جنية|ج|ج\.م)$/.test(x));
    let end = ci;
    if (ci < 0) { const lead = t.findIndex((x) => /^(?:الثمن|ثمن|ثمنه|ثمنها|سعرها|سعره|بمبلغ|بثمن|بسعر|سعر|مبلغ|الاجره|اجره|اجرتها|بايجار|ايجار|ايجارها|الايجار|بااجره|بالايجار)$/.test(x)); if (lead < 0) return ''; end = t.length; ci = lead + 1; }
    let i = end - 1; const run           = [];
    while (i >= 0 && isNumTok(t[i])) { run.unshift(t[i]); i--; }
    if (end === t.length) { run.length = 0; i = ci; while (i < t.length && isNumTok(t[i])) { run.push(t[i]); i++; } }
    const v = numFrom(run);
    const hasW = (re        ) => re.test(s.n);
    if (hasW(/(?:^|\s)(?:حوالي|تقريبا|تقريب|حدود|يمكن|ممكن|او)(?:\s|$)/)) return '';
    const frac = hasW(/(?:^|\s)(?:نص|نصف|ربع)(?:\s|$)/);
    if (!frac && hasW(/(?:^|\s)(?:مليون|ملايين|مليونين)(?:\s|$)/) && v < 1000000) return '';
    if (!frac && hasW(/(?:^|\s)(?:الف|الفا|الاف|الفين|الفان)(?:\s|$)/) && v < 1000) return '';
    return v > 0 && v <= 1e12 ? fmtMoney(v) : '';
}

function durOf(n        )                                    {
    let t = joinW(toks(D(n)));
    const cut = t.findIndex((w, i) => i > 0 && /^و?(?:بقيمه|بقيمة|بايجار|بالايجار|الايجار|ايجار|الاجره|اجره|بااجره|تدفع|بتدفع|يدفع|مقدما|بمبلغ|جنيه|شهريا|كل|التامين|تامين|بتامين)$/.test(w));
    if (cut > 0) t = t.slice(0, cut);
    let y = 0, m = 0;
    for (let i = 0; i < t.length; i++) {
        const w = t[i].replace(/^و/, '');
        if (w === 'سنتين' || w === 'عامين') { y += 2; if (t[i + 1] && /^و?(?:نص|نصف)$/.test(t[i + 1])) m += 6; continue; }
        if (w === 'شهرين') { m += 2; continue; }
        if (/^(?:سنه|سنوات|سنين|عام|اعوام)$/.test(w)) {
            let j = i - 1; const run           = [];
            while (j >= 0 && isNumTok(t[j])) { run.unshift(t[j]); j--; }
            y += run.length ? numFrom(run) : 1;
            if (t[i + 1] && /^و?(?:نص|نصف)$/.test(t[i + 1])) m += 6;
            continue;
        }
        if (/^(?:شهر|شهور|اشهر)$/.test(w)) {
            let j = i - 1; const run           = [];
            while (j >= 0 && isNumTok(t[j])) { run.unshift(t[j]); j--; }
            m += run.length ? numFrom(run) : 1;
        }
    }
    const tm = Math.round(y * 12 + m);
    return { years: Math.floor(tm / 12), months: tm % 12 };
}
function durText(d                                   )         {
    const YW = ['', '', '', 'ثلاث', 'أربع', 'خمس', 'ست', 'سبع', 'ثماني', 'تسع', 'عشر'], MW = ['', '', '', 'ثلاثة', 'أربعة', 'خمسة', 'ستة', 'سبعة', 'ثمانية', 'تسعة', 'عشرة'];
    const ys = d.years === 0 ? '' : d.years === 1 ? 'سنة واحدة' : d.years === 2 ? 'سنتين' : d.years <= 10 ? YW[d.years] + ' سنوات' : d.years + ' سنة';
    const ms = d.months === 0 ? '' : d.months === 1 ? 'شهر واحد' : d.months === 2 ? 'شهرين' : d.months <= 10 ? MW[d.months] + ' أشهر' : d.months + ' شهرًا';
    return [ys, ms].filter(Boolean).join(' و');
}
const realDate = (d        , mo        , y        ) => { const t = new Date(Date.UTC(y, mo - 1, d)); return mo >= 1 && mo <= 12 && d >= 1 && t.getUTCFullYear() === y && t.getUTCMonth() === mo - 1 && t.getUTCDate() === d; };
const hasBadDate = (raw        ) => { const n = D(norm(raw)); const re = /(?<!\d)(\d{1,2})\s*[\/\-.]\s*(\d{1,2})\s*[\/\-.]\s*(\d{4})(?!\d)/g; let m; while ((m = re.exec(n))) if (!realDate(Number(m[1]), Number(m[2]), Number(m[3]))) return true; return false; };
function dateOf(raw        )         {
    const n = D(norm(raw));
    const iso = /(?<!\d)(\d{4})\s*[\/\-.]\s*(\d{1,2})\s*[\/\-.]\s*(\d{1,2})(?!\d)/.exec(n);
    if (iso) return realDate(Number(iso[3]), Number(iso[2]), Number(iso[1])) ? Number(iso[3]) + '/' + Number(iso[2]) + '/' + iso[1] : '';
    let m = /(?<!\d)(\d{1,2})\s*[\/\-.]\s*(\d{1,2})\s*[\/\-.]\s*(\d{4})(?!\d)/.exec(n);
    if (m) return realDate(Number(m[1]), Number(m[2]), Number(m[3])) ? Number(m[1]) + '/' + Number(m[2]) + '/' + m[3] : '';
    m = /(?<!\d)(\d{1,2}|اول)?\s*(?:من\s+)?(يناير|فبراير|مارس|ابريل|مايو|يونيو|يوليو|اغسطس|سبتمبر|اكتوبر|نوفمبر|ديسمبر)\s*(\d{4})?/.exec(n);
    if (m && (m[1] || m[3])) return (m[1] ? (m[1] === 'اول' ? 1 : Number(m[1])) + ' ' : '') + m[2].replace('ابريل', 'أبريل').replace('اغسطس', 'أغسطس').replace('اكتوبر', 'أكتوبر') + (m[3] ? ' ' + m[3] : '');
    return '';
}

                                     
                                                                                         

const PROP = /(شقه|عقار|ارض|سياره|محل|وحده|مبيع|فيلا|مخزن|قطعه|منزل|بيت|دكان|مكتب|عياده|مصنع|مزرعه|عين مؤجره|العين)/;
const PARTY_START = /^(و?ال?بايع|و?البائع|و?المشتري|و?المؤجر|و?المستاجر|و?المالك|و?الطرف)/;

function addDur(start        , d        )         {
    const m = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(start || '');
    if (!m) return '';
    const dt = new Date(Date.UTC(Number(m[3]), Number(m[2]) - 1, Number(m[1])));
    dt.setUTCFullYear(dt.getUTCFullYear() + (d.years || 0));
    dt.setUTCMonth(dt.getUTCMonth() + (d.months || 0));
    dt.setUTCDate(dt.getUTCDate() + (d.days || 0) + Math.floor((d.hours || 0) / 24));
    return dt.getUTCDate() + '/' + (dt.getUTCMonth() + 1) + '/' + dt.getUTCFullYear();
}
function durParts(n        )                                                               {
    let t = joinW(toks(D(n)));
    const cut = t.findIndex((w, i) => i > 0 && /^و?(?:تبدا|من|بتاريخ|بقيمه|بايجار|جنيه|تدفع|بتدفع|يدفع|مقدما|التامين|تامين|وديعه|الشرط|شرط|عند)$/.test(w));
    if (cut > 0) t = t.slice(0, cut);
    const before = (i        ) => { let j = i - 1; const run           = []; while (j >= 0 && isNumTok(t[j])) { run.unshift(t[j]); j--; } return run.length ? numFrom(run) : 1; };
    let y = 0, m = 0, days = 0, hours = 0;
    for (let i = 0; i < t.length; i++) {
        const w = t[i].replace(/^و/, '');
        if (w === 'سنتين' || w === 'عامين') { y += 2; if (t[i + 1] && /^و?(?:نص|نصف)$/.test(t[i + 1])) m += 6; continue; }
        if (w === 'شهرين') { m += 2; continue; }
        if (w === 'يومين') { days += 2; continue; }
        if (w === 'ساعتين') { hours += 2; continue; }
        if (w === 'اسبوعين') { days += 14; continue; }
        if (/^(?:سنه|سنوات|سنين|عام|اعوام)$/.test(w)) { y += before(i); if (t[i + 1] && /^و?(?:نص|نصف)$/.test(t[i + 1])) m += 6; continue; }
        if (/^(?:شهر|شهور|اشهر)$/.test(w)) { m += before(i); continue; }
        if (/^(?:يوم|ايام)$/.test(w)) { days += before(i); continue; }
        if (/^(?:ساعه|ساعات)$/.test(w)) { hours += before(i); continue; }
        if (/^(?:اسبوع|اسابيع)$/.test(w)) { days += before(i) * 7; }
    }
    const tm = Math.round(y * 12 + m);
    return { years: Math.floor(tm / 12), months: tm % 12, days, hours };
}
function durFromText(t        )         {
    const n = norm(t);
    const m = /((?:\d+|واحد|اثنين|اتنين|ثلاث|تلات|اربع|خمس|ست|سبع|ثمان|تسع|عشر|نصف|نص)\s*(?:يوم|ايام|شهر|شهور|اشهر|سنه|سنوات|سنين|عام|اعوام|اسبوع|اسابيع|ساعه|ساعات)|سنتين|عامين|شهرين|يومين|اسبوعين|ساعتين)/.exec(n);
    return m ? durTextAll(durParts(m[1])) : '';
}
function durTextAll(d                                                                  )         {
    const DW = ['', '', '', 'ثلاثة', 'أربعة', 'خمسة', 'ستة', 'سبعة', 'ثمانية', 'تسعة', 'عشرة'];
    const HW = ['', '', '', 'ثلاث', 'أربع', 'خمس', 'ست', 'سبع', 'ثماني', 'تسع', 'عشر'];
    const ym = durText({ years: d.years, months: d.months });
    const ds = !d.days ? '' : d.days === 1 ? 'يوم واحد' : d.days === 2 ? 'يومين' : d.days <= 10 ? DW[d.days] + ' أيام' : d.days + ' يومًا';
    const hs = !d.hours ? '' : d.hours === 1 ? 'ساعة واحدة' : d.hours === 2 ? 'ساعتين' : d.hours <= 10 ? HW[d.hours] + ' ساعات' : d.hours + ' ساعة';
    return [ym, ds, hs].filter(Boolean).join(' و');
}
function detectAsset(text        )         {
    const t = norm(text);
    if (/(سياره|عربيه|موتوسيكل|دراجه|شاحنه|اتوبيس|تريلا|سيارات)/.test(t)) return 'vehicle';
    if (/(ارض|فدان|قيراط|مزرعه|حوض)/.test(t)) return 'land';
    if (/(محل|دكان|مكتب|مخزن|مستودع|مصنع|عياده|معرض|ورشه)/.test(t)) return 'shop';
    if (/(شقه|فيلا|منزل|بيت|عقار|وحده|بدروم|دوبلكس)/.test(t)) return 'home';
    if (/(معدات|ماكينه|معدة|جهاز|اثاث|تجهيزات|خط انتاج|موتور|كمبروسر)/.test(t)) return 'equipment';
    return 'other';
}

function parse(kind      , rawText        , cls        ) {
    const text = rawText.replace(/[\u064B-\u0652\u0640]/g, '').replace(/(\d{1,2})\.(\d{1,2})\.(\d{4})/g, '$1/$2/$3').replace(/(?<![\u0621-\u064A])([وبل]?(?:ال)?)(مشتريين|مشترين|مشتريان|مشترون)(?![\u0621-\u064A])/g, '$1مشتري');
    const ss = segments(text, kind);
    const find = (re        , skip                      = []) => ss.find((s) => re.test(s.n) && !skip.includes(s));
    const p         = {};
    const sale = kind === 'sale';
    const veh = cls === 'vehicle';
    const realty = cls === 'home' || cls === 'shop' || cls === 'land';
    const movable = !realty;
    p.p1 = sale ? party(text, 'ال?بايع|البائع', 'الطرف الاول') : party(text, 'المؤجر', 'الطرف الاول|المالك');
    p.p2 = sale ? party(text, 'ل?المشتري|للمشتري', 'الطرف الثاني|الطرف التاني') : party(text, 'للمستاجر|ل?المستاجر', 'الطرف الثاني|الطرف التاني');
    const idSeg = (re        ) => { const seg = ss.find((s) => re.test(s.n) && /\d{14}/.test(s.n)); const m = seg ? /\d{14}/.exec(seg.n) : null; return m ? m[0] : ''; };
    const NAMEFIX                         = { احمد: 'أحمد', ابراهيم: 'إبراهيم', اسماعيل: 'إسماعيل', ايمان: 'إيمان', اسلام: 'إسلام', ابو: 'أبو', امين: 'أمين', انور: 'أنور', ايهاب: 'إيهاب', اشرف: 'أشرف', ادم: 'آدم', الاء: 'آلاء', اميره: 'أميرة', امير: 'أمير', اسماء: 'أسماء', ايه: 'آية', امل: 'أمل', الامل: 'الأمل', اسامه: 'أسامة', ايناس: 'إيناس', ابتسام: 'ابتسام', ياسمين: 'ياسمين', عبدالله: 'عبد الله', عبدالرحمن: 'عبد الرحمن', عبدالعزيز: 'عبد العزيز', عبدالعظيم: 'عبد العظيم' };
    const fixName = (v        ) => v.split(/(\s+)/).map((w) => NAMEFIX[w] || w).join('');
    p.p1 = fixName(p.p1); p.p2 = fixName(p.p2);
    p.id1 = sale ? idSeg(/^و?(?:ال?بايع|البائع)/) || idSeg(/^الطرف الاول/) : idSeg(/^و?(?:المؤجر|المالك)/) || idSeg(/^الطرف الاول/);
    p.id2 = sale ? idSeg(/^و?(?:المشتري|للمشتري)/) || idSeg(/^الطرف الثاني/) : idSeg(/^و?(?:المستاجر|للمستاجر)/) || idSeg(/^الطرف الثاني/);
    const addr = (re        ) => { const seg = ss.find((x) => re.test(x.n)); if (!seg) return ''; const m = /(?:يسكن|ساكن[ةه]?|مقيم[ةه]?|ومقيم[ةه]?|تسكن|يقيم|عنوانه|عنوانها|العنوان)\s*(?:في|ب)?\s*([^،.]+)/.exec(seg.o.replace(/\d{14}/g, '')); return m ? m[1].replace(/\s+(?:رقمه|رقمها|ورقم\S*|بطاقت\S*)\b.*$/, '').trim() : ''; };
    p.addr1 = sale ? addr(/^و?(?:ال?بايع|البائع)/) : addr(/^و?(?:المؤجر|المالك)/);
    p.addr2 = sale ? addr(/^و?(?:المشتري|للمشتري)/) : addr(/^و?(?:المستاجر|للمستاجر)/);
    const fem = (re        ) => { const sg = ss.find((x) => re.test(x.n)); return sg && /(رقمها|بطاقتها|ساكنه|مقيمه|هي)(?=\s|$)/.test(sg.n) ? 'y' : ''; };
    const mal = (re        ) => { const sg = ss.find((x) => re.test(x.n)); return sg && /(رقمه|بطاقته|يسكن|ساكن|مقيم|هو|عنوانه)(?=\s|$)/.test(sg.n) ? 'y' : ''; };
    const R1 = sale ? /^و?(?:ال?بايع|البائع)/ : /^و?(?:المؤجر|المالك)/, R2 = sale ? /^و?(?:المشتري|للمشتري)/ : /^و?(?:المستاجر|للمستاجر)/;
    p.m1 = mal(R1); p.m2 = mal(R2);
    p.f1 = /(?:المؤجره|المؤجرة|البايعه|البايعة|البائعة|البائعه)(?=\s|$)/.test(text) || fem(R1) ? 'y' : '';
    p.f2 = /(?:المستأجره|المستأجرة|المشتريه|المشترية)(?=\s|$)/.test(text) || fem(R2) ? 'y' : '';
    if (!p.id1 || !p.id2) {
        const nt0 = norm(text), r1 = new RegExp(sale ? '(?:ال?بايع|البائع|الطرف الاول)' : '(?:المؤجر|المالك|الطرف الاول)', 'g'), r2 = new RegExp(sale ? '(?:المشتري|للمشتري|الطرف الثاني|الطرف التاني)' : '(?:المستاجر|للمستاجر|الطرف الثاني|الطرف التاني)', 'g');
        const pos = (re        ) => { const a           = []; let mm                        ; while ((mm = re.exec(nt0))) a.push(mm.index); return a; };
        const a1 = pos(r1), a2 = pos(r2), ids = [...nt0.matchAll(/\d{14}/g)];
        for (const idm of ids) {
            const b1 = Math.max(-1, ...a1.filter((x) => x < (idm.index          ))), b2 = Math.max(-1, ...a2.filter((x) => x < (idm.index          )));
            if (b1 > b2 && !p.id1) p.id1 = idm[0]; else if (b2 > b1 && !p.id2) p.id2 = idm[0];
        }
    }
    const propSeg = ss.find((s) => !PARTY_START.test(s.n) && /^(?:(?:المبيع|العين|عين|باع|اجر|يبيع|يؤجر)\s+)?(?:ل(?:ه|ها|هم|ك)\s+)?(?:(?:هو|هي)\s+)?(?:ال)?(?:شقه|عقار|ارض|سياره|عربيه|موتوسيكل|دراجه|شاحنه|اتوبيس|تريلا|محل|وحده|فيلا|مخزن|قطعه|منزل|بيت|دكان|مكتب|عياده|مصنع|مزرعه|ماكينه|معدات|معدة|جهاز|اثاث|تجهيزات|موتور|كمبروسر|موبايل|هاتف|تليفون|لابتوب|كمبيوتر|تابلت)(?=\s|$)/.test(s.n));
    p.property = propSeg ? propSeg.o.replace(/^(?:باع|يبيع|بيع|أجّر|أجر|اجر|يؤجر|المبيع|العين المؤجرة|العين)\s*(?:هو|هي)?\s*/, '').trim() : '';
    const penSeg = find(/(شرط\s+(?:ال)?جزائي|تعويض\s+(?:ال)?اتفاقي)/);
    const priceSeg = find(/^(?:الثمن|ثمن|ثمنه|ثمنها|سعرها|سعره|بمبلغ|بثمن|بسعر|سعر|مبلغ)/) || find(/جنيه/, [find(/^(?:الاجره|اجره|اجرتها|بااجره|ايجار|ايجارها|الايجار|بايجار|بالايجار)/), penSeg]);
    if (sale && movable) {
        p.price = priceSeg ? money(priceSeg) : '';
        if (priceSeg && !p.price) { const nx = ss[ss.indexOf(priceSeg) + 1]; if (nx && nx !== penSeg && !/^(?:الشرط|المقدم|الباقي|التسليم|تسليم)/.test(nx.n)) p.price = money(nx); }
        const payRe = /(مقدم|قسط|اقساط|تقسيط|عند التسليم|شيك|كاش|نقدا|نقدي|دفعه|دفع|يدفع|يسدد|سداد|الباقي)/;
        const pays = ss.filter((s) => payRe.test(s.n) && s !== priceSeg && s !== penSeg && !/^(?:التسليم|تسليم)/.test(s.n));
        const nAll = norm(text);
        p.penalty = penSeg ? money(penSeg) : '';
        p.multi = /(المشتريين|المشترين|المشتريان|المشتريات|المشترون)/.test(norm(rawText)) ? 'y' : '';
        p.equal = /(بالتساوي|مناصفه|بالتساوى)/.test(nAll) ? 'y' : '';
        p.prelim = /ابتدائي/.test(nAll) ? 'y' : '';
        p.final = /نهائي/.test(nAll) ? 'y' : '';
        p.payment = pays.map((s) => s.o).join('، ');
        p.inst = /(قسط|اقساط|تقسيط|مقدم|الباقي|مؤجل)/.test(norm(p.payment)) ? 'y' : '';
        p.fullcash = !p.inst && /(كامل|كاش|نقدا|خالص|بمجلس العقد|عند التوقيع)/.test(norm(p.payment + ' ' + text)) ? 'y' : '';
        const dels = ss.filter((x) => /^(?:التسليم|تسليم)|يستلم|استلام/.test(x.n) && !pays.includes(x)); const del = dels.sort((x, y) => y.o.length - x.o.length)[0];
        p.delivery = del && !hasBadDate(del.o) ? del.o : '';
        const pr = find(/(رخصه|عقد شراء|فاتوره|مستند|عقد تملك|ملكيه|حكم|ميراث)/);
        p.proof = pr ? fixText(pr.o).replace(/^(?:ومعاه|معاه|معايا|عنده|عندها|يحمل|حامل|بحوزته)\s+/, '') : '';
        const od = find(/(عداد|كيلومتر|كيلو)/); p.odo = od ? fmtN(fixText(od.o)).replace(/^قراء[ةه]?\s*(?:ال)?عداد\s*/, '') : '';
        const ins = find(/(تامين شامل|ضد الغير|تامين علي السياره|وثيقه تامين|تامين السياره)/); p.insurance = ins ? fixText(ins.o) : '';
        const fi = find(/(مخالفات|مخالفه|غرامات)/); p.fines = fi ? fixText(fi.o) : '';
    } else if (sale) {
        p.price = priceSeg ? money(priceSeg) : '';
        if (priceSeg && !p.price) { const nx = ss[ss.indexOf(priceSeg) + 1]; if (nx && nx !== penSeg && !/^(?:الشرط|المقدم|الباقي|التسليم|تسليم)/.test(nx.n)) p.price = money(nx); }
        const payRe = /(مقدم|قسط|اقساط|تقسيط|عند التسليم|شيك|كاش|نقدا|نقدي|دفعه|دفع|يدفع|يسدد|سداد|الباقي)/;
        const pays = ss.filter((s) => payRe.test(s.n) && s !== priceSeg && s !== penSeg && !/^(?:التسليم|تسليم)/.test(s.n));
        const nAll = norm(text);
        p.penalty = penSeg ? money(penSeg) : '';
        p.multi = /(المشتريين|المشترين|المشتريان|المشتريات|المشترون)/.test(norm(rawText)) ? 'y' : '';
        p.equal = /(بالتساوي|مناصفه|بالتساوى)/.test(nAll) ? 'y' : '';
        p.prelim = /ابتدائي/.test(nAll) ? 'y' : '';
        p.final = /نهائي/.test(nAll) ? 'y' : '';
        p.payment = pays.map((s) => s.o).join('، ');
        p.inst = /(قسط|اقساط|تقسيط|مقدم|الباقي|مؤجل)/.test(norm(p.payment)) ? 'y' : '';
        p.fullcash = !p.inst && /(كامل|كاش|نقدا|خالص|بمجلس العقد|عند التوقيع)/.test(norm(p.payment + ' ' + text)) ? 'y' : '';
        const dels = ss.filter((x) => /^(?:التسليم|تسليم)|يستلم|استلام/.test(x.n) && !pays.includes(x)); const del = dels.sort((x, y) => y.o.length - x.o.length)[0];
        p.delivery = del && !hasBadDate(del.o) ? del.o : '';
        const pr = find(/(عقد تملك|عقد سابق|مسجل|شهر عقاري|مستند|رخصه|حكم|ميراث|وراثه|اعلام وراثه|ملكيه.*(عقد|مسجل|حكم|ميراث|رخصه|مستند))/);
        p.proof = pr ? fixText(pr.o).replace(/^العقد\s+/, 'عقد ').replace(/^ملكية(?:\s+\S+)?\s+ب(?=\S)/, '') : '';
    } else if (veh) {
        const nt = norm(text);
        const rent = find(/^(?:الاجره|اجره|ايجار|الايجار|بايجار|بالايجار|قيمه الايجار)/) || find(/(الاجره|اجره|ايجار|الايجار)/, [propSeg, penSeg]) || find(/^(?:بمبلغ|مبلغ|بقيمه)/);
        p.rent = rent ? money(rent) : '';
        const rn = rent ? rent.n : '';
        p.rateUnit = /(?:في|كل)\s*(?:ال)?ساعه|بالساعه|للساعه|ساعه|ساعات/.test(rn) ? 'في الساعة'
            : /يومي|(?:في|كل)\s*(?:ال)?يوم|لليوم|باليوم|يوم/.test(rn) ? 'يوميًا'
            : /اسبوعي|(?:في|كل)\s*(?:ال)?اسبوع|بالاسبوع/.test(rn) ? 'أسبوعيًا'
            : /شهري|(?:في|كل)\s*(?:ال)?شهر|بالشهر|للشهر/.test(rn) ? 'شهريًا'
            : /سنوي|(?:في|كل)\s*(?:ال)?سنه|بالسنه|للسنه/.test(rn) ? 'سنويًا' : '';
        if (p.rent && p.rateUnit) p.rent += ' ' + p.rateUnit;
        const pm = rent ? /(?:ب?تدفع|ب?تسدد|يسدد|يدفع|مقدما|مقدم|عند الاستلام|عند التسليم|عند الرد)[^،]*/.exec(rent.o.replace(/ب(?=تدفع|تسدد)/, '')) : null;
        p.rentPay = pm ? pm[0] : '';
        const dur = find(/^(?:لمده|(?:ال)?مده|مده الايجار)/) || find(/(يوم|ايام|ساعه|ساعات|اسبوع|اسابيع)/, [rent, penSeg]) || (propSeg && /(يوم|ايام|ساعه|ساعات|اسبوع|اسابيع)/.test(propSeg.n) ? propSeg : undefined);
        const dd = dur ? durParts(dur.n) : { years: 0, months: 0, days: 0, hours: 0 };
        p.duration = durTextAll(dd) || durFromText(text);
        p.start = dateOf(dur && /(من|تبدا|بدايه|اعتبارا|ابتداء)/.test(dur.n) ? dur.o : '') || dateOf((ss.find((s) => /(تبدا|بدايه|اعتبارا|ابتداء|^من\s)/.test(s.n) && dateOf(s.o)) || { o: '' }).o) || (dur ? dateOf(dur.o) : '');
        const endS = ss.find((s) => /(تنتهي|ينتهي|حتي|لحد)/.test(s.n) && dateOf(s.o));
        p.endDate = endS ? dateOf(endS.o) : (dur ? dateOf((/(?:وتنتهي|تنتهي|حتي|لحد)\s*(?:في\s*)?([^،]+)/.exec(dur.o) || [''])[1] || '') : '');
        p.endRel = '';
        if (dd.hours && !dd.days && !dd.months && !dd.years) p.endRel = 'بعد ' + p.duration + ' من الاستلام';
        if (!p.endDate && !p.endRel && p.start && dur) { const ed0 = addDur(p.start, dd); if (ed0) p.endDate = ed0; }
        const insS = find(/(تامين شامل|ضد الغير|تامين علي السياره|وثيقه تامين|تامين اجباري|تامين السياره)/);
        p.insurance = insS ? fixText(insS.o) : '';
        const dep = find(/^(?:ال)?تامين/, [insS]) || find(/^(?:ال)?وديعه/, [insS]) || find(/(وديعه)/, [insS]);
        p.deposit = dep ? dep.o : ''; p.depositAmt = dep ? money(dep) : '';
        const fu = find(/(بنزين|وقود|سولار)/); p.fuel = fu ? fixText(fu.o) : '';
        const fi = find(/(مخالفات|مخالفه|غرامات|غرامه)/); p.fines = fi ? fixText(fi.o) : '';
        const li = find(/(رخصه قياده|رخصه السواق|رخصه القياده)/);
        p.licence = li ? ((/\d{4,}/.exec(D(li.o)) || [])[0] ? 'رقم الرخصة ' + /\d{4,}/.exec(D(li.o))[0] : fixText(li.o).replace(/^(?:معاه|معايا|عنده|عندها|يحمل|حامل)\s+/, '')) : '';
        const km = find(/(عداد|كيلومتر|كيلو|مسافه)/); p.km = km ? fmtN(fixText(km.o)).replace(/^قراء[ةه]?\s*(?:ال)?عداد\s*/, '') : '';
        const late = find(/(تاخير|متاخر|يتاخر)/); p.late = late ? (money(late) || fixText(late.o)) : '';
        const term = find(/(فسخ|الغاء|يلغي)/); p.termination = term ? fixText(term.o) : '';
        p.penalty = penSeg ? money(penSeg) : '';
        p.use = /(نقل باجر|نقل ركاب|تاكسي|اوبر|تجاري)/.test(nt) ? 'commercial' : 'personal';
        p.admin = /(وكيل|ولي|وصي|حارس|مدير|ناظر)/.test(nt) ? 'yes' : '';
    } else {
        const nt = norm(text);
        p.use = /(سكني|سكنيه|للسكن)/.test(nt) ? 'سكني' : /(اداري|مكتب)/.test(nt) ? 'إداري' : /عياده/.test(nt) ? 'عيادة' : /(تجاري|محل)/.test(nt) ? 'تجاري' : '';
        const rent = find(/^(?:الاجره|اجره|اجرتها|بااجره|ايجار|ايجارها|الايجار|بايجار|بالايجار)/) || find(/(الاجره|اجره|اجرتها|ايجار)/, [propSeg]) || find(/^(?:بمبلغ|مبلغ|بقيمه)/);
        p.rent = rent ? money(rent) : '';
        const rn = rent ? rent.n : '';
        if (p.rent && /(?:في|كل)\s*(?:ال)?ساعه|بالساعه|للساعه|ساعه|ساعات/.test(rn)) p.rent += ' في الساعة';
        else if (p.rent && /يومي|(?:في|كل)\s*(?:ال)?يوم|لليوم|باليوم/.test(rn)) p.rent += ' يوميًا';
        else if (p.rent && /اسبوعي|(?:في|كل)\s*(?:ال)?اسبوع|بالاسبوع/.test(rn)) p.rent += ' أسبوعيًا';
        else if (p.rent && /شهري|كل شهر|في الشهر|بالشهر|للشهر/.test(rn)) p.rent += ' شهريًا';
        else if (p.rent && /سنوي|كل سنه|في السنه|بالسنه|للسنه/.test(rn)) p.rent += ' سنويًا';
        const pm = rent ? /(?:ب?تدفع|ب?تسدد|يسدد|يدفع|يدفعها|مقدما|اول كل|اخر كل)[^،]*/.exec(rent.o.replace(/ب(?=تدفع|تسدد)/, '')) : null;
        p.rentPay = pm ? pm[0] : '';
        const DUR_RE = /(سنتين|سنه|سنوات|سنين|عامين|اشهر|شهور|شهرين|شهر\s)/;
        const dur = find(/^(?:لمده|(?:ال)?مده)/) || find(DUR_RE, [rent, propSeg]) || (propSeg && DUR_RE.test(propSeg.n) ? propSeg : undefined);
        const dd = dur ? durParts(dur.n) : { years: 0, months: 0, days: 0, hours: 0 };
        p.duration = dur ? (durTextAll(dd) || durFromText(text) || (/[0-9]|(?:يوم|شهر|سنه|عام|اسبوع|ساعه)/.test(dur.o) ? dur.o.replace(/^(?:لمدة|مدة العقد|مدة)\s*/, '') : '')) : durFromText(text);
        p.start = dateOf(dur && /(من|تبدا|تبدأ|بدايه|اعتبارا|ابتداء)/.test(dur.n) ? dur.o : '') || dateOf((ss.find((s) => /(تبدا|بدايه|اعتبارا|ابتداء|^من\s)/.test(s.n) && dateOf(s.o)) || { o: '' }).o) || (dur ? dateOf(dur.o) : '');
        const dep = find(/^(?:ال)?تامين/); p.deposit = dep ? dep.o : ''; p.depositAmt = dep ? money(dep) : '';
        p.penalty = penSeg ? money(penSeg) : '';
        const inc = find(/^(?:ال)?زياده/);
        const pc = inc ? /(\d+(?:\.\d+)?)\s*(?:%|(?:ب|في\s+)(?:ال)?(?:مايه|مائه|ميه|مئه))/.exec(D(inc.n)) : null;
        p.increase = inc ? (pc ? 'تزداد الأجرة زيادة ' + (/(سنوي|كل سنه)/.test(inc.n) ? 'سنوية ' : '') + 'بنسبة ' + pc[1] + '%' : inc.o) : '';
        const ut = find(/(كهرباء|مياه|غاز|مرافق|فواتير)/); p.utilities = ut ? ut.o : '';
        p.years = String(+(dd.years + dd.months / 12).toFixed(2));
        p.admin = /(وكيل|ولي|وصي|حارس|مدير|ناظر)/.test(nt) ? 'yes' : '';
    }
    for (const k of ['property', 'payment', 'delivery', 'proof', 'rentPay', 'utilities', 'addr1', 'addr2']) if (p[k]) p[k] = fixText(p[k]);
    for (const k of ['property', 'payment', 'delivery', 'proof', 'rentPay', 'utilities', 'addr1', 'addr2']) if (p[k]) p[k] = p[k].replace(/(?:\s+(?:مع|في|من|على|الى|إلى|و|ب|ل))+$/, '').trim();
    if (p.payment) p.payment = p.payment.replace(/\s+(?:يوم|في|ب|و)$/, '');
    if (p.payment) p.payment = p.payment.replace(/^دفع\s+/, 'دفع الطرف الثاني ');
    return p;
}

const propOk = (v        ) => !!v && /(\d|\sفي\s|شارع|بمدينه|بحي|بمنطقه|رقم|مساحه|مركز|قريه|موديل|لوحات|بالدور|بالعقار|طريق|فدان|قيراط|حوض|كيلو|ماركه)/.test(norm(v));

const GOV = new Set(['01', '02', '03', '04', '11', '12', '13', '14', '15', '16', '17', '18', '19', '21', '22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '88']);
function idBad(id        )          {
    if (!id) return false;
    const mm = Number(id.slice(3, 5)), dd = Number(id.slice(5, 7));
    return !/^[23]/.test(id) || mm < 1 || mm > 12 || dd < 1 || dd > 31 || !GOV.has(id.slice(7, 9));
}
function runChecks(kind      , p        , cls        )          {
    const c          = [];
    const veh = cls === 'vehicle';
    const realty = cls === 'home' || cls === 'shop' || cls === 'land';
    const movable = !realty;
    c.push({ ok: !!p.p1 && !!p.p2, name: 'اسم الطرفين', detail: kind === 'sale' ? 'البائع والمشتري' : 'المؤجر والمستأجر' });
    c.push({ ok: !!p.id1 && !!p.id2, name: 'الرقم القومي للطرفين', detail: 'رقم من 14 رقمًا لكل طرف، في جملة الطرف نفسه. وجدت ' + ((p.id1 ? 1 : 0) + (p.id2 ? 1 : 0)) + ' من 2.' });
    if (p.id1 && p.id1 === p.id2) c.push({ ok: false, name: 'تنبيه: نفس الرقم القومي للطرفين', detail: 'الرقم القومي للطرفين متطابق. غالبًا تكرار بالخطأ. راجع كل رقم من البطاقة.' });
    if (p.id1 || p.id2) { const bad = [p.id1, p.id2].filter(idBad).length; if (bad) c.push({ ok: false, name: 'تنبيه: صيغة الرقم القومي', detail: 'رقم قومي واحد على الأقل لا تطابق صيغته (القرن، الشهر، اليوم، كود المحافظة). غالبًا خطأ في النطق أو الكتابة. راجعه من البطاقة.' }); }
    if (kind === 'sale' && movable) {
        c.push({ ok: propOk(p.property), name: 'وصف المبيع', detail: 'بيان المبيع وأوصافه الأساسية بما يمكّن من تعرّفه: النوع والماركة والموديل أو الرقم التسلسلي.', art: 'م 419' });
        c.push({ ok: !!p.price, name: 'الثمن بالنقود', detail: 'اذكر الثمن بالأرقام وبعده كلمة جنيه.', art: 'م 418' });
        c.push({ ok: !!p.payment || !!p.fullcash, name: 'طريقة السداد', detail: 'نقدًا عند التسليم، أو مقدم وأقساط.' });
        c.push({ ok: !!p.delivery, name: 'التسليم', detail: 'موعد ومكان التسليم. التزام البائع بالتسليم أصلي ولو لم يُذكر.', art: 'م 431' });
        c.push({ ok: !!p.proof, name: veh ? 'مستند الملكية' : 'إثبات ملكية المبيع', detail: veh ? 'الفاتورة أو عقد الشراء أو الرخصة التي تثبت ملكية البائع.' : 'الفاتورة أو عقد الشراء أو الضمان الذي يثبت ملكية البائع.', art: 'م 428' });
        if (veh) c.push({ ok: !!p.odo, name: 'قراءة العداد', detail: 'قراءة العداد وقت البيع تحمي الطرفين من نزاع على المسافة.' });
        if (veh) c.push({ ok: true, info: true, name: 'نقل الملكية في المرور', detail: 'أضفنا بندًا يلزم الطرفين بنقل الملكية في إدارة المرور وتسليم الرخصة واللوحات والمستندات. ولو كانت السيارة مرهونة أو عليها حجز راجع ذلك قبل التوقيع.' });
        c.push({ ok: !!p.penalty, name: 'الشرط الجزائي', detail: 'المبلغ الذي يدفعه الطرف المخل بأي شرط. اذكر المبلغ بالأرقام وبعده كلمة جنيه.', art: 'م 223' });
        c.push({ ok: true, info: true, name: 'ملاحظة على الشرط الجزائي', detail: 'للقاضي أن يخفض التعويض الاتفاقي إذا كان مبالغًا فيه كثيرًا أو نُفذ جزء من الالتزام، ولا يستحق إن أثبت المدين أن الدائن لم يتضرر.', art: 'م 224' });
        c.push({ ok: true, info: true, name: 'بنود أضفناها افتراضيًا', detail: 'خلو المبيع من الحقوق، والضمان، وعدم العدول، والموطن المختار. راجعها أو احذف ما لا يناسبكما.' });
    } else if (kind === 'sale') {
        c.push({ ok: propOk(p.property), name: 'وصف المبيع', detail: 'يجب أن يشمل العقد بيانًا للمبيع وأوصافه الأساسية بما يمكّن من تعرّفه: العنوان أو الرقم أو المساحة أو المواصفات.', art: 'م 419' });
        c.push({ ok: !!p.price, name: 'الثمن بالنقود', detail: 'البيع مقابل ثمن نقدي. اذكر الثمن بالأرقام وبعده كلمة جنيه.', art: 'م 418' });
        c.push({ ok: !!p.payment, name: 'طريقة السداد', detail: 'مقدم، أقساط، أو عند التسليم.' });
        c.push({ ok: !!p.delivery, name: 'التسليم', detail: 'موعد ومكان التسليم. التزام البائع بالتسليم أصلي ولو لم يُذكر.', art: 'م 431 و435' });
        c.push({ ok: !!p.proof, name: 'مستند ملكية البائع', detail: 'الإشارة لعقد التملك أو التسجيل. البائع يلتزم بما يلزم لنقل الحق للمشتري.', art: 'م 428' });
        if (isRealEstate(p.property)) c.push({ ok: true, info: true, name: 'عقار: الملكية بالتسجيل', detail: 'العقد العرفي لا ينقل ملكية العقار. تنتقل الملكية بالتسجيل في الشهر العقاري. أُضيف بند يلزم البائع بالتوقيع على العقد النهائي وتقديم المستندات.', art: 'م 934' });
        c.push({ ok: true, info: true, name: 'بنود أضفناها افتراضيًا', detail: 'الحيازة وخلو المبيع من الحقوق، مستندات الملكية، التوثيق ونقل الملكية، الضرائب والفواتير، عدم العدول، الموطن المختار، الشاهدان. هذه صيغ شائعة وليست من كلامك. راجعها أو احذف ما لا يناسب اتفاقكما.' });
        c.push({ ok: !!p.penalty, name: 'الشرط الجزائي', detail: 'بند أساسي: أي طرف يخل بأي شرط من شروط العقد يدفع للآخر مبلغًا. اذكر المبلغ بالأرقام وبعده كلمة جنيه، مثل: الشرط الجزائي 100 ألف جنيه.', art: 'م 223' });
        c.push({ ok: true, info: true, name: 'ملاحظة على الشرط الجزائي', detail: 'للقاضي أن يخفض التعويض الاتفاقي إذا كان مبالغًا فيه كثيرًا أو نُفذ جزء من الالتزام، ولا يستحق إن أثبت المدين أن الدائن لم يتضرر.', art: 'م 224' });
        if (p.multi) c.push({ ok: true, info: true, name: 'أكثر من مشترٍ', detail: 'أضفنا سطرًا لبيانات المشتري الآخر. اذكر حصة كل مشترٍ في المبيع. لا يُضاف بند «بالتساوي» وعدم التصرف المنفرد إلا إذا ذكرته في كلامك.' });
        if (p.fullcash) c.push({ ok: true, info: true, name: 'الدفع نقدًا', detail: 'احتفظ بإيصال أو إثبات للسداد. توقيع البائع على العقد مخالصة بالثمن، لكن الأفضل أن يذكر العقد كيف دُفع.' });
        if (/(قسط|اقساط|تقسيط|مؤجل|الباقي)/.test(norm(p.payment || ''))) c.push({ ok: true, info: true, name: 'الثمن المؤجل أو المقسط', detail: 'يجوز للبائع أن يشترط ألا تنتقل الملكية إلا بعد سداد الثمن كله ولو سلّم المبيع. لم يُضَف تلقائيًا لأنه اتفاق بينكما. إن كنتما متفقين عليه فأضفه إلى المسودة بنفسك.', art: 'م 430' });
    } else if (veh) {
        const co = /^(?:ال)?(?:شركه|مؤسسه|مكتب|بنك|جمعيه|مجموعه)/;
        if (co.test(norm(p.p1 || '')) || co.test(norm(p.p2 || ''))) {
            const ic = c.find((x) => x.name === 'الرقم القومي للطرفين');
            if (ic && !ic.ok) { ic.ok = true; ic.info = true; ic.detail = 'أحد الطرفين شركة وليس له رقم قومي. اذكر السجل التجاري والرقم الضريبي وبيانات الممثل القانوني. ' + ic.detail; }
        }
        c.push({ ok: propOk(p.property), name: 'وصف السيارة', detail: 'اذكر الماركة والموديل ورقم اللوحات بما يميّز السيارة.', art: 'م 558' });
        c.push({ ok: !!p.duration, name: 'مدة الإيجار', detail: 'المدة بالأيام أو الساعات: 3 أيام، أو 5 ساعات.', art: 'م 558' });
        c.push({ ok: !!p.start, name: 'تاريخ وساعة الاستلام', detail: 'اذكر تاريخ الاستلام بالأرقام، ومعه الساعة إن أمكن.' });
        c.push({ ok: !!p.rent, name: 'الأجرة', detail: 'اذكر القيمة بالأرقام وبعدها كلمة جنيه.', art: 'م 558' });
        c.push({ ok: !!p.rateUnit, name: 'نوع الأجرة (يومي أو بالساعة)', detail: 'إيجار السيارة عادة يومي أو بالساعة. اذكر «1500 جنيه في اليوم» أو «200 جنيه في الساعة»، وإلا تُقرأ الأجرة كمبلغ واحد.' });
        c.push({ ok: !!p.insurance, name: 'التأمين على السيارة', detail: 'حدد نوع التأمين (شامل أو ضد الغير) ومن يتحمل قيمة التحمل عند الحادث. وديعة التأمين ليست تأمينًا على السيارة.' });
        c.push({ ok: !!p.fuel, name: 'الوقود', detail: 'من يتحمل البنزين، وهل ترد السيارة بنفس كمية الوقود.' });
        c.push({ ok: !!p.fines, name: 'المخالفات والغرامات', detail: 'من يتحمل مخالفات المرور عن مدة الإيجار، وغالبًا المستأجر.' });
        c.push({ ok: !!p.licence, name: 'رخصة قيادة المستأجر', detail: 'رقم الرخصة وسريانها ومن يقود السيارة. القيادة بدون رخصة مخالفة لقانون المرور.' });
        c.push({ ok: !!p.km, name: 'عداد السيارة والمسافة', detail: 'قراءة العداد عند التسليم، والحد المسموح من الكيلومترات وسعر الزيادة إن وجد.' });
        c.push({ ok: !!p.penalty, name: 'الشرط الجزائي', detail: 'المبلغ الذي يدفعه الطرف المخل بأي شرط. اذكر المبلغ بالأرقام وبعده كلمة جنيه.', art: 'م 223' });
        c.push({ ok: true, info: true, name: 'ملاحظة على الشرط الجزائي', detail: 'للقاضي أن يخفض التعويض الاتفاقي إذا كان مبالغًا فيه كثيرًا أو نُفذ جزء من الالتزام، ولا يستحق إن أثبت المدين أن الدائن لم يتضرر.', art: 'م 224' });
        c.push({ ok: !!p.deposit, name: 'وديعة التأمين', detail: 'اختياري. تُرد عند إعادة السيارة بعد خصم المستحقات. اتركها إن لم يُتفق عليها.' });
        c.push({ ok: !!p.late, name: 'التأخير في الرد', detail: 'أجر إضافي عن كل يوم أو ساعة تأخير في إعادة السيارة.' });
        c.push({ ok: true, info: true, name: 'نطاق المسودة', detail: 'إيجار السيارة عقد إيجار يخضع للقانون المدني (م 558 وما بعدها)، مع مراعاة قواعد قانون المرور والتأمين الإجباري. المسودة لا تحل محل وثيقة التأمين ولا تسجيل المركبة.' });
    } else if (!realty) {
        c.push({ ok: propOk(p.property), name: 'وصف الشيء المؤجر', detail: 'اذكر نوع الشيء ومواصفاته التي تميّزه، أو رقمه التسلسلي.', art: 'م 558' });
        c.push({ ok: !!p.duration, name: 'مدة الإيجار', detail: 'المدة بالأيام أو الأشهر أو السنوات.', art: 'م 558' });
        c.push({ ok: !!p.start, name: 'تاريخ بدء الإيجار', detail: 'اذكر تاريخ البدء بالأرقام.' });
        c.push({ ok: !!p.rent, name: 'الأجرة', detail: 'اذكر القيمة بالأرقام وبعدها كلمة جنيه، وحدد إن كانت يومية أو شهرية.', art: 'م 558' });
        c.push({ ok: true, info: true, name: 'الصيانة والتشغيل', detail: 'المسودة تجعل الإصلاحات الضرورية على المؤجر والمحافظة على المستأجر (م 567 و583). عدّل البند لو اتفقتما على غير ذلك.' });
        c.push({ ok: !!p.penalty, name: 'الشرط الجزائي', detail: 'المبلغ الذي يدفعه الطرف المخل بأي شرط. اذكر المبلغ بالأرقام وبعده كلمة جنيه.', art: 'م 223' });
        c.push({ ok: true, info: true, name: 'ملاحظة على الشرط الجزائي', detail: 'للقاضي أن يخفض التعويض الاتفاقي إذا كان مبالغًا فيه كثيرًا أو نُفذ جزء من الالتزام، ولا يستحق إن أثبت المدين أن الدائن لم يتضرر.', art: 'م 224' });
        c.push({ ok: true, info: true, name: 'نطاق المسودة', detail: 'إيجار الأشياء يخضع للقانون المدني (م 558 وما بعدها). ولو الشيء مسجّل أو مرهون فراجع التأمين والرهن قبل التوقيع.' });
    } else {
        c.push({ ok: propOk(p.property), name: 'تعيين العين المؤجرة', detail: 'العقد على شيء معين: اذكر العنوان أو رقم الوحدة أو المساحة.', art: 'م 558' });
        c.push({ ok: !!p.duration, name: 'مدة الإيجار', detail: 'الإيجار لمدة معينة.', art: 'م 558' });
        c.push({ ok: !!p.start, name: 'تاريخ بدء الإيجار', detail: 'اذكر تاريخ البدء بالأرقام، مثل 1/1/2027، أو باسم الشهر.' });
        c.push({ ok: !!p.rent, name: 'الأجرة', detail: 'أجر معلوم. اذكر القيمة بالأرقام وبعدها كلمة جنيه. لو لم تُحدد، تعتبر أجرة المثل.', art: 'م 558' });
        c.push({ ok: !!p.use, name: 'الغرض من الاستعمال', detail: 'سكني أو إداري أو تجاري.' });
        c.push({ ok: !!p.utilities, name: 'من يتحمل المرافق', detail: 'الكهرباء والمياه والغاز. لو لم تتفقا على شيء: الكهرباء والغاز وعداد المياه على المستأجر، والضرائب على المؤجر.', art: 'م 567' });
        if (!p.duration) c.push({ ok: true, info: true, name: 'لو المدة غير محددة', detail: 'الإيجار بلا مدة يعتبر لفترة دفع الأجرة (شهر مثلًا)، وينتهي بالتنبيه بالإخلاء في المواعيد القانونية.', art: 'م 563' });
        c.push({ ok: true, info: true, name: 'التنازل والتأجير من الباطن', detail: 'القانون يجيزه ما لم يُتفق على المنع. المسودة تمنعه إلا بموافقة كتابية من المؤجر. عدّل البند إن اتفقتما على غير ذلك.', art: 'م 593' });
        c.push({ ok: !!p.penalty, name: 'الشرط الجزائي', detail: 'المبلغ الذي يدفعه الطرف المخل بأي شرط من شروط العقد. اذكر المبلغ بالأرقام وبعده كلمة جنيه، مثل: الشرط الجزائي 20000 جنيه.', art: 'م 223' });
        c.push({ ok: true, info: true, name: 'ملاحظة على الشرط الجزائي', detail: 'للقاضي أن يخفض التعويض الاتفاقي إذا كان مبالغًا فيه كثيرًا أو نُفذ جزء من الالتزام، ولا يستحق إن أثبت المدين أن الدائن لم يتضرر.', art: 'م 224' });
        if (/(زراعي|فدان|فدادين|قيراط)/.test(norm(p.property || ''))) c.push({ ok: false, name: 'تنبيه: أرض زراعية', detail: 'إيجار الأراضي الزراعية له قانون خاص يختلف عن القانون المدني في المدة والأجرة والإنهاء. هذه المسودة لا تغطيه. اعرضها على محامٍ قبل التوقيع.' });
        c.push({ ok: true, info: true, name: 'نطاق المسودة', detail: 'للعقود الجديدة التي تسري عليها أحكام القانون المدني وما يتفق عليه الطرفان (بعد ق 4 لسنة 1996). الإيجار القديم الخاضع للقانونين 49/1977 و136/1981 له أحكام خاصة (آخرها ق 164 لسنة 2025)، والمسودة لا تغطيه.' });
        c.push({ ok: !!p.deposit, name: 'التأمين', detail: 'اختياري. اتركه إن لم يُتفق عليه.' });
        if (p.admin && Number(p.years) > 3) c.push({ ok: false, name: 'تنبيه: مدة أكثر من 3 سنوات', detail: 'ورد في كلامك وكيل أو مدير أو وصي. من لا يملك إلا حق الإدارة لا يجوز أن يؤجر لأكثر من 3 سنوات إلا بترخيص من السلطة المختصة. تأكد من صلاحية التوكيل أو سند الإدارة.', art: 'م 559' });
    }
    return c;
}

const isRealEstate = (t        ) => /(?:شقه|شقة|ارض|أرض|عقار|وحده|وحدة|فيلا|قطعه|قطعة|منزل|بيت|محل|دكان|مكتب|عياده|عيادة|مخزن|مصنع|مزرعه|مزرعة|عماره|عمارة)/.test(t || '');
const titleOf = (name        , fem         , mal         ) => (/^(?:ال)?(?:شركه|شركة|مؤسسه|مؤسسة|بنك|جمعيه|جمعية|مجموعه|مجموعة|مكتب)/.test(norm(name || '')) ? '' : fem ? 'السيدة/ ' : mal ? 'السيد/ ' : 'السيد/ة ');
const M = (label        , v         ) => (v ? v : '\u0001' + label + '\u0002');
const ORD = ['الأول', 'الثاني', 'الثالث', 'الرابع', 'الخامس', 'السادس', 'السابع', 'الثامن', 'التاسع', 'العاشر', 'الحادي عشر', 'الثاني عشر', 'الثالث عشر', 'الرابع عشر', 'الخامس عشر', 'السادس عشر', 'السابع عشر', 'الثامن عشر', 'التاسع عشر', 'العشرون', 'الحادي والعشرون'];
const USE_AR                         = { 'سكني': 'السكني', 'إداري': 'الإداري', 'تجاري': 'التجاري', 'عيادة': 'المهني (عيادة)' };

function build(kind      , p        , cls        )           {
    const L           = [];
    const clauses                     = [];
    const sale = kind === 'sale';
    const veh = cls === 'vehicle';
    const realty = cls === 'home' || cls === 'shop' || cls === 'land';
    const movable = !realty;
    const KW = /(شقه|شقة|محل|دكان|ارض|أرض|منزل|بيت|فيلا|وحده|وحدة|مخزن|مكتب|عياده|عيادة|سياره|سيارة|عقار|بدروم|ماكينه|جهاز|معدات|اثاث|تجهيزات|موبايل|هاتف|لابتوب)/.exec(norm(p.property || ''));
    const kwAr                         = { شقه: 'شقة', دكان: 'محل', ارض: 'أرض', وحده: 'وحدة', عياده: 'عيادة', سياره: 'سيارة', ماكينه: 'ماكينة', جهاز: 'جهاز', معدات: 'معدات', اثاث: 'أثاث', تجهيزات: 'تجهيزات', موبايل: 'موبايل', هاتف: 'هاتف', لابتوب: 'لابتوب' };
    const assetName = cls === 'vehicle' ? 'سيارة' : cls === 'equipment' ? 'معدات' : cls === 'other' ? '' : (KW ? (kwAr[KW[1]] || KW[1]) : '');
    L.push(sale
        ? '# عقد بيع' + (assetName ? ' ' + assetName : '') + (p.prelim ? ' ابتدائي' : p.final ? ' نهائي' : '')
        : '# عقد إيجار' + (cls === 'vehicle' ? ' سيارة' : cls === 'equipment' ? (assetName ? ' ' + assetName : ' معدات') : ''));
    L.push('تحرر هذا العقد في يوم ' + M('التاريخ') + ' بمدينة ' + M('المدينة') + '، بين كل من:');
    const partyLine = (ord        , name        , f        , m        , id        , ad        , nameL        , idL        , adL        , role        , no        ) => {
        const co = !titleOf(name, f, m) && !!name;
        if (co) { idL = 'الرقم القومي للممثل'; adL = 'عنوان الشركة'; }
        return ord + ': ' + titleOf(name, f, m) + M(nameL, name) + '، ' + (co && !/يمثل/.test(name) ? 'ويمثلها ' + M('اسم الممثل القانوني') + '، ' : '') + (co ? 'الرقم القومي لممثلها ' : f ? 'وتحمل رقم قومي ' : 'ويحمل رقم قومي ') + M(idL, id) + '، ' + (co ? 'ومقرها ' : f ? 'ومقيمة ' : 'ومقيم ') + M(adL, ad) + '. ويسمى (الطرف ' + no + ' – ' + role + ').';
    };
    L.push(partyLine('أولًا', p.p1, p.f1, p.m1, p.id1, p.addr1, sale ? 'اسم البائع' : 'اسم المؤجر', sale ? 'الرقم القومي للبائع' : 'الرقم القومي للمؤجر', sale ? 'عنوان البائع' : 'عنوان المؤجر', sale ? 'البائع' : 'المؤجر', 'الأول'));
    L.push(partyLine('ثانيًا', p.p2, p.f2, p.m2, p.id2, p.addr2, sale ? 'اسم المشتري' : 'اسم المستأجر', sale ? 'الرقم القومي للمشتري' : 'الرقم القومي للمستأجر', sale ? 'عنوان المشتري' : 'عنوان المستأجر', sale ? 'المشتري' : 'المستأجر', 'الثاني'));
    if (sale && p.multi) L.push('ثالثًا: ' + M('اسم وبيانات المشتري الآخر (الرقم القومي والعنوان)') + '. ويسمى (الطرف الثاني – مشترٍ).');
    L.push(sale ? 'وبعد أن أقر الطرفان بأهليتهما القانونية للتعاقد، وبأنهما غير خاضعين للحراسة ولا ممنوعين من التصرف، اتفقا على ما يلي:' : 'وبعد أن أقر الطرفان بأهليتهما القانونية للتعاقد، اتفقا على ما يلي:');
    clauses.push(['التمهيد', 'يعتبر التمهيد السابق جزءًا لا يتجزأ من هذا العقد.']);
    if (sale && movable) {
        clauses[0][1] = 'يعتبر التمهيد السابق جزءًا لا يتجزأ من هذا العقد ومكملًا ومتممًا له.';
        clauses.push(['المبيع', 'باع وأسقط وتنازل الطرف الأول بكافة الضمانات الفعلية والقانونية إلى الطرف الثاني المبيع الآتي وصفه: ' + M('وصف المبيع', p.property) + '.']);
        clauses.push(['الثمن', 'اتفق الطرفان على أن ثمن البيع هو ' + M('الثمن', withWords(p.price)) + '.' + (p.fullcash && p.payment ? ' ويعتبر توقيع الطرف الأول على هذا العقد مخالصة نهائية بالثمن.' : '')]);
        clauses.push(['السداد', p.payment ? M('طريقة السداد', fmtN(p.payment)) + '.' : 'سدد الطرف الثاني الثمن كاملًا عند التوقيع، ويعتبر توقيع الطرف الأول على هذا العقد مخالصة نهائية بالثمن.']);
        if (/(قسط|اقساط|أقساط|تقسيط)/.test(norm(p.payment))) clauses.push(['الأقساط', 'يسدد الطرف الثاني الثمن المؤجل على أقساط، قيمة القسط ' + M('قيمة القسط') + '، ويستحق أولها في ' + M('تاريخ أول قسط') + '، ويستحق كل قسط تالٍ في ' + M('موعد استحقاق باقي الأقساط') + '. وفي حالة التأخر في سداد أي قسط: ' + M('أثر التأخر في السداد') + '.']);
        clauses.push(['التسليم', M('موعد ومكان التسليم', p.delivery) + '. ويقر الطرف الثاني بأنه عاين المبيع وقبله بحالته، دون إخلال بضمان العيوب التي لا يمكن كشفها بالفحص المعتاد (م 447 مدني).']);
        clauses.push(['الملكية', 'يقر الطرف الأول بأنه يملك المبيع ملكية تامة بموجب ' + M(veh ? 'مستند الملكية' : 'إثبات ملكية المبيع', p.proof) + '، وأنه خالٍ من أي حقوق للغير أو رهون أو حجوزات، ويلتزم بما يلزم لنقل الملكية إلى الطرف الثاني (م 428 مدني).']);
        if (veh) {
            clauses.push(['حالة السيارة والعداد', 'قراءة العداد وقت البيع ' + M('قراءة العداد', p.odo) + '، ويقر الطرف الثاني بأنه عاين السيارة وقبلها بحالتها.']);
            clauses.push(['نقل الملكية في المرور', 'يلتزم الطرفان بإتمام نقل ملكية السيارة في إدارة المرور المختصة، وتسليم رخصة السيارة ولوحاتها ومفاتيحها ومستنداتها، ويتحمل الطرف الثاني رسوم النقل والترخيص ما لم يتفق على غير ذلك.']);
            clauses.push(['المخالفات السابقة', M('مخالفات ورسوم سابقة على البيع', p.fines) + '. ويتحمل الطرف الأول مخالفات المرور والرسوم المستحقة عن المدة السابقة على التسليم، ويتحمل الطرف الثاني ما يستحق بعده.']);
            clauses.push(['التأمين', M('التأمين على السيارة', p.insurance) + '.']);
        } else {
            clauses.push(['الضمان', 'يضمن الطرف الأول للطرف الثاني عدم التعرض له في الانتفاع بالمبيع (م 439 مدني)، ويضمن العيوب الخفية التي تنقص من قيمة المبيع أو من نفعه (م 447 مدني).']);
            clauses.push(['الملحقات', 'يلتزم الطرف الأول بتسليم الطرف الثاني كل ملحقات المبيع وقطع غياره ومستنداته إن وجدت.']);
        }
        clauses.push(['الشرط الجزائي', 'اتفق الطرفان على شرط جزائي قدره ' + M('قيمة الشرط الجزائي', withWords(p.penalty)) + '، يدفعه الطرف الذي يخل بأي شرط من شروط هذا العقد للطرف الآخر (م 223 و224 مدني).']);
        clauses.push(['عدم العدول', 'لا يحق لأي من الطرفين العدول عن هذا البيع أو الرجوع فيه، ويسري هذا العقد على الطرفين وعلى الخلف العام والخاص لكل منهما.']);
        clauses.push(['الموطن المختار', 'يقر كل من الطرفين بأن عنوانه المذكور بصدر هذا العقد هو موطنه المختار، وتصح مراسلته عليه قانونًا ما لم يخطر الطرف الآخر بتغييره بخطاب مسجل بعلم الوصول أو بإنذار على يد محضر.']);
    } else if (sale) {
        const re = isRealEstate(p.property);
        clauses[0][1] = 'يعتبر التمهيد السابق جزءًا لا يتجزأ من هذا العقد ومكملًا ومتممًا له.';
        clauses.push(['المبيع', 'باع وأسقط وتنازل الطرف الأول بكافة الضمانات الفعلية والقانونية إلى الطرف الثاني المبيع الآتي وصفه: ' + M('وصف المبيع', p.property) + '.']);
        clauses.push(['الثمن', 'اتفق الطرفان على أن ثمن البيع هو ' + M('الثمن', withWords(p.price)) + '.' + (p.fullcash ? ' ويعتبر توقيع الطرف الأول على هذا العقد مخالصة نهائية بالثمن.' : '')]);
        clauses.push(['السداد', M('طريقة السداد', p.payment ? p.payment.replace(/(?<![\d\/.\-])(\d{4,})(?![\d\/])(\s*جنيه)?/g, (m0, d, cur) => (cur || d.length >= 5) ? d.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (cur || '') : m0) : p.payment) + '.']);
        if (p.inst) clauses.push(['الأقساط', 'يسدد الطرف الثاني الثمن المؤجل على أقساط، قيمة القسط ' + M('قيمة القسط') + '، ويستحق أولها في ' + M('تاريخ أول قسط') + '، ويستحق كل قسط تالٍ في ' + M('موعد استحقاق باقي الأقساط') + '. وفي حالة التأخر في سداد أي قسط: ' + M('أثر التأخر في السداد') + '.']);
        clauses.push(['التسليم', M('موعد ومكان التسليم', p.delivery) + '.']);
        clauses.push(['الملكية', 'يقر الطرف الأول بأنه يملك المبيع ملكية تامة بموجب ' + M('مستند الملكية', p.proof) + '، وأنه خالٍ من أي حقوق للغير، ويلتزم بما يلزم لنقل الملكية إلى الطرف الثاني (م 428 مدني).']);
        clauses.push(['الحيازة', 'يقر الطرف الأول بأنه لا توجد أي حقوق لأي شخص على المبيع، سواء كانت تمكينًا أو رهنًا أو بيعًا لكل المبيع أو لجزء منه، أو توكيلات صادرة منه لأي شخص، أو عقودًا صادرة منه لأي شخص، وبخلو المبيع من كافة الحقوق العينية الأصلية والتبعية، كالرهن والاختصاص وحقوق الامتياز والانتفاع والارتفاق، ظاهرة كانت أو خفية.']);
        clauses.push(['مستندات الملكية', 'يلتزم الطرف الأول بتسليم الطرف الثاني أصول مستندات الملكية التي تحت يده.']);
        if (re) clauses.push(['التوثيق ونقل الملكية', 'يلتزم الطرف الأول بالتوقيع على عقد البيع النهائي، وبالحضور أمام الشهر العقاري والجهات المختصة والمحكمة للإقرار بصحة التوقيع على هذا العقد، وبتقديم المستندات اللازمة لشهر هذا العقد وتسجيله، ولا تنتقل الملكية العقارية إلى الطرف الثاني إلا بالتسجيل (م 934 مدني). وتكون مصروفات التسجيل ورسومه على الطرف الثاني ما لم يتفق على غير ذلك (م 462 مدني).']);
        clauses.push(['الضمان', 'يضمن الطرف الأول للطرف الثاني عدم التعرض له في الانتفاع بالمبيع كله أو بعضه، سواء كان التعرض من فعله هو أو من فعل أجنبي يكون له وقت البيع حق على المبيع يحتج به على المشتري إذا كان هذا الحق قد آل إليه من البائع نفسه (م 439 مدني).']);
        clauses.push(['المعاينة', 'يقر الطرف الثاني بأنه عاين المبيع المعاينة التامة النافية للجهالة وقبله بحالته، دون إخلال بضمان العيوب التي لا يمكن كشفها بالفحص المعتاد (م 447 مدني).']);
        if (re) clauses.push(['الضرائب والفواتير', 'يلتزم الطرف الأول بسداد الضرائب والرسوم وفواتير المرافق المستحقة على المبيع عن المدة السابقة على هذا العقد، ويتحمل الطرف الثاني ما يستحق عليه بعد تاريخه (م 458 مدني)، ما لم يتفق على غير ذلك.']);
        clauses.push(['الشرط الجزائي', 'اتفق الطرفان على شرط جزائي قدره ' + M('قيمة الشرط الجزائي', withWords(p.penalty)) + '، يدفعه الطرف الذي يخل بأي شرط من شروط هذا العقد للطرف الآخر (م 223 و224 مدني).']);
        clauses.push(['عدم العدول', 'لا يحق لأي من الطرفين العدول عن هذا البيع أو الرجوع فيه، ويسري هذا العقد على الطرفين وعلى الخلف العام والخاص لكل منهما.']);
        if (p.multi && p.equal) clauses.push(['المشترون', 'تم دفع الثمن من المشترين بالتساوي بينهم، ولا يحق لأي منهم التصرف في المبيع منفردًا بالبيع أو الرهن أو غيرهما دون موافقة باقي المشترين.']);
        clauses.push(['الموطن المختار', 'يقر كل من الطرفين بأن عنوانه المذكور بصدر هذا العقد هو موطنه المختار، وتصح مراسلته عليه قانونًا ما لم يخطر الطرف الآخر بتغييره بخطاب مسجل بعلم الوصول أو بإنذار على يد محضر.']);
    } else if (veh) {
        clauses.push(['السيارة المؤجرة', 'أجّر الطرف الأول للطرف الثاني السيارة الآتية: ' + M('وصف السيارة (الماركة والموديل ورقم اللوحات)', p.property) + '.']);
        clauses.push(['الغرض والاستعمال', p.use === 'commercial'
            ? 'أُجرت السيارة للاستعمال في ' + M('الغرض التجاري المتفق عليه') + '، ولا يجوز تغييره ولا التأجير من الباطن ولا نقل الركاب بأجر إلا بموافقة كتابية من المؤجر.'
            : 'أُجرت السيارة للاستعمال الشخصي فقط، ولا يجوز استعمالها في نقل الركاب بأجر ولا التأجير من الباطن، ولا السفر بها خارج جمهورية مصر العربية إلا بموافقة كتابية من المؤجر.']);
        clauses.push(['المدة', 'مدة هذا الإيجار ' + M('مدة الإيجار', p.duration) + '، تبدأ من ' + M('تاريخ وساعة الاستلام', p.start) + (p.endDate ? ' وتنتهي في ' + p.endDate : p.endRel ? ' وتنتهي ' + p.endRel : ' وتنتهي في ' + M('تاريخ وساعة الرد')) + '.']);
        clauses.push(['الأجرة', 'الأجرة المتفق عليها ' + M('قيمة الأجرة', withWords(p.rent)) + '. ' + M('موعد وطريقة السداد', p.rentPay) + '.']);
        if (p.deposit) clauses.push(['وديعة التأمين', p.depositAmt ? 'يسلّم المستأجر للمؤجر وديعة تأمين قدرها ' + withWords(p.depositAmt) + '، تُرد له عند إعادة السيارة بالحالة المتفق عليها وبعد خصم أي مستحقات أو مخالفات.' : p.deposit + '.']);
        clauses.push(['التأمين على السيارة', (p.insurance ? p.insurance + '. ' : '') + 'يقر المستأجر بأنه اطلع على وثيقة تأمين السيارة وشروطها ويلتزم بها، ويتحمل قيمة التحمل المتفق عليها عند الحادث.' + (p.insurance ? '' : ' ' + M('نوع التأمين وقيمة التحمل') + '.')]);
        clauses.push(['التسليم والاستلام', 'يحرر الطرفان عند التسليم وعند الرد محضرًا يصف حالة السيارة: قراءة العداد ' + M('قراءة العداد وقت التسليم', p.km) + '، ومستوى الوقود ' + M('مستوى الوقود وقت التسليم') + '، وأي خدوش أو أضرار، مع صور مؤرخة. ويقر المستأجر باستلام السيارة بعد معاينتها (م 564 و591 مدني).']);
        const whoBears = (t        ) => /المستاجر/.test(norm(t || '')) ? 'المستأجر' : /المؤجر/.test(norm(t || '')) ? 'المؤجر' : '';
        clauses.push(['الوقود', (whoBears(p.fuel) ? 'يتحمل ' + whoBears(p.fuel) + ' البنزين' : M('من يتحمل الوقود', p.fuel)) + '. ويُرد الوقود بنفس المستوى المذكور في محضر التسليم، وإلا حُسب الفرق على المستأجر.']);
        clauses.push(['المسافة والعداد', 'تُرد السيارة بقراءة عداد لا تزيد عن ' + M('حد الكيلومترات المتفق عليه') + '، وأي زيادة تُحسب بسعر ' + M('سعر الكيلومتر الزيادة') + '، ما لم يتفق على غير ذلك.']);
        clauses.push(['المخالفات والغرامات', (whoBears(p.fines) ? 'يتحمل ' + whoBears(p.fines) + ' مخالفات المرور التي تقع خلال مدة الإيجار' : M('من يتحمل المخالفات', p.fines)) + '. ويلتزم المؤجر بإخطار المستأجر بأي مخالفة ترد بعد الرد خلال ' + M('مدة الإخطار بالمخالفات') + '.']);
        clauses.push(['الحوادث والسرقة', 'يلتزم المستأجر بإبلاغ المؤجر فورًا وبتحرير محضر شرطة عند أي حادث أو سرقة أو حريق، ولا يجوز له إصلاح السيارة أو التصرف فيها. ويتحمل المستأجر ما لا يغطيه التأمين بسبب مخالفته للشروط أو القيادة بدون رخصة.']);
        clauses.push(['الصيانة والأعطال', 'يلتزم المؤجر بصيانة السيارة وبصلاحيتها للانتفاع بها طوال المدة (م 567 مدني)، ويلتزم المستأجر بالمحافظة عليها وبإجراء الإصلاحات العاجلة اللازمة لسلامة السير مع إخطار المؤجر.']);
        clauses.push(['رخصة القيادة', M('بيانات رخصة القيادة', p.licence) + '. ويقر المستأجر بأنه يحمل رخصة قيادة سارية، وأنه المسؤول عن أي مخالفة لقانون المرور، ولا يجوز لغيره قيادة السيارة إلا بموافقة كتابية.']);
        clauses.push(['التأخير في الرد', (p.late ? withWords(p.late) + ' عن كل يوم تأخير' : M('أجر التأخير عن كل يوم تأخير')) + '.']);
        clauses.push(['الشرط الجزائي', 'اتفق الطرفان على شرط جزائي قدره ' + M('قيمة الشرط الجزائي', withWords(p.penalty)) + '، يدفعه الطرف الذي يخل بأي شرط من شروط هذا العقد للطرف الآخر (م 223 و224 مدني).']);
        clauses.push(['فسخ العقد', M('حالات الفسخ', p.termination) + '. ويحق للمؤجر فسخ العقد فورًا وطلب رد السيارة إذا تأخر المستأجر عن سداد الأجرة أو خالف شروط الاستعمال أو تبين أن بياناته غير صحيحة.']);
        clauses.push(['الموطن المختار', 'يقر كل من الطرفين بأن عنوانه المذكور بصدر هذا العقد هو موطنه المختار، وتصح مراسلته عليه قانونًا ما لم يخطر الطرف الآخر بتغييره بخطاب مسجل بعلم الوصول أو بإنذار على يد محضر.']);
    } else if (!realty) {
        clauses.push(['الشيء المؤجر', 'أجّر الطرف الأول للطرف الثاني ' + M('وصف الشيء المؤجر', p.property) + '.']);
        clauses.push(['الغرض', 'أُجرت للاستعمال في الغرض ' + M('الغرض من الاستعمال') + ' فقط، ولا يجوز تغييره ولا التأجير من الباطن إلا بموافقة كتابية من المؤجر.']);
        clauses.push(['المدة', 'مدة هذا الإيجار ' + M('مدة الإيجار', p.duration) + '، تبدأ من ' + M('تاريخ بدء الإيجار', p.start) + '.']);
        clauses.push(['الأجرة', 'الأجرة المتفق عليها ' + M('قيمة الأجرة', withWords(p.rent)) + '. ' + M('موعد وطريقة السداد', p.rentPay) + '.']);
        if (p.deposit) clauses.push(['وديعة التأمين', p.depositAmt ? 'يسلّم المستأجر للمؤجر وديعة تأمين قدرها ' + withWords(p.depositAmt) + '، تُرد عند رد الشيء بحالته وبعد خصم المستحقات.' : p.deposit + '.']);
        clauses.push(['التسليم', 'يسلم المؤجر الشيء وملحقاته بحالة تصلح للانتفاع به، ويحرر الطرفان محضرًا يصف حالته وقت التسليم (م 564 مدني).']);
        clauses.push(['الصيانة والتشغيل', 'يلتزم المؤجر بالإصلاحات الضرورية وبأن يبقى الشيء صالحًا للانتفاع به (م 567 مدني)، ويلتزم المستأجر بالمحافظة عليه وباستعماله فيما أُعد له (م 579 و583 مدني).']);
        clauses.push(['الرد', 'يلتزم المستأجر برد الشيء عند انتهاء الإيجار بالحالة التي تسلمه عليها، إلا ما أصابه من هلاك أو تلف لسبب لا يد له فيه (م 590 و591 مدني).']);
        clauses.push(['التنازل', 'لا يجوز للمستأجر التنازل عن الإيجار أو التأجير من الباطن إلا بموافقة كتابية من المؤجر.']);
        clauses.push(['الشرط الجزائي', 'اتفق الطرفان على شرط جزائي قدره ' + M('قيمة الشرط الجزائي', withWords(p.penalty)) + '، يدفعه الطرف الذي يخل بأي شرط من شروط هذا العقد للطرف الآخر (م 223 و224 مدني).']);
        clauses.push(['الموطن المختار', 'يقر كل من الطرفين بأن عنوانه المذكور بصدر هذا العقد هو موطنه المختار، وتصح مراسلته عليه قانونًا ما لم يخطر الطرف الآخر بتغييره بخطاب مسجل بعلم الوصول أو بإنذار على يد محضر.']);
    } else {
        clauses.push(['العين المؤجرة', 'أجّر الطرف الأول للطرف الثاني العين الآتي وصفها: ' + M('وصف العين المؤجرة', p.property) + '.']);
        clauses.push(['الغرض', 'أُجرت العين للاستعمال في الغرض ' + M('سكني أو إداري أو تجاري', p.use ? USE_AR[p.use] : '') + ' فقط، ولا يجوز تغييره إلا بموافقة كتابية من المؤجر.']);
        clauses.push(['المدة', 'مدة هذا الإيجار ' + M('مدة الإيجار', p.duration) + '، تبدأ من ' + M('تاريخ بدء الإيجار', p.start) + '.']);
        clauses.push(['الأجرة', 'الأجرة المتفق عليها ' + M('قيمة الأجرة', withWords(p.rent)) + '. ' + M('موعد وطريقة السداد', p.rentPay) + '.']);
        if (p.deposit) clauses.push(['التأمين', p.depositAmt ? 'يسلّم المستأجر للمؤجر مبلغ تأمين قدره ' + withWords(p.depositAmt) + '.' : p.deposit + '.']);
        if (p.increase) clauses.push(['الزيادة', p.increase + '.']);
        clauses.push(['المرافق', M('من يتحمل المرافق', p.utilities) + '.']);
        clauses.push(['التسليم', 'يسلم المؤجر العين وملحقاتها بحالة تصلح للانتفاع بها فيما أُجرت له (م 564 مدني)، ويحرر الطرفان محضرًا يصف حالتها وقت التسليم، ويقر المستأجر باستلامها بعد معاينتها.']);
        clauses.push(['الصيانة', 'يلتزم المؤجر بصيانة العين وبالترميمات الضرورية دون الترميمات التأجيرية، ما لم يتفق على غير ذلك (م 567 مدني). ويلتزم المستأجر بالترميمات التأجيرية البسيطة، وبأن يبذل في استعمال العين والمحافظة عليها عناية الشخص المعتاد (م 583 مدني)، وباستعمالها فيما أُعدت له (م 579 مدني).']);
        clauses.push(['الرد', 'يلتزم المستأجر برد العين عند انتهاء الإيجار بالحالة التي تسلمها عليها، إلا ما أصابها من هلاك أو تلف لسبب لا يد له فيه (م 590 و591 مدني).']);
        clauses.push(['الشرط الجزائي', 'اتفق الطرفان على شرط جزائي قدره ' + M('قيمة الشرط الجزائي', withWords(p.penalty)) + '، يدفعه الطرف الذي يخل بأي شرط من شروط هذا العقد للطرف الآخر (م 223 و224 مدني).']);
        clauses.push(['التنازل', 'لا يجوز للمستأجر التنازل عن الإيجار أو التأجير من الباطن إلا بموافقة كتابية من المؤجر.']);
    }
    clauses.push(['الاختصاص', 'يخضع هذا العقد للقانون المصري، وتختص محكمة ' + M('اسم المحكمة') + ' بنظر ما ينشأ عنه من نزاع.']);
    clauses.push(['النسخ', sale && p.multi ? 'حرر هذا العقد من ' + M('عدد النسخ') + ' نسخ، سلمت لكل طرف نسخة للعمل بموجبها.' : 'حرر هذا العقد من نسختين، بيد كل طرف نسخة للعمل بموجبها.']);
    clauses.forEach(([t, b], i) => L.push('البند ' + (ORD[i] || 'رقم ' + (i + 1)) + ' (' + t + '): ' + b));
    if (sale) L.push('والله ولي التوفيق.');
    L.push(sale ? 'الطرف الأول (البائع): ................' : 'الطرف الأول (المؤجر): ................');
    L.push(sale ? 'الطرف الثاني (المشتري): ................' : 'الطرف الثاني (المستأجر): ................');
    if (sale) { L.push('الشاهد الأول – الاسم والرقم القومي: ................'); L.push('الشاهد الثاني – الاسم والرقم القومي: ................'); }
    return L;
}




const REFS = [
    { n: 'م 418', t: 'البيع عقد يلتزم به البائع أن ينقل للمشتري ملكية شيء أو حقًا ماليًا آخر في مقابل ثمن نقدي.' },
    { n: 'م 419', t: 'مقتطف (الفقرة الأولى): يجب أن يكون المشتري عالمًا بالمبيع علمًا كافيًا، ويعتبر العلم كافيًا إذا اشتمل العقد على بيان المبيع وأوصافه الأساسية بيانًا يمكن من تعرفه (وللمادة فقرة ثانية).' },
    { n: 'م 428', t: 'يلتزم البائع أن يقوم بما هو ضروري لنقل الحق المبيع إلى المشتري، وأن يكف عن أي عمل من شأنه أن يجعل نقل الحق مستحيلًا أو عسيرًا.' },
    { n: 'م 430', t: 'مقتطف (الفقرة الأولى): إذا كان البيع مؤجل الثمن، جاز للبائع أن يشترط أن يكون نقل الملكية إلى المشتري موقوفًا على استيفاء الثمن كله ولو تم تسليم المبيع (وللمادة بقية: أحكام الأقساط والتعويض).' },
    { n: 'م 431', t: 'يلتزم البائع بتسليم المبيع للمشتري بالحالة التي كان عليها وقت البيع.' },
    { n: 'م 435', t: 'مقتطف: يكون التسليم بوضع المبيع تحت تصرف المشتري بحيث يتمكن من حيازته والانتفاع به دون عائق ولو لم يستول عليه استيلاءً ماديًا ما دام البائع قد أعلمه بذلك (وللمادة بقية).' },
    { n: 'م 447', t: 'مقتطف (الفقرة الأولى، وللمادة بقية): يكون البائع ملزمًا بالضمان إذا لم يتوافر في المبيع وقت التسليم الصفات التي كفل للمشتري وجودها فيه، أو إذا كان بالمبيع عيب ينقص من قيمته أو من نفعه بحسب الغاية المقصودة... ويضمن البائع هذا العيب ولو لم يكن عالمًا بوجوده.' },
    { n: 'م 462', t: 'نفقات عقد البيع ورسوم «الدمغة» والتسجيل وغير ذلك من مصروفات تكون على المشتري ما لم يوجد اتفاق أو عرف يقضي بغير ذلك.' },
    { n: 'م 458', t: 'مقتطف (الفقرة الثانية، وللمادة بقية): وللمشتري ثمر المبيع ونماؤه من وقت تمام البيع، وعليه تكاليف المبيع من هذا الوقت أيضًا، هذا ما لم يوجد اتفاق أو عرف يقضي بغيره.' },
    { n: 'م 223', t: 'مقتطف (وللمادة بقية): يجوز للمتعاقدين أن يحددا مقدمًا قيمة التعويض بالنص عليها في العقد أو في اتفاق لاحق.' },
    { n: 'م 224', t: 'مقتطف (الفقرتان الأولى والثانية، وللمادة بقية): لا يكون التعويض الاتفاقي مستحقًا إذا أثبت المدين أن الدائن لم يلحقه أي ضرر. ويجوز للقاضي أن يخفض هذا التعويض إذا أثبت المدين أن التقدير كان مبالغًا فيه إلى درجة كبيرة، أو أن الالتزام الأصلي قد نفذ في جزء منه.' },
    { n: 'م 439', t: 'يضمن البائع عدم التعرض للمشتري في الانتفاع بالمبيع كله أو بعضه، سواء كان التعرض من فعله هو أو من فعل أجنبي يكون له وقت البيع حق على المبيع يحتج به على المشتري إذا كان هذا الحق قد آل إليه من البائع نفسه.' },
    { n: 'م 934', t: 'في المواد العقارية لا تنتقل الملكية ولا الحقوق العينية الأخرى، سواء أكان ذلك فيما بين المتعاقدين أم في حق الغير، إلا إذا روعيت الأحكام المبينة في قانون تنظيم الشهر العقاري.' },
    { n: 'م 558', t: 'الإيجار عقد يلتزم المؤجر بمقتضاه أن يمكّن المستأجر من الانتفاع بشيء معين مدة معينة لقاء أجر معلوم.' },
    { n: 'م 559', t: 'لا يجوز لمن لا يملك إلا حق الإدارة أن يعقد إيجارًا تزيد مدته على ثلاث سنوات إلا بترخيص من السلطة المختصة، فإذا عقد الإيجار لمدة أطول انقضت المدة إلى ثلاث سنوات، ما لم يوجد نص يقضي بغيره.' },
    { n: 'م 562', t: 'إذا لم يتفق المتعاقدان على مقدار الأجرة أو على كيفية تقديرها، أو إذا تعذر إثبات مقدار الأجرة، وجب اعتبار أجرة المثل.' },
    { n: 'م 564', t: 'يلتزم المؤجر أن يسلم المستأجر العين المؤجرة وملحقاتها في حالة تصلح معها لأن تفي بما أعدت له من المنفعة، وفقًا لما تم عليه الاتفاق أو لطبيعة العين.' },
    { n: 'م 567', t: 'مقتطف (الفقرتان الأولى والثالثة، وللمادة بقية): على المؤجر أن يتعهد العين المؤجرة بالصيانة لتبقى على الحالة التي سلمت بها، وأن يقوم في أثناء الإجارة بجميع الترميمات الضرورية دون الترميمات التأجيرية. ويتحمل المؤجر التكاليف والضرائب المستحقة على العين المؤجرة، ويلزم بثمن المياه إذا قدر جزافًا، فإذا كان تقديره بالعداد كان على المستأجر. أما ثمن الكهرباء والغاز وغير ذلك مما هو خاص بالاستعمال الشخصي فيتحمله المستأجر.' },
    { n: 'م 579', t: 'يلتزم المستأجر بأن يستعمل العين المؤجرة على النحو المتفق عليه، فإن لم يكن هناك اتفاق التزم أن يستعمل العين بحسب ما أعدت له.' },
    { n: 'م 583', t: 'مقتطف (الفقرة الأولى): يجب على المستأجر أن يبذل من العناية في استعمال العين المؤجرة وفي المحافظة عليها ما يبذله الشخص المعتاد (وللمادة فقرة ثانية).' },
    { n: 'م 590', t: 'يجب على المستأجر أن يرد العين المؤجرة عند انتهاء الإيجار. فإذا أبقاها تحت يده دون حق كان ملزمًا أن يدفع للمؤجر تعويضًا يراعى في تقديره القيمة الإيجارية للعين وما أصاب المؤجر من ضرر.' },
    { n: 'م 591', t: 'على المستأجر أن يرد العين المؤجرة بالحالة التي تسلمها عليها، إلا ما يكون قد أصاب العين من هلاك أو تلف لسبب لا يد له فيه. فإذا كان تسليم العين للمستأجر قد تم دون كتابة محضر أو دون بيان بأوصاف هذه العين، افترض، حتى يقوم الدليل على العكس، أن المستأجر قد تسلم العين في حالة حسنة.' },
    { n: 'م 593', t: 'للمستأجر حق التنازل عن الإيجار أو الإيجار من الباطن وذلك عن كل ما استأجره أو بعضه، ما لم يقض الاتفاق بغير ذلك.' },
];

const $ = (id) => document.getElementById(id);
const svg = (n, c) => '<svg class="i ' + (c || '') + '" aria-hidden="true"><use href="#i-' + n + '"/></svg>';
const ICON_ALERT = svg('alert', 'sm'), ICON_INFO = svg('info', 'sm'), ICON_OK = svg('check', 'sm');
const esc = (s) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const TEMPLATE_VER = 'نسخة القالب 1.0 · ٢٦ نوفمبر ٢٠٢٦';
let kind = 'sale', asset = '', lastCls = 'home', lastPlain = '', recording = false, rec = null, base = '';
function setKind(k) { kind = k; $('k-sale').className = k === 'sale' ? 'on' : ''; $('k-lease').className = k === 'lease' ? 'on' : ''; $('txt').value = ''; $('out').hidden = true; $('dock').hidden = true; }
$('k-sale').onclick = () => setKind('sale');
$('k-lease').onclick = () => setKind('lease');
document.querySelectorAll('#assetrow button').forEach((b) => { b.onclick = () => { asset = b.dataset.asset || ''; document.querySelectorAll('#assetrow button').forEach((x) => { x.className = (x.dataset.asset || '') === asset ? 'on' : ''; }); if (!$('out').hidden) render(); }; });
$('ex').onclick = () => { const k0 = asset ? kind + ':' + asset : (kind === 'sale' ? 'sale' : 'lease'); $('txt').value = SAMPLES[k0] || SAMPLES[kind]; render(); };
$('clr').onclick = () => { $('txt').value = ''; $('out').hidden = true; $('dock').hidden = true; };
$('go').onclick = render;
const ph = (s) => s.split(/(\u0001[^\u0002]*\u0002)/).filter(Boolean).map((x) => x.startsWith('\u0001') ? '<mark>[' + esc(x.slice(1, -1)) + ']</mark>' : esc(x)).join('');
function docHtml(lines) {
  let h = '<div class="in">', sigs = [];
  for (const s of lines) {
    if (s.startsWith('# ')) { h += '<div class="t">' + esc(s.slice(2)) + '</div><div class="tl"></div>'; continue; }
    if (/: \.{6,}$/.test(s)) { sigs.push(s.replace(/: \.{6,}$/, '').replace(/^الطرف (?:الأول|الثاني) /, '')); continue; }
    const cm = /^(البند [^(:]+)\(([^)]*)\):\s*(.*)$/.exec(s);
    if (cm) { h += '<div class="cl"><div class="ch">' + esc(cm[1].trim()) + '<em>' + esc(cm[2]) + '</em></div><p>' + ph(cm[3]) + '</p></div>'; continue; }
    h += '<p>' + ph(s) + '</p>';
  }
  if (sigs.length) h += '<div class="sigs">' + sigs.map((x) => '<div class="sg">' + esc(x.replace(/[()]/g, '')) + '<small>التوقيع</small></div>').join('') + '</div>';
  return h + '<div class="tver">' + TEMPLATE_VER + ' · مسودة استرشادية تحتاج مراجعة محامٍ</div></div>';
}
function render() {
  const text = $('txt').value;
  if (!text.trim()) { status('اكتب أو سجّل الاتفاق أولًا، ثم اضغط «اكتب العقد».', true); $('txt').focus(); return; }
  status('');
  const cls = asset || detectAsset(text);
  lastCls = cls;
  const p = parse(kind, text, cls), checks = runChecks(kind, p, cls), lines = build(kind, p, cls);
  const real = checks.filter((c) => !c.info), missing = real.filter((c) => !c.ok).length, okc = real.length - missing;
  $('sum').className = 'sum' + (missing ? ' bad' : '');
  const pct = Math.round(okc / real.length * 100);
  $('sum').innerHTML = '<div class="ring" style="--p:' + pct + '"><b>' + okc + '/' + real.length + '<small>موجود</small></b></div><div><div class="tt">' + (missing ? missing + (missing === 1 ? ' بند يحتاج انتباه' : ' بنود تحتاج انتباه') : 'كل البنود الأساسية موجودة') + '</div><div class="sub">الفحص يتأكد من وجود الأركان في كلامك فقط. لا يتأكد من صحة الأسماء أو الأرقام أو من الملكية.</div></div>';
  const card = (c, cls, ic) => '<div class="chk ' + cls + '"><div class="ic" aria-hidden="true">' + ic + '</div><div><b>' + esc(c.name) + (c.art ? ' <span class="art">' + c.art + '</span>' : '') + '</b><div class="d">' + esc(c.detail) + '</div></div></div>';
  const need = checks.filter((c) => !c.info && !c.ok), infos = checks.filter((c) => c.info), oks = checks.filter((c) => !c.info && c.ok);
  $('checks').innerHTML = (need.length ? '<h3>' + ICON_ALERT + 'يحتاج انتباه</h3>' + need.map((c) => card(c, 'x', ICON_ALERT)).join('') : '') + (infos.length ? '<h3>' + ICON_INFO + 'معلومات قانونية</h3>' + infos.map((c) => card(c, 'i', ICON_INFO)).join('') : '') + (oks.length ? '<h3>' + ICON_OK + 'موجود في كلامك</h3><div class="oks">' + oks.map((c) => '<span class="ok">' + ICON_OK + esc(c.name) + (c.art ? ' <span class="art">' + c.art + '</span>' : '') + '</span>').join('') + '</div>' : '');
  $('doc').innerHTML = docHtml(lines);
  const dp = $('disc-prop'); if (dp) dp.hidden = cls !== 'home' && cls !== 'shop' && cls !== 'land';
  lastPlain = lines.map((l) => l.replace(/^# /, '').replace(/\u0001([^\u0002]*)\u0002/g, '[$1]')).join('\n\n') + '\n\n' + TEMPLATE_VER + ' · مسودة استرشادية تحتاج مراجعة محامٍ';
  const show = kind === 'sale' && !(cls === 'vehicle' || cls === 'equipment' || cls === 'other') ? ['م 418', 'م 419', 'م 428', 'م 430', 'م 431', 'م 435', 'م 439', 'م 447', 'م 458', 'م 462', 'م 223', 'م 224', 'م 934']
    : kind === 'sale' ? ['م 418', 'م 419', 'م 428', 'م 431', 'م 435', 'م 439', 'م 447', 'م 223', 'م 224']
    : ['م 558', 'م 559', 'م 562', 'م 564', 'م 567', 'م 579', 'م 583', 'م 590', 'م 591', 'م 593', 'م 223', 'م 224'];
  $('refs').innerHTML = REFS.filter((r) => show.includes(r.n)).map((r) => '<div class="ref"><b>' + r.n + '</b><span>' + esc(r.t) + '</span></div>').join('');
  $('out').hidden = false; $('dock').hidden = false;
  $('out').scrollIntoView({ behavior: window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
}
$('copy').onclick = async () => {
  try { await navigator.clipboard.writeText(lastPlain); $('copylbl').textContent = 'تم النسخ'; }
  catch (e) { const t = $('txt'); const ta = document.createElement('textarea'); ta.value = lastPlain; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); $('copylbl').textContent = 'تم النسخ'; } catch (e2) { $('copylbl').textContent = 'تعذر النسخ'; } ta.remove(); }
  setTimeout(() => { $('copylbl').textContent = 'انسخ العقد'; }, 2000);
};
/*DOCX_START*/
function makeDocx(paras) {
  const enc = new TextEncoder();
  const X = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '');
  const body = paras.map((t, i) => {
    const head = i === 0, last = i === paras.length - 1 && paras.length > 2;
    const sz = head ? 32 : last ? 20 : 26;
    const rpr = '<w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/>' + (head ? '<w:b/><w:bCs/>' : '') + '<w:sz w:val="' + sz + '"/><w:szCs w:val="' + sz + '"/><w:rtl/><w:lang w:bidi="ar-EG"/></w:rPr>';
    return '<w:p><w:pPr><w:bidi/><w:spacing w:after="160" w:line="360" w:lineRule="auto"/><w:jc w:val="' + (head ? 'center' : 'both') + '"/></w:pPr><w:r>' + rpr + '<w:t xml:space="preserve">' + X(t) + '</w:t></w:r></w:p>';
  }).join('');
  const files = [
    ['[Content_Types].xml', '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/></Types>'],
    ['_rels/.rels', '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>'],
    ['word/document.xml', '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:body>' + body + '<w:sectPr><w:pgSz w:w="11906" w:h="16838"/><w:pgMar w:top="1134" w:right="1134" w:bottom="1134" w:left="1134" w:header="708" w:footer="708" w:gutter="0"/><w:bidi/></w:sectPr></w:body></w:document>'],
  ].map(([n, c]) => [enc.encode(n), enc.encode(c)]);
  const tbl = new Uint32Array(256);
  for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; tbl[n] = c >>> 0; }
  const crc = (b) => { let c = 0xFFFFFFFF; for (let i = 0; i < b.length; i++) c = tbl[(c ^ b[i]) & 255] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; };
  const parts = [], cen = []; let off = 0;
  const u16 = (v) => [v & 255, (v >> 8) & 255], u32 = (v) => [v & 255, (v >> 8) & 255, (v >> 16) & 255, (v >>> 24) & 255];
  for (const [nm, data] of files) {
    const c = crc(data);
    const lh = new Uint8Array([0x50, 0x4b, 3, 4, ...u16(20), ...u16(0x0800), ...u16(0), ...u16(0), ...u16(0x21), ...u32(c), ...u32(data.length), ...u32(data.length), ...u16(nm.length), ...u16(0)]);
    parts.push(lh, nm, data);
    cen.push(new Uint8Array([0x50, 0x4b, 1, 2, ...u16(20), ...u16(20), ...u16(0x0800), ...u16(0), ...u16(0), ...u16(0x21), ...u32(c), ...u32(data.length), ...u32(data.length), ...u16(nm.length), ...u16(0), ...u16(0), ...u16(0), ...u16(0), ...u32(0), ...u32(off)]), nm);
    off += lh.length + nm.length + data.length;
  }
  const cenLen = cen.reduce((s, x) => s + x.length, 0);
  const end = new Uint8Array([0x50, 0x4b, 5, 6, 0, 0, 0, 0, ...u16(files.length), ...u16(files.length), ...u32(cenLen), ...u32(off), 0, 0]);
  const all = [...parts, ...cen, end], out = new Uint8Array(all.reduce((s, x) => s + x.length, 0)); let p = 0;
  for (const x of all) { out.set(x, p); p += x.length; }
  return out;
}
/*DOCX_END*/
$('word').onclick = () => {
  const paras = lastPlain.split('\n\n').map((l) => l.replace(/\n/g, ' ')).filter(Boolean);
  const bytes = makeDocx(paras);
  const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([bytes], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' }));
  a.download = (kind === 'sale' ? (lastCls === 'vehicle' ? 'car-sale-contract' : 'sale-contract') : lastCls === 'vehicle' ? 'car-rental-contract' : 'lease-contract') + '.docx'; document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 60000);
};
$('prt').onclick = () => window.print();
if (window.Capacitor) $('prt').style.display = 'none'; // window.print() does nothing inside an Android WebView
function route() {
  const h = (location.hash || '').replace(/^#\/?/, '');
  const ok = ['about', 'terms', 'privacy', 'disclaimer', 'contact'].includes(h);
  $('home').hidden = ok;
  for (const k of ['about', 'terms', 'privacy', 'disclaimer', 'contact']) $('pg-' + k).hidden = h !== k;
  $('dock').style.display = ok ? 'none' : '';
  const t = { about: 'عن الأداة', terms: 'شروط الاستخدام', privacy: 'الخصوصية', disclaimer: 'إخلاء المسؤولية', contact: 'تواصل' };
  document.title = ok ? t[h] + ' · مسودة عقد من كلامك' : TITLE0;
  window.scrollTo(0, 0);
}
const TITLE0 = document.title;
addEventListener('hashchange', route); route();
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
function status(m, err) { $('status').className = err ? 'err' : ''; $('status').textContent = m || ''; }
function stopRec() { recording = false; if (rec) { try { rec.stop(); } catch (e) {} } $('mic').className = 'mic'; $('mic').innerHTML = svg('mic'); $('miclbl').textContent = 'تسجيل'; $('mic').setAttribute('aria-label', 'ابدأ التسجيل'); }
$('mic').onclick = () => {
  if (!SR) { status('هذا المتصفح لا يدعم التعرف على الكلام. افتح الصفحة في Chrome، أو اكتب بيدك، أو استخدم ميكروفون لوحة المفاتيح.', true); return; }
  if (recording) { stopRec(); status('توقف التسجيل.'); return; }
  base = $('txt').value; recording = true; $('mic').className = 'mic rec'; $('mic').innerHTML = svg('mic-off'); $('miclbl').textContent = 'إيقاف'; $('mic').setAttribute('aria-label', 'إيقاف التسجيل'); status('جاري الاستماع... تكلم.');
  const start = () => {
    rec = new SR(); rec.lang = 'ar-EG'; rec.interimResults = true; rec.continuous = false;
    rec.onresult = (e) => {
      let fin = '', interim = '';
      for (let i = e.resultIndex; i < e.results.length; i++) { const t = e.results[i][0].transcript; if (e.results[i].isFinal) fin += t; else interim += t; }
      if (fin) { base = (base ? base.replace(/\s*$/, ' ') : '') + fin.trim(); }
      $('txt').value = base + (interim ? ' ' + interim : '');
    };
    rec.onerror = (e) => {
      if (e.error === 'no-speech') return;
      if (e.error === 'not-allowed' || e.error === 'service-not-allowed') { stopRec(); status('الميكروفون غير مسموح. اسمح للصفحة باستخدام الميكروفون من إعدادات الموقع في Chrome ثم جرّب مرة أخرى.', true); }
      else if (e.error === 'network') { stopRec(); status('تعذر الاتصال بخدمة التعرف على الكلام. تأكد من الإنترنت أو اكتب بيدك.', true); }
      else if (e.error === 'audio-capture') { stopRec(); status('لم يُعثر على ميكروفون في هذا الجهاز. اكتب بيدك أو وصّل ميكروفونًا.', true); }
      else if (e.error !== 'aborted') { stopRec(); status('تعذر التسجيل الصوتي. اكتب بيدك أو جرّب مرة أخرى.', true); }
    };
    rec.onend = () => { if (recording) { try { start(); } catch (e) { stopRec(); } } };
    rec.start();
  };
  try { start(); } catch (e) { stopRec(); status('تعذر بدء التسجيل.', true); }
};
