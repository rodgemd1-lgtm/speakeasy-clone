
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
    await page.waitForTimeout(6000); // wait for Elementor JS hero injection + animations
    
    await page.screenshot({ 
      path: `${site.name}-v3-delayed.png`, 
      fullPage: true 
    });
    console.log(`${site.name}: ${await page.evaluate(() => document.body.scrollHeight)}px tall`);
    await context.close();
  }
  await browser.close();
})();
