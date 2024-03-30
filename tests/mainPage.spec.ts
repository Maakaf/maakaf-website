import { test, expect } from '@playwright/test';

const BASE_URL = 'http://localhost:3000/he';

test('Check main page elements exist', async ({ page }) => {
  await page.goto(BASE_URL);

  const title = page.getByTestId('homePage-title');
  title.scrollIntoViewIfNeeded();
  expect(title).toBeVisible();

  const topDiscordLink = page.getByTestId('homePage-discordLink');
  topDiscordLink.scrollIntoViewIfNeeded();
  expect(topDiscordLink).toBeVisible();

  const linusTorvaldsQuote = page.getByTestId('linusTorvaldsQuote');
  linusTorvaldsQuote.scrollIntoViewIfNeeded();
  expect(linusTorvaldsQuote).toBeVisible();

  const beOurFirendsTitle = page.getByTestId('beOurFirendsTitle');
  beOurFirendsTitle.scrollIntoViewIfNeeded();
  expect(beOurFirendsTitle).toBeVisible();

  const beOurFirendsItemContainer = page.getByTestId(
    'beOurFirendsItemContainer'
  );
  beOurFirendsItemContainer.scrollIntoViewIfNeeded();
  expect(beOurFirendsItemContainer).toBeVisible();

  //TODO check that beOurFirendsItemContainer git 6 childrens

  const pathsTitle = page.getByTestId('pathsTitle');
  pathsTitle.scrollIntoViewIfNeeded();
  expect(pathsTitle).toBeVisible();

  const pathsTitleContainer = page.getByTestId('pathsTitleContainer');
  pathsTitleContainer.scrollIntoViewIfNeeded();
  expect(pathsTitleContainer).toBeVisible();

  const whatNowTitle = page.getByTestId('whatNowTitle');
  whatNowTitle.scrollIntoViewIfNeeded();
  expect(whatNowTitle).toBeVisible();

  const whatNowButton = page.getByTestId('whatNowButton');
  whatNowButton.scrollIntoViewIfNeeded();
  expect(whatNowButton).toBeVisible();
});
