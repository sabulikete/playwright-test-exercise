import { test } from '@playwright/test';

import LoginPage from '../pom/login.page';
import HomePage from '../pom/home.page';

export default test.extend<{
  loginPage: LoginPage;
  homePage: HomePage;
}>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
});