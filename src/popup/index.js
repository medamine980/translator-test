import { GoogleTranslatorTokenFree, } from '@translate-tools/core/translators/GoogleTranslator';

new GoogleTranslatorTokenFree()

const outputEle = document.querySelector("#output");
const translator = new GoogleTranslatorTokenFree();

translator
    .translate('Hello world', 'en', 'fr')
    .then((translate) => outputEle.value = translate);


