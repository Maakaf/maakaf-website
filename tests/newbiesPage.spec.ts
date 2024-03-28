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
        icon: 'Maakaf_Logo',
        link: 'https://github.com/UrielOfir/os-practice',
      },
      {
        icon: 'Discord_Logo',
        link: 'https://discord.com/invite/a2VyCjRk2M',
      },
      {
        icon: 'WhatsApp_Logo',
        link: 'https://chat.whatsapp.com/E5a59DtSaHNBwnczxVW1FY',
      },
    ];

    for (const linkData of linksData) {
      const linkSelector = `[data-testid="NewbiesExternalLink-${linkData.icon}"]`;
      const linkExists = await page.waitForSelector(linkSelector);
      expect(linkExists).toBeTruthy();

      const linkElement = await page.$(linkSelector);
      const linkURL = await linkElement.getAttribute('href');
      console.log({ linkURL, linkData: linkData.link });
    }
  });
});
