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

This challenge has been inspired by a project from: 

Eloquent Javascript
http://eloquentjavascript.net/index.html
By Marijn Haverbeke
***/

function Table(array) {
  this.array = array;
  // this.minWidths = this.minWidths();
}

Table.prototype.draw = function() {
  var minWidths = this.minWidths();
  var output = this.array.map(function(row, index) {
    var isHeader = index === 0;

    row = new Row(row, minWidths, isHeader);

    var rendered = row.draw();

    if(isHeader) {
      rendered += "\n" + row.drawHeader(minWidths);
    }

    return rendered;
  });
  return output.join('\n');
};

Table.prototype.minWidths = function() {

  var mins = [];
  //Combine all elements into flat array
  var flat = [].concat.apply([], this.array);
  var numCols = this.array[0].length;

  for(var i = 0; i < numCols; i ++) {

    var colValues = [];
    for(var j = i; j < flat.length; j += numCols) {

      var cell = new Cell(flat[j]);

      colValues.push(cell.width());
    }

    var colMax = colValues.reduce(function(currentMax, next){
      return Math.max(currentMax, next);
    });

    mins.push(colMax);
  }
  return mins;
};

function Row(row_array, minWidths) {

  this.minWidths = minWidths;

  this.cells = row_array.map(function(cell_contents){
    return new Cell(cell_contents);
  });
}

Row.prototype.draw = function() {

  var minWidths = this.minWidths;
  var array_of_values = this.cells.map(function(cell, index) {
    return cell.draw(minWidths[index]);
  });

  return array_of_values.reduce(function(string, next) {
    return string + " " + next;
  });
};

Row.prototype.drawHeader = function(minWidths) {

  var returnString = "";

  for(var i = 0; i < minWidths.length; i++) {

    for(var j = 0; j < minWidths[i]; j++) {
      returnString += "-";
    }

    returnString += " ";
  }
  return returnString;
};

function Cell(cell_contents) {
  this.value = cell_contents;
}

Cell.prototype.draw = function(minWidth) {
  var difference = 0;
  var whitespace = "";

  if(this.width() < minWidth) {
    difference = minWidth - this.width();
  }

  for(var i = 0; i < difference; i ++) {
    whitespace += " ";
  }

  return this.value + whitespace;
};

Cell.prototype.width = function() {
  return this.value.toString().length;
};

var array = [
  ['Name', 'Age', 'Hometown'],['George', 62, 'Missoula, MT'], ['Sam', 13, 'Calabasas, CA'], ['Jane', 51, 'Fremont, CA']
];

var table = new Table(array);
console.log(table.draw());
