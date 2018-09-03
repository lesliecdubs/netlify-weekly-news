const stripLeadingZerosFromDate = date => {
  return date.split('-').reduce((date, datePart) => {
    return date += parseInt(datePart) + '/'
  }, '').slice(0, -1)
}

const normalizeDateData = data => ({
  siteName: data.site,
  pageviews: data.pageviews,
  deploys: data.deploys,
  events: data.events
})

export const normalizeDate = site => ({
  date: stripLeadingZerosFromDate(site.node.date),
  data: site.node.data.map(normalizeDateData)
})
