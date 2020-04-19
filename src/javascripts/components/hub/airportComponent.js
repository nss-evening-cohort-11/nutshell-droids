const buildAirport = (airport) => {
  const answer = airport.isInternational ? 'Yes' : 'No';
  let domString = '';
  domString += `
        <div id="${airport.id}" class="fancy-card airport show-delete-button">
        <div class="additional">
          <div class="user-card">
<<<<<<< HEAD
            <img height="340px" src="${airport.imgUrl}" alt="image of ${airport.city}">
=======
            <img height="340px" class="card-image" src="${airport.imgUrl}" alt="image of ${airport.city}">
>>>>>>> 627a8f2c03ee43bb5b5d5b9b0ae2ecba0dd38727
            <i class="delete-airport delete-btn far fa-2x fa-times-circle"></i>
          </div>
          <div class="more-info shading">
            <div class="card-title mb-1 mt-3 ml-3 mr-3">${airport.airportName}</div>
<<<<<<< HEAD
            <div class="coords">
              <span class="float-left">Airport Code: ${airport.airportCode}</span>
              <span>${airport.city} ${airport.state}</span>
            </div>
            <div class="coords">
              <span class="float-left" >International Flights: ${answer}</span>
              <span>${airport.country}</span>
            </div>
            <div class="stats">
              <div>
                <i class="fas fa-plane"></i>                  
                <div class="value">${airport.numFlights}</div>
=======
              <div class="coords">
                <span class="float-left">Airport Code: ${airport.airportCode}</span>
                <span>${airport.city} ${airport.state}</span>
>>>>>>> 627a8f2c03ee43bb5b5d5b9b0ae2ecba0dd38727
              </div>
              <div class="coords">
                <span class="float-left" >International Flights: ${answer}</span>
                <span>${airport.country}</span>
              </div>
              <div class="stats">
                <div>
                  <i class="fas fa-plane"></i>                  
                  <div class="value">${airport.numFlights}</div>
                </div>
                <div>
                  <i class="fas fa-utensils"></i>
                  <div class="value">${airport.numRestaurants}</div>
                </div>
                <div>
                  <i class="fas fa-shuttle-van"></i>
                  <div class="value">${airport.numShuttles}</div>                  
                </div>
                <div
                  <i class="fas fa-hotel"></i>
                  <div class="value">${airport.numHotels}</div>
                </div>
              </div>
            </div>
          </div>
<<<<<<< HEAD
        </div>
        <div class="general hubGeneral">
            <div class="card-title mb-1 mt-3">${airport.airportName}</div>
              <p>${airport.description}</p>
              <span class="more">Mouse over the card for more info</span>
            </div>
          </div>
        `;
=======
          <div class="general hubGeneral">
            <div class="card-title mb-1 mt-3">${airport.airportName}</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.</p>
              <span class="more">Mouse over the card for more info</span>
            </div>
          </div>`;
>>>>>>> 627a8f2c03ee43bb5b5d5b9b0ae2ecba0dd38727
  return domString;
};

export default { buildAirport };
