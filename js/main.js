/*Start button go up when scroll down */
let goUp = document.querySelector('#go-up');

let go = goUp.addEventListener('click', function () {
  scrollTo({
    top: 0,
    right: 0,
    behavior:"smooth"
   });
  });

window.onscroll = function () {
  if (window.scrollY >= 800) {
    goUp.style.cssText = 'display:block;';
    go();
  } else {
    goUp.style.cssText = 'display:none; '
  }
}
  
/*end button go up when scroll down */

/* start Part search in the header */
let search = document.querySelector(' .header .search');
let searchI = document.querySelector('.header .search i');
let searchP= document.querySelector('.header .search p');
let searchInput= document.querySelector('.header .search input');

search.onclick = function () {
  searchI.style.display = 'none';
  searchP.style.display = 'none';
  searchInput.style.display = 'block';
  searchInput.focus();
}
searchInput.onblur = function () {
  searchI.style.display = 'block';
  searchP.style.display = 'block';
  searchInput.style.display = 'none';
}
/* start Part search in the header */

/* start Part bars in the header */
let bars = document.querySelector('.start .header .bars');
let ul = document.querySelector('.border-content ul');
let li = document.querySelectorAll('.border-content ul li');

bars.onclick = function () {
  ul.style.cssText = 'display:flex; position:absolute; flex-direction:column; top:150px; left:0px; gap:50px; border:1px solid #fff; padding:5px; border-radius:10px;'

  for (let i = 0; i < li.length; i++){
    li[i].style.cssText = 'border:1px solid #fff; padding:5px;';
  }
}
/* end Part bars in the header */

/*start Exit Icon ul in the header */
let exit = document.querySelector('.start .header ul i');
exit.onclick = function () {
  this.parentElement.style.cssText = 'display:none';
}
/*endExit Icon ul in the header */

/*Start Contact header */
let contact = document.querySelector('.header .contact');
contact.onclick = function () {
  window.location.href = '#footer';
}
/*end Contact header */

/*start more articles in content */
let more = document.querySelector('.start .content .box:first-child a');
let para = document.querySelector('.start .content .box .lorem');

more.addEventListener('click', () => {
  para.classList.toggle('display-none');
});
/*end more articles in content */