import { test, expect } from '@playwright/test';

test('пустая форма показывает ошибки email и пароля', async ({ page }) => {

  await page.goto('/');

  const openForm = page.locator('[data-marker="login-button-desktop"]');
  await openForm.click();

  const button = page.locator('[data-marker="login-submit-button"]');
  await button.click();

  const emailErr = page.locator('[data-marker="email-error"]');
  await expect(emailErr).toHaveText('Email обязателен');

  const passErr = page.locator('[data-marker="password-error"]');
  await expect(passErr).toHaveText('Пароль обязателен');

});
