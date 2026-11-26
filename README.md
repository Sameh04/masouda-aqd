# مسودة عقد من كلامك

أداة مجانية تجريبية: تحكي اتفاق بيع أو إيجار بالعامية المصرية فتطلع مسودة عقد مرتبة، وتراجعها على نصوص القانون المدني المصري. صفحة HTML واحدة، كل المعالجة داخل المتصفح.

**تنبيه:** المسودة للاسترشاد فقط، وليست استشارة قانونية، وراجعها مع محامٍ قبل التوقيع.

Free experimental tool: dictate a sale or lease agreement in Egyptian Arabic, get a formatted draft checked against the Egyptian Civil Code. Single static page, runs fully in the browser. Draft only, not legal advice, have a lawyer review before signing.

Live: https://masouda-aqd-eg.surge.sh

## Build
`node build.mjs index.html` builds from `tpl.html`, `logic.ts`, `fonts.css`.

## Tests
The `*.mjs` files other than `build.mjs` (`sale2`, `qa2`, `fuzz`, `cmp2`) are test scripts with invented data only (all names and ID numbers are fake).

## Known limits
No lawyer review yet. Android microphone untested. Long unpunctuated speech can merge fields; the parser leaves a field blank rather than guess.
