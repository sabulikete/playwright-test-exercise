import { Page } from '@playwright/test';

export default class BasePage {
  constructor(
    public readonly page: Page,
    public readonly URL = '/',
  ) {}

  public async visit() {
    await this.page.goto(this.URL);
  }
}