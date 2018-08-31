const formatDate = date => date[1] +'/'+ date[2] +'/'+ date[0]

const normalizeDateData = data => ({
  siteName: data.site,
  pageviews: data.pageviews,
  deploys: data.deploys
})

export const normalizeDate = site => ({
  date: formatDate(site.node.date.split('-')),
  data: site.node.data.map(normalizeDateData)
})
