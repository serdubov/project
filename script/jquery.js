$(document).ready(function(){
    $('#block_1').click(function () {
        $('#block_1_1').toggleClass('block_active');
        $("#block_1_1").load("page.php"), 900;
    });
    $('#block_2').click(function () {
        $('#block_2_2').toggleClass('block_active');
        $("#block_2_2").load("design.php"), 900;
    });
    $('#block_3').click(function () {
        $('#block_3_3').toggleClass('block_active');
        $("#block_3_3").load("projects.php"), 900;
    });
    $('#block_4').click(function () {
        $('#block_4_4').toggleClass('block_active');
        $("#block_4_4").load("jobs.php"), 900;
    });
    $('#block_5').click(function () {
        $('#block_5_5').toggleClass('block_active');
        $("#block_5_5").load("feedback.php"), 900;
    });
});
