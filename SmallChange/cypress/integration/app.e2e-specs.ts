import AppPage  from '../support/app.po'

describe('My First Test', () => {
  let app: any;

  beforeEach(() => {
    app = new AppPage();
  })

  it('Visits the initial project page', () => {
    app.navigate();
    cy.contains('Welcome');
  })
  

  it('should Contain Trading Message', () => {
    app.navigate();
    app.checkTitle('Trading for beginners made easy');
  });

  it('should Contain Trading Message', () => {
    app.navigate();
    app.checkTitle('Welcome to SmallChange');
  });
})


