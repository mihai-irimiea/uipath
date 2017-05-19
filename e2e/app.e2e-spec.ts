import { UipathPage } from './app.po';

describe('uipath App', () => {
  let page: UipathPage;

  beforeEach(() => {
    page = new UipathPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
