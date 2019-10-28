"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Workshop extends Model {
  users() {
    return this.belongsToMany("App/Models/User").pivotTable("users_workshops");
  }
}

module.exports = Workshop;
