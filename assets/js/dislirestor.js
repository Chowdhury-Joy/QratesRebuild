//!! discover

var swiper = new Swiper('.swiper-container', {
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,

        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },
});


//?? stories


const categoryTitle = document.querySelectorAll('.category-title');
const allCategoryPosts = document.querySelectorAll('.all');

for (let i = 0; i < categoryTitle.length; i++) {
    categoryTitle[i].addEventListener('click', filterPosts.bind(this, categoryTitle[i]));
}

function filterPosts(item) {
    changeActivePosition(item);
    for (let i = 0; i < allCategoryPosts.length; i++) {
        if (allCategoryPosts[i].classList.contains(item.attributes.id.value)) {
            allCategoryPosts[i].style.display = "block";
        } else {
            allCategoryPosts[i].style.display = "none";
        }
    }
}

function changeActivePosition(activeItem) {
    for (let i = 0; i < categoryTitle.length; i++) {
        categoryTitle[i].classList.remove('active');
    }
    activeItem.classList.add('active');
};