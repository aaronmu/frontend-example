var React = require('react');
var Functieanalyse = require('./Functieanalyse');

var Foo = React.createClass({
   render: function() {
       return <Functieanalyse />;
   }
});

var Bar = React.createClass({
    render: function() {
        return <Functieanalyse />;
    }
});

React.render(
    <Foo />,
    document.getElementById('main')
);

React.render(
    <Bar />,
    document.getElementById('bar')
);
