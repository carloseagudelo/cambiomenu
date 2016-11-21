import React, { Component } from 'react';
import Reflux from 'reflux';
import MenuStore from '../stores/MenuStore.js';
import MenuAction from '../actions/MenuAction.js';

var App = React.createClass({

  mixins: [Reflux.connect(MenuStore, 'menustore')],

  render: function() {
    return (
      React.createElement('form', {MenuStoreclassName: 'form-group'},
        React.createElement("label", {className: "label"}, 'Identificacion de Usuario'),
        React.createElement('input', {
          type: 'number',
          className: 'form-control', 
           value:'readonly',    
          onChange: this.nameChange,
        }),

        React.createElement("label", {className: "label"}, 'Restaurante'),
        React.createElement('input', {
          type: 'text',
          value:'',
          className: 'form-control',       
          onChange: this.RestauranteChange,
        }),

        React.createElement("label", {className: "label"}, 'Codigo de la reserva'),
        React.createElement('input', {
          type: 'number',
          value:'readonly',
          className: 'form-control',      
          onChange: this.resChange,
        }),

        React.createElement("label", {className: "label"}, 'Pago Anterior de la reserva'),
        React.createElement("input",{
          type: 'number',
          value:'readonly',
          className:'form-control', 
          //onChange:this.PagoChange(),
        }),

        React.createElement("label", {className: "label"}, 'Menu del Restaurante'),
        React.createElement("select", {
          value:this.state.selected,
          className: 'form-control',
          onChange:this.MenuChange
        },
        //falta cuadrar el menu
          React.createElement("option", { value: 9 }, ""),
          React.createElement("option", { value: 1 }, "Lunes"),
          React.createElement("option", { value: 2 }, "Martes"),
          React.createElement("option", { value: 3 }, "Miercoles"),
          React.createElement("option", { value: 4 }, "Jueves"),
          React.createElement("option", { value: 5 }, "Viernes"),
          React.createElement("option", { value: 6 }, "Sabado"),
          React.createElement("option", { value: 7 }, "Domingo"),
        ),

        React.createElement("label", {className: "label"}, 'Costo del Nuevo Menu'),
        React.createElement("input", {
          className: 'form-control',
          onChange:this.CostoChange
        }),

         React.createElement("label", {className: "label"}, 'Saldo del Cliente'),
        React.createElement("input", {
          className: 'form-control',
          onChange:this.SaldoChange
        }),
      
        React.createElement('input', {
          type: 'submit',
          onClick: this.guardarClic,
          className: 'btn-primary',
        }),
      )
    )
  },
  
});

export default App;
