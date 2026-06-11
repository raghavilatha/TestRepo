import { test, expect } from '@playwright/test';

test.describe('Elitea documentation navigation', () => {
  test('should navigate from homepage to docs and wait for docs URL', async ({ page }) => {
