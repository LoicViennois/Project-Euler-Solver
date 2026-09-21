import { test, expect } from '@playwright/test';

test.describe('Code View Page', () => {
  test('should navigate to code view from problem card and display solution code', async ({ page }) => {
    await page.goto('/');

    const problem1Card = page
      .locator('euler-problem-card')
      .filter({ has: page.getByRole('link', { name: 'Problem 1', exact: true }) });
    const codeLink = problem1Card.locator('a.link-code');
    await codeLink.click();

    await expect(page).toHaveURL('/code/1');

    const backLink = page.locator('a.link-back');
    await expect(backLink).toBeVisible();
    await expect(backLink).toContainText('Back to Problems');

    const activeItem = page.locator('li.link-file.active');
    await expect(activeItem).toBeVisible();
    await expect(activeItem).toContainText('euler001');

    const codeBlock = page.locator('euler-code-block code.hljs');
    await expect(codeBlock).toBeVisible();
    await expect(codeBlock).toContainText('euler001');
  });

  test('should switch between problem codes via sidebar', async ({ page }) => {
    await page.goto('/code/1');

    const sidebar = page.locator('.code-list');
    const problem2Link = sidebar.getByRole('link', { name: /euler002/i });
    await problem2Link.click();

    await expect(page).toHaveURL('/code/2');

    const codeBlock = page.locator('euler-code-block code.hljs');
    await expect(codeBlock).toContainText('euler002');
  });

  test('should navigate back to problems list', async ({ page }) => {
    await page.goto('/code/1');

    const backLink = page.locator('a.link-back');
    await backLink.click();

    await expect(page).toHaveURL('/');
    await expect(page.locator('h1.page-title')).toBeVisible();
  });
});
