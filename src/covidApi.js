export async function getTotalCases(params) {
  let response = await fetch(`https://corona.lmao.ninja/${params}`);
  let data = await response.json();
  return data;
}

export async function getAllCountries() {
  let response = await fetch(
    `https://corona.lmao.ninja/countries?sort=country`
  );
  let data = await response.json();
  return data;
}

export function numberwithcommas(num) {
  return num !== null
    ? num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    : num;
}
