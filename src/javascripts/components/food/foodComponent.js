const buildMenu = (foodNow) => {
  const answer = foodNow.isComplementary ? 'Yes' : 'No';
  const free = foodNow.isComplementary ? '' : `<i class="fas fa-dollar-sign fa-3"></i>${foodNow.price}`;
  let domString = '';
  domString += `
  <div id=${foodNow.id} class="fancy-card food">
  <div class="additional">
    <div class="user-card">
      <img width="450px" src="${foodNow.imageUrl}" alt="image of ${foodNow.name}">
    </div>
    <div class="more-info shading">
      <div class="card-title mb-1 mt-3 ml-3 mr-3 foodBold2">${foodNow.name}</div>
        <div class="coords foodBold">
          <span> Type: ${foodNow.type}</span>
        </div>
        <div class="coords foodBold">
          <span> Complimentary: ${answer} </span>
        </div>
        <div class="coords foodBold">
          ${free}
      </div>
    </div>
  </div>
  <div class="general hubGeneral">
    <div class="card-title mb-1 mt-3 foodBold2">${foodNow.name}</div>
    <span class="more">Mouse over the card for more info</span>
  </div>
</div>
  `;
  return domString;
};

export default { buildMenu };
