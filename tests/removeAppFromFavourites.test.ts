import { test } from '../fixtures/base.fixture';

test.describe('Remove App from favourite App Row', () => {

    test.beforeEach(async ({ homePage }) => {
        await homePage.navigateToHomePage();
        await homePage.expectWatchTvIsFocused();
    });

    test('Cannot remove app Watch TV from favourite App Row', async ({ homePage }) => {
        await homePage.pressOnAppForEditControls();
        await homePage.expectRemoveAppControlIsNotFocused();
        await homePage.releaseEnterKey();
    });

    test('Can remove app from favourite App Row', async ({ homePage }) => {
        // Write next steps when API_TOKEN will be provided
    });
});