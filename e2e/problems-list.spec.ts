import { test, expect } from '@playwright/test';

test.describe('Problems List Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display page header and title', async ({ page }) => {
    await expect(page).toHaveTitle(/Project Euler Solver/i);
    const title = page.locator('h1.page-title');
    await expect(title).toHaveText('Project Euler Solver');
  });

  test('should display problem chunk buttons and problem cards', async ({ page }) => {
    const solveBatchButton = page.getByRole('button', { name: /solve problems 1 to 10/i });
    await expect(solveBatchButton).toBeVisible();

    const problem1Link = page.getByRole('link', { name: 'Problem 1', exact: true });
    await expect(problem1Link).toBeVisible();
    await expect(problem1Link).toHaveAttribute('href', 'https://projecteuler.net/problem=1');
  });

  test('should solve an individual problem when clicking play button', async ({ page }) => {
    const problem1Card = page
      .locator('euler-problem-card')
      .filter({ has: page.getByRole('link', { name: 'Problem 1', exact: true }) });
    const solveButton = problem1Card.locator('button.btn-to-solve');

    await expect(solveButton).toBeVisible();
    await solveButton.click();

    const solvedButton = problem1Card.locator('button.btn-solved');
    await expect(solvedButton).toBeVisible();

    const solutionValue = problem1Card.locator('.solution').nth(1);
    await expect(solutionValue).toHaveText('233168');

    const solutionTime = problem1Card.locator('.solution').nth(0);
    await expect(solutionTime).not.toHaveText('-');
  });

  test('should solve a batch of problems when clicking batch button', async ({ page }) => {
    const solveBatchButton = page.getByRole('button', { name: /solve problems 1 to 10/i });
    await solveBatchButton.click();

    const problem1Card = page
      .locator('euler-problem-card')
      .filter({ has: page.getByRole('link', { name: 'Problem 1', exact: true }) });
    await expect(problem1Card.locator('.solution').nth(1)).toHaveText('233168');

    const problem2Card = page
      .locator('euler-problem-card')
      .filter({ has: page.getByRole('link', { name: 'Problem 2', exact: true }) });
    await expect(problem2Card.locator('.solution').nth(1)).toHaveText('4613732');
  });
});
