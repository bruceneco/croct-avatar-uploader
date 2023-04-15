import {expect, test} from '@playwright/test';

const result = "avatar-upload_result.png"
const inputInstructions = "avatar-upload_instructions.png"
const croppingInstructions = "avatar-upload_cropping.png"
const error = "avatar-upload_error.png"

test('show initial instructions', async ({page}) => {
    await page.goto('/');

    await expect(page).toHaveScreenshot()
});

test('show error', async ({page}) => {
    await page.goto('/');

    await page.setInputFiles("input[type='file']", "e2e/assets/text.txt")
    await expect(page).toHaveScreenshot(error)
});


test('crop image', async ({page}) => {
    await page.goto('/');

    await page.setInputFiles("input[type='file']", "e2e/assets/logo.jpg")
    await expect(page).toHaveScreenshot(croppingInstructions)
});

test('result', async ({page}) => {
    await page.goto('/');

    await page.setInputFiles("input[type='file']", "e2e/assets/logo.jpg")
    await page.getByText(/save/i).click()
    await expect(page).toHaveScreenshot(result)
});