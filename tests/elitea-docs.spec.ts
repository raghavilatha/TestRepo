import { test, expect } from '@playwright/test';

test.describe('Elitea documentation navigation', () => {
  test('should navigate from homepage to docs and wait for docs URL', async ({ page }) => {
    await page.goto('https://elitea.ai');
    await page.getByRole('link', { name: /documentation/i }).click();
    await page.waitForURL(/docs/);
    await expect(page).toHaveURL(/docs/);
  });
});
