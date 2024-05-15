export async function getFoods({ order = "", cursor = "", limit = 5 }) {
  const query = `order=${order}&nextCursor=${cursor}&limit=${limit}`;
  const response = await fetch(`https://learn.codeit.kr/3487/foods?${query}`);
  const body = await response.json();
  return body;
}
