function ageInDays(){
    var birthYear = prompt("What year you were born");
    var ageInDayss =  (2022-birthYear)*365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days ');
    // h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}


function reset(){
    document.getElementById('flex-box-result').remove();
}

