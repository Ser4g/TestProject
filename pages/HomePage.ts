import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
    private readonly watchTvApp: Locator;
    private readonly searchMenuItem: Locator;
    private readonly channelMenuItem: Locator;
    private readonly appsMenuItem: Locator;
    private readonly removeAppControl: Locator;
    
    constructor(page: Page) {
        super(page);
        this.watchTvApp = page.getByTestId('Watch TV');
        this.searchMenuItem = page.getByTestId('main-menu-item-0').getByRole('menuitem');
        this.channelMenuItem = page.getByTestId('main-menu-item-3').getByRole('menuitem');
        this.appsMenuItem = page.getByTestId('main-menu-item-7').getByRole('menuitem');
        this.removeAppControl = page.getByTestId('editmode-remove-app');
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

    async navigateToAppsPage(): Promise<void> {
        await this.playwrightPage.keyboard.press('ArrowUp');
        await this.playwrightPage.keyboard.press('ArrowUp');
        await this.playwrightPage.keyboard.press('ArrowRight');
        await this.playwrightPage.keyboard.press('ArrowRight');
        await this.playwrightPage.keyboard.press('ArrowRight');
        await this.playwrightPage.keyboard.press('ArrowRight');
        await this.playwrightPage.keyboard.press('ArrowRight');
        await this.playwrightPage.keyboard.press('ArrowRight');
    }

    async pressOnAppForEditControls(): Promise<void> {
        await this.playwrightPage.keyboard.down('Enter');
    }

    async releaseEnterKey(): Promise<void> {
        await this.playwrightPage.keyboard.up('Enter');
    }

    async expectRemoveAppControlIsNotFocused(): Promise<void> {
        await expect(this.removeAppControl, 'Remove app control should not be focused').not.toHaveAttribute('data-focused', 'focused');
    }

    async expectRemoveAppControlIsFocused(): Promise<void> {
        await expect(this.removeAppControl, 'Remove app control should be focused').toHaveAttribute('data-focused', 'focused');
    }

    async expectSearchMenuItemIsFocused(): Promise<void> {
        await expect(this.searchMenuItem, 'Search menu item should be focused').toHaveAttribute('data-focused', 'focused');
    }

    async expectChannelMenuItemIsFocused(): Promise<void> {
        await expect(this.channelMenuItem, 'Channel menu item should be focused').toHaveAttribute('data-focused', 'focused');
    }

    async expectAppsMenuItemIsFocused(): Promise<void> {
        await expect(this.appsMenuItem, 'Apps menu item should be focused').toHaveAttribute('data-focused', 'focused');
    }
    //Timeout is increased because of incorrect API_TOKEN.
    async expectWatchTvIsFocused(): Promise<void> {
        await expect(this.watchTvApp, 'Watch TV App should be focused').toHaveAttribute('data-focused', 'focused', { timeout: 30_000 });
    }
}