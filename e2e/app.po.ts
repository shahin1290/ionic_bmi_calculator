import { browser, by, element } from 'protractor';

export class Page {

  navigateTo(destination) {
    return browser.get(destination);
  }

  getTitle() {
    return browser.getTitle();
  }

 getTitleText() {
    return element(by.tagName('ion-title')).getText();
  }

  fillInForm(weight, height) {

    var list = element.all(by.css('.text-input'))

    list.get(0).clear().then(() => {
      list.get(0).sendKeys(weight);
    })

    list.get(1).clear().then(() => {
      list.get(1).sendKeys(height);
    })
    
    element(by.cssContainingText('.button-inner', 'Calculate')).click();
   
    browser.sleep(500);
  }

  results_card_header() {
    return element(by.css('ion-card-header')).getText();
  }

  results_card_content() {
    return element(by.css('ion-card-content')).getAttribute('textContent');
  }
}