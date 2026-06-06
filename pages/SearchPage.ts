import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { SEARCH_ACTION_CATEGORY_URL } from '../settings/urls';

export class SearchPage extends BasePage {
    private readonly searchBar: Locator;
    private readonly searchBarInput: Locator;
    private readonly actionCategory: Locator;
    private readonly expectedUrl: string;

    constructor(page: Page) {
        super(page);
        this.searchBar = page.locator('#search-input');
        this.searchBarInput = this.searchBar.getByRole('textbox', { name: 'Search Movies, Shows, Apps' });
        this.actionCategory = page.getByTestId('action');
        this.expectedUrl = page.url() + SEARCH_ACTION_CATEGORY_URL;
    }

    async fillSearchBarActionCategory(): Promise<void> {
        await this.searchBarInput.fill('Action');
    }

    async navigateToActionCategory(): Promise<void> {
        await this.playwrightPage.keyboard.press('ArrowDown');
    }

    async expectSearchUrlForActionCategory(): Promise<void> {
        await expect(this.playwrightPage, 'URL is not correct').toHaveURL(this.expectedUrl);
    }

    async expectActionCategoryVisible(): Promise<void> {
        await expect(this.actionCategory, 'Action category is not visible').toBeVisible({ timeout: 30_000 });
    }

    async expectSearchBarIsFocused(): Promise<void> {
        await expect(this.searchBar, 'Search bar is not focused').toHaveAttribute('data-focused', 'focused');
    }

    async expectSearchBarContainsCategoryName(): Promise<void> {
        await expect(this.searchBarInput, 'Search bar does not contain category name').toHaveAttribute('value', 'Action');
    }
}