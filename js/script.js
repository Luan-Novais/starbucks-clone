window.onload = function(){
    document.querySelector('.header-menu').addEventListener('click', function(){
        if(document.querySelector('.menu-mobile-bg').style.display == 'none'){
            document.querySelector('.menu-mobile-bg').style.display = 'block'
            document.querySelector('.menu-mobile').style.display = 'block'
        

        }else{
            document.querySelector('.menu-mobile-bg').style.display = 'none'
            document.querySelector('.menu-mobile').style.display = 'none'
        }
    });
};

document.querySelector('#img-fechar-mobile').addEventListener('click', function(){
    if(document.querySelector('.menu-mobile-bg').style.display == 'block'){
        document.querySelector('.menu-mobile-bg').style.display = 'none'
        document.querySelector('.menu-mobile').style.display = 'none'  
    };
});
