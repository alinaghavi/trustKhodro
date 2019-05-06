import '../scss/DashboardAbout.scss';
for(var i=0; i<$('.page-n').length; i++){
    $('.page-n').eq(i).data('index', i+1);
}
var blockPage;
var nextPage;
$(".page-link").click(function(){
    $('.page-item').removeClass('active');
    var $this = $(this);
    $this.parent().addClass('active');
     var pageNumber = $this.html();
     $this.data('index', pageNumber);;
     $('.page-n').each(function(){
        if($(this).css('display') == 'block'){
            blockPage = $(this);
            $(this).addClass('fade-out');
            setTimeout(() => {
                $(this).css('display', 'none');
                $(this).removeClass('fade-out');
            }, 1000);
        }
    });
     for(var i = 1; i <= $('.page-n').length; i++){
        console.log($this.data(), "          ", $('.page-n').eq(i-1).data());
         if($this.data("index") == $('.page-n').eq(i-1).data("index")){
             setTimeout(() => {
                $('.page-n').eq(i-1).addClass('fade-in');
                setTimeout(() => {
                    $('.page-n').eq(i-1).css('display', 'block');
                    $('.page-n').eq(i-1).addClass('active');
                    $('.page-n').eq(i-1).removeClass('fade-in');
                 }, 1000);
             }, 500);
             break;
         }
         var nextPageData = blockPage.data("index") + 1;
         var lastPageData = $('.page-n').length;
         
            if($this.data("index") == '<svg aria-hidden="true" width="8" focusable="false" data-prefix="fas" data-icon="angle-left" class="svg-inline--fa fa-angle-left fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"> <path fill="currentColor" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path></svg>')
            {
                $('.page-n').each(function(){
                        if($(this).data("index") == nextPageData){
                            setTimeout(() => {
                                $(this).addClass('fade-in');
                                setTimeout(() => {
                                    $(this).css('display', 'block');
                                    $(this).removeClass('fade-in');
                                }, 1000);
                            }, 500);
                        }
                    });
         }
         if($this.data("index") == '<svg aria-hidden="true" width="12" focusable="false" data-prefix="fas" data-icon="angle-double-left" class="svg-inline--fa fa-angle-double-left fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M223.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L319.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L393.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34zm-192 34l136 136c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9L127.9 256l96.4-96.4c9.4-9.4 9.4-24.6 0-33.9L201.7 103c-9.4-9.4-24.6-9.4-33.9 0l-136 136c-9.5 9.4-9.5 24.6-.1 34z"></path></svg>')
         {
             $('.page-n').each(function(){
                     if($(this).data("index") == lastPageData){
                         setTimeout(() => {
                             $(this).addClass('fade-in');
                             setTimeout(() => {
                                 $(this).css('display', 'block');
                                 $(this).removeClass('fade-in');
                             }, 1000);
                         }, 500);
                     }
                 });
      }
     }
});
$(document).ready(function(){
    var blockedPage;
    $('.page-n').each(function(){
        if($(this).css('display') == 'block'){
            blockedPage = $(this);            
        }
    });
    console.log(blockedPage.data());
    if(blockedPage.data("index") == 1){
        $('.page-link').each(function(){
            if($(this).data("index") =='<svg aria-hidden="true" width="8" focusable="false" data-prefix="fas" data-icon="angle-left" class="svg-inline--fa fa-angle-left fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"> <path fill="currentColor" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path></svg>'){
                $(this).parent().css("display" , "block");
                console.log('hello');
            }
            if($(this).data("index") =='<svg aria-hidden="true" width="12" focusable="false" data-prefix="fas" data-icon="angle-double-left" class="svg-inline--fa fa-angle-double-left fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M223.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L319.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L393.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34zm-192 34l136 136c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9L127.9 256l96.4-96.4c9.4-9.4 9.4-24.6 0-33.9L201.7 103c-9.4-9.4-24.6-9.4-33.9 0l-136 136c-9.5 9.4-9.5 24.6-.1 34z"></path></svg>'){
                $(this).parent().css("display" , "block");
            }
        });
    }
    if(blockedPage.data("index") == 3){
        $('.page-link').each(function(){
            if($(this).data("index") == '<svg aria-hidden="true" width="8" focusable="false" data-prefix="fas" data-icon="angle-left" class="svg-inline--fa fa-angle-left fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"> <path fill="currentColor" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path></svg>'){
                $(this).parent().css("display" , "none");
                console.log('hello');
            }
            if($(this).data("index") == '<svg aria-hidden="true" width="12" focusable="false" data-prefix="fas" data-icon="angle-double-left" class="svg-inline--fa fa-angle-double-left fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M223.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L319.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L393.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34zm-192 34l136 136c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9L127.9 256l96.4-96.4c9.4-9.4 9.4-24.6 0-33.9L201.7 103c-9.4-9.4-24.6-9.4-33.9 0l-136 136c-9.5 9.4-9.5 24.6-.1 34z"></path></svg>'){
                $(this).parent().css("display" , "none");
            }
        });
    }
});