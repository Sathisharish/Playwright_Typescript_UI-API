# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.ts >> Login Functionality
- Location: tests\example.spec.ts:7:6

# Error details

```
TimeoutError: page.waitForEvent: Timeout 6000ms exceeded while waiting for event "domcontentloaded"
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
        - img "logo"
      - list [ref=e10]:
        - listitem "My notifications" [ref=e11]:
          - list [ref=e12]:
            - listitem [ref=e13]:
              - link "" [ref=e14] [cursor=pointer]:
                - /url: javascript:;
                - generic [ref=e15]: 
        - listitem [ref=e16]:
          - link "" [ref=e17] [cursor=pointer]:
            - /url: javascript:;
            - generic [ref=e18]: 
          - text:  
        - listitem [ref=e19]:
          - link " " [ref=e20] [cursor=pointer]:
            - /url: javascript:;
            - generic [ref=e21]: 
            - generic [ref=e22]: 
          - text: 
  - generic [ref=e23]:
    - list [ref=e25]:
      - listitem [ref=e26]:
        - link "Dispensary " [active] [ref=e27] [cursor=pointer]:
          - /url: "#/Dispensary"
          - img [ref=e28]
          - text: Dispensary
          - generic: 
      - listitem [ref=e29]:
        - link "SocialService " [ref=e30] [cursor=pointer]:
          - /url: "#/SSU"
          - img [ref=e31]
          - text: SocialService
          - generic: 
      - listitem [ref=e32]:
        - link "OperationTheatre " [ref=e33] [cursor=pointer]:
          - /url: "#/OperationTheatre"
          - img [ref=e34]
          - text: OperationTheatre
          - generic: 
      - listitem [ref=e35]:
        - link "DynamicReport " [ref=e36] [cursor=pointer]:
          - /url: "#/DynamicReport"
          - img [ref=e37]
          - text: DynamicReport
          - generic: 
      - listitem [ref=e38]:
        - link "Doctor " [ref=e39] [cursor=pointer]:
          - /url: "#/Doctors"
          - img [ref=e40]
          - text: Doctor
          - generic: 
      - listitem [ref=e41]:
        - link "Appointment " [ref=e42] [cursor=pointer]:
          - /url: "#/Appointment"
          - img [ref=e43]
          - text: Appointment
          - generic: 
      - listitem [ref=e44]:
        - link "Patient " [ref=e45] [cursor=pointer]:
          - /url: "#/Patient"
          - img [ref=e46]
          - text: Patient
          - generic: 
      - listitem [ref=e47]:
        - link "Procurement " [ref=e48] [cursor=pointer]:
          - /url: "#/ProcurementMain"
          - img [ref=e49]
          - text: Procurement
          - generic: 
      - listitem [ref=e50]:
        - link "Billing " [ref=e51] [cursor=pointer]:
          - /url: "#/Billing"
          - img [ref=e52]
          - text: Billing
          - generic: 
      - listitem [ref=e53]:
        - link "ClaimMgmt " [ref=e54] [cursor=pointer]:
          - /url: "#/ClaimManagement"
          - img [ref=e55]
          - text: ClaimMgmt
          - generic: 
      - listitem [ref=e56]:
        - link "Utilities " [ref=e57] [cursor=pointer]:
          - /url: "#/Utilities"
          - img [ref=e58]
          - text: Utilities
          - generic: 
      - listitem [ref=e59]:
        - link "MktReferral " [ref=e60] [cursor=pointer]:
          - /url: "#/MktReferral"
          - img [ref=e61]
          - text: MktReferral
          - generic: 
      - listitem [ref=e62]:
        - link "Reports " [ref=e63] [cursor=pointer]:
          - /url: "#/Reports"
          - img [ref=e64]
          - text: Reports
          - generic: 
      - listitem [ref=e65]:
        - link "Laboratory " [ref=e66] [cursor=pointer]:
          - /url: "#/Lab"
          - img [ref=e67]
          - text: Laboratory
          - generic: 
      - listitem [ref=e68]:
        - link "Radiology " [ref=e69] [cursor=pointer]:
          - /url: "#/Radiology"
          - img [ref=e70]
          - text: Radiology
          - generic: 
      - listitem [ref=e71]:
        - link "ADT " [ref=e72] [cursor=pointer]:
          - /url: "#/ADTMain"
          - img [ref=e73]
          - text: ADT
          - generic: 
      - listitem [ref=e74]:
        - link "Vaccination " [ref=e75] [cursor=pointer]:
          - /url: "#/Vaccination"
          - img [ref=e76]
          - text: Vaccination
          - generic: 
      - listitem [ref=e77]:
        - link "QueueMngmt " [ref=e78] [cursor=pointer]:
          - /url: "#/QueueManagement"
          - img [ref=e79]
          - text: QueueMngmt
          - generic: 
      - listitem [ref=e80]:
        - link "Inventory " [ref=e81] [cursor=pointer]:
          - /url: "#/Inventory"
          - img [ref=e82]
          - text: Inventory
          - generic: 
      - listitem [ref=e83]:
        - link "Accounting " [ref=e84] [cursor=pointer]:
          - /url: "#/Accounting"
          - img [ref=e85]
          - text: Accounting
          - generic: 
      - listitem [ref=e86]:
        - link "Emergency " [ref=e87] [cursor=pointer]:
          - /url: "#/Emergency"
          - img [ref=e88]
          - text: Emergency
          - generic: 
      - listitem [ref=e89]:
        - link "NHIF " [ref=e90] [cursor=pointer]:
          - /url: "#/GovInsurance"
          - img [ref=e91]
          - text: NHIF
          - generic: 
      - listitem [ref=e92]:
        - link "Maternity " [ref=e93] [cursor=pointer]:
          - /url: "#/Maternity"
          - img [ref=e94]
          - text: Maternity
          - generic: 
      - listitem [ref=e95]:
        - link "Helpdesk " [ref=e96] [cursor=pointer]:
          - /url: "#/Helpdesk"
          - img [ref=e97]
          - text: Helpdesk
          - generic: 
      - listitem [ref=e98]:
        - link "Nursing " [ref=e99] [cursor=pointer]:
          - /url: "#/Nursing"
          - img [ref=e100]
          - text: Nursing
          - generic: 
      - listitem [ref=e101]:
        - link "MedicalRecords " [ref=e102] [cursor=pointer]:
          - /url: "#/Medical-records"
          - img [ref=e103]
          - text: MedicalRecords
          - generic: 
      - listitem [ref=e104]:
        - link "Settings " [ref=e105] [cursor=pointer]:
          - /url: "#/Settings"
          - img [ref=e106]
          - text: Settings
          - generic: 
      - listitem [ref=e107]:
        - link "SystemAdmin " [ref=e108] [cursor=pointer]:
          - /url: "#/SystemAdmin"
          - img [ref=e109]
          - text: SystemAdmin
          - generic: 
      - listitem [ref=e110]:
        - link "Pharmacy " [ref=e111] [cursor=pointer]:
          - /url: "#/Pharmacy"
          - img [ref=e112]
          - text: Pharmacy
          - generic: 
      - listitem [ref=e113]:
        - link "SubStore " [ref=e114] [cursor=pointer]:
          - /url: "#/WardSupply"
          - img [ref=e115]
          - text: SubStore
          - generic: 
      - listitem [ref=e116]:
        - link "CSSD " [ref=e117] [cursor=pointer]:
          - /url: "#/CSSD"
          - img [ref=e118]
          - text: CSSD
          - generic: 
      - listitem [ref=e119]:
        - link "Incentive " [ref=e120] [cursor=pointer]:
          - /url: "#/Incentive"
          - img [ref=e121]
          - text: Incentive
          - generic: 
      - listitem [ref=e122]:
        - link "Verification " [ref=e123] [cursor=pointer]:
          - /url: "#/Verification"
          - img [ref=e124]
          - text: Verification
          - generic: 
      - listitem [ref=e125]:
        - link "FixedAssets " [ref=e126] [cursor=pointer]:
          - /url: "#/FixedAssets"
          - img [ref=e127]
          - text: FixedAssets
          - generic: 
    - generic [ref=e132]:
      - generic [ref=e133]:
        - generic [ref=e138] [cursor=pointer]:
          - generic [ref=e140]:
            - paragraph [ref=e141]: Registered Patient
            - generic [ref=e142]: "Total Patient:"
          - generic [ref=e143]:
            - generic [ref=e144]: "Today :"
            - generic [ref=e145]: "Yesterday :"
        - generic [ref=e150]:
          - generic [ref=e152]:
            - paragraph [ref=e153]: Total Doctors
            - generic [ref=e154]: "Consultants :"
          - generic [ref=e155]:
            - generic [ref=e156]: "Medical Officers:"
            - generic [ref=e157]: "Anaesthetists:"
        - generic [ref=e163]:
          - generic [ref=e165]:
            - paragraph [ref=e166]: Today's Appointments
            - generic [ref=e167]: "New :"
            - generic [ref=e168]: "Follow up :"
            - generic [ref=e169]: "Referrals :"
          - generic [ref=e170]:
            - generic [ref=e171]: "Cancelled :"
            - generic [ref=e172]: "Returned :"
      - generic [ref=e176]:
        - generic [ref=e177]:
          - generic [ref=e178]: 
          - generic [ref=e179]: Department wise appointment count on 02-05-2026
        - generic [ref=e180]:
          - link [ref=e181] [cursor=pointer]:
            - /url: javascript:;
          - link "" [ref=e182] [cursor=pointer]:
            - /url: javascript:;
          - link [ref=e183] [cursor=pointer]:
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
> 23 |   await this.page.waitForEvent('domcontentloaded',{timeout:(6000)}); 
     |                   ^ TimeoutError: page.waitForEvent: Timeout 6000ms exceeded while waiting for event "domcontentloaded"
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