const routeFactory = (name, path, opts = {}) => ({name, path, ...opts})

export const navRoutes = [
  routeFactory('Sites', '/404'),
  routeFactory('Domains', '/404'),
  routeFactory('OAuth applications', '/404'),
  routeFactory('Weekly news', '/'),
  routeFactory('Account settings', '/404')
]

export const footerRoutes = [
  routeFactory('Docs', 'https://www.netlify.com/docs/'),
  routeFactory('Pricing', 'https://www.netlify.com/pricing/'),
  routeFactory('Support', 'https://www.netlify.com/support'),
  routeFactory('News', 'https://www.netlify.com/blog/'),
  routeFactory('Terms', 'https://www.netlify.com/tos')
]
