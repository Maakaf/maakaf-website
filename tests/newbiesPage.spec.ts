import { test, expect } from '@playwright/test';

test.describe('Test Newbies page', () => {
  test('should navigate to the Newbis page', async ({ page }) => {
    await page.goto('http://localhost:3000/he');
    await page.click('text="קהילה"');
    await page.click('[data-testid="Newbies"]');

    await page.waitForNavigation();

    const pageTitle = await page.title();
    expect(pageTitle).toContain('Newbies');
  });
});
