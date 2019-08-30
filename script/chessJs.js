
let nGame = false;
let restart = false;

let turn = 'white' ;
let pElem;
let playerMove = false;

let deadPieces = [];

let history ;
history.whiterook1 = false;
history.whiterook2 = false;
history.whiteking1 = false;
history.blackrook1 = false;
history.blackrook2 = false;
history.blackking1 = false;

//function to start a new chess game
function startChess(src) {
	
	if(!nGame) {
		nGame = true;
		turn = 'white';
		src.innerHTML = "Stop" ;
		addSquares(src);
		addPieces(src);
	}
	
	else {
		nGame = false;
		playerMove = false;
		pElem  = null;
		src.innerHTML = "Start";
		removeBoard();
		removeLeftPieces();		
	}
}

function removeLeftPieces() {
	let target = document.getElementById("dead");
	while(target.firstChild) {
		target.removeChild(target.firstChild);
	}
}

function addSquares() {
	let table = document.getElementById('gameBoard');
	let tabBody = document.createElement("tbody");
	tabBody.setAttribute("id","chessBody");
	for(let i=1;i<=8;i++) {
		let tabrow = document.createElement("tr");
		tabrow.setAttribute("class","line");
		for(let j=1;j<=8;j++) {
			let td = document.createElement("td");
			td.setAttribute("xpos",j);
			td.setAttribute("ypos",i);
			td.setAttribute("id",""+j+i);
			td.setAttribute("onclick","moveToThis(event,this)");
			let scolor;
			if(((i+j)%2)==0) {
					scolor="white";
			}
			else {			
					scolor="black";
			}
			td.setAttribute("class",scolor);
			tabrow.appendChild(td);
		}
		tabBody.appendChild(tabrow);
	}
	table.appendChild(tabBody);	
}

//function added all pieces of chess board
	function addPieces(src) {
	addPawn();
	addRook();
	addBishop();
	addKnight();
	addQueen();
	addKing();
}

// function creates and handles elements of pawn peices
function addPawn() {
		//black
	for(let i =1;i<=8;i++) {	
		let pawn = document.getElementById(""+i+2);
		let img = document.createElement("img");
		img.setAttribute("src","b_pawn.png");
		img.setAttribute("class","piece pawn black");
		img.setAttribute("onclick","moveElement(event,this)");
		img.setAttribute("id","pawn"+i);
		img.setAttribute("player","black");
		img.setAttribute("piece","pawn");
		pawn.appendChild(img);}
	
		//white
	for(let i =1;i<=8;i++) {	
		let pawn = document.getElementById(""+i+7);
		let img = document.createElement("img");
		img.setAttribute("src","w_pawn.png");
		img.setAttribute("class","piece pawn white");
		img.setAttribute("onclick","moveElement(event,this)");
		img.setAttribute("id","pawn"+i);
		img.setAttribute("player","white");
		img.setAttribute("piece","pawn");
		pawn.appendChild(img);
	}
}

// function creates and handles elements of rook peices
function addRook() {
	let array = [11,18,81,88];
	let target;

	//black
	for(let i in array) {
		target = document.getElementById(array[i]);
		let img = document.createElement("img");
		if(i%2==0) {
			img.setAttribute("src","b_rook.png");
			img.setAttribute("class","piece rook black");
			img.setAttribute("player","black");
		}

		//white
		else {
			img.setAttribute("src","w_rook.png");
			img.setAttribute("class","piece rook white");
			img.setAttribute("player","white");
		}
		img.setAttribute("onclick","moveElement(event,this)");
		img.setAttribute("piece","rook");
		img.setAttribute("id","rook"+(Math.floor(i/2)+1));
		target.appendChild(img);
	}
}

// function creates and handles elements of bishop peices
function addBishop() {
	let array = [31,38,61,68];
	let target;

	//black
	for(let i in array) {
		target = document.getElementById(array[i]);
		let img = document.createElement("img");
		if(i%2==0) {
			img.setAttribute("src","b_bishop.png");
			img.setAttribute("class","piece bishop black");
			img.setAttribute("player","black");
		}

		//white
		else {
			img.setAttribute("src","w_bishop.png");
			img.setAttribute("class","piece bishop white");
			img.setAttribute("player","white");
		}
		img.setAttribute("onclick","moveElement(event,this)");
		img.setAttribute("piece","bishop");
		img.setAttribute("id","bishop"+(Math.floor(i/2)+1));
		target.appendChild(img);
	}
}

// function creates and handles elements of knight peices
function addKnight() {
	let array = [21,28,71,78];
	let target;
	for(let i in array) {
		target = document.getElementById(array[i]);
		let img = document.createElement("img");

		//black
		if(i%2==0) {
			img.setAttribute("src","b_knight.png");
			img.setAttribute("class","piece knight black");
			img.setAttribute("player","black");
		}

		//white
		else {
			img.setAttribute("src","w_knight.png");
			img.setAttribute("class","piece knight white");
			img.setAttribute("player","white");
		}
		img.setAttribute("onclick","moveElement(event,this)");
		img.setAttribute("piece","knight");
		img.setAttribute("id","knight"+(Math.floor(i/2)+1));
		target.appendChild(img);
	}
}

	// function creates and handles elements of queen pieces
function addQueen() {
		let array = [41,48];
		let target;
		for(let i in array) {
		target = document.getElementById(array[i]);
		let img = document.createElement("img");

		//black 
		if(i%2==0) {
			img.setAttribute("src","b_queen.png");
			img.setAttribute("class","piece queen black");
			img.setAttribute("player","black");
		}

		//white
		else {
			img.setAttribute("src","w_queen.png");
			img.setAttribute("class","piece queen white");
			img.setAttribute("player","white");
		}
		img.setAttribute("onclick","moveElement(event,this)");
		img.setAttribute("piece","queen");
		img.setAttribute("id","queen"+(Math.floor(i/2)+1));
		target.appendChild(img);
	}
}

// function creates and handles element of king pieces
function addKing() {
		let array = [51,58];
		let target;
		for(let i in array) {
		target = document.getElementById(array[i]);
		let img = document.createElement("img");

		//black
		if(i%2==0) {
			img.setAttribute("src","b_king.png");
			img.setAttribute("class","piece king black");
			img.setAttribute("player","black");
		}

		//white
		else {
			img.setAttribute("src","w_king.png");
			img.setAttribute("class","piece king white");
			img.setAttribute("player","white");
		}
		img.setAttribute("onclick","moveElement(event,this)");
		img.setAttribute("piece","king");
		img.setAttribute("id","king"+(Math.floor(i/2)+1));
		target.appendChild(img);
	}
}
		//remove all elemements from chess board
function removeBoard() {
	let tbody = document.getElementById('chessBody');
	tbody.parentNode.removeChild(tbody);
}

//function to move element 
function moveElement(event, src) {
	if(!nGame && restart == true) {
		let rst = confirm("king has been killed you must restart");
		if(rst) {
			nGame = true;
			restart = false;
			startChess(document.getElementById('gameButton'));		
		}
		return;
	}
	if(src.getAttribute("player") != turn && !playerMove) {
		alert("Its "+ turn+   "'s move" );
		stopEvent(event);
		return;
	}
	if(playerMove && src==pElem) {		
		playerMove = false;
		pElem = null;
		stopEvent(event);
		return;
	}
	if(!playerMove) {
		stopEvent(event);
		pElem = src;
		playerMove = true;
	}
}

function stopEvent(event) {
	event = event || window.event;

	//avoid same event from being called.
	if(event.stopPropagation) 
		event.stopPropagation();

	//dont bubble to parent element
	else
		event.cancelBubble = true; 	
}

//	function deals with player movement
//checks for invalid moves and uses alert to display them
function moveToThis(event, src) {
	if(src.childNodes.length ==0) {
		if(valid(src)) {
			if(playerMove) {
				let pieceType = pElem.getAttribute("piece");
				src.appendChild(pElem);
				let to= Number(src.getAttribute('id'));
				if(pieceType == 'pawn' && ( to%10 == 1  || to%10 == 8  ) ){
				}
				playerMove = false;
				pElem = null;
				changeTurn();				
			} 
		}
		else
			alert("Invalid Move");
	}
	else {
		if(src.childNodes[0].getAttribute("player") == pElem.getAttribute("player")) {	
			if(pElem.getAttribute('piece') == 'king') {
				if(valid(src)) {
					if(!hasIntermediate(Number(pElem.parentNode.getAttribute('id')),Number(src.getAttribute('id')),'castle', null)) {
						castle(pElem, src.childNodes[0]);
						pElem = null;
						playerMove = false;
						changeTurn();
					}
				}
			}
			else
				alert("Cant Move there");
		}			
		else
		{
			if(pElem.getAttribute('piece') == 'king' && !kingStatus(pElem.parentNode, src)) {
				return;
			}
			if(valid(src)) {
				killPiece(pElem, src.childNodes[0]);
				pElem = null;
				playerMove = false;
				changeTurn();				
			}
		}
	}

}
//function changes the turn 
function changeTurn() {
	if(turn == 'white') {
		turn = 'black';
 	}
 	else {
		turn = "white";
 	}
}

//function handles valid moves of all pieces
function valid(src) {
	let piece = pElem.getAttribute("piece");
	let curPlayer = pElem.getAttribute("player");
	let sPos  = Number(pElem.parentNode.getAttribute("id"));
	let dPos  = Number(src.getAttribute("id"));
	let result = false;
	let retObject;

	switch(piece) {
		case "pawn":
			if(curPlayer=="black") {
				if(dPos > sPos) {
					if(sPos%10==2) {
						if(dPos == sPos +1 || dPos == sPos+2){
							result = true;
						}
					}
					else
					{
						if(dPos == sPos+1) {
							result = true;
						}
					}	
				}
			}
			else{
				if(sPos > dPos) {
					if(sPos%10==7) {
						if(sPos == dPos+1 || sPos == dPos+2) {
							result = true;
						}
					}
					else if(sPos == dPos+1) {
							result = true;
						}
				}
			}
			if(checkSpeicial(piece, curPlayer, sPos, dPos, src)){
				result = true;
			}
			break;

			case "rook":
			if((retObject = plus(pElem.parentNode,src)).bool) {
					if(!hasIntermediate(sPos,dPos, 'plus', retObject.direction)) {
						result = true;
					}
				}
			break;

			case "knight": result  = knightStatus(pElem.parentNode,src);					
			break;

		case "bishop" :
			if((retObject = cross(pElem.parentNode,src)).bool) {
					if(!hasIntermediate(sPos, dPos, 'cross', retObject.direction)) {
						result = true;
					}
			}
			break;

		case "queen" :
			if((retObject = queenStatus(pElem.parentNode, src)).bool) {
				if(!hasIntermediate(sPos, dPos, retObject.sign , retObject.direction)) {
					result =  true;
				}
			}
			break;

		case "king" :
			result = kingStatus(pElem.parentNode, src);
			let targt = src.getAttribute("id");
			let cast = ['11', '18', '81', '88'];
			if(!result && (cast.indexOf(targt) > -1)) {
				if(src.childNodes[0]) {
					if(notMoved(pElem, src.childNodes[0])) {
						result = true;
					}						
				}
			}
			break;
	}
 	return result;
}

function notMoved(enemy, Dead) {
	let att = enemy.getAttribute('player') + enemy.getAttribute('id');
	let dead = Dead.getAttribute('player') + Dead.getAttribute('id');
	if(history[att] == false && history[dead] == false) {
		return true;
	}
	else {
		return false;
	}

}

function hasIntermediate(enemy, dead, sign, direction) {
	let result = false;
	let start;
	let end;
	if((enemy - dead ) <0) {
			start = enemy;
			end = dead;
	}				
	else {
			start = dead;
			end = enemy;
	}
	let increment;
	switch(sign) {
		case 'plus' :		
			if(direction == 'xpos') {
				increment = 1;
			}
			else if(direction == 'ypos') {
				increment = 10;
			}
			for(start=start+increment;start<end;start+=increment) {
				if(document.getElementById(start).childNodes[0]) {
						result = true;
						break;
					}
				}
			break; 
		case 'cross' :		
			if(direction == 'right') {
				increment = 11;
			}
			else if(direction == 'left') {
				increment = 9;
			}
			for(start+=increment;start!=end;start+=increment) {
				if(document.getElementById(start).childNodes[0]) {
					result = true;
			
				 	break;
				}
			}
			break;
		case 'castle' :
			increment = 10;
			for(start+=increment;start<end;start+=increment) {
				if(document.getElementById(start).childNodes[0]) {
					result = true;
					break;
				}
			}
			break;
	}
	return result;
}

function plus(enemy, dead) {
	let result = {bool:false, direction:"none"};
	if(enemy.getAttribute("xpos") == dead.getAttribute("xpos")) {
			result.bool = true;
			result.direction = "xpos";
	}
	else if(enemy.getAttribute("ypos") == dead.getAttribute("ypos")) {
			result.bool = true;
			result.direction = "ypos";
	}
	return result;
}

function cross(enemy, dead) {
	let result = {bool:false,direction:'none'};
	let start = Number(enemy.getAttribute('id'));
	let end = Number(dead.getAttribute('id'));
	var placeHolder;
	if((start-end)<0) {
	}
	else
	{
		placeHolder = start;
		start = end;
		end = placeHolder;
	}
	var placeHolder = start;
	for(;start <= end; start+=11) {
		if(start == end) {
			result.bool = true;
			result.direction = 'right';
			break;
		}
		if(start%10 == 8) {
			break;
		}
	}
	start = placeHolder;
	if(!result.bool) {
		for( ;end >= start;end-=9) {
			if(end == start) {
				result.bool = true;
				result.direction = 'left';
				break;
			}
			if(end%10 == 8) {
				break;
			}
		}
	}
	return result;
}

function queenStatus(enemy, dead) {
	let result = {bool:false,direction:'none'};
	if( (result= plus(enemy, dead)).bool ) {
		result.sign = 'plus';
	}
	else {
		result = cross(enemy, dead);
		result.sign = 'cross';
	}
	return result;
}

//check knights status
function knightStatus(enemy, dead) {
	let result = false;
	let kngt = [-8,8,-12,12,-19,19,-21,21];
	let start = enemy.getAttribute('id');
	let end = dead.getAttribute('id');
	if(kngt.indexOf(start-end) > -1) {
		result = true;
	}
	return result;
}

//check kings status
function kingStatus(enemy, dead) {
	let result = false;
	let king = [-1, 1, -9, 9, -10, 10, -11, 11];
	let start = enemy.getAttribute('id');
	let end = dead.getAttribute('id');
	if(king.indexOf(start-end) > -1) {
		result = true;
	}
	return result;
}

function checkSpeicial(type, player, sPos, dPos, src) {
	let result = false;
	if(type == 'pawn') {
		if(player == "black") {
			if(dPos == sPos - 9 || dPos == sPos + 11) {
				if(src.childNodes[0].getAttribute("player") != player)
					result = true;
			}
		}
		else
		{
			if(dPos == sPos + 9  || dPos == sPos -11) {
				if(src.childNodes[0].getAttribute("player") != player)
					result = true;
			}
		}
	}
	return result;
}

//function deals with the death of the king 
//and the restart of the game
function killPiece(enemy, dead) {
	deadPieces.push({piece:dead, id:dead.parentNode.getAttribute("id")});
	let target = dead.parentNode;
	if(dead.getAttribute('piece') == 'king') {
		if(enemy.getAttribute('player') == 'white') {
			if(confirm('White has Won Press Ok to replay')){
                window.location.reload();  
            }
		}
		else
		{
			if(confirm('Black has Won Press Ok to replay')){
                window.location.reload();  
            }
		}
		nGame = false;
		restart = true;
	}
	document.getElementById('dead').appendChild(target.childNodes[0]);
	target.appendChild(enemy);

	// the movetoThis get element
	to = target.getAttribute('id');
}