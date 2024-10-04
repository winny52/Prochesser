export const REDIRECT_URL = process.env.FRONTEND_URL ? `${process.env.FRONTEND_URL}/payment` : "http://localhost:3000/payment";
export const FRONTEND_URL = process.env.FRONTEND_URL ?? "http://localhost:3000";

export const INTASEND_PUBLISHABLE_KEY = process.env.INTASEND_PUBLISHABLE_KEY ?? "";
export const INTASEND_SECRET_KEY = process.env.INTASEND_SECRET_KEY ?? "";
export const INTASEND_IS_TEST = process.env.INTASEND_IS_TEST ? true : false;
export const CURRENCY_RATE_URL = "https://open.er-api.com/v6/latest"
export const BCRYPT_SECRET_KEY = process.env.BCRYPT_SECRET_KEY ?? "fsudckkncsdkjbvkjbkjsdbvjsdnvjsndjvn483984378hfewuibf2fjBHIYLDUCVHADJSKBHAGFLASHFKJHKKKKKKKKKKKdbhvsdigskdkvjsdkjvbisdvhhh"
export const NODE_ENV = "development"

export const CRYPTO_DEPOSIT_PERCENT = process.env.CRYPTO_DEPOSIT_PERCENT ? Number(process.env.CRYPTO_DEPOSIT_PERCENT) : 0.035;
export const CRYPTO_MERCHANT_ID = process.env.CRYPTO_MERCHANT_ID ?? ""
export const CRYPTO_PAYMENT_API_KEY = process.env.CRYPTO_PAYMENT_API_KEY ?? ""
export const CRYPTO_PAYOUT_API_KEY = process.env.CRYPTO_PAYOUT_API_KEY ?? ""
export const CRYTPOMUS_URI = process.env.CRYTPOMUS_URI ?? "https://api.cryptomus.com/v1"

export const BINANCE_SECRET_KEY = process.env.BINANCE_SECRET_KEY ?? "";
export const BINANCE_API_KEY = process.env.BINANCE_API_KEY ?? ""
