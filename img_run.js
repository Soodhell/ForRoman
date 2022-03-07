const conceptImg = document.getElementById('concept_img');

setInterval(function(){

    let scrollTop = window.pageYOffset ? window.pageYOffset : (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);

    conceptImg.style.marginLeft = '890px';
    conceptImg.style.marginTop = '190px';

    conceptImg.style.width = '600px'
    conceptImg.style.height = '500px'

    if(scrollTop >= 280 && scrollTop <= 1200){
        leftImg = scrollTop / 10;
        conceptImg.style.marginLeft = 890 - leftImg + 'px';
    }else if(scrollTop >= 1200){
        conceptImg.style.marginLeft = 890 - 120 + 'px';
    }

})