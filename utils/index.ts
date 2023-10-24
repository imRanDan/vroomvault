import { CarProps } from '@/types'

export async function fetchCars() {
  const headers = {
      'X-RapidAPI-Key': '88fa1e43f5msh278f8c8840e4b8ep184f7fjsnba7af822ef48',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }

  const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera', {
    headers: headers,
  });

  const result = await response.json();

  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // base price per day in dollars 
  const mileageFactor = 0.1; // additional rate per mile driven
  const ageFactor = 0.05; //additional rate per year of vehicle age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0); 
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL('https://cdn.imagin.studio/getimage')
}