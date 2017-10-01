import { PurepaniPage } from './app.po';

describe('purepani App', () => {
  let page: PurepaniPage;

  beforeEach(() => {
    page = new PurepaniPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
