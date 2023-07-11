const form = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];


function search(str) { // str represents the value the user will type?
	  
	  let results = [];
	  
	  //str = fruitText.value; //represents what the user types
	
	  results = fruit.filter((e) => e.toLowerCase().includes(str.toLowerCase())); // function that filters the "fruit" array when a letter is typed in the search bar regardless if Lower/UpperCase and then checks to see if any character in the user input is included in the array
	  console.log(results);// shows/checks results in console for now

      return results;
	} 

function searchHandler(e) {
	const inputVal = fruitText.value; //user input in search bar! also === str)
	console.log(inputVal);// shows/checks results in console again.
	let results = [];

	if (inputVal.length > 0) { //if the user input is more than zero, it will call the 'serch()' function to get the results
		results = search(inputVal);
	}

	showSuggestions(results, inputVal);//new function with parameters to calculate the suggestions
}

function showSuggestions(results, inputVal) {//does 'inputVal' have to be read here???

	suggestions.innerHTML = ''; //sets initial value at 'undefined'

	if (results.length > 0) { // if the length of the results is greter than 0, it will iterate over them and add each fruit to a list.
		for (i = 0; i < results.length; i++) {//iterate
             let fruitFound = results[i]; //this represents the value of each fruit result
			 const resultsFound = document.createElement('li'); //creates a new 'li' under 'sugesstions.ul' div
             
			console.log(fruitFound) //checks/lists every result that includes what was typed in the searh bar by user in the console
			resultsFound.innerText = fruitFound; //sets the inner Text to the fruit results
			suggestions.classList.add('has-suggestions'); //creates a new class name for the ul that contains the resultsFound to 'has-suggestions'
		    suggestions.appendChild(resultsFound); //joins the new created 'li' to the ul(has-suggestions) 
	    }
	} 
	else //if results.length is not greater than zero, then return an empty array, clear suggestions and remove new className for ul
	{
    	results = [];
		suggestions.innerHTML = '';
		suggestions.classList.remove();
	}
}


function useSuggestion(e) {// this function allows the user to click a suggestion and it autofills in the search bar
	
	fruitText.value = e.target.innerText; //target refers to the ul name (has-suggestions) in the div suggestions. The searchbox value is now === tthe text in the results suggestion list
	fruitText.focus(); //.focus method gives a visible indication of the focused element (typically by displaying a "focus ring" around the element) in this case, the search box
	suggestions.innerHTML = ''; //clears the values of suggestions div
	suggestions.classList.remove('has-suggestions'); //removes other fruit suggestions when one is clicked.
}

form.addEventListener('keyup', searchHandler)
suggestions.addEventListener('click', useSuggestion);
