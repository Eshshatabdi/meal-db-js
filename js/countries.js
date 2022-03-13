const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}


loadCountries();



const displayCountries = (countries) => {

    console.log(countries)

    const countryDiv = document.getElementById('country')
    countries.forEach(country => {
        // console.log(country)
        const div = document.createElement('div')
        div.classList.add('countries')
        div.innerHTML = `
        <h3>${country.name.common}</h3>
        <p>${country.capital}</p>
        <button onclick="loadCountryByName('${country.name.common}')">Details</button>  `




        countryDiv.appendChild(div);

    });
}

const loadCountryByName = name => {
    console.log(name)
    const url = `https://restcountries.com/v3.1/name/${name}`
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]))

}


const displayCountryDetail = country => {
    const countryDiv = document.createElement('country-detail')
    countryDiv.innerHTML = `
    <h5> ${country.name}</h5>
    <p>${country.popuation}</p>
    <img width="200px" src="${country.flag}">`
}