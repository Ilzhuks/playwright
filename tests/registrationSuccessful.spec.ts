import { test, expect } from '@playwright/test';


test('Validate successful registration', async ({ page }) => {
    await page.goto('https://auth-home-task.vercel.app/')
    await page.getByText('Go to Registration').click()


    // Validate that is opened Registration Form
    const heading = await page.locator('h1')
    await expect(heading).toHaveText('Registration Form')

    // Added input data to each field with valid data for successful registration
    await page.locator('input[name="username"]').type('Test')
    await page.locator('input[name="email"]').type('test@test.com')
    await page.locator('input[name="password"]').type('Test6821')
    await page.locator('input[name="confirmPassword"]').type('Test6821')

    // Click buttom Register
    await page.getByText('Register').click()


    // Validate that user is registraded successfully by checking the message that appears if user is registrated
    const successMessage = page.locator('p.text-green-500.mb-4')
    await expect(successMessage).toHaveText('You have registered successfully!')

})