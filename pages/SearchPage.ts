import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class SearchPage extends BasePage {
    private readonly searchBar: Locator;
    private readonly actionCategory: Locator;
    private readonly expectedUrl: string;

    constructor(page: Page) {
        super(page);
        this.searchBar = page.getByTestId('search-bar');
        this.actionCategory = page.getByTestId('action');
        this.expectedUrl = page.url() + '/search?q=Action&type=movie';
    }

    async fillSearchBar(): Promise<void> {
        await this.searchBar.fill('Action');
        
    }

    async expectUrl(): Promise<void> {
        await expect(this.playwrightPage, 'URL is not correct').toHaveURL(this.expectedUrl);
    }

    async expectActionCategoryVisible(): Promise<void> {
        await expect(this.actionCategory, 'Action category is not visible').toBeVisible({ timeout: 30_000 });
    }
}