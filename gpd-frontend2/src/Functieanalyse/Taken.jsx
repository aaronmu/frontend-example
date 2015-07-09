var React = require('react');
var _ = require('underscore');
var Panel = require('./../Bootstrap/Panel');

var Taak = React.createClass({
    render: function() {
        return (
            <div className="list-group-item">
                <span>{this.props.taak.beschrijving}</span>
            </div>
        );
    }
});

var Taken = React.createClass({
    render: function() {
        var taken = _.map(this.props.taken, function(taak) {
            return <Taak key={taak.id} taak={taak} />
        });

        return (
            <Panel title="Taken">
                <div className="list-group">
                    {taken}
                </div>
            </Panel>
        )
    }
});

module.exports = Taken;