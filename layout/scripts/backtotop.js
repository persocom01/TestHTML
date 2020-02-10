// Displays and hides the scroll to top button depending on scroll position.
scrollPos = 100
window.onscroll = function () { returntoTop() }

function returntoTop () {
  // if scroll > 20px.
  if (document.body.scrollTop > scrollPos || document.documentElement.scrollTop > scrollPos) {
    // The scale method of making a button appear. The display method would be:
    // document.getElementById('backtotop').style.display = 'inline-block'
    document.getElementById('backtotop').style.transform = 'scale(1)'
  } else {
    // The scale method of making a button appear. The display method would be:
    // document.getElementById('backtotop').style.display = 'none'
    document.getElementById('backtotop').style.transform = 'scale(0)'
  }
}
