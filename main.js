
/*-- Controls categories minimizeand maximize buttons --*/

let categoryToggleButtons = document.querySelectorAll('.cat-expand-btn');

for ( let i = 0; i < categoryToggleButtons.length; i++) {
  categoryToggleButtons[i].addEventListener('click', () => {
    categoryToggleButtons[i].classList.toggle('cat-collapse-btn');

    let categoryClassName = categoryToggleButtons[i].className;
    let foodCat = categoryToggleButtons[i].previousElementSibling.getAttribute('data-category');
    let foodMenu = document.querySelector('#'+foodCat+">.card-body");

    if (categoryToggleButtons[i].classList.contains('cat-collapse-btn') == true) {
      foodMenu.style.display = 'none';
      document.querySelector('#'+foodCat).style.borderRadius = "20px";
      document.querySelector('#'+foodCat+">.card-header").style.borderRadius = "20px";
      //document.querySelector('#'+foodCat+">.card-header>span").classList.toggle('cat-collapse-btn');
    } else {
      foodMenu.style.display = 'block';
      document.querySelector('#'+foodCat+">.card-header").style.borderRadius = "20px 20px 0px 0px";
    }
    
  });
}

/*-- Controls on main menu minimizeand maximize buttons --*/

let menuCardHeader = document.querySelectorAll('.food-category>.card-header');

for (let i = 0; i < menuCardHeader.length; i++) {
  menuCardHeader[i].addEventListener('click', () => {
    console.log(menuCardHeader[i].innerHTML);
  })
}