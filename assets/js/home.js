var isDarkMode = false;

toggleDarkMode = () => {

    isDarkMode = !isDarkMode;
    if (isDarkMode == false) {
        console.log("switch is off");
        document.getElementById("bg-body").style.backgroundColor = "#FFFAFA";
        document.getElementById("mainNav").style.backgroundColor = "#6B474C";
        document.getElementById("footer").style.backgroundColor = "#6B474C";
        document.getElementById("text-banner").style.color = "#6B474C";

        var elements = document.getElementsByClassName('card'); // get all elements
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor = "#FFF";
        }

        var p = document.getElementsByTagName("p");
        for (var i = 0; i < p.length; i++) {
            p[i].style.color = "#6B474C";
        }

        var p = document.getElementsByTagName("p");
        for (var i = 0; i < p.length; i++) {
            p[i].style.color = "#6B474C";
        }
        var h = document.getElementsByClassName("h-dark");
        for (var i = 0; i < h.length; i++) {
            h[i].style.color = "#B84252";
        }

    } else {
        console.log("switch is on");
        document.getElementById("bg-body").style.backgroundColor = "#525252";
        document.getElementById("mainNav").style.backgroundColor = "#313131";
        document.getElementById("footer").style.backgroundColor = "#313131";
        document.getElementById("text-banner").style.color = "#BFBFBF";


        var elements = document.getElementsByClassName('card'); // get all elements
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor = "#414141";
        }

        var p = document.getElementsByTagName("p");
        for (var i = 0; i < p.length; i++) {
            p[i].style.color = "#878787";
        }

        var h = document.getElementsByClassName("h-dark");
        for (var i = 0; i < h.length; i++) {
            h[i].style.color = "#BFBFBF";
        }
    }
}