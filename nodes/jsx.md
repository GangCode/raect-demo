<html>
    <head>
         <style type="text/css">
            .code-block{background-color:#fff;color:#000;border:solid 1px #999;font-size:15px;}
            .keyword{color:blue;}
            .obj{color:#BF0DA6;}
            .prop{color:green;}
            .method{color:#4484D1}
            .str{color:#E88518}
            .tag{color:#28A8DF;}
        </style>
    </head>
</html>
# 1.JSX创建组件

## JSX创建组件

- 自定义组件

<pre class="code-block">
<code>

    <span class="keyword">var</span> <span class="obj">CommentItem</span> = <span class="obj">React</span>.<span class="method">createClass</span>({
        <span class="prop">render</span>: <span class="keyword">function</span>() {
            <span class="keyword">return</span>  (
                <span class="obj">React</span>.<span class="method">createElement</span>(<span class="str">'div'</span>,{<span class="prop">className</span>: <span class="str">'conment-item'</span>},<span class="str">'show items'</span>)
            );
        }
    });

    <span class="keyword">var</span> <span class="obj">CommentLists</span> = <span class="obj">React</span>.<span class="method">createClass</span>({
        <span class="prop">render</span>: <span class="keyword">function</span>(){
            <span class="keyword">return</span> (
                <span class="tag">&lt;div className='comment-list'&gt;</span>
                    <span class="tag">&lt;CommentItem /&gt;</span>
                <span class="tag">&lt;/div&gt;</span>
            );
        }
    });

    <span class="keyword">var</span> <span class="obj">CommentBox</span> = <span class="obj">React</span>.<span class="method">createClass</span>({
        <span class="prop">render</span>: <span class="keyword">function</span>() {
            <span class="keyword">return</span>(
                <span class="tag">&lt;div className='comment-box'&gt;</span>
                    <span class="tag">&lt;CommentLists /&gt;</span>
                <span class="tag">&lt;/div&gt;</span>
            );
        }
    });

    <span class="obj">ReactDOM</span>.<span class="method">render</span>(<span class="tag">&lt;CommentBox /&gt;</span>,<span class="obj">document</span>.<span class="method">getElementById</span>(<span class="str">'components'</span>));

</code>
</pre> 

## (1)标签属性

- html class属性

<pre class="code-block">
<code>
    <span class="tag">&lt;div className="" /&gt;</span>
</code>
</pre>

- html input for属性

<pre class="code-block">
<code>
    <span class="tag">&lt;input htmlFor="" /&gt;</span>
</code>
</pre>
