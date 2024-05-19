import { test, expect, Page } from '@playwright/test';

const BASE_URL = 'http://localhost:3000/he';

async function checkElementVisibility(page: Page, elementTestId: string) {
  const element = page.getByTestId(elementTestId);
  element.scrollIntoViewIfNeeded();
  const isVisible = await element.isVisible();
  expect(isVisible).toBeTruthy();
}
test.skip('Check main page elements exist', async ({ page }) => {
  await page.goto(BASE_URL);

  async function checkElementVisibility(elementTestId: string) {
    const element = page.getByTestId(elementTestId);
    element.scrollIntoViewIfNeeded();
    const isVisible = await element.isVisible();
    if(!isVisible) {
      console.log(`Element with testId: ${elementTestId} is not visible`);
    }
    expect(isVisible).toBeTruthy();
  }

  await checkElementVisibility('homePage-title');
  await checkElementVisibility('homePage-discordLink');

  await checkElementVisibility('linusTorvaldsQuote');

  await checkElementVisibility('beOurFirendsTitle');
  await checkElementVisibility('beOurFirendsItemContainer');
  await checkElementVisibility('beOurFirendsItem0');
  await checkElementVisibility('beOurFirendsItem1');
  await checkElementVisibility('beOurFirendsItem2');
  await checkElementVisibility('beOurFirendsItem3');
  await checkElementVisibility('beOurFirendsItem4');
  await checkElementVisibility('beOurFirendsItem5');

  await checkElementVisibility('pathsTitle');
  await checkElementVisibility('pathsTitleContainer');

  await checkElementVisibility('pathsTitleItem0');
  await checkElementVisibility('pathsTitleItem1');
  await checkElementVisibility('pathsTitleItem2');

  await checkElementVisibility('whatNowTitle');
  await checkElementVisibility('whatNowButton');
});
