import { useTranslation as i18nUseTranslation } from 'react-i18next';
export const useTranslation = (nameSpace = '') => {
  const { t: i18nT, ...rest } = i18nUseTranslation(nameSpace);
  return {
    t: (key: string) => i18nT<string>(key),
    ...rest,
  };
};
