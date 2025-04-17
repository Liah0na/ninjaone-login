import { test, expect } from '@playwright/test';
import { LOGIN_URL } from '../utils/env';

if (!LOGIN_URL) {
  throw new Error('LOGIN_URL is not defined. Please set it in your environment variables.');
}

test.describe('Login UI tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(LOGIN_URL);
  });

  test('No allowed empty fields.', async ({ page }) => {
    await page.click('button:has-text("Sign in")');
    const parentDivEmail = page.locator('div.form-group:has(input[type="text"])');
  
    await expect(parentDivEmail).toHaveClass(/has-error/);
  });

  test('Displays alert when using invalid credentials.', async ({ page }) => {
    await page.fill('input[type="text"]', 'fake@example.com');
    await page.fill('input[type="password"]', 'wrongpassword');
    await page.click('button:has-text("Sign in")');

    const errorToast = page.locator('text=Error during login');
    await expect(errorToast).toBeVisible({ timeout: 5000 });
  });
});
  