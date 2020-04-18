const buildCrew = (crew) => {
  let domString = '';
  domString += `
      <div class="fancy-card crew">
        <div class="additional">
          <div class="user-card">
            <img class="center" height="250px" src="${crew.img}" alt="image of ${crew.name}">
          </div>
          <div class="more-info shading" >
            <div class="card-title mb-1 mt-3 ml-3 mr-3">${crew.name}</div>
            <div class=" mt-4 ml-5">
              <div class="mt-2 text-white">
                <i class="fas fa-home"></i>
                <span>${crew.baseCity}</span>
              </div>
              <div class="mt-2 text-white">
                <i class="fas fa-cogs"></i> 
                <span>${crew.position}</span>
              </div>
              <div class="mt-2 text-white">
                <i class="fas fa-user-plus"></i>
                <span>${crew.hireDate}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="general hubGeneral">
          <div class="card-title mb-1 mt-3">${crew.name}</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.</p>
          <span class="more">Mouse over the card for more info</span>
        </div>
      </div>`;
  return domString;
};
export default { buildCrew };
