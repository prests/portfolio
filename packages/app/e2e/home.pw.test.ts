import { test, expect } from './base-fixtures';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('SANITY should see landing page', async ({ page }) => {
    await expect(page).toHaveURL('http://localhost:8080/');
  });
});
