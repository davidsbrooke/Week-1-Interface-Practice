namespace app {
  let vehicles: IVehicle[] = [];
  vehicles.push(new models.Car("Mitsubishi", 'GTO', 'green', 2, 2));
  vehicles.push(new models.Car('lexus', 'LFA', 'white', 2, 2));
  vehicles.push(new models.Truck('Ferd', 'FTEEN Thousand','bluh', 4, 10));
  vehicles.push(new models.Truck('Chevy', 'Chase','greh', 1, 1));

displayVehicles();
  function displayVehicles() {
    let htmlString = '';
    vehicles.forEach((v) => {
      htmlString += `<tr>
        <td>${v.make}</td>
        <td>${v.model}</td>
        <td>${v.color}</td>
        <td>${v.numDoors}</td>
        <td>${v.numSeats}</td>
        <td>N/A</td>
        </tr>`
    });
  $('#vehicle-display').html(htmlString);

  }
  export function startVehicleCreate() {
    $('#create-header').html(`
      <span>Choose a vehicle type: </span>
      <select class="form-control" style="max-width: 10%; display:
      inline-block;" id="create-vehicle-type" onchange="app.chooseVehicleStyle()">
      <option selected>----</option>
      <option value="Car">Car</option>
      <option value ="Truck">Truck</option>
      </select>
      <span> or </span><a>cancel</a>

      `);

}
 export function chooseVehicleStyle(){
   // alert ("test!");
   let type = $('#create-vehicle-type').val();
   if (type ==='Car') {
     $('#create-header').html(`
       <div class="row">
            <div class="form-group">
              <label>Car Make</label>
              <input id="car-make-input" class="form-control" />
            </div>
            <div class="form-group">
              <label>Car Model</label>
              <input id="car-model-input" class="form-control" />
            </div>
            <div class="form-group">
              <label>Color</label>
              <input id="car-color-input" type="color" class="form-control" />
            </div>
          </div>
          <div class="row">
            <div class="form-group">
              <label>Number of Doors</label>
              <input id="car-numDoors-input" type="number" class="form-control" />
            </div>
            <div class="form-group">
              <label>Number of Seats</label>
              <input id="car-numSeats-input" type="number" class="form-control" />
            </div>
            <div class="form-group">
              <label>Is it Cool?</label>
              <select id="car-isCool-input" class="form-control">
                <option value="true" selected>Yes</option>
                <option value="false">No</option>
              </select>
            </div>
          </div>
          <div class="row">
            <button class="btn btn-success" onclick="app.createCar()">Submit</button>
          </div>`)

   } else if (type === 'Truck') {

   }
 }
 export function createCar(){
   let make = $('#car-make-input').val();
   let model = $('#car-model-input').val();
   let color = $('#car-color-input').val();
   let numDoors = $('#car-numDoors-input').val();
   let numSeats = $('#car-numSeats-input').val();
   let isCool = $('#car-isCool-input').val();

   let tempCar = new models.Car(make, model, color, numDoors, numSeats, isCool);
   vehicles.push(tempCar);
   displayVehicles();
   //input value types
  $('#car-make-input').val('');
  $('#car-model-input').val('');
  $('#car-color-input').val('');
  $('#car-numDoors-input').val('');
  $('#car-numSeats-input').val('');
  $('#car-isCool-input').val('');

 }
}
