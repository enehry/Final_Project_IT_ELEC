
var isDarkMode = false;

toggleDarkMode = () => {

    isDarkMode = !isDarkMode;
    if (isDarkMode == false) {
        console.log("switch is off");
        document.getElementById("bg-body").style.backgroundColor = "#FFFAFA";
        document.getElementById("mainNav").style.backgroundColor = "#6B474C";
        document.getElementById("footer").style.backgroundColor = "#6B474C";
        document.getElementById("ul1").style.color = "#6B474C";
        document.getElementById("ul2").style.color = "#6B474C";

        var h2 = document.getElementsByTagName('h2'); // get all elements
        for (var i = 0; i < h2.length; i++) {
            h2[i].style.color = "#EB5569";
        }

        var p = document.getElementsByTagName('p'); // get all elements
        for (var i = 0; i < p.length; i++) {
            p[i].style.color = "#6B474C";
        }

    } else {
        console.log("switch is on");
        document.getElementById("bg-body").style.backgroundColor = "#525252";
        document.getElementById("mainNav").style.backgroundColor = "#313131";
        document.getElementById("footer").style.backgroundColor = "#313131";
        document.getElementById("ul1").style.color = "#BFBFBF";
        document.getElementById("ul2").style.color = "#BFBFBF";

        var h2 = document.getElementsByTagName('h2'); // get all elements
        for (var i = 0; i < h2.length; i++) {
            h2[i].style.color = "#BFBFBF";
        }

        var p = document.getElementsByTagName('p'); // get all elements
        for (var i = 0; i < p.length; i++) {
            p[i].style.color = "#BFBFBF";
        }
    }
}