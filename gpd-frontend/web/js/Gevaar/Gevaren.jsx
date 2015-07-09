var React = require('react/addons');
var _ = require('underscore');
var Panel = require('./../Core/Panel');
var Actions = require('./GevaarActions');
var Gevaar = require('./../Analyse/Scenarios');

var PureRenderMixin = React.addons.PureRenderMixin;

var GevarenVoorTaak = React.createClass({
    mixins: [PureRenderMixin],
    render: function() {
        var gevaren = _.chain(this.props.gevaren)
            .where({taakId: this.props.taak.id})
            .map(function(gevaar) {
                var cx = React.addons.classSet;
                var classes = cx({
                    'list-group-item': true,
                    'active': (this.props.selected === gevaar)
                });

                return (
                    <div key={_.uniqueId()} className={classes} onClick={Actions.select.bind(null, gevaar.id)}>
                        <span>{gevaar.beschrijving}</span>
                    </div>
                );

            }.bind(this))
            .value();

        var scenarios = _.map(this.props.gevaren, function(gevaar) {
            var Scenarios;
            if (this.props.selected === gevaar) {
                Scenarios = <Gevaar key={_.uniqueId()} scenarios={gevaar.scenarios} />;
            } else {
                Scenarios = <span key={_.uniqueId()} />;
            }

            return Scenarios;
        }.bind(this));

        var merge = _.compose(_.flatten, _.zip);

        var items = <div className="list-group">{merge(gevaren, scenarios)}</div>;

        return <Panel title={this.props.taak.beschrijving} body={items} />
    }
});

module.exports = GevarenVoorTaak;