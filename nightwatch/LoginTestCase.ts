import { assert } from "nightwatch";

describe('OrangeHRM', function() {
    this.tags = ['demo'];
  
    before(browser => browser.navigateTo('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'));
  
    it('Demo test orangeHRM', function(browser) {
      browser
        .waitForElementVisible("input[name='username']");
        
         browser.element.find("input[name='username']")
         .sendKeys('Admin')
        // .assert.valueEquals("nput[name='username']", 'nightwatch')
         browser.element.find("input[name='password']")
         .sendKeys('admin123')

         browser.element.find('.oxd-button').click(); 
         browser.pause(3000);   
         browser.element.findAllByText('Dashboard');
         browser.assert.urlContains('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
                  
    });
  
    after(browser => browser.end());
  });
  