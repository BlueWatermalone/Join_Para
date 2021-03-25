function getPara1() {
    var inputs1 = [];
    for(var i = 1 ; i <=5 ; i++) {
        inputs1.push(document.getElementById("para1_" + i).value);
    }
    document.getElementById("showPara1").innerHTML = inputs1.join(". ");
}

function getPara2() {
    var inputs2 = [];
    for(var i = 1 ; i <=5 ; i++) {
        inputs2.push(document.getElementById("para2_" + i).value);
    }
    document.getElementById("showPara2").innerHTML = inputs2.join(". ");
}