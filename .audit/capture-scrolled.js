const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  
  for (const site of [
    { name: 'original', url: 'https://speakeasybarberlounge.com/' },
    { name: 'clone', url: 'https://rodgemd1-lgtm.github.io/speakeasy-clone/' }
  ]) {
    const context = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
    const page = await context.newPage();
    await page.goto(site.url, { waitUntil: 'load', timeout: 120000 });
    
    // Trigger entrance animations by scrolling through the page
    await page.evaluate(async () => {
      const step = window.innerHeight;
      for (let i = 0; i < document.body.scrollHeight; i += step) {
        window.scrollTo(0, i);
        await new Promise(r => setTimeout(r, 200));
      }
      window.scrollTo(0, 0);
    });
    
    await page.waitForTimeout(1000);
    
    await page.screenshot({ 
      path: `${site.name}-scrolled.png`, 
      fullPage: true 
    });
    console.log(`${site.name}: ${await page.evaluate(() => document.body.scrollHeight)}px tall`);
    await context.close();
  }
  await browser.close();
})();