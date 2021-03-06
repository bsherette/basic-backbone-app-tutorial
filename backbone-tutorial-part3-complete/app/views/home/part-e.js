'use strict';

/**
 * Home View - Part E
 * This part will entail dealing with Backbone Models.
 * File: app/views/home/part-e.js
 * Authors: Brandon Sherette
 * @class HomeViewPartD
 * @extends Backbone.View
 * @since 1.0.0
 */
define([
  'underscore',
  'jquery',
  'backbone',
  'models/product'
], function(_, $, Backbone, ProductModel){
  var HomeViewPartE = Backbone.View.extend({
    el: '#view-content',
    
    template: _.template($('#tplHomePartE').html()),
    
    model: null,
    
    initialize: function(){
      this.loadModel();
    },
    
    loadModel: function(){
      this.model = new ProductModel({
        name: 'Pencil',
        category: 'Office Supplies',
        description: 'A basic #2 Pencil, useful for writing notes.'
      });
      
      // since data is being set and not loaded via fetch, you can call render right away
      this.render();
    },
    
    render: function(){
      // apply the compiled html template to this view's jquery element
      this.$el.html(this.template({
        product: this.model.toJSON()
      }));
      
      // return this for chaining
      return this;
    }
  });
  
  // return the created view
  return HomeViewPartE;
});