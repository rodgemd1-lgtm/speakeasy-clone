const { chromium } = require('playwright');

const VIEWPORT = { width: 1920, height: 1080 };

(async () => {
  const browser = await chromium.launch({ headless: true });
  
  // ── ORIGINAL ──
  console.log('[→] Capturing original...');
  let ctx1 = await browser.newContext({ viewport: VIEWPORT, deviceScaleFactor: 1 });
  let p1 = await ctx1.newPage();
  await p1.goto('https://speakeasybarberlounge.com/', { waitUntil: 'networkidle', timeout: 60000 });
  await p1.waitForTimeout(4000);  // Let Elementor animations settle
  const heroH = await p1.evaluate(() => {
    const h = document.querySelector('h1');
    return h ? h.getBoundingClientRect().height : 0;
  });
  if (heroH === 0) {
    console.log('[⚠] Hero still hidden after 4s, waiting 4s more...');
    await p1.waitForTimeout(4000);
  }
  await p1.screenshot({ path: 'original-final.png', fullPage: true });
  const d1 = await p1.evaluate(() => ({w:document.documentElement.scrollWidth,h:document.documentElement.scrollHeight}));
  console.log(`[✓] Original: ${d1.w}×${d1.h} (heroH=${heroH})`);
  
  // Also just capture first 3000px
  await p1.screenshot({ path: 'original-final_top.png', clip: {x:0,y:0,width:1920,height:3000} });
  await ctx1.close();
  
  // ── CLONE ──
  console.log('[→] Capturing clone...');
  let ctx2 = await browser.newContext({ viewport: VIEWPORT, deviceScaleFactor: 1 });
  let p2 = await ctx2.newPage();
  await p2.goto('https://rodgemd1-lgtm.github.io/speakeasy-clone/', { 
    waitUntil: 'domcontentloaded',  // Clone is static, don't wait for network idle
    timeout: 30000 
  });
  await p2.waitForTimeout(1000);  // Allow any JS to execute
  
  await p2.screenshot({ path: 'clone-final.png', fullPage: true });
  const d2 = await p2.evaluate(() => ({w:document.documentElement.scrollWidth,h:document.documentElement.scrollHeight}));
  console.log(`[✓] Clone: ${d2.w}×${d2.h}`);
  
  // Also capture first 3000px
  await p2.screenshot({ path: 'clone-final_top.png', clip: {x:0,y:0,width:1920,height:3000} });
  await ctx2.close();
  
  await browser.close();
  console.log('[✓] All captures complete');
})();
