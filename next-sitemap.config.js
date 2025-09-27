/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://ommajithiya.vercel.app/', // Replace with your deployed domain
  generateRobotsTxt: true,           // Generates robots.txt automatically
  sitemapSize: 7000,                  // Optional: limits URLs per sitemap
  changefreq: 'daily',                // Optional
  priority: 0.7,                      // Optional
};
