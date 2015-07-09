var AppDispatcher = require('./../AppDispatcher');

var Actions = {
    select: function(taakId) {
        AppDispatcher.dispatch({
            type: "TAAK_SELECT",
            taakId: taakId
        });
    },
    add: function(id, beschrijving) {
        AppDispatcher.dispatch({
            type: "TAAK_ADD",
            id: id,
            beschrijving: beschrijving
        });
    }
};

module.exports = Actions;