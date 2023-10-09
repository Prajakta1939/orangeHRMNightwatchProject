import { NightwatchBrowser } from 'nightwatch';

var myInfoCommands = {
    updateMyInfo: function (this: NightwatchBrowser, firstName: string, middleName: string): NightwatchBrowser {
        return this
            .waitForElementVisible('@myInfoTab')
            .click('@myInfoTab')
            .click('@editSaveBtn')
            .clearValue('@firstName')
            .setValue('@firstName', firstName)
            .clearValue('@lastName')
            .setValue('@lastName', middleName)
            .click('@editSaveBtn');
    }
};

module.exports = {
    commands: [myInfoCommands], // Add the commands array to make updateMyInfo accessible
    elements: {
        myInfoTab: {
            selector: '#menu_pim_viewMyDetails'
        },
        editSaveBtn: {
            selector: '#btnSave',
        },
        firstName: {
            selector: "input[name='firstName']"
        },
        lastName: {
            selector: "input[name='middleName']"
        }
    }
};
