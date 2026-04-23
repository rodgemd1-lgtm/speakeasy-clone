// capture.js — identical viewport, full-page capture for both sites
const { chromium } = require('playwright');
const fs = require('fs');

const VIEWPORT = { width: 1920, height: 1080 };
const SITES = [
  { name: 'original', url: 'https://speakeasybarberlounge.com/' },
  { name: 'clone',    url: 'https://rodgemd1-lgtm.github.io/speakeasy-clone/?no=' + Date.now() }
];

(async () => {
  const browser = await chromium.launch({ headless: true });
  
  for (const site of SITES) {
    const context = await browser.newContext({ viewport: VIEWPORT });
    const page = await context.newPage();
    
    await page.goto(site.url, { waitUntil: 'load', timeout: 90000 });
    
    // Wait for hero section
    try {
      await page.waitForSelector('h1, .elementor-heading-title', { timeout: 10000 });
    } catch {}
    
    // Capture full page
    const path = `${site.name}-matched.png`;
    await page.screenshot({ path, fullPage: true });
    
    // Get dimensions
    const dims = await page.evaluate(() => ({
      width: document.documentElement.scrollWidth,
      height: document.documentElement.scrollHeight
    }));
    
    console.log(`${site.name}: ${path} — ${dims.width}×${dims.height}`);
    await context.close();
  }
  
  await browser.close();
})();
