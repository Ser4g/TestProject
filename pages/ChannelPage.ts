import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ChannelPage extends BasePage {
    private readonly playerOverlay: Locator;
    private readonly channelMenu: Locator;

    constructor(page: Page) {
        super(page);
        this.playerOverlay = page.getByTestId('player-overlay');
        this.channelMenu = this.playerOverlay.getByRole('menu');
    }

    async expectChannelMenuIsVisible(): Promise<void> {
        await expect(this.channelMenu, 'Channel menu is not visible').toBeVisible();
    }

    async expectPlayerOverlayIsVisible(): Promise<void> {
        await expect(this.playerOverlay, 'Player overlay is not visible').toBeVisible();
    }


}