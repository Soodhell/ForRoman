const head = document.getElementById('head');

setInterval(function(){
    
    window.onscroll = function ()
    {
        let scrollTop = window.pageYOffset ? window.pageYOffset : (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);

        if(scrollTop >= 10)
        {

            head.style.backgroundColor = '#141414';
            head.style.transition = '0.1s';

        }else if(scrollTop === 0){

            head.style.backgroundColor = 'rgba(161, 161, 161, 0)';
            head.style.transition = '0.1s';

        }

    }

    window.onscroll();

}, 500);


