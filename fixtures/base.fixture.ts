import {test as base, Page} from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SearchPage } from '../pages/SearchPage';

type TestFixtures = {
    homePage: HomePage;
    searchPage: SearchPage;
    openChannelPage: Page;
};

export const test = base.extend<TestFixtures>({
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },

    searchPage: async ({ page }, use) => {
        await use(new SearchPage(page));
    },

    openChannelPage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await homePage.navigate();
        await homePage.expectWatchTvIsFocused();
        await homePage.navigateToChannelPage();
        await homePage.expectChannelMenuItemIsFocused();
        const popupPromise = page.waitForEvent('popup');
        await homePage.clickItem();
        const newPage = await popupPromise;
        await use(newPage);
    }
});