/*
import { test, expect } from '@playwright/test';

test('test mercedes-benz login', async ({ page }) => {
  await page.goto('https://www.mercedes-benz.de/passengercars.html?group=all&subgroup=see-all&view=BODYTYPE');
  await page.getByRole('button', { name: 'Alle akzeptieren' }).click();
  // await page.getByText('×').click();
  await page.getByRole('button', { name: 'Mercedes me Login' }).click();
  await page.getByRole('button', { name: 'Login', exact: true }).click();
  await page.getByLabel('E-Mail-Adresse *').click();
  await page.getByLabel('E-Mail-Adresse *').fill('palianschulz@mercedes-benz.com');
  await page.getByLabel('E-Mail-Adresse *').press('Tab');
  await page.getByLabel('Mobilfunknummer benutzen').check();
  await page.getByLabel('Mobilfunknummer benutzen (deaktivieren um E-Mail-Adresse zu benutzen)').uncheck();
  await page.getByLabel('E-Mail-Adresse *').click();
  await page.getByLabel('E-Mail-Adresse *').fill('palian928@gmail.com');
  await page.getByRole('button', { name: 'Weiter' }).click();

  await expect(page.getByText('Es wurde kein Konto mit diesem Benutzernamen gefunden')).toBeVisible();
});
*/