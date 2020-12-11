

class municipal {
    constructor(city, imageUrl, cases, active, deaths, recovered, phone) {
        this.city = city;
        this.imageUrl = imageUrl;
        this.cases = cases;
        this.active = active;
        this.deaths = deaths;
        this.recovered = recovered;
        this.phone = phone;
    }
}

var municipalityList;

populateMunicipality();

var allMunicipality = '';

for (i = 0; i < municipalityList.length; i++) {
    allMunicipality += createCard(
        i,
        municipalityList[i].city,
        municipalityList[i].imageUrl,
        municipalityList[i].cases,
        municipalityList[i].active,
        municipalityList[i].deaths,
        municipalityList[i].recovered,
        municipalityList[i].phone,
    );
}

// municipalityList.forEach(municipality => {
//     allMunicipality += createCard(
//         municipality.city,
//         municipality.imageUrl,
//         municipality.cases,
//         municipality.active,
//         municipality.deaths,
//         municipality.recovered);
// });

console.log(createCard());



function populateMunicipality() {
    municipalityList = [

        new municipal(
            city = 'Angono',
            imageUrl = 'Angono.jpg',
            cases = '783',
            active = '18',
            deaths = '29',
            recovered = '736',
            phone = '0956-154-5954'

        ),
        new municipal(
            city = 'Antipolo',
            imageUrl = 'Antipolo.jpg',
            cases = '3631',
            active = '77',
            deaths = '94',
            recovered = '3460',
            phone = '(8)651-7800'
        ),
        new municipal(
            city = 'Baras',
            imageUrl = 'Baras.jpg',
            cases = '219',
            active = '9',
            deaths = '8',
            recovered = '202',
            phone = '(8)653-3909'
        ),
        new municipal(
            city = 'Binangonan',
            imageUrl = 'Binangonan.jpg',
            cases = '1125',
            active = '44',
            deaths = '48',
            recovered = '1030',
            phone = '(8)652-5413'
        ),
        new municipal(
            city = 'Cainta',
            imageUrl = 'Cainta.jpg',
            cases = '1987',
            active = '68',
            deaths = '71',
            recovered = '1848',
            phone = '0961-260-7696'
        ),
        new municipal(
            city = 'Cardona',
            imageUrl = 'Cardona.jpg',
            cases = '181',
            active = '3',
            deaths = '7',
            recovered = '171',
            phone = '(7)954-9728'
        ),
        new municipal(
            city = 'Jala-Jala',
            imageUrl = 'Jalajala.jpg',
            cases = '30',
            active = '0',
            deaths = '2',
            recovered = '28',
            phone = '0917-896-8970'
        ),
        new municipal(
            city = 'Montalban',
            imageUrl = 'Montalban.jpg',
            cases = '114',
            active = '34',
            deaths = '47',
            recovered = '1033',
            phone = '(8)531-6106'
        ),
        new municipal(
            city = 'Morong',
            imageUrl = 'Morong.jpg',
            cases = '216',
            active = '4',
            deaths = '5',
            recovered = '207',
            phone = '0926-691-4281'
        ),
        new municipal(
            city = 'Pililla',
            imageUrl = 'Pililla.jpg',
            cases = '99',
            active = '4',
            deaths = '7',
            recovered = '88',
            phone = '0917-525-1646'
        ),
        new municipal(
            city = 'San Mateo',
            imageUrl = 'San Mateo.jpg',
            cases = '1001',
            active = '42',
            deaths = '43',
            recovered = '916',
            phone = '0917-888-8247'
        ),
        new municipal(
            city = 'Taytay',
            imageUrl = 'Taytay.jpg',
            cases = '1913',
            active = '66',
            deaths = '76',
            recovered = '1771',
            phone = '0917-165-9009'
        ),
        new municipal(
            city = 'Tanay',
            imageUrl = 'Tanay.jpg',
            cases = '144',
            active = '17',
            deaths = '8',
            recovered = '119',
            phone = '(8)652-5413'
        ),
        new municipal(
            city = 'Teresa',
            imageUrl = 'Teresa.jpg',
            cases = '253',
            active = '4',
            deaths = '3',
            recovered = '246',
            phone = '(8)250-6800'
        ),

    ];
}

function search() {
    var input, filter, card, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    li = document.getElementsByClassName("card-title");
    card = document.getElementsByClassName("card");
    for (i = 0; i < card.length; i++) {
        console.log(li[i].innerHTML);
        a = li[i];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            card[i].style.display = "";
        } else {
            card[i].style.display = "none";
        }
    }
}



function createCard(index, city, imageUrl, cases, active, deaths, recovered, phone) {
    var item =
        '<div class="col-sm-6 col-md-4 card col-lg-3 mt-4 card-list px-0">' +
        '<div class="flip-box">' +
        '<div class="flip-box-inner">' +
        '<div class="flip-box-front">' +
        '<img src="assets/images/' + imageUrl + '" class="card-img-top img-fluid w-100 img-max-h" alt="...">' +
        '</div>' +
        '<div class="flip-box-back pt-3">' +
        '<h4 class="text-light">' + city + '</h4>' +
        '<p class="text-light">Provincial Health Office <br> <i class="fa fa-phone-alt"></i>  ' + phone + '</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="card-body">' +
        '<h5 class="card-title h-dark">' + city + '</h5>' +
        '<div class="card-text">' +
        '<div class="row">' +
        '<div class ="col text-data">' + cases + '</div>' +
        '<div class ="col text-data">' + active + '</div>' +
        '</div>' +
        '<div class="row">' +
        '<div class ="col text-small">cases</div>' +
        '<div class ="col text-small">active</div>' +
        '</div>' +
        '<div class="row">' +
        '<div class ="col text-data">' + deaths + '</div>' +
        '<div class ="col text-data">' + recovered + '</div>' +
        '</div>' +
        '<div class="row">' +
        '<div class ="col text-small">deaths</div>' +
        '<div class ="col text-small">recovered</div>' +
        '</div>' +
        '</div>' +
        '<div class="float-right">' +
        '<a onclick="setModalData(' + index + ')" data-toggle="modal" data-target="#MunicipalModal" class="btn btn-light btn-sm mt-4">View more</a>' +
        '</div>' +
        '</div>' +
        '</div>';
    return item;
}

function setModalData(index) {
    console.log("a");
    document.getElementById("MunicipalModalLabel").innerHTML = municipalityList[index].city;
    var ctxP = document.getElementById("pieChart").getContext('2d');
    var myPieChart = new Chart(ctxP, {
        type: 'pie',
        data: {
            labels: ["Active", "Death", "Recovered"],
            datasets: [{
                data: [municipalityList[index].active, municipalityList[index].deaths, municipalityList[index].recovered],
                backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
                hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870"]
            }]
        },
        options: {
            responsive: true
        }
    });
}

document.getElementById("Municipalities").innerHTML = allMunicipality;



var isDarkMode = false;

toggleDarkMode = () => {

    isDarkMode = !isDarkMode;
    if (isDarkMode == false) {
        console.log("switch is off");
        document.getElementById("bg-body").style.backgroundColor = "#FFFAFA";
        document.getElementById("mainNav").style.backgroundColor = "#6B474C";
        document.getElementById("footer").style.backgroundColor = "#6B474C";
        document.getElementById("modal-dark").style.backgroundColor = "#FFF";
        document.getElementById("MunicipalModalLabel").style.color = "#6B474C";
        document.getElementById("close-color").style.color = "#808080";

        var elements = document.getElementsByClassName('card'); // get all elements
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor = "#FFF";
        }

        var c = document.getElementsByClassName('col'); // get all elements
        for (var i = 0; i < c.length; i++) {
            c[i].style.color = "#6B474C";
        }

    } else {
        console.log("switch is on");
        document.getElementById("bg-body").style.backgroundColor = "#525252";
        document.getElementById("mainNav").style.backgroundColor = "#313131";
        document.getElementById("footer").style.backgroundColor = "#313131";
        document.getElementById("modal-dark").style.backgroundColor = "#313131";
        document.getElementById("MunicipalModalLabel").style.color = "#BFBFBF";
        document.getElementById("close-color").style.color = "#BFBFBF";

        var elements = document.getElementsByClassName('card'); // get all elements
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor = "#414141";
        }

        var c = document.getElementsByClassName('col'); // get all elements
        for (var i = 0; i < c.length; i++) {
            c[i].style.color = "#BFBFBF";
        }

    }
}