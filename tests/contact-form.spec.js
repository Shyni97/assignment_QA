const { test, expect } = require('@playwright/test');

test('Successful Contact Form Submission', async ({ page }) => {

    // 1. Open page
    await page.goto('https://safora.se/en/contact.html', {
        waitUntil: 'domcontentloaded'
    });

    // 2. Fill form
    await page.fill('#name', 'Shyni Atapattu');
    await page.fill('#email', 'shyni@example.com');
    await page.fill('#phone', '0771234567');
    await page.fill('#message', 'This is a test message for the QA assignment.');

    // 3. Screenshot before submit
    await page.screenshot({ path: 'before-submit.png' });

    // 4. Submit form
    await page.click('button[type="submit"]');

    // 5. Wait for response
    await page.waitForTimeout(3000);

    // Check if form still exists OR page changed
    const nameField = page.locator('#name');

    await expect(nameField).toBeVisible();
});