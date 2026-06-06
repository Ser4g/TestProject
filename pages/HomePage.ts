import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { SearchPage } from './SearchPage';

export class HomePage extends BasePage {
    private readonly watchTvApp: Locator;
    
    constructor(page: Page) {
        super(page);
        this.watchTvApp = page.getByTestId('Watch TV');
    }

    async openSearchPage(): Promise<SearchPage> {
        await this.playwrightPage.keyboard.press('ArrowUp');
        await this.playwrightPage.keyboard.press('ArrowUp');
        await this.playwrightPage.keyboard.press('ArrowLeft');
        await this.playwrightPage.keyboard.press('Enter');
        return new SearchPage(this.playwrightPage);
    }
    
    async expectWatchTvIsFocused(): Promise<void> {
        await expect(this.watchTvApp, 'Watch TV App is not focused').toHaveAttribute('data-focused', 'focused', { timeout: 30_000 });
    }
}