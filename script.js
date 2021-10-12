$document.ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }        
    });

    

    //toggle nabar/menu script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    //typing script goes here
    var typed = new Typed(".typing", {
        strings: ["Java Developer", "UI developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

});