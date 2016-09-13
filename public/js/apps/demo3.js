/**
 * 文本框组件
 */
var TextComment = React.createClass({
    render : function () {
        return (
            <label>
                {this.props.labelText}:
                <input type={this.props.inputType} name={this.props.name} placeholder={this.props.tips}/>
            </label>
        );
    }   
});

/**
 * 选择框:checkbox 和radio
 */
var CheckComment = React.createClass({
    getInitialState : function(){
        return {
            checked : false
        };
    },
    render : function(){
        return (
            <label>
                {this.props.labelText}:
                <input type={this.props.checkType} name={this.props.name} checked={this.state.checked} onChange={this.CheckChange}/>
            </label>        
        );
    },
    CheckChange : function(e){//checkbox或radio状态改变
        console.log(e.target.checked)
        this.setState({checked:e.target.checked});
    }
});

/**
 * 下拉列表组件
 */
var SelectComment = React.createClass({
    getInitialState : function(){
        return {selected : '0'}
    },
    render : function(){
        return (
            <div>
                <label>{this.props.labelText}:</label>
                <select onChange={this.selectChange} value={this.state.selected} id={this.props.id}>
                    {
                        this.props.opts.map(function(item){
                            return <option key={item.selectedVal}>{item.selectedName}</option>
                        })
                    }
                </select>
            </div>        
        );
    },
    selectChange : function(e){//select选项改变
        console.log(e.target.value)
        this.setState({selected : e.target.value});
    }
});

/**
 * 按钮组件
 */
var ButtonComment = React.createClass({
    render : function(){
        return (
            <span className='btn'>
                <button type={this.props.btnType}>{this.props.btnText}</button>
            </span>
        );
    }
});

var RegistComment = React.createClass({
    render : function(){
        return (
            <form method='get' action=''>
                <div className='login'>
                    <div>
                        <TextComment inputType='text' name='username' labelText='用户名' tips='请输入用户名'/>
                    </div>
                    <div>
                    
                        <TextComment inputType='password' name='password' labelText='密&nbsp;码' tips='请输入密码'/>
                    </div>
                    <div>
                        <SelectComment id='area' labelText='属地' opts={options} />
                    </div>
                    <div>
                        <CheckComment checkType='checkbox' name='savedPassword' labelText='记住用户名'/>
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

var options =[
    {selectedVal:'0',selectedName:'请选择'},
    {selectedVal:'1',selectedName:'上海'},
    {selectedVal:'2',selectedName:'杭州'}
];

ReactDOM.render(<RegistComment />,document.getElementById('main'));
