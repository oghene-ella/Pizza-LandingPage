function textMenu(){
    const textToggle = document.querySelector('.text');
    const menuList = document.querySelector('.menu');
    const pizzaMenu = document.querySelector('.pizza');
    const dessertMenu = document.querySelector('.dessert');
    textToggle.classList.toggle('active');
    menuList.classList.toggle('active');
    pizzaMenu.classList.toggle('active');
    dessertMenu.classList.toggle('active');
}