//document.body.onload = addDivs;

//creates container div and adds id "grid"
var cDiv = document.createElement('div');
cDiv.id = 'grid';


//Append inner to container 'x' times
function addDivs() {
    
    for (var x = 0; x<16; x++) {
        var iDiv = document.createElement('div');
        iDiv.className = 'block';
        //iDiv.innerHTML = 'Hi';
        console.log(x);
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        iDiv.style.backgroundColor = "#" + randomColor;
        cDiv.appendChild(iDiv);

        
    }
}

addDivs();

document.getElementById('temp').appendChild(cDiv);

