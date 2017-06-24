import { BikersPage } from './app.po';

describe('bikers App', () => {
  let page: BikersPage;

  beforeEach(() => {
    page = new BikersPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
