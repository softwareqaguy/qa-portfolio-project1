import { test, expect, Page } from '@playwright/test';

async function dismissPopupIfPresent(page: Page) {
  const allowButton = page.getByRole('button', { name: /allow/i });
  const closeButton = page.locator('[aria-label="close"], .close, .btn-close').first();

  if (await allowButton.isVisible().catch(() => false)) {
    await allowButton.click().catch(() => {});
  } else if (await closeButton.isVisible().catch(() => false)) {
    await closeButton.click().catch(() => {});
  }
}

test('nopCommerce home page loads and shows expected title', async ({ page }) => {
  await page.goto('/');
  await dismissPopupIfPresent(page);

  await expect(page).toHaveTitle(/nopCommerce demo store/i);
  await expect(page.locator('.header-logo')).toBeVisible();
});

test('user can search for a product', async ({ page }) => {
  await page.goto('/');
  await dismissPopupIfPresent(page);

  await page.getByPlaceholder('Search store').fill('Laptop');
  await page.locator('button[type="submit"]').filter({ hasText: /search/i }).click();

  await expect(page).toHaveURL(/search/i);
});
