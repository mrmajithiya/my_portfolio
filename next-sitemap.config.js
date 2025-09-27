/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://ommajithiya.vercel.app/', // Replace with your domain
  generateRobotsTxt: true,           // Automatically creates robots.txt
  sitemapSize: 7000,                  // Maximum URLs per sitemap file
  changefreq: 'weekly',               // Frequency for crawling
  priority: 0.7,                      // Default priority
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },   // Allow all bots
    ],
  },
};
