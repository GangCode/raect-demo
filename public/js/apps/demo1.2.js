/**
 * react组件中遍历数据
 */
var List = React.createClass({
    render: function() {
        return (
           <div>下列不属于同一朝代的人物是：
                {
                    this.props.list.map(function(item,index){     
                        return (
                            <label key={index}>
                                {item.name}
                                {
                                    index===0 ? <input type='radio' name='person' defaultChecked/> : <input type='radio' name='person'/>
                                }
                            </label>
                        )
                    })
                }
            </div>
        );
    }
});

var list = [
    {name:'张良'},
    {name:'李斯'},
    {name:'张仪'}
];

ReactDOM.render(<List list={list}/>,document.getElementById('main'));

