var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
var AppDispatcher = require('./../AppDispatcher');
var _ = require('underscore');

var gevaren = [
    {
        id: 1,
        taakId: 1,
        beschrijving: "Val van begane grond",
        scenarios: [
            {
                id: 1,
                beschrijving: "Scenario 1",
                specificatie: "Verdere specificatie...",
                preventiemaatregelen: []
            },
            {
                id: 2,
                beschrijving: "Scenario 2",
                specificatie: "Verdere specificatie...",
                preventiemaatregelen: [
                    { naam: "one" },
                    { naam: "two" },
                    { naam: "three" }
                ]
            },
            {
                id: 3,
                beschrijving: "Scenario 3",
                specificatie: "Verdere specificatie...",
                preventiemaatregelen: [
                    { naam: "foo" },
                    { naam: "bar" },
                    { naam: "baz" }
                ]
            },
            {
                id: 4,
                beschrijving: "Scenario 4",
                specificatie: "Verdere specificatie...",
                preventiemaatregelen: []
            }
        ]
    },
    {
        id: 2,
        taakId: 1,
        beschrijving: "Chemische hinder door spatten",
        scenarios: [

        ]
    },
    {
        id: 3,
        taakId: 1,
        beschrijving: "Biologische agentia",
        scenarios: [

        ]
    },
    {
        id: 4,
        taakId: 1,
        beschrijving: "Snijwonden",
        scenarios: [

        ]
    },
    {
        id: 5,
        taakId: 1,
        beschrijving: "Heffen en tillen",
        scenarios: [

        ]
    },
];

var selectedGevaar = null;

var GevaarStore = assign({}, EventEmitter.prototype, {
    all: function() { return gevaren; },
    selected: function() {
        return (selectedGevaar === null)
            ? undefined
            : _.findWhere(gevaren, {id: selectedGevaar});
    }
});

AppDispatcher.register(function(action) {
    switch(action.type) {
        case "GEVAAR_SELECT":
            selectedGevaar = action.gevaarId;
            GevaarStore.emit("GEVAAR_WAS_SELECTED");
            break;
        default:
        // nothing!
    }
});

module.exports = GevaarStore;