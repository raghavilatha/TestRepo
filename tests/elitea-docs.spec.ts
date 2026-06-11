import { test, expect, chromium } from '@playwright/test';

test.describe('Elitea documentation navigation', () => {
  test('should navigate from homepage to docs and wait for docs URL', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    try {
      await page.goto('https://elitea.ai');
      await page.getByRole('link', { name: /documentation|docs/i }).click();
      await page.waitForURL(/docs/);
      await expect(page).toHaveURL(/docs/);
    } finally {
      await context.close();
      await browser.close();
    }
  });
});
