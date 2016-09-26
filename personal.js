$(function() {

    function startPlaying() {
        $("#utcod")[0].play();
    }


    function stopPlaying() {
        $("#utcod")[0].pause()
    }

    
    $("#strokes").on('click', function() {
        if ($("#waves")[0].paused) {
            $("#waves")[0].play();
        } else {
            $("#waves")[0].pause();
        }
    });


    
    
});
