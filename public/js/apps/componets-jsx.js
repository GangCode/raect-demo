/* global React, ReactDOM */

var CommentItem = React.createClass({
    render: function() {
        return (
            React.createElement('div',{className: 'conment-item'},'show items')
        );
    }
});

var CommentLists = React.createClass({
    render: function(){
        return (
            <div className='comment-list'>
                <CommentItem />
            </div>
        );
    }
});

var CommentBox = React.createClass({
    render: function() {
        return(
            <div className='comment-box'>
                <CommentLists />
            </div>
        );
    }
});

ReactDOM.render(<CommentBox />,document.getElementById('components'));