export const url = (path: string): string => {
  if (!path) return path;
  if (/^([a-z]+:|#|\/\/)/i.test(path)) return path;
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  return base + (path.startsWith('/') ? path : '/' + path);
};
