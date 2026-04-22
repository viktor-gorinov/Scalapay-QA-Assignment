import { test, expect } from '@playwright/test';

test('Login and validate Account page', async ({ page }) => {
  await page.goto('https://partner.development.scalapay.com/login');

// Fill credentials
await page.fill('#email', 'viktor.gorinov@accedia.com');
await page.fill('#password', 'Sc@1@payAssignment456!');

// Click Continue
await page.click('button:has-text("Continue")');

// Wait for navigation
await page.waitForLoadState('networkidle');

// Validate sidebar items
await expect(page.locator('[data-automation="sidebar-inStoreDashboard"]')).toBeVisible();
await expect(page.locator('[data-automation="sidebar-profile"]')).toBeVisible();
await expect(page.locator('[data-automation="sidebar-logout"]')).toBeVisible();

// Click Account
await page.locator('[data-automation="sidebar-profile"]').click();
await page.waitForLoadState('networkidle');

// Validate Account page title
await expect(page.locator('h2')).toHaveText('Account');

// Validate form exists
await expect(page.locator('[data-automation="UserDetailForm_Form"]').first()).toBeVisible();

// Validate inputs
await expect(page.locator('#firstName')).toBeVisible();
await expect(page.locator('#lastName')).toBeVisible();
await expect(page.locator('#language')).toBeVisible();

// Validate Confirm button
await expect(page.getByRole('button', { name: 'Confirm' }).first()).toBeVisible();
});