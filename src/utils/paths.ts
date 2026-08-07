/** Applies the configured `base` path to internal URLs. */
export function withBase(path: string): string {
  const base = (import.meta as any).env?.BASE_URL ?? '/';
  return `${base}${path}`.replace(/\/+/g, '/');
}
