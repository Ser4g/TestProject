import { test } from '../fixtures/base.fixture';

test.describe('Open Category from Search Page', () => {

  test.beforeEach(async ({ homePage }) => {
    await homePage.navigate();
    await homePage.expectWatchTvIsFocused();
    await homePage.navigateToSearchPage();
    await homePage.expectSearchMenuItemIsFocused();
    await homePage.clickItem();
  });

  test('Choose category Action on Search Page', async ({ searchPage }) => {
    await test.step('Wait for Search Page to load', async () => {
      await searchPage.expectActionCategoryVisible();
      await searchPage.expectSearchBarIsFocused();
    });

    await test.step('Navigate to Action Category', async () => {
      await searchPage.navigateToActionCategory();
      await searchPage.clickItem();
    });

    await test.step('Check Action Category is opened', async () => {
      await searchPage.expectSearchBarContainsCategoryName();
      await searchPage.expectSearchUrlForActionCategory();
    });

  });

  test('Fill Search Bar manually with category Action', async ({ searchPage }) => {
    await test.step('Wait for Search Page to load', async () => {
      await searchPage.expectActionCategoryVisible();
      await searchPage.expectSearchBarIsFocused();
    });

    await test.step('Fill Search Bar with Action', async () => {
      await searchPage.fillSearchBarActionCategory();
      await searchPage.clickItem();
    });

    await test.step('Check Action Category is opened', async () => {
      await searchPage.expectSearchBarContainsCategoryName();
      await searchPage.expectSearchUrlForActionCategory();
    });

  });
});