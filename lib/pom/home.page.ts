import { Locator, Page } from '@playwright/test';

import BasePage from '../pom/page';

export default class HomePage extends BasePage {
  readonly loginMessage: Locator;
  readonly userMessage: Locator;
  readonly logOutButton: Locator;

  constructor(page: Page) {
    super(page, '/logged-in-successfully/');
    this.loginMessage = page.getByRole('heading', { name: 'Logged In Successfully' });
    this.userMessage = page.getByText('Congratulations student. You successfully logged in!');
    this.logOutButton = page.getByRole('link', { name: 'Log out' });
  }
}