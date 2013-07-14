better-form-validation [![Build Status](https://api.travis-ci.org/chemerisuk/better-form-validation.png?branch=master)](http://travis-ci.org/chemerisuk/better-form-validation)
======================
> Form validation polyfill for [better-dom](https://github.com/chemerisuk/better-dom)

Demo: http://chemerisuk.github.io/better-form-validation/

Installing
----------
Use [bower](http://bower.io/) to download this extension with all required dependencies.

    bower install better-form-validation

This will clone the latest version of the __better-form-validation__ into the `bower_components` directory at the root of your project.

Then append the following script on your page:

```html
<html>
<head>
    ...
    <link rel="stylesheet" href="bower_components/better-form-validation/better-form-validation.css"/>
    <!--[if IE]><script src="bower_components/html5shiv/dist/html5shiv.js"></script><![endif]-->
</head>
<body>
    ...
    <script src="bower_components/better-dom/better-dom.js" data-htc="bower_components/better-dom/better-dom.htc"></script>
    <script src="bower_components/better-form-validation/better-form-validation.js"></script>
    <script src="bower_components/better-form-validation/i18n/better-form-validation.en.js"></script>
</body>
</html>
```
