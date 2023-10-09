import { NightwatchBrowser } from 'nightwatch';

var dashboardCommands = {
    logout: function (this: NightwatchBrowser): NightwatchBrowser {
        return this
            .waitForElementVisible('@dashboardTab',1000)
            .click('@dashboardTab')
            .waitForElementVisible('@welcomeText')
            .click('@welcomeText')
            .waitForElementVisible('@logoutBtn')
            .click('@logoutBtn');
    }
};

module.exports = {
    commands: [dashboardCommands], 
    elements: {
        dashboardTab: {
            selector: 'h6.oxd-text'
        },
        welcomeText: {
            selector: '#welcome',
        },
        logoutBtn: {
            selector: 'a[href*="logout"]'
        }
    }
};
