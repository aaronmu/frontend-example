var React = require('react');

var Panel = React.createClass({
    propTypes: {
        title: React.PropTypes.string,
        body: React.PropTypes.element.isRequired
    },
    getDefaultProps: function() {
        return {title: ''};
    },
    render: function() {
        var Body = this.props.body;

        var Title;
        if (this.props.title !== '') {
            Title = (
                <div className="panel-heading">
                    <h4 className="panel-title">{this.props.title}</h4>
                </div>
            );
        } else {
            Title = <span />;
        }

        return (
            <div className="panel panel-default">
                {Title}
                {Body}
            </div>
        )
    }
});

module.exports = Panel;