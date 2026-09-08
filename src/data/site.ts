export const siteConfig = {
  url: 'https://www.doguskoksal.com',
  description: 'Doğuş Köksal is a software engineer in Turkey building full-stack web applications and applied AI projects, with hands-on cybersecurity experience.',
  mediumUrl: 'https://medium.com/@doguskoksl',
  bacteriophageArticleUrl: 'https://medium.com/@doguskoksl/mikroskobik-avc%C4%B1lar-bakteriyofajlara-genel-bir-bak%C4%B1%C5%9F-caa61dea5da8',
  nowLabel: 'September 2026',
  resumeUpdated: '23 Jul 2026',
} as const;

export const personId = new URL('/#person', siteConfig.url).href;
