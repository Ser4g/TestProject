import { expect, type Locator, type Page } from '@playwright/test';

export class BasePage {
    playwrightPage: Page;

    constructor(page: Page) {
        this.playwrightPage = page;
    }

    async openPage(): Promise<this> {
        await this.playwrightPage.goto('');
        return this;
    } 
}