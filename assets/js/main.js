var navLinks = document.getElementById("navLinks");

function showMenu(){
    navLinks.style.right = "0";
}
function hideMenu(){
    navLinks.style.right = "-200px";
}

/*blog-filter-menu----------------------------*/
$(document).on('click','.portfolio-filter li',function(){
    $(this).addClass('portfolio-filter-active').siblings().removeClass('portfolio-filter-active')
});

/*portfolio-filter---------------------------------*/
$(document).ready(function(){
$('.list').click(function(){
    const value = $(this).attr('data-filter');
    if(value == 'all'){
        $('.portfolio-box').show('1000');
    }else{
$('.portfolio-box').not('.'+value).hide('1000');
$('.portfolio-box').filter('.'+value).show('1000');
        }
    });
});
