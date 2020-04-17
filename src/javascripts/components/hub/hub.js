import airportData from '../../helpers/data/hubData';


const printAirports = () => {
  airportData.getAllAirports()
    .then((airports) => {
      let domString = '';
      domString += `
      <div class="card" id="dash-card-food">
        <div class="card-header">Featured
        </div>
        <img class="card-img-top" src="..." alt="Card image cap">
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>`;
    });

};


export default { printAirports };
