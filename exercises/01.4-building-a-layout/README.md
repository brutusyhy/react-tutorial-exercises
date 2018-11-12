# `01.4` Building a layout

Let's practice a little bit more about using JSX for creating HTML.

Now we have another object that is just a bit more complex than the last one.

# :speech_balloon: Instructions

Using the information you have on the `data` object build this small card.

```js
const data = {
  image: "https://ucarecdn.com/0be9ec85-1ff9-44ab-927e-7ce2c0803753/",
  cardTitle: "Bob Dylan",
  cardDescription: "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
  button: {
    url: "https://en.wikipedia.org/wiki/Bob_Dylan",
    label: "Go to wikipedia"
  }
};
```
### Here is the HTML code for creating a bootstrap card:

```html
<div class="card m-5">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
````
Source: [Bootstrap Card](https://getbootstrap.com/docs/4.0/components/card/#example)

### This is how your end result needs to look like:

![Bob Dylan Card](https://ucarecdn.com/322f140b-cc8e-446b-8afb-e69fcbb5f8c8/)