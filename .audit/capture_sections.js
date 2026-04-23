const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  
  for (const site of [
    { name: 'original', url: 'https://speakeasybarberlounge.com/' },
    { name: 'clone', url: 'https://rodgemd1-lgtm.github.io/speakeasy-clone/' }
  ]) {
    const ctx = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
    const page = await ctx.newPage();
    await page.goto(site.url, { waitUntil: 'load', timeout: 120000 });
    await page.waitForTimeout(4000);
    
    // Full page
    await page.screenshot({ path: site.name + '-top3k.png', clip: { x: 0, y: 0, width: 1920, height: 3000 } });
    await page.screenshot({ path: site.name + '-hero.png', clip: { x: 0, y: 0, width: 1920, height: 1200 } });
    await page.screenshot({ path: site.name + '-cards.png', clip: { x: 0, y: 3200, width: 1920, height: 1500 } });
    await page.screenshot({ path: site.name + '-faq.png', clip: { x: 0, y: 4200, width: 1920, height: 1200 } });
    await page.screenshot({ path: site.name + '-footer.png', clip: { x: 0, y: 5400, width: 1920, height: 1800 } });
    
    const dims = await page.evaluate(() => ({ width: document.documentElement.scrollWidth, height: document.body.scrollHeight }));
    console.log(site.name + ': ' + JSON.stringify(dims));
    await ctx.close();
  }
  
  await browser.close();
})();