var a__modile = document.querySelector('.a__modile');
var nav__list__mod = document.querySelector('.nav__list--modile');

a__modile.addEventListener('click', () => {
    nav__list__mod.classList.toggle('active');
});

//при прокрутке, плавное появление 
const active = document.querySelectorAll('.anim__items');

//существуют ли такие классы. Проверяем длину
if(active.length > 0){
    //добаление событие при скроле
    window.addEventListener('scroll', animOnScroll);

    function animOnScroll(){
        for (let index = 0; index < active.length; index++) {
            const activeItem = active[index]; //получаем каждый элемент массива 
            const activeItemHeight = activeItem.offsetHeight; //высота объекта
            const activeItemOffset = offset(activeItem).top; //позиция объекта отосительно верха
            const activeStart = 3; //коэффициент

            let activeItemPoint = window.innerHeight - activeItemHeight / activeStart;
            //высота окна браузера - высота объекта / на коэффициент 

            //если высота объекта >(выше) окна браузера
            if (activeItemHeight > window.innerHeight) {
                //высота окна браузера - высота окна браузера / на коэффициент
                activeItemPoint = window.innerHeight - window.innerHeight / activeStart;
            }

            //pageYOffset - данные в которой храняться проскроленные пиксели 
            //если (прокрутили >(больше) позиция объекта - точка старта) и прокрутили меньше чем позиция объекта + его высота 
            if ((pageYOffset > activeItemOffset - activeItemPoint) && pageYOffset < (activeItemOffset + activeItemHeight)) {
                //добавляет к объекту класс
                activeItem.classList.add('active');
            } else{
                //если у объекта нету класса... то убираем anim__items
                if (!activeItem.classList.contains('active_no_scroll')) {
                    activeItem.classList.remove('anim__items');
                }
            }
        }

        function offset(el) {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return {
                top: rect.top + scrollTop, 
                left: rect.left + scrollLeft
            }
        }
    }

    setTimeout(() => {
        animOnScroll();
    }, 300);
}


