import { test, expect } from '@playwright/test';

test('can share a comparison URL and render the table', async ({ page }) => {
  // Navigate directly to the comparison URL
  await page.goto('/compare?compare=salesforce,hubspot');
  
  // Verify the table header shows both products
  await expect(page.locator('h1')).toContainText('Compare Products');
  await expect(page.locator('th').nth(1)).toContainText('Salesforce');
  await expect(page.locator('th').nth(2)).toContainText('HubSpot');
  
  // Verify the data is populated (e.g., checking the 'Pricing' row)
  await expect(page.locator('td').first()).toContainText('Pricing');
});

test('can select products from the directory', async ({ page }) => {
  await page.goto('/');
  
  // Click the labels instead of the checkboxes (more reliable for React)
  await page.locator('label:has-text("Compare")').nth(0).click();
  await page.locator('label:has-text("Compare")').nth(1).click();
  
  // Verify the button appears and click it
  const compareButton = page.getByText('Compare Selected (2)');
  await expect(compareButton).toBeVisible();
  await compareButton.click();
  
  // Verify we are on the compare page
  await expect(page.locator('h1')).toContainText('Compare Products');
});