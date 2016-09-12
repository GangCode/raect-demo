
var CheckBoxComment = React.createClass({
    render: function() {
        return (
            <label>{this.props.labelText}:<input type='checkbox' name='switch' value={this.props.radioVal} /></label>
        );
    }
});

class ShowComment extends React.Component{
    constructor() {
        super();
        this.state = {
            selected: false
        };
        this.handleClick = this.handleClick.bind(this);
    } 
    
    handleClick(){
        this.setState({ selected : !this.state.selected });
        console.log("changed")
    }
    
    render(){
        const text = this.state.selected ? 'selected' : 'haven\'t selected';
        return (
            <div>
                <CheckBoxComment labelText='关' radioVal='0' onClick={this.handleClick}/>
                <CheckBoxComment labelText='开' radioVal='1' onClick={this.handleClick}/>
                <div id='show_select'>{text}</div>
            </div>
        );
    }
}

ReactDOM.render(<ShowComment/>,document.getElementById('text'));



