var React = require('react');
var Taken = require('./Taken');

var Functieanalyse = React.createClass({
    getInitialState: function() {
        return {
            taken: [
                {
                    id: 1,
                    beschrijving: "Bad geven, wassen van residenten (op bed, in eigen badkamer)",
                    gevaren: [
                        {
                            id: 1,
                            beschrijving: "Val van begane grond"
                        },
                        {
                            id: 2,
                            beschrijving: "Chemische hinder door spatten"
                        }
                    ]
                },
                {
                    id: 2,
                    beschrijving: "Residenten naar/op/van toilet",
                    gevaren: [
                        {
                            id: 3,
                            beschrijving: "Biologische agentia"
                        },
                        {
                            id: 4,
                            beschrijving: "Snijwonden"
                        }
                    ]
                },
                {
                    id: 3,
                    beschrijving: "Scheren van residenten",
                    gevaren: [
                        {
                            id: 5,
                            beschrijving: "Heffen en tillen"
                        }
                    ]
                }
            ]
        };
    },
    render: function() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <Taken taken={this.state.taken}/>
                </div>
                <div className="col-md-4">
                </div>
            </div>
        );
    }
});

module.exports = Functieanalyse;