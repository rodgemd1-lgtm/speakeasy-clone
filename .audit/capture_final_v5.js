const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const results = [];
  
  for (const site of [
    { name: 'original', url: 'https://speakeasybarberlounge.com/' },
    { name: 'clone', url: 'https://rodgemd1-lgtm.github.io/speakeasy-clone/' }
  ]) {
    const ctx = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
    const page = await ctx.newPage();
    await page.goto(site.url, { waitUntil: 'load', timeout: 120000 });
    await page.waitForTimeout(4000);
    
    const dims = await page.evaluate(() => ({ width: document.documentElement.scrollWidth, height: document.body.scrollHeight }));
    console.log(site.name + ' full: ' + JSON.stringify(dims));
    results.push({ name: site.name, ...dims });
    
    // Capture full
    await page.screenshot({ path: site.name + '-full.png', fullPage: true });
    
    await ctx.close();
  }
  
  console.log('\nFinal results:');
  for (const r of results) {
    console.log(r.name + ': ' + r.width + ' x ' + r.height);
  }
  
  await browser.close();
})();