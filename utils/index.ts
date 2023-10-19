export async function fetchCars() {
  const headers = {
      'X-RapidAPI-Key': '88fa1e43f5msh278f8c8840e4b8ep184f7fjsnba7af822ef48',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }

  const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
    headers: headers,
  });

  const result = await response.json();

  return result;
}