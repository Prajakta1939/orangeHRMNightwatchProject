import { NightwatchBrowser } from 'nightwatch';


module.exports = {
    before: function (browser: { globals: { waitForConditionTimeout: number } }) {
        
        browser
            .globals.waitForConditionTimeout = 7000
    },

    'Login': function (browser: NightwatchBrowser) {
        var home = browser.page.home()
        home
            .login()
            .assert.urlContains('/index.php/dashboard')
    },

    'Check Personal Info': function (browser: NightwatchBrowser) {
        var myInfo = browser.page.myInfo()
        myInfo
            .updateMyInfo('Rahul', 'Patil')
            .assert.value('@firstName', 'Rahul')
            .assert.value('@lastName', 'Patil')
    },

    'Logout': function (browser:NightwatchBrowser) {
        var dashboard = browser.page.dashboard()
        dashboard
            .logout()
            .assert.urlContains('/index.php/auth/login')
    },
   
    after: function (browser: { end: () => void }) {
        browser.end();
    }
}