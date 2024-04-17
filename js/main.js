$(document).ready(function(){
    $(".inner p").mousemove(function(e){
        parallaxIt(e, $(".inner p"), -60);
    });

    function parallaxIt(e, target, movement) {
        var $this = target;
        var relX = e.pageX - $this.offset().left;
        var relY = e.pageY - $this.offset().top;
        var mouseX = relX / $this.width() - 0.5;
        var mouseY = relY / $this.height() - 0.5;

        $this.css({
            "transform": "rotateX(" + (mouseY * movement) + "deg) rotateY(" + (mouseX * movement) + "deg)",
            "transform-origin": (50 + mouseX * 30) + "% " + (50 + mouseY * 30) + "%"
        });
    }

    var container = $(".note-icons");
    var containerWidth = $(window).width();
    var containerHeight = $(window).height();
    var noteDelay = 30;
    var fadeOutDuration = 1800;
    var numNotes = 10000;

    function createNote() {
        var note = $("<div class='note-icon'></div>");
        var posX = Math.random() * containerWidth;
        var posY = -20;
        var targetX = posX + Math.random() * 400 - 50;
        var targetY = containerHeight + 50;

        note.css({
            left: posX + "px",
            top: posY + "px"
        });
        
        var randomClass = Math.random() < 0.5 ? "note-icon1" : "note-icon2";
        note.addClass(randomClass);
        container.append(note);

        note.animate({
            left: targetX,
            top: targetY
        }, {
            duration: fadeOutDuration,
            easing: "linear",
            step: function(now, fx) {
                var opacity = 1 - (now - posY) / (targetY - posY);
                $(this).css("opacity", opacity);
            },
            complete: function() {
                $(this).remove();
            }
        });
    }
    setInterval(createNote, noteDelay);

    var aboutHeight = $('.about').outerHeight(true);
    $('.inner').css('height', aboutHeight + 'px');

    document.getElementById("cd-item1").addEventListener("click", function() {
        window.open("https://www.youtube.com/watch?v=-JwH3Jgfyts", "_blank");
    });
    document.getElementById("cd-item2").addEventListener("click", function() {
        window.open("https://www.youtube.com/watch?v=Nr7R3mDeJsk", "_blank");
    });
    document.getElementById("cd-item3").addEventListener("click", function() {
        window.open("https://www.youtube.com/watch?v=yyX4UXE73_Q", "_blank");
    });


});