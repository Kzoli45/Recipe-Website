import axios from "axios";

let countries = [];

export const getCountries = async () => {
    try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const data = response.data;
        countries = data.map((country) => ({
            name: country.name.common,
            flag: country.flag
        }));
    } catch (error) {
        console.error(error);
    }

    countries.sort((a, b) => a.name.localeCompare(b.name));

    return countries;
}


