import { Country } from '../interfaces/Country.interface';

export const fetchCountries = async () => {
  const url = `https://countries.trevorblades.com/`;
  const query = `query {countries { name, code }}`;
  const res = await (
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        query,
      }),
    })
  ).json();

  return res.data.countries.map((data: Country) => ({ ...data }));
};