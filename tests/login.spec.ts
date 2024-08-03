import { expect } from '@playwright/test';

import test from '../lib/fixtures/app.fixture';

test.describe('a login screen', () => {
  test('renders', async ({ loginPage }) => {
    await loginPage.visit();
    await expect(loginPage.usernameTextbox, 'Email textbox displayed').toBeVisible();
    await expect(loginPage.passwordTextbox, 'Password textbox displayed').toBeVisible();
    await expect(loginPage.submitButton, 'Show password button displayed').toBeVisible();
  });

  test('successfully logs the user in', async ({ loginPage, homePage }) => {
    await loginPage.login('student', 'Password123');
    await expect(homePage.page).toHaveURL(homePage.URL);
    await expect(homePage.loginMessage).toBeVisible();
    await expect(homePage.userMessage).toBeVisible();
    await expect(homePage.logOutButton).toBeVisible();
  });

  test('displays error message when using invalid username', async ({ page, loginPage }) => {
    await loginPage.login('incorrectUser', 'Password123');
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toHaveText('Your username is invalid!');
  });

  test('displays error message when using invalid password', async ({ page, loginPage }) => {
    await loginPage.login('student', 'incorrectPassword');
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toHaveText('Your password is invalid!');
  });
});