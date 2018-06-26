import en from './en'
import cn from './cn'
import VueI18n from 'vue-i18n'
import Vue from 'vue'
Vue.use(VueI18n)
import { getItem } from '@/utils/$storage';

const messages = {
    en: en,
    cn: cn
}
let storeageLocale = getItem('vue.locale');
const i18n = new VueI18n({
    locale: storeageLocale ? storeageLocale : 'cn',
    messages
})

export default i18n;