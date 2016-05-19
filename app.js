var app;
(function (app) {
    var vehicles = [];
    vehicles.push(new app.models.Car("Mitsubishi", 'GTO', 'green', 2, 2));
    vehicles.push(new app.models.Car('lexus', 'LFA', 'white', 2, 2));
    vehicles.push(new app.models.Truck('Ferd', 'FTEEN Thousand', 'bluh', 4, 10));
    vehicles.push(new app.models.Truck('Chevy', 'Chase', 'greh', 1, 1));
    displayVehicles();
    function displayVehicles() {
        var htmlString = '';
        vehicles.forEach(function (v) {
            htmlString += "<tr>\n        <td>" + v.make + "</td>\n        <td>" + v.model + "</td>\n        <td>" + v.color + "</td>\n        <td>" + v.numDoors + "</td>\n        <td>" + v.numSeats + "</td>\n        <td>N/A</td>\n        </tr>";
        });
        $('#vehicle-display').html(htmlString);
    }
    function startVehicleCreate() {
        $('#create-header').html("\n      <span>Choose a vehicle type: </span>\n      <select class=\"form-control\" style=\"max-width: 10%; display:\n      inline-block;\" id=\"create-vehicle-type\" onchange=\"app.chooseVehicleStyle()\">\n      <option selected>----</option>\n      <option value=\"Car\">Car</option>\n      <option value =\"Truck\">Truck</option>\n      </select>\n      <span> or </span><a>cancel</a>\n\n      ");
    }
    app.startVehicleCreate = startVehicleCreate;
    function chooseVehicleStyle() {
        var type = $('#create-vehicle-type').val();
        if (type === 'Car') {
            $('#create-header').html("\n       <div class=\"row\">\n            <div class=\"form-group\">\n              <label>Car Make</label>\n              <input id=\"car-make-input\" class=\"form-control\" />\n            </div>\n            <div class=\"form-group\">\n              <label>Car Model</label>\n              <input id=\"car-model-input\" class=\"form-control\" />\n            </div>\n            <div class=\"form-group\">\n              <label>Color</label>\n              <input id=\"car-color-input\" type=\"color\" class=\"form-control\" />\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label>Number of Doors</label>\n              <input id=\"car-numDoors-input\" type=\"number\" class=\"form-control\" />\n            </div>\n            <div class=\"form-group\">\n              <label>Number of Seats</label>\n              <input id=\"car-numSeats-input\" type=\"number\" class=\"form-control\" />\n            </div>\n            <div class=\"form-group\">\n              <label>Is it Cool?</label>\n              <select id=\"car-isCool-input\" class=\"form-control\">\n                <option value=\"true\" selected>Yes</option>\n                <option value=\"false\">No</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <button class=\"btn btn-success\" onclick=\"app.createCar()\">Submit</button>\n          </div>");
        }
        else if (type === 'Truck') {
        }
    }
    app.chooseVehicleStyle = chooseVehicleStyle;
    function createCar() {
        var make = $('#car-make-input').val();
        var model = $('#car-model-input').val();
        var color = $('#car-color-input').val();
        var numDoors = $('#car-numDoors-input').val();
        var numSeats = $('#car-numSeats-input').val();
        var isCool = $('#car-isCool-input').val();
        var tempCar = new app.models.Car(make, model, color, numDoors, numSeats, isCool);
        vehicles.push(tempCar);
        displayVehicles();
        $('#car-make-input').val('');
        $('#car-model-input').val('');
        $('#car-color-input').val('');
        $('#car-numDoors-input').val('');
        $('#car-numSeats-input').val('');
        $('#car-isCool-input').val('');
    }
    app.createCar = createCar;
})(app || (app = {}));
