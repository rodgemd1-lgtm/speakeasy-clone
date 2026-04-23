const { chromium } = require('playwright');

const VIEWPORT = { width: 1920, height: 1080 };
const SITES = [
  { name: 'original_v2', url: 'https://speakeasybarberlounge.com/' },
  { name: 'clone_v2',    url: 'https://rodgemd1-lgtm.github.io/speakeasy-clone/' }
];

(async () => {
  const browser = await chromium.launch({ headless: true });
  
  for (const site of SITES) {
    const context = await browser.newContext({ 
      viewport: VIEWPORT,
      deviceScaleFactor: 1  // CRITICAL: prevent retina upscaling
    });
    const page = await context.newPage();
    
    console.log(`\n[→] Capturing ${site.name}...`);
    await page.goto(site.url, { 
      waitUntil: 'networkidle',
      timeout: 90000 
    });
    
    // Wait for hero section to be visible (Elementor JS animation)
    console.log(`[⏳] Waiting for hero animation...`);
    await page.waitForTimeout(5000);
    
    // Verify hero is actually visible before capture
    const heroState = await page.evaluate(() => {
      const h1 = document.querySelector('h1, .elementor-heading-title');
      if (!h1) return { found: false };
      const rect = h1.getBoundingClientRect();
      return { found: true, visible: rect.height > 0 && rect.top >= 0, top: rect.top, height: rect.height };
    });
    console.log(`[ℹ] Hero state:`, heroState);
    
    // Capture full page
    const path = `${site.name}.png`;
    await page.screenshot({ path, fullPage: true });
    
    // Get dims
    const dims = await page.evaluate(() => ({
      width: document.documentElement.scrollWidth,
      height: document.documentElement.scrollHeight
    }));
    
    console.log(`[✓] ${site.name}: ${path} — ${dims.width}×${dims.height}`);
    
    // Also capture just top 2000px for quick compare
    await page.screenshot({ 
      path: `${site.name}_top.png`,
      clip: { x: 0, y: 0, width: VIEWPORT.width, height: Math.min(2000, dims.height) }
    });
    
    await context.close();
  }
  
  await browser.close();
  console.log('\n[✓] All captures done');
})();
