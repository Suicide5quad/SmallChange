import LoginPage from '../support/login.po';


describe('Login Test', () => {
  let app: any;

  beforeEach(() => {
    app = new LoginPage();
  })

  it('Visits the Login Page', () => {
    app.navigate();
  })

  it('should Contain Login message', () => {
    app.navigate();
    app.checkTitleFor('Login');
  });

  it('should Contain UserName', ()=> {

    app.navigate();
    app.checkALink('User Name');
  });

  it('should Contain Password', ()=> {
    app.navigate();
    app.checkALink('Select a password');
  });

  it('should Contain Login Button', ()=> {
    app.navigate();
    app.checkAboutLogin('Login');
  })

  it('should have new user message',()=> {
    app.navigate();
    app.checkForAMatButton('New User? Create an account');

  })


})


