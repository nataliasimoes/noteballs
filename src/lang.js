import  { createI18n }  from 'vue-i18n'
import en from '@/langs/en';
import pt from '@/langs/pt'

const messages = {
    en,
    pt
}

export default createI18n({
    locale: 'pt',
    messages
});