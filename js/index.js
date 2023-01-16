//horizontal scroll
(function(){
    function scrollH(e){
        
        e.preventDefault();
        e = window.event || e;
        let delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.querySelector('.container').scrollLeft -= (delta * 40);
    }
    if(document.querySelector('.container').addEventListener){
        document.querySelector('.container').addEventListener('mousewheel', scrollH, false);
        document.querySelector('.container').addEventListener('DOMMouseScroll', scrollH, false);
    }
})();
