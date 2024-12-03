import { expect, test } from '@playwright/test'

test('sign up successfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome do Restaurante').fill('Pizza Shop')
  await page.getByLabel('Seu Nome').fill('John Doe')
  await page.getByLabel('Seu e-mail').fill('jonhdoe@exemple.com')
  await page.getByLabel('Seu celular').fill('123123123123')

  await page.getByRole('button', { name: 'Finalizar Cadastro' }).click()

  const toast = page.getByText('Restaurente cadastrado com')
  expect(toast).toBeVisible()

  await page.waitForTimeout(2000)
})

test('sign up with error', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome do Restaurante').fill('invalid name')
  await page.getByLabel('Seu Nome').fill('John Doe')
  await page.getByLabel('Seu e-mail').fill('jonhdoe@exemple.com')
  await page.getByLabel('Seu celular').fill('123123123123')

  await page.getByRole('button', { name: 'Finalizar Cadastro' }).click()

  const toast = page.getByText('Erro ao cadastrar restaurante')
  expect(toast).toBeVisible()
})

test('navigate to new login page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })
  await page.getByRole('link', { name: 'Fazer o Login' }).click()

  expect(page.url()).toContain('sign-in')
})
