// $("a.scroll-to").on("click", function(e){
//     e.preventDefault();
//     var anchor = $(this).attr('href');
//     $('html, body').stop().animate({
//         scrollTop: $(anchor).offset().top - 60
//     }, 1800);
// });

const anchors = document.querySelectorAll('a.scroll-to')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href')
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}