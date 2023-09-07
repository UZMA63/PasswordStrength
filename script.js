$(".password_validation").on("focus",function(){
    $(".password_required").slideDown();
});

$(".password_validation").on("blur",function(){
    $(".password_required").slideUp();
});
$(".password_validation").on("keyup",function(){
    passValue = $(this).val();

    if(passValue.match(/[a-z]/g)){
        $(".lowercase").addClass("active");
    }else{
        $(".lowercase").removeClass("active");
    }

    if(passValue.match(/[A-Z]/g)){
        $(".capital").addClass("active");
    }else{
        $(".capital").removeClass("active");
    }

    if(passValue.match(/[0-9]/g)){
        $(".number").addClass("active");
    }else{
        $(".number").removeClass("active");

    }
    
    if(passValue.match(/[!@#$%^&*]/g)){
        $(".special_character").addClass("active");
    }else{
        $(".special_character").removeClass("active");

    }

    if(passValue.length == 8 || passValue.length > 8){
        $(".least").addClass("active");
    }else{
        $(".least").removeClass("active");
    }

    $(".password_required ul li").each(function(index,el){
     if(!$(this).hasClass("active")){
        $(".input_submit").removeClass("active");
     }else{
        $(".input_submit").addClass("active");
     }
    })
});