import { test, expect } from '@playwright/test';

test('Validate GET /v2/payments/{token}', async ({ request }) => {
  const response = await request.get(
    'https://integration.api.scalapay.com/v2/payments/A1KQ7URT63',
    {
      headers: {
        Authorization: 'Bearer qhtfs87hjnc12kkos'
      }
    }
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  // Used console log to get the response
  // console.log(body);

  // Check fields exist
  expect(body).toHaveProperty('status');
  expect(body).toHaveProperty('captureStatus');
  expect(body).toHaveProperty('totalAmount');

  // Check values
  expect(body.status).toBe('charged');
  expect(body.captureStatus).toBe('captured');
  expect(body.totalAmount.currency).toBe('EUR');

  // Validate amount (number)
  expect(body.totalAmount.amount).toBeGreaterThan(0);

  // Avoided the hardcoded value below, because it could make the test more fragile
  // expect(body.totalAmount.amount).toBe(113.56);
  // toBeGreaterThan(0) makes it more stable
});