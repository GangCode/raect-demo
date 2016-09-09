/* global React, ReactDOM */

var CommentItem = React.createClass({
    displayName: 'CommentItem',
    render: function() {
        return (
            React.createElement('div',{className: 'conment-item'},'show items')
        );
    }
});

var CommentLists = React.createClass({
    displayName: 'CommentLists',
    render: function(){
        return (
            React.createElement('div',{className: 'comment-list'},React.createElement(CommentItem,null))
        );
    }
});

var CommentBox = React.createClass({
    displayName: 'CommentBox',
    render: function() {
        return(
            React.createElement ('div',{className:'comment-box'},React.createElement(CommentLists,null))
        );
    }
});

ReactDOM.render(React.createElement(CommentBox, null),document.getElementById('components'));