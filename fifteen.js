var fifteenOrder = [1,2,3,4,5,6,7,8,9,10,12,15,13,14,11,0];
//15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,
//[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0];

function init(){
	var i, div, td;
	for(i=0;i<fifteenOrder.length - 1; i++) {
		div = document.createElement('div');
	    //div.className = "tile";
		//div.style.backgroundColor = 'yellow';
        div.innerHTML=fifteenOrder[i];
	    td = document.getElementById('t'+i);
		td.appendChild(div);
	}	
}

function showGame() {
	document.getElementById("fift").style.display = "block";
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
		
    return row1==row2 && (column1==column2+1 ||
        column2==column1+1) || column1==column2 &&
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

	
	//eight = document.getElementById('t' + place);
	//zero = document.getElementById('t15');
	//baby = eight.firstChild;
	//eight.removeChild(baby);
	//zero.appendChild(baby);
}
  
