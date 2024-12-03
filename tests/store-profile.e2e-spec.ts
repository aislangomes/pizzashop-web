import { expect, test } from '@playwright/test'

test('update profile successfully', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })
  await page.getByRole('button').nth(1).click()
  await page.getByText('Perfil da Loja').click()

  await page.getByLabel('Nome').fill('pizzao')
  await page.locator('textarea[name="description"]').fill('Another Description')

  await page.getByRole('button', { name: 'Salvar' }).click()

  await page.waitForLoadState('networkidle')

  const toast = page.getByText('Perfil atualizado com sucesso!')

  expect(toast).toBeVisible()

  await page.getByRole('button', { name: 'Close' }).click()

  await page.waitForTimeout(250)

  expect(page.getByRole('button', { name: 'pizzao' })).toBeVisible()
})
