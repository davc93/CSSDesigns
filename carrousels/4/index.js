// $('input').on('change', function() {
//     $('body').toggleClass('blue');
//   });
  
document.querySelector('input').addEventListener('click',()=>{

  document.querySelector('body').classList.toggle('blue')
})