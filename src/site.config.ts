interface SiteConfig {
  author: string;
  title: string;
  description: string;
  lang: string;
  ogLocale: string;
  themeColorLight: string;
  themeColorDark: string;
  date: {
    locale: string | string[] | undefined;
    options: Intl.DateTimeFormatOptions;
  };
}

export const siteConfig: SiteConfig = {
  // Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
  author: 'Yefree Valdez',
  // Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
  title: 'Devlog',
  // Meta property used as a default description meta property
  description: 'Un blog por y para programadores, y no tan programadores',
  // HTML lang property, found in src/layouts/Base.astro L:18
  lang: 'es-GB',
  // Meta property, found in src/components/BaseHead.astro L:42
  ogLocale: 'es_GB',
  // Sets the meta data theme-color, found in src/components/BaseHead.astro L:34. Toggling the dark mode will update the meta content with either light/dark color, implementation in src/layouts/Base.astro L:41.
  themeColorLight: '#fafafa',
  themeColorDark: '#1d1f21',
  // Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
  date: {
    locale: 'es-GB',
    options: {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    },
  },
};
