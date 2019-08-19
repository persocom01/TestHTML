// Creates a div element containing a child time element and appends it to the
// end of the body.

// The main reason we want the div element is time cannot be styled center.
var div = document.createElement('div')
// The time element doesn't do much by itself, but its purpose seems to be
// to help search engines read the time content enclosed by putting it in
// machine readable format inside the datetime property.
var time = document.createElement('time')
var currentDate = new Date()

div.style.textAlign = 'center'
time.datetime = currentDate
time.textContent = currentDate
div.appendChild(time)
document.body.appendChild(div)

var button = document.querySelector('#but1')

button.addEventListener('click', () => {
  if (button.value === 'return to top') {
    button.value = 'I\'ve been clicked.'
  } else {
    button.value = 'Stop clicking me! >.<'
  }
})
