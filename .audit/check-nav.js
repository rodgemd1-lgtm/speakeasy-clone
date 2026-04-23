const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
  const page = await context.newPage();
  
  await page.goto('https://rodgemd1-lgtm.github.io/speakeasy-clone/?nocache=18', { waitUntil: 'load' });
  
  const result = await page.evaluate(() => {
    const ul = document.querySelector('ul.hfe-nav-menu');
    if (!ul) return { found: false };
    const s = getComputedStyle(ul);
    const lis = [...ul.children];
    // Check all top positions
    const tops = lis.map(li => li.getBoundingClientRect().top);
    const allSame = tops.every(t => t === tops[0]);
    return {
      found: true,
      windowWidth: window.innerWidth,
      flexWrap: s.flexWrap,
      liCount: lis.length,
      liTops: tops,
      allOnOneLine: allSame,
      faqsText: tops.length >= 6 ? tops[5] : null,
      firstTop: tops[0]
    };
  });
  
  console.log(JSON.stringify(result, null, 2));
  await browser.close();
})();
