function scomposizione() {

    var N = document.getElementById("number").value;
    if (isNaN(N) || (N < 0)) {
        document.getElementById("result").innerHTML = "Inserisci un numero valido :(";

    } else {
        var fattore = N.toString() + "=1"
        var d = 2;

        while (N >= d) {
            if ((N % d) == 0) {

                fattore = fattore.toString() + "*" + d.toString();
                N = N / d;


            } else {

                d = d + 1;


            }

        }
        document.getElementById("result").innerHTML = fattore;
    }
}