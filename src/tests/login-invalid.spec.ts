import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { invalidUser } from '../utils/testData';

const test = base.extend<{ loginPage: LoginPage }>({
  loginPage: async ({ page }, use) => {
    await page.goto('/');
    await use(new LoginPage(page));
  },
});

test('Login fails with invalid credentials', async ({ loginPage }) => {
  await loginPage.login(invalidUser.username, invalidUser.password);
  const errorMessage = loginPage.errorMessage;
  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toContainText('Username and password do not match');
});
