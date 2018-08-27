$(function(){
    $('#button_close_1').click(function () {
        $('#block_1_1').toggleClass('block_active');
        $("#block_1_1").load("old.php");
    });
    $('#button_close_2').click(function () {
        $('#block_2_2').toggleClass('block_active');
        $("#block_2_2").load("old.php");
    });
    $('#button_close_3').click(function () {
        $('#block_3_3').toggleClass('block_active');
        $("#block_3_3").load("old.php");
    });
    $('#button_close_4').click(function () {
        $('#block_4_4').toggleClass('block_active');
        $("#block_4_4").load("old.php");
    });
    $('#button_close_5').click(function () {
        $('#block_5_5').toggleClass('block_active');
        $("#block_5_5").load("old.php");
    });
});