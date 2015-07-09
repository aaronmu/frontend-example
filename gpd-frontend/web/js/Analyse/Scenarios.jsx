var React = require('react/addons');
var _ = require('underscore');
var Panel = require('./../Core/Panel');

var Preventiemaatregelen = React.createClass({
    mixins: [React.addons.PureRenderMixin],
    render: function() {
        var preventiemaatregelen = _.map(this.props.preventiemaatregelen, function(preventiemaatregel) {
            return <li key={preventiemaatregel.id}>{preventiemaatregel.naam}</li>
        });

        return <ul>{preventiemaatregelen}</ul>;
    }
});

var Scenario = React.createClass({
    mixins: [React.addons.PureRenderMixin],
    render: function() {
        return (
            <div>
                <h5>{this.props.scenario.beschrijving}</h5>
                <p>{this.props.scenario.specificatie}</p>
                <Preventiemaatregelen preventiemaatregelen={this.props.scenario.preventiemaatregelen} />
            </div>
        );
    }
});

var Gevaar = React.createClass({
    mixins: [React.addons.PureRenderMixin],
    render: function() {
        var scenarios = _.map(this.props.scenarios, function(scenario) {
            return <Scenario key={scenario.id} scenario={scenario} />
        });

        return <div className="list-group-item">{scenarios}</div>;
    }
});

module.exports = Gevaar;