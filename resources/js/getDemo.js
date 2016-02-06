
//Ejemplo de llamada a servicio rest (get) desde jQuery, para el cual se utilizo el servicio de ubicacion geografica de Google.
function getData() {
	var latdegrees = -33.443670;
	var londegrees = -70.649330;
	var url = "https://maps.googleapis.com/maps/api/geocode/json?latlng="
			+ latdegrees + "," + londegrees + "&language=es";
	$.getJSON(url, function(data, textStatus) {
		//Obtenemos JSON con la informacion sobre la ubicacion, del mismo utilizamos los datos de numeracion, calle y localidad.
		var streetaddress = data.results[0].formatted_address;
		console.info(streetaddress)
		$("#ubicacion").text(streetaddress);
	});
};
getData();