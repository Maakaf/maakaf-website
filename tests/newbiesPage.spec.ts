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

  test('should render NEWBIES', async ({ page }) => {
    await page.goto('http://localhost:3000/he/newbies');
    expect(await page.textContent('h1')).toContain('NEWBIES');
  });

  test('External links contains corrent urls', async ({ page }) => {
    await page.goto('http://localhost:3000/he/newbies');

    const linksData = [
      {
        name: 'Maakaf_Logo',
        link: 'https://github.com/UrielOfir/os-practice',
      },
      {
        name: 'Discord_Logo',
        link: 'https://discord.com/invite/a2VyCjRk2M',
      },
      {
        name: 'WhatsApp_Logo',
        link: 'https://chat.whatsapp.com/E5a59DtSaHNBwnczxVW1FY',
      },
    ];

    for (const linkData of linksData) {
      const linkSelector = `[data-testid="NewbiesExternalLink-${linkData.name}"]`;
      const linkExists = await page.waitForSelector(linkSelector);
      expect(linkExists).toBeTruthy();

      const linkElement = await page.$(linkSelector);
      const linkURL = await linkElement?.getAttribute('href');
      console.log({ linkURL, linkData: linkData.link });
    }
  });

  test('FAQ items are clickable and expandable', async ({ page }) => {
    await page.goto('http://localhost:3000/he/newbies');
    await page.waitForSelector('[data-testid="faq-section"]');

    const faqItems = await page.$$('[data-testid^="faq-item-"]');

    for (let i = 0; i < faqItems.length; i++) {
      const faqItem = faqItems[i];

      const trigger = await faqItem.$('[data-testid^="faq-trigger-"]');
      await trigger?.click();

      await page.waitForSelector(
        '[data-testid^="faq-content-"][aria-expanded="true"]'
      );

      const content = await faqItem.$('[data-testid^="faq-content-"]');
      expect(content).not.toBeNull();

      await trigger?.click();

      await page.waitForSelector(
        '[data-testid^="faq-content-"][aria-expanded="false"]'
      );
    }
  });
});
