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

Then import and load Normalize as a global style with JSS:

```js
import Normalize from 'normalize.jss';
import jss from 'jss';

const sheet = jss.createStyleSheet({ '@global': Normalize });
sheet.attach();
```

The [jss-global](https://github.com/cssinjs/jss-global) plugin must be installed and enabled to use the `@global` declaration above.
