export const sortLinks = (data: any, key: string) =>
  [...data].sort((a, b) => a.indexs[key] - b.indexs[key]);
