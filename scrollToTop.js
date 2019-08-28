// Displays and hides the scroll to top button depending on scroll position.
window.onscroll = function () { scrollFunction() }

function scrollFunction () {
  // if scroll > 20px.
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    // The scale method of making a button appear. The display method would be:
    // document.getElementById('but2').style.display = 'inline-block'
    document.getElementById('but2').style.transform = 'scale(1)'
  } else {
    // The scale method of making a button appear. The display method would be:
    // document.getElementById('but2').style.display = 'none'
    document.getElementById('but2').style.transform = 'scale(0)'
  }
}
