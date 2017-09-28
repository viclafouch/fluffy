# [Fluffy] v1.0.0

A constructor for notification/alert to your app/website.

## Usage

jQuery __is not necessary__ for this library
Include the Fluffy's script and stylesheet to your page :

```html
<link rel="stylesheet" href="css/fluffy.min.css" />
<script src=js/fluffy.min.js"></script>
```

Then to call a notification, instance a new object like this :

```js
var notif = new fluffy({
    // options go here
});
```
## Options

* __content__:  Specifies a DOM (text) to contain Fluffy's notification. __this param is compulsory__
* __className__: Animation when notification display on your screen. Default: `fade-and-drop`
* __closeButton__: Display the close Button. Default: `true`
* __maxWidth__:  MaxWidth attribute css in pixels of your popup. Default: `600`
* __minWidth__: MinWidth attribute css in pixels of your popup. Default: `280`
* __overlay__: Enable/disable the background overlay. Default: `true`

## Actions

To open/close the fluffy's notification, you need to call these events : 

Open : 
```js
notif.open();
```

Close : 
```js
notif.close();
```

## Contribute

Any contributions and/or pull requests would be welcome.

Themes, translations, bug reports, bug fixes are greatly appreciated.

## License

Fluffy is licensed under the [MIT](http://www.opensource.org/licenses/mit-license.php) license:

Copyright (C) 2017 Victor de la Fouchardiere

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Author
[Victor de la Fouchardière](http://www.victor-de-la-fouchardiere.fr/)
