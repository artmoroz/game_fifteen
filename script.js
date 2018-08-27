var matrix = [];

function compareRandom() {		//перемешиваем массив
  return Math.random() - 0.5;
}

function newGame() {
	var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
	arr.sort(compareRandom);

	console.log( arr );

	for (var i = 0; i < 4; i++) {
		matrix[i] = [];
		matrix[i].push(arr.pop());
		matrix[i].push(arr.pop());
		matrix[i].push(arr.pop());
		matrix[i].push(arr.pop());
	}

	console.log(matrix);


	for (var i=0; i<4; i++) {
	  for (var j = 0; j < 4; j++) {
	  	var index = i.toString() + j.toString();
	    var el=document.getElementById(index);
		if (el) {
		  el.innerHTML = matrix[i][j];
		  el.addEventListener('click', clickHandler);
		};
	  }
	}
}

function clickHandler(event) {
	var el = event.target;
	console.log(el.id);
	var i =  el.id[0];
	var j =  el.id[1];
//		console.log('i', i);
//	console.log('j', j);
	console.log('value in element', el.innerHTML);

	checkStep(el, parseInt(i), parseInt(j));
}

function checkStep(el, i, j) {
	console.log('value matrix element', matrix[i][j]);
	// business logic, check up left right ....
	var checkRow = i + 1;

	if (checkRow <= 3 && !matrix[checkRow][j]) {
		alert('Bingo!');
	}
}


document.getElementById('mixerBtn')
	.addEventListener('click', newGame);


(function () {
  newGame();
})();
