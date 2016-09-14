var items = [
    { id : 0, name : '主页'},
    { id : 1, name : '产品'},
    { id : 2, name : '关于我们'}
];

/**
 * react组件形式渲染html
 */

var NavBar = React.createClass({
    displayName: 'NavBar',
    render : function () {
        return (
            <ul>
                {
                    items.map(function (item) {
                        return <li key={item.id}>{item.name}</li>
                    })
                }
            </ul>
        );
    }
});
ReactDOM.render(React.createElement(NavBar, null), document.getElementById('components'));

/**
 * react标签形式渲染html
 */
items.push({ id : 3, name : '下载'});
var navBar = (
    <ul>
        {
            items.map(function (item) {
                return <li key={item.id}>{item.name}</li>
            })
        }
    </ul>
);
ReactDOM.render(navBar, document.getElementById('html_tag'));

