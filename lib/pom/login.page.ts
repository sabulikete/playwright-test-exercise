import { Locator, Page } from '@playwright/test';

import BasePage from '../pom/page';

export default class LoginPage extends BasePage {
  readonly usernameTextbox: Locator;
  readonly passwordTextbox: Locator;
  readonly submitButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page, '/practice-test-login');
    this.usernameTextbox = page.getByLabel('Username');
    this.passwordTextbox = page.getByLabel('Password');
    this.submitButton = page.getByRole('button', { name: 'Submit' });
    this.errorMessage = page.locator('#error');
  }

  public async login(email: string, password: string) {
    await this.visit();
    await this.usernameTextbox.fill(email);
    await this.passwordTextbox.fill(password);
    await this.submitButton.click();
  }
}