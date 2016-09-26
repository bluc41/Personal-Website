$(function() {

    
    $("#strokes").on('click', function() {
        if ($("#utcod")[0].paused) {
            $("#utcod")[0].play();
        } else {
            $("#utcod")[0].pause();
        }
    });

    $("#cage").on('click', function() {
        if ($("#cigday")[0].paused) {
            $("#cigday")[0].play();
        } else {
            $("#cigday")[0].pause();
        }
    });

    $("#head").on('click', function() {
        if ($("#waves")[0].paused) {
            $("#waves")[0].play();
        } else {
            $("#waves")[0].pause();
        }
    });




    
    
});
