# Widgets

Contains various css tricks used to create practical html elements.

## Widgets

### barrating

Demonstrates how to create a bar rating. The html code is as follows:

```
<div class="rating">
  <div data-rating="1"></div>
  <div data-rating="2"></div>
  <div data-rating="3"></div>
  <div data-rating="4"></div>
  <div data-rating="5"></div>
</div>
```

### starrating

Demonstrates how to create a star rating radio button. The html code is as follows:

```
<div class="star-rating-container">
  <form class="star-rating-form" action="index.html" method="post">
    <label class="white-star star-selector">
      <input type="radio" name="rate1" value="" onclick="this.form.submit();">
    </label>
    <label class="white-star star-selector">
      <input type="radio" name="rate2" value="" onclick="this.form.submit();">
    </label>
    <label class="white-star star-selector">
      <input type="radio" name="rate3" value="" onclick="this.form.submit();">
    </label>
    <label class="white-star star-selector">
      <input type="radio" name="rate4" value="" onclick="this.form.submit();">
    </label>
    <label class="white-star star-selector">
      <input type="radio" name="rate5" value="" onclick="this.form.submit();">
    </label>
  </form>
</div>
```
