function scrollToTop(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

window.onscroll=function(){
    showHideBackToTop();
};

function showHideBackToTop(){
    var button = document.querySelector(".back-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop>20){
        button.style.display = "flex";
    } 
    else{
        button.style.display = "none";
    }
}