import Reflux from 'reflux';
import $ from 'jquery';
import MenuActions from '../actions/MenuAction';

var MenuStore = Reflux.createStore({

	listenables: [MenuActions],

	cambioMenu: function(){

	}
});

export default MenuStore;