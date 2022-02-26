const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(response => response.json())
    .then(data => displayCountries(data))
}

loadCountries();

const displayCountries = (countries) => {
    console.log(countries);
    const countryContainer = document.getElementById('country-container');
    countries.forEach(country => {
        console.log(country);
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML = `
        <h3>${country.name}</h3>
        <p>${country.capital}</p>
        <button onclick="loadCountryByName('${country.name}')">Details</button>
        `
        // const h3 = document.createElement('h3');
        // h3.innerText = country.name;
        // div.appendChild(h3);
        // const p = document.createElement('p');
        // p.innerText = country.capital;
        // div.appendChild(p);
        countryContainer.appendChild(div);
    })

}

const loadCountryByName = (name) => {
    console.log(name);
    const url = `https://restcountries.com/v2/name/${name}`
    fetch(url)
        .then((response) => response.json())
        .then(data => displayCountryDetails(data[0]))
    
}

const displayCountryDetails = (country) => {
    console.log(country);
    const countryDetails = document.getElementById('country-details');
    const div = document.createElement('div');

    countryDetails.innerHTML = `
    <img width="200px" src="${country.flag}">
    <h5>${country.name}</h4>
    <p>${country.population}</p>
    `
    countryDetails.appendChild(div)
}