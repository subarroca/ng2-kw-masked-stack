import { Ng2KwMaskedStackPage } from './app.po';

describe('ng2-kw-masked-stack App', function() {
  let page: Ng2KwMaskedStackPage;

  beforeEach(() => {
    page = new Ng2KwMaskedStackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
