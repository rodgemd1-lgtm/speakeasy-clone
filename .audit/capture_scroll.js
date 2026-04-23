const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  
  await page.goto('https://speakeasybarberlounge.com/', { waitUntil: 'networkidle', timeout: 60000 });
  console.log('[✓] Page loaded');
  
  // Scroll down to trigger lazy loading, then back to top
  await page.evaluate(() => { window.scrollTo(0, 2000); });
  await page.waitForTimeout(2000);
  await page.evaluate(() => { window.scrollTo(0, 0); });
  await page.waitForTimeout(3000);
  
  // Check what's actually visible
  const contentCheck = await page.evaluate(() => {
    const h1 = document.querySelector('h1, [class*="headline"]');
    const hero = document.querySelector('.elementor-top-section, .elementor-section-wrap > .elementor-section');
    const heroImg = document.querySelector('img[class*="hero"], .elementor-section img');
    return {
      hasH1: !!h1,
      h1Text: h1 ? h1.innerText?.substring(0, 50) : null,
      h1Height: h1 ? h1.getBoundingClientRect().height : 0,
      hasHero: !!hero,
      heroHTML: hero ? hero.outerHTML.substring(0, 200) : null,
      hasHeroImg: !!heroImg,
    };
  });
  console.log('[ℹ] Content check:', JSON.stringify(contentCheck, null, 2));
  
  await page.screenshot({ path: 'original-scrolled.png', clip: { x: 0, y: 0, width: 1920, height: 3500 } });
  console.log('[✓] Screenshot saved');
  
  await browser.close();
})();
