import { NightwatchBrowser } from 'nightwatch';

var homeCommands = {
    login: function (this: NightwatchBrowser): NightwatchBrowser {
        return this
              .pause(2000)
            .waitForElementVisible('@username',10000) 
            .waitForElementVisible('@password')
            .setValue('@username', 'Admin')
            .setValue('@password', 'admin123')
            .click('@loginBtn');
    }
};

module.exports = {
    url: 'https://opensource-demo.orangehrmlive.com/',
    commands: [homeCommands],
    elements: {
        username: {
            selector: 'input[name="username"]'
        },
        password: {
            selector: 'input[name="password"]'
        },
        loginBtn: {
            selector: 'button:contains("Login")'
        }
    }
};
