var React = require('react');
var Takenlijst = require('./Taak/Takenlijst');
var TaakForm = require('./TaakForm/TaakForm');
var TaakStore = require('./Taak/TaakStore');
var GevarenVoorTaak = require('./Gevaar/Gevaren');
var GevaarStore = require('./Gevaar/GevaarStore');

require('./../css/list-group.less');

var Functieanalyse = React.createClass({
    getInitialState: function() {
        return {
            taken: TaakStore.all(),
            selectedTaak: TaakStore.selected(),
            gevaren: GevaarStore.all(),
            selectedGevaar: GevaarStore.selected()
        };
    },
    componentDidMount: function() {
        TaakStore.on('TAAK_WAS_SELECTED', this.onTaakWasSelected);
        GevaarStore.on('GEVAAR_WAS_SELECTED', this.onGevaarWasSelected);
    },
    componentWillUnmount: function() {
        TaakStore.removeListener('TAAK_WAS_SELECTED', this.onTaakWasSelected);
        GevaarStore.removeListener('GEVAAR_WAS_SELECTED', this.onGevaarWasSelected);

    },
    render: function() {
        var gevarenVoorTaak;

        if (this.state.selectedTaak) {
            gevarenVoorTaak = <GevarenVoorTaak taak={this.state.selectedTaak} gevaren={this.state.gevaren} selected={this.state.selectedGevaar} />;
        } else {
            gevarenVoorTaak = <span />;
        }

        return (
            <div className="row">
                <div className="col-md-4">
                    <Takenlijst taken={this.state.taken} selected={this.state.selectedTaak} />
                </div>
                <div className="col-md-4">
                    {gevarenVoorTaak}
                </div>
                <div className="col-md-4">
                </div>
            </div>
        );
    },
    onTaakWasSelected: function() {
        this.setState({selectedTaak: TaakStore.selected()});
    },
    onGevaarWasSelected: function() {
        this.setState({selectedGevaar: GevaarStore.selected()});
    }
});

React.render(
    <Functieanalyse />,
    document.getElementById('main')
);