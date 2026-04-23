const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  
  for (const site of [
    { name: 'original', url: 'https://speakeasybarberlounge.com/' },
    { name: 'clone', url: 'https://rodgemd1-lgtm.github.io/speakeasy-clone/' }
  ]) {
    const ctx = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
    const page = await ctx.newPage();
    await page.goto(site.url, { waitUntil: 'networkidle', timeout: 120000 });
    
    // Wait for Elementor to initialize and reveal animated elements
    await page.waitForTimeout(10000);  // 10 seconds for Elementor
    
    // Trigger scroll animations by scrolling through then back to top
    await page.evaluate(async () => {
      window.scrollTo(0, document.body.scrollHeight);
      await new Promise(r => setTimeout(r, 2000));
      window.scrollTo(0, 0);
      await new Promise(r => setTimeout(r, 1000));
    });
    
    await page.screenshot({ path: site.name + '-v6.png', fullPage: true });
    
    // Verify hero is visible
    const hero = await page.evaluate(() => {
      const h1 = document.querySelector('h1.elementor-heading-title');
      if (h1) {
        const rect = h1.getBoundingClientRect();
        return { visible: rect.height > 0 && rect.width > 0, y: rect.top, text: h1.textContent?.trim()?.slice(0, 40) };
      }
      return { visible: false };
    });
    console.log(site.name + ' hero: ' + JSON.stringify(hero));
    
    await ctx.close();
  }
  await browser.close();
})();
