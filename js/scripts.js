function drawTree(x) {

for ( var i = 1 ; i <= x ; i++) {
	var star = '';

for(j=i; j<x; j++) {
        star += ' ';
}

for ( var j = 1 ; j <= (2*i-1) ; j++) {
		star += '*';
}
console.log(star);

	}
}

drawTree(10)



