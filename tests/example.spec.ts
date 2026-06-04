import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Check Watch TV App on Home Page', () => {
  test('Check Watch TV App is visible on Home Page', async ({ page }) => {
    const homePage = new HomePage(page);

    await test.step('Open Home Page', async () => {
      await homePage.openPage();
    });

    await expect(homePage.watchTvApp, 'Watch TV App is not visible').toBeVisible();
    });
});