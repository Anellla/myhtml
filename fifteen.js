var fifteenOrder = [1,2,3,4,5,6,7,8,9,10,12,15,13,14,11,0];
//15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,
//[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0];

function init(){

	var i, div, td;
	for (i=0; i < fifteenOrder.length - 1; i++) {
		div = document.createElement('div');
	    //div.className = "tile";
		//div.style.backgroundColor = 'yellow';
        div.innerHTML = fifteenOrder[i];
	    td = document.getElementById('t'+ i);
		td.appendChild(div);
		

	}	
// var game = document.getElementById("fift")
document.body.addEventListener("keydown", theKeyIsPressed);
}

// function checkKeycode(event) {
// var keycode;
// if(!event) var 
// 	event = window.event;

// if (event.keyCode) 
//     keycode = event.keyCode; // IE

// else if(event.which) 
//     keycode = event.which; // all browsers

// return keycode;

// }
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

}


function LEFT () {
    var zero = fifteenOrder.indexOf(0);
    var zeroPlace = ( "t" + zero);
    var rowZero = Math.floor(zero / 4); 
    var columnZero = Math.floor(zero % 4);
    console.log ("Row is" + " " + rowZero , "Column is" + " " + columnZero);
    if (columnZero != 0)
    {
    	moveCellsZero (zero, zero-1);
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

// function LEFT() {
// 	var zero = fifteenOrder.indexOf(0);
//     var zeroPlace = ( "t" + zero);
//     var rowZero = zero / 4; 
//     var columnZero = zero % 4;
//     console.log("rowZero , columnZero ");
// // }

    // if ()
    // var nearCell = 
















// document.onkeydown = function checkKeycode(event)

// {

//     var keycode;

//     if(!event) var event = window.event;

//     if (event.keyCode) keycode = event.keyCode; // IE

//     else if(event.which) keycode = event.which; // all browsers

//     alert("keycode: "+keycode);
// }

// function findZero() {

// 	// for (i=0; i<15; i++)
// 	// {
// 	// 	if ( fifteenOrder[i] == 0 )

// 	var zero = fifteenOrder.indexOf(0);
// 	var zeroPlace = ( "t" + zero);
// 	//return zeroPlace;
// 		//var zeroPlase = ("t" + i) ;	
// 	console.log("zero returned" , zeroPlace );
	
	
// 	}
	


// function getKeyCode
// {



// var LEFT = document.getElementById(findZero())
// else if(event.which) keycode = event.which;
// if 
// if ()
// if(!event) var event = window.event;
// LEFT.addEventListener()
// var DOWN
// var RIGHT
// var UP
// window.addEventListener("keydown", function (event) {

// }

function showGame() {
  
    var blockGame = document.getElementById("fift");
    var blockForm = document.getElementById("names");
    var nam = document.getElementById("name");
    var pass = document.getElementById("password");
   
        if (nam.value == "" && pass.value == "" )
        	// if (nam.value == "Lena" && pass.value == "1" )
        {
            fift.style.display = "block";
	        names.style.display = "none";
        }
        else
        {
            alert("wrong name and passsword!!!")
        }



    // var blockGame = document.getElementById("fift");
    // var blockForm = document.getElementById("names");
    // var nam = document.getElementById("name").value;
    // var pass = document.getElementById("password").value;
   
    //     if (nam == "Lena" && pass == "1" )
    //     {
    //         fift.style.display = "block";
	   //      names.style.display = "none";
    //     }
    //     else
    //     {
    //         alert("wrong name and passsword!!!")
    //     }


 
    //   var blockGame = document.getElementById("fift");
    //   var blockForm = document.getElementById("names");
    //   fift.style.display = "block";
	//   names.style.display = "none";


	//fift.style.display = "block";
	//names.style.display = "none";
	//}
    // else
    //  {
    //  	alert(wrong!);
    //  }
	//if (nam.name = Lena && pass.password = Lena)
	//{
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

	
	//eight = document.getElementById('t' + place);
	//zero = document.getElementById('t15');
	//baby = eight.firstChild;
	//eight.removeChild(baby);
	//zero.appendChild(baby);
}
  
// function LEFT  {

// 	for (i=0; i<15; i++)
// 	{
// 		if (fifteenOrder[i] == 0 )
// 		var zero = document.getElementById("t" + i);	

// var checkLeft = document.getElementById("")

// }

// function RIGHT{


// }

// function UP{


// }

// function DOWN {

// }