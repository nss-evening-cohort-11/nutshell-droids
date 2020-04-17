const buildAirport = (airport) => {
  let domString = '';
  domString += `
        <div class="fancy-card airport">
        <div class="additional">
          <div class="user-card">
            <img width="450" src="${airport.imgUrl}" alt="image of ${airport.airportName}">
          </div>
          <div class="more-info shading" >
            <h1 class="mb-3 mt-3 ml-3 mr-3" style="font-size:1.2rem">${airport.airportName}</h1>
            <div class="coords">
              <span class="float-left">Airport Code: ${airport.airportCode}</span>
              <span>${airport.city} ${airport.state}</span>
            </div>
            <div class="coords">
              <span class="float-left" >International Flights: ${airport.isInternational}</span>
              <span>${airport.country}</span>
            </div>
            <div class="stats">
              <div>
                <div class="title">Flights</div>
                <i class="fas fa-plane"></i>                  
                <div class="value">85</div>
              </div>
              <div>
                <div class="title">Restaurants</div>
                <i class="fas fa-utensils"></i>
                <div class="value">21</div>
              </div>
              <div>
                <div class="title">Shuttles</div>
                <i class="fas fa-shuttle-van"></i>
                <div class="value">4</div>                  
              </div>
              <div>
                <div class="title">Hotels</div>
                <i class="fas fa-hotel"></i>
                <div class="value">3</div>
              </div>
            </div>
          </div>
        </div>
        <div class="general hubGeneral">
        <h1 class="mb-3 mt-3" style="font-size:1.2rem">${airport.airportName}</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.</p>
          <span class="more">Mouse over the card for more info</span>
        </div>
      </div>`;
  return domString;
};

export default { buildAirport };
