const homeScreen = require("../screens/home.screen")

describe('Access Admin Panel', () => {
    it('shoud login with valid credentials', async () => {
        await homeScreen.goToLogin()
    });
})