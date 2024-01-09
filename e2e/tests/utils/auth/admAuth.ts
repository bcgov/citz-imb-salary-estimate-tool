import { Page, expect } from '@playwright/test';
import { admUsername, admPassword } from '../env/env';

// Function to log in as a ADM user
export async function admLogin(page: Page) {
  try {
    // Navigate to the home page
    await page.goto('/');
    await expect(page).toHaveURL('/login');

    // Click on the 'Log in with IDIR' button
    const loginButton = page.getByRole('button', { name: 'Login' });
    await loginButton.waitFor({ state: 'visible' });
    await loginButton.click();

    // Enter the ADM username
    const userField = page.locator('#user');
    await userField.waitFor({ state: 'visible' });
    await userField.click();
    await userField.fill(admUsername);

    // Enter the ADM password
    const passwordField = page.getByLabel('Password');
    await passwordField.waitFor({ state: 'visible' });
    await passwordField.click();
    await passwordField.fill(admPassword);

    // Click on the 'Continue' button to log in
    const continueButton = page.getByRole('button', { name: 'Continue' });
    await continueButton.waitFor({ state: 'visible' });
    await continueButton.click();

    // Verify that the user is redirected to the home page after logging in
    await expect(page).toHaveURL('/');
  } catch (error) {
    // Handle errors that occur during login
    console.error('Login failed', error);
    throw new Error('Login failed'); // Re-throw the error to fail the test
  }
}
