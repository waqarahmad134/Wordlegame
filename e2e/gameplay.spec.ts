import { test, expect } from "@playwright/test";

// A known custom word so the outcome is deterministic.
const TOKEN = Buffer.from(JSON.stringify({ w: "plumb" }), "utf8").toString(
  "base64url",
);

async function typeWord(page: import("@playwright/test").Page, word: string) {
  for (const ch of word) await page.keyboard.press(ch);
}

test("daily board and keyboard render", async ({ page }) => {
  await page.goto("/en");
  await expect(page.locator(".tile").first()).toBeVisible();
  await expect(page.getByRole("button", { name: "Enter" })).toBeVisible();
});

test("typing fills tiles and submitting scores them", async ({ page }) => {
  await page.goto(`/en/play/${TOKEN}`);
  await page.waitForTimeout(300);
  await typeWord(page, "crane");
  const firstFive = page.locator(".tile").nth(0);
  await expect(firstFive).toHaveText("c");
  await page.keyboard.press("Enter");
  // All of c,r,a,n,e are absent in "plumb".
  await expect(page.locator('.tile[data-state="absent"]').first()).toBeVisible();
});

test("invalid word shows a toast", async ({ page }) => {
  await page.goto(`/en/play/${TOKEN}`);
  await page.waitForTimeout(300);
  await typeWord(page, "zzzzz");
  await page.keyboard.press("Enter");
  await expect(page.getByText("Not in word list")).toBeVisible();
});

test("guessing the word wins and offers sharing", async ({ page }) => {
  await page.goto(`/en/play/${TOKEN}`);
  await page.waitForTimeout(300);
  await typeWord(page, "plumb");
  await page.keyboard.press("Enter");
  await expect(page.getByText("Magnificent!")).toBeVisible({ timeout: 6000 });
  await expect(page.getByRole("button", { name: "Share" })).toBeVisible();
});

test("dark mode toggle adds the dark class", async ({ page }) => {
  await page.goto("/en");
  await page.getByRole("button", { name: "Settings" }).click();
  await page.getByRole("switch", { name: "Dark Theme" }).click();
  await expect(page.locator("html")).toHaveClass(/dark/);
});

test("language switcher navigates to a localized route", async ({ page }) => {
  await page.goto("/en");
  await page.getByRole("button", { name: "Menu" }).click();
  await page.getByLabel("Language").selectOption("es");
  await expect(page).toHaveURL(/\/es/);
});

test("multiplayer: create a room and land in it", async ({ page }) => {
  await page.goto("/en/multiplayer");
  await page.getByRole("button", { name: "Create a Room" }).click();
  await expect(page).toHaveURL(/\/room\/[A-Z0-9]{5}/);
  await expect(page.getByPlaceholder("Your name")).toBeVisible();
});
