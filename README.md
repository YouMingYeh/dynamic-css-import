# dynamic-css-import

This package allow you to dynamic import a raw css file or delete an imported one.

#### Why you may need this?

Sometimes, you need to import a CSS file dynamically for some reason, such as:

1. Import a CSS file according to an input value
   - you can not un-import it...

```javascript
// may want to import like this
let file_name = "style.css"; // may

function import_css(file_name) {
  import(`./${file_name}`);
}

import_css(file_name);

// unable to unimport it...
```

2. you want to import and un-import it anytime!
   - you can place a style tag to document head or remove it.

#### Setup and Usage

1. run following command for installation:

```bash
npm install dynamic-css-import --save-dev
```

2. In your `webpack.config.js`:

```javascript
module.exports = {
	module = {
		rules = {
			test = /\.css$/,
			use = [
			// other css loader...
				{
					loader: "raw-loader",
					// only use raw-loader for !!raw-loader! imports
					resourceQuery: /raw-loader/,
				},
			]
		}
	}
}

```

3. In `App.js`:

```javascript
//...
import { ImportCSS, DeleteCSS } from "dynamic-css-import";

function App() {
  async function handleImport(id, file_path) {
    // Don't include .css in file_path
    const respone = await ImportCSS(id, file_path);
  }
  function handleDelete(id) {
    DeleteCSS(id);
  }

  return <></>;
  // ...
}
```

#### How it works?

Due to some reasons, react webpack doesn't support un-import an imported CSS, so you may interact with the document head directly.

With `css-loader`, or `raw-loader`, it returns a JavaScript module object with a default export that contains the raw string content of the loaded file.

So we can then create a style tag in the document head to load the CSS styles directly.

#### Error?

You can check this package directly. I think it is no big deal for you to find out the problem.
