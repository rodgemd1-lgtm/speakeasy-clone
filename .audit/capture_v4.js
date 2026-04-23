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
    
    // Inject width constraint inline for clone
    if (site.name === 'clone') {
      await page.addStyleTag({ content: 'html, body { max-width: 100vw !important; overflow-x: hidden !important; }' });
    }
    
    // Scroll through page to trigger entrance animations (both sites use Elementor scroll animations)
    await page.evaluate(async () => {
      const step = window.innerHeight;
      const maxScroll = document.body.scrollHeight;
      for (let i = 0; i <= maxScroll; i += step) {
        window.scrollTo(0, i);
        await new Promise(r => setTimeout(r, 300));
      }
      window.scrollTo(0, 0);
    });
    
    await page.waitForTimeout(1000); // settle after scroll back to top
    
    // Capture screenshot
    await page.screenshot({ 
      path: `${site.name}-v4-final.png`, 
      fullPage: true 
    });
    
    const dims = await page.evaluate(() => ({
      width: document.documentElement.scrollWidth,
      height: document.body.scrollHeight
    }));
    console.log(`${site.name}: ${JSON.stringify(dims)}`);
    
    await context.close();
  }
  
  await browser.close();
})();
