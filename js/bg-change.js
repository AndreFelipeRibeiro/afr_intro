inView.offset(300);

inView('.bg-more').on('enter', function(el){
  document.body.style.backgroundColor = '#000';
  var $target1 = $('.link-social');
  $target1.css('color', '#fff');
  var $target2 = $('.bg-more');
  $target2.css('color', '#fff');
  var $target3 = $('.logo-footer');
  $target3.css('color', '#fff');
});

inView('.bg-intro').on('enter', function(el){
  document.body.style.backgroundColor = '#fff';
  var $target1 = $('.link-social');
  $target1.css('color', '#000');
  var $target2 = $('.bg-more');
  $target2.css('color', '#000');
  var $target3 = $('.logo-footer');
  $target3.css('color', '#000');
});
