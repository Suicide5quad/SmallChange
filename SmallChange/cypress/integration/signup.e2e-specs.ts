import SignUpPage from '../support/signup.po';


describe('SignUp Test', () => {
  let app: any;

  beforeEach(() => {
    app = new SignUpPage();
  })

  it('Visits the SignUp Page', () => {
    app.navigate();
  })

  it('should Contain SignUp message', () => {
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

  it('should have new Login message',()=> {
    app.navigate();
    app.checkForAMatButton('SmallChange ™New User? Create an account');
  })

  it('should have Register Button',()=> {
    app.navigate();
    app.checkAboutLogin(' Login')
  })


})


