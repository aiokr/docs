# Hitokoto

Hitokoto 是一个基于 php 制作的， 用户在博客和个人主页等处随机输出一句格言的工具。目前运行于 Coding Pages。

[aiokr's Hitokoto](https://hitokoto.aiokr.com)

## 调用方式

1. PHP调用

添加如下代码到页面头部：

```php
<?php $hitokotoEcho = file_get_contents('https://hitokoto.aiokr.com/'); ?>
```

然后在需要显示“一言”的标签，插入如下代码：

```php
<?php echo $hitokotoEcho; ?>
```

2. JavaScript调用

添加如下代码到页面底部：

```JavaScript
$.post("https://hitokoto.aiokr.com/", function(hitokoto) {
    $(".hitokotoEcho").html(hitokoto);
});JavaScriptCopy
```
同时在你想要输出 Hitokoto 的标签中加上 hitokotoEcho 样式，例如：

```html
<body>
  <div class="hitokoto">
    Loding...
  </div>
</body>
```

注意：JS 调用需要网页中使用Jquery
