import { Page, Locator, expect } from '@playwright/test';
import XLSX from 'xlsx';

export default class BasePage {
private page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  // 🌐 Navigation
  async navigate(url: string) {
    await this.page.goto(url, { waitUntil: 'domcontentloaded' });
  }

  // 👀 Wait for element
  async waitForVisible(locator: Locator) {
    await expect(locator).toBeVisible();
  }

  // 🖱 Click
  async click(locator: Locator) {
    await locator.click();
  }

  // ✍️ Type text
  async fill(locator: Locator, value: string) {
    await locator.fill(value);
  }

  // 📄 Get text
  async getText(locator: Locator): Promise<string> {
    return await locator.textContent() ?? '';
  }

  // 🔄 Wait for page load
  async waitForLoad() {
    await this.page.waitForLoadState('networkidle');
  }

  // 📸 Screenshot
  async takeScreenshot(name: string) {
    await this.page.screenshot({ path: `reports/screenshots/${name}.png` });
  }

  // 🔍 Generic locator helper
  getByTestId(testId: string): Locator {
    return this.page.locator(`[data-testid="${testId}"]`);
  }

  async readTestData(testcaseID:string, sheetName: string):Promise<Record<string, any> | null>{
    
  const workbook = XLSX.readFile('test-data/TestData.xlsx');
 
  const sheet = workbook.Sheets[sheetName];
  if (!sheet) {
    throw new Error(`Sheet ${sheetName} not found`);
  }

  // Convert sheet to JSON
  const data: Record<string, any>[] = XLSX.utils.sheet_to_json(sheet);

  // Find row where S.No matches
  const row = data.find(r => r["TC_ID"] === testcaseID);

  return row || null;
  }

  async getRowDataWithoutJSON(
   
  sNoValue: string,
  sheetName: string
):Promise< Record<string, any>  >{

  const workbook = XLSX.readFile('test-data/TestData.xlsx');
  const sheet = workbook.Sheets[sheetName];

  if (!sheet) {
    throw new Error(`Sheet ${sheetName} not found`);
  }

  const range = XLSX.utils.decode_range(sheet['!ref'] as string);

  // ✅ Get headers (first row)
  const headers: string[] = [];
  for (let col = range.s.c; col <= range.e.c; col++) {
    const cellAddress = XLSX.utils.encode_cell({ r: 0, c: col });
    const cell = sheet[cellAddress];
    headers.push(cell ? cell.v : `Column${col}`);
  }

  // ✅ Loop through rows
  for (let row = range.s.r + 1; row <= range.e.r; row++) {

    let currentRow: Record<string, any> = {};

    for (let col = range.s.c; col <= range.e.c; col++) {
      const cellAddress = XLSX.utils.encode_cell({ r: row, c: col });
      const cell = sheet[cellAddress];

      currentRow[headers[col]] = cell ? cell.v : null;
    }

    // ✅ Match S.No
    if ((currentRow["TC_ID"]) === sNoValue) {
      return currentRow;
    }
  }

  return [];
}

}