
/**
 * react组件形式渲染html
 */

var Temp = React.createClass({
    displayName: 'Temp',
    render : function () {
        return (
           <span>hello world!</span>
        );
    }
});
ReactDOM.render(<Temp />, document.getElementById('components'));

/**
 * JSX标签形式渲染html
 */

var temp = (
    <span>hello world!</span>
);
ReactDOM.render(temp, document.getElementById('jsx_tag'));

