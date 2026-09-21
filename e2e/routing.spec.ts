import { test, expect } from '@playwright/test';

test.describe('Routing and Navigation', () => {
  test('should redirect unknown routes to home page', async ({ page }) => {
    await page.goto('/unknown-page');

    await expect(page).toHaveURL('/');
    await expect(page.locator('h1.page-title')).toBeVisible();
  });
});
