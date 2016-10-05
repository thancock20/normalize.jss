# normalize.jss

[normalize.css](https://github.com/necolas/normalize.css) converted to and exported as a [JSS](https://github.com/cssinjs/jss) object.

This is version 5.0.0 of normalize.css converted to JSS using the [JSS-CLI](https://github.com/cssinjs/cli)

### Use case:

 If you're using JSS for styling, and want to use normalize.css as a base. However, you don't want to setup Webpack to load CSS just for the one file.

### Getting started

Simply install into your project with npm:

```
npm install --save normalize.jss
```

Then import and load with JSS:

```js
import Normalize from 'normalize.jss';
import jss from 'jss';

const sheet = jss.createStyleSheet(Normalize, { named: false });
sheet.attach();
```

Note the use of `named:false` to make the styles global.
