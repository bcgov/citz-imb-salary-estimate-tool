import { test, expect } from '@playwright/test';
import { admLogin, hmLogin, shrLogin, logout } from './utils';

// Define an array of user roles and their corresponding login and logout functions
const userRoles = [
  { role: 'ADM', login: admLogin, logout },
  { role: 'HM', login: hmLogin, logout },
  { role: 'SHR', login: shrLogin, logout },
];

test.describe.configure({ mode: 'serial' });
// Loop over each user role
for (const user of userRoles) {
  // Define a test for each user role
  test(`Authorized page as ${user.role}`, async ({ page }) => {
    test.slow();
    // Log in as the current user
    await user.login(page);

    // Verify that the user has been logged in
    const logoutButton = page.getByRole('button', { name: 'Logout' });
    await logoutButton.waitFor({ state: 'visible' });
    await expect(logoutButton).toHaveText('Logout');

    // Log out as the current user
    await user.logout(page);
  });
}
