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
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://healthapp.yaksha.com/", waiting until "domcontentloaded"

```

# Page snapshot

```yaml
- generic [ref=e5]:
  - generic [ref=e7]:
    - generic [ref=e8]:
      - heading "Danphe Emr" [level=1] [ref=e9]
      - paragraph [ref=e10]: A Complete Healthcare Management Solution for Hospitals, Clinics and Pharmacy.
      - list [ref=e11]:
        - listitem [ref=e12]: ☑EMR
        - listitem [ref=e13]: ☑ERP
        - listitem [ref=e14]: ☑Disease Registry
        - listitem [ref=e15]: ☑Health Information Exchange
        - listitem [ref=e16]: ☑Syndromic Surveillance
        - listitem [ref=e17]: ☑Patient Portal
    - paragraph [ref=e18]:
      - link "Terms & Condition" [ref=e19] [cursor=pointer]:
        - /url: "#"
      - text: © Copyright 2020
      - link "Danphe Health" [ref=e20] [cursor=pointer]:
        - /url: http://www.danphehealth.com/
  - generic [ref=e27]:
    - img "Alternate Text" [ref=e29]
    - heading "Sign in" [level=1] [ref=e32]
    - textbox "Username" [ref=e35]
    - generic [ref=e36]:
      - textbox "Password" [ref=e38]
      - generic [ref=e40]:
        - checkbox "Remember me?" [ref=e41]
        - text: Remember me?
    - generic [ref=e44]:
      - link "Forgot password?" [ref=e45] [cursor=pointer]:
        - /url: /Account/ForgotPassword
      - button "Sign in" [ref=e46] [cursor=pointer]
    - generic [ref=e49]: Danphe EMR Version 1.0
```

# Test source

```ts
  1   | import { Page, Locator, expect } from '@playwright/test';
  2   | import XLSX from 'xlsx';
  3   | 
  4   | export default class BasePage {
  5   | private page: Page;
  6   |   constructor(page: Page) {
  7   |     this.page = page;
  8   |   }
  9   | 
  10  |   // 🌐 Navigation
  11  |   async navigate(url: string) {
> 12  |     await this.page.goto(url, { waitUntil: 'domcontentloaded' });
      |                     ^ Error: page.goto: Test timeout of 30000ms exceeded.
  13  |   }
  14  | 
  15  |   // 👀 Wait for element
  16  |   async waitForVisible(locator: Locator) {
  17  |     await expect(locator).toBeVisible();
  18  |   }
  19  | 
  20  |   // 🖱 Click
  21  |   async click(locator: Locator) {
  22  |     await locator.click();
  23  |   }
  24  | 
  25  |   // ✍️ Type text
  26  |   async fill(locator: Locator, value: string) {
  27  |     await locator.fill(value);
  28  |   }
  29  | 
  30  |   // 📄 Get text
  31  |   async getText(locator: Locator): Promise<string> {
  32  |     return await locator.textContent() ?? '';
  33  |   }
  34  | 
  35  |   // 🔄 Wait for page load
  36  |   async waitForLoad() {
  37  |     await this.page.waitForLoadState('networkidle');
  38  |   }
  39  | 
  40  |   // 📸 Screenshot
  41  |   async takeScreenshot(name: string) {
  42  |     await this.page.screenshot({ path: `reports/screenshots/${name}.png` });
  43  |   }
  44  | 
  45  |   // 🔍 Generic locator helper
  46  |   getByTestId(testId: string): Locator {
  47  |     return this.page.locator(`[data-testid="${testId}"]`);
  48  |   }
  49  | 
  50  |   async readTestData(testcaseID:string, sheetName: string):Promise<Record<string, any> | null>{
  51  |     
  52  |   const workbook = XLSX.readFile('test-data/TestData.xlsx');
  53  |  
  54  |   const sheet = workbook.Sheets[sheetName];
  55  |   if (!sheet) {
  56  |     throw new Error(`Sheet ${sheetName} not found`);
  57  |   }
  58  | 
  59  |   // Convert sheet to JSON
  60  |   const data: Record<string, any>[] = XLSX.utils.sheet_to_json(sheet);
  61  | 
  62  |   // Find row where S.No matches
  63  |   const row = data.find(r => r["TC_ID"] === testcaseID);
  64  | 
  65  |   return row || null;
  66  |   }
  67  | 
  68  |   async getRowDataWithoutJSON(
  69  |    
  70  |   sNoValue: string,
  71  |   sheetName: string
  72  | ):Promise< Record<string, any>  >{
  73  | 
  74  |   const workbook = XLSX.readFile('test-data/TestData.xlsx');
  75  |   const sheet = workbook.Sheets[sheetName];
  76  | 
  77  |   if (!sheet) {
  78  |     throw new Error(`Sheet ${sheetName} not found`);
  79  |   }
  80  | 
  81  |   const range = XLSX.utils.decode_range(sheet['!ref'] as string);
  82  | 
  83  |   // ✅ Get headers (first row)
  84  |   const headers: string[] = [];
  85  |   for (let col = range.s.c; col <= range.e.c; col++) {
  86  |     const cellAddress = XLSX.utils.encode_cell({ r: 0, c: col });
  87  |     const cell = sheet[cellAddress];
  88  |     headers.push(cell ? cell.v : `Column${col}`);
  89  |   }
  90  | 
  91  |   // ✅ Loop through rows
  92  |   for (let row = range.s.r + 1; row <= range.e.r; row++) {
  93  | 
  94  |     let currentRow: Record<string, any> = {};
  95  | 
  96  |     for (let col = range.s.c; col <= range.e.c; col++) {
  97  |       const cellAddress = XLSX.utils.encode_cell({ r: row, c: col });
  98  |       const cell = sheet[cellAddress];
  99  | 
  100 |       currentRow[headers[col]] = cell ? cell.v : null;
  101 |     }
  102 | 
  103 |     // ✅ Match S.No
  104 |     if ((currentRow["TC_ID"]) === sNoValue) {
  105 |       return currentRow;
  106 |     }
  107 |   }
  108 | 
  109 |   return [];
  110 | }
  111 | 
  112 | }
```