class ContactPage {
  constructor(page) {
    this.page = page;
    this.contactLink = page.getByRole('link', { name: 'Contact us' });
    this.nameInput = page.getByRole('textbox', { name: 'Name' });
    this.emailInput = page.getByRole('textbox', { name: 'Email', exact: true });
    this.subjectInput = page.getByRole('textbox', { name: 'Subject' });
    this.messageInput = page.getByRole('textbox', { name: 'Your Message Here' });
    this.submitButton = page.getByRole('button', { name: 'Submit' });
  }

  async openContactForm() {
    await this.contactLink.click();
  }

  async fillForm(name, email, subject, message) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.subjectInput.fill(subject);
    await this.messageInput.fill(message);
  }

  async submitForm() {
    await this.submitButton.press('Enter');
  }
}
module.exports = ContactPage;
