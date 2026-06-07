import {test as base, Page} from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SearchPage } from '../pages/SearchPage';
import { ChannelPage } from '../pages/ChannelPage';
import { AppsPage } from '../pages/AppsPage';

type TestFixtures = {
    homePage: HomePage;
    searchPage: SearchPage;
    channelPage: ChannelPage;
    appsPage: AppsPage;
};

export const test = base.extend<TestFixtures>({
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },

    searchPage: async ({ page }, use) => {
        await use(new SearchPage(page));
    },

    appsPage: async ({ page }, use) => {
        await use(new AppsPage(page));
    },

    channelPage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await homePage.navigateToHomePage();
        await homePage.expectWatchTvIsFocused();
        await homePage.navigateToChannelPage();
        await homePage.expectChannelMenuItemIsFocused();
        const popupPromise = page.waitForEvent('popup');
        await homePage.pressItem();
        await use(new ChannelPage(await popupPromise));
    }
});