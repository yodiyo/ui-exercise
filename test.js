// enable use of trial font from myfonts.com

(function() {
    var trial = document.createElement('script');
    trial.type = 'text/javascript';
    trial.async = true;
    trial.src = 'https://easy.myfonts.net/v2/js?sid=112449(font-family=Charter+BT+Pro+Bold)&sid=112451(font-family=Charter+BT+Pro+Roman)&key=696Dp8JIze';
    // remove injection of blurb for test
    // var head = document.getElementsByTagName("head")[0];
    // head.appendChild(trial);
})();

// toggle sidebar

$(document).ready(function(){
    $("#sidebar-toggle").click(function(){
        $("aside").fadeToggle(1000);
    })
})