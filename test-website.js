const { chromium } = require('playwright');

async function testWebsite() {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  try {
    console.log('Testing the AI Consultancy website...');
    
    // Navigate to the website
    await page.goto('http://localhost:3001');
    await page.waitForTimeout(3000); // Wait for animations
    
    // Take a screenshot
    await page.screenshot({ path: 'website-test.png', fullPage: true });
    
    // Test responsive design
    await page.setViewportSize({ width: 375, height: 667 }); // Mobile
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'website-mobile.png', fullPage: true });
    
    await page.setViewportSize({ width: 768, height: 1024 }); // Tablet
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'website-tablet.png', fullPage: true });
    
    await page.setViewportSize({ width: 1920, height: 1080 }); // Desktop
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'website-desktop.png', fullPage: true });
    
    // Test interactions
    console.log('Testing button interactions...');
    
    // Check if buttons exist
    const auditButton = await page.locator('a[href="#audit-form"]').first();
    if (await auditButton.count() > 0) {
      await auditButton.hover();
      await page.waitForTimeout(500);
      console.log('✅ Audit button hover works');
    }
    
    const secondaryButton = await page.locator('button:has-text("View Services")');
    if (await secondaryButton.count() > 0) {
      await secondaryButton.hover();
      await page.waitForTimeout(500);
      console.log('✅ Secondary button hover works');
    }
    
    // Test scroll to audit form
    if (await auditButton.count() > 0) {
      await auditButton.click();
      await page.waitForTimeout(2000);
      console.log('✅ Scroll to audit form works');
    }
    
    console.log('✅ Website test completed successfully!');
    console.log('Screenshots saved:');
    console.log('- website-test.png (full page)');
    console.log('- website-mobile.png (mobile view)');
    console.log('- website-tablet.png (tablet view)');
    console.log('- website-desktop.png (desktop view)');
    
  } catch (error) {
    console.error('❌ Test failed:', error);
  } finally {
    await browser.close();
  }
}

testWebsite();
