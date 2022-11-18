export async function getBase64ImageUrl(url: string): Promise<string | undefined> {
  const response = await fetch(`${url}?tr=bl-20,w-100,f-webp`);
  const buffer = await response.arrayBuffer();
  const data = Buffer.from(buffer).toString('base64');
  return `data:image/webp;base64,${data}`;
}
