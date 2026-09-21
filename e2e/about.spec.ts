import { test, expect } from '@playwright/test';

test.describe('About Page', () => {
  test('should navigate to about page from header and display information', async ({ page }) => {
    await page.goto('/');

    const aboutHeaderLink = page.locator('header a[routerLink="/about"]');
    await aboutHeaderLink.click();

    await expect(page).toHaveURL('/about');

    const heading = page.locator('h1', { hasText: 'About' });
    await expect(heading).toBeVisible();

    const commitLink = page.locator('a[aria-label="commit"]');
    await expect(commitLink).toBeVisible();

    const licenseLink = page.getByRole('link', { name: /gnu general public license v3/i });
    await expect(licenseLink).toBeVisible();
    await expect(licenseLink).toHaveAttribute('href', 'https://www.gnu.org/licenses/gpl-3.0.html');

    const issueLink = page.getByRole('link', { name: /file an issue on github/i });
    await expect(issueLink).toBeVisible();
  });

  test('should navigate back to home page when clicking header title', async ({ page }) => {
    await page.goto('/about');

    const homeTitleLink = page.locator('h1.page-title');
    await homeTitleLink.click();

    await expect(page).toHaveURL('/');
    await expect(page.getByRole('button', { name: /solve problems 1 to 10/i })).toBeVisible();
  });
});
