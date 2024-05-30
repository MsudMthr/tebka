import ApiService from '@/services/api.service';
import TokenService from '@/services/token.service';
import ThemeService from '@/services/theme.service';
import LanguageService from '@/services/language.service';

import AuthenticateUser from '@/services/middleware/AuthenticateUser';

import HttpHeader from '@/enums/HttpHeader';
import MimeType from '@/enums/MimeType';

ApiService.setHeader(HttpHeader.CONTENT_TYPE, MimeType.APPLICATION_JSON);
ApiService.addResponseMiddleware(AuthenticateUser);

if (TokenService.isExist()) {
    ApiService.setHeader(HttpHeader.AUTHORIZATION, `Bearer ${TokenService.get()}`);
}

ThemeService.updateDOM();

if (LanguageService.isRtl()) {
    import('@/assets/scss/app-rtl.scss');
} else {
    import('@/assets/scss/app-ltr.scss');
}

switch (LanguageService.get()) {
    case 'fa':
        import('@/assets/scss/typography/_typo.scss');
        break;
    case 'en':
        import('@/assets/scss/typography/_typo-en.scss');
        break;
    case 'ar':
        import('@/assets/scss/typography/_typo-ar.scss');
        break;
    default:
        import('@/assets/scss/typography/_typo.scss');
        break;
}