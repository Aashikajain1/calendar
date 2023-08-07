var dt = new Date();
function cal() {
    document.getElementById("tod").innerHTML = dt.toDateString();
    dt.setDate(1);
    var day = dt.getDay();
    console.log(dt.getDay());
    var enddt = new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDate();
    var prdt = new Date(dt.getFullYear(), dt.getMonth(), 0).getDate();

    var month = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY",
        "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
    document.getElementById("mnth").innerHTML = month[dt.getMonth()];
    var today = new Date();
    console.log(today);
    var d = "";
    for (x = day; x > 0; x--) {
        d += "<div class='pdt'>" + (prdt - x + 1) + "</div>";
    }
    for (i = 1; i <= enddt; i++) {
        if (i == today.getDate() && dt.getMonth() == today.getMonth()) {
            d += "<div class='tdy'>" + i + "</div>";
        }
        else {
            d += "<div>" + i + "</div>";
        }

    }
    document.getElementsByClassName("dates")[0].innerHTML = d;
}
function mvdt(arg) {
    if (arg == 'p') {
        dt.setMonth(dt.getMonth() - 1);
    }
    else if (arg == 'n') {
        dt.setMonth(dt.getMonth() + 1);
    }
    cal();
}
