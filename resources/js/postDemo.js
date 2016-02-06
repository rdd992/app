
//Ejemplo de llamada a servicio rest (POST) desde jQuery, para el cual se utilizo el servicio de ejemplo: "JSONPlaceholder 
//(Fake Online REST API for Testing and Prototyping)". EL mismo devuelve un id mas el mismo json que se envio.

function postData() {
	
	//Datos a enviar, (JSON)
	var postDataJson = {var1:"var1Value", var2:"var2Value"  };
	
	$.post("http://jsonplaceholder.typicode.com/posts", postDataJson)
	.done(function(data){
		//data es el valor retornado (JSON)
		alert("Resultado del servicio Post: " + data.id);
	})
	.success(function(data){
		//data es el valor retornado (JSON)
		console.log(JSON.stringify(data, null, 2));
	});
}