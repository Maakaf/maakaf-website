import { test, expect, Page } from '@playwright/test';

const BASE_URL = 'http://localhost:3000/he';

async function checkElementVisibility(page: Page, elementTestId: string) {
  const element = page.getByTestId(elementTestId);
  element.scrollIntoViewIfNeeded();
  const isVisible = await element.isVisible();
  expect(isVisible).toBeTruthy();
}
test('Check main page elements exist', async ({ page }) => {
  await page.goto(BASE_URL);

  await checkElementVisibility(page, 'homePage-title');
  await checkElementVisibility(page, 'homePage-discordLink');

  await checkElementVisibility(page, 'linusTorvaldsQuote');

  await checkElementVisibility(page, 'beOurFirendsTitle');
  await checkElementVisibility(page, 'beOurFirendsItemContainer');
  await checkElementVisibility(page, 'beOurFirendsItem0');
  await checkElementVisibility(page, 'beOurFirendsItem1');
  await checkElementVisibility(page, 'beOurFirendsItem2');
  await checkElementVisibility(page, 'beOurFirendsItem3');
  await checkElementVisibility(page, 'beOurFirendsItem4');
  await checkElementVisibility(page, 'beOurFirendsItem5');

  await checkElementVisibility(page, 'pathsTitle');
  await checkElementVisibility(page, 'pathsTitleContainer');

  await checkElementVisibility(page, 'pathsTitleItem0');
  await checkElementVisibility(page, 'pathsTitleItem1');
  await checkElementVisibility(page, 'pathsTitleItem2');

  await checkElementVisibility(page, 'whatNowTitle');
  await checkElementVisibility(page, 'whatNowButton');
});
