# \<top-nav>

A responsive top navigation bar based on the one outlined in the [Building the main navigation for a website](https://web.dev/website-navigation/) article on Web.dev originally written by [Manuel Matuzović](https://www.matuzo.at/).

You can learn more about the underlying features in that post but it is a great demonstration of a really well thought out component. The blog post was originally just plain `HTML`, `CSS` and `JavaScript` applied globally. I decided to try wrapping it all up into one self contained web component to better encapsulate it and also allowing me to provide some subtle improvements to better integrate it into the web platform such as using `CustomEvents` to indicate when the hamburger menu opens and closes for example.

The component is written using [Lit](https://lit.dev) which is a very small wrapper around the native platform `Web Components` specification that makes the developer experience much nicer and includes a bunch of microoptimizations for free. Wherever possible I have tried to keep things following idomatic Lit approaches to things such as event handlers, query selectors etc. This is what allows me to take advantage of the various microoptimizations I mentioned. Check out the documentation on the Lit website to learn more about how they work if you're interested.

Eventually, I plan to write a much bigger piece about the process of building the component to help introduce people into Web Components and Lit to see what the developer experience is like when trying to write clean, accessible, fast websites. 

## Installation

```bash
# Note: This is not actually published in real life at the moment
npm i bivens-web-components
```

## Usage

```html
<script type="module">
  import 'components/top-nav/top-nav.js';
</script>

<!-- Note: You pass in the menu as an unordered list of links like so -->
<top-nav>
  <ul part="link-list">
    <li>
      <a href="#home">Home</a>
    </li>
    <li>
      <a href="#about-us" aria-current="page">About us</a>
    </li>
    <li>
      <a href="#pricing">Pricing</a>
    </li>
    <li>
      <a href="#contact">Contact</a>
    </li>
  </ul>
</top-nav>
```