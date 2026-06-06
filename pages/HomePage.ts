import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { SearchPage } from './SearchPage';

export class HomePage extends BasePage {
    private readonly watchTvApp: Locator;
    private readonly searchMenuItem: Locator;
    
    constructor(page: Page) {
        super(page);
        this.watchTvApp = page.getByTestId('Watch TV');
        this.searchMenuItem = page.getByTestId('main-menu-item-0').getByRole('menuitem');
    }

    async navigateToSearchPage(): Promise<void> {
        await this.playwrightPage.keyboard.press('ArrowUp');
        await this.playwrightPage.keyboard.press('ArrowUp');
        await this.playwrightPage.keyboard.press('ArrowLeft');
    }

    async expectSearchMenuItemIsFocused(): Promise<void> {
        await expect(this.searchMenuItem, 'Search menu item is not focused').toHaveAttribute('data-focused', 'focused');
    }
    
    async expectWatchTvIsFocused(): Promise<void> {
        await expect(this.watchTvApp, 'Watch TV App is not focused').toHaveAttribute('data-focused', 'focused', { timeout: 30_000 });
    }
}