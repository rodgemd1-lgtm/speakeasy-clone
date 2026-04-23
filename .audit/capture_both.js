const { chromium } = require('playwright');

const VIEWPORT = { width: 1920, height: 4000 };

(async () => {
  const browser = await chromium.launch({ headless: true });
  
  // ── ORIGINAL ──
  console.log('[→] Capturing original...');
  let ctx1 = await browser.newContext({ viewport: VIEWPORT, deviceScaleFactor: 1 });
  let p1 = await ctx1.newPage();
  await p1.goto('https://speakeasybarberlounge.com/', { waitUntil: 'load', timeout: 60000 });
  await p1.waitForTimeout(4000);  // Wait for Elementor hero entrance animation
  await p1.evaluate(() => window.scrollTo(0, 0));
  await p1.waitForTimeout(1000);
  
  const d1 = await p1.evaluate(() => ({w:document.documentElement.scrollWidth,h:document.documentElement.scrollHeight}));
  const clipH = Math.min(4000, d1.h);
  await p1.screenshot({ path: 'orig-top4k.png', clip: {x:0,y:0,width:1920,height:clipH} });
  console.log(`[✓] Original: ${d1.w}×${d1.h} (clipped to ${clipH})`);
  
  await ctx1.close();
  
  // ── CLONE ──
  console.log('[→] Capturing clone...');
  let ctx2 = await browser.newContext({ viewport: VIEWPORT, deviceScaleFactor: 1 });
  let p2 = await ctx2.newPage();
  await p2.goto('https://rodgemd1-lgtm.github.io/speakeasy-clone/', { 
    waitUntil: 'domcontentloaded',
    timeout: 30000 
  });
  await p2.waitForTimeout(500);  // Static page, minimal wait
  
  const d2 = await p2.evaluate(() => ({w:document.documentElement.scrollWidth,h:document.documentElement.scrollHeight}));
  const clipH2 = Math.min(4000, d2.h);
  await p2.screenshot({ path: 'clone-top4k.png', clip: {x:0,y:0,width:1920,height:clipH2} });
  console.log(`[✓] Clone: ${d2.w}×${d2.h} (clipped to ${clipH2})`);
  
  await ctx2.close();
  await browser.close();
  console.log('[✓] Both captures complete');
})();
