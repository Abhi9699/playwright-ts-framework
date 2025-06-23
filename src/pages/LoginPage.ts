import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { Logger } from '../utils/logger';

export class LoginPage extends BasePage {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = page.getByPlaceholder('Username');
    this.passwordInput = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.errorMessage = page.locator('[data-test="error"]');
  }

  async login(username: string, password: string): Promise<void> {
    Logger.info('Filling username');
    await this.usernameInput.fill(username);
    Logger.info('Filling password');
    await this.passwordInput.fill(password);
    Logger.info('Clicking login button');
    await this.loginButton.click();
    Logger.info('Login action completed');
  }
}
