var labelText = '文本框';
var inputType='text';
var inputClass = 'input-text';

var FromComponetInput = React.createClass({
    render: function() {
        return (
            <label className='form-label'>{labelText}: <input type={inputType}  className={inputClass}/></label>
        );
    }
});

var FromComponet = React.createClass({
    render: function() {
        return (
            <form className='form'><FromComponetInput/></form>
        );
    }
});

ReactDOM.render(<FromComponet/>,document.getElementById('text'));

var labelText = '单选按钮';
var inputType='radio';
var inputClass = 'input-radio';

ReactDOM.render(<FromComponet/>,document.getElementById('radio'));