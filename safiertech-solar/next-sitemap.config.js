/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://safiertech.com",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
  exclude: ["/api/*"],
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  generateIndexSitemap: false,
  transform: async (config, path) => {
    // Custom priority for important pages
    const priorities = {
      "/": 1.0,
      "/quote": 0.9,
      "/about": 0.8,
      "/products": 0.7,
      "/blog": 0.6,
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorities[path] || config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },
}
