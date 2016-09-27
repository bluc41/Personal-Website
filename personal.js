$(function() {

    var dic = {"strokes": "#utcod", "cage":"#cigday", "head":"#waves"};
    
    $("#strokes").on('click', whenclicked);
    $("#cage").on('click', whenclicked);

    $("#head").on('click', whenclicked);

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
