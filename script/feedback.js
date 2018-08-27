$(document).ready(function(){
    $(".brif-input").focus(function() {
        var num_active = $(this).index(".brif-input");
        var label_active = document.getElementsByClassName("brif-label")[num_active];
        console.log(label_active);
        var input_active = document.getElementsByClassName("brif-input")[num_active];
        $(label_active).css({
            'color':'#ff7800',
            'font-size':'12px'
        });
        $(input_active).css({
            'top':'0',
            // 'border-bottom':'1px solid #2d82cc'
        });
    })
    $(".brif-input").focusout(function() {
        var num_active = $(this).index(".brif-input");
        var label_active = document.getElementsByClassName("brif-label")[num_active];
        if($(this).val() == ''){
            $(label_active).css({
                'color':'#262626',
                'font-size':'16px'
            }); 
            $(this).css({
                'top':'-30px',
                // 'border-bottom':'1px solid #2d82cc'
            });  
        }else{
            $(label_active).css({
                'color':'#262626',
                'font-size':'16px'
            }); 
        }
    })

    // $(".brif-input").hover(function() {
    //     $(".brif-input").css({
    //         // 'border-bottom':'1px solid #4a4a4a;'
    //     });
    // })
});
