# Testing Approach

## Puppeteer

End - to end

headless browser

High level API to control Chrome or Chromium

NOT a testing framework, but can be used for testing

Works with Chromium only.

### Code

```JavaScript
await page.waaitForSelector('#new-location');
await page.focus('#new-location');
await page.keyboard.type('ptri');
await page.waitForSelector('.primary');
await page.click('.prmiary');

const markets = await page.$$eval('.marketBox', (array) => {
  array.map((market) => market.innerText);
});

expect(markets[0]).toContain('Location ptri');
