import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './base/BasePage';
import { MainMenuComponent } from './components/MainMenuComponent';

export class HomePage extends BasePage {
    private readonly mainMenuComponent: MainMenuComponent;
    private readonly watchTvApp: Locator;
    private readonly removeAppControl: Locator;


    constructor(page: Page) {
        super(page);
        this.mainMenuComponent = new MainMenuComponent(page);
        this.watchTvApp = page.getByTestId('Watch TV');
        this.removeAppControl = page.getByTestId('editmode-remove-app');
    }

    async navigateToMainMenu(): Promise<void> {
        while (!await this.mainMenuComponent.checkAnyMenuItemFocused()) {
            await this.playwrightPage.keyboard.press('ArrowUp');
        }
    }

    async navigateToSearchMenuItem(): Promise<void> {
        while (!await this.mainMenuComponent.checkSearchMenuItemFocused()) {
            await this.playwrightPage.keyboard.press('ArrowLeft');
        }
    } 

    async navigateToChannelsMenuItem(): Promise<void> {
        while (!await this.mainMenuComponent.checkChannelsMenuItemFocused()) {
            await this.playwrightPage.keyboard.press('ArrowRight');
        }
    }

    async navigateToAppsMenuItem(): Promise<void> {
        while (!await this.mainMenuComponent.checkAppsMenuItemFocused()) {
            await this.playwrightPage.keyboard.press('ArrowRight');
        }
    }

    async pressOnAppForEditControls(): Promise<void> {
        await this.playwrightPage.keyboard.down('Enter');
    }

    async releaseEnterKey(): Promise<void> {
        await this.playwrightPage.keyboard.up('Enter');
    }

    async expectRemoveAppControlIsNotFocused(): Promise<void> {
        await expect(this.removeAppControl, 'Remove app control should not be focused').not.toHaveAttribute('data-focused', 'focused');
    }

    async expectRemoveAppControlIsFocused(): Promise<void> {
        await expect(this.removeAppControl, 'Remove app control should be focused').toHaveAttribute('data-focused', 'focused');
    }

    //Timeout is increased because of incorrect API_TOKEN.
    async expectWatchTvIsFocused(): Promise<void> {
        await expect(this.watchTvApp, 'Watch TV App should be focused').toHaveAttribute('data-focused', 'focused', { timeout: 30_000 });
    }
}