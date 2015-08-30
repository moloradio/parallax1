$("#nav > ul > li > a").click(function(e) { 
    e.preventDefault();
    goToByScroll(this.id);           
});

function goToByScroll(id){
    id = id.replace("link_", "");
    $('html,body').animate({
        scrollTop: $("#"+id).offset().top},
        'slow');
}