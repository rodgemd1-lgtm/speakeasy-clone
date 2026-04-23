const { chromium } = require('playwright');

const VIEWPORT = { width: 1920, height: 3000 };  // Tall viewport to capture more

(async () => {
  const browser = await chromium.launch({ headless: true });
  
  // ── ORIGINAL ──
  console.log('[→] Capturing original...');
  let ctx1 = await browser.newContext({ viewport: VIEWPORT, deviceScaleFactor: 1 });
  let p1 = await ctx1.newPage();
  await p1.goto('https://speakeasybarberlounge.com/', { waitUntil: 'load', timeout: 60000 });
  
  // Wait for hero title with long timeout
  const heroEl = await p1.waitForSelector('h1, .elementor-heading-title, .elementor-headline', { timeout: 30000 });
  console.log('[✓] Hero element found');
  
  // Force scroll to top then wait for any entrance animation
  await p1.evaluate(() => window.scrollTo(0, 0));
  await p1.waitForTimeout(3000);
  
  const dims = await p1.evaluate(() => ({w:document.documentElement.scrollWidth,h:document.documentElement.scrollHeight}));
  console.log(`[ℹ] Document dims: ${dims.w}×${dims.h}`);
  
  // Capture just first 4000px
  await p1.screenshot({ path: 'original-correct.png', clip: {x:0,y:0,width:1920,height:Math.min(4000,dims.h)} });
  console.log(`[✓] original-correct.png saved`);
  
  await ctx1.close();
  await browser.close();
})();
