$(function() {

    var dic = {"strokes": "#utcod", "cage":"#cigday", "headtext":"#waves"};
    
    $("#strokes").on('click', whenclicked);
    $("#cage").on('click', whenclicked);

    $("#headtext").on('click', whenclicked);

    function whenclicked() {
        var id = this.id;

        if ($(dic[id])[0].paused) {
            $('audio').each(function() {
            if (this.id != id) {
                this.pause();
            }
        });
            $(dic[id])[0].play();
        } else {
            $(dic[id])[0].pause();
        }
        
    }



    





    
    
});
