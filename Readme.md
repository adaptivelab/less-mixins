# Cavendish

**_This is a work in progress. Use with caution_**

## Goals

1. Provide a set of reusable LESS mixins and components.
2. Make it easy to include these components in a project.
3. Define a set of basic themes.
4. Make the themes, and the theme mechanism, extensible.

## Getting Cavendish

We recommend you use [Bower](http://bower.twitter.com) to install Cavendish.
At the moment this means adding Cavendish to your project's component.json, eg:

    "cavendish": "git/repo/here"

and then running `bower install`. Of course you don't have to do it this way.

## Using Cavendish

Using Cavendish is simple, just use the `@import` declaration to include the
parts you want. For example, the following would give you access to Cavendish's
mixins, helpers and button styles.

    @import '../../cavendish/src/mixins';
    @import '../../cavendish/src/helpers';
    @import '../../cavendish/src/elements/buttons'

One note of caution, order of the imports is significant.

To get started with even fewer keystrokes there are also a few pre-defined
_bundles_:

* **cavendish** all the mixins, helpers, elements and the basic theme
* **base** all the mixins and helpers, no theme
* **mixins** just the mixins

### Other considerations

If use [normalize](https://github.com/necolas/normalize.css), which you should,
import it before you import any of Cavendish's files.

## Acknowledgements & Inspiration

* [Suit](https://github.com/necolas/suit)
* [Idiomatic css](https://github.com/necolas/idiomatic-css/)
* [Twitter Bootstrap](https://github.com/twitter/bootstrap)
* [Preboot](https://github.com/mdo/preboot)
