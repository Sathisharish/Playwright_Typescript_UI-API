# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.ts >> Login Functionality
- Location: tests\example.spec.ts:7:6

# Error details

```
TimeoutError: page.waitForEvent: Timeout 60000ms exceeded while waiting for event "domcontentloaded"
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
        - listitem "My notifications" [ref=e12]:
          - list [ref=e13]:
            - listitem [ref=e14]:
              - link "" [ref=e15] [cursor=pointer]:
                - /url: javascript:;
                - generic [ref=e16]: 
        - listitem [ref=e17]:
          - link "" [ref=e18] [cursor=pointer]:
            - /url: javascript:;
            - generic [ref=e19]: 
          - text:  
        - listitem [ref=e20]:
          - link " " [ref=e21] [cursor=pointer]:
            - /url: javascript:;
            - generic [ref=e22]: 
            - generic [ref=e23]: 
          - text: 
  - generic [ref=e24]:
    - list [ref=e26]:
      - listitem [ref=e27]:
        - link "Dispensary " [active] [ref=e28] [cursor=pointer]:
          - /url: "#/Dispensary"
          - img [ref=e29]
          - text: Dispensary
          - generic: 
      - listitem [ref=e30]:
        - link "SocialService " [ref=e31] [cursor=pointer]:
          - /url: "#/SSU"
          - img [ref=e32]
          - text: SocialService
          - generic: 
      - listitem [ref=e33]:
        - link "OperationTheatre " [ref=e34] [cursor=pointer]:
          - /url: "#/OperationTheatre"
          - img [ref=e35]
          - text: OperationTheatre
          - generic: 
      - listitem [ref=e36]:
        - link "DynamicReport " [ref=e37] [cursor=pointer]:
          - /url: "#/DynamicReport"
          - img [ref=e38]
          - text: DynamicReport
          - generic: 
      - listitem [ref=e39]:
        - link "Doctor " [ref=e40] [cursor=pointer]:
          - /url: "#/Doctors"
          - img [ref=e41]
          - text: Doctor
          - generic: 
      - listitem [ref=e42]:
        - link "Appointment " [ref=e43] [cursor=pointer]:
          - /url: "#/Appointment"
          - img [ref=e44]
          - text: Appointment
          - generic: 
      - listitem [ref=e45]:
        - link "Patient " [ref=e46] [cursor=pointer]:
          - /url: "#/Patient"
          - img [ref=e47]
          - text: Patient
          - generic: 
      - listitem [ref=e48]:
        - link "Procurement " [ref=e49] [cursor=pointer]:
          - /url: "#/ProcurementMain"
          - img [ref=e50]
          - text: Procurement
          - generic: 
      - listitem [ref=e51]:
        - link "Billing " [ref=e52] [cursor=pointer]:
          - /url: "#/Billing"
          - img [ref=e53]
          - text: Billing
          - generic: 
      - listitem [ref=e54]:
        - link "ClaimMgmt " [ref=e55] [cursor=pointer]:
          - /url: "#/ClaimManagement"
          - img [ref=e56]
          - text: ClaimMgmt
          - generic: 
      - listitem [ref=e57]:
        - link "Utilities " [ref=e58] [cursor=pointer]:
          - /url: "#/Utilities"
          - img [ref=e59]
          - text: Utilities
          - generic: 
      - listitem [ref=e60]:
        - link "MktReferral " [ref=e61] [cursor=pointer]:
          - /url: "#/MktReferral"
          - img [ref=e62]
          - text: MktReferral
          - generic: 
      - listitem [ref=e63]:
        - link "Reports " [ref=e64] [cursor=pointer]:
          - /url: "#/Reports"
          - img [ref=e65]
          - text: Reports
          - generic: 
      - listitem [ref=e66]:
        - link "Laboratory " [ref=e67] [cursor=pointer]:
          - /url: "#/Lab"
          - img [ref=e68]
          - text: Laboratory
          - generic: 
      - listitem [ref=e69]:
        - link "Radiology " [ref=e70] [cursor=pointer]:
          - /url: "#/Radiology"
          - img [ref=e71]
          - text: Radiology
          - generic: 
      - listitem [ref=e72]:
        - link "ADT " [ref=e73] [cursor=pointer]:
          - /url: "#/ADTMain"
          - img [ref=e74]
          - text: ADT
          - generic: 
      - listitem [ref=e75]:
        - link "Vaccination " [ref=e76] [cursor=pointer]:
          - /url: "#/Vaccination"
          - img [ref=e77]
          - text: Vaccination
          - generic: 
      - listitem [ref=e78]:
        - link "QueueMngmt " [ref=e79] [cursor=pointer]:
          - /url: "#/QueueManagement"
          - img [ref=e80]
          - text: QueueMngmt
          - generic: 
      - listitem [ref=e81]:
        - link "Inventory " [ref=e82] [cursor=pointer]:
          - /url: "#/Inventory"
          - img [ref=e83]
          - text: Inventory
          - generic: 
      - listitem [ref=e84]:
        - link "Accounting " [ref=e85] [cursor=pointer]:
          - /url: "#/Accounting"
          - img [ref=e86]
          - text: Accounting
          - generic: 
      - listitem [ref=e87]:
        - link "Emergency " [ref=e88] [cursor=pointer]:
          - /url: "#/Emergency"
          - img [ref=e89]
          - text: Emergency
          - generic: 
      - listitem [ref=e90]:
        - link "NHIF " [ref=e91] [cursor=pointer]:
          - /url: "#/GovInsurance"
          - img [ref=e92]
          - text: NHIF
          - generic: 
      - listitem [ref=e93]:
        - link "Maternity " [ref=e94] [cursor=pointer]:
          - /url: "#/Maternity"
          - img [ref=e95]
          - text: Maternity
          - generic: 
      - listitem [ref=e96]:
        - link "Helpdesk " [ref=e97] [cursor=pointer]:
          - /url: "#/Helpdesk"
          - img [ref=e98]
          - text: Helpdesk
          - generic: 
      - listitem [ref=e99]:
        - link "Nursing " [ref=e100] [cursor=pointer]:
          - /url: "#/Nursing"
          - img [ref=e101]
          - text: Nursing
          - generic: 
      - listitem [ref=e102]:
        - link "MedicalRecords " [ref=e103] [cursor=pointer]:
          - /url: "#/Medical-records"
          - img [ref=e104]
          - text: MedicalRecords
          - generic: 
      - listitem [ref=e105]:
        - link "Settings " [ref=e106] [cursor=pointer]:
          - /url: "#/Settings"
          - img [ref=e107]
          - text: Settings
          - generic: 
      - listitem [ref=e108]:
        - link "SystemAdmin " [ref=e109] [cursor=pointer]:
          - /url: "#/SystemAdmin"
          - img [ref=e110]
          - text: SystemAdmin
          - generic: 
      - listitem [ref=e111]:
        - link "Pharmacy " [ref=e112] [cursor=pointer]:
          - /url: "#/Pharmacy"
          - img [ref=e113]
          - text: Pharmacy
          - generic: 
      - listitem [ref=e114]:
        - link "SubStore " [ref=e115] [cursor=pointer]:
          - /url: "#/WardSupply"
          - img [ref=e116]
          - text: SubStore
          - generic: 
      - listitem [ref=e117]:
        - link "CSSD " [ref=e118] [cursor=pointer]:
          - /url: "#/CSSD"
          - img [ref=e119]
          - text: CSSD
          - generic: 
      - listitem [ref=e120]:
        - link "Incentive " [ref=e121] [cursor=pointer]:
          - /url: "#/Incentive"
          - img [ref=e122]
          - text: Incentive
          - generic: 
      - listitem [ref=e123]:
        - link "Verification " [ref=e124] [cursor=pointer]:
          - /url: "#/Verification"
          - img [ref=e125]
          - text: Verification
          - generic: 
      - listitem [ref=e126]:
        - link "FixedAssets " [ref=e127] [cursor=pointer]:
          - /url: "#/FixedAssets"
          - img [ref=e128]
          - text: FixedAssets
          - generic: 
    - generic [ref=e133]:
      - generic [ref=e134]:
        - generic [ref=e139] [cursor=pointer]:
          - generic [ref=e141]:
            - paragraph [ref=e142]: Registered Patient
            - generic [ref=e143]: "Total Patient:"
          - generic [ref=e144]:
            - generic [ref=e145]: "Today :"
            - generic [ref=e146]: "Yesterday :"
        - generic [ref=e150]:
          - generic [ref=e152]:
            - paragraph [ref=e153]: Total Doctors
            - generic [ref=e154]: "Consultants :"
          - generic [ref=e155]:
            - generic [ref=e156]: "Medical Officers:"
            - generic [ref=e157]: "Anaesthetists:"
        - generic [ref=e162]:
          - generic [ref=e164]:
            - paragraph [ref=e165]: Today's Appointments
            - generic [ref=e166]: "New :"
            - generic [ref=e167]: "Follow up :"
            - generic [ref=e168]: "Referrals :"
          - generic [ref=e169]:
            - generic [ref=e170]: "Cancelled :"
            - generic [ref=e171]: "Returned :"
      - generic [ref=e175]:
        - generic [ref=e176]:
          - generic [ref=e177]: 
          - generic [ref=e178]: Department wise appointment count on 02-05-2026
        - generic [ref=e179]:
          - link [ref=e180] [cursor=pointer]:
            - /url: javascript:;
          - link "" [ref=e181] [cursor=pointer]:
            - /url: javascript:;
          - link [ref=e182] [cursor=pointer]:
            - /url: javascript:;
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
     |                   ^ TimeoutError: page.waitForEvent: Timeout 60000ms exceeded while waiting for event "domcontentloaded"
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