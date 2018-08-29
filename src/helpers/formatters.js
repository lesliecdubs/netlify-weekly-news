export const normalizeSiteData = site => ({
  name: site.node.siteName,
  url: site.node.siteUrl,
  pageViews: site.node.pageViews
})
