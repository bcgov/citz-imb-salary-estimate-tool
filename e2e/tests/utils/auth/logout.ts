import { Page, expect } from '@playwright/test';

// Function to log out as current user
export async function logout(page: Page) {
  try {
    // Click on the 'Sign Out' button
    const logoutButton = page.getByRole('button', { name: 'Logout' });
    await logoutButton.waitFor({ state: 'visible' });
    await logoutButton.click();

    // Verify that the user is redirected to the home page after logging out
    await expect(page).toHaveURL('/login');

    // Navigate to the home page
    await page.goto('/');

    // Verify 'Login' button is displayed
    const loginButton = page.getByRole('button', { name: 'Login' });
    await loginButton.waitFor({ state: 'visible' });
    await expect(loginButton).toHaveText('Login');
  } catch (error) {
    // Handle errors that occur during logout
    console.error('Logout failed', error);
    throw new Error('Logout failed'); // Re-throw the error to fail the test
  }
}
