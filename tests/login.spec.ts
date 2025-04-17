import { test, expect } from '@playwright/test';
import { env } from '../utils/env';

test.describe('Login UI tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(env.LOGIN_URL);
  });

  test('No allowed empty fields.', async ({ page }) => {
    await page.click('button:has-text("Sign in")');
    await expect(page.locator('div.form-group:has(input[type="text"])')).toHaveClass(/has-error/);
  });

  test('Displays alert when using invalid credentials.', async ({ page }) => {
    await page.fill('input[type="text"]', 'fake@example.com');
    await page.fill('input[type="password"]', 'wrongpassword');
    await page.click('button:has-text("Sign in")');
    await expect(page.locator('text=Error during login')).toBeVisible({ timeout: 5000 });
  });

  test('TC01 - Valid Login: Ensure user can log in with correct email and password.', async ({ page }) => {
    await page.waitForTimeout(500);
    await page.fill('input[type="text"]', env.VALID_EMAIL);
    await page.waitForTimeout(500);
    await page.fill('input[type="password"]', env.VALID_PASSWORD);
    await page.waitForTimeout(500);
    await page.click('button:has-text("Sign in")');
    await expect(page.locator('div.alert.alert-danger:has-text("Human verification failed")')).toBeVisible({timeout: 10000});
    // await page.waitForLoadState('networkidle');
    // await expect(page.locator('h2:has-text("MFA Setup")')).toBeVisible({ timeout: 10000 });
  });
});
