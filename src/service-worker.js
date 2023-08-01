import { GoogleTranslatorTokenFree } from '@translate-tools/core/translators/GoogleTranslator';
import { YandexTranslator } from '@translate-tools/core/translators/YandexTranslator'


const translator = new GoogleTranslatorTokenFree();

translator
    .translate('Hello world', 'en', 'fr')
    .then((translate) => console.log('Translate result', translate));