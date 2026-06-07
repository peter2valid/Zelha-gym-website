export const useSiteContent = () =>
  useAsyncData('site', () => queryContent('/site').findOne())
