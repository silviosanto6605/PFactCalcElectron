function scomposizione(){

    var N = document.getElementById("number").value;
    var fattore = N.toString()+"=1"
    var d = 2;

    while (N>=d){
        if ((N%d)==0){
            
            fattore = fattore.toString()+"*"+d.toString();
            N = N/d;


        }
        else{

            d = d+1;


        }

    }
    document.getElementById("result").innerHTML = fattore;

}