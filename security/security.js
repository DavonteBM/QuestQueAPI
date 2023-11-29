import rateLimit from "express-rate-limit";

export const limiter = rateLimit({
  windowMs: 60 * 1000, // 15 minutes
  limit: 5,
  message:
    "You have exceeded your 5 requests per minute limit. Please wait 1 minute",
  headers: true,
});
