export const REDIRECT_URL = process.env.FRONTEND_URL ? `${process.env.FRONTEND_URL}/payment` : "http://localhost:3000/payment";
export const FRONTEND_URL = process.env.FRONTEND_URL ?? "http://localhost:3000";

export const INTASEND_PUBLISHABLE_KEY = process.env.INTASEND_PUBLISHABLE_KEY ?? "";
export const INTASEND_SECRET_KEY = process.env.INTASEND_SECRET_KEY ?? "";
export const INTASEND_IS_TEST = process.env.INTASEND_IS_TEST ? true : false;
