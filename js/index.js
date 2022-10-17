/////navbarScroll
var nav = document.getElementById('nav');
window.onscroll = function () { 
  console.log(document.documentElement.scrollTop );
  if (document.documentElement.scrollTop >= 550) {
    document.getElementById('nav').style.backgroundColor='#f38181'
    } 
    else {
      document.getElementById('nav').style.backgroundColor='transparent'
    }
}; 



const openMap = document.getElementById('openMap');
const map = document.getElementById("mapWrap");

openMap.addEventListener('click', function () {
  map.classList.toggle("mapWrap");
})