const buildAirport = (airport) => {
  const answer = airport.isInternational ? 'Yes' : 'No';
  let domString = '';
  domString += `
        <div id="${airport.id}" class="fancy-card airport show-delete-button">
        <div class="additional">
          <div class="user-card">
            <img height="340px" class="card-image" src="${airport.imgUrl}" alt="image of ${airport.city}">
            <i id="auth-airport" class="delete-airport delete-btn far fa-2x fa-times-circle"></i>
            <i id="auth-edit" class="edit-button edit-btn fas fa-edit fa-2x"></i>
          </div>
          <div class="more-info shading">
            <div class="card-title mb-1 mt-3 ml-3 mr-3">${airport.airportName}</div>
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
          <div class="general hubGeneral">
            <div class="card-title mb-1 mt-3">${airport.airportName}</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.</p>
              <span class="more">Mouse over the card for more info</span>
            </div>
          </div>         
`;
  return domString;
};

export default { buildAirport };
