import airportComponent from './airportComponent';
import airportData from '../../helpers/data/hubData';
import utils from '../../helpers/utils';

const removeAirport = (e) => {
  const selectedAirportId = e.target.closest('.fancy-card').id;
  airportData.deleteAirport(selectedAirportId)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      printAirports();
    })
    .catch((err) => console.error('cannot remove airport', err));
};

const printAirports = () => {
  airportData.getAllAirports()
    .then((airports) => {
      let domString = '';
      domString += `
      <div class="accordion" id="accordionExample">
      <h2>
        <button class="btn" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <i class="fas fa-2x fa-plus-circle"></i></button>
      </h2>
      </div>
        <div id="collapseOne" class="collapse m-2" aria-labelledby="headingOne" data-parent="#accordionExample">
          <div class= "text-left row d-flex flex-wrap">
          <form class="m-auto">
            <div class="form-row">
              <div class="col-md-4 mb-3">
                <label for="validationDefault01">First name</label>
                <input type="text" class="form-control" id="validationDefault01" placeholder="First name" value="Mark" required>
              </div>
              <div class="col-md-4 mb-3">
                <label for="validationDefault02">Last name</label>
                <input type="text" class="form-control" id="validationDefault02" placeholder="Last name" value="Otto" required>
              </div>
              <div class="col-md-4 mb-3">
                <label for="validationDefaultUsername">Username</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroupPrepend2">@</span>
                  </div>
                  <input type="text" class="form-control" id="validationDefaultUsername" placeholder="Username" aria-describedby="inputGroupPrepend2" required>
                </div>
              </div>
            </div>
            <div class="form-row">
              <div class="col-md-6 mb-3">
                <label for="validationDefault03">City</label>
                <input type="text" class="form-control" id="validationDefault03" placeholder="City" required>
              </div>
              <div class="col-md-3 mb-3">
                <label for="validationDefault04">State</label>
                <input type="text" class="form-control" id="validationDefault04" placeholder="State" required>
              </div>
              <div class="col-md-3 mb-3">
                <label for="validationDefault05">Zip</label>
                <input type="text" class="form-control" id="validationDefault05" placeholder="Zip" required>
              </div>
            </div>
            <div class="form-group">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required>
                <label class="form-check-label" for="invalidCheck2">
                  Agree to terms and conditions
                </label>
              </div>
            </div>
            <button class="btn btn-primary" type="submit">Submit form</button>
          </form>
        </div>
        </div>

      `;
      domString += '<div class="d-flex flex-wrap justify-content-center">';
      airports.forEach((airport) => {
        domString += airportComponent.buildAirport(airport);
      });
      utils.printToDom('hub', domString);
    })
    .catch((err) => console.error('cannot print airports', err));
};

const clickEvent = () => {
  $('body').on('click', '.delete-airport', removeAirport);
};

export default { printAirports, clickEvent };
