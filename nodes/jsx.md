# 1.JSX创建组件

## JSX创建组件

- 自定义组件
<pre style="background-color:#fff;color:#000;border:solid 1px #999;padding:20px 20px 20px 20px;font-size:15px;">
<code>

    <span style="color:blue;">var</span> <span style="color:#BF0DA6">CommentItem</span> = React.createClass({<br>
        render: function() {<br>
            &nbsp;&nbsp;return (<br>
                 &nbsp;&nbsp;&nbsp;&nbsp;React.createElement('div',{className: 'conment-item'},'show items')<br>
             &nbsp;&nbsp;);<br>
        }<br>
    });<br>

    var CommentLists = React.createClass({<br>
        render: function(){<br>
             &nbsp;&nbsp;return (<br>
                &nbsp;&nbsp; &nbsp;&lt;div className='comment-list'&gt;<br>
                     &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&lt;CommentItem /&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br>
            &nbsp;&nbsp;);<br>
        }<br>
    });<br>

    var CommentBox = React.createClass({<br>
        render: function() {<br>
            &nbsp;&nbsp;return(<br>
               &nbsp;&nbsp;&nbsp;&nbsp;&lt;div className='comment-box'&gt;<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;CommentLists /&gt;<br>
               &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br>
            &nbsp;&nbsp;);<br>
        }<br>
    });<br>

    ReactDOM.render(&lt;CommentBox /&gt;,document.getElementById('components'));<br>

</code>
</pre> 

## (1)标签属性
- html class属性

```<div className=""/>
```

```<input htmlFor="">
```