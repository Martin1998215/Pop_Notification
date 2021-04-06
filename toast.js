const cover = document.querySelector('.cover');
const btn = document.getElementById('btn');

btn.addEventListener('click', function () {
   createAlart();
});

function createAlart() {
   const div = document.createElement('div');
   div.classList.add('toast');
   const h2 = document.createElement('h5');
   h2.innerHTML = 'New Text 1';
   div.appendChild(h2);
   const p2 = document.createElement('p');
   p2.innerHTML = '12/14/2020';
   div.appendChild(p2);
   cover.appendChild(div);

   setTimeout(function () {
      div.remove();
   }, 5000);

}