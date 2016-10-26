

var $bg = document.querySelector('.hero')
var $logoLink = document.querySelector('.logo-link')
var $mainLinks = Array.prototype.slice.call(document.querySelectorAll('.main-nav-link'))
var $introText = document.querySelector('.intro-text')
var $hovers = $mainLinks.concat([$logoLink])

function markOff() {
  $bg.classList.remove('is-on')
  $logoLink.classList.remove('is-on')
  $introText.classList.remove('is-on')
  $mainLinks.forEach(function($link) { $link.classList.remove('is-on') })
}

function markOn() {
  $bg.classList.add('is-on')
  $logoLink.classList.add('is-on')
  $introText.classList.add('is-on')
  $mainLinks.forEach(function($link) { $link.classList.add('is-on') })
}

$hovers.forEach(function($hover) {
  $hover.addEventListener('mouseenter', markOn)
  $hover.addEventListener('mouseleave', markOff)
})
