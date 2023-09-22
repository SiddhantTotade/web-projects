export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "fd4df3aaf5msh2fedeb1f1a2340fp1d4a69jsndcc77bdba5d1",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    { headers: headers }
  );

  const result = await response.json();

  return result;
}
