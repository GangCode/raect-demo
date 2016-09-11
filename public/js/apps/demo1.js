
var NavBar = React.createClass({
    displayName: 'NavBar',
    render : function () {
        return (
            <ul><li>主页</li><li>产品</li><li>关于我们</li></ul>
        );
    }
});
ReactDOM.render(React.createElement(NavBar, null), document.getElementById('components'));

var navBar = (
    <ul>
     <li>主页</li>
        <li>产品</li>
        <li>关于我们</li>
    </ul>
);
ReactDOM.render(navBar, document.getElementById('html_tag'));

