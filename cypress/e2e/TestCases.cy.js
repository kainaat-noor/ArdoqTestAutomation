describe('Register New User', () => {
    const randomNum = Math.floor(Math.random() * 10000);
    const randomEmail = `kimjongin${randomNum}@gmail.com`;
    const randomUsername = `kimjongin${randomNum}`;
  it('Checking the New Account Signup Process', () => {
    cy.visit('https://automationteststore.com/index.php?rt=account/create')
    cy.get("#AccountFrm_firstname").type('Kim');
    cy.get("#AccountFrm_lastname").type('Kai');
    cy.get("#AccountFrm_email").type(randomEmail);
    cy.get("#AccountFrm_telephone").type('4724044421');
    cy.get("#AccountFrm_fax").type('4724044421');
    cy.get("#AccountFrm_company").type('Test Automation');
    cy.get("#AccountFrm_address_1").type('Rådhusgata 12');
    cy.get("#AccountFrm_city").type('London');
    cy.get("#AccountFrm_zone_id").select('Somerset');
    cy.get("#AccountFrm_postcode").type('3591');
    cy.get("#AccountFrm_loginname").type(randomUsername);
    cy.get("#AccountFrm_password").type('kimKai1994@');
    cy.get("#AccountFrm_confirm").type('kimKai1994@');
    cy.get("#AccountFrm_newsletter0").click();
    cy.get("#AccountFrm_agree").click();
    cy.get('button[title="Continue"]').click();
    cy.contains('span.maintext', 'Your Account Has Been Created!').should('be.visible');
  })
  it('Verify Account Creation Success', () => {
    cy.visit('https://automationteststore.com/index.php?rt=account/login');
    cy.get("#loginFrm_loginname").type(randomUsername);
    cy.get("#loginFrm_password").type('kimKai1994@');
    cy.get('button[title="Login"]').click();
    cy.contains('span.maintext', 'My Account').should('be.visible');
    cy.contains('span.subtext', 'Kim').should('be.visible');
    cy.get('i.fa.fa-book').should('exist').and('be.visible');
    cy.get('i.fa.fa-briefcase').should('exist').and('be.visible');
    cy.get('i.fa.fa-cloud-download').should('exist').and('be.visible');
    cy.get('i.fa.fa-money').should('exist').and('be.visible');
  });
})