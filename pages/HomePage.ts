import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
    watchTvApp: Locator;
    
    constructor(page: Page) {
        super(page);
        this.watchTvApp = page.getByTestId('Watch TV');
    }
}