var React = require('react/addons');
var _ = require('underscore');
var Actions = require('./TaakActions');
var Panel = require('./../Core/Panel');

var PureRenderMixin = React.addons.PureRenderMixin;

var Taak = React.createClass({
    mixins: [PureRenderMixin],
    render: function() {
        var cx = React.addons.classSet;
        var classes = cx({
            'list-group-item': true,
            'active': this.props.selected
        });

        return (
            <div className={classes} onClick={Actions.select.bind(null, this.props.id)}>
                <span>{this.props.beschrijving}</span>
            </div>
        );
    }
});

var Takenlijst = React.createClass({
    mixins: [PureRenderMixin],
    render: function() {
        var taken = _.map(this.props.taken, function(taak) {
            return <Taak key={taak.id} id={taak.id} beschrijving={taak.beschrijving} selected={taak === this.props.selected} />;
        }.bind(this));

        taken = (
            <div className="list-group">
                {taken}
            </div>
        );

        return <Panel title="Takenpakket" body={taken} />;
    }
});

module.exports = Takenlijst;