block_1 = false;
block_2 = false;
block_3 = false;
block_4 = false;
block_5 = false;

$(document).ready(function(){
    $('#block_1').click(function () {
        if(block_1 == false){
            $(this).toggleClass('block_active');
            $(this).removeClass("shad");
            $(this).removeClass("background-1");
            block_1 = true;
            console.log(block_1);
            $("#block_1").load("page.html");
        }
    });
    $('#button_close_1').click(function () {
        console.log(block_1);
        if(block_1 == true){
            $('#block_1').toggleClass('block_active');
            $('#block_1').addClass("shad");
            $('#block_1').addClass("background-1");
            $("#block_1").load("");
            block_1 = false;
        }
        // else{
        //     $(this).toggleClass('block_active');
        //     $(this).addClass("shad");
        //     $(this).addClass("background-1");
        //     block_1 =false;
        // }
        // $("#landing").click(function(){
        //     $(".cs-3").load("data-ajax/landing.php");
        //     elem_name=localStorage.setItem("elem_name", this.id);
        // });
    });
    $('#block_2').click(function () {
        if(block_2 == false){
            $(this).toggleClass('block_active');
            $(this).removeClass("shad");
            $(this).removeClass("background-2");
            block_2 = true;
        }else{
            $(this).toggleClass('block_active');
            $(this).addClass("shad");
            $(this).addClass("background-2");
            block_2 =false;
        }
    });
    $('#block_3').click(function () {
        if(block_3 == false){
            $(this).toggleClass('block_active');
            $(this).removeClass("shad");
            $(this).removeClass("background-3");
            block_3 = true;
        }else{
            $(this).toggleClass('block_active');
            $(this).addClass("shad");
            $(this).addClass("background-3");
            block_3 =false;
        }
    });
    $('#block_4').click(function () {
        if(block_4 == false){
            $(this).toggleClass('block_active');
            $(this).removeClass("shad");
            $(this).removeClass("background-4");
            block_4 = true;
        }else{
            $(this).toggleClass('block_active');
            $(this).addClass("shad");
            $(this).addClass("background-4");
            block_4 =false;
        }
    });
    $('#block_5').click(function () {
        if(block_5 == false){
            $(this).toggleClass('block_active');
            $(this).removeClass("shad");
            $(this).removeClass("background-5");
            block_5 = true;
        }else{
            $(this).toggleClass('block_active');
            $(this).addClass("shad");
            $(this).addClass("background-5");
            block_5 =false;
        }
    });
});
