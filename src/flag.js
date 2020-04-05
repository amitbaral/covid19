import { getAllCountries } from './covidApi';


export class Countries {

    constructor() {
        this.countries = []
    }

    getCountry() {
        getAllCountries().then((data) => {
            this.countries.push(data);
        });
    }

    displayCountry() {
        console.log(this.countries);
    }


}



// //Get Countries
// getAllCountries().then((data) => {
//     listCountries(data);
// });

// // List  Countries
// const listCountries = (data) => {
//     console.log(data)

// }