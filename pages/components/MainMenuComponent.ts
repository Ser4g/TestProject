import { type Locator, type Page, expect } from '@playwright/test';

export class MainMenuComponent {
    private readonly anyFocusedMenuItem: Locator;
    private readonly searchMenuItem: Locator;
    private readonly appsMenuItem: Locator;
    private readonly channelsMenuItem: Locator;

    constructor(page: Page) {
        this.anyFocusedMenuItem = page.getByRole('menubar').filter({ has: page.locator('[data-focused="focused"]')});
        this.searchMenuItem = page.getByRole('menubar').getByTestId(/^((main-menu-item-)([0-9]{1}))*$/).getByRole('menuitem', { name: 'Search' });
        this.appsMenuItem = page.getByRole('menubar').getByTestId(/^((main-menu-item-)([0-9]{1}))*$/).getByRole('menuitem', { name: 'Apps' });
        this.channelsMenuItem = page.getByRole('menubar').getByTestId(/^((main-menu-item-)([0-9]{1}))*$/).getByRole('menuitem', { name: 'Channels' });
    }

    async checkAnyMenuItemFocused(): Promise<boolean> {
        return await this.anyFocusedMenuItem.count() > 0;
    }

    async checkSearchMenuItemFocused(): Promise<boolean> {
        return await this.searchMenuItem.getAttribute('data-focused') === 'focused';
    }

    async checkAppsMenuItemFocused(): Promise<boolean> {
        return await this.appsMenuItem.getAttribute('data-focused') === 'focused';
    }

    async checkChannelsMenuItemFocused(): Promise<boolean> {
        return await this.channelsMenuItem.getAttribute('data-focused') === 'focused';
    }
}