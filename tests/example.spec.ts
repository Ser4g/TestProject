import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Check Watch TV App on Home Page', () => {
  test('Check Watch TV App is visible on Home Page', async ({ page }) => {
    const homePage = new HomePage(page);

    await test.step('Open Home Page', async () => {
      await homePage.navigate();
      await homePage.expectWatchTvIsFocused();
    });

    await test.step('Open Search Page and make Search category Action', async () => {
      const searchPage = await homePage.openSearchPage();
      await searchPage.expectActionCategoryVisible();
      
    });
  });
});