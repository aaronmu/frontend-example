var assign = require('object-assign');
var AppDispatcher = require('./../AppDispatcher');
var _ = require('underscore');
var EventEmitter = require('events').EventEmitter;

var taken = [
    {
        id: 1,
        beschrijving: "Bad geven, wassen van residenten (op bed, in eigen badkamer)"
    },
    {
        id: 2,
        beschrijving: "Residenten naar/op/van toilet"
    },
    {
        id: 3,
        beschrijving: "Vervangen incontinentiemateriaal"
    },
    {
        id: 4,
        beschrijving: "Scheren van residenten, medicatiebedeling"
    },
    {
        id: 5,
        beschrijving: "Reinigen van bedpannen + vervangen van product in bedpanspoeler"
    },
    {
        id: 6,
        beschrijving: "Reinigen/desinfecteren van baden"
    },
    {
        id: 7,
        beschrijving: "Rijden met karren (afval + handdoeken en pampers)"
    },
    {
        id: 8,
        beschrijving: "Verplaatsen van residenten (rolstoel, tilliften, ..)"
    },
];

var selectedTaak = null;

var TaakStore = assign({}, EventEmitter.prototype, {
    all: function() {
        return taken;
    },
    selected: function() {
        return (selectedTaak === null)
            ? undefined
            : _.findWhere(taken, {id: selectedTaak});
    }
});

AppDispatcher.register(function(action) {
    switch(action.type) {
        case "TAAK_SELECT":
            selectedTaak = action.taakId;
            TaakStore.emit("TAAK_WAS_SELECTED");
            break;
        default:
        // nothing!
    }
});

module.exports = TaakStore;