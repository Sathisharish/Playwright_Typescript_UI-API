# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.ts >> Login Functionality
- Location: tests\example.spec.ts:7:6

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForEvent: Test timeout of 30000ms exceeded.
=========================== logs ===========================
waiting for event "domcontentloaded"
============================================================
```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e5]:
    - generic:
      - link "logo" [ref=e7] [cursor=pointer]:
        - /url: "#"
        - img "logo" [ref=e8]
      - list [ref=e11]:
        - listitem [ref=e12]:
          - link "CMH_V2.2.4X" [ref=e13] [cursor=pointer]:
            - /url: javascript:;
        - listitem "My notifications" [ref=e14]:
          - list [ref=e15]:
            - listitem [ref=e16]:
              - link "" [ref=e17] [cursor=pointer]:
                - /url: javascript:;
                - generic [ref=e18]: 
        - listitem [ref=e19]:
          - link "admin " [ref=e20] [cursor=pointer]:
            - /url: javascript:;
            - generic [ref=e21]: admin
            - generic [ref=e22]: 
          - text:  
        - listitem [ref=e23]:
          - link " " [ref=e24] [cursor=pointer]:
            - /url: javascript:;
            - generic [ref=e25]: 
            - generic [ref=e26]: 
          - text: 
  - generic [ref=e27]:
    - list [ref=e29]:
      - listitem [ref=e30]:
        - link "Dispensary " [active] [ref=e31] [cursor=pointer]:
          - /url: "#/Dispensary"
          - img [ref=e32]
          - text: Dispensary
          - generic: 
      - listitem [ref=e33]:
        - link "SocialService " [ref=e34] [cursor=pointer]:
          - /url: "#/SSU"
          - img [ref=e35]
          - text: SocialService
          - generic: 
      - listitem [ref=e36]:
        - link "OperationTheatre " [ref=e37] [cursor=pointer]:
          - /url: "#/OperationTheatre"
          - img [ref=e38]
          - text: OperationTheatre
          - generic: 
      - listitem [ref=e39]:
        - link "DynamicReport " [ref=e40] [cursor=pointer]:
          - /url: "#/DynamicReport"
          - img [ref=e41]
          - text: DynamicReport
          - generic: 
      - listitem [ref=e42]:
        - link "Doctor " [ref=e43] [cursor=pointer]:
          - /url: "#/Doctors"
          - img [ref=e44]
          - text: Doctor
          - generic: 
      - listitem [ref=e45]:
        - link "Appointment " [ref=e46] [cursor=pointer]:
          - /url: "#/Appointment"
          - img [ref=e47]
          - text: Appointment
          - generic: 
      - listitem [ref=e48]:
        - link "Patient " [ref=e49] [cursor=pointer]:
          - /url: "#/Patient"
          - img [ref=e50]
          - text: Patient
          - generic: 
      - listitem [ref=e51]:
        - link "Procurement " [ref=e52] [cursor=pointer]:
          - /url: "#/ProcurementMain"
          - img [ref=e53]
          - text: Procurement
          - generic: 
      - listitem [ref=e54]:
        - link "Billing " [ref=e55] [cursor=pointer]:
          - /url: "#/Billing"
          - img [ref=e56]
          - text: Billing
          - generic: 
      - listitem [ref=e57]:
        - link "ClaimMgmt " [ref=e58] [cursor=pointer]:
          - /url: "#/ClaimManagement"
          - img [ref=e59]
          - text: ClaimMgmt
          - generic: 
      - listitem [ref=e60]:
        - link "Utilities " [ref=e61] [cursor=pointer]:
          - /url: "#/Utilities"
          - img [ref=e62]
          - text: Utilities
          - generic: 
      - listitem [ref=e63]:
        - link "MktReferral " [ref=e64] [cursor=pointer]:
          - /url: "#/MktReferral"
          - img [ref=e65]
          - text: MktReferral
          - generic: 
      - listitem [ref=e66]:
        - link "Reports " [ref=e67] [cursor=pointer]:
          - /url: "#/Reports"
          - img [ref=e68]
          - text: Reports
          - generic: 
      - listitem [ref=e69]:
        - link "Laboratory " [ref=e70] [cursor=pointer]:
          - /url: "#/Lab"
          - img [ref=e71]
          - text: Laboratory
          - generic: 
      - listitem [ref=e72]:
        - link "Radiology " [ref=e73] [cursor=pointer]:
          - /url: "#/Radiology"
          - img [ref=e74]
          - text: Radiology
          - generic: 
      - listitem [ref=e75]:
        - link "ADT " [ref=e76] [cursor=pointer]:
          - /url: "#/ADTMain"
          - img [ref=e77]
          - text: ADT
          - generic: 
      - listitem [ref=e78]:
        - link "Vaccination " [ref=e79] [cursor=pointer]:
          - /url: "#/Vaccination"
          - img [ref=e80]
          - text: Vaccination
          - generic: 
      - listitem [ref=e81]:
        - link "QueueMngmt " [ref=e82] [cursor=pointer]:
          - /url: "#/QueueManagement"
          - img [ref=e83]
          - text: QueueMngmt
          - generic: 
      - listitem [ref=e84]:
        - link "Inventory " [ref=e85] [cursor=pointer]:
          - /url: "#/Inventory"
          - img [ref=e86]
          - text: Inventory
          - generic: 
      - listitem [ref=e87]:
        - link "Accounting " [ref=e88] [cursor=pointer]:
          - /url: "#/Accounting"
          - img [ref=e89]
          - text: Accounting
          - generic: 
      - listitem [ref=e90]:
        - link "Emergency " [ref=e91] [cursor=pointer]:
          - /url: "#/Emergency"
          - img [ref=e92]
          - text: Emergency
          - generic: 
      - listitem [ref=e93]:
        - link "NHIF " [ref=e94] [cursor=pointer]:
          - /url: "#/GovInsurance"
          - img [ref=e95]
          - text: NHIF
          - generic: 
      - listitem [ref=e96]:
        - link "Maternity " [ref=e97] [cursor=pointer]:
          - /url: "#/Maternity"
          - img [ref=e98]
          - text: Maternity
          - generic: 
      - listitem [ref=e99]:
        - link "Helpdesk " [ref=e100] [cursor=pointer]:
          - /url: "#/Helpdesk"
          - img [ref=e101]
          - text: Helpdesk
          - generic: 
      - listitem [ref=e102]:
        - link "Nursing " [ref=e103] [cursor=pointer]:
          - /url: "#/Nursing"
          - img [ref=e104]
          - text: Nursing
          - generic: 
      - listitem [ref=e105]:
        - link "MedicalRecords " [ref=e106] [cursor=pointer]:
          - /url: "#/Medical-records"
          - img [ref=e107]
          - text: MedicalRecords
          - generic: 
      - listitem [ref=e108]:
        - link "Settings " [ref=e109] [cursor=pointer]:
          - /url: "#/Settings"
          - img [ref=e110]
          - text: Settings
          - generic: 
      - listitem [ref=e111]:
        - link "SystemAdmin " [ref=e112] [cursor=pointer]:
          - /url: "#/SystemAdmin"
          - img [ref=e113]
          - text: SystemAdmin
          - generic: 
      - listitem [ref=e114]:
        - link "Pharmacy " [ref=e115] [cursor=pointer]:
          - /url: "#/Pharmacy"
          - img [ref=e116]
          - text: Pharmacy
          - generic: 
      - listitem [ref=e117]:
        - link "SubStore " [ref=e118] [cursor=pointer]:
          - /url: "#/WardSupply"
          - img [ref=e119]
          - text: SubStore
          - generic: 
      - listitem [ref=e120]:
        - link "CSSD " [ref=e121] [cursor=pointer]:
          - /url: "#/CSSD"
          - img [ref=e122]
          - text: CSSD
          - generic: 
      - listitem [ref=e123]:
        - link "Incentive " [ref=e124] [cursor=pointer]:
          - /url: "#/Incentive"
          - img [ref=e125]
          - text: Incentive
          - generic: 
      - listitem [ref=e126]:
        - link "Verification " [ref=e127] [cursor=pointer]:
          - /url: "#/Verification"
          - img [ref=e128]
          - text: Verification
          - generic: 
      - listitem [ref=e129]:
        - link "FixedAssets " [ref=e130] [cursor=pointer]:
          - /url: "#/FixedAssets"
          - img [ref=e131]
          - text: FixedAssets
          - generic: 
    - generic [ref=e137]:
      - generic [ref=e139]:
        - generic [ref=e140]: "*"
        - generic [ref=e141]: Select your Dispensary
      - generic [ref=e143]:
        - generic [ref=e146]:
          - generic [ref=e148]: 
          - generic [ref=e149]:
            - generic [ref=e150]: Main Dispensary
            - generic [ref=e151]: dispensary
        - generic [ref=e154]:
          - generic [ref=e156]: 
          - generic [ref=e157]:
            - generic [ref=e158]: lol
            - generic [ref=e159]: dispensary
        - generic [ref=e162]:
          - generic [ref=e164]: 
          - generic [ref=e165]:
            - generic [ref=e166]: aa
            - generic [ref=e167]: dispensary
        - generic [ref=e170]:
          - generic [ref=e172]: 
          - generic [ref=e173]:
            - generic [ref=e174]: Test
            - generic [ref=e175]: dispensary
        - generic [ref=e178]:
          - generic [ref=e180]: 
          - generic [ref=e181]:
            - generic [ref=e182]: Pharmacy
            - generic [ref=e183]: dispensary
        - generic [ref=e186]:
          - generic [ref=e188]: 
          - generic [ref=e189]:
            - generic [ref=e190]: Florence
            - generic [ref=e191]: dispensary
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
> 23 |    await this.page.waitForEvent('domcontentloaded'); 
     |                    ^ Error: page.waitForEvent: Test timeout of 30000ms exceeded.
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