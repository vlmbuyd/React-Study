export async function getReviews() {
  const response = await fetch("https://learn.codeit.kr/3481/foods/");
  const body = await response.json();
  return body;
}
