import i18next from 'i18next';
import { z } from 'zod';
import { makeZodI18nMap } from 'zod-i18n-map';

export function addTranslations() {
  i18next.init({
    resources: {
      de: {
        custom: {
          blank_error_msg: 'Darf nicht leer sein',
        },
      },
    },
  });

  z.setErrorMap(makeZodI18nMap({ ns: ['custom'] }));
}
