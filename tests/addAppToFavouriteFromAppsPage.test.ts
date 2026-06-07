import { test } from '../fixtures/base.fixture';

test.describe('Add App to Favorites from Apps Page', () => {

    test.beforeEach(async ({ homePage }) => {
        await homePage.navigateToHomePage();
        await homePage.expectWatchTvIsFocused();
        await homePage.navigateToAppsPage();
        await homePage.expectAppsMenuItemIsFocused();
        await homePage.clickItem();
    });

    test('Add App to Favorites', async ({ appsPage }) => {

        await test.step('Wait for Apps Page to load', async () => {
            await appsPage.expectBannerContentIsVisible();
            await appsPage.expectFeaturedAppsRowIsVisible();
        });

        await test.step('Navigate to Featured Apps Row', async () => {
            await appsPage.navigateToFeaturedAppsRow();
            await appsPage.expectFeaturedAppsRowIsFocused();
        });

        // Write next steps when API_TOKEN will be provided
    });



});