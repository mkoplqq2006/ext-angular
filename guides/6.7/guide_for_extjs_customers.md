# Guide for Ext JS Customers

Ext JS customers do not need to purchase ExtReact.  They can use Ext JS components in React applications with the freely available [@sencha/ext-react](https://github.com/sencha/ext-react) library.  This guide documents the steps needed to add Ext JS components to React applications.

## Requirements

* Node 8+
* NPM 4+
* React 16
* Webpack 4+
* Babel 6+
* Ext JS 6.6+
* Java 8 *

_* Java requirement only applies to Linux. Java is automatically bundled with ExtReact's Webpack plugin on Windows and Mac OS if Java is not installed)_

## Creating a New React Application with Ext JS Components

If you're starting from scratch, we recommend cloning the [ext-react](https://github.com/sencha/ext-react)
monorepo and copying one of the boilerplates to create a new application:

* [ExtReact Modern Boilerplate](https://github.com/sencha/ext-react/tree/master/packages/ext-react-modern-boilerplate)
* [ExtReact Classic Boilerplate](https://github.com/sencha/ext-react/tree/master/packages/ext-react-classic-boilerplate)

For example, to use the modern boilerplate:

```
git clone https://github.com/sencha/ext-react.git
cp -r ext-react/packages/ext-react-modern-boilerplate /path/to/new/app
```

To use the classic boilerplate, replace the last line with:

```
cp -r ext-react/packages/ext-react-classic-boilerplate /path/to/new/app
```

Then, follow the instructions in the boilerplate's README.md to setup and run your new application.

## Adding Ext JS to an Existing React Application

If you need to add Ext JS components to an existing React application, follow the steps below:

### Adding ext-react

Sencha provides a set of packages that help integrate Ext JS into React.  Add them to your React application by installing them from NPM:

```
npm install --save @sencha/ext-react
npm install --save @sencha/ext @sencha/ext-modern @sencha/ext-modern-theme-material
npm install --save-dev @sencha/ext-react-webpack-plugin @sencha/ext-react-babel-plugin html-webpack-plugin
```
## Configuring Webpack

ExtReact requires a webpack plugin to bundle and optimize the ExtReact components you use in your application.  Add it to your webpack config as follows:

```javascript
// import the plugins
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtReactWebpackPlugin = require('@sencha/ext-react-webpack-plugin');
...

// then, in your webpack config options:
return {
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      hash: true
    }), 
    new ExtReactWebpackPlugin({
      port:port,
    }) 
  ]
}
```

*Note: If you're using `html-webpack-plugin`, make sure it comes before `ExtReactWebpackPlugin` in the plugins array so that tags for ext.js and ext.css are included in the resulting index.html.*

If using webpack-dev-server, make sure that the build directory is in the `contentBase` config.  

```
contentBase: "./build"
```

If `contentBase` is set to another directory, you can change the value to an array and add "build":

```
contentBase: ["static", "./build"]
```

For more information on configuring the ExtReactWebpackPlugin, see [Building with Webpack](webpack_and_babel.html).

You can also use the [webpack configuration file in the ExtReact Modern Boilerplate](https://github.com/sencha/ext-react/blob/master/packages/ext-react-modern-boilerplate/webpack.config.js) for reference

## Configuring Babel

In order to build your application, `@sencha/ext-react-babel-plugin` must be included in your babel configuration and __ES6 module transpilation must be turned off__.  Here is an example .babelrc:

```javascript
{
  "presets": [
    [ "es2015", { "modules": false } ],
    "stage-2",
    "react"
  ],
  "plugins": [
    "@sencha/ext-react-babel-plugin"
  ]
}
```

*Note: disabling ES6 module transpilation in babel doesn't prevent you from using `import` statements. It just defers the processing of those statements to Webpack, which enables tree-shaking and will help descrease the size of your application bundle.*

## Updating index.html

If you're using `html-webpack-plugin`, the JavaScript and CSS resources generated by `ExtReactWebpackPlugin` will automatically be added to your index.html file at build time.  If not, you'll need to add them manually:

```html
<!doctype html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <link href="ext-react/ext.css" rel="stylesheet">
    ...
</head>
<body>
    ...
    <script type="text/javascript" src="ext-react/ext.js"></script>
    ...
</body>
```

### HTML Doctype

The HTML5 doctype declaration is required for ExtReact components to display properly.  Please make sure that this declaration is present at the top of your HTML document:

```html
<!doctype html>
```

### Viewport Meta Tag

ExtReact requires a viewport meta tag.  This should be added to the `<head>` element in your index.html.

```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
```

## Launching your Application

The `@sencha/ext-react` package provides a `launch` function to using instead of `ReactDOM.render()`:

### `launch(React.Element/Function)`

To launch your app, add the following to your index.js file (your webpack entry point):
When using with React v16 and above, developers need to add a new component called      ExtReact at the root before using Ext JS component. Best way is to add it at the application’s entry point or launch method and then ExtJS Component can be used anywhere throughout application.


```javascript
import { launch } from '@sencha/ext-react';
import { ExtReact } from '@sencha/ext-react'

import App from './App';

launch(<ExtReact><App/><ExtReact>);
```

The launch function renders the specified component into the document body. It also accepts a callback function that returns the component to be rendered:

```javascript
launch(() => {
  // do some initialization before initial render
  // ...
  
  // return the component to be rendered
  return <App/>;
})
```

The `launch` function serves two purposes:

1. It delays your App's initial render until the ExtReact class system is fully initialized
2. It creates a viewport, which is needed for creating components that take up the full height and width of the screen. 

When using `launch` you do not need a separate target `<div id="root"/>` in your `index.html` file. If you have one you 
should remove it. The code above replaces the typical code for launching a React app, which generally looks something like:

```javascript
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App/>, document.getElementById('root'));
```    

### renderWhenReady(Component)

If you do not need to create fullscreen components (for example if you're using ExtReact components with another layout system), you can apply the `renderWhenReady` higher-order component to topmost component containing an ExtReact element, omit the launch function, and render to a target element as is customary with React.  This is especially useful if you're building a library of components based on ExtReact and you don't want to require the applications that use your library to call `launch`.

```jsx
// App.js
import React, { Component } from 'react'
import { Panel } from '@sencha/ext-modern'
import { renderWhenReady } from '@sencha/ext-react'
import { ExtReact } from '@sencha/ext-react'


class App extends Component {
  render() {
    return (
      <ExtReact>
        <Panel title="ExtReact">Hello World!</Panel>
      </ExtReact>
    )
  }
}

export default renderWhenReady(App);
```

```jsx
// index.js
import ReactDOM from 'react-dom'
import App from './App'
import { render } from '@sencha/ext-react'

render(<App/>, document.getElementById('root'))
```

### React Hot Loader

Here is an example that uses the launch function's callback parameter to enable react-hot-loader.  The callback is passed a DOM element that can be used as the target when calling `ReactDOM.render`.

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { launch } from '@sencha/ext-react';
import { ExtReact } from '@sencha/ext-react'
import App from './App'

let viewport;

const render = (Component, target) => {
    ReactDOM.render(
        <ExtReact>
            <AppContainer>
                <Component/>
            </AppContainer>
        </ExtReact>,
        target
    )
}

launch(target => render(App, viewport = target));

if (module.hot) {
    module.hot.accept('./App', () => render(App, viewport));
}
```

## The `fullscreen` config

Most apps that use ExtReact are single-page applications that occupy the full height and width of the browser window.  To acheive this, the root ExtReact component in your app should be configured with the `fullscreen` prop set to `true`.  For example:

```javascript
import { Container } from '@sencha/ext-modern';

export default function App() {
  return (
    <Container fullscreen>
      ...
    </Container>
  )
}
```

## ESLint

If you're using ESLint, add `Ext` as an allowed global:

```javascript
"globals": {
    "Ext": true
}
```

## Using Ext JS Components in React

## Importing Components

The `@sencha/ext-react` package makes all Ext JS classes with xtypes available as React components.  Component names are derived from the capitalized, camel-cased form of the xtype.  For example, `Ext.grid.Grid` has an xtype of `grid`, and can be imported thusly:

```jsx
import { Grid } from '@sencha/ext-modern';
```

If using the classic toolkit, import from `@encha/ext-classic`.

```jsx
import { Grid } from '@encha/ext-classic';
```

Dashes in xtypes are be converted to underscores.  For example, the "d3-heatmap" xtype can be imported using:

```jsx
import { D3_HeatMap } from '@encha/ext-D3';
```

## Configuring Components

React props are converted to Ext JS configs.  Here's a typical use of `Ext.grid.Grid`:

```jsx
import React, { Component } from 'react';
import { Grid, Column } from '@encha/ext-modern';

export default class UsersGrid extends Component {

    store = Ext.create('Ext.data.Store', {
        fields: ['name', 'email'],
        data: [
            { name: 'Tim Smith', email: 'tim101@gmail.com' },
            { name: 'Jill Lindsey', email: 'jlindsey890@gmail.com' }
        ]
    })

    render() {        
        return (
            <Grid title="Users" store={this.store}>
                <Column text="Name" dataIndex="name"/>
                <Column text="Email" dataIndex="email"/>
            </Grid>
        )
    }

}
```

In the example above, we set the Grid's `title` and `store` configs using props. We set the `columns` config using `Column` child elements instead of using the `columns` prop.  Both forms are acceptible, but we think that using child elements is more intuitive for React developers, so this is the form you'll see in all of our examples. ExtReact automatically knows to map certain child elements like `Column` to configs on the parent component.  Another example of this is `Menu`:

```jsx
<Button text="Options">
    <Menu>
        <MenuItem text="Options 1"/>
        <MenuItem text="Options 2"/>
        <MenuItem text="Options 3"/>
    </Menu>
</Button>
```

Which can also be written as:

```jsx
<Button 
    text="Options"
    menu={[
        { text: 'Option 1' },
        { text: 'Option 2' },
        { text: 'Option 3' }
    ]}
/>
```

## Handling Events

Any prop starting with "on" followed by a capital letter is automatically converted to an Ext JS event listener.  Since Ext JS events are all lower-case, case is not preserved.  You're free to use camel-case, which is common in React.

```jsx
import React, { Component } from 'react';
import { SliderField } from '@encha/ext-modern';

export default function MyComponent() {
    return (
        <SliderField
            minValue={0}
            maxValue={100}
            onChange={(slider, value) => console.log(`Value set to ${value}`)}
        />
    )
}
```

Event handler props can also take an object with additional options:

```jsx
<Button 
    onPaint={{
        single: true, // handler will only be called once
        fn: () => {...}
    }}
/>
```

You can also use a listeners object as is common in traditional Ext JS:

```jsx
import React, { Component } from 'react';
import { SliderField } from '@encha/ext-modern';

export default function MyComponent() {
    return (
        <SliderField
            minValue={0}
            maxValue={100}
            listeners={{
                change: (slider, value) => console.log(`Value set to ${value}`)
            }}
        />
    )
}
```

## Special Props

### `rel`

Any prop that takes a subclass of `Ext.Widget` can be replaced with a child element. To use a child element to replace a prop, 
set the child's `rel` prop to the name of the prop being replaced. For example, the `menu` prop on Button can be replaced with a child `<Menu>` element:

```jsx
<Button text="Theme">
    <Menu rel="menu">
        <MenuItem text="Triton"/>
        <MenuItem text="iOS"/>
        <MenuItem text="Material"/>
    </Menu>
</Button>
```

### `defaults`

Use the defaults prop to apply a set of props to all children.  For example, to use flex: 1 for all items in a container:

```jsx
<Container layout="vbox" defaults={{ flex: 1 }}>
    <Container>Item</Container>
</Container>
```

## The `ref` Prop

Refs point to Ext JS component instances:

```jsx
import React, { Component } from 'react';
import { SliderField } from '@encha/ext-modern';

export default class MyComponent {
    render() {
        return (
            <SliderField
                ref={ slider => this.slider = slider }
                minValue={0}
                maxValue={100}
                onChange={() => this.onChange()}
            />         
        )
    }

    onChange() {
        console.log('Slider value', this.slider.cmp.getValue()); // this.slider is an Ext.field.Slider
    }
}
```

### Using HTML Elements and Non-ExtReact Components Inside of ExtReact Components

HTML elements are wrapped in an `Ext.Component` instance when they appear within an ExtReact Component.  This is allows ExtReact layouts to correctly position non-ExtReact components.  For example...

```jsx
<Panel layout="hbox">
    <div>left</div>
    <div>right</div>
</Panel>
```
... will result in two divs side-by-side.  The component structure created is equivalent to:

```javascript
Ext.create({
    xtype: 'panel',
    layout: 'hbox'
    items: [{
        xtype: 'component',
        html: '<div>left</div>'
    }, {
        xtype: 'component',
        html: '<div>right</div>'
    }]
});
```

### Creating your own Ext JS Components

You can create your own Ext JS Components using Ext.define, just as you would in traditional Ext JS code.  Use the `reactify` function from `@extjs/reactor` to convert a your Ext JS component to a React component. For example:

```javascript
import { reactify } from '@sencha/ext-react';

const MyGrid = Ext.define('MyPackage.view.MyGrid', {
    extend: 'Ext.grid.Grid',
    ...
})

export default reactify(MyGrid);
```