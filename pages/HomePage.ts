import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
    private readonly watchTvApp: Locator;
    private readonly searchMenuItem: Locator;
    private readonly channelMenuItem: Locator;
    
    constructor(page: Page) {
        super(page);
        this.watchTvApp = page.getByTestId('Watch TV');
        this.searchMenuItem = page.getByTestId('main-menu-item-0').getByRole('menuitem');
        this.channelMenuItem = page.getByTestId('main-menu-item-3').getByRole('menuitem');
    }

    async navigateToSearchPage(): Promise<void> {
        await this.playwrightPage.keyboard.press('ArrowUp');
        await this.playwrightPage.keyboard.press('ArrowUp');
        await this.playwrightPage.keyboard.press('ArrowLeft');
    }

    async navigateToChannelPage(): Promise<void> {
        await this.playwrightPage.keyboard.press('ArrowUp');
        await this.playwrightPage.keyboard.press('ArrowUp');
        await this.playwrightPage.keyboard.press('ArrowRight');
        await this.playwrightPage.keyboard.press('ArrowRight');
    }

    async expectSearchMenuItemIsFocused(): Promise<void> {
        await expect(this.searchMenuItem, 'Search menu item should be focused').toHaveAttribute('data-focused', 'focused');
    }

    async expectChannelMenuItemIsFocused(): Promise<void> {
        await expect(this.channelMenuItem, 'Channel menu item should be focused').toHaveAttribute('data-focused', 'focused');
    }
    //Timeout is increased because of incorrect API_TOKEN.
    async expectWatchTvIsFocused(): Promise<void> {
        await expect(this.watchTvApp, 'Watch TV App should be focused').toHaveAttribute('data-focused', 'focused', { timeout: 30_000 });
    }
}