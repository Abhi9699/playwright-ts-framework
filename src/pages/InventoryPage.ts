import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {
  readonly backpackItem: Locator;
  readonly addToCartButton: Locator;

  constructor(page: Page) {
    super(page);
    this.backpackItem = page.locator('[data-test="item-4-title-link"]');
    this.addToCartButton = page.locator('[data-test="add-to-cart"]');
  }

  async clickBackpackItem() {
    await this.backpackItem.click();
  }

  async addToCart() {
    await this.addToCartButton.click();
  }
}
