for( i = 1; i < 101; i++){
	if (i % 15 === 0){
		document.write("<p class='fizzbuzz'>Fizz buzz!</p>");
	} else if (i % 5 === 0){
		document.write("<p class='buzz'>Buzz!</p>");
	} else if (i % 3 === 0){
		document.write("<p class='fizz'>Fizz!</p>");
	} else {
		document.write("<p>" + i + "</p>");
	}
}