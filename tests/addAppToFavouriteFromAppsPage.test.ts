import { test } from '../fixtures/base.fixture';

test.describe('Add App to Favorites from Apps Page', () => {

    test.beforeEach(async ({ homePage }) => {
        await homePage.navigateToHomePage();
        await homePage.expectWatchTvIsFocused();
        await homePage.navigateToMainMenu();
        await homePage.navigateToAppsMenuItem();
        await homePage.pressItem();
    });

    test('Add App to Favorites', async ({ appsPage }) => {

        await test.step('Wait for Apps Page to load', async () => {
            await appsPage.expectBannerContentIsVisible();
            await appsPage.expectFeaturedAppsRowIsVisible();
        });

        await test.step('Navigate to Featured Apps Row', async () => {
            await appsPage.navigateToFeaturedAppsRow();
        });

        // Write next steps when API_TOKEN will be provided
    });



});