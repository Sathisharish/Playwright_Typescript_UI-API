import { test, expect, Page } from '@playwright/test';
import loginPage from '../pages/loginPage';
import BasePage from '../utils/BasePage';
import testData from '../test-data/TestData.json';
import Dispensary from '../pages/Dispensary';

test.only('Login Functionality', async ({ page }) => {
  const LoginPage = new loginPage(page);
  const basePage = new BasePage(page);
  const dispensary = new Dispensary(page);

  await basePage.navigate('https://healthapp.yaksha.com');

  const data = await basePage.readTestData('TC_001', 'CREDS');
  const exceldata = await basePage.getRowDataWithoutJSON('TC_001', 'CREDS');

  console.log(exceldata)

  const jasonData = testData["TC_001"];
  console.log(jasonData.Username);

  await LoginPage.login(exceldata.Username, exceldata.Password);
  // await expect(page).toHaveTitle('DanpheHealth');
  // await expect.soft(page).toHaveTitle('DanpehHealth');
  // console.log('continue even Failing')
    await LoginPage.verification('Registered Patient ');
  await dispensary.verifyDispensaryToolTips();
});

/*test('get started link duplicate', async ({ page }) => {

  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

});*/

