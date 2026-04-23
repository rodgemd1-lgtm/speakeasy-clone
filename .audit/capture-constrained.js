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
    
    // Inject width constraint
    await page.addStyleTag({ content: 'html, body { max-width: 100vw !important; overflow-x: hidden !important; }' });
    
    await page.waitForTimeout(3000);
    
    await page.screenshot({ 
      path: `${site.name}-constrained.png`, 
      fullPage: true 
    });
    console.log(`${site.name}: ${await page.evaluate(() => ({ width: document.documentElement.scrollWidth, height: document.body.scrollHeight }))}`);
    await context.close();
  }
  await browser.close();
})();