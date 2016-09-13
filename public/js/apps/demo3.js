
var InputComment = React.createClass({
    render : function () {
        return (
            <label>{this.props.labelText}:
                <input type={this.props.inputType} name={this.props.name} onChange={this.handleChange} placeholder={this.props.tips}/>
            </label>
        );
    },
    handleChange : function (event) {
        console.log(event.target.value)
        this.setState({value: event.target.value});
    }
});

var ButtonComment = React.createClass({
    render : function(){
        return (
            <span className='btn'>
                <button type={this.props.btnType}>{this.props.btnText}</button>
            </span>
        );
    }
});

var LoginComment = React.createClass({
    render : function(){
        return (
            <form method='get' action=''>
                <div className='login'>
                    <div>
                        <InputComment inputType='text' name='username' labelText='用户名' tips='请输入用户名'/>
                    </div>
                    <div>
                        <InputComment inputType='password' name='password' labelText='密&nbsp;码' tips='请输入密码'/>
                    </div>
                    <div>
                        <ButtonComment btnType='submit' btnText='登录'/>
                        <ButtonComment btnType='reset' btnText='重置'/>
                    </div>
                </div>
            </form>
        );
    }
});

ReactDOM.render(<LoginComment />,document.getElementById('text'));



