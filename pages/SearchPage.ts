import { expect, type Locator, type Page } from '@playwright/test';
import { SEARCH_ACTION_CATEGORY_URL } from '../settings/urls';
import { BasePage } from './base/BasePage';

export class SearchPage extends BasePage {
    private readonly searchBar: Locator;
    private readonly searchBarInput: Locator;
    private readonly actionCategory: Locator;
    private readonly expectedSearchActionCategoryUrl: string;

    constructor(page: Page) {
        super(page);
        this.searchBar = page.locator('#search-input');
        this.searchBarInput = this.searchBar.getByRole('textbox');
        this.actionCategory = page.getByTestId('action');
        this.expectedSearchActionCategoryUrl = page.url() + SEARCH_ACTION_CATEGORY_URL;
    }

    async fillSearchBarActionCategory(): Promise<void> {
        await this.searchBarInput.fill('Action');
    }

    async navigateToActionCategory(): Promise<void> {
        await this.playwrightPage.keyboard.press('ArrowDown');
    }

    async expectSearchUrlForActionCategory(): Promise<void> {
        await expect(this.playwrightPage, 'URL should contain action category').toHaveURL(this.expectedSearchActionCategoryUrl);
    }

    //Timeout is increased because of incorrect API_TOKEN.
    async expectActionCategoryVisible(): Promise<void> {
        await expect(this.actionCategory, 'Action category should be visible').toBeVisible({ timeout: 30_000 });
    }

    async expectSearchBarIsFocused(): Promise<void> {
        await expect(this.searchBar, 'Search bar should be focused').toHaveAttribute('data-focused', 'focused');
    }

    async expectSearchBarContainsCategoryName(): Promise<void> {
        await expect(this.searchBarInput, 'Search bar should contain category name').toHaveAttribute('value', 'Action');
    }
}