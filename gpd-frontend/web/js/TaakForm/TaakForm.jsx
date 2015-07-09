var React = require('react');

var Label = React.createClass({
   render: function() {
       return (
            <label className="sr-only" htmlFor={this.props.for}>
                {this.props.text}
            </label>
       );
   }
});

var TaakForm = React.createClass({
    render: function() {
        return (
            <form className="form-inline panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Definiëer een nieuwe taak</h3>
                </div>
                <div className="panel-body">
                    <div className="form-group">
                        <Label for="beschrijving" />
                        <input type="text" placeholder="Beschrijving" />
                    </div>
                </div>
                <div className="panel-footer">
                    <button type="submit" className="btn btn-primary pull-right">Toevoegen</button>
                    <div className="clearfix"></div>
                </div>
            </form>
        );
    }
});

module.exports = TaakForm;