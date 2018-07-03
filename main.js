

let categoryToggleButtons = document.querySelectorAll('.expand-btn');

for ( let i = 0; i < categoryToggleButtons.length; i++) {
  
  
  categoryToggleButtons[i].addEventListener('click', () => {
    categoryToggleButtons[i].classList.toggle('collapse-btn');

    let foodCat = categoryToggleButtons[i].previousElementSibling.getAttribute('data-category');
    let foodMenu = document.querySelector('#'+foodCat+">.card-body");
    foodMenu.style.display = 'none';
  })
}