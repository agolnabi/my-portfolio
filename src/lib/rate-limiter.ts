type Entry = { count: number; resetTime: number };

export function createRateLimiter(maxRequests: number, windowMs: number) {
  const store = new Map<string, Entry>();

  return function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
    const now = Date.now();

    for (const [key, entry] of store) {
      if (now > entry.resetTime) store.delete(key);
    }

    const entry = store.get(ip);

    if (!entry || now > entry.resetTime) {
      store.set(ip, { count: 1, resetTime: now + windowMs });
      return { allowed: true, remaining: maxRequests - 1 };
    }

    if (entry.count >= maxRequests) {
      return { allowed: false, remaining: 0 };
    }

    entry.count += 1;
    return { allowed: true, remaining: maxRequests - entry.count };
  };
}

// Default limiter used by /api/chat (20 req / 60s)
export const checkRateLimit = createRateLimiter(20, 60_000);
