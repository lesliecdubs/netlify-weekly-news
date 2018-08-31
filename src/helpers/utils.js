export const determineTotalDeploysBySite = data => {
  let cominbator = {}

  data.forEach(el => {
    cominbator[el.site] = (cominbator[el.site])
      ? cominbator[el.site] += +el.deploys
      : +el.deploys
    }
  )

  return Object.keys(cominbator).map(el => {
    return {
      site: el,
      deploys: cominbator[el]
    }
  })
}
