/**
 * 文本框组件
 */
var TextComment = React.createClass({
    render : function () {
        return (
            <label className={this.props.class}>
                {this.props.labelText}:
                <input type={this.props.inputType} id={this.props.id} name={this.props.name} placeholder={this.props.tips} />
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
            <label className={this.props.class}>
                {this.props.labelText}
                <input type={this.props.checkType} id={this.props.id} name={this.props.name} checked={this.state.checked} onChange={this.CheckChange}/>
            </label>        
        );
    },
    CheckChange : function(e){
        console.info(e.target.checked);
        this.setState({
            checked : e.target.checked
        });
    }
});

/**
 * 下拉列表组件
 */
var SelectComment = React.createClass({
    getInitialState : function(){
        return {selected : '0'};
    },
    render : function(){
        return (
            <div className={this.props.class}>
                <label>{this.props.labelText}:</label>
                <select id={this.props.id} name={this.props.name} onChange={this.selectChange}>
                    {
                        this.props.opts.map(function(item){                            
                            return <option key={item.selectedVal}>{item.selectedName}</option>
                        })
                    }
                </select>
            </div>        
        );
    },
    selectChange : function(e){
        console.info(e.target.value);
        this.setState({
            selected : e.target.value
        });
    }
});

/**
 * 按钮组件
 */
var ButtonComment = React.createClass({
    render : function(){
        return (
            <span className={this.props.class}>
                <button type={this.props.btnType} id={this.props.id}>{this.props.btnText}</button>
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
                        <TextComment labelText='用户名' inputType='text' class='text-input' name='username' tips='请输入用户名' />
                    </div>
                    <div>
                        <TextComment labelText='密&nbsp;码' inputType='password' class='text-input' name='password' tips='请输入密码' />
                    </div>
                    <SelectComment labelText='经常登录属地' id='loginArea' opts={options} class='select-input'/>
                    <div>
                        <span>登录客户端:</span>
                        <CheckComment labelText='手机' checkType='checkbox' class='check-input' name='device' />
                        <CheckComment labelText='pad' checkType='checkbox' class='check-input' name='device' />
                        <CheckComment labelText='PC' checkType='checkbox' class='check-input' name='device' />
                    </div>
                    <div>
                        <ButtonComment btnType='submit' btnText='登录' class='btn'/>
                        <ButtonComment btnType='reset' btnText='重置' class='btn'/>
                    </div>
                </div>
            </form>
        );
    }
});

var options =[
    {selectedVal:'0',selectedName:'上海'},
    {selectedVal:'1',selectedName:'杭州'}
];

ReactDOM.render(<RegistComment />,document.getElementById('main'));
