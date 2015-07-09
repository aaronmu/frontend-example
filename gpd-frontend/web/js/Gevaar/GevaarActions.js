var AppDispatcher = require('./../AppDispatcher');

var Actions = {
    select: function(gevaarId) {
        AppDispatcher.dispatch({
            type: "GEVAAR_SELECT",
            gevaarId: gevaarId
        });
    }
};

module.exports = Actions;