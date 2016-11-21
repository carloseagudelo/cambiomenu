import Reflux from 'reflux';
import $ from 'jquery';
import MenuActions from '../actions/MenuAction';

var MenuStore = Reflux.createStore({

	listenables: [MenuActions],

	cambioMenu: function(){

	}, 

	obtenerMenuUsuario: function(){

	}, 

	menuReserva: function(){

	}, 

	platosRestaurante: function(){

	},

	obtenerPlato: function(){
		
	}

});

export default MenuStore;