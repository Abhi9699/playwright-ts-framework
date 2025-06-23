import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { validUser } from '../utils/testData';

const test = base.extend<{ loginPage: LoginPage }>({
  loginPage: async ({ page }, use) => {
    await page.goto('/');
    await use(new LoginPage(page));
  },
});

test('Successful login with valid credentials and add backpack to cart', async ({ loginPage }) => {
  await loginPage.login(validUser.username, validUser.password);
  await expect(loginPage.page).toHaveURL(/inventory/);

  const inventoryPage = new InventoryPage(loginPage.page);
  await inventoryPage.clickBackpackItem();
  await inventoryPage.addToCart();
  // Optionally, add an assertion to check if the cart count increased or the button changed
});
