import { Page } from './app.po';

describe('App', () => {
  let page: Page;

  beforeEach(() => {
    page = new Page();
  });

  describe('default screen', () => {
    beforeEach(() => {
      page.navigateTo('/');
    });

    it('should have a title saying Ionic BMI Calculator', () => {
      page.getTitle().then(title => {
        expect(title).toEqual('Ionic BMI Calculator');
      });
    });

    it('fill in form', () => {
      page.fillInForm(65, 165);
      expect(page.results_card_header()).toContain('BMI Calculation');
      expect(page.results_card_content()).toContain('BMI: 23.88');
      expect(page.results_card_content()).toContain('You are Normal');
    });

  })
});