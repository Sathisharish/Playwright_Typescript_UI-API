# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.ts >> Login Functionality
- Location: tests\example.spec.ts:7:6

# Error details

```
Error: page.waitForEvent: Test ended.
=========================== logs ===========================
waiting for event "domcontentloaded"
============================================================
```

# Test source

```ts
  1  | import { expect, Locator, Page } from '@playwright/test';
  2  | import BasePage from '../utils/BasePage';
  3  | 
  4  | export default class loginPage {
  5  |   private page: Page;
  6  |   private BasePage;
  7  |   private Dispensary: Locator;
  8  |   private MainDispensary: Locator;
  9  |   private MainDispensaryToolTip: Locator;
  10 |   private RegElement: Locator;
  11 |   constructor(page: Page) {
  12 |     this.page = page;
  13 |     this.Dispensary = this.page.getByRole('link', { name: 'Dispensary ' })//getByRole('textbox', { name: 'Username' });
  14 |     this.MainDispensary = this.page.locator('a').filter({ hasText: 'Main Dispensarydispensary' })
  15 |     this.MainDispensaryToolTip = this.page.locator('h6');
  16 |     this.RegElement = this.page.locator("//p[text()='Registered Patient ']");
  17 |     this.BasePage = new BasePage(this.page);
  18 |   }
  19 | 
  20 |   async verifyDispensaryToolTips(){
  21 |   
  22 |   await this.page.getByRole('link', { name: 'Dispensary ' }).click();
> 23 |   await this.page.waitForEvent('domcontentloaded',{timeout:(60000)}); 
     |                   ^ Error: page.waitForEvent: Test ended.
  24 |   await this.MainDispensary.waitFor();
  25 |   await this.page.locator('a').filter({ hasText: 'Main Dispensarydispensary' }).click();
  26 |   await this.MainDispensaryToolTip.waitFor();
  27 | //   await this.page.waitForEvent('domcontentloaded');
  28 |   await expect(this.page.locator('h6')).toContainText('You are currently in Main Dispensary dispensary. To change, you can always click here.');
  29 |   await this.page.locator('div').filter({ hasText: /^Night Counter click to Activate$/ }).nth(2).click();
  30 |   
  31 |   }
  32 | }
```