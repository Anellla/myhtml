var fifteenOrder = [1,2,3,4,5,6,7,8,9,10,12,15,13,14,11,0];
//15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,


function init(){

	var i, div, td;
	for (i=0; i < fifteenOrder.length - 1; i++) {
		div = document.createElement('div');
        div.innerHTML = fifteenOrder[i];
	    td = document.getElementById('t'+ i);
		td.appendChild(div);
		

	}	
document.body.addEventListener("keydown", theKeyIsPressed);
}

var counter = 0;
function moveKey (e) {
	//console.log("key pressed" + (counter++), e);
}

function theKeyIsPressed (e) {
	console.log("moved" + (counter++), e);
	if (e.key =='ArrowLeft')
	{
        console.log("key pressed left");
        LEFT();
	}
    if (e.key =='ArrowRight')
	{
        console.log("key pressed right");
        RIGHT();
	}
	if (e.key =='ArrowUp')
	{
        console.log("key pressed up");
        UP();
	}
	if (e.key =='ArrowDown')
	{
        console.log("key pressed down");
        DOWN();
	}
}

function LEFT () {
    var zero = fifteenOrder.indexOf(0);
    var zeroPlace = ( "t" + zero);
    var rowZero = Math.floor(zero / 4); 
    var columnZero = Math.floor(zero % 4);
    console.log ("Row is" + " " + rowZero , "Column is" + " " + columnZero);
    if (columnZero == 0)
    {
    	console.log ("At the edge of left border");
    }

    else	
    {   
    	var nearCell = zero - 1;
    	moveCellsZero (zero, nearCell);
    	fifteenOrder[zero] = fifteenOrder[nearCell];
	    fifteenOrder[nearCell] = 0;
    	console.log ("Swapping");
    }
}

function RIGHT () {
    var zero = fifteenOrder.indexOf(0);
    var zeroPlace = ( "t" + zero);
    var rowZero = Math.floor(zero / 4); 
    var columnZero = Math.floor(zero % 4);
    console.log ("Row is" + " " + rowZero , "Column is" + " " + columnZero);
    if (columnZero == 3)
    {
    	console.log ("At the edge of right border");
    }

    else	
    {     
    	var nearCell = zero + 1;
    	moveCellsZero (zero, nearCell);
    	fifteenOrder[zero] = fifteenOrder[nearCell];
	    fifteenOrder[nearCell] = 0;
    	console.log ("Swapping");
    }
}

function UP () {
    var zero = fifteenOrder.indexOf(0);
    var zeroPlace = ( "t" + zero);
    var rowZero = Math.floor(zero / 4); 
    var columnZero = Math.floor(zero % 4);
    console.log ("Row is" + " " + rowZero , "Column is" + " " + columnZero);
    if (rowZero == 0)
    {
    	console.log ("At the edge of upper border");
    }

    else	
    {   
    	var nearCell = zero - 4;
    	moveCellsZero (zero, nearCell);
    	fifteenOrder[zero] = fifteenOrder[nearCell];
	    fifteenOrder[nearCell] = 0;
    	console.log ("Swapping");
    }
}

function DOWN () {
    var zero = fifteenOrder.indexOf(0);
    var zeroPlace = ( "t" + zero);
    var rowZero = Math.floor(zero / 4); 
    var columnZero = Math.floor(zero % 4);
    console.log ("Row is" + " " + rowZero , "Column is" + " " + columnZero);
    if (rowZero  == 3)
    {
    	console.log ("At the edge of bottom border");
    }

    else	
    {   
    	var nearCell = zero + 4;
    	moveCellsZero (zero, nearCell);
    	fifteenOrder[zero] = fifteenOrder[nearCell];
	    fifteenOrder[nearCell] = 0;
    	console.log ("Swapping");
    }
}

function moveCellsZero (from,to) {
	
	zero = document.getElementById('t' + from);
	nearElement = document.getElementById('t' + to);
	baby = nearElement.firstChild;
	nearElement.removeChild(baby);
	zero.appendChild(baby);
	
}


function showGame() {
  
    var blockGame = document.getElementById("fift");
    var blockForm = document.getElementById("names");
    var nam = document.getElementById("name");
    var pass = document.getElementById("password");
   
        if (nam.value == "Lena" && pass.value == "1" )
        	// if (nam.value == "Lena" && pass.value == "1" )
        {
            fift.style.display = "block";
	        names.style.display = "none";
        }
        else
        {
            alert("wrong name and passsword!!!")
        }
}

function moveCells(from,to) {
	
	
	eight = document.getElementById('t' + from);
	zero = document.getElementById('t' + to);
	baby = eight.firstChild;
	eight.removeChild(baby);
	zero.appendChild(baby);
	
}

function areNeighbors(n1, n2) {
   var row1 = Math.floor(n1 / 4),
        column1 = n1 % 4,
        row2 = Math.floor(n2 / 4),
        column2 = n2 % 4;
		
    return row1==row2 && 
    (column1==column2+1 || column2==column1+1) || 
    column1==column2 &&
    (row1==row2+1 || row2==row1+1);	
	
}

function win () {
	var counter = 0;
	for (i=0; i<15; i++)
	{
		if ( fifteenOrder[i] != 0 && fifteenOrder[i] < fifteenOrder[i + 1])
		 counter++;	
	}
	if (counter == 14)
		alert('you win');
}

function move (place) {
	
	if (fifteenOrder[place]==0) return;
	var emptyCell = fifteenOrder.indexOf(0);
	if (!areNeighbors(place, emptyCell)) return;
	moveCells(place, emptyCell);
	fifteenOrder[emptyCell] = fifteenOrder[place];
	fifteenOrder[place] = 0;
	win();
  }