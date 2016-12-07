import { Ng2CheatsheetPage } from './app.po';

describe('ng2-cheatsheet App', function() {
  let page: Ng2CheatsheetPage;

  beforeEach(() => {
    page = new Ng2CheatsheetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
