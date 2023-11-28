// Utilities
import { inject, provide } from 'vue';
import { defaultRtl } from "../locale/index.mjs";
import { createVuetifyAdapter } from "../locale/adapters/vuetify.mjs"; // Types
export const LocaleSymbol = Symbol.for('vuetify:locale');
function isLocaleInstance(obj) {
  return obj.name != null;
}
export function createLocale(options) {
  const i18n = options?.adapter && isLocaleInstance(options?.adapter) ? options?.adapter : createVuetifyAdapter(options);
  const rtl = createRtl(i18n, options);
  return {
    ...i18n,
    ...rtl
  };
}
export function useLocale() {
  const locale = inject(LocaleSymbol);
  if (!locale) throw new Error('[Vuetify] Could not find injected locale instance');
  return locale;
}
export function provideLocale(props) {
  const locale = inject(LocaleSymbol);
  if (!locale) throw new Error('[Vuetify] Could not find injected locale instance');
  const i18n = locale.provide(props);
  const rtl = provideRtl(i18n, locale.rtl, props);
  const data = {
    ...i18n,
    ...rtl
  };
  provide(LocaleSymbol, data);
  return data;
}

// RTL

export const RtlSymbol = Symbol.for('vuetify:rtl');
export function createRtl(i18n, options) {
  const rtl = options?.rtl ?? defaultRtl;
  // @ts-expect-error
  const isRtl = rtl[i18n.current.value] ?? false;
  const rtlClasses = isRtl ? 'v-locale--is-rtl' : 'v-locale--is-ltr';
  return {
    isRtl,
    rtl,
    rtlClasses
  };
}
export function provideRtl(locale, rtl, props) {
  const isRtl = props.rtl ?? rtl[locale.current.value] ?? false;
  const rtlClasses = isRtl ? 'v-locale--is-rtl' : 'v-locale--is-ltr';
  return {
    isRtl,
    rtl,
    rtlClasses
  };
}
export function useRtl() {
  const locale = inject(LocaleSymbol);
  if (!locale) throw new Error('[Vuetify] Could not find injected rtl instance');
  return {
    isRtl: locale.isRtl,
    rtlClasses: locale.rtlClasses
  };
}
//# sourceMappingURL=locale.mjs.map