import Reflux from 'reflux';

let MenuAction = Reflux.createActions([
	'cambioMenu', // Realiza el cambio de menu
	'obtenerMenuUsuario', // Obtiene el menu registrado por usuario
	'menuReserva', // Obtiene el menu solicitado en una reserva
	'platosRestaurante', // Obtiene todos los platos que ofrece un restaurante
	'obtenerPlato' // Obtiene la informacion de un plato
]);

export default MenuAction;