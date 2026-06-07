import { test } from '../fixtures/base.fixture';

test.describe('Check Channels Page is Available', () => {
    test('Check Player and menu in Channel Page', async ({ channelPage }) => {
            await channelPage.expectChannelMenuIsVisible();
            await channelPage.expectPlayerOverlayIsVisible();
    });
});