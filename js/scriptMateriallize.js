
//Below are the script needed for Materiallize work

$(document).ready(function(){
  $('select').formSelect();
});
        
// *********************************//


var slider = document.getElementById('test-slider');
noUiSlider.create(slider, {
 start: [10, 90],
 connect: true,
 step: 1,
 orientation: 'horizontal', // 'horizontal' or 'vertical'
 range: {
   'min': 0,
   'max': 10000
 },
 format: wNumb({
   decimals: 0
 })
});