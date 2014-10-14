/***
The project is this: we will write a program that, 
given an array of arrays of table cells, 
builds up a string that contains a nicely laid out table
—meaning that the columns are straight and the rows are aligned. 
Something like this:

name         height country
------------ ------ -------------
Kilimanjaro    5895 Tanzania
Everest        8848 Nepal
Mount Fuji     3776 Japan
Mont Blanc     4808 Italy/France
Vaalserberg     323 Netherlands
Denali         6168 United States
Popocatepetl   5465 Mexico
***/

// Objects
//Cell - x, y coordinates. Data value
//Row - array of data values
// To do - right justify integer values , add format below headers, refactor

data = [['State', 'Capital', 'Population'],['Alabama', 'Little Rock', 1200000], ['California', 'Sacramento', 30000000]];

function Cell() {

}

Cell.prototype.minWidth = function(value) {
	if(isNumeric(value)) {
		return value.toString().length;
	}
	else {	
		return value.length;
	}
};

Cell.prototype.draw = function(data, max) {
	var string = data.toString();
	var length = string.length;
	var whitespace = ' ';
	if(length < max) {
		var difference = max - length;

		for(var i = 0; i < difference; i++) {
			whitespace += ' ';
		}

	}
	string += whitespace;
	return string;
};

function getColumnsMax(data) {
	var columnsMax = [];
	for(var i = 0; i < data.length; i ++) {
		for(var j = 0; j < data[0].length; j ++) {
			
			if(typeof columnsMax[j] == 'undefined')
			{
				columnsMax[j] = 0;
			}

			var cell = new Cell();
			var minWidth = cell.minWidth(data[i][j]);
			if (minWidth > columnsMax[j]) {
				columnsMax[j] = minWidth;
			}
		}
	}
	return columnsMax;
}

function drawTable(data) {
	var columnsMax = getColumnsMax(data);
	var result = '';
	for(var i = 0; i < data.length; i++) {
		for(var j = 0; j < data[0].length; j++) {
			var cell = new Cell();

			result += cell.draw(data[i][j], columnsMax[j]);

			if(data[0].length - j == 1) {
				result += '\n';
			}
		}
		//Add header formatting
		if(i === 0) {
			result += '\n';
		}
	}
	console.log(result);
}

function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

drawTable(data);
