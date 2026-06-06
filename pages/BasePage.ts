import { Locator, Page } from '@playwright/test';

export abstract class BasePage {
    protected readonly playwrightPage: Page;

    constructor(page: Page) {
        this.playwrightPage = page;
    }

    async navigate(): Promise<void> {
        await this.playwrightPage.goto('');
    } 

    async clickItem(): Promise<void> {
        await this.playwrightPage.keyboard.press('Enter');
    }
}