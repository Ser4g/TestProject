import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class AppsPage extends BasePage {
    private readonly featuredAppsRow: Locator;
    private readonly bannerContent: Locator;

    constructor(page: Page) {
        super(page);
        this.featuredAppsRow = page.getByTestId('list-item-app_list-0');
        this.bannerContent = page.getByTestId('banner-content');
    }

    async navigateToFeaturedAppsRow(): Promise<void> {
        await this.playwrightPage.keyboard.press('ArrowDown');
        await this.playwrightPage.keyboard.press('ArrowDown');
    }

    // Write this method when API_TOKEN will be provided
    async pressOnAddToFavoritesButton(): Promise<void> { }

    //Timeout is increased because of incorrect API_TOKEN.
    async expectFeaturedAppsRowIsVisible(): Promise<void> {
        await expect(this.featuredAppsRow, 'Featured apps row should be visible').toBeVisible({ timeout: 30_000 });
    }

    async expectFeaturedAppsRowIsFocused(): Promise<void> {
        await expect(this.featuredAppsRow, 'Featured apps row should be focused').toHaveAttribute('data-focused', 'focused');
    }
    //Timeout is increased because of incorrect API_TOKEN.
    async expectBannerContentIsVisible(): Promise<void> {
        await expect(this.bannerContent, 'Banner content should be visible').toBeVisible({ timeout: 30_000 });
    }
}