const { chromium } = require('/Users/mikerodgers/node_modules/playwright');
const path = require('path');

const outDir = '/Users/mikerodgers/Desktop/speakeasy-clone/.audit';

const shots = [
  { url: 'https://speakeasybarberlounge.com/', name: 'original-desktop.png',       w: 1920, h: 1080 },
  { url: 'https://speakeasybarberlounge.com/', name: 'original-laptop.png',        w: 1440, h: 900 },
  { url: 'https://speakeasybarberlounge.com/', name: 'original-small-laptop.png',  w: 1280, h: 800 },
  { url: 'https://speakeasybarberlounge.com/', name: 'original-tablet.png',        w: 768,  h: 1024 },
  { url: 'https://speakeasybarberlounge.com/', name: 'original-mobile.png',        w: 414,  h: 896 },
  { url: 'https://speakeasybarberlounge.com/', name: 'original-mobile-xs.png',     w: 375,  h: 812 },
  { url: 'https://rodgemd1-lgtm.github.io/speakeasy-clone/', name: 'clone-desktop.png',       w: 1920, h: 1080 },
  { url: 'https://rodgemd1-lgtm.github.io/speakeasy-clone/', name: 'clone-laptop.png',        w: 1440, h: 900 },
  { url: 'https://rodgemd1-lgtm.github.io/speakeasy-clone/', name: 'clone-small-laptop.png',  w: 1280, h: 800 },
  { url: 'https://rodgemd1-lgtm.github.io/speakeasy-clone/', name: 'clone-tablet.png',        w: 768,  h: 1024 },
  { url: 'https://rodgemd1-lgtm.github.io/speakeasy-clone/', name: 'clone-mobile.png',        w: 414,  h: 896 },
  { url: 'https://rodgemd1-lgtm.github.io/speakeasy-clone/', name: 'clone-mobile-xs.png',     w: 375,  h: 812 },
];

(async () => {
  const browser = await chromium.launch();
  for (const s of shots) {
    const context = await browser.newContext({
      viewport: { width: s.w, height: s.h },
      deviceScaleFactor: 1,
    });
    const page = await context.newPage();
    await page.goto(s.url, { waitUntil: 'networkidle' });
    const outPath = path.join(outDir, s.name);
    await page.screenshot({ path: outPath, fullPage: true });
    console.log('Captured ' + s.name + ' -> ' + outPath);
    await context.close();
  }
  await browser.close();
})();
