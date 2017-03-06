import { Firstweb2Page } from './app.po';

describe('firstweb2 App', () => {
  let page: Firstweb2Page;

  beforeEach(() => {
    page = new Firstweb2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
