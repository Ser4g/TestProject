import { test } from '../fixtures/base.fixture';
import { ChannelPage } from '../pages/ChannelPage';

test.describe('Check channels Page is Available', () => {
    let channelPage: ChannelPage;
    
    test.beforeEach(async ({ openChannelPage }) => {
        channelPage = new ChannelPage(openChannelPage);
    });

    test('Check Player and menu in Channel Page', async () => {
            await channelPage.expectChannelMenuIsVisible();
            await channelPage.expectPlayerOverlayIsVisible();
    });
});