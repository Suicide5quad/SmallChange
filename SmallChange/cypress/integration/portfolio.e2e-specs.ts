import LoginPage from '../support/login.po';


describe('Portfolio Test', () => {
  let app: any;

  beforeEach(() => {
    app = new LoginPage();
  })

  it('Visits the Portfolio Page', () => {
    app.navigate();
  })

  it('should See Portfolio Details', () => {
    app.navigate();
    app.checkTitleFor('Login');
  });

  it('should Contain Stocks', ()=> {

    app.navigate();
    app.checkALink('User Name');
  });

  it('should Contain Bonds', ()=> {
    app.navigate();
    app.checkALink('Select a password');
  });

  it('should Contain Mutaul Funds', ()=> {
    app.navigate();
    app.checkAboutLogin('Login');
  })

  it('should have new user message',()=> {
    app.navigate();
    app.checkForAMatButton('New User? Create an account');

  })


})


