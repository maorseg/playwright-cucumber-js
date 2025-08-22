class LoginPage {
  constructor(page) {
    this.page = page;
    this.signupLink = page.getByRole('link', { name: 'Signup / Login' });
    this.emailInput = page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address');
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }

  async login(email, password) {
    await this.signupLink.click();
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
module.exports = LoginPage;
