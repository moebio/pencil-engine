(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
      // AMD. Register as an anonymous module.
      define(['exports'], function (exports) {
          factory((root._ = exports));
      });
  } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
      // CommonJS
      factory(exports);
  } else {
      // Browser globals
      factory((root._ = {}));
  }
}(typeof self !== 'undefined' ? self : this, function (exports) {
  // Use b in some fashion.

  // attach properties to the exports object to define
  // the exported module properties.
  'use strict';


DataType.prototype = {};  DataType.prototype.constructor = DataType;    function DataType() {    Object.apply(this);    this.type = 'DataType';  }   DataType.prototype.setType = function(type) {    this.type = type;  };    DataType.prototype.getType = function() {    return this.type;  };    DataType.prototype.toString = function() {  };


//this solves problems with browser that do not understand array.at or string.at (like Safari)
if(!Array.prototype.at){
    console.log("[!] no Array.prototype.at")
    Array.prototype.at = function(n){
        if(n>=0) return this[n]
        return this[this.length+n]
    }
}
if(!String.prototype.at){
    console.log("[!] no String.prototype.at")
    String.prototype.at = function(n){
        if(n>=0) return this[n]
        return this[this.length+n]
    }
}

//••••• complete ••••••

let pulse_version = function() {return "1.1.15"}

//---------------data types-----------------

L.prototype = new DataType();
L.prototype.constructor = L
function L() {
      DataType.apply(this);
      var array = [];
      var i;
      var nArguments = arguments.length;
      for(i = 0; i < nArguments; i++) {
        array.push(arguments[i]);
      }
      array = L.toL(array);
      //
      return array;
}

L.toL=function(array, type) {
 if (array == null) return;
  if(type){
   switch(type){
     case 'number':
     case 'nL':
       return nL.toL(array, false);
     case 'string':
     case 'sL':
       return sL.toL(array, false);
     case 'Date':
     case 'dL':
       return dL.toL(array, false);
   }
   //array = L._fromArray(array, type)
  array.pushNew = L.prototype.pushNew
  array.concatNew = L.prototype.concatNew
 }
 
 //TODO: clear some of these method declarations
 array.type = "L";
 array.name = array.name || "";
  array.setType = L.prototype.setType;
 array.toArray = L.prototype.toArray;
 array._constructor = L;
  array.downcast = L.prototype.downcast;
 array.get = L.prototype.get;
 array.getElements = L.prototype.getElements;
 array.isEqual = L.prototype.isEqual;
 //
 array.getTypeOfElements = L.prototype.getTypeOfElements; //TODO: redundant?
 array.getTypes = L.prototype.getTypes;
 array.getType = L.prototype.getType;
 array.getLengths = L.prototype.getLengths;
 array.getWithoutRepetitions = L.prototype.getWithoutRepetitions;
 array.getSimplified = L.prototype.getSimplified;
 array.getCategoryColors = L.prototype.getCategoryColors
 array.getFrequenciesTable = L.prototype.getFrequenciesTable
 array.allElementsAreEqual = L.prototype.allElementsAreEqual;
 array.countElement = L.prototype.countElement;
 array.countOccurrences = L.prototype.countOccurrences;
 array.countDifferentElements = L.prototype.countDifferentElements;
 array.getMode = L.prototype.getMode;
 array.getMin = L.prototype.getMin;
 array.getMax = L.prototype.getMax;
 array.indexOfElement = L.prototype.indexOfElement;
 array.indexesOf = L.prototype.indexesOf;
 array.indexOfElements = L.prototype.indexOfElements;
 array.indexesOfElements = L.prototype.indexesOfElements;
 
 
 array.getElementByName = L.prototype.getElementByName;
 array.getElementsByNames = L.prototype.getElementsByNames;
 array.getFirstElementByPropertyValue = L.prototype.getFirstElementByPropertyValue;
 array.add = L.prototype.add;
 array.getElementNumberOfOccurrences = L.prototype.getElementNumberOfOccurrences;
 array.getPropertyValues = L.prototype.getPropertyValues;
 array.getRandomElement = L.prototype.getRandomElement;
 array.getRandomElements = L.prototype.getRandomElements
 //sorting:
 array.isSorted = L.prototype.isSorted;
 array.getSortedByIndexes = L.prototype.getSortedByIndexes;
 array.getReversed = L.prototype.getReversed;
 array.getSortedByProperty = L.prototype.getSortedByProperty;
 array.getSorted = L.prototype.getSorted;
 array.getSortedByList = L.prototype.getSortedByList;
 array.getSortedRandom = L.prototype.getSortedRandom;

 //filter:
 array.getSubList = L.prototype.getSubList;
 //deprecated
 array.getSubListByType = L.prototype.getSubListByType;
 array.getFilteredByPropertyValue = L.prototype.getFilteredByPropertyValue;
 array.getFilteredByBooleanList = L.prototype.getFilteredByBooleanList;
  array.toStringList = L.prototype.toStringList;
 array.toNumberList = L.prototype.toNumberList;
 array.toColorList = L.prototype.toColorList;
  array.clone = L.prototype.clone;
 array.toString = L.prototype.toString;
 array.getNames = L.prototype.getNames;
 array.getLabels = L.prototype.getLabels;
 array.getDescriptions = L.prototype.getDescriptions;
 array.getCategories = L.prototype.getCategories;
 array.applyFunction = L.prototype.applyFunction;
 array.getWithoutElementAtIndex = L.prototype.getWithoutElementAtIndex;
 array.getWithoutElement = L.prototype.getWithoutElement;
 array.getWithoutElements = L.prototype.getWithoutElements;
 array.getWithoutElementsAtIndexes = L.prototype.getWithoutElementsAtIndexes;
 array.getFilteredByFunction = L.prototype.getFilteredByFunction;
 array.insert = L.prototype.insert;
 array.insertMany = L.prototype.insertMany;
  array._concat = Array.prototype.concat;
 array.concat = L.prototype.concat;
  //transformations
 
 array.removeElement = L.prototype.removeElement;
 array.removeElementAtIndex = L.prototype.removeElementAtIndex;
 array.removeElementsAtIndexes = L.prototype.removeElementsAtIndexes;
 array.removeElements = L.prototype.removeElements
 array.pushIfUnique = L.prototype.pushIfUnique

 array.forEachPair = L.prototype.forEachPair
 
 array.replace = L.prototype.replace;
 //deprectaed
 array.setNames = L.prototype.setNames;
 //deprectaed
 array.setPropertyValues = L.prototype.setPropertyValues;
 array._splice = Array.prototype.splice;
 array.splice = L.prototype.splice;
  array.isList = true



  return array;
}




iL.prototype = new L();
iL.prototype.constructor = iL
function iL() {
      var args = [];
      var l = arguments.length;

      for(var i = 0; i < l; i++) {
        args[i] = arguments[i];
      }
      var array = L.apply(this, args);
      array = iL.toL(array);

      return array;
    }


iL.toL=function(array) {
 let result = L.toL(array)
  result.type = "iL";
  result.getInterval = iL.prototype.getInterval;
 result.getAmplitudes = iL.prototype.getAmplitudes;
  return result;
}

cL.prototype = new L();
cL.prototype.constructor = cL
function cL() {
      var args = [];
      var i;
      var lArgs = arguments.length;
      for(i = 0; i < lArgs; i++) {
        args[i] = arguments[i];
      }
      var array = L.apply(this, args);
      array = cL.toL(array);

      return array;
    }

cL.toL=function(array) {
 let result = L.toL(array);
 result.type = "cL";
 result.name = array.name || "";
 result.getRgbArrays = cL.prototype.getRgbArrays;
 result.getInterpolated = cL.prototype.getInterpolated;
 
 result.getInverted = cL.prototype.getInverted;
 result.addAlpha = cL.prototype.addAlpha;
 return result;
}




P.prototype = new DataType();
P.prototype.constructor = P
function P(x, y) {
      DataType.apply(this, arguments);
      this.type = "P";
      this.x = Number(x) || 0;
      this.y = Number(y) || 0;
    }

P3D.prototype = new P();
P3D.prototype.constructor = P3D
function P3D(x, y, z) {
      P.apply(this, arguments);
      //this.name='';
      this.type = "P3D";
      this.z = z;
    }

Pol.prototype = new L();
Pol.prototype.constructor = Pol
function Pol() {
      var array = L.apply(this, arguments);
      array = Pol.toL(array);
      return array;
    }

Pol.toL=function(array) {
 let result = L.toL(array);
 result.type = "Pol";
  result.getFrame = Pol.prototype.getFrame;
 result.getBarycenter = Pol.prototype.getBarycenter
 result.getCenter = Pol.prototype.getCenter;
 result.add = Pol.prototype.add;
 result.factor = Pol.prototype.factor;
 result.getRotated = Pol.prototype.getRotated;
 result.getClosestPoint = Pol.prototype.getClosestPoint;
 result.toNumberList = Pol.prototype.toNumberList;
 result.containsPoint = Pol.prototype.containsPoint;
 result.touchesPolygon = Pol.prototype.touchesPolygon

 //transform
 result.approach = Pol.prototype.approach;
 //override
 result.clone = Pol.prototype.clone;
  return result;
}




Pol3D.prototype = new L();

Pol3D.prototype.constructor = Pol3D
function Pol3D() {
      var array = L.apply(this, arguments);
      array = Pol3D.toL(array);
      return array;
    }

Pol3D.toL=function(array) {
 let result = L.toL(array);
 result.type = "Pol3D";
  //assign methods to array:
 result.getBarycenter = Pol3D.prototype.getBarycenter
 result.add = Pol3D.prototype.add
 result.factor = Pol3D.prototype.factor
  return result
}




Rec.prototype = new DataType();
Rec.prototype.constructor = Rec
function Rec(x, y, width, height) {
    DataType.apply(this)
    this.type = "Rec";
    this.x = Number(x) || 0;
    this.y = Number(y) || 0;
    this.width = Number(width) || 0;
    this.height = Number(height) || 0;
}

T.prototype = new L();
T.prototype.constructor = T
function T() {
      var args = [];
      var i;
      var nArgs = arguments.length;

      for(i = 0; i < nArgs; i++) {
        args[i] = arguments[i]["isList"]?arguments[i]:new L(arguments[i]);
      }

      var array = L.apply(this, args);
      array = T.toL(array);

      return array;
    }

T.toL=function(array) {
 for ( var i=0; i< array.length; i++ ){
   if( Array.isArray(array[i])  && !array[i]["isList"] ) array[i] = L.toL(array[i]);
 }
 let result = L.toL(array);
 result.type = "T";
 result.applyFunction = T.prototype.applyFunction;
 result.getListsDowncasted = T.prototype.getListsDowncasted;
 result.get = T.prototype.get;
 result.getColumns = T.prototype.getColumns;
 result.getWithoutColumn = T.prototype.getWithoutColumn;
 result.getWithoutColumns = T.prototype.getWithoutColumns
 result.getRow = T.prototype.getRow;
 result.getRows = T.prototype.getRows;
 result.getCell = T.prototype.getCell;
 result.getLengths = T.prototype.getLengths;
 result.getListLength = T.prototype.getListLength;
 result.sliceRows = T.prototype.sliceRows;
 result.getRows = T.prototype.getRows; //deprecated
 result.getWithoutRow = T.prototype.getWithoutRow;
 result.getWithoutRows = T.prototype.getWithoutRows;
 result.transpose = T.prototype.transpose;
 result.sortRowsByList = T.prototype.sortRowsByList; //change name to getWithColumnsSortedByList
 result.sortRowsByLists = T.prototype.sortRowsByLists;
 result.clone = T.prototype.clone;
 result.cloneWithEmptyLists = T.prototype.cloneWithEmptyLists;
 result.appendRows = T.prototype.appendRows;
 result.insertRow = T.prototype.insertRow;
 result.trim = T.prototype.trim;
  //transformative
 result.removeRow = T.prototype.removeRow;
 result.pushRow = T.prototype.pushRow
  result.isTable = true;
  return result;
}

nT.prototype = new T();
nT.prototype.constructor = nT
function nT() {
      var args = arguments;
      var array = [];
      var i;

      if (arguments.length == 1 ) {
        // one argument as number(n). creates a T with n empty columns
        if ( typeof args[0] == 'number' ) {
            for (var i=0; i<args[0]; i++) {
                array.push(new nL());
            }
        }
        // one argument as array|NumberList|TableList
        else if ( Array.isArray(args[0]) ) {
            array = fetchArray(args[0],1);
        }
      }
      else if ( arguments.length > 1) {
        // arguments as numbers will be a nT with 1 nL
        if( typeof args[0] == 'number' ) {
            var arr= new nL();
            for (var i=0; i<args.length; i++) {
                arr.push(args[i]);
            }
            array.push(arr);
        }
        // for arguments other than numbers. turns the arguments into an array
        else {
            var _array = Array.prototype.slice.call(args);
            array = fetchArray( _array, 1);
        }
      }

     /* receives an array and a number (iteration) to count
      * how many times the function has been called recursively */
     function fetchArray(arr, iteration) {
        var _array;

        // check if the array is a Moebio nL or nT
        if ( arr.type !== undefined) {
            _array = arr.clone();
            if ( _array.type == 'nT')
                return _array;
            // if is the first iteration with a nL, returns it as a 2 dimensional array (table)
            else if ( _array.type == 'nL' && iteration == 1)
                return [_array];
            // if is not the first iteration with a nL, returns it as it is.
            else if ( _array.type == 'nL' && iteration > 1)
                return _array;
            else
                return [];
        }
        else { // is a simple array

            //clone the array and nested arrays.
            _array = [];
            for ( var i=0; i<arr.length; i++){
                /* if there are a nested array, fetch it and then pass it to _array.
                 * here the iteration number (>1) is important, because
                 * nested arrays or lists will not be returned as Tables */
                if( Array.isArray(arr[i]) )
                    arr[i] = fetchArray( arr[i], ++iteration);
                _array[i] = arr[i];
            }

            if ( _array.length == 0 )
                return []; //empty array
            else {
                // if is the first iteration with an array of numbers, returns a 2 dimensional array (table)
                if ( typeof _array[0] == 'number' && iteration == 1 )//
                    return [_array];
                else // otherwise, returns the array
                    return _array;
            }
        }
     }

      array = nT.toL(array);
      return array;
}


nT.toL=function(array) {
 let result = T.toL(array);
 result.type = "nT";
 result.getSums = nT.prototype.getSums;
 result.getRowsSums = nT.prototype.getRowsSums;
 result.getAverages = nT.prototype.getAverages;
 result.getRowsAverages = nT.prototype.getRowsAverages;
 result.getIntervals = nT.prototype.getIntervals;
 result.factor = nT.prototype.factor;
 result.add = nT.prototype.add;
 result.getMax = nT.prototype.getMax;
 result.getMaxValues = nT.prototype.getMaxValues;
 result.getMaxCell = nT.prototype.getMaxCell;
 result.getMin = nT.prototype.getMin;
 result.getMinValues = nT.prototype.getMinValues;
 result.getMinCell = nT.prototype.getMinCell;
 result.getInterval = nT.prototype.getInterval;
 result.getFrame = nT.prototype.getFrame;
  return result
}




polL.prototype = new T();
polL.prototype.constructor = polL
function polL() {
      var array = T.apply(this, arguments);
      array = polL.toL(array);
      return array;
    }

polL.toL=function(array) {
 let result = T.toL(array);
 result.type = "polL";
 result.getFrame = polL.prototype.getFrame;
 result.getBarycenter = polL.prototype.getBarycenter;
 result.getCenter = polL.prototype.getCenter;
 result.add = polL.prototype.add;
 result.factor = polL.prototype.factor;
 result.getRotated = polL.prototype.getRotated;
 result.clone = polL.prototype.clone;
 
 return result;
}



Nd.prototype = new DataType();
Nd.prototype.constructor = Nd
function Nd(id, name) {
      this.id = id == null ? '' : id;
      this.name = name != null ? name : id;
      this.type = "Nd";

      this.nodeType = null;

      this.x = 0;
      this.y = 0;
      this.z = 0;

      this.nodes = new ndL();
      this.relations = new relL();

      this.to = new ndL();
      this.toRelations = new relL();

      this.from = new ndL();
      this.fromRelations = new relL();

      this.weight = 1;
      this.descentWeight = 1;

      //tree
      this.level = 0;
      this.parent = null;

      //physics:
      this.vx = 0;
      this.vy = 0;
      this.vz = 0;
      this.ax = 0;
      this.ay = 0;
      this.az = 0;
    }

sL.prototype = new L();
sL.prototype.constructor = sL
function sL() {
      var args = [];

      for(var i = 0; i < arguments.length; i++) {
        args[i] = String(arguments[i]);
      }
      var array = L.apply(this, args);
      array = sL.toL(array);
      
      return array;
    }

sL.toL=function(array, forceToString) {
 forceToString = forceToString == null ? true : forceToString;
  var result = L.toL(array);
 if(forceToString) {
   for(var i = 0; i < result.length; i++) {
     result[i] = String(result[i]);
   }
 }
 result.type = "sL";
  //assign methods to array:
 result.getLengths = sL.prototype.getLengths;
 result.countTags = sL.prototype.countTags;
 result.includesSubString = sL.prototype.includesSubString;
 result.indexesOfSubString = sL.prototype.indexesOfSubString;
 result.toLowerCase = sL.prototype.toLowerCase;
 result.toUpperCase = sL.prototype.toUpperCase;
 result.append = sL.prototype.append;
 result.getSurrounded = sL.prototype.getSurrounded;
 result.replace = sL.prototype.replace;
 result.getConcatenated = sL.prototype.getConcatenated;
 result.trim = sL.prototype.trim;
  //override
 result.clone = sL.prototype.clone;
 result.add = sL.prototype.add;
  return result;
}

ndL.prototype = new L();
ndL.prototype.constructor = ndL
function ndL() {
      var array = ndL.toL([]);

      if(arguments && arguments.length > 0) {
        var args = Array.prototype.slice.call(arguments);

        args.forEach(function(arg) {
          array.addNode(arg);
        });
      }
      return array;
}

ndL.toL=function(array, forceToNode) {

    forceToNode = forceToNode == null ? false : forceToNode;
      var list = L.toL(array);
       if(forceToNode) {
       var lengthList = list.length;
        for(var i = 0; i < lengthList; i++) {
         list[i] = _typeOf(list[i]) == "Nd" ? list[i] : (new Nd(String(list[i]), String(list[i])));
       }
    }
 
 list.type = "ndL";
 list.ids = {};
 // TODO: Fix
 Array(); //????
  //assign methods to array:
 
 list.addNode = ndL.prototype.addNode;
 list.addNodes = ndL.prototype.addNodes;
 list.removeNode = ndL.prototype.removeNode;
 list.removeNodes = ndL.prototype.removeNodes;
 list.removeNodeAtIndex = ndL.prototype.removeNodeAtIndex;
 list.getByName = ndL.prototype.getByName;
 list.get = ndL.prototype.get;
 list.getNodesByIds = ndL.prototype.getNodesByIds;
 
 list.normalizeWeights = ndL.prototype.normalizeWeights;
 list.getWeights = ndL.prototype.getWeights;
 list.getIds = ndL.prototype.getIds;
 list.getDegrees = ndL.prototype.getDegrees;
 list.getPolygon = ndL.prototype.getPolygon;

 list._push = Array.prototype.push;
 // list.push = function(a) {
 //   var k;
 //   k.push(a);
 // };



  //overriden
 list.getWithoutRepetitions = ndL.prototype.getWithoutRepetitions;
 list.removeElements = ndL.prototype.removeElements;
 list.clone = ndL.prototype.clone;
  return list
}


relL.prototype = new ndL();
relL.prototype.constructor = relL
function relL() {
      var array = ndL.apply(this, arguments);
      array.name = "";
      //assign methods to array:
      array = relL.toL(array);
      //
      return array;
    }

relL.toL=function(array) {
 let list = ndL.toL(array);
 list.type = "relL";
 //assign methods to array:
 list.addRelation = relL.prototype.addRelation;
 
 list.removeRelation = relL.prototype.removeRelation;
 list.getRelationsWithNode = relL.prototype.getRelationsWithNode;
 list.getFirstRelationBetweenNodes = relL.prototype.getFirstRelationBetweenNodes;
 list.getFirstRelationByIds = relL.prototype.getFirstRelationByIds;
 list.getAllRelationsBetweenNodes = relL.prototype.getAllRelationsBetweenNodes;
 list.getRelatedNodesToNode = relL.prototype.getRelatedNodesToNode;
 list.nodesAreConnected = relL.prototype.nodesAreConnected;
 list.getChildrenOfNode = relL.prototype.getChildrenOfNode;
  return list;
}




recL.prototype = new L();
recL.prototype.constructor = recL
function recL() {
      var array = L.apply(this, arguments);
      array = recL.toL(array);
      return array;
}


recL.toL=function(array) {
 let list = L.toL(array);
 list.type = "recL";
  list.getFrame = recL.prototype.getFrame;
 list.add = recL.prototype.add;
 list.clone = recL.prototype.clone;
 list.factor = recL.prototype.factor
 list.getIntersectionArea = recL.prototype.getIntersectionArea;
 list.intersectsRectangle = recL.prototype.intersectsRectangle;
  return list
}




Rel.prototype = new Nd();
Rel.prototype.constructor = Rel
function Rel(id, name, node0, node1, weight, content) {
      Nd.call(this, id, name);
      this.type = "Rel";

      this.node0 = node0;
      this.node1 = node1;
      this.weight = weight == null ? 1 : weight;
      this.content = content == null ? "" : content;
}

Net.prototype = new DataType();
Net.prototype.constructor = Net
function Net() {
      this.type = "Net";

      this.nodes = new ndL();
      this.relations = new relL();
}


Tr.prototype = new Net();
Tr.prototype.constructor = Tr
function Tr() {
      Net.apply(this);
      this.type = "Tr";

      this.nLevels = 0;
      this._createRelation = this.createRelation;
      this.createRelation = this._newCreateRelation;
    }

dI.prototype = new DataType();
dI.prototype.constructor = dI
function dI(date0, date1) {
      DataType.apply(this, arguments);
      this.date0 = date0;
      this.date1 = date1;
      this.type = "dI";
    }

dL.prototype = new L();
dL.prototype.constructor = dL
function dL() {
      var args = [];
      for(var i = 0; i < arguments.length; i++) {
        args[i] = Number(arguments[i]);
      }
      var array = L.apply(this, args);
      array = dL.toL(array);
      //
      return array;
    }

dL.toL=function(array, forceToDate) {
 forceToDate = forceToDate == null ? true : forceToDate;
 let list = L.toL(array);
  if(forceToDate) {
   for(var i = 0; i < list.length; i++) {
     list[i] = new Date(list[i]);
   }
 }
  list.type = "dL";
 //assign methods to array:
 list.getTimes = dL.prototype.getTimes;
 list.getYears = dL.prototype.getYears;
 list.getFullYears = dL.prototype.getFullYears;
 list.getMin = dL.prototype.getMin;
 list.getMax = dL.prototype.getMax;
 list.getInterval = dL.prototype.getInterval;
 return list;
}




nL.prototype = new L();
nL.prototype.constructor = nL
function nL() {
      var args = [];
      var l = arguments.length;

      for(var i = 0; i < l; i++) {
        args[i] = Number(arguments[i]);
      }
      var array = L.apply(this, args);
      array = nL.toL(array);
      return array;
    }

nL.toL=function(array, forceToNumber) {
 forceToNumber = forceToNumber == null ? true : forceToNumber;
  var list = L.toL(array);
 let l = list.length;
  if(forceToNumber) {
   for(var i = 0; i < l; i++) {
     list[i] = Number(list[i]);
   }
 }
  list.type = "nL";
  //assign methods to array:
 
 
 list.getMin = nL.prototype.getMin;
 list.getMax = nL.prototype.getMax;
 list.getAmplitude = nL.prototype.getAmplitude;
 list.getIndexOfMin = nL.prototype.getIndexOfMin;
 list.getIndexOfMax = nL.prototype.getIndexOfMax;
 //
 list.getSum = nL.prototype.getSum;
 list.getProduct = nL.prototype.getProduct;
 list.getInterval = nL.prototype.getInterval;
 list.getIntervalWithAverage = nL.prototype.getIntervalWithAverage;
 list.getNumbersSimplified = nL.prototype.getNumbersSimplified;
  //statistics
 list.getMean = nL.prototype.getMean;
 list.getNorm = nL.prototype.getNorm;
 list.getStandardDeviation = nL.prototype.getStandardDeviation;
 list.getVariance = nL.prototype.getVariance;
 list.getMedian = nL.prototype.getMedian;
 list.getQuantiles = nL.prototype.getQuantiles;
  //sorting
 list.getSorted = nL.prototype.getSorted;
 list.getSortIndexes = nL.prototype.getSortIndexes;
  //clean
 list.cleanNonFinites = nL.prototype.cleanNonFinites;
  //
 list.getNormalized = nL.prototype.getNormalized;
 list.getNormalizedToMax = nL.prototype.getNormalizedToMax;
 list.getNormalizedToSum = nL.prototype.getNormalizedToSum;
  //math
 list.factor = nL.prototype.factor;
 list.add = nL.prototype.add;
 list.subtract = nL.prototype.subtract;
 list.divide = nL.prototype.divide;
 list.sqrt = nL.prototype.sqrt;
 list.pow = nL.prototype.pow;
 list.log = nL.prototype.log;
 list.floor = nL.prototype.floor;
 list.isEqual = nL.prototype.isEqual;
 list.addRandom = nL.prototype.addRandom;
 list.trim = nL.prototype.trim;
  list.getGeometricMean = nL.prototype.getGeometricMean;
 
  //transform
 list.approach = nL.prototype.approach;
  //override
 list.clone = nL.prototype.clone
 //
  return list;
}




I.prototype = new P();
I.prototype.constructor = I
function I(x, y) {
      DataType.apply(this, arguments);
      this.x = Number(x);
      this.y = Number(y);
      this.type = "I";
    }

pol3DL.prototype = new L();
pol3DL.prototype.constructor = pol3DL
function pol3DL() {
      var array = L.apply(this, arguments);
      array = pol3DL.toL(array);
      return array;
    }

pol3DL.toL=function(array) {
 let result = L.toL(array);
 result.type = "pol3DL";
  result.getBarycenter = pol3DL.prototype.getBarycenter;
  return result;
}




cScale.prototype = new DataType();
cScale.prototype.constructor = cScale
function cScale(colorScaleFunction) {
      DataType.apply(this, arguments);
      this.name = "";
      this.type = "cScale";

      this.colorScaleFunction = colorScaleFunction ? colorScaleFunction : blackScale;
    }

MetaCanvas.prototype.constructor = MetaCanvas
function MetaCanvas(options) {
      if(options==null){
        options = {
          container: document.querySelector( "#maindiv" ),
            cycle: function() {
            
            },
            onResize: function(){
              
            }
        }
      }
      this.container = options.container;
      this.container = this.container || document.querySelector( "#maindiv" );
      if (typeof this.container === 'string') {
        // Assume it is a selector and try and find the actual DOM node
        this.container = document.querySelector(this.container);
      }
      this.dimensions = options.dimensions;

      this.init = options.init || noOperation;
      this.cycle = options.cycle || noOperation;
      this.onResize = options.onResize || options.resize || noOperation;
      this._cycleInterval = options.cycleInterval === undefined ? 30 : options.cycleInterval;
      if (options.noLoop) {
        this._cycleInterval = 0;
      }
      if(options.forceTouch) this.IS_TOUCH = true

      this.ADJUST_PIXEL_RADIUS = true
      if(options.adjustPixelRatio!=null) this.ADJUST_PIXEL_RADIUS = options.adjustPixelRatio

      this._init(!options.noStart, options.noEvents);


}

Engine3D.prototype.constructor = Engine3D
function Engine3D(configuration) {
      configuration = configuration == null ? {} : configuration;
      this.lens = configuration.lens == null ? 300 : configuration.lens;

      this._freeRotation = false;

      this.setBasis(new Pol3D(new P3D(1, 0, 0), new P3D(0, 1, 0), new P3D(0, 0, 1)));

      this._cuttingPlane = 10;


      this._dx = 0; // for VR

      this.x0 = configuration.x0||0
      this.y0 = configuration.y0||0
      this.zoom = configuration.zoom||1
      this.min_zoom = 0.01
      this.max_zoom = 100

      this.alfa_rotation = 0
      this.beta_rotation = 0

      if(configuration.angles != null) this.setAngles(configuration.angles);
    }

Forces.prototype.constructor = Forces
function Forces(configuration) {
      this.k = configuration && configuration.k ? configuration.k : 0.01;
      this.dEqSprings = configuration && configuration.dEqSprings ? configuration.dEqSprings : 100;
      this.dEqRepulsors = configuration && configuration.dEqRepulsors ? configuration.dEqRepulsors : 500;
      this.friction = configuration && configuration.friction ? configuration.friction : 0.8;

      this.nodes = new ndL();

      // this.forcesList = new L();
      // this.equilibriumDistances = new nL();
      // this.forcesTypeList = new L();
      // this.from = new ndL();
      // this.to = new ndL();

      this.forces = new L()

      this._i0 = 0;
}

//---------------methods-----------------

P.prototype.getNorm=function() {
 return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
}
P.prototype.getAngle=function() {
 return Math.atan2(this.y, this.x);
}
P.prototype.factor=function(k) {
 if(k >= 0 || k < 0) return new P(this.x * k, this.y * k);
 if(k.type != null && k.type == 'P') return new P(this.x * k.x, this.y * k.y);
}
P.prototype.normalize=function() {
 let norm = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
 return new P(this.x / norm, this.y / norm);
}
P.prototype.normalizeToValue=function(k) {
 let factor = k / Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
 return new P(this.x * factor, this.y * factor);
}
P.prototype.subtract=function(point) {
 return new P(this.x - point.x, this.y - point.y);
}
P.prototype.add=function(point) {
 return new P(point.x + this.x, point.y + this.y);
}
P.prototype.addCoordinates=function(x, y) {
 return new P(x + this.x, y + this.y);
}
P.prototype.distanceToPoint=function(point) {
 return Math.sqrt(Math.pow(this.x - point.x, 2) + Math.pow(this.y - point.y, 2));
}
P.prototype.distanceToPointSquared=function(point) {
 return Math.pow(this.x - point.x, 2) + Math.pow(this.y - point.y, 2);
}
P.prototype.angleToPoint=function(point) {
 return Math.atan2(point.y - this.y, point.x - this.x);
}
P.prototype.expandFromPoint=function(point, factor) {
 return new P(point.x + factor * (this.x - point.x), point.y + factor * (this.y - point.y));
}
P.prototype.interpolate=function(point, t) {
 return new P((1 - t) * this.x + t * point.x, (1 - t) * this.y + t * point.y);
}
P.prototype.cross=function(point) {
 return this.x * point.y - this.y * point.x;
}
P.prototype.dot=function(point) {
 return this.x * point.x + this.y * point.y;
}
P.prototype.getRotated=function(angle, center) {
 center = center == null ? new P() : center;
  return new P(Math.cos(angle) * (this.x - center.x) - Math.sin(angle) * (this.y - center.y) + center.x, Math.sin(angle) * (this.x - center.x) + Math.cos(angle) * (this.y - center.y) + center.y);
}
P.prototype.clone=function() {
 return new P(this.x, this.y);
}
P.prototype.toString=function() {
 return "(x=" + this.x + ", y=" + this.y + ")";
}

L.prototype.downcast=function() {
 if(this.length === 0) {
   return this;
 }
  var typeOfElements = this.getTypeOfElements();
 let newList;
 switch(typeOfElements) {
   case "number":
     newList = nL.toL(this, false);
     newList.name = this.name;
     return newList;
   case "string":
     newList = sL.toL(this, false);
     newList.name = this.name;
     return newList;
   case "Rec":
     return this;
   case "date":
     newList = dL.toL(this, false);
     newList.name = this.name;
     return newList;
   case "L":
   case "dL":
   case "iL":
   case "sL":
   case "T":
     newList = T.toL(this, false);
     break;
   case "Array":
     newList = T.toL(this, false).getListsDowncasted();
     break;
   case "nL":
     newList = nT.toL(this, false);
     newList.name = this.name;
     return newList;
   case "P":
     newList = Pol.toL(this, false);
     break;
   case "Pol":
     newList = polL.toL(this, false);
     break;
   case "Nd":
     newList = ndL.toL(this, false);
     break;
   case "Rel":
     newList = relL.toL(this, false);
     break;
    case "P3D":
     newList = Pol3D.toL(this, false);
     break;
 }
  var l = this.length;
 let containsNulls = false;
 let allLists = true;
 let i;
  if(newList == null || (newList.type==null && newList == "") ) {//do not change newList == null
    for(i = 0; i<l; i++) {
     if(this[i]==null) containsNulls = true;
     if(this[i]==null || !(this[i].isList)) {
       allLists = false;
       break;
     }
   }
   if(allLists){
     newList = T.toL(this, false);
   }
 }
   if(newList != null) {
   newList.name = this.name;
   //return newList;
 } else {
   newList = this;
 }
  if(allLists){
   for(i = 0; i<l; i++) {
     if(newList[i]==null || newList[i].containsNulls){
       containsNulls = true;
       break;
     }
   }
 } else if(!containsNulls){
   for(i = 0; i<l; i++) {
     if(newList[i]==null){
       containsNulls = true;
       break;
     }
   }
 }
  newList.containsNulls = containsNulls;
  return newList;
}
L.prototype.get=function(indexOrName) {//@todo: make this efficient
 if(Array.isArray(indexOrName)) return this.getElements(indexOrName)

 if(typeof indexOrName =='string'){
   indexOrName = indexOrName.trim();
   var found = false;
   for(var i=0; i<this.length; i++){
     if(this[i]["name"]==indexOrName){
       found = true;
       indexOrName = i;
       break;
     }
   }
   if(!found) return null;// throw new Error("didn't find a list with name "+indexOrName);
 } else {
   indexOrName = indexOrName == null ? 0 : indexOrName;
   if(indexOrName<0) indexOrName += this.length;
   if(indexOrName>=this.length) indexOrName = Math.floor(indexOrName)%this.length;
 }
  return this[indexOrName];
}
L.prototype.getElements=function(indexesOrNames, nullIfNotFound) {
 if(indexesOrNames==null) return;
  var newList = instanceSameType(this);
 newList.name = this.name;
 let l = indexesOrNames.length;
 let i;
 let list;//element?
 let type = _typeOf(newList);
  var name = _typeOf(indexesOrNames)=='sL';
  for(i=0; i<l; i++){
   list = name?this.getElementByName(indexesOrNames[i]):this[indexesOrNames[i] < 0 ? indexesOrNames[i]+this.length : indexesOrNames[i]];
    if(list==null){
     if(nullIfNotFound || (!name && this[indexesOrNames[i]] === null) ) newList.push(null);
   } else {
     if(type=="ndL"){
       newList.addNode(list);
     } else {
       newList.push(list);
     }
   }
 }
 
 if(newList.type != 'L') return newList;
 return newList.downcast();
}

L.prototype.toArray=function() {//@todo: make this efficient
 let array = this.slice(0);
 array.name = this.name;
 array.type = this.type;
 return array;
}

L.prototype.isEqual=function(list) {
 if(list == null || this.length != list.length) return false;
  var i;
 let l = this.length;
 if(this.isTable){
   for(i = 0; i<l; i++) {
     if(!this[i].isEqual(list[i])) return false;
   }
   return true;
 }
 for(i = 0; i<l; i++) {
   if(this[i] != list[i]) return false;
 }
  return true;
}

L.prototype.getLengths=function() {
 return tonL(this.map(e=>e.length))
}

L.prototype.getTypeOfElements=function() {
 let typeOfElements = _typeOf(this[0]);
 let l = this.length;
 for(var i = 1; i<l; i++) {
   if(_typeOf(this[i]) != typeOfElements) return "";
 }
 return typeOfElements;
}
L.prototype.getTypes=function() {
 let types = new sL();
 let l = this.length;
 for(var i = 0; i<l; i++) {
   types[i] = _typeOf(this[i]);
 }
 return types;
}
L.prototype.getNames=function(typePreffixForLists, countDifferentSufixForLists, read_label) {
 let sl = new sL();
 sl.name = read_label?"labels":"names";
 let l = this.length;
 let name;
  if(typePreffixForLists && this["isTable"]) buildInformationObjectForTable(this);
  for(var i = 0; i<l; i++) {
   name = read_label && this[i].label!=null?this[i].label:this[i].name;
   if(typePreffixForLists && this[i]["isList"]){
     if(this[i].infoObject.isCategorical && this[i].infoObject.isNumeric){
       sl[i] = "[#c] "+name;
     } else if(this[i].infoObject.isCategorical){
       sl[i] = "[c] "+name;
     } else if(this[i].infoObject.isNumeric){
       sl[i] = "[#] "+name;
     } else {
       sl[i] = name;
     }
   } else {
     sl[i] = name;
   }
   if(countDifferentSufixForLists) sl[i]+=" ("+this[i].countDifferentElements()+")";
 }
 return sl;
}
L.prototype.getLabels=function(typeSuffixForLists, countDifferentSufixForLists) {
 return this.getNames(typeSuffixForLists, countDifferentSufixForLists, true);
}
L.prototype.getDescriptions=function() {
 let sl = new sL();
 let l = this.length;
 for(var i = 0; i<l; i++) {
   sl[i] = this[i].description;
 }
 return sl;
}
L.prototype.getCategories=function() {
 let sl = new sL();
 let l = this.length;
 for(var i = 0; i<l; i++) {
   sl[i] = this[i].category;
 }
 return sl;
}
L.prototype.getReversed=function() {
 let newList = this.clone();
 newList.reverse(); // uses the built-in array function and changes in place
 return newList;
}

L.prototype.getSubList=function() {
  var interval;
 let i;
 if(arguments[0]==null) return;
  if(arguments[0]["isList"]) {
   return this.getElements(arguments[0]);
    //  } else if(arguments.length > 2) {
    //    return this.getElements(arguments);
 } else if(_typeOf(arguments[0]) == 'number') {
   if(_typeOf(arguments[1]) != null && _typeOf(arguments[1]) == 'number') {
     interval = new I(arguments[0], arguments[1]);
   } else {
     interval = new I(arguments[0], this.length - 1);
   }
 } else if(arguments[0]["x"]!=null){
   interval = arguments[0];
 }
  if(interval.x<0) interval.x = this.length+interval.x;
 if(interval.y<0) interval.y = this.length+interval.y;
  var newInterval = new I(Math.max(Math.min(Math.floor(interval.x), this.length), 0), Math.max(Math.min(Math.floor(interval.y), this.length - 1), 0));
 let newList;
  if(arguments[2]) newInterval.y+=arguments[2];
  if(this.type == "nL") {
   newList = nL.toL(this.slice(newInterval.x, newInterval.y + 1), false);
   newList.name = this.name;
   return newList;
 } else if(this.type == "sL") {
   newList = sL.toL(this.slice(newInterval.x, newInterval.y + 1), false);
   newList.name = this.name;
   return newList;
 }
  var type = this.type;
  if(type == 'L' || type == 'T') {
   newList = new L();
 } else {
   newList = instantiate(type);
 }
  if(type=='ndL'){
   for(i = newInterval.x; i <= newInterval.y; i++) {
     newList.addNode(this[i]);
   }
 } else {
   for(i = newInterval.x; i <= newInterval.y; i++) {
     newList.push(this[i]);
   }
 }
  newList.name = this.name;
 if(type == 'L' || type == 'T') return newList.downcast();
 return newList;
}
L.prototype.getSubListByType=function(type) {
 let newList = new L();
 newList.name = this.name;
 for(var i=0; i<this.length;  i++){
   if(_typeOf(this[i]) == type) newList.push(this[i]);
 }
 return newList.downcast();
}
L.prototype.getElementNumberOfOccurrences=function(element) {
 let nOccurrences = 0;
 let from = 0;
 let index = this.indexOf(element, from);
 while(index > -1) {
   nOccurrences++;
   from = index + 1;
   index = this.indexOf(element, from);
 }
 return nOccurrences;
}
L.prototype.clone=function() {
 //TODO:check this! fromArray should suffice
 let clonedList = instanceSameType(this);
 let i;
 let l = this.length;
  for(i = 0; i<l; i++) {
   clonedList.push(this[i]);
 }
 clonedList.name = this.name;
 clonedList.fnDerived = this.fnDerived;
  return clonedList;
}

L.prototype.getWithoutRepetitions=function(bReturnIndexes,bUseObjectEquivalence) {
 return toL([...new Set(this)]).downcast()
}

L.prototype.getSimplified=function(nCategories, othersElement, nLWeights) {
 if(!nCategories) return
  var freqTable = this.getFrequenciesTable(true,false,false,nLWeights);
 let frequencyIndexesDictionary = getFirstOccurrenceDictionaryForList(freqTable[0]);
 let i;
 let l = this.length;
  if(othersElement==null) othersElement = "other";
  var newList = this.type=="sL"?new sL():new L();
 newList.name = this.name;
  for(i=0; i<l; i++){
   newList.push(frequencyIndexesDictionary[this[i]]<nCategories-1?this[i]:othersElement);
 }
  return newList;
}

L.prototype.countElement=function(element) {
 let n = 0;
 //this.forEach(function(elementInList) {
 let l = this.length;
  for(var i = 0; i<l; i++) {
   if(element == this[i]) n++;
 }
  return n;
}

L.prototype.countOccurrences=function() { //TODO: more efficient // problem with sL that contain elements such as "toString" and other Object properties
 let occurrences = new nL();
 let dictionary = {};
 let l = this.length;
 
 for(var i = 0; i<l; i++) {
   if(dictionary[this[i]]==null) dictionary[this[i]] = 0;
   dictionary[this[i]]++;
 }
  for(i = 0; i<l; i++) {
   occurrences[i] = dictionary[this[i]];
 }
  return occurrences;
}

L.prototype.countDifferentElements=function() {
 if(this.infoObject) return this.infoObject.numberDifferentElements;
  var dictionary = {};
 let n=0;
 
 for(var i = 0; i<this.length; i++){
   if(dictionary[this[i]]==null){
     dictionary[this[i]] = 1;
     n++;
   }
 }
  return n
}

L.prototype.getCategoryColors=function(alpha=1){
    return this.map(ob=>stringToColor(String(ob))).toL()
}

L.prototype.getFrequenciesTable=function(sortListsByOccurrences=true, addWeightsNormalizedToSum, addCategoricalColors, nLWeights) {
 //if(this.freqTable && this.freqTable.length==2 && (addWeightsNormalizedToSum || addCategoricalColors || nLWeights)) this.freqTable=null;
 let weightsNormalizedToSumName = "Occurrences normalized to sum";
 let categoricalColorsName = "Categorical colors";
  var table;
 
 let i;
 let index;
  if(this.freqTable){
   table = this.freqTable.getColumns([0,1]);
   elementList = table[0];
   nl = table[1];
 } else {
   table = new T();
   var elementList =  instanceSameType(this); //new L();
   var nl = new nL();
    table[0] = elementList;
   table[1] = nl;
    table._indexesDictionary = {};
    var l = this.length;
    for(i=0; i<l; i++){
     index = table._indexesDictionary[this[i]];
     if(index==null){
       index = elementList.length;
       elementList[index] = this[i];
       nl[index] = 0;
       table._indexesDictionary[this[i]]= index;
     }
     if(nLWeights && i < nLWeights.length)
       nl[index]+= nLWeights[i];
     else
       nl[index]++;
   }
 }
  var nlSum = 0;
  //sorts two lists at once to save some computation
 if(sortListsByOccurrences){
   var pairs = [];
   
   for(i=0; i<nl.length; i++){
     pairs[i] = [nl[i], elementList[i]];
     nlSum+=nl[i];
   }
   var sortedpairs = pairs.sort( function(a,b){return b[0]-a[0];} );
    table[0] = instanceSameType(elementList);
   table[1] = new nL();
    for(i=0; i<nl.length; i++){
     table[0][i] = sortedpairs[i][1];
     table[1][i] = sortedpairs[i][0];
   }
    table._indexesDictionary = null;
 }
  table[0].name = this.name == '' ? 'Element' : this.name;
 table[1].name = 'Frequency';
  if(addWeightsNormalizedToSum){
   if(nlSum==0) nlSum = table[1].getSum();
   table[2] = normalizeToSum(table[1],1,nlSum);
   table[2].name = weightsNormalizedToSumName;
 }
  if(addCategoricalColors){
   var colors = stringsToColors(table[0]);
   colors.name = categoricalColorsName;
    table.push(colors);
 }
  this.freqTable = table;
  return table;
}

L.prototype.allElementsAreEqual=function() {
 let i;
 if(this.length < 2) return true;
  var first = this[0];
 let l = this.length;
  for(i = 1; i<l; i++) {
   if(this[i] != first) return false;
 }
  return true;
}

L.prototype.getMode=function() {
 let dictionary = {};
  var nFirst = 0;
 let firstObject;
  for(var i=0; i<this.length; i++){
   if(dictionary[this[i]]==null) dictionary[this[i]]=0;
   dictionary[this[i]]++;
    if(dictionary[this[i]]>nFirst){
     nFirst = dictionary[this[i]];
     firstObject = this[i];
     if(nFirst>this.length*0.5) {
       break; //element appears more than 50%, no need to continue checking
     }
   }
 }
  //TODO: this method should be more efficient
 return firstObject;//this.getFrequenciesTable(true)[0][0];// countElementsRepetitionOnList(this, true)[0][0];
 
}

L.prototype.getMin=function() {
 if(this.length === 0) return null;
 let min = this[0];
 let i;
 let l = this.length;
 for(i = 1; i < l; i++) {
   min = Math.min(min, this[i]);
 }
 return min;
}
L.prototype.getMax=function() {
 if(this.length === 0) return null;
 let max = this[0];
 let i;
 let l = this.length;
 for(i = 1; i < l; i++) {
   max = Math.max(max, this[i]);
 }
 return max;
}
L.prototype.add=function(value) {
 if(value.constructor == Number) {
   var i;
   var l = this.length;
   var array = instanceSameType(this);
   for(i = 0; i < l; i++) {
     array.push(this[i] + value);
   }
   return array;
 }
}
L.prototype.getRandomElement=function() {
 return this[Math.floor(this.length * random())];
}
L.prototype.getRandomElements=function(n, withoutRepetitions, randomSeed, keepOrder) {
 if(n==null) return;
  var random = randomSeed!=null ? new _Alea("my", randomSeed, "seeds") : NumberOperators_random;
 withoutRepetitions = withoutRepetitions == null ? true : withoutRepetitions;
 n = Math.min(n, this.length);
 let newList = instanceSameType(this);
 let element;
  if(keepOrder){
   var list = this;
   if(withoutRepetitions){
     var listNoReps = this.getWithoutRepetitions();
     list = listNoReps;
   }
   n = Math.min(n, list.length);
   var table = new T();
   table.push(createSortedNumberList(list.length,0,1));
   table.push(createNumberListWithinInterval(list.length,new I(0, 1),0,randomSeed));
   table = table.sortRowsByList(1);
   table = table.sliceRows(0,n-1);
   table = table.sortRowsByList(0);
   newList = list.getElements(table[0]);
 } else {
   if(withoutRepetitions){
     var listNoReps = this.getWithoutRepetitions();
     n = Math.min(n, listNoReps.length);
     var listRandom = createNumberListWithinInterval(listNoReps.length,new I(0, 1),0,randomSeed);
     var listChoose = listNoReps.getSortedByList(listRandom);
     for(var i=0;i < n;i++) {
       newList.push(listChoose[i]);
     }
   }
   else
     while(newList.length < n) {
       element = this[Math.floor(this.length * random())];
       newList.push(element);
     }
 }
 newList.name = this.name;
 return newList;
}

L.prototype.getPropertyValues=function(propertyName, valueIfNull) {
 let newList = new L();
 newList.name = propertyName;
 let val;
 let l = this.length;
 for(var i = 0; i<l; i++) {
   val = getPropertyValue(this[i],propertyName);
   newList[i] = (val == null ? valueIfNull : val);
 }
 return newList.downcast();
}
L.prototype.isSorted=function(ascending){
 ascending = ascending==null?true:Boolean(ascending);
  var l = this.length;
 let i;
 if(ascending){
   for(i=1;i<l;i++){
     if(this[i]<this[i-1]) return false;
   }
 } else {
   for(i=1;i<l;i++){
     if(this[i]>this[i-1]) return false;
   }
 }
 return true;
}

L.prototype.getSortedByIndexes=function(indexes) {
 if(indexes==null) return;
  var result = instanceSameType(this);
 result.name = this.name;
 let l = this.length;
 for(let i = 0; i<l; i++) {
   if(indexes[i] != -1) result.push(this[indexes[i]]);
 }
 return result
}

L.prototype.getSortedByProperty=function(propertyName, ascending=true, secondPropertyName) {
 if(propertyName.includes(".")) return this.getSortedByList(this.getPropertyValues(propertyName), ascending, secondPropertyName!=null?this.getPropertyValues(propertyName):null);

 if(this.length==0) return this.clone();
  var type = _typeOf(this[0][propertyName]);
 let notNumbersOrDates = type!='number' && type!='date';
  var comparator;
 if(secondPropertyName){
   if(ascending) {
     if(notNumbersOrDates){
       comparator = function(a, b) {
         if(a[propertyName] == b[propertyName]) return a[secondPropertyName] > b[secondPropertyName] ? 1 : -1;
         return a[propertyName] > b[propertyName] ? 1 : -1;
       };
     } else {
       comparator = function(a, b) {
         if(a[propertyName] == b[propertyName]) return a[secondPropertyName] - b[secondPropertyName];
          return a[propertyName] - b[propertyName];
       };
     }
   } else {
     if(notNumbersOrDates){
       comparator = function(a, b) {
         if(a[propertyName] == b[propertyName]) return b[secondPropertyName] > a[secondPropertyName] ? 1 : -1;
         return b[propertyName] > a[propertyName] ? 1 : -1;
       };
     } else {
       comparator = function(a, b) {
         if(a[propertyName] == b[propertyName]) return b[secondPropertyName] - a[secondPropertyName];
         return b[propertyName] - a[propertyName];
       };
     }
   }
 } else {
   if(ascending) {
     if(notNumbersOrDates){
       comparator = function(a, b) {
         return a[propertyName] > b[propertyName] ? 1 : -1;
       };
     } else {
       comparator = function(a, b) {
          return a[propertyName] - b[propertyName];
       };
     }
   } else {
     if(notNumbersOrDates){
       comparator = function(a, b) {
         return b[propertyName] > a[propertyName] ? 1 : -1;
       };
     } else {
       comparator = function(a, b) {
         return b[propertyName] - a[propertyName];
       };
     }
   }
 }
 return this.clone().sort(comparator);
}
L.prototype.getSorted=function(ascending) {
 return this.getSortedByList(this, ascending);
}
L.prototype.getSortedByList=function(list, ascending, smallPerturbation, stable) {
 if(list==null) return null;
  ascending = ascending == null ? true : ascending;
 stable = stable == null ? false : stable;
  var pairsArray = [];
 let i;
 let l = this.length;
  if(smallPerturbation && list.type=="nL"){
   for(i = 0; i<l; i++) {
     pairsArray[i] = [this[i], list[i]+Math.random()*10000*Number.MIN_VALUE, i];
   }
 }
 else if(list.type=="dL"){
   for(i = 0; i<l; i++) {
     pairsArray[i] = [this[i], list[i].getTime(),i];
   }
 }
 else{
   for(i = 0; i<l; i++) {
     pairsArray[i] = [this[i], list[i],i];
   }
 }
 let bSimpleComparator = (list.type=="nL" || list.type=="dL") && !stable;
  var comparator;
 if(ascending) {
   if(bSimpleComparator){
     comparator = function(a, b) {
       return a[1] - b[1];
     };
   }
   else{
     if(stable)
       comparator = function(a, b) {
         return a[1] < b[1] ? -1 : a[1] > b[1] ?  1 : a[2] - b[2];
       };
     else
       comparator = function(a, b) {
         return a[1] < b[1] ? -1 : a[1] > b[1] ?  1 : 0;
       };
   }
 } else {
   if(bSimpleComparator){
     comparator = function(a, b) {
       return b[1] - a[1];
     };
   }
   else{
     if(stable)
       comparator = function(a, b) {
         return a[1] < b[1] ? 1 : a[1] > b[1] ? -1 : a[2] - b[2];
       };
     else
       comparator = function(a, b) {
         return a[1] < b[1] ? 1 : a[1] > b[1] ?  -1 : 0;
       };
   }
 }
  pairsArray = pairsArray.sort(comparator);
  var newList = instanceSameType(this);
 newList.name = this.name;
  for(i = 0; i<l; i++) {
   newList[i] = pairsArray[i][0];
 }
  return newList;
}
L.prototype.getSortedRandom=function() {
 //complexity can be improved to O(n), by swaping values in order
 let newList = this.clone();
 newList.name = this.name;
 newList.sort(function() {
   return random() - 0.5;
 });
 return newList;
}
L.prototype.indexOfElement=function(element) { //TODO: test if this is faster than indexOf
 let i;
 let l = this.length;
 for(i = 0; i<l; i++) {
   if(this[i] == element) return i;
 }
 return -1;
}
L.prototype.indexesOf=function(element) {//@todo: probably better to just traverse de list
 //if(element==null) return;
  var index = this.indexOf(element);
 let nl = new nL();
  while(index != -1) {
   nl.push(index);
   index = this.indexOf(element, index + 1);
 }
 return nl;
}
L.prototype.indexOfElements=function(elements) {//@todo: probably better to just traverse de list
 if(elements==null) return;
  var nl = new nL();
 let l = elements.length;
 for(var i = 0; i<l; i++) {
   nl[i] = this.indexOf(elements[i]);
 }
 return nl;
}
L.prototype.indexesOfElements=function(elements, includeMinusOneWhenNotIncluded) {
 if(elements==null) return;
  var dictionary;
  var nl = new nL();
 let i;
 let l = this.length;
 let index;
  dictionary = getFirstOccurrenceDictionaryForList(this);
  if(includeMinusOneWhenNotIncluded){
   for(i = 0; i<elements.length; i++) {
     index = dictionary[elements[i]];
     nl[i] = index==null?-1:index;
   }
 } else {
   /*
   dictionary = getBooleanDictionaryForList(elements);
    for(i = 0; i<l; i++) {
     if(dictionary[this[i]]) nl.push(i);
   }
   */
   for(i = 0; i<elements.length; i++) {
     index = dictionary[elements[i]];
     if(index!=null) nl.push(index);
   }
 }
 return nl;
}
L.prototype.getElementByName=function(name, returnIndex) {
 if(name==null) return null;
  var l = this.length;
 for(var i = 0; i<l; i++) {
   if(this[i].name == name) return returnIndex ? i : this[i];
 }
 return returnIndex ? -1 : null;
}
L.prototype.getElementsByNames=function(names, returnIndex, includeElementIfNameNotFound, elementToIncludeIfNameNotFound) {
 if(names==null) return;
  var list = returnIndex ? new nL() : new L();
 let j, i;
 let name;
 let l = this.length;
 let found;
  //names.forEach(function(name) {
 for(j=0; j<names.length; j++){
   name = names[j];
   found = false;
   for(i = 0; i<l; i++) {
     if(this[i].name == name) {
       list.push(returnIndex ? i : this[i]);
       found = true;
       break;
     }
   }
    if(includeElementIfNameNotFound && !found) list.push(returnIndex ? -1 : elementToIncludeIfNameNotFound);
    //list.push(returnIndex ? -1 : null);
 }
 //});
  return returnIndex ? list : list.downcast();
}
L.prototype.getFirstElementByPropertyValue=function(propertyName, value) {
 let l = this.length;
 for(var i = 0; i<l; i++) {
   if(this[i][propertyName] == value) return this[i];
 }
 return null;
}
L.prototype.getFilteredByBooleanList=function(booleanList) {
 let newList = new L();
 newList.name = this.name;
 let i;
 let l = this.length;
 for(i = 0; i<l; i++) {
   if(booleanList[i]) newList.push(this[i]);
 }
 return newList.downcast();
}
L.prototype.getFilteredByPropertyValue=function(propertyName, propertyValue, comparison) {
 comparison = comparison == null ? "equal" : comparison;
  var newList = new L();
 newList.name = "filtered_" + this.name;
 let i;
 let l = this.length;
 switch(comparison) {
   case "equal":
     for(i = 0; i<l; i++) {
     if(this[i][propertyName] == propertyValue) newList.push(this[i]);
   }
   break;
   case "different":
     for(i = 0; i<l; i++) {
     if(this[i][propertyName] != propertyValue) newList.push(this[i]);
   }
   break;
   case "greater":
     for(i = 0; i<l; i++) {
     if(this[i][propertyName] > propertyValue) newList.push(this[i]);
   }
   break;
   case "lower":
     for(i = 0; i<l; i++) {
     if(this[i][propertyName] < propertyValue) newList.push(this[i]);
   }
   break;
 }
  return newList.downcast();
}

L.prototype.getWithoutElementsAtIndexes=function(indexes) {
 let i;
 let newList;
 let l = this.length;
 if(this.type == 'L') {
   newList = new L();
 } else {
   newList = instantiate(_typeOf(this));
 }
 // need to clone input since we can't modify it. It may be an array so we can't just use .clone
 indexes = nL.toL(indexes.slice(), false);
 // check for negative indexes
 for(i=0; i < indexes.length; i++){
   if(indexes[i] < 0)
     indexes[i] += this.length;
 }
 for(i = 0; i < l; i++) {
   if(!indexes.includes(i)) {
     newList.push(this[i]);
   }
 }
 if(this.type == 'L') return newList.downcast();
 newList.name = this.name;
 return newList;
}

L.prototype.getWithoutElementAtIndex=function(index) {
 let newList;
 let l = this.length;
  if(index<0) index+=l;
  if(this.type == 'L') {
   newList = new L();
 } else {
   newList = instanceSameType(this);
 }
 for(var i = 0; i<l; i++) {
   if(i != index) {
     newList.push(this[i]);
   }
 }
 newList.name = this.name;
 if(this.type == 'L') return newList.downcast();
 return newList;
}

L.prototype.getWithoutElement=function(element) {
 if(element==undefined) element = null;
 if(element != null && !this.includes(element)) return this;
  var newList = new L();
 newList.name = this.name;
 
 let i;
 let l = this.length;
 for(i = 0; i<l; i++) {
   if(this[i]!=element) newList.push(this[i]);
 }
  return newList.downcast();
}

L.prototype.getWithoutElements=function(list) {//TODO: more efficiency with dictionary
 let newList;
 let i;
 let l = this.length;
 if(this.type == 'L') {
   newList = new L();
 } else {
   newList = instanceSameType(this);
 }
  if(this["isTable"]){
   for(i = 0; i<l; i++) {
     if(!list.includes(this[i])){
       newList.push(this[i]);
     }
   }
 } else {
   var bDictionary = getBooleanDictionaryForList(list);
   for(i = 0; i<l; i++) {
     if(!bDictionary[this[i]]) {
       newList.push(this[i]);//@todo: solve ndL case
     }
   }
 }
  newList.name = this.name;
 if(this.type == 'L') return newList.downcast();
 return newList;
}

L.prototype.getFilteredByFunction=function(func,name) {
 let newList = instanceSameType(this);
 let l = this.length;
 for(var i = 0; i<l; i++) {
   if(func(this[i],i,this)) {
     if(newList.type == 'ndL')
       newList.addNode(this[i]);
     else
       newList.push(this[i]);
   }
 }
 if(name)
   newList.name = name;
 else
   newList.name = this.name;
 if(this.type == 'L') return newList.downcast();
 return newList;
}


L.prototype.insert=function(element, index, replace){
 replace = replace==null?true:replace;
 index = index==null?0:index;
 if(element==null) return;
  if(typeof index =='string') index = this.getNames().indexOf(index);
 if(index==-1){
   throw new Error("element with given name not found");
 }
  var list;
 if(replace){
   list = this.clone();
   list.name = this.name;
   list[index] = element;
   return list.downcast();
 }
 list = new L();
 list.name = this.name;
 for(var i=0; i<this.length+1;i++){
   if(i<index){
     list[i] = this[i];
   } else if(i==index){
     list[i] = element;
   } else {
     list[i] = this[i-1];
   }
 }
  return list.downcast();
}
L.prototype.insertMany=function(elements, indexes, replace){
 if(elements==null || indexes==null) return null;
 replace = replace==null?true:replace;
  if(elements.length!=indexes.length){
   throw new Error('indexes and elements need to be the same length');
 }
  if(indexes.type == "sL") indexes = this.getNames().indexesOfElements(indexes);
 if(indexes==null || indexes.length!=elements.length){
   throw new Error("some elements with given names not found");
 }
 
 let list;
 if(replace){
   var l = Math.min(elements.length, indexes.length);
   list = this.clone();
   list.name = this.name;
   for(var i=0; i<l; i++){
     list[indexes[i]] = elements[i];
   }
   return list.downcast();
 }
 
 
  list = new L();
 list.name = this.name;
  elements = elements.getSortedByList(indexes);
 indexes = indexes.getSorted();
  for(var i=0;i<elements.length;i++){
   list[indexes[i]+i] = elements[i];
 }
  var next = 0;
 for(i=0; i<this.length; i++){
   while(list[next]!=null) {
     next++;
   }
   list[next]=this[i];
   next++;
 };
  /*
 let indexElement = 0;
 let element;
  for(var i=0; i<this.length+l; i++){
   var indexPosition = indexes.indexOf(i);
   if(indexPosition>=0){
     element = elements[indexPosition];
     list[i+indexElement] = element;
     indexElement++;
   } else {
     list[i+indexElement] = this[i];
   }
 }
 */

 return list.downcast();
}
L.prototype.concat=function() {//fix this
 if(arguments[0] == null) return this;
  if(arguments[0].type == this.type) {//var type = … / switch/case
   if(this.type == "T") {
     return T.toL(this._concat.apply(this, arguments), false);
   } else if(this.type == "nL") {
     return nL.toL(this._concat.apply(this, arguments), false);
   } else if(this.type == "sL") {
     return sL.toL(this._concat.apply(this, arguments), false);
   } else if(this.type == "dL") {
     return dL.toL(this._concat.apply(this, arguments), false);
   } else if(this.type == "T") {
     return T.toL(this._concat.apply(this, arguments), false);
   } else if(this.type == "nT") {
     return nT.toL(this._concat.apply(this, arguments), false);
   } else if(this.type == "ndL"){
     var newList = this.clone();
     var args = arguments[0];
     var i;
     var l = args.length;
     for(i=0; i<l; i++){
       newList.addNode(args[i]);
     }
     return newList;
   }
 }
 return L.toL(this._concat.apply(this, arguments)).downcast();
}
L.prototype.toNumberList=function(valueForNaN, mode) {
 if(this.type=="nL") return this;
 mode = mode==null?0:mode;
  var nl = new nL();
 let l = this.length;
 let i;
 let containsNulls = false;
  if(this.type=="dL"){
   if(nl.name == '')
     nl.name = 'decimal date';
   for(i = 0; i<l; i++) {
     //nl[i] = this[i].getTime();
     nl[i] = getDecimalDate(this[i]);
   }
 } else {
   for(i = 0; i<l; i++) {
     nl[i] = mode==0?parseFloat(this[i]):Number(this[i]);
     if(isNaN(nl[i])){
       nl[i] = valueForNaN;
       if(valueForNaN==null) containsNulls = true;
     }
   }
 }
  if(containsNulls){
   nl = L.toL(nl);
 }
  nl.name = this.name;
  return nl.downcast();
}
L.prototype.toStringList=function() {
 if(this.type=="sL") return this;
  var l = this.length;
 let i;
 let sl = new sL();
  sl.name = this.name;
 for(i = 0; i<l; i++) {
   sl[i] = String(this[i]);
   // if(typeof this[i] == 'number') {
   //   sl[i] = String(this[i]);
   // } else {
   //   sl[i] = this[i].toString();
   // }
 }
 return sl;
}
L.prototype.toColorList=function(stableColors, colorScaleForNumbers) {
 let colors;
  if(this.type=="cL") return this;
  if(this.type=="nL"){

    colors = createColorListFromNumberList(this, colorScaleForNumbers, 1)

    // let interval = this.getInterval()
    // if(interval.x<0 && interval.y>0){
    //     let absMax = Math.max(Math.abs(interval.x), Math.abs(interval.y))
    //     colors = new _.cL()
    //     this.forEach(s=>{
    //         let v = !s?0.5:0.5 - 0.5*s/absMax
    //         colors.push(_.interpolateColors(_.blueWhiteRed(v), "rgb(255,255,255)", 0.6))
    //     })
    // } else {
    //     colors = createColorListFromNumberList(this, colorScaleForNumbers);
    // }
   
   colors.name = "colors";
   return colors;
 }
  if(stableColors) return colorsForCategoricalList(this, null, true);
  if(this.type=="sL"){
   // if all elements are string colors then use them directly
   var clr, clrList = new cL();
   clrList.name = this.name;
   var rRGBA = /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),[\.0123456789]+\)$/;
   for(var i=0; i < this.length; i++){
     clr = colorStringToRGB(this[i]);
     if(clr == null) break;
     if(rRGBA.test(this[i]))
       clrList.push(this[i]);
     else
       clrList.push('rgb(' + clr[0] + ',' + clr[1] + ',' + clr[2] + ')');
   }
   
   clrList.name = "colors";
    if(clr != null)
     return clrList;
 }
  colors = colorsForCategoricalList(this);
 colors.name = "colors";
  return colors;
}
L.prototype.removeElements=function(elements) { //TODO: make it more efficient (avoiding the splice method)
 let i;
 let dictionary = {};
 let l = this.length;
 let nElements = elements.length;
  for(i=0; i<nElements; i++){
   dictionary[elements[i]] = true;
 }
  for(i = 0; i<l; i++) {
   if(dictionary[this[i]]) {
     this.splice(i, 1);
     i--;
   }
 }
}
L.prototype.removeElement=function(element) {
 let index = this.indexOf(element);
 if(index != -1) this.splice(index, 1);
}

L.prototype.pushIfUnique=function(element) {
 let notIncluded = !this.includes(element)
 if(notIncluded) this.push(element)
  return notIncluded
}

L.prototype.forEachPair=function(func) {
 for(var i=0; i<this.length; i++){
    for(var j=i+1; j<this.length; j++){
        func.call(this, this[i], this[j], i, j)
    }
 }
}





L.prototype.removeElementAtIndex=function(index) { //deprecated
 this.splice(index, 1);
}
L.prototype.removeElementsAtIndexes=function(indexes) {
 indexes = indexes.sort(function(a, b) {
   return a - b;
 });
  for(var i = 0; indexes[i] != null; i++) {
   this.splice(indexes[i] - i, 1);
 }
}
L.prototype.setNames=function(names, transformative=true, indexesOrNames) {
 if(names == null) return this;
 if(typeof names === 'string' && names.search(/\n|\r|\,/)!=-1) names = names.split(/\n|\r|\,/g);
 if(typeof names === 'string') names = [names];
  var i,j;
  var nLElementsToChange = indexesOrNames==null ? createSortedNumberList(names.length) : indexesOrNames;
 if(nLElementsToChange.type == 'sL')
   nLElementsToChange = this.getElementsByNames(nLElementsToChange,true,true);
 let l = Math.min(nLElementsToChange.length, names.length);
  var newList = transformative?this:this.clone();
  for(i=0; i<l; i++){
   j = nLElementsToChange[i];
   if(j == -1 && indexesOrNames.type == 'sL')
     throw new Error('No element found with name: ' + indexesOrNames[i]);
   else if(j < 0 || j >= this.length)
     throw new Error('Invalid index: ' + j);
    newList[j].name = names[i]
 }
 
 return newList;
}
L.prototype.setPropertyValues=function(propertyName, values, transformative) {
 if(propertyName == null || values==null) return null;
 if(!Array.isArray(values)) values = [values];
  var n = values.length;
 let l = this.length;
  var newList = transformative?this:this.clone();
  for(var i=0; i<l; i++){
   //this[i][propertyName] = values[i % n];
   newList[i] = setPropertyValue(this[i], propertyName, values[i%n], transformative);
 }
 return newList;
}
L.prototype.splice=function() { //TODO: replace
 switch(this.type) {
   case 'nL':
     return nL.toL(this._splice.apply(this, arguments));
   case 'sL':
     return sL.toL(this._splice.apply(this, arguments));
   case 'ndL':
     return ndL.toL(this._splice.apply(this, arguments));
   case 'dL':
     return dL.toL(this._splice.apply(this, arguments));
 }
 return L.toL(this._splice.apply(this, arguments)).downcast();
}
iL.prototype.getInterval=function() {
 if(this.length === 0) return null;
  var max = Math.max(this[0].x, this[0].y);
 let min = Math.min(this[0].x, this[0].y);
 let l = this.length;
 let i;
 for(i = 1; i<l; i++) {
   max = Math.max(max, this[i].x, this[i].y);
   min = Math.min(min, this[i].x, this[i].y);
 }
 let interval = new I(min, max);
 return interval;
}
iL.prototype.getAmplitudes=function() {
 if(this.length === 0) return null;
  var i;
 let nl = new nL();
  for(i=0; i<this.length; i++){
   nl[i] = this[i].getAmplitude();
 }
  return nl;
}
cL.prototype.getRgbArrays=function() {
 let rgbArrays = new L();
 let l = this.length;
  for(var i = 0; i<l; i++) {
   rgbArrays[i] = colorStringToRGB(this[i]);
 }
  return rgbArrays;
}

cL.prototype.getInterpolated=function(color, value) {
 let newColorList = new cL();
 let l = this.length;
  for(var i = 0; i<l; i++) {
   newColorList[i] = interpolateColors(this[i], color, value);
 }
  newColorList.name = this.name;
 return newColorList;
}

cL.prototype.getInverted=function() {
 let newColorList = new cL();
 let l = this.length;
  for(var i = 0; i<l; i++) {
   newColorList[i] = invertColor(this[i]);
 }
  newColorList.name = this.name;
 return newColorList;
}
cL.prototype.addAlpha=function(alpha) {
 let newColorList = new cL();
 let l = this.length;
  for(var i = 0; i<l; i++) {
   newColorList[i] = addAlpha(this[i], alpha);
 }
  newColorList.name = this.name;
 return newColorList;
}
P3D.prototype.distanceToPoint3D=function(point3D) {
 return Math.sqrt(Math.pow(Math.abs(this.x - point3D.x), 2) + Math.pow(Math.abs(this.y - point3D.y), 2) + Math.pow(Math.abs(this.z - point3D.z), 2));
}
P3D.prototype.distanceToPointSquared=function(point3D) {
 return Math.pow(Math.abs(this.x - point3D.x), 2) + Math.pow(Math.abs(this.y - point3D.y), 2) + Math.pow(Math.abs(this.z - point3D.z), 2);
}
P3D.prototype.getNorm2=function() {
 return (this.x * this.x) + (this.y * this.y) + (this.z * this.z);
}
P3D.prototype.getNorm=function() {
 return Math.sqrt((this.x * this.x) + (this.y * this.y) + (this.z * this.z));
}
P3D.prototype.normalizeToValue=function(k) {
 let factor = k / Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2));
 return new P3D(this.x * factor, this.y * factor, this.z * factor);
}
P3D.prototype.cross=function(point3D) {
 let _x = this.y * point3D.z - this.z * point3D.y;
 let _y = this.z * point3D.x - this.x * point3D.z;
 let _z = this.x * point3D.y - this.y * point3D.x;
 return new P3D(_x, _y, _z);
}
P3D.prototype.dot=function(point3D) {
 return this.x * point3D.x + this.y * point3D.y + this.z * point3D.z;
}
P3D.prototype.angleToPoint=function(point3D) {
 let n0 = this.getNorm();
 let n1 = point3D.getNorm();
 return Math.acos(this.dot(point3D)/(n0*n1));
}
P3D.prototype.add=function(point) {
 return new P3D(point.x + this.x, point.y + this.y, point.z + this.z);
}
P3D.prototype.subtract=function(point) {
 return new P3D(this.x - point.x, this.y - point.y, this.z - point.z);
}
P3D.prototype.factor=function(k) {
 return new P3D(this.x * k, this.y * k, this.z * k);
}
P3D.prototype.interpolate=function(point3D, t) {
 return new P3D((1 - t) * this.x + t * point3D.x, (1 - t) * this.y + t * point3D.y, (1 - t) * this.z + t * point3D.z);
}
P3D.prototype.getAngles=function() {
 let radius = Math.sqrt((this.x * this.x) + (this.y * this.y) + (this.z * this.z));
 let alfa = 0.5 * Math.PI - Math.atan2(this.z / radius, this.y / radius);
 let beta = -Math.asin(this.x / radius);
 if(alfa < -Math.PI) alfa += 2 * Math.PI;
 if(alfa > Math.PI) alfa -= 2 * Math.PI;
 if(beta < -Math.PI) beta += 2 * Math.PI;
 if(beta > Math.PI) beta -= 2 * Math.PI;
 return new P3D(alfa, beta, 0);
}
P3D.prototype.getInverseAngles=function() {
 let radius = Math.sqrt((this.x * this.x) + (this.y * this.y) + (this.z * this.z));
 let alfa = -0.5 * Math.PI + Math.atan2(-this.z / radius, -this.y / radius);
 let beta = Math.asin(-this.x / radius);
 if(alfa < -Math.PI) alfa += 2 * Math.PI;
 if(alfa > Math.PI) alfa -= 2 * Math.PI;
 if(beta < -Math.PI) beta += 2 * Math.PI;
 if(beta > Math.PI) beta -= 2 * Math.PI;
 return new P3D(alfa, beta, 0);
}
P3D.prototype.clone=function() {
 return new P3D(this.x, this.y, this.z);
}
P3D.prototype.toString=function() {
 return "(x=" + this.x + ", y=" + this.y + ", z=" + this.z + ")";
}


Pol3D.prototype.getBarycenter=function() {
    let x=0;
    let y=0;
    let z=0;
    for(var i=0; i<this.length; i++){
      x+=this[i].x;
      y+=this[i].y;
      z+=this[i].z;
    }
    return new P3D(x/this.length, y/this.length, z/this.length)
}

Pol3D.prototype.add=function(p3D_to_add) {
    return this.map(p3D=>p3D.add(p3D_to_add)).toL()
}

Pol3D.prototype.factor=function(k) {
    return this.map(p3D=>p3D.factor(k)).toL()
}




Rec.prototype.getRight=function() {
 return this.x + this.width;
}
Rec.prototype.getBottom=function() {
 return this.y + this.height;
}
Rec.prototype.setRight=function(value) {
 this.width = value - this.x;
}
Rec.prototype.setBottom=function(value) {
 this.height = value - this.y;
}
Rec.prototype.getTopLeft=function() {
 return new P(this.x, this.y);
}
Rec.prototype.getTopRight=function() {
 return new P(this.x + this.width, this.y);
}
Rec.prototype.getBottomRight=function() {
 return new P(this.x + this.width, this.y + this.height);
}
Rec.prototype.getBottomLeft=function() {
 return new P(this.x, this.y + this.height);
}
Rec.prototype.getCenter=function() {
 return new P(this.x + 0.5 * this.width, this.y + 0.5 * this.height);
}
Rec.prototype.getRandomPoint=function() {
 return new P(this.x + Math.random() * this.width, this.y + Math.random() * this.height);
}
Rec.prototype.getIntersection=function(rectangle) {
 if(rectangle.x + rectangle.width < this.x || rectangle.x > this.x + this.width || rectangle.y + rectangle.height < this.y || rectangle.y > this.y + this.height) return null;
 let xR = Math.max(rectangle.x, this.x);
 let yR = Math.max(rectangle.y, this.y);
 return new Rec(xR, yR, Math.min(rectangle.x + rectangle.width, this.x + this.width) - xR, Math.min(rectangle.y + rectangle.height, this.y + this.height) - yR);
}
Rec.prototype.interpolate=function(rectangle, t) {
 let mint = 1 - t;
 return new Rec(mint * this.x + t * rectangle.x, mint * this.y + t * rectangle.y, mint * this.width + t * rectangle.width, mint * this.height + t * rectangle.height);
}
Rec.prototype.getRatio=function() {
 return Math.max(this.width, this.height) / Math.min(this.width, this.height);
}
Rec.prototype.getArea=function() {
 return this.width * this.height;
}
Rec.prototype.containsPoint=function(point) {
 return(this.x <= point.x && this.x + this.width >= point.x && this.y <= point.y && this.y + this.height >= point.y);
}
Rec.prototype.pointIsOnBorder=function(point, margin) {
 margin = margin == null ? 1 : margin;
 if(point.x >= this.x - margin && point.x <= this.x + this.width + margin) {
   if(point.y >= this.y - margin && point.y <= this.y + margin) return true;
   if(point.y >= this.y + this.height - margin && point.y <= this.y + this.height + margin) return true;
   if(point.y >= this.y - margin && point.y <= this.y + this.height + margin) {
     if(point.x < this.x + margin || point.x > this.x + this.width - margin) return true;
   }
 }
 return false;
}
Rec.prototype.getNormalRectangle=function() {
 return new Rec(Math.min(this.x, this.x + this.width), Math.min(this.y, this.y + this.height), Math.abs(this.width), Math.abs(this.height));
}
Rec.prototype.intersectsRectangle=function(rectangle) {
 return (this.x + this.width >= rectangle.x) && (this.y + this.height >= rectangle.y) && (rectangle.x + rectangle.width >= this.x) && (rectangle.y + rectangle.height >= this.y);
}
Rec.prototype.containsRectangle=function(rectangle){
 if(rectangle.getRight() <= this.getRight() &&
    rectangle.x >= this.x &&
    rectangle.getBottom() <= this.getBottom() &&
    rectangle.y >= this.y )
   return true;
 return false;
}
Rec.prototype.expand=function(expansion, centerPoint) {
 centerPoint = centerPoint || new P(this.x + 0.5 * this.width, this.y + 0.5 * this.height);
 return new Rec((this.x - centerPoint.x) * expansion + centerPoint.x, (this.y - centerPoint.y) * expansion + centerPoint.y, this.width * expansion, this.height * expansion);
}
Rec.prototype.expandHorizontal=function(expansion, x) {
 x = x || this.x + 0.5 * this.width;
 return new Rec((this.x - x)*expansion + x, this.y, this.width*expansion, this.height);
}
Rec.prototype.expandVertical=function(expansion, y) {
 y = y || this.y + 0.5 * this.height;
 return new Rec(this.x, (this.y - y)*expansion + y, this.width, this.height*expansion);
}
Rec.prototype.isEqual=function(rectangle) {
 return this.x == rectangle.x && this.y == rectangle.y && this.width == rectangle.width && this.height == rectangle.height;
}
Rec.prototype.clone=function() {
 return new Rec(this.x, this.y, this.width, this.height);
}
Rec.prototype.toString=function() {
 return "(x=" + this.x + ", y=" + this.y + ", w=" + this.width + ", h=" + this.height + ")";
}

T.prototype.applyFunction=function(func) {
 //TODO: to be tested!
 let i;
 let newTable = new T();
  newTable.name = this.name;
  for(i = 0; this[i] != null; i++) {
   newTable[i] = this[i].applyFunction(func);
 }
 return newTable.downcast();
}
T.prototype.getListsDowncasted=function() {
 return T.toL(this.map(function(list){return list.downcast()}));
}
T.prototype.get=function(indexOrNameOfColumn, row0, row1, without_repetitions) {
  var i;
 let found;
  if(indexOrNameOfColumn && Array.isArray(indexOrNameOfColumn)){
   return this.getColumns(indexOrNameOfColumn)
 } else if(typeof indexOrNameOfColumn =='string'){
   indexOrNameOfColumn = indexOrNameOfColumn.trim();
   found = false;
   for(i=0; i<this.length; i++){
     if(this[i].name==indexOrNameOfColumn){
       found = true;
       indexOrNameOfColumn = i;
       break;
     }
   }
   if(!found){
     return null;
   }
 } else {
   indexOrNameOfColumn = indexOrNameOfColumn == null ? 0 : indexOrNameOfColumn;
   if(indexOrNameOfColumn<0){
     indexOrNameOfColumn+=this.length;
   }
 }
  var list = this[indexOrNameOfColumn];
  if(list==null){
   if(typeof indexOrNameOfColumn == 'number'){
     if(indexOrNameOfColumn>this.length){
       throw new Error("provided indexElementInColumn bigger than list in indexOrNameOfColumn");
     } else {
       return null;
     }
   } else if(typeof indexOrNameOfColumn == 'string'){
     
   } else {
     throw new Error("indexOrNameOfColumn should be a number or a string");
   }
 }
  if(list==null) return null;
 
 if(without_repetitions) return list.getWithoutRepetitions();
  if(row0==null && row1==null) return list;
  var l = list.length;
  if(row0==null) row0=0;
 if(row1==null) row1=l-1;
 if(row0<0) row0 += list.length;
 if(row1<0) row1 += list.length;
  row1 = Math.min(row1, l-1);
  var newList = new L();
 newList.name = list.name;
  for(i = row0; i <= row1; i++) {
   newList.push(list[i]);
 }
  return newList.downcast();
}
T.prototype.getColumns=function(indexesOrNames, row0, row1, emptyListIfNotFound, reverse) {
 if(indexesOrNames==null) return;
  if(_typeOf(indexesOrNames)=="string" && indexesOrNames.includes(',')) indexesOrNames = indexesOrNames.split(',');
  if(indexesOrNames["length"]==null || _typeOf(indexesOrNames)=="string") indexesOrNames = [indexesOrNames];
  var newTable;
 if(reverse){
   newTable = this.getWithoutColumns(indexesOrNames);
   if(row0 != null || row1 != null)
     newTable = newTable.sliceRows(row0,row1);
   newTable.name = this.name;
   return newTable.downcast();
 }
  newTable = new T();
 let l = indexesOrNames.length;
 let i;
 let list;
  for(i=0; i<l; i++){
   list = this.get(indexesOrNames[i], row0, row1);
    if(list==null){
     if(emptyListIfNotFound) newTable.push(new L());
   } else {
     newTable.push(list);
   }
   
 }
  return newTable.downcast();
}

T.prototype.getWithoutColumn=function(indexListOrName){
 if(indexListOrName == null) return;
 let list = this.get(indexListOrName);
 if(list==null) return this
 return this.getWithoutElement(list)
}

T.prototype.getWithoutColumns=function(indexesOrNames){
 if(indexesOrNames == null) return;
 let lists = this.getColumns(indexesOrNames);
 if(lists==null || lists.length==0) return this;
 return this.getWithoutElements(lists);
}

T.prototype.getRow=function(index) {
 index = index==null?0:index;
  if(index<0){
   index += (this.length > 0) ? this[0].length : 0;
 }
 if(!Number.isInteger(Number(index)))
   return null;
  var list = new L();
 let i;
 let l = this.length;
  for(i = 0; i < l; i++) {
   list[i] = this[i][index];
 }
  return list.downcast()
}

T.prototype.getRows=function(indexes,bReturnAllOnNull) {
 if(indexes==null){
   if(bReturnAllOnNull)
     return this;
   else
     return;
 }
  if(indexes.type == 'I'){
   if(indexes.x<0 && this.length>0) indexes.x += this[0].length;
   if(indexes.y<0 && this.length>0) indexes.y += this[0].length;
   indexes = createSortedNumberList(Math.floor(indexes.y-indexes.x+1),indexes.x);
 }
 let newTable = new T();
 let list;
 let i,j;
 let l = this.length;
 let il = indexes.length;
 let index;
 let bNegIndexMsg = false;
  for(i=0; i<l; i++){
   list = instanceSameType(this[i]);
   for(j=0;j<il;j++){
     index = indexes[j];
     if(index<0){
       index += this[0].length;
       bNegIndexMsg = true;
     }
     list[j] = this[i][index];
   }
   // no need to do for nls since a subset is always still a nl
   if(list.type != 'nL') list = list.downcast();
   list.name = this[i].name
   newTable[i] = list;
 }

  newTable.name = this.name;
 
 return newTable.downcast();
}
T.prototype.getCell=function(indexOrNameOfColumn, indexElementInColumn) {
 let list = this.get(indexOrNameOfColumn);
  return list.get(indexElementInColumn);
}
T.prototype.getListLength=function(indexOrNameOfColumn) {
 indexOrNameOfColumn = indexOrNameOfColumn || 0;
 if(indexOrNameOfColumn>=this.length) return;
 return this[indexOrNameOfColumn].length;
}
T.prototype.getLengths=function() {
 let lengths = new nL();
 let l = this.length;
  for(var i = 0; i<l; i++) {
   lengths[i] = this[i]==null?0:this[i].length;
 }
 return lengths;
}

T.prototype.sliceRows=function(startIndex, endIndex) {
 if(startIndex==null) return this;
  if(startIndex["x"]){
   endIndex = startIndex.y;
   startIndex = startIndex.x;
 };
 
 startIndex = startIndex==null?0:startIndex;
 endIndex = endIndex == null ? (this[0].length - 1) : endIndex;
  var i;
 let newTable = new T();
 let newList;
 let l = this.length;
  newTable.name = this.name;
 for(i = 0; i<l; i++) {
   newList = this[i].getSubList(startIndex, endIndex);
   if(newList)
     newList.name = this[i].name;
   newTable.push(newList);
 }
 return newTable.downcast();
}

T.prototype.getWithoutRow=function(rowIndex) {
 let newTable = new T();
 let l = this.length;
 newTable.name = this.name;
 if(rowIndex<0){
   rowIndex += (this.length > 0) ? this[0].length : 0
 }
 if(!Number.isInteger(Number(rowIndex)))
   return this;
  for(var i = 0; i<l; i++) {
   newTable[i] = L.toL(this[i].slice(0, rowIndex).concat(this[i].slice(rowIndex + 1))).downcast();
   newTable[i].name = this[i].name;
 }
 return newTable.downcast();
}

T.prototype.getWithoutRows=function(rowsIndexes) {
 let newTable = new T();
 let l = this.length;
 let nElements;
 newTable.name = this.name;
 // need to clone input since we can't modify it. It may be an array so we can't just use .clone
 rowsIndexes = nL.toL(rowsIndexes.slice(), false);
 // check for negative indexes
 for(var i=0; i < rowsIndexes.length; i++){
   if(rowsIndexes[i] < 0)
     rowsIndexes[i] += (this.length > 0) ? this[0].length : 0;
 }
 let dictionary = getBooleanDictionaryForList(rowsIndexes);
 for(i = 0; i<l; i++) {
   newTable[i] = instanceSameType(this[i]);
   nElements = this[i].length;
   for(var j = 0; j<nElements; j++) {
     if(dictionary[j]==null) newTable[i].push(this[i][j]);
   }
   newTable[i].name = this[i].name;
 }
 return newTable.downcast();
}

T.prototype.sortRowsByList=function(listOrIndex, ascending, stable) { //depracated: use sortListsByList
 if(listOrIndex == null) return;
  var sortinglist = listOrIndex["isList"]? listOrIndex.clone() : this.get(listOrIndex);
 if(sortinglist==null) return;
  ascending = ascending == null ? true : ascending;
 stable = stable == null ? false : stable;
  var newTable = instanceSameType(this);
 let l = this.length;
  var pairsArray = [];
  for(var i = 0; i<sortinglist.length; i++) {
   pairsArray[i] = [i, sortinglist[i]];
 }
  var bSimpleComparator = (sortinglist.type=="nL" || sortinglist.type=="dL") && !stable;
 let comparator;
  if(ascending) {
   if(bSimpleComparator){
     comparator = function(a, b) {
       return a[1] - b[1];
     };
   }
   else{
     if(stable)
       comparator = function(a, b) {
         return a[1] < b[1] ? -1 : a[1] > b[1] ?  1 : a[0] - b[0];
       };
     else
       comparator = function(a, b) {
         return a[1] < b[1] ? -1 : a[1] > b[1] ?  1 : 0;
       };
   }
 } else {
   if(bSimpleComparator){
     comparator = function(a, b) {
       return b[1] - a[1];
     };
   }
   else{
     if(stable)
       comparator = function(a, b) {
         return a[1] < b[1] ? 1 : a[1] > b[1] ? -1 : a[0] - b[0];
       };
     else
       comparator = function(a, b) {
         return a[1] < b[1] ? 1 : a[1] > b[1] ?  -1 : 0;
       };
   }
 }
  pairsArray = pairsArray.sort(comparator);
  var newList;
 newTable.name = this.name;
 
 for(i=0; i<l; i++){
   //newTable[i] = this[i].getSortedByList(sortinglist, ascending, null, stable);//<--- old method, inefficient
   newList = instanceSameType(this[i]);
   newList.name = this[i].name;
   newTable[i] = newList;
   for(var j=0;j<sortinglist.length;j++){
     newList[j] = this[i][pairsArray[j][0]];
   }
 }
  return newTable;
}

T.prototype.sortRowsByLists=function(lists, ascending) {
 if(lists == null) return;
  // make it handle single element case also
 if(typeof lists == 'number'){
   var temp = new nL();
   temp.push(lists);
   lists = temp;
 }
 else if(typeof lists == 'string'){
   var temp = new sL();
   temp.push(lists);
   lists = temp;
 }
 if(lists.type == 'sL'){
   // names of lists -> transform to list indexes
   var sLNames = this.getNames();
   var temp = new nL();
   for(var i=0; i < lists.length; i++){
     var j = sLNames.indexOf(lists[i]);
     if(j == -1)
       throw new Error("No list with name "+lists[i]);
     temp.push(j);
   }
   lists = temp;
 }
 // now lists is always numeric index into table columns
 if(ascending == null) ascending = true;
 if(ascending.isList == null){
   // if not a list then convert into one of same length as lists
   ascending = createListWithSameElement(lists.length,ascending);
 }
 let nLPolarity = new nL();
 for(i = 0; i < ascending.length; i++){
   if(ascending[i] == true || ascending[i] == 'true' || ascending[i] == 1)
     nLPolarity.push(1);
   else
     nLPolarity.push(-1);
 }
  var newTable = instanceSameType(this);
 let l = this.length;
  var rowArray = [];
  for(i = 0; i<this[0].length; i++) {
   rowArray[i] = {i:i, t:this, lists:lists, polarity:nLPolarity};
 }
  var comparator = function(a, b){
   var va,vb,p;
   for(var j=0; j < a.lists.length; j++){
     va = a.t[a.lists[j]][a.i];
     vb = b.t[b.lists[j]][b.i];
     p = j < a.polarity.length ? a.polarity[j] : 1;
     if(va < vb)
       return -1*p;
     else if(va > vb)
       return 1*p;
     else if(j == a.lists.length -1)
       return a.i - b.i;
   }
   return 0; // shouldn't reach here
 };
  rowArray = rowArray.sort(comparator);
  var newList;
 newTable.name = this.name;
  for(i=0; i<l; i++){
   newList = instanceSameType(this[i]);
   newList.name = this[i].name;
   newTable[i] = newList;
   for(var j=0;j<this[i].length;j++){
     newList[j] = this[i][rowArray[j].i];
   }
 }
  return newTable;
}

T.prototype.transpose=function(firstListAsHeaders, headersAsFirstList) {
  var tableToTranspose = firstListAsHeaders ? this.getSubList(1) : this;
 let l = tableToTranspose.length;
 let nElements;
  var table = instantiate(_typeOf(tableToTranspose));
 if(tableToTranspose.length === 0) return table;
 let i;
 let j;
 let list;
  for(i = 0; i<l; i++) {
   list = tableToTranspose[i];
   nElements = list.length;
   for(j = 0; j<nElements; j++) {
     if(i === 0) table[j] = this.type == "nT" ? new nL() : new L();
     table[j][i] = tableToTranspose[i][j];
   }
 }
  nElements = tableToTranspose[0].length;
 
 if(this.type != "nT"){
   for(j = 0; j<nElements; j++) {
     table[j] = table[j].downcast();
   }
 }
  if(firstListAsHeaders) {
   nElements = this[0].length;
   for(j = 0; j<nElements; j++) {
     table[j].name = String(this[0][j]);
   }
 }
 if(headersAsFirstList){
   var sLHeaders = new sL();
   var iInit  = firstListAsHeaders?1:0;
   l = this.length;
   for(i = iInit; i<l; i++){
     sLHeaders.push(this[i].name);
   }
   table._splice(0,0,sLHeaders);
   table = table.downcast();
   if(firstListAsHeaders) sLHeaders.name = this[0].name;
 }
  return table;
}
T.prototype.removeRow=function(index) {
 for(var i = 0; this[i] != null; i++) {
   this[i].splice(index, 1);
 }
}
T.prototype.pushRow=function() {
 if(arguments == null || arguments.length === 0 ||  arguments[0] == null) return null;
 let v = arguments
 if(v.length == 1 && v[0].length == this.length)
   v = v[0];
 for(var i=0; i < v.length && i < this.length; i++)
   this[i].push(v[i]);
}

T.prototype.clone=function() {
 let l = this.length;
 let clonedTable = instanceSameType(this);
 let i;
  clonedTable.name = this.name;
  for(i = 0; i<l; i++) {
   clonedTable.push(this[i].clone());
 }
 if(this.containsNulls !== undefined)
   clonedTable.containsNulls = this.containsNulls;
 return clonedTable;
}

T.prototype.cloneWithEmptyLists=function() {
 let l = this.length;
 let i;
 let newTable = instanceSameType(this);
 let newList;
  newTable.name = this.name;
  for(i = 0; i<l; i++) {
   newList = instanceSameType(this[i]);
   newList.name = this[i].name;
   newTable.push(newList);
 }
  return newTable;
}

T.prototype.appendRows=function(tab2) {
 // Note that this method operates directly on existing object
 if(tab2 == null) return this;
 if(tab2 == this){
   // special case, clone or we end up in infinite loop below
   tab2 = tab2.clone();
 }
 let i,j;
 for(i=0; i < tab2.length; i++){
   if(i >= this.length){
     this[i] = instanceSameType(tab2[i]);
     this[i].name = tab2[i].name;
   }
   for(j=0; j < tab2[i].length; j++)
     this[i].push(tab2[i][j]);
 }
 return this;
}
T.prototype.insertRow=function(row,position,bReplace,bTransformative) {
   // note that the inlet help for bTransformative is intentionally missing so it isn't accessible/described inside Studio
   // We keep the functionality though since it is useful in coding scenarios.
   if(row==null) return null;
   bReplace = bReplace == null ? false : bReplace;
   bTransformative = bTransformative == null ? false : bTransformative;
   var t = bTransformative ? this : this.clone();
   var i,val;
   for(i=0; i < t.length && i < row.length; i++){
     val = (t[i].type == 'nL' && !isNaN(row[i])) ? Number(row[i]) : row[i];
     t[i] = t[i].insert(val,position==null ? t[i].length : position,bReplace);
   }
   return t;
}

T.prototype.trim=function(){
 return (this.reduce((accT, col) => {accT.push(col.type=='sL'?col.trim():col); return accT}, new T())).downcast()
}

polL.prototype.getFrame=function() {
 if(this.length === 0) return null;
 let frameP = this[0].getFrame();
 let rect = new Rec(frameP.x, frameP.y, frameP.getRight(), frameP.getBottom());
 for(var i = 1; this[i] != null; i++) {
   frameP = this[i].getFrame();
   rect.x = Math.min(rect.x, frameP.x);
   rect.y = Math.min(rect.y, frameP.y);
   rect.width = Math.max(rect.width, frameP.getRight());
   rect.height = Math.max(rect.height, frameP.getBottom());
 }
 rect.width -= rect.x;
 rect.height -= rect.y;
  return rect;
}

polL.prototype.getCenter=function() {
 let fr = this.getFrame();
 return new P(fr.x+fr.width*0.5,fr.y+fr.height*0.5);
}
polL.prototype.getBarycenter=function() {
 let i;
 if(this.length === 0) return null;
 let barycenter = new P(this[0].x, this[0].y);
 for(i = 1; this[i] != null; i++) {
   barycenter.x += this[i].getBarycenter().x;
   barycenter.y += this[i].getBarycenter().y;
 }
 barycenter.x /= this.length;
 barycenter.y /= this.length;
 return barycenter;
}
polL.prototype.add=function(object) {
 let type = _typeOf(object);
 let i;
 switch(type) {
   case 'P':
     var newPolygonList = new polL();
     for(i = 0; this[i] != null; i++) {
       newPolygonList[i] = this[i].add(object);
     }
     newPolygonList.name = this.name;
     return newPolygonList;
 }
}
polL.prototype.factor=function(value) {
 let newPolygonList = new polL();
 for(var i = 0; this[i] != null; i++) {
   newPolygonList[i] = this[i].factor(value);
 }
 newPolygonList.name = this.name;
 return newPolygonList;
}
polL.prototype.getRotated=function(angle, center) {
 let newPolygonList = new polL();
 for(var i = 0; this[i] != null; i++) {
   newPolygonList[i] = this[i].getRotated(angle,center);
 }
 newPolygonList.name = this.name;
 return newPolygonList;
}
polL.prototype.clone=function() {
 let newPolygonList = new polL();
 for(var i = 0; this[i] != null; i++) {
   newPolygonList[i] = this[i].clone();
 }
 newPolygonList.name = this.name;
 return newPolygonList;
}
Pol.prototype.getFrame=function() {
 if(this.length === 0) return null;
 let rectangle = new Rec(this[0].x, this[0].y, this[0].x, this[0].y);
 let p;
 for(var i = 1; this[i] != null; i++) {
   p = this[i];
   rectangle.x = Math.min(rectangle.x, p.x);
   rectangle.y = Math.min(rectangle.y, p.y);
   rectangle.width = Math.max(rectangle.width, p.x);
   rectangle.height = Math.max(rectangle.height, p.y);
 }
  rectangle.width -= rectangle.x;
 rectangle.height -= rectangle.y;
  return rectangle;
}
Pol.prototype.getCenter=function() {
 let fr = this.getFrame();
 return new P(fr.x+fr.width*0.5,fr.y+fr.height*0.5);
}
Pol.prototype.getBarycenter=function(countLastPoint) {
 let i;
 countLastPoint = countLastPoint == null ? true : countLastPoint;
 let cLPN = 1 - Number(countLastPoint);
 if(this.length === 0) return null;
 let barycenter = new P(this[0].x, this[0].y);
 for(i = 1; this[i + cLPN] != null; i++) {
   barycenter.x += this[i].x;
   barycenter.y += this[i].y;
 }
 barycenter.x /= this.length;
 barycenter.y /= this.length;
 return barycenter;
}
Pol.prototype.add=function(object) {
 let type = _typeOf(object);
 let i;
 switch(type) {
   case 'P':
     var newPolygon = new Pol();
     for(i = 0; this[i] != null; i++) {
       newPolygon[i] = this[i].add(object);
     }
     newPolygon.name = this.name;
     return newPolygon;
 }
}
Pol.prototype.factor=function(value) {
 let i;
 let newPolygon = new Pol();
 newPolygon.name = this.name;
  if(value >= 0 || value < 0) {
   for(i = 0; this[i] != null; i++) {
     newPolygon[i] = new P(this[i].x * value, this[i].y * value);
   }
    return newPolygon;
 } else if(value.type != null && value.type == 'P') {
   for(i = 0; this[i] != null; i++) {
     newPolygon[i] = new P(this[i].x * value.x, this[i].y * value.y);
   }
    return newPolygon;
 }
  return null;
}
Pol.prototype.getRotated=function(angle, center) {
 center = center == null ? this.getCenter() : center;
  var newPolygon = new Pol();
 for(var i = 0; this[i] != null; i++) {
   newPolygon[i] = new P(Math.cos(angle) * (this[i].x - center.x) - Math.sin(angle) * (this[i].y - center.y) + center.x, Math.sin(angle) * (this[i].x - center.x) + Math.cos(angle) * (this[i].y - center.y) + center.y);
 }
 newPolygon.name = this.name;
 return newPolygon;
}
Pol.prototype.getClosestPoint=function(point) {
 let closest = this[0];
 let d2Min = Math.pow(point.x - closest.x, 2) + Math.pow(point.y - closest.y, 2);
 let d2;
  for(var i = 1; this[i] != null; i++) {
   d2 = Math.pow(point.x - this[i].x, 2) + Math.pow(point.y - this[i].y, 2);
   if(d2 < d2Min) {
     d2Min = d2;
     closest = this[i];
   }
 }
 return closest;
}
Pol.prototype.toNumberList=function() {
 let nl = new nL();
 let i;
 for(i = 0; this[i] != null; i++) {
   nl[i * 2] = this[i].x;
   nl[i * 2 + 1] = this[i].y;
 }
 return nl;
}
Pol.prototype.containsPoint=function(point) {
 let i;
 let j;
 let l;
 let c;
 for(c = false, i = -1, l = this.length, j = l - 1; ++i < l; j = i)
       ((this[i].y <= point.y && point.y < this[j].y) || (this[j].y <= point.y && point.y < this[i].y)) &&
       (point.x < (this[j].x - this[i].x) * (point.y - this[i].y) / (this[j].y - this[i].y) + this[i].x) &&
       (c = !c);
 return c;
}
Pol.prototype.touchesPolygon=function(polygon) {
 let f0 = this.getFrame();
 let f1 = polygon.getFrame();
 if(f0.x>f1.x+f1.width || f0.x+f0.width<f1.x || f0.y>f1.y+f1.height || f0.y+f0.height<f1.y) return false;
  for(var i=0;i<this.length;i++){
   if(polygon.containsPoint(this[i])) return true;
 }
  return false;
}
Pol.prototype.approach=function(destiny, speed) {
 speed = speed || 0.5;
 let antispeed = 1 - speed;
  this.forEach(function(point, i) {
   point.x = antispeed * point.x + speed * destiny[i].x;
   point.y = antispeed * point.y + speed * destiny[i].y;
 });
}
Pol.prototype.clone=function() {
 let newPolygon = new Pol();
 for(var i = 0; this[i] != null; i++) {
   newPolygon[i] = this[i].clone();
 }
 newPolygon.name = this.name;
 return newPolygon;
}
Nd.prototype.cleanRelations=function() {
 this.nodes = new ndL();
 this.relations = new relL();
  this.to = new ndL();
 this.toRelations = new relL();
  this.from = new ndL();
 this.fromRelations = new relL();
}
Nd.prototype.getDegree=function() {
 return this.relations.length;
}
Nd.prototype.getParent=function() {
 return this.parent;
}
Nd.prototype.getLeaves=function() {
   const leaves = new ndL();
   const addLeaves = function(node) {
     if(node.to.length === 0) {
       leaves.addNode(node);
       return;
     }
     node.to.forEach(addLeaves);
   };
   addLeaves(this);
   return leaves;
}

Nd.prototype.getInfluenced=function() {
   const influenced = new ndL()
   const addInfluenced = function(node) {
    node.to.forEach(son=>{
        if(influenced.includes(son)) return
        influenced.addNode(son)
        addInfluenced(son)
    })
   }
   addInfluenced(this);
   return influenced
}

Nd.prototype.getInfluences=function() {
   const influences = new ndL()
   const addInfluence = function(node) {
    node.from.forEach(parent=>{
        if(influences.includes(parent)) return
        influences.addNode(parent)
        addInfluence(parent)
    })
   }
   addInfluence(this);
   return influences
}

Nd.prototype.loadImage=function(urlImage, callBack) {
    urlImage = urlImage||this.urlImage||this.imageUrl
    let node = this
    loadImage(urlImage, function(e) {
        node.image = e.result
        //console.log("  [*] loaded image, url: "+urlImage+" / image: "+node.image+ "/ event: ",e)
        if(callBack) callBack(node, e)
    }, this)
}

Nd.prototype.clone=function(extraPropertyNames) {
 let newNode = new Nd(this.id, this.name);
  newNode.x = this.x;
 newNode.y = this.y;
 newNode.z = this.z;
  newNode.nodeType = this.nodeType;
  newNode.weight = this.weight;
 newNode.descentWeight = this.descentWeight;

 extraPropertyNames?.forEach(p=>{
  newNode[p] = this[p]
 })

  return newNode;
}




sL.prototype.getLengths=function() {
 let lengths = new nL();
  this.forEach(function(string) {
   lengths.push(string == null ? 0 : string.length);
 });
  return lengths;
}

sL.prototype.countTags=function(splitCharacter=",") {
 let nTags = new nL()
  this.forEach(function(string) {
    if(string.includes(splitCharacter)){
        nTags.push(string.split(splitCharacter).length)
    } else {
        nTags.push(0)
    }
 })
  return nTags
}


sL.prototype.includesSubString=function(substring) {
 for(var i=0; i<this.length; i++){
   if(this[i].includes(substring)) return true;
 }
 return false;
}
sL.prototype.indexesOfSubString=function(substring){
   var indexes = new nL();
   for(var i=0; i<this.length; i++){
       if(this[i].includes(substring)) indexes.push(i);
   }
   return indexes;
}
sL.prototype.append=function(sufix, after) {
 after = after == null ? true : after;
 let newStringList = new sL();
 newStringList.name = this.name;
 let sufixIsStringList = _typeOf(sufix) == "sL";
 let i;
 if(after) {
   for(i = 0; this[i] != null; i++) {
     newStringList[i] = this[i] + (sufixIsStringList ? sufix[i] : sufix);
   }
 } else {
   for(i = 0; this[i] != null; i++) {
     newStringList[i] = (sufixIsStringList ? sufix[i] : sufix) + this[i];
   }
 }
 return newStringList;
}
sL.prototype.getSurrounded=function(prefix, sufix) {//to be deprecated
 sufix = sufix==null?"":sufix;
 
 let newStringList = new sL();
 newStringList.name = this.name;
 let i;
  var prefixIsStringList = Array.isArray(prefix);
 let sufixIsStringList = Array.isArray(sufix);
  for(i = 0; this[i] != null; i++) {
   newStringList[i] = (prefixIsStringList ? prefix[i] : prefix) + this[i] + (sufixIsStringList ? sufix[i] : sufix);
 }
  return newStringList;
}
sL.prototype.replace=function(regExp, string) {
 if(regExp==null) return this;
  var newStringList = new sL();
 let i;
 let l = this.length;
  newStringList.name = this.name;
  for(i = 0; i<l; i++){
   newStringList[i] = this[i].replace(regExp, string);
 }
  return newStringList;
}
sL.prototype.add = function(toBeAdded){
    let newsl
    if(typeof(toBeAdded)=="string"){
        newsl = this.map(s=>s+toBeAdded).tosL()
    }

    if(Array.isArray(toBeAdded)){
        newsl = this.map((s,i)=>s+toBeAdded[i%toBeAdded.length]).tosL()
    }

    newsl.name = this.name
    return newsl
}
sL.prototype.getConcatenated=function(separator) {
 separator = separator == null ? ' ' : separator;
 let i;
 let string = "";
 let l = this.length;
 for(i = 0; i<l; i++) {
   string += this[i];
   if(i < this.length - 1) string += separator;
 }
 return string;
}
sL.prototype.toLowerCase=function() {
 let newStringList = new sL();
 newStringList.name = this.name;
 let i;
 let l = this.length;
 for(i = 0; i<l; i++) {
   newStringList[i] = this[i].toLowerCase();
 }
 return newStringList;
}
sL.prototype.toUpperCase=function() {
 let newStringList = new sL();
 newStringList.name = this.name;
 let i;
 let l = this.length;
 for(i = 0; i<l; i++) {
   newStringList[i] = this[i].toUpperCase();
 }
 return newStringList;
}
sL.prototype.trim=function(maxLength) {
 if(this.isTable) return this.trim();
 if(this.type != 'sL') return null;
 let i;
 let l = this.length;
 let newStringList = new sL();
 for(i = 0; i<l; i++) {
   newStringList[i] = maxLength ? this[i].substring(0,maxLength).trim() : this[i].trim();
 }
 newStringList.name = this.name;
 return newStringList;
}
sL.prototype.clone=function() {
 let newList = sL.toL(this.slice(), false);
 newList.name = this.name;
 newList.fnDerived = this.fnDerived;
 return newList;
}
ndL.prototype.removeNodes=function() {
 let l = this.length;
 let i;
 for(i = 0; i < l; i++) {
   this.ids[this[i].id] = null;
   this.removeElement(this[i]);
 }
}
ndL.prototype.addNode=function(node) {
 this.ids[node.id] = node;
 this._push(node);
}
ndL.prototype.addNodes=function(nodes) {
 let i;
 for(i = 0; nodes[i] != null; i++) {
   this.addNode(nodes[i]);
 }
}
ndL.prototype.removeNode=function(node) {
 this.ids[node.id] = null;
 this.removeElement(node);
}
ndL.prototype.removeNodeAtIndex=function(index) {
 this.ids[this[index].id] = null;
 this.splice(index, 1);
}
ndL.prototype.normalizeWeights=function() {
 let i;
 let max = -9999999;
 let l = this.length;
 for(i = 0; i<l; i++) {
   max = Math.max(this[i].weight, max);
 }
 for(i = 0; i<l; i++) {
   this[i].weight /= max;
 }
}
ndL.prototype.getByName=function(name) {
 let i;
 let l = this.length;
 for(i = 0; i < l; i++) {
   if(this[i].name == name) {
     return this[i];
   }
 }
 return null;
}
ndL.prototype.get=function(id) {
 return this.ids[id];
}
ndL.prototype.getNodesByIds=function(ids) {
 let newNodelist = new ndL();
 let node;
 let nIds = ids.length;
 for(var i = 0; i<nIds; i++) {
   node = this.ids[ids[i]];
   if(node != null) newNodelist.addNode(node);
 }
 return newNodelist;
}
ndL.prototype.getWeights=function() {
 let nl = new nL();
 let i;
 for(i = 0; this[i] != null; i++) {
   nl[i] = this[i].weight;
 }
 return nl;
}
ndL.prototype.getIds=function() {
 let list = new sL();
 let l = this.length;
 for(var i = 0; i<l; i++) {
   list[i] = this[i].id;
 }
 return list;
}
ndL.prototype.getDegrees=function() {
 let nl = new nL();
 for(var i = 0; this[i] != null; i++) {
   nl[i] = this[i].nodes.length;
 }
 return nl;
}
ndL.prototype.getPolygon=function(graphics) {
 let polygon = new Pol();
 for(var i = 0; this[i] != null; i++) {
   polygon[i] = new P(this[i].x + graphics.cX, this[i].y + graphics.cY);
 }
 return polygon;
}
ndL.prototype.clone=function() {
 let newNodeList = new ndL();
 let l = this.length;
 let i;
 //this.forEach(function(node) {
 for(i=0; i<l; i++){
   newNodeList.addNode(this[i]);
 }
 newNodeList.name = this.name;
 return newNodeList;
}
ndL.prototype.getWithoutRepetitions=function() {
 let newList = new ndL();
 let i;
 newList.name = this.name;
 for(i = 0; this[i]!=null; i++) {
   if(newList.get(this[i].id) == null) newList.addNode(this[i]);
 }
 return newList;
}
ndL.prototype.removeElements=function(nodes) {
 let i;
 for(i = 0; this[i]!=null; i++) {
   //if(elements.indexOf(this[i]) > -1) {
   // c.l('                          this[i].id:', this[i].id);
   // c.l('                          nodes.get(this[i].id):', nodes.get(this[i].id));
   if( nodes.get(this[i].id) != null ){
     this.ids[this[i].id] = null;
     this.splice(i, 1);
     //this.removeNode(this[i]);
     i--;
     // c.l('                            X, i, this.length', i, this.length);
   }
 }
}
relL.prototype.addRelation=function(relation) {
 this.addNode(relation);
}
relL.prototype.removeRelation=function(relation) {
   this.removeNode(relation);
}
relL.prototype.getRelationsWithNode=function(node) {
 let i;
 let filteredRelations = [];
 for(i = 0; this[i] != null; i++) {
   var relation = this[i];
   if(relation.node0 == node || relation.node1 == node) {
     filteredRelations.push(relation);
   }
 }
  // TODO: convert to RelationList?
 return filteredRelations;
}
relL.prototype.getRelatedNodesToNode=function(node) {
 let i;
 let relatedNodes = new ndL();
 for(i = 0; i < this.length; i++) {
   var relation = this[i];
   if(relation.node0.id == node.id) {
     relatedNodes.push(relation.node1);
   }
   if(relation.node1.id == node.id) {
     relatedNodes.push(relation.node0);
   }
 }
 return relatedNodes;
}
relL.prototype.getChildrenOfNode=function(node) {
 let i;
 let childNodes = new ndL();
 for(i = 0; i < this.length; i++) {
   var relation = this[i];
   if(relation.node0.id == node.id) {
     childNodes.addNode(relation.node1);
   }
 }
 return childNodes;
}
relL.prototype.getAllRelationsBetweenNodes=function(node0, node1, directed) {
 //TODO: to be improved (check node1 on node0.relations) (see: nodesAreConnected)
 let i;
 directed = directed == null ? false : directed;
 let filteredRelations = [];
 for(i = 0; this[i] != null; i++) {
   var relation = this[i];
   if((relation.node0 == node0 && relation.node1 == node1) || (!directed && relation.node0 == node1 && relation.node1 == node0)) {
     filteredRelations.push(relation);
   }
 }
 // TODO: convert to relL ?
 return filteredRelations;
}
relL.prototype.nodesAreConnected=function(node0, node1, directed) {
 if(node0.to.get(node1.id) != null) return true;
 return !directed && node1.to.get(node0.id) != null;
}
relL.prototype.getFirstRelationBetweenNodes=function(node0, node1, directed) { //TODO: to be improved (check node1 on node0.relations) (see: nodesAreConnected) //TODO: make it work with ids
 directed = directed == null ? false : directed;
  for(var i = 0; this[i] != null; i++) {
   if((this[i].node0.id == node0.id && this[i].node1.id == node1.id) || (!directed && this[i].node1.id == node0.id && this[i].node0.id == node1.id)) return this[i];
 }
 return null;
}
relL.prototype.getFirstRelationByIds=function(id0, id1, directed) {
 //TODO: to be improved (check node1 on node0.relations) (see: nodesAreConnected)
 //TODO: make it work with ids
 let i;
 let _directed = directed || false;
 let relation;
 for(i = 0; this[i] != null; i++) {
   relation = this[i];
   if(relation.node0.id == id0 && relation.node1.id == id1) {
     return relation;
   }
 }
 if(_directed) return null;
 //c.log("<->");
 for(i = 0; this[i] != null; i++) {
   relation = this[i];
   if(relation.node0.id == id1 && relation.node1.id == id0) {
     //c.log("<--- ", relation.node0.name, relation.node1.name);
     // TODO: convert to relL ?
     return relation;
   }
 }
 return null;
}
recL.prototype.getFrame=function() {//TODO: use RectangleOperators.minRect
 if(this.length === 0) return null;
  var frame = this[0].clone();
 frame.width = frame.getRight();
 frame.height = frame.getBottom();
 for(var i = 1; this[i] != null; i++) {
   frame.x = Math.min(frame.x, this[i].x);
   frame.y = Math.min(frame.y, this[i].y);
    frame.width = Math.max(this[i].getRight(), frame.width);
   frame.height = Math.max(this[i].getBottom(), frame.height);
 }
  frame.width -= frame.x;
 frame.height -= frame.y;
  return frame;
}
recL.prototype.clone=function() {
 let newRectangleList = new recL();
 for(var i = 0; this[i] != null; i++) {
   newRectangleList[i] = this[i].clone();
 }
 newRectangleList.name = this.name;
 return newRectangleList;
}
recL.prototype.add=function() {
}
recL.prototype.factor=function() {
}

recL.prototype.getIntersectionArea=function() {
 let rect0;
 let rect1;
 let intersectionArea = 0;
 let intersection;
 for(var i = 0; this[i + 1] != null; i++) {
   rect0 = this[i];
   for(var j = i + 1; this[j] != null; j++) {
     rect1 = this[j];
     intersection = rect0.getIntersection(rect1);
     intersectionArea += intersection == null ? 0 : intersection.getArea();
   }
 }
  return intersectionArea;
}
recL.prototype.intersectsRectangle=function(rTest){
 if(rTest == null) return false;
 for(var i = 0; i < this.length; i++) {
   if(this[i].intersectsRectangle(rTest)) return true;
 }
 return false;
}

Rel.prototype.getOther=function(node) {
 return node == this.node0 ? this.node1 : this.node0;
}
Rel.prototype.clone=function(propertyNames, inNewNet) {
  var relation
  if(inNewNet){
    relation = new Rel(this.id, this.name, inNewNet.nodes.get(this.node0.id), inNewNet.nodes.get(this.node1.id))
  } else {
    relation = new Rel(this.id, this.name, this.node0, this.node1)
  }
  relation.x = this.x;
 relation.y = this.y;
 relation.z = this.z;
  relation.nodeType = this.nodeType;
  relation.weight = this.weight;
 relation.descentWeight = this.descentWeight;

 propertyNames?.forEach(p=>{
  relation[p] = this[p]
 })

  return relation;
}



Net.prototype.getNodes=function() {
 return this.nodes;
}
Net.prototype.getRelations=function() {
 return this.relations;
}
Net.prototype.getNodesIds=function() {
 return this.nodes.getIds();
}
Net.prototype.addNode=function(node) {
 this.nodes.addNode(node);
}
Net.prototype.getByName=function(name) {
 return this.nodes.getByName(name);
}
Net.prototype.get=function(id) {
 return this.nodes.get(id);
}
Net.prototype.createRelation=function(node0, node1, id, weight, content, name) {
    if(node0.type==null) node0 = this.createNode(node0)
    if(node1.type==null) node1 = this.createNode(node1)
    if(id==null) id = node0.id+"_"+node1.id
    var relation = this.relations.get(id)
    if(relation) return relation
    if(name==null) name = node0.name+"_"+node1.name
    relation = new Rel(id, name, node0, node1, weight, content);
    this.addRelation(relation);
    return relation;
}
Net.prototype.addRelation=function(relation) {
 this.relations.addNode(relation);
 relation.node0.nodes.addNode(relation.node1);
 relation.node0.relations.addNode(relation);
 relation.node0.to.addNode(relation.node1);
 relation.node0.toRelations.addNode(relation);
 relation.node1.nodes.addNode(relation.node0);
 relation.node1.relations.addNode(relation);
 relation.node1.from.addNode(relation.node0);
 relation.node1.fromRelations.addNode(relation);
}
Net.prototype.connect=function(node0, node1, id, weight, content) {
 id = id || (node0.id + "_" + node1.id);
 weight = weight || 1;
 let relation = new Rel(id, id, node0, node1, weight);
 this.addRelation(relation);
 relation.content = content;
 return relation;
}
Net.prototype.removeNode=function(node) {
 this.removeNodeRelations(node);
 this.nodes.removeNode(node);
}
Net.prototype.removeNodeRelations=function(node) {
 for(var i = 0; node.relations[i] != null; i++) {
   this.removeRelation(node.relations[i]);
   i--;
 }
}
Net.prototype.removeNodes=function() {
 this.nodes.deleteNodes();
 this.relations.deleteNodes();
}
Net.prototype.removeRelation=function(relation) {
 this.relations.removeElement(relation);
 relation.node0.nodes.removeNode(relation.node1);
 relation.node0.relations.removeRelation(relation);
 relation.node0.to.removeNode(relation.node1);
 relation.node0.toRelations.removeRelation(relation);
 relation.node1.nodes.removeNode(relation.node0);
 relation.node1.relations.removeRelation(relation);
 relation.node1.from.removeNode(relation.node0);
 relation.node1.fromRelations.removeRelation(relation);
}
Net.prototype.removeIsolatedNodes=function(minDegree=1) {
 let i;
 let nRemoved = 0;
  for(i = 0; this.nodes[i] != null; i++) {
   if(this.nodes[i].getDegree() < minDegree) {
     this.nodes[i]._toRemove = true;
   }
 }
  for(i = 0; this.nodes[i] != null; i++) {
   if(this.nodes[i]._toRemove) {
     this.removeNode(this.nodes[i]);
     nRemoved++;
     i--;
   }
 }
  return nRemoved;
}
Net.prototype.lightClone=function(){
 let newNetwork = new Net();
 newNetwork.nodes = this.nodes;
 newNetwork.relations = this.relations;
 return newNetwork;
}
Net.prototype.clone=function(nodePropertiesNames, relationPropertiesNames, idsSubfix, namesSubfix) {
 let newNetwork = new Net();
 let newNode, newRelation;
  if(nodePropertiesNames==null) nodePropertiesNames=[];
 if(relationPropertiesNames==null) relationPropertiesNames=[];
  idsSubfix = idsSubfix == null ? '' : String(idsSubfix);
 namesSubfix = namesSubfix == null ? '' : String(namesSubfix);
  this.nodes.forEach(function(node) {
   newNode = new Nd(idsSubfix + node.id, namesSubfix + node.name);
   if(idsSubfix !== '') newNode.basicId = node.id;
   if(namesSubfix !== '') newNode.basicName = node.name;
   if(nodePropertiesNames) {
     nodePropertiesNames.forEach(function(propName) {
       if(node[propName] != null) newNode[propName] = node[propName];
     });
     newNode.weight = node.weight;
     newNode.color = node.color;
     newNode.kind = node.kind;
   }
   newNetwork.addNode(newNode);
 });
  this.relations.forEach(function(relation) {
   newRelation = new Rel(idsSubfix + relation.id, namesSubfix + relation.name, newNetwork.nodes.get(idsSubfix + relation.node0.id), newNetwork.nodes.get(idsSubfix + relation.node1.id), relation.weight);
   if(idsSubfix !== '') newRelation.basicId = relation.id;
   if(namesSubfix !== '') newRelation.basicName = relation.name;
   if(relationPropertiesNames) {
     relationPropertiesNames.forEach(function(propName) {
       if(relation[propName] != null) newRelation[propName] = relation[propName];
     });
   }
   newNetwork.addRelation(newRelation);
 });
  return newNetwork;
}

Tr.prototype.addNodeToTree=function(node, parent) {
 this.addNode(node);
 if(parent == null) {
   node.level = 0;
   node.parent = null;
 } else {
   var relation = new Rel(parent.id + "_" + node.id, parent.id + "_" + node.id, parent, node);
   this.addRelation(relation);
   node.level = parent.level + 1;
   node.parent = parent;
   parent.weight++;
 }
 node.weight = 1;
 this.nLevels = Math.max(this.nLevels, node.level + 1);
}
Net.prototype._newCreateRelation=function(parent, node, id, weight) {
 if(id == null) id = this.relations.getNewId();
 this._createRelation(parent, node, id, weight);
 node.level = parent.level + 1;
 node.parent = parent;
 this.nLevels = Math.max(this.nLevels, node.level + 1);
}
Tr.prototype.addFather=function(node, child) {
 //TODO: is children supposed to be child?
 if(child.parent != null || this.nodes.indexOf(child) == -1) return false;
 this.addNode(node);
 child.parent = node;
 child.level = 1;
 this.nLevels = Math.max(this.nLevels, 1);
 this.createRelation(node, child);
}
Tr.prototype.getLevel=function(level) {
 level = level===0?0:level;
  var newNodeList = new ndL();
 newNodeList.name = "level_"+level;
 let l = this.nodes.length;
 let i;
 for(i = 0; i<l; i++) {
   if(this.nodes[i].level == level) newNodeList.addNode(this.nodes[i]);
 }
 return newNodeList;
}
Tr.prototype.getLeaves=function(node) {
 let leaves = new ndL();
 let i, l;
 leaves.name = "leaves";
 if(node) {
   if(node.to.length === 0) {
     leaves.addNode(node);
     return leaves;
   }
   var addLeaves = function(candidate) {
     if(candidate.to.length === 0) {
       leaves.addNode(candidate);
     } else {
       l = candidate.to.length;
       for(i=0; i<l; i++){
         addLeaves(candidate.to[i]);
       }
       //candidate.to.forEach(addLeaves);
     }
   };
   l = node.to.length;
   for(i=0; i<l; i++){
     addLeaves(node.to[i]);
   }
   //node.to.forEach(addLeaves);
 } else {
   l = this.nodes.length;
   for(i=0; i<l; i++){
     if(this.nodes[i].to.length === 0) leaves.addNode(this.nodes[i]);
   }
    // this.nodes.forEach(function(candidate) {
   //   if(candidate.to.length === 0) leaves.addNode(candidate);
   // });
 }
 return leaves;
}
Tr.prototype.assignDescentWeightsToNodes=function() {
 this._assignDescentWeightsToNode(this.nodes[0]);
}
Tr.prototype._assignDescentWeightsToNode=function(node) {
 let i;
 if(node.to.length === 0) {
   node.descentWeight = node.weight;
   return node.descentWeight;
 }
 node.descentWeight = 0;
 for(i = 0; node.to[i] != null; i++) {
   node.descentWeight += this._assignDescentWeightsToNode(node.to[i]);
 }
 node.weight = node.descentWeight;
 return node.descentWeight;
}
Tr.prototype.getReport=function() {// @todo to be placed in TreeOperators
 //TODO: remove relation input?
 return "Tr contains " + this.nodes.length + " nodes and " + this.relations.length + " relations";
}
Tr.prototype.traverse=function(nodeStart,mode,fnCallback) {
 if(this == null || this.type != 'Tr') return;
  if(nodeStart == null){
   var LNodes = this.getLevel(0);
   nodeStart = LNodes[0];
   if(nodeStart == null) return;
 }
 mode = mode == null ? 0 : mode;
  var aKeep=[nodeStart];
 let i,n,nodesChildren,iCount=0,bProcessChildren;
 let retNodeList = new ndL();
  while(aKeep.length>0){
   n = mode == 0 ? aKeep.pop() : aKeep.shift();
   bProcessChildren = true;
   if(fnCallback)
     bProcessChildren = fnCallback(n,iCount++,this);
   retNodeList.addNode(n);
   if(!bProcessChildren) continue;
    nodesChildren = this.relations.getChildrenOfNode(n);
   if(nodesChildren.length == 0)
     continue;
    if(mode == 0) // depthfirst
     for(i = nodesChildren.length-1; i>=0; i--){
        aKeep.push(nodesChildren[i]);
     }
   else
     for(i = 0; i< nodesChildren.length; i++){
        aKeep.push(nodesChildren[i]);
     }
 }
 return retNodeList;
}

Tr.prototype.getAncestorsOf=function(nodeStart) {
 if(this == null || this.type != 'Tr') return;
  var node,i,nodes;
 if(nodeStart.type == 'Nd'){
   // wrap it in a list
   nodes = new ndL();
   nodes.addNode(nodeStart);
 }
 else if(nodeStart.type == 'ndL')
   nodes = nodeStart;
 else
   return;
  var retNodeList = new ndL();
 for(i=0; i < nodes.length; i++){
   node = nodes[i];
   while(node.parent != null){
     retNodeList.addNode(node.parent);
     node = node.parent;
   }
 }
 // could have duplicates, remove them
 retNodeList = retNodeList.getWithoutRepetitions();
 return retNodeList;
}

Tr.prototype.buildFilteredTree=function(nodesStart) {
 if(this == null || this.type != 'Tr') return;
 if(nodesStart.type != 'ndL')
   throw new Error('Invalid input type for buildFilteredTree');
  var treeRet = this.clone();
 let nodesAncestors = this.getAncestorsOf(nodesStart);
 let nodesRemove = new ndL();
 let nodeTest, i;
 for(i=0; i < treeRet.nodes.length; i++){
   nodeTest = treeRet.nodes[i];
   if(nodesAncestors.get(nodeTest.id) == null &&
      nodesStart.get(nodeTest.id) == null){
     // not an ancestor and not in original set, remove it
     nodesRemove.addNode(nodeTest);
   }
 }
 // now go and remove all these nodes from tree (can't do it directly while looping on nodes)
 for(i=0; i<nodesRemove.length; i++)
   treeRet.removeNode(nodesRemove[i]);
 return treeRet;
}

Tr.prototype.clone=function(nodePropertiesNames, relationPropertiesNames, idsSubfix, namesSubfix) {
 // Jeff July 4, 2018: This code was copied and modified slightly from Net.clone
 // We should have a better way of keeping it in one location.
 // Also, the cloning of Nodes with all their extra custom properties is problematic.
 // Ideally, we use a solution that handles this automatically, perhaps using getOwnPropertyNames
 let newTree = new Tr();
 let newNode, newRelation;
 newTree.nLevels = this.nLevels;
  if(nodePropertiesNames==null) nodePropertiesNames=[];
 if(relationPropertiesNames==null) relationPropertiesNames=[];
 nodePropertiesNames.push('parent');
 nodePropertiesNames.push('level');
 nodePropertiesNames.push('bOpen');
 nodePropertiesNames.push('color');
  idsSubfix = idsSubfix == null ? '' : String(idsSubfix);
 namesSubfix = namesSubfix == null ? '' : String(namesSubfix);
  this.nodes.forEach(function(node) {
   newNode = new Nd(idsSubfix + node.id, namesSubfix + node.name);
   if(idsSubfix !== '') newNode.basicId = node.id;
   if(namesSubfix !== '') newNode.basicName = node.name;
   if(nodePropertiesNames) {
     nodePropertiesNames.forEach(function(propName) {
       if(node[propName] != null) newNode[propName] = node[propName];
     });
   }
   newTree.addNode(newNode);
 });
  this.relations.forEach(function(relation) {
   newRelation = new Rel(idsSubfix + relation.id, namesSubfix + relation.name, newTree.nodes.get(idsSubfix + relation.node0.id), newTree.nodes.get(idsSubfix + relation.node1.id), relation.weight);
   if(idsSubfix !== '') newRelation.basicId = relation.id;
   if(namesSubfix !== '') newRelation.basicName = relation.name;
   if(relationPropertiesNames) {
     relationPropertiesNames.forEach(function(propName) {
       if(relation[propName] != null) newRelation[propName] = relation[propName];
     });
   }
   newTree.addRelation(newRelation);
 });
  return newTree;
}
dI.prototype.toString=function() {
 return "DateInterval[" + this.date0 + ", " + this.date1 + "]";
}
dI.prototype.getMax=function() {
 if(this.date1 > this.date0) return this.date1;
 return this.date0;
}
dI.prototype.getMin=function() {
 if(this.date0 < this.date1) return this.date0;
 return this.date1;
}
dI.prototype.getTimesInterval=function() {
 return new I(this.date0.getTime(), this.date1.getTime());
}
dI.prototype.getProduct=function(object) { //TODO: complete with more object types
 if(object == null) return;
  if(object.type == 'I') {
   var time0 = this.date0.getTime();
   var time1 = this.date1.getTime();
   var amp = time1 - time0;
    return new dI(new Date(time0 + object.x * amp), new Date(time0 + object.y * amp));
 }
  return null;
}
nT.prototype.getMax=function() {
 if(this.length === 0) return null;
  var max = this[0].getMax();
 let i;
  for(i = 1; this[i] != null; i++) {
   max = Math.max(this[i].getMax(), max);
 }
 return max;
}
nT.prototype.getMaxValues=function() {
 if(this.length === 0) return null;
  var maxs = new nL();
 let i;
  for(i = 0; this[i] != null; i++) {
   maxs[i] = this[i].getMax();
 }
  return maxs;
}
nT.prototype.getMaxCell=function() {
 if(this.length === 0) return null;
  var location = createListWithSameElement(2,0);
 let i,j,m;
 m = this[0][0];
 for(i = 0;i < this.length;i++){
   for(j = 0;j < this[i].length;j++){
     if(this[i][j] > m){
       m = this[i][j];
       location[0] = i;
       location[1] = j;
     }
   }
 }
 return location;
}
nT.prototype.getMin=function() {
 if(this.length === 0) return null;
  var min = this[0].getMin();
 let i;
  for(i = 1; this[i] != null; i++) {
   min = Math.min(this[i].getMin(), min);
 }
 return min;
}
nT.prototype.getMinValues=function() {
 if(this.length === 0) return null;
  var mins = new nL();
 let i;
 
 for(i = 0; this[i] != null; i++) {
   mins[i] = this[i].getMin();
 }
  return mins;
}
nT.prototype.getMinCell=function() {
 if(this.length === 0) return null;
  var location = createListWithSameElement(2,0);
 let i,j,m;
 m = this[0][0];
 for(i = 0;i < this.length;i++){
   for(j = 0;j < this[i].length;j++){
     if(this[i][j] < m){
       m = this[i][j];
       location[0] = i;
       location[1] = j;
     }
   }
 }
 return location;
}
nT.prototype.getInterval=function(bIgnoreNaN) {
 if(this.length === 0) return null;
 let rangeInterval = (this[0]).getInterval(bIgnoreNaN);
 let n = this.length;
 for(var i = 1; i<n; i++) {
   var newRange = (this[i]).getInterval(bIgnoreNaN);
   rangeInterval.x = Math.min(rangeInterval.x, newRange.x);
   rangeInterval.y = Math.max(rangeInterval.y, newRange.y);
 }
 return rangeInterval;
}
nT.prototype.getFrame=function() {
 if(this.length<2) return;
 let i0 = this[0].getInterval();
 let i1 = this[1].getInterval();
 return new Rec(i0.x, i1.x, i0.getAmplitude(), i1.getAmplitude());
}
nT.prototype.getSums=function(factor=1) {
 let nl = new nL();
 let l = this.length;
 for(var i = 0; i<l; i++) {
   nl[i] = this[i].getSum()*factor;
 }
 return nl;
}
nT.prototype.getRowsSums=function() {
 let sums = this[0].clone();
 let nl;
 for(var i = 1; this[i] != null; i++) {
   nl = this[i];
   for(var j = 0; nl[j] != null; j++) {
     sums[j] += nl[j];
   }
 }
 return sums;
}
nT.prototype.getAverages=function() {
 let nl = new nL();
 for(var i = 0; this[i] != null; i++) {
   nl[i] = this[i].getMean();
 }
 return nl;
}
nT.prototype.getRowsAverages=function() {
 let l = this.length;
 let averages = this[0].clone().factor(1 / l);
 let nl;
 let i, j;
 let length;
 for(i = 1; i<l; i++) {
   nl = this[i];
   length = nl.length;
   for(j = 0; j<length; j++) {
     averages[j] += nl[j] / l;
   }
 }
 return averages;
}
nT.prototype.getIntervals=function() {
 let l = this.length;
 let nl;
 let i;
 let intervalList = new L();//TODO: convert into iL once available
 for(i = 0; i<l; i++) {
   nl = this[i];
   intervalList.push(nl.getInterval());
 }
 return intervalList;
}
nT.prototype.factor=function(value) {
 let newTable = new nT();
 let i;
 let nl;
 let l = this.length;
  switch(_typeOf(value)) {
   case 'number':
     for(i = 0; i<l; i++) {
       nl = this[i];
       newTable[i] = nl.factor(value);
     }
     break;
   case 'nL':
     for(i = 0; i<l; i++) {
       nl = this[i];
       newTable[i] = nl.factor(value[i]);
     }
     break;
  }
  newTable.name = this.name;
 return newTable;
}
nT.prototype.add=function(value) {
 let newTable = new nT();
 let nl;
 let i;
 let l = this.length;
  for(i = 0; i<l; i++) {
   nl = this[i];
   newTable[i] = nl.add(value);
 }
  newTable.name = this.name;
 return newTable;
}
dL.prototype.getTimes=function() {
 let i;
 let nl = new nL();
 for(i = 0; this[i] != null; i++) {
   nl.push(this[i].getTime());
 }
 return nl;
}
dL.prototype.getYears=function() {
 let i;
 let nl = new nL();
 for(i = 0; this[i] != null; i++) {
   nl.push(this[i].getYear());
 }
 return nl;
}
dL.prototype.getFullYears=function() {
 let i;
 let nl = new nL();
 for(i = 0; this[i] != null; i++) {
   nl.push(this[i].getFullYear());
 }
 return nl;
}
dL.prototype.getMin=function() {
 if(this.length === 0) return null;
 let min = this[0];
 let i;
 for(i = 1; this[i] != null; i++) {
   min = min < this[i] ? min : this[i];
 }
 return min;
}
dL.prototype.getMax=function() {
 if(this.length === 0) return null;
 let max = this[0];
 let i;
 for(i = 1; this[i] != null; i++) {
   max = max > this[i] ? max : this[i];
 }
 return max;
}

dL.prototype.getInterval=function() {
  if(this.length === 0) return null;
   var min = this[0];
   var max = this[0];
   for(let i = 1; i<this.length; i++) {
     min = Math.min(this[i], min)
     max = Math.max(this[i], max)
   }
   return new dI(min, max);
}

nL.prototype.getMin=function() {
 //TODO:store result and retrieve while the nL doesn't change;
 if(this.length === 0) return null;
 let i;
 let min = this[0];
 for(i = 1; i < this.length; i++) {
   min = Math.min(min, this[i]);
 }
 return min;
}
nL.prototype.getMax=function() {
 //TODO:store result and retrieve while the nL doesn't change;
 if(this.length === 0) return null;
 let i;
 let max = this[0];
 let l = this.length;
 for(i = 1; i < l; i++) {
   max = Math.max(max, this[i]);
 }
 return max;
}
nL.prototype.getIndexOfMin=function() {
 if(this.length === 0) return null;
 let i;
 let min = this[0];
 let imin = 0;
 for(i = 1; i < this.length; i++) {
   if(this[i] < min){
     min = this[i];
     imin = i;
   }
 }
 return imin;
}
nL.prototype.getIndexOfMax=function() {
 if(this.length === 0) return null;
 let i;
 let max = this[0];
 let imax = 0;
 for(i = 1; i < this.length; i++) {
   if(this[i] > max){
     max = this[i];
     imax = i;
   }
 }
 return imax;
}
nL.prototype.getAmplitude=function() {
 if(this.length === 0) return 0;
 let min = this[0];
 let max = this[0];
 let l = this.length;
 for(var i = 1; i<l; i++) {
   min = Math.min(min, this[i]);
   max = Math.max(max, this[i]);
 }
 return max - min;
}
nL.prototype.getSum=function() {
 if(this.length === 0) return 0;
 let i;
 let sum = this[0];
 let l = this.length;
 for(i = 1; i < l; i++) {
   sum += this[i];
 }
 return sum;
}
nL.prototype.getProduct=function() {
 if(this.length === 0) return null;
 let i;
 let product = this[0];
 let l = this.length;
 for(i = 1; i < l; i++) {
   product *= this[i];
 }
 return product;
}
nL.prototype.getInterval=function(bIgnoreNaN) {
 if(this.length === 0) return null;
 bIgnoreNaN = bIgnoreNaN == null ? false : bIgnoreNaN;
 let max = -Infinity;
 let min = Infinity;
 let l = this.length;
 let i;
 for(i = 0; i<l; i++) {
   if(bIgnoreNaN && isNaN(this[i])) continue;
   max = Math.max(max, this[i]);
   min = Math.min(min, this[i]);
 }
 if(max == -Infinity && min == Infinity){
   // only happens when no valid numeric entries. Switch to natural order
   min = -Infinity;
   max =  Infinity;
 }
 let interval = new I(min, max);
 interval.amplitude = max-min
 return interval;
}
nL.prototype.getIntervalWithAverage=function() {
 if(this.length === 0) return null;
 let max = this[0];
 let min = this[0];
 let average = this[0];
 let l = this.length;
 let i;
 for(i = 1; i<l; i++) {
   max = Math.max(max, this[i]);
   min = Math.min(min, this[i]);
   average+=this[i];
 }
 let interval = new I(min, max);
 interval.average = average/l;
 return interval;
}
nL.prototype.getNumbersSimplified=function(method, param) {
 let newList;
 let i, j;
 let l = this.length;
  method = method||0;
 param = param||0;
  newList = new nL();
 newList.name = this.name;
  switch(method){
   case 0:
     var power = Math.pow(10, param);
     this.forEach(function(val){
       newList.push(Math.floor(val/power)*power);
     });
     break;
   case 6:
     newList = this.getQuantiles(param, 2);
     newList.name = this.name;// + " ("+param+" quantiles intervals)";
     break;
   case 1:
   case 2:
     param = Math.min( param||10, Math.floor(this.length/2) );
     var quantiles = this.getQuantiles(param);
     var val;
     var nQuantiles = quantiles.length;
     for(i=0; i<l; i++){
       val = this[i];
       if(val<quantiles[0]){
         method==1?newList.push(0):newList.push(quantiles._min);
       } else {
         for(j=0; j<nQuantiles; j++){
           if( val>=quantiles[j] && (j+1==quantiles.length || val<quantiles[j+1]) ){
             method==1?newList.push(j+1):newList.push(quantiles[j]);
             break;
           }
         }
       }
     }
     if(method==1) newList.name = this.name + " (n quantile)";
     break;
   case 3:
     newList.name = this.name + " (order of magnitude)";
     for(i=0; i<l; i++){
       newList.push(Math.floor( Math.log(this[i])/Math.log(10) ));
     }
     // this.forEach(function(val){
     //   newList.push(Math.floor( Math.log(val)/Math.log(10) ));
     // });
     break;
   case 4:
     newList.name = this.name + " (rounded by order of magnitude)";
     for(i=0; i<l; i++){
       newList.push( Math.pow ( 10, Math.floor( Math.log(this[i])/Math.log(10) ) ) );
     }
     // this.forEach(function(val){
     //   newList.push( Math.pow ( 10, Math.floor( Math.log(val)/Math.log(10) ) ) );
     // });
     break;
   case 5:
     param = param||1;
     newList.name = this.name + " (significant digits)";
     for(i=0; i<l; i++){
       newList.push( Number(this[i].toPrecision(param)) );
     }
     break;
 }
  return newList;
}
//nL.prototype.toPolygon=
nL.prototype.getMean=function() {//@todo: change name to getMean
 return this.getSum()/this.length;
}
nL.prototype.getGeometricMean=function() {
 /*
 let s = 0;
 //this.forEach(function(val) {
 let l = this.length;
 for(var i = 0; i<l; i++) {
   s += Math.log(this[i]);
 }
 return Math.pow(Math.E, s / this.length);
 */
if(this.length==0) return 0;
let s = this[0];
 for(var i = 1; i<this.length; i++) {
   s *= this[i];
 }
 return Math.pow(s, 1 / this.length);
}
nL.prototype.getNorm=function() {
 let sq = 0;
 let l = this.length;
 for(var i = 0; i<l; i++) {
   sq += Math.pow(this[i], 2);
 }
 return Math.sqrt(sq);
}
nL.prototype.getVariance=function(mean) {
 let sd = 0;
 let average = mean||this.getMean();
 let l = this.length;
 for(var i = 0; i<l; i++) {
   sd += Math.pow(this[i] - average, 2);
 }
 return sd / this.length;
}
nL.prototype.getStandardDeviation=function(mean) {
 return Math.sqrt(this.getVariance(mean));
}
nL.prototype.getMedian=function() {
 let sorted = this.getSorted(true);
 let prop = (this.length - 1) / 2;
 let entProp = Math.floor(prop);
 let onIndex = prop == entProp;
 return onIndex ? sorted[prop] : (0.5 * sorted[entProp] + 0.5 * sorted[entProp + 1]);
}
nL.prototype.getQuantiles=function(nQuantiles=4, mode=0) {//TODO: defines different options for return
  var l = this.length;
 let sorted = this.getSorted(true);
 let prop = l/nQuantiles;
 let entProp = Math.floor(prop);
 let onIndex = prop == entProp;
 let quantiles = new nL();
 quantiles.name = this.name;
 let i;
  for(i = 0; i < nQuantiles - 1; i++) {
   quantiles[i] = onIndex ? sorted[(i + 1) * prop] : (0.5 * sorted[(i + 1) * entProp] + 0.5 * sorted[(i + 1) * entProp + 1]);
 }
  quantiles._sorted = sorted;
 quantiles._min = sorted[0];
 quantiles._max = sorted.at(-1)//[sorted.length-1];
  if(mode===0) return quantiles;
  var numberQuantil;
 if(mode==1){
   numberQuantil= new nL();
 } else {
    numberQuantil= new sL();
 }
 
 numberQuantil.name = this.name;
 let j;
 let words;
 if(mode==3) words = nQuantiles==2?['low', 'high']:['low', 'medium', 'high'];
  for(i=0; i<l; i++){
   for(j=0; j<quantiles.length; j++){
     if(this[i]<quantiles[j]){
       numberQuantil[i] = mode==3?words[j]:(mode==1?j:( (j==0?quantiles._min:quantiles[j-1]) + "-" + quantiles[j] ));
       break;
     }
   }
   if(numberQuantil[i]==null) numberQuantil[i] = mode==3?words[j]:(mode==1?quantiles.length:(quantiles.at(-1)+"-"+quantiles._max));
 }
  numberQuantil._quantiles = quantiles;
 return numberQuantil;
}

nL.prototype.getSorted=function(ascending) {
 ascending = ascending == null ? true : ascending;
  var newList;
 if(ascending) {
   newList = nL.toL(this.slice().sort(function(a, b) {
     return a - b;
   }), false);
 }
 else {
   newList = nL.toL(this.slice().sort(function(a, b) {
     return b - a;
   }), false);
 }
 newList.name = this.name;
 return newList;
}
nL.prototype.getSortIndexes=function(descending) {
 if(descending == null) descending = true;
  var pairs = [];
 let newList = new nL();
 let l = this.length;
  if(this.length === 0) return newList;
  for(var i = 0; i<l; i++) {
   pairs.push([i, this[i]]);
 }
  if(descending) {
   pairs.sort(function(a, b) {
     if(a[1] < b[1]) return 1;
     return -1;
   });
 } else {
   pairs.sort(function(a, b) {
     if(a[1] < b[1]) return -1;
     return 1;
   });
 }
  for(i = 0; pairs[i] != null; i++) {
   newList.push(pairs[i][0]);
 }
 newList.name = this.name;
 return newList;
}
nL.prototype.cleanNonFinites=function(interval){
 if(interval==null) interval = this.getInterval();
  if( !isFinite(interval.x) || !isFinite(interval.y) ){
    var min;
   var max;
    var negInfinities = new nL();
   var posInfinities = new nL();
   var nans = new nL();
    var newList = new nL();
   newList.name = this.name;
    for(let i = 0; i < this.length; i++) {
       if( !isFinite(this[i]) ){
         if(this[i]==Infinity){
           posInfinities.push(i);
         } else if(this[i]==-Infinity){
           negInfinities.push(i);
         } else {
           nans.push(i);
         }
       } else {
         if(min==null) min = this[i];
         if(max==null) max = this[i];
         min = Math.min(min, this[i]);
         max = Math.max(max, this[i]);
         newList[i] = this[i];
       }
    }
    if(min==null) min = 0;
    if(max==null) max = 0;
    min--;
    max++;
     for(i = 0; i < negInfinities.length; i++) {
     newList[negInfinities[i]] = min;
    }
    for(i = 0; i < posInfinities.length; i++) {
     newList[posInfinities[i]] = max;
    }
    for(i = 0; i < nans.length; i++) {
     newList[nans[i]] = 0;
    }
     return newList;
 }
 return this;
}
nL.prototype.getNormalized=function(factor) {
 if(this==null) return;
  factor = factor == null ? 1 : factor;
  if(this.length === 0) return new nL();;
 
 let i;
 let interval = this.getInterval();
  var newList = this.cleanNonFinites(interval);
 if(this!=newList) return newList.getNormalized(factor);
  var a = interval.getAmplitude();
 let newNumberList;
 if(a===0) {
   newNumberList = createListWithSameElement(this.length, 1);
   newNumberList.name = this.name;
   newNumberList.interval = interval;
   return newNumberList;
 }
 newNumberList = new nL();
 factor /= a;
 for(i = 0; i < this.length; i++) {
   newNumberList[i] = factor*(this[i] - interval.x);
 }
 newNumberList.name = this.name;
 newNumberList.interval = interval;
 return newNumberList;
}

//[!] redundant
nL.prototype.getNormalizedToSum=function(factor,sum) {
    return normalizeToSum(this, factor,sum)
}

nL.prototype.getNormalizedToMax=function(factor) {
 if(this==null) return;
  factor = factor == null ? 1 : factor;
  if(this.length === 0) return null;
 
 let i;
 let max = this.getMax();
  var newList = this.cleanNonFinites();
 if(this!=newList) return newList.getNormalizedToMax(factor);
   var newNumberList = new nL();
 for(i = 0; i < this.length; i++) {
   newNumberList[i] = factor * this[i]/max;
 }
 newNumberList.name = this.name;
 return newNumberList;
}
nL.prototype.factor=function(value) {
 let i;
 let newNumberList = new nL();
 let l = this.length;
  if(Array.isArray(value)){
   for(i = 0; i < l; i++) {
     newNumberList.push(this[i] * value[i%this.length]);
   }
 } else {
   for(i = 0; i < l; i++) {
     newNumberList.push(this[i] * value);
   }
 }
 newNumberList.name = this.name;
 return newNumberList;
}
nL.prototype.add=function(object) {
 let i;
 let newNumberList = new nL();
 let type = _typeOf(object);
 //if(Array.isArray(object)) object = object.toL()
 let l = this.length;
  switch(type) {
   case 'number':
     for(i = 0; i<l; i++) {
       newNumberList[i] = this[i] + object;
     }
     break;
   case 'nL':
     for(i = 0; i<l; i++) {
       newNumberList[i] = this[i] + object[i % object.length];
     }
     break;
 }
  newNumberList.name = this.name;
 return newNumberList;
}
nL.prototype.subtract=function(object) {
 let i;
 let newNumberList = new nL();
 let type = _typeOf(object);
 let l = this.length;
  switch(type) {
   case 'number':
     for(i = 0; i<l; i++) {
       newNumberList[i] = this[i] - object;
     }
     break;
   case 'nL':
     for(i = 0; i<l; i++) {
       newNumberList[i] = this[i] - object[i % object.length];
     }
     break;
 }
  newNumberList.name = this.name;
 return newNumberList;
}
nL.prototype.divide=function(object) {
 let i;
 let newNumberList = new nL();
 let type = _typeOf(object);
 let l = this.length;
  switch(type) {
   case 'number':
     for(i = 0; i<l; i++) {
       newNumberList[i] = this[i] / object;
     }
     break;
   case 'nL':
     for(i = 0; i<l; i++) {
       newNumberList[i] = this[i] / object[i % object.length];
     }
     break;
 }
  newNumberList.name = this.name;
 return newNumberList;
}
nL.prototype.sqrt=function() {
 let i;
 let newNumberList = new nL();
 let l = this.length;
  for(i = 0; i < l; i++) {
   newNumberList.push(Math.sqrt(this[i]));
 }
 newNumberList.name = this.name;
 return newNumberList;
}
nL.prototype.pow=function(power) {
 let i;
 let newNumberList = new nL();
 let l = this.length;
 for(i = 0; i < l; i++) {
   newNumberList.push(Math.pow(this[i], power));
 }
 newNumberList.name = this.name;
 return newNumberList;
}
nL.prototype.log=function(add) {
 add = add || 0;
  var i;
 let newNumberList = new nL();
 let l = this.length;
 for(i = 0; i<l; i++) {
   newNumberList[i] = Math.log(this[i] + add);
 }
 newNumberList.name = this.name;
  return newNumberList;
}
nL.prototype.floor=function() {
 let i;
 let newNumberList = new nL();
 let l = this.length;
 for(i = 0; i < l; i++) {
   newNumberList.push(Math.floor(this[i]));
 }
 newNumberList.name = this.name;
 return newNumberList;
}
nL.prototype.approach=function(destinty, speed) {
 speed = speed || 0.5;
  var i;
 let antispeed = 1 - speed;
 let l = this.length;
  for(i = 0; i<l; i++) {
   this[i] = antispeed * this[i] + speed * destinty[i];
 }
 return true;
}
nL.prototype.isEqual=function(nl) {
 let l = this.length;
 if(nl == null || nl.length != l) {
   return false;
 }
 for(var i = 0; i<l; i++) {
   if(this[i] != nl[i]) return false;
 }
 return true;
}
nL.prototype.addRandom=function(interval){
 if(interval == null) interval = new I(0,1);
 let i;
 let newNumberList = new nL();
 let l = this.length;
 let a = interval.getAmplitude();
  for(i = 0; i < l; i++) {
   newNumberList[i] =  this[i] + Math.random()*a + interval.x;
 }
 
 newNumberList.name = this.name;
 return newNumberList;
}
nL.prototype.trim=function(min, max){
 if(min==null && max==null) return this;
 let newNumberList = new nL();
  for(var i = 0; i < this.length; i++) {
   if(min!=null) newNumberList[i] =  Math.max(this[i], min);
   if(max!=null) newNumberList[i] =  Math.min(this[i], max);
 }
 
 newNumberList.name = this.name;
 return newNumberList;
}
nL.prototype.clone=function() {
 let newList = nL.toL(this.slice(), false);
 newList.name = this.name;
 newList.fnDerived = this.fnDerived;
 return newList;
}
I.prototype.getMin=function() {
 return Math.min(this.x, this.y);
}
I.prototype.getMax=function() {
 return Math.max(this.x, this.y);
}
I.prototype.getAmplitude=function() {
 return Math.abs(this.y - this.x);
}
I.prototype.getSignedAmplitude=function() {
 return this.y - this.x;
}
I.prototype.getMiddle=function() {
 return (this.x + this.y)*0.5;
}
I.prototype.getRandom=function() {
 return this.x + (this.y - this.x)*random();
}
I.prototype.getSign=function() {
 if(this.x == this.y) return 0;
 return Math.abs(this.y - this.x)/(this.y - this.x);
}
I.prototype.getScaled=function(value) {
 let midAmp = 0.5 * (this.y - this.x);
 let middle = (this.x + this.y) * 0.5;
 return new I(middle - midAmp * value, middle + midAmp * value);
}
I.prototype.getScaledFromProportion=function(value, proportion) {
 let antiP = 1 - proportion;
 let amp0 = proportion * (this.y - this.x);
 let amp1 = antiP * (this.y - this.x);
 let middle = antiP * this.x + proportion * this.y;
 return new I(middle - amp0 * value, middle + amp1 * value);
}
I.prototype.add=function(value) {
 return new I(this.x + value, this.y + value);
}
I.prototype.invert=function() {
 let swap = this.x;
 this.x = this.y;
 this.y = swap;
}
I.prototype.adjustToContain=function(value) {
 if(value < this.x) this.x = value;
 if(value > this.y) this.y = value;
}
I.prototype.getInterpolatedValue=function(value) {
 //TODO: should this be unsigned amplitude?
 //return value * Number(this.getSignedAmplitude()) + this.x;
 return value*(this.y - this.x)  + this.x;
}
I.prototype.getInverseInterpolatedValue=function(value) {
 //return (value - this.x) / this.getSignedAmplitude();
 return (value - this.x) / (this.y - this.x);
}
I.prototype.getInterpolatedValues=function(nl) {
 let newNumberList = new nL();
 let nElements = nl.length;
 for(var i = 0; i < nElements; i++) {
   newNumberList[i] = this.getInterpolatedValue(nl[i]);
 }
 return newNumberList;
}
I.prototype.getInverseInterpolatedValues=function(nl) {
 let newNumberList = new nL();
 let nElements = nl.length;
 for(var i = 0; i < nElements; i++) {
   newNumberList.push(this.getInverseInterpolatedValue(nl[i]));
 }
 return newNumberList;
}
I.prototype.intersect=function(interval) {
 return new I(Math.max(this.x, interval.x), Math.min(this.y, interval.y));
}
I.prototype.unite=function(interval) {
 return new I(Math.min(this.x, interval.x), Math.max(this.y, interval.y));
}
I.prototype.clone=function() {
 let newInterval = new I(this.x, this.y);
 newInterval.name = name;
 return newInterval;
}
I.prototype.contains=function(value) {
 if(this.y > this.x) return value >= this.x && value <= this.y;
 return value >= this.y && value <= this.y;
}
I.prototype.isEqual=function(interval) {
 return this.x == interval.x && this.y == interval.y;
}
I.prototype.remap=function(val,intTarget) {
 let f = this.getInverseInterpolatedValue(val);
 return intTarget.getInterpolatedValue(f);
}

I.prototype.toString=function() {
 return "Interval[x:" + this.x + "| y:" + this.y + "| amplitude:" + this.getAmplitude() + "]";
}
pol3DL.prototype.getBarycenter=function() {
    var b;
    var x=0;
    var y=0;
    var z=0;
    for(var i=0; i<this.length; i++){
      b = this[i].getBarycenter();
      x+=b.x;
      y+=b.y;
      z+=b.z;
    }
    return new P3D(x/this.length, y/this.length, z/this.length);
}

cScale.prototype.getColor=function(value) {
 return this.colorScaleFunction(value);
}

cScale.prototype.getColorList=function(nColors) {
 let colorList = new cL();
 let i;
 for(i = 0; i < nColors; i++) {
   colorList.push(this.getColor(i / (nColors - 1)));
 }
 return colorList;
}

MetaCanvas.prototype._init=function (autoStart, noEvents) {
 this.W = 1; // canvas width
 this.H = 1; // canvas height
 this.cX = 1; // canvas center x
 this.cY = 1; // canvas center y
 this.mX = 0; // cursor x
 this.mY = 0; // cursor y
 this.mP = new P(0, 0); // cursor point // YY why have this and mX and mY
 this.nF = 0; // number of current frame since first cycle
 
 this.N_FRAMES_MOUSE_UP_FAST = 9
 this.TIME_MOUSE_UP_SLOW = 300

 this.MOUSE_DOWN = false; //true on the frame of mousedown event
 this.MOUSE_UP = false; //true on the frame of mouseup event
 this.MOUSE_UP_FAST = false; //true on the frame of mouseup event
 this.MOUSE_UP_SLOW = false; //true on the frame of mouseup event
 this.WHEEL_CHANGE = 0; //differnt from 0 if mousewheel (or pad) moves / STATE
 //this._MIN_WHEEL_CHANGE = 99999;//used to modulate WHEEL_CHANGE
 //this._MAX_WHEEL_CHANGE = 0.1;//used to modulate WHEEL_CHANGE
 this._AVERAGE_WHEEL_CHANGE = 0.1;//used to modulate WHEEL_CHANGE
 this.NF_DOWN = undefined; //number of frame of last mousedown event
 this.TIME_DOWN = undefined //in milliseconds
 this.NF_UP = undefined; //number of frame of last mouseup event
 this.MOUSE_PRESSED = false; //true if mouse pressed / STATE
 this.MOUSE_PRESSED_LONG = false; //true if mouse pressed / STATE
 this.MOUSE_IN_DOCUMENT = true; //true if cursor is inside document / STATE
 this.mX_DOWN = undefined; // cursor x position on last mousedown event
 this.mY_DOWN = undefined; // cursor x position on last mousedown event
 this.mX_UP = undefined; // cursor x position on last mousedown event
 this.mY_UP = undefined; // cursor y position on last mousedown event
 this.MOUSE_MOVED = false; //boolean that indicates wether the mouse moved in the last frame / STATE
 this.MOUSE_JUMPED = false; //boolean that indicates wether the mouse moved more than 20px in each direction in the last frame / STATE

 this.PREV_mX = 0; // cursor x position previous frame
 this.PREV_mY = 0; // cursor y position previous frame
 this.DX_MOUSE = 0; //horizontal movement of cursor in last frame
 this.DY_MOUSE = 0; //vertical movement of cursor in last frame
 this.DX_MOUSE_PRESSED = 0; //horizontal movement of cursor in last frame
 this.DY_MOUSE_PRESSED = 0; //vertical movement of cursor in last frame
 this.DX_MOUSE_DRAGGED = 0;
 this.DY_MOUSE_DRAGGED = 0;
 this.T_MOUSE_PRESSED = 0; //time in milliseconds of mouse being pressed, useful for sutained pressure detection
 
 this.last_MOUSE_DOWN = 0
 this.last_MOUSE_UP = 0
 this.last_MOUSE_UP_FAST = 0

 this.KEY_PRESSED = null; //value of key pressed (value is not null while key is pressed)
 this.KEY_JUST_PRESSED = null; //value of key just pressed in current frame
 this.KEY_JUST_RELEASED = null; //value of key just released in current frame
 this.SHIFT_PRESSED = false //true if SHIFT key is pressed
 this.ALT_PRESSED = false //true if Alt key is pressed
 this.COMMAND_PRESSED = false

 this.IS_TOUCH = this.IS_TOUCH || ('pointerdown' in window) || ('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0);
 this.PINCHING = false
 this.pinchDiamater_last = 0

 this.LAST_DETECTED_EVENT = null;

 this.force = 0; //in touchscreen cases, measures touch force, between 0 and 1

 this.cursorStyle = 'auto';
 this.backGroundColor = 'white'; // YY why keep this if we only use the rgb version
 this.backGroundColorRGB = [255, 255, 255];
 this.cycleActive = undefined; // YY why do we need to maintain this state?
  // this._cycleOnMouseMovement = false;
 this._prevMouseX = 0;
 this._prevMouseY = 0;
 this._setIntervalId = undefined;
 this._setTimeOutId = undefined;
 this._interactionCancelledFrame = undefined;
 this._tLastMouseDown = undefined;
 this._alphaRefresh = 0; //if _alphaRefresh>0 instead of clearing the canvas each frame, a transparent rectangle will be drawn
 this.END_CYCLE_DELAY = 3000; //time in milliseconds, from last mouse movement to the last cycle to be executed in case cycleOnMouseMovement has been activated
 this._LISTENERS_ADDED = false;
  this.fontColor = "#000000";
 this.fontSize = "14";
 this.fontName = "Arial";
 this.fontAlign = 'left';
 this.fontBaseline = "top";
 this.fontStyle = "";
  // Create the canvas and get it ready for drawing
 this.canvas = document.createElement("canvas");
  //Allow the canvas to be focusable to enable keydown and keyup
 this.canvas.setAttribute("tabindex", "10000");
 this.canvas.setAttribute("style", "outline:none");
 //Hide the focus styling
 
  //var canvasStyle = "outline: none; -webkit-tap-highlight-color: rgba(255, 255, 255, 0);";
 //this.canvas.setAttribute("style", canvasStyle);
  
 if (this.container) {
   // If this container is falsy, then the canvas is not attached to the DOM
   // and can be used as an offscreen buffer.
   this.container.appendChild(this.canvas);
 }
 this.context = this.canvas.getContext("2d");
  this._adjustCanvas(this.dimensions);

  let touch_down_event_names= ['touchstart', 'pointerdown']
    let touch_up_event_names= ['touchmove', 'pointerup']
    let touch_move_event_names=  ['touchmove', 'pointermove']

  if(!noEvents){

      // YY TODO allow user to bind to these events as well. Probably
     // through a generic event mechanism. c.f. global addInteractionEventListener
     let boundMouseOrKeyboard = this._onMouseOrKeyBoard.bind(this);

    

    if (this.IS_TOUCH) {

        // touch_down_event_name = 'pointerdown'// ('onpointerdown' in window)?'onpointerdown':(('pointerdown' in window)?'pointerdown':'ontouchstart')
        // touch_up_event_name = 'pointerup'// ('onpointerup' in window)?'onpointerup':(('pointerup' in window)?'pointerup':'touchend')
        // touch_move_event_name = 'pointermove'// ('onpointermove' in window)?'onpointermove':(('pointermove' in window)?'pointermove':'touchmove')

       touch_down_event_names.forEach(touch_down_event_name=>this.canvas.addEventListener(touch_down_event_name, boundMouseOrKeyboard, false))
       touch_up_event_names.forEach(touch_up_event_name=>this.canvas.addEventListener(touch_up_event_name, boundMouseOrKeyboard, false))
       touch_move_event_names.forEach(touch_move_event_name=>this.canvas.addEventListener(touch_move_event_name, boundMouseOrKeyboard, false))
       //this.canvas.addEventListener("gesturestart", boundMouseOrKeyboard, false);
       //this.canvas.addEventListener("gestureend", boundMouseOrKeyboard, false);
       //this.canvas.addEventListener("gesturechange", boundMouseOrKeyboard, false);
     } //else {
      //mouse listeners are added regardles of wether the device is TOUCH
     this.canvas.addEventListener("mousemove", boundMouseOrKeyboard, false);
     this.canvas.addEventListener("mousedown", boundMouseOrKeyboard, false);
     this.canvas.addEventListener("mouseup", boundMouseOrKeyboard, false);
     this.canvas.addEventListener("mouseenter", boundMouseOrKeyboard, false);
     this.canvas.addEventListener("mouseleave", boundMouseOrKeyboard, false);
     this.canvas.addEventListener("click", boundMouseOrKeyboard, false);
      this.canvas.addEventListener("DOMMouseScroll", boundMouseOrKeyboard, false);
      //this.canvas.addEventListener("mousewheel", boundMouseOrKeyboard, false);
     this.canvas.addEventListener("mousewheel", boundMouseOrKeyboard, { passive: false });//TEST as per Dani's request
     //}
      this.canvas.addEventListener("keydown", boundMouseOrKeyboard, false);
      document.addEventListener("keydown", boundMouseOrKeyboard, false);
     this.canvas.addEventListener("keyup", boundMouseOrKeyboard, false);
     document.addEventListener("keyup", boundMouseOrKeyboard, false);
    
    }



  // Setup resize listeners
 let boundResize = this._onResize.bind(this);
 let elementDoc, elementWindow;
 // "this.container" is usually expectd to be properly set....
 if( this.container != null ){
   elementDoc = this.container.ownerDocument;
   if( elementDoc ){
     elementWindow = elementDoc.defaultView || elementDoc.parentWindow;
   }else{
     elementWindow = window;
   }
 }else{
   elementWindow = window;
 }

 elementWindow.addEventListener("resize", resizeThrottler(boundResize, 66), false);
 //parent.addEventListener("resize", resizeThrottler(boundResize, 66), false);
 window.addEventListener('resize', resizeThrottler(boundResize, 66));
 document.addEventListener('resize', resizeThrottler(boundResize, 66));
 this.prevWindowInnerHeight = window.innerHeight
 
  // Infrastructure for custom event handlers
    this._listeners = {
        "mousemove": [],
        "mousedown": [],
        "mouseup": [],
        "mouseenter": [],
        "mouseleave": [],
        "mousewheel": [],
        "click": [],
        "keydown": [],
        "keyup": []
    }
    
    if (this.IS_TOUCH && !noEvents) {
        touch_down_event_names.forEach(touch_down_event_name=>this._listeners[touch_down_event_name] = [])
        touch_up_event_names.forEach(touch_up_event_name=>this._listeners[touch_up_event_name] = [])
        touch_move_event_names.forEach(touch_move_event_name=>this._listeners[touch_move_event_name] = [])
    }

  this.context.fillStyle = 'black';
  // Call the user provided init function.
 this.init();
  // Start the draw loop
 if (autoStart) {
   this._startCycle();
 }
  //useful to store information in the MetaCanvas instance
 //specially useful when used through MoebioCanvas module
 this.memory = {};
}
MetaCanvas.prototype._getRelativeMousePos=function (evt) {
 const rect = this.canvas.getBoundingClientRect();
 return {
   x: evt.clientX - rect.left,
   y: evt.clientY - rect.top
 };
}
MetaCanvas.prototype._onMouseOrKeyBoard=function (e) {
    if(e.touches){
        if (e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }
    }

    let pos;
    // if (this.IS_TOUCH) {
    //     //var touches = (e.touches != null && e.touches.length>0 && e.touches[0] != null) ? e.touches[0] : e.targetTouches[0]
    //     this.PINCHING = false
    // }
    this.PINCHING = false
    this.LAST_DETECTED_EVENT = e.type

    const rect = this.canvas.getBoundingClientRect();

    switch (e.type) {
        case "touchmove":
        case "pointermove":
            if(e.touches){
                this.force = e.touches.force;
                pos = {
                    x: e.touches[0].clientX - rect.left,
                    y: e.touches[0].clientY - rect.top
                }

                //pinching
                if(e.touches.length>=2){
                    this.MOUSE_PRESSED = false
                    this.T_MOUSE_PRESSED = 0
                    this.MOUSE_IN_DOCUMENT = true
                    this.PINCHING = true
                    let point0Pinch = {
                        x:e.touches[0].clientX  - rect.left,
                        y:e.touches[0].clientY - rect.top
                    }
                    let point1Pinch = {
                        x:e.touches[1].clientX  - rect.left,
                        y:e.touches[1].clientY - rect.top
                    }
                    this.centerPinchX = (point0Pinch.x+point1Pinch.x)*0.5
                    this.centerPinchY = (point0Pinch.y+point1Pinch.y)*0.5
                    
                    this.pinchDiamater = Math.sqrt((point1Pinch.x-point0Pinch.x)**2 + (point1Pinch.y-point0Pinch.y)**2)
                    if(this.pinchDiamater_last){
                        this.WHEEL_CHANGE = (this.pinchDiamater - this.pinchDiamater_last)*0.2

                        pos = {
                            x:this.centerPinchX,
                            y:this.centerPinchY
                        }
                    }
                    this.pinchDiamater_last = this.pinchDiamater
                }
            } else {
                //e.type = "mousemove"
            }
    case "mousemove":
            //if (e.type == "mousemove" || !pos) pos = this._getRelativeMousePos(e)
            pos = pos||this._getRelativeMousePos(e)
            this.mX = pos.x
            this.mY = pos.y
            this.mP.x = this.mX
            this.mP.y = this.mY
            this.MOUSE_IN_DOCUMENT = true
        break;
   case "mousedown":
   case "touchstart":
   case "pointerdown":
   case "onpointerdown":
    if (e.touches) {
       this.mX = e.touches[0].clientX  - rect.left
       this.mY = e.touches[0].clientY - rect.top
       this.PREV_mX = this.mX
       this.PREV_mY = this.mY
     }
      this.NF_DOWN = this.nF;
      this.TIME_DOWN = new Date().getTime()
     this.MOUSE_PRESSED = true;
     this.T_MOUSE_PRESSED = 0;
     this._tLastMouseDown = new Date().getTime();
     this.mX_DOWN = this.mX;
     this.mY_DOWN = this.mY;
     this.MOUSE_IN_DOCUMENT = true;
     this.MOUSE_UP = false;
     this.MOUSE_DOWN = true;
     this._MOUSE_PRESSED_LONG_TRIGGERED = false
      break;
   case "mouseup":
   case "touchend":
   case "pointerup":
     this.NF_UP = this.nF;
     this.MOUSE_PRESSED = false;
     this.T_MOUSE_PRESSED = 0;
     this.mX_UP = this.mX;
     this.mY_UP = this.mY;
     this.MOUSE_IN_DOCUMENT = true;
     this.MOUSE_UP = true;
     this.MOUSE_DOWN = false;
     this.pinchDiamater_last = 0
     this.WHEEL_CHANGE = 0
     this._MOUSE_PRESSED_LONG_TRIGGERED = false
     break;
   case "mouseenter":
     this.MOUSE_IN_DOCUMENT = true;
     break;
   case "mouseleave":
     this.MOUSE_IN_DOCUMENT = false
     this.SHIFT_PRESSED = false
     this.ALT_PRESSED = false
     this.COMMAND_PRESSED = false
     break;
   case "keydown":
     this.SHIFT_PRESSED = e.shiftKey;
     this.ALT_PRESSED = e.altKey;
     this.KEY_PRESSED = e.key;
     this.KEY_JUST_PRESSED = e.key;
     this.COMMAND_PRESSED = e.keyCode==91
     break;
   case "keyup":
    this.KEY_JUST_RELEASED = this.KEY_PRESSED
     this.KEY_JUST_PRESSED = null;
     this.SHIFT_PRESSED = false
     this.ALT_PRESSED = false
     this.KEY_PRESSED = null;
     this.COMMAND_PRESSED = false
     break;
   case "mousewheel":
     //stops propagation for mouse wheel
     //added for solving interference with Vertical Landscape
     //e.preventDefault();
     //e.stopPropagation();
     ////////////////////
     break;
    //"gesturestart"
   //"gestureend"
   //"gesturechange"
 }
    this._emit(e.type, e);
  if (this.cycleActive && new Date().getTime() > this._LAST_TIME + 33) {
   this._onCycle();
 }
}
MetaCanvas.prototype._onResize=function (e) {

 let currentW = this.W;
 let currentH = this.H;
 // If the user has set the dimensions explicitly
 // we do not auto adjust the canvas.
 if (this.dimensions === undefined) {
   this._adjustCanvas();
 }
  if (this.onResize !== noOperation) {

   var newDim = this._containerDimensions()
   if (newDim.width !== currentW || newDim.height !== currentH) {
    this.W = newDim.width
    this.H = newDim.height
     // Forward the event to the user defined resize handler
     this.onResize(e);
   }
 }
}

MetaCanvas.prototype._containerDimensions=function () {
    //console.log(this.container.clientHeight, window.innerHeight, this.H)
 if (this.container) {
   return {
     width: window.innerWidth,//this.container.clientWidth,
     height: window.innerHeight//this.container.clientHeight
   };
 } else {
   return {
     width: 0,
     height: 0
   };
 }
}
MetaCanvas.prototype._adjustCanvas=function (dimensions) {
//console.log("adjust canvas:", dimensions)

 if (dimensions !== undefined) {
   this.W = dimensions.width;
   this.H = dimensions.height;
 } else {
   // https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements
    var dim = this._containerDimensions();
   this.W = dim.width;
   this.H = dim.height;
 }
  this.cX = Math.floor(this.W * 0.5);
 this.cY = Math.floor(this.H * 0.5);
  this.canvas.setAttribute('width', this.W);
 this.canvas.setAttribute('height', this.H);
 if(dimensions && dimensions.x!=null) this.canvas.setAttribute('x', dimensions.x);
 if(dimensions && dimensions.y!=null) this.canvas.setAttribute('y', dimensions.y);


   if(this.ADJUST_PIXEL_RADIUS) _adjustPixelRadius(this, this.W, this.H)

}
MetaCanvas.prototype._startCycle=function () {
 this.cycleActive = true;
 if (this._cycleInterval === 0) {
   // Call the cycle only once function
   setTimeout(this._onCycle.bind(this), 10);
 } else {
   clearInterval(this._setIntervalId);
   this._setIntervalId = setInterval(this._onCycle.bind(this), this._cycleInterval);
 }
}
MetaCanvas.prototype._stopCycle=function (callback) {
  clearInterval(this._setIntervalId);
 this.cycleActive = false;
 this._setIntervalId = undefined;
  if (callback) {
   callback();
 }
}
MetaCanvas.prototype.setDimensions=function (width, height, width2, height2) {
 let x,y,w,h
 
 if(width2!=null && height2!=null) {
   x = width
   y = height
   w = width2
   h = height2
   //this._adjustCanvas({width:width2,height:height2,x:width,y:height});
 } else {
   x = 0
   y = 0
   w = width
   h = height
   //this._adjustCanvas({width:width,height:height});
 }

 this.W = w;
 this.H = h;
 this.cX = w*0.5;
 this.cY = h*0.5;
 // this.canvas.setAttribute('width', w);
 // this.canvas.setAttribute('height', h);
 // this.canvas.setAttribute('x', x);
 // this.canvas.setAttribute('y', y);
 this.canvas.width = w;
 this.canvas.height = h;
 
 this.canvas.style.width = w+"px"
 this.canvas.style.height = h+"px"

 this.canvas.style.left = x+"px";
 this.canvas.style.top = y+"px";
 this.canvas.style.position = "absolute";


 //const canvas = document.querySelector("#mainDiv > canvas");
    //const ctx = this.canvas.getContext("2d");

    // Set display size (css pixels).
    //const size = w;
    

    if(this.ADJUST_PIXEL_RADIUS) _adjustPixelRadius(this,w,h)


 
 this._startCycle();
}

function _adjustPixelRadius(k,w,h){
    k.canvas.style.width = `${w}px`;
    k.canvas.style.height = `${h}px`;

    // Set actual size in memory (scaled to account for extra pixel density).
    const scale = window.devicePixelRatio; // Change to 1 on retina screens to see blurry this.canvas.

    k.canvas.width = Math.floor(w * scale);
    k.canvas.height = Math.floor(h * scale);

    // Normalize coordinate sys
    k.context.scale(scale, scale);
}

MetaCanvas.prototype.cycleFor=function (time) {
 if (time === 0) {//infinite
   if (this._setIntervalId) clearTimeout(this._setTimeOutId);
   this._startCycle();
 } else if (time == 1) {
   this._stopCycle();
   this._onCycle();
 } else {//specified number of frames
   if (this._setIntervalId) {
     clearTimeout(this._setTimeOutId);
   } else {
     this._startCycle();
   }
   this._stopAfter(time);
 }
}
MetaCanvas.prototype._stopAfter=function (time, callback) {
 let self = this;
 this._setTimeOutId = setTimeout(function () {
   self._stopCycle();
   if (callback) {
     callback();
   }
 }, time);
}
MetaCanvas.prototype._onCycle=function () {

    //ugly implementatio to guarantee onResize is triggered
    //when window vertical size changes
    if(window.innerHeight!=this.prevWindowInnerHeight){
        //console.log("***!*** k.H, this.prevWindowInnerHeight, window.innerHeight:", k.H, this.prevWindowInnerHeight, window.innerHeight)
        this.H = window.innerHeight
        this.onResize()
        this.prevWindowInnerHeight = window.innerHeight
    }


 if (this._alphaRefresh === 0) {
   if (this.backGroundColorRGB != null) {
     this.context.fillStyle =
       'rgb(' + this.backGroundColorRGB[0] +
       ',' + this.backGroundColorRGB[1] +
       ',' + this.backGroundColorRGB[2] +
       ')';
     this.context.fillRect(0, 0, this.W, this.H);
   } else {
     this.context.clearRect(0, 0, this.W, this.H);
   }
 } else {
   this.context.fillStyle =
     'rgba(' + this.backGroundColorRGB[0] +
     ',' + this.backGroundColorRGB[1] +
     ',' + this.backGroundColorRGB[2] +
     ',' + this._alphaRefresh + ')';
   this.context.fillRect(0, 0, this.W, this.H);
 }

    this.setCursor('default');
    this.MOUSE_DOWN = this.NF_DOWN == this.nF;
    this.MOUSE_UP = this.NF_UP == this.nF;
 
    this.MOUSE_UP_FAST = !this.MOUSE_UP_FAST && this.MOUSE_UP && (this.nF - this.NF_DOWN) < this.N_FRAMES_MOUSE_UP_FAST;
    this.MOUSE_UP_SLOW = !this.MOUSE_UP_SLOW && this.MOUSE_UP && Math.abs(this.mX_DOWN - this.mX)<5 && Math.abs(this.mY_DOWN - this.mY)<5 && (new Date().getTime() - this.TIME_DOWN) > this.TIME_MOUSE_UP_SLOW;
    
    this.MOUSE_PRESSED_LONG =  this.MOUSE_PRESSED && !this.MOUSE_PRESSED_LONG && !this._MOUSE_PRESSED_LONG_TRIGGERED && Math.abs(this.mX_DOWN - this.mX)<10 && Math.abs(this.mY_DOWN - this.mY)<10 && (new Date().getTime() - this.TIME_DOWN) > this.TIME_MOUSE_UP_SLOW;
    if(this.MOUSE_PRESSED_LONG) this._MOUSE_PRESSED_LONG_TRIGGERED = true

    //this.mX_DOWN

    this.DX_MOUSE = this.mX - this.PREV_mX;
    this.DY_MOUSE = this.mY - this.PREV_mY;
    this.MOUSE_MOVED = this.DX_MOUSE !== 0 || this.DY_MOUSE !== 0;
    this.MOUSE_JUMPED = Math.abs(this.DX_MOUSE) > 50 || Math.abs(this.DY_MOUSE) > 50
  
  if (this.MOUSE_PRESSED) {
   this.T_MOUSE_PRESSED = new Date().getTime() - this._tLastMouseDown;
   this.DX_MOUSE_PRESSED = this.DX_MOUSE;
   this.DY_MOUSE_PRESSED = this.DY_MOUSE;
   this.DX_MOUSE_DRAGGED = this.mX - this.mX_DOWN;
   this.DY_MOUSE_DRAGGED = this.mY - this.mY_DOWN;
   if(this.DRAGGABLE){
       this.x0+=this.DX_MOUSE_PRESSED;
       this.y0+=this.DY_MOUSE_PRESSED;
    }
 } else {
   this.DX_MOUSE_PRESSED = 0;
   this.DY_MOUSE_PRESSED = 0;
   this.DX_MOUSE_DRAGGED = 0;
   this.DY_MOUSE_DRAGGED = 0;
 }
  
 if(this.ZOOMABLE){
   let zoomChange = 1 + 0.3*this.WHEEL_CHANGE
   if(this.ZOOM*zoomChange>=this.MAX_ZOOM || this.ZOOM*zoomChange<=this.MIN_ZOOM) zoomChange = 1
   this.ZOOM *= zoomChange
   this.ZOOM = Math.max(Math.min(this.ZOOM, this.MAX_ZOOM), this.MIN_ZOOM)
   this.x0 = (this.x0 - this.mX)*zoomChange + this.mX
   this.y0 = (this.y0 - this.mY)*zoomChange + this.mY
 }


    //this prevents fast triggers of mouse behaviors (on touch screens)
    if(this.MOUSE_DOWN){
        if(this.nF-this.last_MOUSE_DOWN<10) this.MOUSE_DOWN=false
        this.last_MOUSE_DOWN = this.nF
    }
    if(this.MOUSE_UP){
        if(this.nF-this.last_MOUSE_UP<10) this.MOUSE_UP=false
        this.last_MOUSE_UP = this.nF
    }
    if(this.MOUSE_UP_FAST){
        if(this.nF-this.last_MOUSE_UP_FAST<10) this.MOUSE_UP_FAST=false
        this.last_MOUSE_UP_FAST = this.nF
    }



  // Call the user provided cycle function.
 this.cycle();
  this.WHEEL_CHANGE = 0;
 this.PREV_mX = this.mX;
 this.PREV_mY = this.mY;
 this.nF++;
 this.KEY_JUST_PRESSED = null;
 this.KEY_JUST_RELEASED = null
  this._LAST_TIME = new Date().getTime();
  //if(this.cycleActive) window.requestAnimationFrame(this._onCycle);
 //if(this.cycleActive) window.requestAnimationFrame(function(){ instance._onCycle(instance) });
}

MetaCanvas.prototype._emit=function (eventName, e) {
 switch (eventName) {
   case 'mousewheel':
   case 'DOMMouseScroll':
     eventName = 'mousewheel';
     if (!e) {
       e = window.event;
     }
     if (e.wheelDelta) {
        //console.log(e.wheelDelta, this._AVERAGE_WHEEL_CHANGE)
        //this._AVERAGE_WHEEL_CHANGE = 0.9*this._AVERAGE_WHEEL_CHANGE + 0.1*e.wheelDelta
        //this._MIN_WHEEL_CHANGE = Math.min(this._MIN_WHEEL_CHANGE, Math.abs(this.WHEEL_CHANGE))
        //this._MAX_WHEEL_CHANGE = Math.max(this._MAX_WHEEL_CHANGE, Math.abs(e.wheelDelta))
       this.WHEEL_CHANGE = e.wheelDelta>0?0.7:-0.7// / (1*this._MAX_WHEEL_CHANGE);
       //console.log(this._MAX_WHEEL_CHANGE)
     } else if (e.detail) { /** Mozilla case. */
       this.WHEEL_CHANGE = -e.detail / 3
     }
     e.value = this.WHEEL_CHANGE

     if(e.ctrlKey) e.preventDefault()

     break
 }
  // Actually dispatch the event after any special handling
 let listenersLength = this._listeners[eventName].length;
 for (var i = 0; i < listenersLength; i++) {
   var callback = this._listeners[eventName][i];
   callback.call(callback.__context, e);
 }
}
MetaCanvas.prototype.getCycleInterval=function () {
 return this._cycleInterval;
}
MetaCanvas.prototype.setCycleInterval=function (cycleInterval) {
 this._cycleInterval = cycleInterval;
 if (this.cycleActive) { // YY this should be removed
   this._startCycle();
 }
}
MetaCanvas.prototype.start=function () {
 return this._startCycle();
}
MetaCanvas.prototype.stop=function () {
 return this._stopCycle();
}
MetaCanvas.prototype.cycleOnMouseMovement=function (time) {
 let self = this;
 if (this.cycleOnMouseMovementListener) {
   if (this._LISTENERS_ADDED && time <= 1) {
      this.canvas.removeEventListener('mousemove', this.cycleOnMouseMovementListener, false);
     this.canvas.removeEventListener('mousewheel', this.cycleOnMouseMovementListener, false);
     this.canvas.removeEventListener('mousedown', this.cycleOnMouseMovementListener, false);
     this.canvas.removeEventListener('keydown', this.cycleOnMouseMovementListener, false);
     this.canvas.removeEventListener('keyup', this.cycleOnMouseMovementListener, false);
      if (this.IS_TOUCH) {
       // this.canvas.removeEventListener("touchstart", this.cycleOnMouseMovementListener, false);
       // this.canvas.removeEventListener("touchend", this.cycleOnMouseMovementListener, false);
       // this.canvas.removeEventListener("touchmove", this.cycleOnMouseMovementListener, false);

        this.canvas.removeEventListener("pointerdown", this.cycleOnMouseMovementListener, false);
       this.canvas.removeEventListener("pointerup", this.cycleOnMouseMovementListener, false);
       this.canvas.removeEventListener("pointermove", this.cycleOnMouseMovementListener, false);
     }
      this._LISTENERS_ADDED = false;
   }
 }
  if (time > 1) {
   this.cycleOnMouseMovementListener = function () {
     self.cycleFor(time);
   };
    if (!this._LISTENERS_ADDED) {
      this.canvas.addEventListener('mousemove', this.cycleOnMouseMovementListener, false);
      //this.canvas.addEventListener('mousewheel', this.cycleOnMouseMovementListener, false);
     this.canvas.addEventListener('mousewheel', this.cycleOnMouseMovementListener, { passive: false }); //TEST as per Dani's request
      this.canvas.addEventListener('mousedown', this.cycleOnMouseMovementListener, false);
     this.canvas.addEventListener('keydown', this.cycleOnMouseMovementListener, false);
     //document.addEventListener("keydown", this.boundMouseOrKeyboard, false);
     this.canvas.addEventListener('keyup', this.cycleOnMouseMovementListener, false);
     document.addEventListener('keyup', this.cycleOnMouseMovementListener, false);
      if (this.IS_TOUCH) {
       // this.canvas.addEventListener("touchstart", this.cycleOnMouseMovementListener, false);
       // this.canvas.addEventListener("touchend", this.cycleOnMouseMovementListener, false);
       // this.canvas.addEventListener("touchmove", this.cycleOnMouseMovementListener, false);

        this.canvas.addEventListener("pointerdown", this.cycleOnMouseMovementListener, false);
       this.canvas.addEventListener("pointerup", this.cycleOnMouseMovementListener, false);
       this.canvas.addEventListener("pointermove", this.cycleOnMouseMovementListener, false);
     }
      this._LISTENERS_ADDED = true;
   }
   //self.cycleFor(time);
 }
  self.cycleFor(time);
}
MetaCanvas.prototype.on=function (eventName, callback, context) {
 // allow clients to subscribe to events on the canvas.
 callback.__context = context;
 this._listeners[eventName].push(callback);
}

MetaCanvas.prototype.off=function (eventName, callback) {
 let index = this._listeners[eventName].indexOf(callback);
 if (index > -1) {
   this._listeners[eventName].splice(index, 1);
 }
}

MetaCanvas.prototype.clearCanvas=function () {
 this.context.clearRect(0, 0, this.W, this.H);
}

MetaCanvas.prototype.setBackgroundColor=function (color) {
 if (typeof color === "number") {
   if (arguments.length > 3) {
     color = 'rgba(' + arguments[0] + ',' + arguments[1] + ',' + arguments[2] + ',' + arguments[3] + ')';
   } else {
     color = 'rgb(' + arguments[0] + ',' + arguments[1] + ',' + arguments[2] + ')';
   }
 } else if (Array.isArray(color)) {
   color = RGBtoHEX(color[0], color[1], color[2]);
 }
 this.backGroundColor = color;
 this.backGroundColorRGB = colorStringToRGB(this.backGroundColor);
}

MetaCanvas.prototype.setBackgroundAlpha=function (backgroundAlpha) {//TODO: this is not alpha background, is alpha refresh…
 this._alphaRefresh = backgroundAlpha;
}
MetaCanvas.prototype.fRect=function (x, y, width, height) {
 if (typeof x != 'number') {
   y = x.y;
   width = x.width;
   height = x.height;
   x = x.x;
 }
 this.context.fillRect(x, y, width, height);
}
MetaCanvas.prototype.sRect=function (x, y, width, height) {
 if (typeof x != 'number') {
   y = x.y;
   width = x.width;
   height = x.height;
   x = x.x;
 }
 this.context.strokeRect(x, y, width, height);
}
MetaCanvas.prototype.fsRect=function (x, y, width, height) {
 if (typeof x != 'number') {
   y = x.y;
   width = x.width;
   height = x.height;
   x = x.x;
 }
 this.context.fillRect(x, y, width, height);
 this.context.strokeRect(x, y, width, height);
}
MetaCanvas.prototype.fArc=function (x, y, r, a0, a1, counterclockwise=true) {
 this.context.beginPath();
 this.context.arc(x, y, r, a0, a1, counterclockwise);
 this.context.fill();
}
MetaCanvas.prototype.sArc=function (x, y, r, a0, a1, counterclockwise=true) {
 this.context.beginPath();
 this.context.arc(x, y, r, a0, a1, counterclockwise);
 this.context.stroke();
}

MetaCanvas.prototype.fArcSection=function (x, y, r0, r1, a0, a1) {
 this._ArcSection(x, y, r0, r1, a0, a1)
 this.context.fill()
}
MetaCanvas.prototype.sArcSection=function (x, y, r0, r1, a0, a1) {
 this._ArcSection(x, y, r0, r1, a0, a1)
 this.context.closePath()
 this.context.stroke()
}
MetaCanvas.prototype._ArcSection=function (x, y, r0, r1, a0, a1) {
 this.context.beginPath()
 this.context.moveTo(x + r0*Math.cos(a0), y + r0*Math.sin(a0))
 this.context.arc(x, y, r1, a0, a1)
 this.context.lineTo(x + r0*Math.cos(a1), y + r0*Math.sin(a1))
 this.context.arc(x, y, r0, a1, a0, true)
}


MetaCanvas.prototype.fCircle=function (x, y, r) {
 this.context.beginPath();
 this.context.arc(x, y, r, 0, TwoPi);
 this.context.fill();
}
MetaCanvas.prototype.sCircle=function (x, y, r) {
 this.context.beginPath();
 this.context.arc(x, y, r, 0, TwoPi);
 this.context.stroke();
}
MetaCanvas.prototype.fsCircle=function (x, y, r) {
 this.fCircle(x, y, r);
 this.context.stroke();
}
MetaCanvas.prototype.fEllipse=function (x, y, rW, rH) {
 let k = 0.5522848, // 4 * ((√(2) - 1) / 3)
   ox = rW * k, // control point offset horizontal
   oy = rH * k, // control point offset vertical
   xe = x + rW, // x-end
   ye = y + rH; // y-end
 this.context.beginPath();
 this.context.moveTo(x - rW, y);
 this.context.bezierCurveTo(x - rW, y - oy, x - ox, y - rH, x, y - rH);
 this.context.bezierCurveTo(x + ox, y - rH, xe, y - oy, xe, y);
 this.context.bezierCurveTo(xe, y + oy, x + ox, ye, x, ye);
 this.context.bezierCurveTo(x - ox, ye, x - rW, y + oy, x - rW, y);
 this.context.moveTo(x - rW, y);
 this.context.closePath();
 this.context.fill();
}
MetaCanvas.prototype.sEllipse=function (x, y, rW, rH) {
 let k = 0.5522848,
   ox = rW * k,
   oy = rH * k,
   xe = x + rW,
   ye = y + rH;
 this.context.beginPath();
 this.context.moveTo(x - rW, y);
 this.context.bezierCurveTo(x - rW, y - oy, x - ox, y - rH, x, y - rH);
 this.context.bezierCurveTo(x + ox, y - rH, xe, y - oy, xe, y);
 this.context.bezierCurveTo(xe, y + oy, x + ox, ye, x, ye);
 this.context.bezierCurveTo(x - ox, ye, x - rW, y + oy, x - rW, y);
 this.context.moveTo(x - rW, y);
 this.context.closePath();
 this.context.stroke();
}
MetaCanvas.prototype.fsEllipse=function (x, y, rW, rH) {
 this.fEllipse(x, y, rW, rH);
 this.context.stroke();
}
MetaCanvas.prototype._solidArc=function (x, y, a0, a1, r0, r1) {
 this.context.beginPath();
 this.context.arc(x, y, r0, a0, a1);
 this.context.lineTo(x + r1 * Math.cos(a1), y + r1 * Math.sin(a1));
 this.context.arc(x, y, r1, a1, a0, true);
 this.context.lineTo(x + r0 * Math.cos(a0), y + r0 * Math.sin(a0));
}
MetaCanvas.prototype.fSolidArc=function (x, y, a0, a1, r0, r1) {
 this._solidArc(x, y, a0, a1, r0, r1);
 this.context.fill();
}
MetaCanvas.prototype.sSolidArc=function (x, y, a0, a1, r0, r1) {
 this._solidArc(x, y, a0, a1, r0, r1);
 this.context.stroke();
}
MetaCanvas.prototype.fsSolidArc=function (x, y, a0, a1, r0, r1) {
 this.fSolidArc(x, y, a0, a1, r0, r1);
 this.context.stroke();
}
MetaCanvas.prototype.line=function (x0, y0, x1, y1) {
 this.context.beginPath();
 this.context.moveTo(x0, y0);
 this.context.lineTo(x1, y1);
 this.context.stroke();
}
MetaCanvas.prototype.bezier=function (x0, y0, cx0, cy0, cx1, cy1, x1, y1) {
 this.context.beginPath();
 this.context.moveTo(x0, y0);
 this.context.bezierCurveTo(cx0, cy0, cx1, cy1, x1, y1);
 this.context.stroke();
}
MetaCanvas.prototype._lines=function () {
 if (arguments == null) return;
  var args = arguments[0];
 this.context.beginPath();
 this.context.moveTo(args[0], args[1]);
 for (var i = 2; args[i + 1] != null; i += 2) {
   this.context.lineTo(args[i], args[i + 1]);
 }
}
MetaCanvas.prototype._linesM=function () {
 if (arguments == null) {
   return;
 }
  var args = arguments[0];
 let p = new Pol();
 this.context.beginPath();
 this.context.moveTo(args[0], args[1]);
 p[0] = new P(args[0], args[1]);
 for (var i = 2; args[i + 1] != null; i += 2) {
   this.context.lineTo(args[i], args[i + 1]);
   p.push(new P(args[i], args[i + 1]));
 }
 return p.containsPoint(this.mP);
}
MetaCanvas.prototype.fLines=function () {
 this._lines(arguments);
 this.context.fill();
}
MetaCanvas.prototype.sLines=function () {
 this._lines(arguments);
 this.context.stroke();
}
MetaCanvas.prototype.fsLines=function () {
 this._lines(arguments);
 this.context.fill();
 this.context.stroke();
}
MetaCanvas.prototype.fsLinesM=function () {
 let mouseOn = this._linesM(arguments);
 this.context.fill();
 this.context.stroke();
 return mouseOn;
}
MetaCanvas.prototype._polygon=function (polygon) {
 this.context.beginPath();
 this.context.moveTo(polygon[0].x, polygon[0].y);
 for (var i = 1; polygon[i] != null; i++) {
   this.context.lineTo(polygon[i].x, polygon[i].y);
 }
}
MetaCanvas.prototype.fPolygon=function (polygon) {
 this._polygon(polygon);
 this.context.fill();
}
MetaCanvas.prototype.sPolygon=function (polygon, closePath) {
 this._polygon(polygon);
 if (closePath) {
   this.context.closePath();
 }
 this.context.stroke();
}
MetaCanvas.prototype.fsPolygon=function (polygon, closePath) {
 this._polygon(polygon);
 if (closePath) {
   this.context.closePath();
 }
 this.context.fill();
 this.context.stroke();
}
MetaCanvas.prototype.fEqTriangle=function (x, y, angle, r) {
 this._eqTriangle(x, y, angle, r);
 this.context.fill();
}
MetaCanvas.prototype.sEqTriangle=function (x, y, angle, r) {
 this._eqTriangle(x, y, angle, r);
 this.context.stroke();
}
MetaCanvas.prototype.fsEqTriangle=function (x, y, angle, r) {
 this._eqTriangle(x, y, angle, r);
 this.context.fill();
 this.context.stroke();
}
MetaCanvas.prototype._eqTriangle=function (x, y, angle, r) {
 this.context.beginPath();
 angle = angle || 0;
 this.context.moveTo(r * Math.cos(angle) + x, r * Math.sin(angle) + y);
 this.context.lineTo(r * Math.cos(angle + 2.0944) + x, r * Math.sin(angle + 2.0944) + y);
 this.context.lineTo(r * Math.cos(angle + 4.1888) + x, r * Math.sin(angle + 4.1888) + y);
 this.context.lineTo(r * Math.cos(angle) + x, r * Math.sin(angle) + y);
}
MetaCanvas.prototype.fRectM=function (x, y, width, height, margin=0) {
 this.context.fillRect(x, y, width, height);
 return this.mY > y - margin && this.mY < y + height + margin && this.mX > x - margin && this.mX < x + width + margin;
}
MetaCanvas.prototype.sRectM=function (x, y, width, height, margin=0) {
 this.context.strokeRect(x, y, width, height);
 return this.mY > y - margin && this.mY < y + height + margin && this.mX > x - margin && this.mX < x + width + margin;
}
MetaCanvas.prototype.fsRectM=function (x, y, width, height, margin=0) {
 this.context.fillRect(x, y, width, height);
 this.context.strokeRect(x, y, width, height);
 return this.mY > y - margin && this.mY < y + height + margin && this.mX > x - margin && this.mX < x + width + margin;
}
MetaCanvas.prototype.fCircleM=function (x, y, r, margin=0) { //check if you can avoid repeat
 this.context.beginPath();
 this.context.arc(x, y, r, 0, TwoPi);
 this.context.fill();
 return Math.pow(x - this.mX, 2) + Math.pow(y - this.mY, 2) < Math.pow(r + margin, 2);
}
MetaCanvas.prototype.sCircleM=function (x, y, r, margin=0) {
 this.context.beginPath();
 this.context.arc(x, y, r, 0, TwoPi);
 this.context.stroke();
 return Math.pow(x - this.mX, 2) + Math.pow(y - this.mY, 2) < Math.pow(r + margin, 2);
}
MetaCanvas.prototype.fsCircleM=function (x, y, r, margin=0) {
 // this.context.beginPath();
 // this.context.arc(x, y, r, 0, TwoPi);
 // this.context.stroke();
 // this.context.fill();
 this.fsCircle(x, y, r)
 return Math.pow(x - this.mX, 2) + Math.pow(y - this.mY, 2) < Math.pow(r + margin, 2);
}
MetaCanvas.prototype.lineM=function (x0, y0, x1, y1, d = 4) {
 this.context.beginPath();
 this.context.moveTo(x0, y0);
 this.context.lineTo(x1, y1);
 this.context.stroke();
 return this._distToSegmentSquared(x0, y0, x1, y1) < d * d;
}
MetaCanvas.prototype._distToSegmentSquared=function (x0, y0, x1, y1) {
 let l2 = Math.pow(x0 - x1, 2) + Math.pow(y0 - y1, 2);
 if (l2 === 0) return Math.pow(x0 - this.mX, 2) + Math.pow(y0 - this.mY, 2);
 let t = ((this.mX - x0) * (x1 - x0) + (this.mY - y0) * (y1 - y0)) / l2;
 if (t <= 0) return Math.pow(x0 - this.mX, 2) + Math.pow(y0 - this.mY, 2);
 if (t >= 1) return Math.pow(x1 - this.mX, 2) + Math.pow(y1 - this.mY, 2);
 let px = x0 + t * (x1 - x0);
 let py = y0 + t * (y1 - y0);
 return Math.pow(px - this.mX, 2) + Math.pow(py - this.mY, 2);
}


MetaCanvas.prototype.bezierM=function (x0, y0, cx0, cy0, cx1, cy1, x1, y1, d) { //TODO: fix this mess!
 d = d == null ? 2 : d;
 this.context.beginPath();
 this.context.moveTo(x0, y0);
 this.context.bezierCurveTo(cx0, cy0, cx1, cy1, x1, y1);
 this.context.stroke();
 if (this.mX < Math.min(x0, x1, cx0, cx1) - d || this.mX > Math.max(x0, x1, cx0, cx1) + d || this.mY < Math.min(y0, y1, cy0, cy1) - d || this.mY > Math.max(y0, y1, cy0, cy1) + d) return false;
 return distanceToBezierCurve(x0, y0, cx0, cy0, cx1, cy1, x1, y1, this.mP, false) < d;
}


MetaCanvas.prototype.drawImage = function (image, ...params) {
  if (image == null) return;
  this.context.drawImage(image, ...params);
};

MetaCanvas.prototype.drawImageCircle=function (image, x, y, r) {
    if (image == null) return
    let w,h
    if(image.width>image.height){
        w = 2*r*image.width/image.height
        h = 2*r
    } else {
        w = 2*r
        h = 2*r*image.height/image.width
    }

    this.clipCircle(x, y, r)
    this.drawImage(image, x-w*0.5, y-h*0.5, w, h)
    this.restore()
}


MetaCanvas.prototype.fitImage=function (image, rectangle, mode=0) {
 if (image == null || rectangle == null) return
  var propIm = image.width / image.height;
 let propRc = rectangle.width / rectangle.height;
 let compProp = propIm / propRc;
 let condition;
  switch(mode){
   case 0:
     condition = propIm >= propRc;
     break;
   case 1:
     condition = propIm < propRc;
     break;
   case 2:
     this.context.drawImage(image, rectangle.x + rectangle.width*0.5 - image.width*0.5, rectangle.y + rectangle.height*0.5 - image.height*0.5);
     return;
 }
  if (condition) {
   this.context.drawImage(image, 0.5 * (image.width - image.width / compProp), 0, image.width / compProp, image.height, rectangle.x, rectangle.y, rectangle.width, rectangle.height);
 } else {
   this.context.drawImage(image, 0, 0.5 * (image.height - image.height * compProp), image.width, image.height * compProp, rectangle.x, rectangle.y, rectangle.width, rectangle.height);
 }
}

MetaCanvas.prototype.fill=function (style) {
 if (typeof style == "number") {
   if (arguments.length > 3) {
     this.context.fillStyle = 'rgba(' + arguments[0] + ',' + arguments[1] + ',' + arguments[2] + ',' + arguments[3] + ')';
     return;
   }
   this.context.fillStyle = 'rgb(' + arguments[0] + ',' + arguments[1] + ',' + arguments[2] + ')';
   return;
 }
 this.context.fillStyle = style;
}

MetaCanvas.prototype.stroke=function (style, lineWidth) {
 if (typeof style == "number") {
   if (arguments.length > 3) {
     this.context.strokeStyle = 'rgba(' + arguments[0] + ',' + arguments[1] + ',' + arguments[2] + ',' + arguments[3] + ')';
     return;
   }
   this.context.strokeStyle = 'rgb(' + arguments[0] + ',' + arguments[1] + ',' + arguments[2] + ')';
   return;
 }
 this.context.strokeStyle = style;
 //TODO: will lineWidth still work if RGB or RGBA is used?
 if (lineWidth) this.context.lineWidth = lineWidth;
}

MetaCanvas.prototype.setLW=function (lineWidth) {
 this.context.lineWidth = lineWidth;
}


/**
 * performs a mask
 * requires calling to k.restore() at the end of drawing what is being masked
 **/
MetaCanvas.prototype.clipRect=function (x, y, w, h) {
 this.context.save();
 this.context.beginPath();
 if(x.type == 'Rec'){
   y = x.y;
   w = x.width;
   h = x.height;
   x = x.x;
 }
 this.context.moveTo(x, y);
 this.context.lineTo(x + w, y);
 this.context.lineTo(x + w, y + h);
 this.context.lineTo(x, y + h);
 this.context.clip();
}

MetaCanvas.prototype.clipCircle=function (x, y, r) {
 this.context.save();
 this.context.beginPath();
 this.context.arc(x, y, r, 0, TwoPi, false);
 this.context.closePath();
 this.context.clip();
}


MetaCanvas.prototype.save=function () {
 this.context.save();
}
MetaCanvas.prototype.clip=function () {
 this.context.clip();
}
MetaCanvas.prototype.restore=function () {
 this.context.restore();
}
MetaCanvas.prototype.fText=function (text, x, y) {
 this.context.fillText(text, x, y);
}

MetaCanvas.prototype.sText=function (text, x, y) {
 this.context.strokeText(text, x, y);
}
MetaCanvas.prototype.fsText=function (text, x, y) {
 this.context.strokeText(text, x, y);
 this.context.fillText(text, x, y);
}
MetaCanvas.prototype.fTextW=function (text, x, y) {
 this.context.fillText(text, x, y);
 return this.context.measureText(text).width;
}
MetaCanvas.prototype.fsTextW=function (text, x, y) {
 this.context.strokeText(text, x, y);
 this.context.fillText(text, x, y);
 return this.context.measureText(text).width;
}

MetaCanvas.prototype.fTextRotated=function (text, x, y, angle) {
 this.context.save();
 this.context.translate(x, y);
 this.context.rotate(angle);
 this.context.fillText(text, 0, 0);
 this.context.restore();
}

MetaCanvas.prototype.fsTextRotated=function (text, x, y, angle) {
 this.context.save();
 this.context.translate(x, y);
 this.context.rotate(angle);
 this.context.strokeText(text, 0, 0);
 this.context.fillText(text, 0, 0);
 this.context.restore();
}

MetaCanvas.prototype.fTextArc=function (text, x, y, xCenter, yCenter, centered=false) {
    const HalfPi = Math.PI*0.5
 if (text == null || text === "") {
   return;
 }
  var i;
 let r = Math.sqrt(Math.pow(x - xCenter, 2) + Math.pow(y - yCenter, 2));
 let a = Math.atan2(y - yCenter, x - xCenter);
 if (centered) {
   a -= this.getTextW(text) * 0.5 / r;
 }
 let xl, yl;
 let letters = text.split('');
 for (i = 0; letters[i] != null; i++) {
   xl = xCenter + r * Math.cos(a);
   yl = yCenter + r * Math.sin(a);
   this.fTextRotated(letters[i], xl, yl, a + HalfPi);
   a += this.getTextW(letters[i]) / r;
 }
}

MetaCanvas.prototype.fTextM=function (text, x, y, size) {
 size = Number(size || this.fontSize);
 this.context.fillText(text, x, y);
 return this.mY > y && this.mY < y + size && this.mX > x && this.mX < x + this.context.measureText(text).width;
}

MetaCanvas.prototype.fsTextM=function (text, x, y, size) {
 size = Number(size || this.fontSize);
 this.context.strokeText(text, x, y);
 this.context.fillText(text, x, y);
 return this.mY > y && this.mY < y + size && this.mX > x && this.mX < x + this.context.measureText(text).width;
}
MetaCanvas.prototype.fTextRotatedM=function (text, x, y, angle, size) {
 size = size || 12;
 this.context.save();
 this.context.translate(x, y);
 this.context.rotate(angle);
 this.context.fillText(text, 0, 0);
 this.context.restore();
  var dX = this.mX - x;
 let dY = this.mY - y;
 let d = Math.sqrt(dX * dX + dY * dY);
 let a = Math.atan2(dY, dX) - angle;
 let mXT = x + d * Math.cos(a);
 let mYT = y + d * Math.sin(a);
  return mYT > y && mYT < y + size && mXT > x && mXT < x + this.context.measureText(text).width;
}
MetaCanvas.prototype.setTextDefaults=function (color, fontSize, fontName, align, baseline, style) {
 this.fontColor = ifDef(color, this.fontColor);
 this.fontSize = ifDef(String(fontSize), this.fontSize);
 this.fontName = ifDef(fontName, this.fontName);
 this.fontAlign = ifDef(align, this.fontAlign);
 this.fontBaseline = ifDef(baseline, this.fontBaseline);
 this.fontStyle = ifDef(style, this.fontStyle);
  this.setText();
}
MetaCanvas.prototype.setText=function (color, fSize, fName, align, baseline, style) {
 let fontColor = ifDef(color, this.fontColor);
 let fontSize = ifDef(String(fSize), this.fontSize);
 let fontName = ifDef(fName, this.fontName);
 let fontAlign = ifDef(align, this.fontAlign);
 let fontBaseline = ifDef(baseline, this.fontBaseline);
 let fontStyle = ifDef(style, this.fontStyle);
  if (fontStyle !== '') {
   fontStyle += ' ';
 }
  this.context.fillStyle = fontColor;
 this.context.font = fontStyle + fontSize + 'px ' + fontName;
 this.context.textAlign = fontAlign;
 this.context.textBaseline = fontBaseline;
}


MetaCanvas.prototype.nLinesTextWidth=function (text, width, returnLines=false) {
    if(text.includes("\n")){
        let texts = text.split("\n")
        let nLinesTotal = 0
        if(returnLines){
            let lines = new _.sL()
            texts.forEach(t=>lines = lines.concat(this.nLinesTextWidth(t, width, true)) )
            return lines.toL()
        } else {
            texts.forEach(t=>nLinesTotal+=this.nLinesTextWidth(t, width))
            return nLinesTotal
        }
    }
    let tInfo = this._textWidthSectionsInfo(text, width)
    if(returnLines){
        let prevnum=0
        let lines = new _.sL()
        if(tInfo.sections.length==0){
            lines.push(text)
            return lines
        }
        tInfo.sections.forEach(num=>{
            lines.push(text.substr(prevnum, num-prevnum))
            prevnum = num
        })
        lines.push(text.substr(tInfo.sections.at(-1)))
        return lines
    }
    return tInfo.nLines
}

MetaCanvas.prototype.fTextWidth=function (text, x, y, width, lineHeight=12) {
    if(text.includes("\n")){
        let texts = text.split("\n")
        let nLinesTotal = 0
        texts.forEach(t=>{
            let nLines = this.fTextWidth(t, x, y, width, lineHeight)
            nLinesTotal+=nLines
            y+=nLines*lineHeight
        })
        return nLinesTotal
    }
    let tInfo = this._textWidthSectionsInfo(text, width)
    let sections = tInfo.sections
    let prev_s = 0
    text = tInfo.newText
    sections.forEach(s=>{
        this.context.fillText(text.substr(prev_s, s-prev_s), x, y)
        prev_s = s
        y+=lineHeight
    })
    this.context.fillText(text.substr(prev_s), x, y)
    return tInfo.nLines
}


MetaCanvas.prototype.getFontFamily=function () {
 return this.fontName;
}
MetaCanvas.prototype.setFontFamily=function (fontName) {
 this.setText(undefined, undefined, fontName);
}
MetaCanvas.prototype.getTextW=function (text) {
 return this.context.measureText(text).width;
}

MetaCanvas.prototype.nLines=function (text, width) {
  return this._textWidthSectionsInfo(text, width).nLines
}



MetaCanvas.prototype._textWidthSectionsInfo=function (text, width) {
    if(this["sections_"+width+"_"+text]) return this["sections_"+width+"_"+text]

    let newText = (String(text)||"").replaceAll(/[\s\n]+/g, " ").trim()
    //let newText = (String(text)||"").replaceAll(/\n/g, " [ENTER] ").replaceAll(/[\s]+/g, " ").trim()
    

    let words = newText.split(" ").filter(w=>w!="")
    let accumulatedSection = 0
    let sections = []
    let lines = []
    let nLines = 1
    let line = ""
    let maxWidth = 0
    words.forEach(w=>{
        if(this.context.measureText(line+w).width>width && line!=""){
            nLines++
            accumulatedSection+=line.length+1
            sections.push(accumulatedSection)
            maxWidth = Math.max(this.context.measureText(line).width, maxWidth)
            lines.push(line)
            line=""
        }
        line+=(line==""?"":" ")+w
    })
    
    lines.push(line)

    maxWidth = Math.max(this.context.measureText(line).width, maxWidth)

    this["sections_"+width+"_"+text]={
        sections,
        lines,
        nLines,
        maxWidth,
        newText,
        last:sections.at(-1)+line.length+1
    }

    return this["sections_"+width+"_"+text];
}


MetaCanvas.prototype.getPixelColor=function (x, y) {
 let rgba = this.context.getImageData(x, y, 1, 1).data;
 return 'rgba(' + rgba[0] + ',' + rgba[1] + ',' + rgba[2] + ',' + rgba[3] + ')';
}
MetaCanvas.prototype.getPixelColorRGBA=function (x, y) {
 return Array.prototype.slice.call(this.context.getImageData(x, y, 1, 1).data);
}
MetaCanvas.prototype.captureCanvas=function (x0=0, y0=0, w, h) {
    if(w==null) w = this.W
    if(h==null) h = this.H

 let im = new Image();
  if (x0 == null) {
   im.src = this.canvas.toDataURL();
   return im;
 }
  var canvas = document.createElement('canvas');
  canvas.width = w;
 canvas.height = h;
  canvas.getContext('2d').drawImage(this.canvas, x0, y0, w, h, 0, 0, w, h);
  im.src = canvas.toDataURL();
  return im;
}

MetaCanvas.prototype.setCursor=function(name="default") {
 this.canvas.style.cursor = name
}

MetaCanvas.prototype.pointer=function() {
 this.canvas.style.cursor = "pointer"
}

MetaCanvas.prototype.getFrame=function () {
 return new Rec(0, 0, this.W, this.H)
}

MetaCanvas.prototype._linesInFrame=function (axis2D, nlX, nlY) {
 let l = Math.min(nlX.length, nlY.length);
 let i;
  this.context.beginPath();
 this.context.moveTo(axis2D.projectX(nlX[0]), axis2D.projectY(nlY[0]));
  for (i = 1; i < l; i++) {
   this.context.lineTo(axis2D.projectX(nlX[i]), axis2D.projectY(nlY[i]));
 }
}
MetaCanvas.prototype.sLinesInFrame=function (axis2D, nlX, nlY) {
 this._linesInFrame(axis2D, nlX, nlY);
 this.context.stroke();
}
MetaCanvas.prototype.fLinesInFrame=function (axis2D, nlX, nlY) {
 this._linesInFrame(axis2D, nlX, nlY);
 this.context.fill();
}
MetaCanvas.prototype.fsLinesInFrame=function (axis2D, nlX, nlY) {
 this._linesInFrame(axis2D, nlX, nlY);
 this.context.fill();
 this.context.stroke();
}

MetaCanvas.prototype.drawSmoothPolygon=function (polygon, closed, amount=30) { //TODO: add tx, ty
 let controlPoints;
  if (polygon.length < 2) return null;
 this.context.beginPath();
 if (polygon.length == 2) {
   var a = Math.atan2(polygon[1].y - polygon[0].y, polygon[1].x - polygon[0].x) - 0.5 * Math.PI;
   var cosa = amount * Math.cos(a);
   var sina = amount * Math.sin(a);
   this.context.moveTo(polygon[0].x, polygon[0].y);
   this.context.bezierCurveTo(
     polygon[0].x + cosa, polygon[0].y + sina,
     polygon[1].x + cosa, polygon[1].y + sina,
     polygon[1].x, polygon[1].y
   );
   this.context.bezierCurveTo(
     polygon[1].x - cosa, polygon[1].y - sina,
     polygon[0].x - cosa, polygon[0].y - sina,
     polygon[0].x, polygon[0].y
   );
   this.context.stroke();
   return;
 }
 let i;
 let nPoints = polygon.length;
 let prevPoint = polygon[nPoints - 1];
 let point = polygon[0];
 let nextPoint = polygon[1];
 controlPoints = getSoftenControlPoints(prevPoint, point, nextPoint, amount);
 let prevCP = controlPoints[1];
 let cP;
 this.context.moveTo(point.x, point.y);
 prevPoint = point;
 let nSteps = nPoints + Number(closed);
 for (i = 1; i < nSteps; i++) {
   point = polygon[i % nPoints];
   nextPoint = polygon[(i + 1) % nPoints];
   controlPoints = getSoftenControlPoints(prevPoint, point, nextPoint, amount);
   cP = controlPoints[0];
   this.context.bezierCurveTo(prevCP.x, prevCP.y, cP.x, cP.y, point.x, point.y);
   prevCP = controlPoints[1];
   prevPoint = point;
 }
 this.context.stroke();
}

MetaCanvas.prototype.drawEllipse=function (x, y, rW, rH) {
 let k = 0.5522848, // 4 * ((√(2) - 1) / 3)
   ox = rW * k, // control point offset horizontal
   oy = rH * k, // control point offset vertical
   xe = x + rW, // x-end
   ye = y + rH; // y-end
  this.context.moveTo(x - rW, y);
 this.context.bezierCurveTo(x - rW, y - oy, x - ox, y - rH, x, y - rH);
 this.context.bezierCurveTo(x + ox, y - rH, xe, y - oy, xe, y);
 this.context.bezierCurveTo(xe, y + oy, x + ox, ye, x, ye);
 this.context.bezierCurveTo(x - ox, ye, x - rW, y + oy, x - rW, y);
 this.context.moveTo(x - rW, y);
}

MetaCanvas.prototype.drawPolygon=function (polygon, close, tx, ty) {
 tx = tx || 0;
 ty = ty || 0;
 let i;
 this.context.beginPath();
 this.context.moveTo(tx + polygon[0].x, ty + polygon[0].y);
 for (i = 1; polygon[i] != null; i++) {
   this.context.lineTo(tx + polygon[i].x, ty + polygon[i].y);
 }
 if (close) {
   this.context.lineTo(tx + polygon[0].x, ty + polygon[0].y);
 }
 this.context.stroke();
}

MetaCanvas.prototype.drawPolygonWithControlPoints=function (polygon, controlPoints, tx, ty) {
 tx = tx || 0;
 ty = ty || 0;
 let i;
 this.context.beginPath();
 this.context.moveTo(tx + polygon[0].x, ty + polygon[0].y);
 for (i = 1; polygon[i] != null; i++) {
   this.context.bezierCurveTo(tx + controlPoints[(i - 1) * 2].x, ty + controlPoints[(i - 1) * 2].y,
     tx + controlPoints[i * 2 - 1].x, ty + controlPoints[i * 2 - 1].y,
     tx + polygon[i].x, ty + polygon[i].y);
 }
 this.context.stroke();
}

MetaCanvas.prototype.drawBezierPolygon=function (bezierPolygon, tx=0, ty=0) {
 let bI;
 let N = Math.floor((bezierPolygon.length - 1) / 3);
 let i;
 this.context.moveTo(tx + bezierPolygon[0].x, ty + bezierPolygon[0].y);
 for (i = 0; i < N; i++) {
   bI = i * 3 + 1;
    this.context.bezierCurveTo(
     tx + bezierPolygon[bI].x, ty + bezierPolygon[bI].y,
     tx + bezierPolygon[bI + 1].x, ty + bezierPolygon[bI + 1].y,
     tx + bezierPolygon[bI + 2].x, ty + bezierPolygon[bI + 2].y
   );
 }
}

MetaCanvas.prototype.drawMultiStyleCurve=function (poly, clr0, a0, lw0, clr1, a1, lw1) {
 let i, f, clr, lw, a;
 this.context.save();
 this.context.lineJoin = this.context.lineCap = "round";
 let intLw = new I(lw0, lw1);
 let intA = new I(a0, a1);
 for (i = 0; i < poly.length - 1; i++) {
   f = i / (poly.length - 2);
   lw = intLw.getInterpolatedValue(f);
   a = intA.getInterpolatedValue(f);
   clr = interpolateColors(clr0, clr1, f);
   clr = addAlpha(clr, a);
   this.context.beginPath();
   this.context.moveTo(poly[i].x, poly[i].y);
   this.context.lineTo(poly[i + 1].x, poly[i + 1].y);
   this.stroke(clr, lw);
   this.context.stroke();
 }
 this.context.restore();
}
MetaCanvas.prototype.drawRoundRect=function (x, y, width, height, radius=5) {
 radius = radius || 0;
 let bottom = y + height;
 this.context.moveTo(x + radius, y);
 this.context.lineTo(x + width - radius, y);
 this.context.quadraticCurveTo(x + width, y, x + width, y + radius);
 this.context.lineTo(x + width, y + height - radius);
 this.context.quadraticCurveTo(x + width, bottom, x + width - radius, bottom);
 this.context.lineTo(x + radius, bottom);
 this.context.quadraticCurveTo(x, bottom, x, bottom - radius);
 this.context.lineTo(x, y + radius);
 this.context.quadraticCurveTo(x, y, x + radius, y);
}

MetaCanvas.prototype.fRoundRect=function (x, y, width, height, radius) {
    this.context.beginPath()
    this.drawRoundRect(x, y, width, height, radius)
    this.context.fill()
}
MetaCanvas.prototype.sRoundRect=function (x, y, width, height, radius) {
    this.context.beginPath()
    this.drawRoundRect(x, y, width, height, radius)
    this.context.stroke()
}
MetaCanvas.prototype.fsRoundRect=function (x, y, width, height, radius) {
    this.context.beginPath()
    this.drawRoundRect(x, y, width, height, radius)
    this.context.fill()
    this.context.stroke()
}



MetaCanvas.prototype.drawTriangleFromBase=function (x, y, base, height, angle) {
 this.context.moveTo(x + 0.5 * base * Math.cos(angle + Math.PI * 0.5), y + 0.5 * base * Math.sin(angle + Math.PI * 0.5));
 this.context.lineTo(x + 0.5 * base * Math.cos(angle - Math.PI * 0.5), y + 0.5 * base * Math.sin(angle - Math.PI * 0.5));
 this.context.lineTo(x + height * Math.cos(angle), y + height * Math.sin(angle));
 this.context.lineTo(x + 0.5 * base * Math.cos(angle + Math.PI * 0.5), y + 0.5 * base * Math.sin(angle + Math.PI * 0.5));
}

MetaCanvas.prototype.applyTransformationFunctions=function (fX, fY, fXY, invfX, invfY) {
 if (this._fRect == null) {
   this._line = this.line;
   this._sLines = function () {
     this.__lines(arguments);
     this.context.stroke();
   };
   this._fCircle = this.fCircle;
   this._sCircle = this.sCircle;
   this._fCircleM = this.fCircleM;
   this._sCircleM = this.sCircleM;
   this._fRect = this.fRect;
   this._sRect = this.sRect;
   this._fRectM = this.fRectM;
   this._sRectM = this.sRectM;
   //this._fLines = this.fLines;
   this.__lines = this._lines;
   this.__polygon = this._polygon;
    this._fText = this.fText;
   this._fTextM = this.fTextM;
   this._sText = this.sText;
   this._fsText = this.fsText;
   this._fsTextM = this.fsTextM;
   this._clipRect = this.clipRect;
   this._clipCircle = this.clipCircle;
   this._drawImage = this.drawImage;
  }
 if (fX == null && fY == null) {
   this.line = this._line;
   this.sLines = this._sLines;
   this.fCircle = this._fCircle;
   this.sCircle = this._sCircle;
   this.fCircleM = this._fCircleM;
   this.sCircleM = this._sCircleM;
   this.fRect = this._fRect;
   this.sRect = this._sRect;
   this.fRectM = this._fRectM;
   this.sRectM = this._sRectM;
   //this.fLines = this._fLines;
   this._lines = this.__lines;
   this._polygon = this.__polygon;
    this.fText = this._fText;
   this.fTextM = this._fTextM;
   this.sText = this._sText;
   this.fsText = this._fsText;
   this.fsTextM = this._fsTextM;
   this.clipRect = this._clipRect;
   this.clipCircle = this._clipCircle;
   this.drawImage = this._drawImage;
   return;
 }
    this.fX = fX
    this.fY = fY

    if(invfX) this.invfX = invfX
    if(invfY) this.invfY = invfY

 this.sX = function(x){
   return this.fX(x+0.5)-this.fX(x-0.5);
 };
 this.sY = function(y){
   return this.fY(y+0.5)-this.fY(y-0.5);
 };
  if (fX == null) this.fX = function (x) { return x; };
 if (fY == null) this.fY = function (y) { return y; };
  this.line = function (x0, y0, x1, y1) {
   this._line(this.fX(x0), this.fY(y0), this.fX(x1), this.fY(y1));
 };
  this.fRect = function (x, y, width, height) {
   this._fRect(this.fX(x), this.fY(y), this.fX(x + width) - this.fX(x), this.fY(y + height) - this.fY(y));
 };
 this.sRect = function (x, y, width, height) {
   this._sRect(this.fX(x), this.fY(y), this.fX(x + width) - this.fX(x), this.fY(y + height) - this.fY(y));
 };
 this.fRectM = function (x, y, width, height) {
   return this._fRectM(this.fX(x), this.fY(y), this.fX(x + width) - this.fX(x), this.fY(y + height) - this.fY(y));
 };
 this.sRectM = function (x, y, width, height) {
   return this._sRectM(this.fX(x), this.fY(y), this.fX(x + width) - this.fX(x), this.fY(y + height) - this.fY(y));
 };
   this.fCircle = function (x, y, r) {
   this._fCircle(this.fX(x), this.fY(y), Math.abs(this.fX(x + r) - this.fX(x)));
 };
  this.sCircle = function (x, y, r) {
   this._sCircle(this.fX(x), this.fY(y), Math.abs(this.fX(x + r) - this.fX(x)));
 };
 this.fCircleM = function (x, y, r) {
   return this._fCircleM(this.fX(x), this.fY(y), Math.abs(this.fX(x + r) - this.fX(x)));
 };
 this.sCircleM = function (x, y, r) {
   return this._sCircleM(this.fX(x), this.fY(y), Math.abs(this.fX(x + r) - this.fX(x)));
 };
  this._lines = function () {
   if (arguments == null) return;
    var args = arguments[0];
   this.context.beginPath();
   this.context.moveTo(this.fX(args[0]), this.fY(args[1]));
   for (var i = 2; args[i + 1] != null; i += 2) {
     this.context.lineTo(this.fX(args[i]), this.fY(args[i + 1]));
   }
 };
  this._polygon = function (polygon) {
   this.context.beginPath();
   this.context.moveTo(this.fX(polygon[0].x), this.fY(polygon[0].y));
   for (var i = 1; polygon[i] != null; i++) {
     this.context.lineTo(this.fX(polygon[i].x), this.fY(polygon[i].y));
   }
 };
 
  this.fText = function (text, x, y) {
   this._fText(text, this.fX(x), this.fY(y));
 };
 this.fTextM = function (text, x, y) {
   this._fTextM(text, this.fX(x), this.fY(y));
 };
 this.sText = function (text, x, y) {
   this._sText(text, this.fX(x), this.fY(y));
 };
 this.fsText = function (text, x, y) {
   this._fsText(text, this.fX(x), this.fY(y));
 };
 this.fsTextM = function (text, x, y) {
   this._fsTextM(text, this.fX(x), this.fY(y));
 };
  this.clipRect = function (x, y, width, height) {
   this._clipRect(this.fX(x), this.fY(y), this.fX(x + width) - this.fX(x), this.fY(y + height) - this.fY(y));
 };
 this.clipCircle = function (x, y, r) {
   this._clipCircle(this.fX(x), this.fY(y), r*k.ZOOM);
 };
 this.drawImage = function (image, x, y, width, height) {
   if(width==null) this._drawImage(image, this.fX(x), this.fY(y));
   this._drawImage(image, this.fX(x), this.fY(y), this.fX(x + width) - this.fX(x), this.fY(y + height) - this.fY(y));
 };
  this._fLines = function () {
   this.__lines(arguments);
   this.context.fill();
 };
}

MetaCanvas.prototype.resetTransformation=function () {
 this.applyTransformationFunctions(null, null);
}

MetaCanvas.prototype.mapRegion=function(recOnCurrentCanvas, recCoordinates){
   var fX = function(x){
       return (x - recCoordinates.x)*recOnCurrentCanvas.width/recCoordinates.width + recOnCurrentCanvas.x;
   };
   var fY = function(y){
       return (y - recCoordinates.y)*recOnCurrentCanvas.height/recCoordinates.height + recOnCurrentCanvas.y;
   };
   this.applyTransformationFunctions(fX, fY);
    //inverse functions
   this.invfX = function(x){
     return (x-recOnCurrentCanvas.x)*recCoordinates.width/recOnCurrentCanvas.width + recCoordinates.x;
   };
   this.invfY = function(y){
     return (y-recOnCurrentCanvas.y)*recCoordinates.height/recOnCurrentCanvas.height + recCoordinates.y;
   };
}

MetaCanvas.prototype.mapCanvas=function(recCoordinates){
 let fX = function(x){
       return (x - recCoordinates.x)*this.W/recCoordinates.width;
 };
 let fY = function(y){
     return (y - recCoordinates.y)*this.H/recCoordinates.height;
 };
 this.applyTransformationFunctions(fX, fY);
  //inverse functions
 this.invfX = function(x){
   return x*recCoordinates.width/this.W + recCoordinates.x;
 };
 this.invfY = function(y){
   return y*recCoordinates.height/this.H + recCoordinates.y;
 };
}
Forces.prototype.forcesForNetwork=function(network, initRadius=0, initCenter, eqDistancesMode=0, addShortRepulsorsOnRelated=false, attractionToCenter) {
 initCenter = initCenter || new P(0, 0)
    this.attractionToCenter = attractionToCenter

    this.attractionToCenterFactor = 0.000004

    //new
    this.forces = new L()

    ////testing:
    this.nodes = new ndL()

  var node0;
 let node1;
 let nNodes = network.nodes.length;
 let i;
 let j;
 let relations = network.relations;
 let angle;
  //use positions from previous network if find nodes with same id
  //console.log("forcesForNetwork this.previousNetwork", this.previousNetwork)
  if(this.previousNetwork){
   initRadius = 0;
   var x0=900000;
   var x1=-900000;
   var y0=900000;
   var y1=-900000;
   for(i=0; i<this.previousNetwork.nodes.length; i++){
     x0 = Math.min(x0, this.previousNetwork.nodes[i].x);
     x1 = Math.max(x1, this.previousNetwork.nodes[i].x);
     y0 = Math.min(y0, this.previousNetwork.nodes[i].y);
     y1 = Math.max(y1, this.previousNetwork.nodes[i].y);
   }
   var dx = x1-x0
   var dy = y1-y0

   for(i = 0; i < nNodes; i++) {
      var nodei = network.nodes[i]
     node0 = this.previousNetwork.nodes.get(nodei.id)
     if(node0){
       nodei.x = node0.x;
       nodei.y = node0.y;
     } else {
       for(j=0; j<nodei.nodes.length; j++){//improve this by choosing barycenter of all found connected nodes
         node0 = this.previousNetwork.nodes.get(nodei.nodes[j].id);
         if(node0){
           nodei.x = node0.x + dx*0.05*(Math.random()-0.5);
           nodei.y = node0.y + dy*0.05*(Math.random()-0.5);
           break;
         }
       }
       if(node0==null){
         nodei.x = x0 + dx*Math.random();
         nodei.y = y0 + dy*Math.random();
       }
     }
     //console.log("-->", nodei.x, nodei.vx, nodei.ax,  node0!=null)
   }
 }

 //initial random position
  network.nodes.forEach((n,i)=>{
    if(n.x==null){
        //if(!n.x){
          n.x = 100*(Math.random()-0.5);
          n.y = 100*(Math.random()-0.5)
        //}
      n.vx = n.vy = n.ax = n.ay = 0
      n.mass = n.mass||1
    }
  })

  for(i = 0; i < nNodes; i++) {
   if(initRadius === 0) {
     this.addNode(network.nodes[i], new P(network.nodes[i].x, network.nodes[i].y));
   } else {
     angle = Math.random() * TwoPi;
     this.addNode(network.nodes[i], new P(initCenter.x + initRadius * Math.cos(angle), initCenter.y + initRadius * Math.sin(angle)));
   }
 }

 
 for(i = 0; i < nNodes - 1; i++) {
   node0 = network.nodes[i];
   for(j = i + 1; j < nNodes; j++) {
     node1 = network.nodes[j];
     let relation = relations.get(node0.id+"_"+node1.id)
     if(relation==null) relation = relations.get(node1.id+"_"+node0.id)

     //if(relations.nodesAreConnected(node0, node1)) {
    if(relation){
        if(addShortRepulsorsOnRelated) {
            //this.equilibriumDistances.push(this.dEqRepulsors * 0.5);
            this.addForce(node0, node1, "Repulsor", this.dEqRepulsors * 0.5, relation)
        } else {
            let eqDistance
            switch(eqDistancesMode) {
             case 0:
               //this.equilibriumDistances.push(this.dEqSprings);
               eqDistance = this.dEqSprings
               break;
             case 1:
               //this.equilibriumDistances.push((1.1 - relations.getFirstRelationByIds(node0.id, node1.id, false).weight) * this.dEqSprings);
               eqDistance = (1.1 - relations.getFirstRelationByIds(node0.id, node1.id, false).weight) * this.dEqSprings
               break;
             case 2:
               //this.equilibriumDistances.push(Math.sqrt(Math.min(node0.nodes.length, node1.nodes.length)) * this.dEqSprings * 0.1);
               eqDistance = Math.sqrt(Math.min(node0.nodes.length, node1.nodes.length)) * this.dEqSprings * 0.1
               break;
            }
            this.addForce(node0, node1, "Spring", eqDistance, relation, 2.2)
        }
    } else {
         this.addForce(node0, node1, "Repulsor", this.dEqRepulsors, null, 0.25)
    }
   }
  }
  



  this.previousNetwork = network
}

Forces.prototype.addNode=function(node, initPosition, initSpeed) {
 initPosition = initPosition == null ? new P(Math.random() * 200 - 100, Math.random() * 200 - 100) : initPosition;
 initSpeed = initSpeed == null ? new P(0, 0) : initSpeed;
 this.nodes.addNode(node)
 node.x = initPosition.x
 node.y = initPosition.y
 node.vx = initSpeed.x
 node.vy = initSpeed.y
 node.ax = 0
 node.ay = 0
 node.r = node.r||1
 node.mass = node.mass||1
}

// Forces.prototype.removeNode=function(node){
//     this.nodes.removeNode(node)
//     for(let i=0; i<this.forces.length; i++){
//         if(this.forces.from==node || this.forces.to)
//     }
// }

Forces.prototype.addForce=function(node0, node1, type, equilibriumDistance, relation, kFactor=1) {
 // this.from.addNode(node0);
 // this.to.addNode(node1);
 // this.forcesList.push(node0.id + "*" + node1.id + "*" + type);
 // this.forcesTypeList.push(type);

 let force = {
    from:node0,
    to:node1,
    type,
    equilibriumDistance,
    kFactor,
    dFactor:1,
    relation
 }

 this.forces.push(force)

 if(relation) relation.force = force

 //if(equilibriumDistance != null) this.equilibriumDistances.push(equilibriumDistance);
 //this.equilibriumDistances.push(equilibriumDistance); //testing
}

Forces.prototype.setEquilibriumDistances=function(equilibrimDistanceAttractor, equilibrimDistanceRepulsor) {
    if(equilibrimDistanceAttractor==null) return
    if(equilibrimDistanceRepulsor!=null){
        console.log("setEquilibriumDistances ", equilibrimDistanceAttractor, equilibrimDistanceRepulsor, this.forces.length, this.forces.filter(f=>f.type=="Repulsor").length, this.forces.filter(f=>f.type!="Repulsor").length)
        this.forces.forEach(force=>force.equilibriumDistance = force.type=="Repulsor"?equilibrimDistanceRepulsor:equilibrimDistanceAttractor)
        return
    }
    this.forces.forEach(force=>force.equilibriumDistance=equilibrimDistanceAttractor)
}

Forces.prototype.calculate=function() {
    let i
    let node0, node1
    let type
    let force
    let dx, dy, d
    let kForce, eqDistance, strength
    // 1. reset accelerations
    //this._resetAccelerations(); //TODO: this can be removed if accelerations are resetd in applyForces [!]
    // 2. calculate new accelerations from forces

    for(i = 0; this.forces[i] != null; i++) {
        node0 = this.forces[i].from
        node1 = this.forces[i].to

        if(node0.mass<0.01 || node1.mass<0.01) continue

        type = this.forces[i].type
        eqDistance = this.forces[i].equilibriumDistance*this.forces[i].dFactor

        dx = node1.x - node0.x
        dy = node1.y - node0.y
        d = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))
        strength = this.k*this.forces[i].kFactor * (d - eqDistance) / d

        //if(Math.random()<0.01) console.log(type, this.forces[i].kFactor, eqDistance)

        //if(type=="Spring" && Math.random()<0.01) console.log(type, d < eqDistance, strength)
        //if(node0.name == "Saúde") console.log("strength, eqDistance, this.forces[i].kFactor, this.k", strength, eqDistance, this.forces[i].kFactor, this.k)

        if(type == 'Repulsor' && d > eqDistance) continue;
        if(type == 'Attractor' && d < eqDistance) continue;

        //strength *= node0.mass*node1.mass
        //if(Math.abs(strength<0.0001)) continue// console.log(strength)

        switch(type) {
        case "Attractor":
            //strength*=node0.mass*node1.mass
         case "Spring":
         case "Repulsor":
           //force = kForce * (d - eqDistance) / d;
           node0.ax += (strength * dx)/(node0.mass+0.01)
           node0.ay += (strength * dy)/(node0.mass+0.01)
           node1.ax -= (strength * dx)/(node1.mass+0.01)
           node1.ay -= (strength * dy)/(node1.mass+0.01)
           break
         case "DirectedSpring":
           //force = kForce * (d - eqDistance) / d;
           node1.ax -= (strength * dx)/(node1.mass+0.01)
           node1.ay -= (strength * dy)/(node1.mass+0.01)
           break
         case "DirectedRepulsor":
           if(d < eqDistance) {
             //force = kForce * (d - eqDistance) / d;
             node1.ax -= (strength * dx)/(node1.mass+0.01)
             node1.ay -= (strength * dy)/(node1.mass+0.01)
           }
           break
        }

        //if(node0.name == "Saúde") console.log("calculate 2", node0.x, node0.y, node0.vx, node0.vy, node0.ax, node0.ay, node0._px, node0._py)
    }
}

Forces.prototype.applyForces=function() {
    let node;
    //console.log("applyForces")
    for(let i = 0; i<this.nodes.length; i++) {
        node = this.nodes[i]
        if(node.fixed_x!=null){
            node.x = 0.95*node.x + 0.05*node.fixed_x
            node.ax=0
            node.vx=0
        }
        if(node.fixed_y!=null){
            node.y = 0.95*node.y + 0.05*node.fixed_y
            node.ay=0
            node.vy=0
        }
        if(node.fixed_x!=null && node.fixed_y!=null) continue
        node.vx += node.ax
        node.vy += node.ay
        node.vx *= this.friction
        node.vy *= this.friction
        node.x += node.vx
        node.y += node.vy
        node.ax=0
        node.ay=0
   }
 }

 Forces.prototype.calculateAndApplyForces=function() {
     this.calculate()
     if(this.attractionToCenter) this.attractionToPoint(new P(500,400), this.attractionToCenterFactor)//0.000004)
     this.applyForces()
 }

 Forces.prototype.iterate=function(n) {
   for(var i=0; i<n; i++){
     this.calculate()
     if(this.attractionToCenter) this.attractionToPoint(new P(500,400), 0.000004)
     this.applyForces()
   }
 }

Forces.prototype.attractionToPoint=function(point, strength=1, limit) {
 let node;
 let force;
 let dx;
 let dy;
 let d2;
 for(var i = 0; this.nodes[i] != null; i++) {
   node = this.nodes[i];
   dx = point.x - node.x;
   dy = point.y - node.y;
   d2 = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))
   if(limit != null) {
     force = Math.min(strength*d2, limit);
   } else {
     force = strength*d2;
   }
   //force = strength
   node.ax += force * dx;
   node.ay += force * dy;
 }
}

Forces.prototype.avoidOverlapping=function(delta=0) {
    let node0, node1
 let x0l, y0t, x0r, y0b, x1l, y1t, x1r, y1b;
 let vx;
 let vy;
 let dM = delta * 0.5;
 let l = this.nodes.length;
 let l_short = l-1

  for(let i = 0; i<l_short; i++) {
   node0 = this.nodes[(i + this._i0) % l];
   x0l = node0.x - node0.width * 0.5 - dM;
   x0r = node0.x + node0.width * 0.5 + dM;
   y0t = node0.y - node0.height * 0.5 - dM;
   y0b = node0.y + node0.height * 0.5 + dM;
   for(let j = i + 1; j<l; j++) {
     node1 = this.nodes[(j + this._i0 + i) % l];
     x1l = node1.x - node1.width * 0.5 - dM;
     x1r = node1.x + node1.width * 0.5 + dM;
     y1t = node1.y - node1.height * 0.5 - dM;
     y1b = node1.y + node1.height * 0.5 + dM;
     if(((x0l > x1l && x0l < x1r) ||  (x0r > x1l && x0r < x1r)) && ((y0t > y1t && y0t < y1b) || (y0b > y1t && y0b < y1b))) {
       vx = node1.x - node0.x;
       vy = node1.y - node0.y;
        if(Math.abs(vx) > Math.abs(vy)) {
         if(vx > 0) {
           node0.x -= (x0r - x1l) * 0.5;
           node1.x += (x0r - x1l) * 0.5;
         } else {
           node0.x += (x1r - x0l) * 0.5;
           node1.x -= (x1r - x0l) * 0.5;
         }
       } else {
         if(vy > 0) {
           node0.y -= (y0b - y1t) * 0.5;
           node1.y += (y0b - y1t) * 0.5;
         } else {
           node0.y += (y1b - y0t) * 0.5;
           node1.y -= (y1b - y0t) * 0.5;
         }
       }
        //setStroke(Math.abs(vx)>Math.abs(vy)?'blue':'red');
       //sCircle((node0.x+node1.x)*0.5, (node0.y+node1.y)*0.5, Math.max(Math.abs(vx), Math.abs(vy))*0.5);
     }
   }
 }
 this._i0++;
}

Forces.prototype.avoidOverlappingRadial=function(delta=0, K=1) {
    let node0, node1
 let l = this.nodes.length
 let l_short = l-1
 let vx, vy
 let d, dMin
 let k;
 let delta2 = delta * 2;
  for(let i = 0; i<l_short; i++) {
   node0 = this.nodes[(i + this._i0) % l];
   for(let j = i + 1; j<l; j++) {
     node1 = this.nodes[(j + this._i0 + i) % l];
     vx = node1.x - node0.x;
     vy = node1.y - node0.y;
     d = vx**2 + vy**2;
     dMin = (node0.r + node1.r + delta2)**2;
     if(d < dMin) {
       dMin = Math.sqrt(dMin);
       d = Math.sqrt(d);
       k = 0.5 * (dMin - d) / d;
       node0.x -= K * k * vx;
       node0.y -= K * k * vy;
       node1.x += K * k * vx;
       node1.y += K * k * vy;
     }
   }
 }
 this._i0++;
}

Forces.prototype.deactivateForcesFromNode=function(node) {
 node.vx = node.vy = node.ax = node.ay = 0;
}

Forces.prototype._resetAccelerations=function() {
 let node;
 for(var i = 0; this.nodes[i] != null; i++) {
   node = this.nodes[i];
   node.ax = 0;
   node.ay = 0;
 }
}



Engine3D.prototype.mouseControl=function(k, friction=0.95){
    if(k.MOUSE_PRESSED) {
        this.alfa_rotation = k.DX_MOUSE_PRESSED*0.01
        this.beta_rotation = k.DY_MOUSE_PRESSED*0.01
    }

    this.alfa_rotation *= friction
    this.beta_rotation *= friction

    this.applyRotation(new _.P3D(this.alfa_rotation,this.beta_rotation,0))
    this.zoom*=(1+k.WHEEL_CHANGE*0.1)

    this.zoom = Math.min(Math.max(this.min_zoom, this.zoom), this.max_zoom)

    this.x0 = k.cX
    this.y0 = k.cY
}

Engine3D.prototype.setBasis=function(polygon3D) {
 this._basis = polygon3D.clone();
 this._basisBase = polygon3D.clone();
 this._provisionalBase = polygon3D.clone();
}

Engine3D.prototype.setAngles=function(point3D) {
 this._angles = point3D.clone();
 this._freeRotation = false;
 this._basis = this.basis3DRotation(this._basisBase, this._angles);
}
Engine3D.prototype.applyRotation=function(planeVector){
 if(!this._freeRotation) {
   this._freeRotation = true;
   this.updateAngles();
   this._provisionalBase[0] = this._basis[0].clone();
   this._provisionalBase[1] = this._basis[1].clone();
   this._provisionalBase[2] = this._basis[2].clone();
 }
 this._basis[0] = this.point3DRotation(this._provisionalBase[0], new P3D(-planeVector.y, planeVector.x, 0));
 this._basis[1] = this.point3DRotation(this._provisionalBase[1], new P3D(-planeVector.y, planeVector.x, 0));
 this._basis[2] = this.point3DRotation(this._provisionalBase[2], new P3D(-planeVector.y, planeVector.x, 0));
 this._provisionalBase[0] = this._basis[0].clone();
 this._provisionalBase[1] = this._basis[1].clone();
 this._provisionalBase[2] = this._basis[2].clone();
}

/**useful only for calculating inverse rotation (for analgyphs)**/
Engine3D.prototype.projectPoint3D_complete=function(point3D) {
 let prescale = 1// this.lens / (this.lens + (this._basis[0].z * point3D.x + this._basis[1].z * point3D.y + this._basis[2].z * point3D.z));
    return new P3D(
        (this._basis[0].x * point3D.x + this._basis[1].x * point3D.y + this._basis[2].x * point3D.z) * prescale,
        (this._basis[0].y * point3D.x + this._basis[1].y * point3D.y + this._basis[2].y * point3D.z) * prescale, 
        (this._basis[0].z * point3D.x + this._basis[1].z * point3D.y + this._basis[2].z * point3D.z) * prescale
    );
}

Engine3D.prototype.projectPoint3D=function(point3D) {
    var prescale = this.lens / (this.lens + (this._basis[0].z * point3D.x*this.zoom + this._basis[1].z * point3D.y*this.zoom + this._basis[2].z * point3D.z*this.zoom));
    return new P3D(
        (this._basis[0].x * point3D.x*this.zoom + this._basis[1].x * point3D.y*this.zoom + this._basis[2].x * point3D.z*this.zoom) * prescale + this.x0,
        (this._basis[0].y * point3D.x*this.zoom + this._basis[1].y * point3D.y*this.zoom + this._basis[2].y * point3D.z*this.zoom) * prescale + this.y0, 
        prescale
    );
}

Engine3D.prototype.projectCoordinates=function(x, y, z) {
    var prescale = this.lens / (this.lens + (this._basis[0].z * x*this.zoom + this._basis[1].z * y*this.zoom + this._basis[2].z * z*this.zoom));
    return new P3D(
        (this._basis[0].x * x*this.zoom + this._basis[1].x * y*this.zoom + this._basis[2].x * z*this.zoom) * prescale + this.x0, 
        (this._basis[0].y * x*this.zoom + this._basis[1].y * y*this.zoom + this._basis[2].y * z*this.zoom) * prescale + this.y0, 
        prescale
    );
}

Engine3D.prototype.scale=function(point3D) {
 return this.lens / (this.lens + (this._basis[0].z * point3D.x*this.zoom + this._basis[1].z * point3D.y*this.zoom + this._basis[2].z * point3D.z*this.zoom));
}

Engine3D.prototype.sortedIndexesByPointsScale=function(polygon3D) {
 let pairsArray = [];
 let i;
 for(i = 0; polygon3D[i] != null; i++) {
   pairsArray[i] = [polygon3D[i], i];
 }
  pairsArray = pairsArray.sort(this._sortingCriteria.bind(this));
  var indexes = new nL();
  for(i = 0; polygon3D[i] != null; i++) {
   indexes[i] = pairsArray[i][1];
 }
  return indexes;
}
Engine3D.prototype.sortListByPointsScale=function(list, polygon3D) {
 let pairsArray = [];
 let i;
 for(i = 0; list[i] != null; i++) {
   pairsArray[i] = [polygon3D[i], list[i]];
 }
 
 pairsArray = pairsArray.sort(this._sortingCriteria.bind(this));
  var newList = instanceSameType(list);
 newList.name = list;
  for(i = 0; list[i] != null; i++) {
   newList[i] = pairsArray[i][1];
 }
  return newList;
}
Engine3D.prototype._sortingCriteria=function(array0, array1) {
 let point3D0 = array0[0];
 let point3D1 = array1[0];
 return(this._basis[0].z * point3D0.x + this._basis[1].z * point3D0.y + this._basis[2].z * point3D0.z < this._basis[0].z * point3D1.x + this._basis[1].z * point3D1.y + this._basis[2].z * point3D1.z) ? 1 : -1;
}
Engine3D.prototype.updateAngles=function() {
 this._angles = this.getEulerAngles();
}
Engine3D.prototype.getEulerAngles=function() {
 return new P3D(Math.atan2(-this._basis[1].z, this._basis[2].z), Math.asin(this._basis[0].z), Math.atan2(-this._basis[0].y, this._basis[0].x));
}
Engine3D.prototype.basis3DRotation=function(basis, angles) {
 let ca = Math.cos(angles.x);
 let sa = Math.sin(angles.x);
 let cb = Math.cos(angles.y);
 let sb = Math.sin(angles.y);
 let cg = Math.cos(angles.z);
 let sg = Math.sin(angles.z);
  return new Pol3D(
   new P3D(basis[0].x * cg * cb + basis[0].y * (cg * sa * sb + sg * ca) + basis[0].z * (sg * sa - cg * ca * sb), -basis[0].x * sg * cb + basis[0].y * (cg * ca - sg * sa * sb) + basis[0].z * (sg * ca * sb + cg * sa), basis[0].x * sb - basis[0].y * sa * cb + basis[0].z * cb * ca), 
   new P3D(basis[1].x * cg * cb + basis[1].y * (cg * sa * sb + sg * ca) + basis[1].z * (sg * sa - cg * ca * sb), -basis[1].x * sg * cb + basis[1].y * (cg * ca - sg * sa * sb) + basis[1].z * (sg * ca * sb + cg * sa), basis[1].x * sb - basis[1].y * sa * cb + basis[1].z * cb * ca), 
   new P3D(basis[2].x * cg * cb + basis[2].y * (cg * sa * sb + sg * ca) + basis[2].z * (sg * sa - cg * ca * sb), -basis[2].x * sg * cb + basis[2].y * (cg * ca - sg * sa * sb) + basis[2].z * (sg * ca * sb + cg * sa), basis[2].x * sb - basis[2].y * sa * cb + basis[2].z * cb * ca)
 );
}
Engine3D.prototype.point3DRotation=function(point, angles) {
 let ca = Math.cos(angles.x);
 let sa = Math.sin(angles.x);
 let cb = Math.cos(angles.y);
 let sb = Math.sin(angles.y);
 let cg = Math.cos(angles.z);
 let sg = Math.sin(angles.z);
 return new P3D(
   point.x * cg * cb + point.y * (cg * sa * sb + sg * ca) + point.z * (sg * sa - cg * ca * sb), -point.x * sg * cb + point.y * (cg * ca - sg * sa * sb) + point.z * (sg * ca * sb + cg * sa),
   point.x * sb - point.y * sa * cb + point.z * cb * ca
 );
}
Engine3D.prototype.line3DCoordinates=function(x0, y0, z0, x1, y1, z1) {
 let polygon = new Pol();
  var prescale0 = this.lens / (this.lens + (this._basis[0].z * x0 + this._basis[1].z * y0 + this._basis[2].z * z0));
 let prescale1 = this.lens / (this.lens + (this._basis[0].z * x1 + this._basis[1].z * y1 + this._basis[2].z * z1));
  if(prescale0 > 0 || prescale1 > 0) {
   if(prescale0 > 0 && prescale1 > 0) {
     polygon.push(new P((this._basis[0].x * x0 + this._basis[1].x * y0 + this._basis[2].x * z0 + this._dx) * prescale0, (this._basis[0].y * x0 + this._basis[1].y * y0 + this._basis[2].y * z0) * prescale0));
     polygon.push(new P((this._basis[0].x * x1 + this._basis[1].x * y1 + this._basis[2].x * z1 + this._dx) * prescale1, (this._basis[0].y * x1 + this._basis[1].y * y1 + this._basis[2].y * z1) * prescale1));
     return polygon;
   } else {
     var p0B = new P3D(this._basis[0].x * x0 + this._basis[1].x * y0 + this._basis[2].x * z0, this._basis[0].y * x0 + this._basis[1].y * y0 + this._basis[2].y * z0, this._basis[0].z * x0 + this._basis[1].z * y0 + this._basis[2].z * z0);
     var p1B = new P3D(this._basis[0].x * x1 + this._basis[1].x * y1 + this._basis[2].x * z1, this._basis[0].y * x1 + this._basis[1].y * y1 + this._basis[2].y * z1, this._basis[0].z * x1 + this._basis[1].z * y1 + this._basis[2].z * z1);
     var t = (-this.lens + this._cuttingPlane - p0B.z) / (p1B.z - p0B.z);
     var pM = new P3D(p0B.x + t * (p1B.x - p0B.x), p0B.y + t * (p1B.y - p0B.y), -this.lens + this._cuttingPlane);
     var prescaleM = this.lens / (this.lens + pM.z);
     if(prescale0 > 0) {
       polygon.push(new P((p0B.x + this._dx) * prescale0, p0B.y * prescale0));
       polygon.push(new P((pM.x + this._dx) * prescaleM, pM.y * prescaleM));
     } else {
       polygon.push(new P((pM.x + this._dx) * prescaleM, pM.y * prescaleM));
       polygon.push(new P((p1B.x +this._dx) * prescale1, p1B.y * prescale1));
     }
     return polygon;
   }
 }
 return null;
}
Engine3D.prototype.line3D=function(point0, point1) {
 return this.line3DCoordinates(point0.x, point0.y, point0.z, point1.x, point1.y, point1.z);
}
Engine3D.prototype.quadrilater=function(p0, p1, p2, p3) {
 let polygon3D = new Pol3D();
  var l0 = this.line3D(p0, p1);
 let l1 = this.line3D(p1, p2);
 let l2 = this.line3D(p2, p3);
 let l3 = this.line3D(p3, p0);
  if(l0 != null) {
   if(l3 == null ||  (l0[0].x != l3[1].x && l0[0].y != l3[1].y)) polygon3D.push(l0[0]);
   polygon3D.push(l0[1]);
 }
 if(l1 != null) {
   if(l0 == null ||  (l1[0].x != l0[1].x && l1[0].y != l0[1].y)) polygon3D.push(l1[0]);
   polygon3D.push(l1[1]);
 }
 if(l2 != null) {
   if(l1 == null || (l2[0].x != l1[1].x && l2[0].y != l1[1].y)) polygon3D.push(l2[0]);
   polygon3D.push(l2[1]);
 }
 if(l3 != null) {
   if(l2 == null || (l3[0].x != l2[1].x && l3[0].y != l2[1].y)) polygon3D.push(l3[0]);
   polygon3D.push(l3[1]);
 }
  return polygon3D;
}

//---------------functions-----------------

let interpolateColors=function(color0, color1, value, bUseSquaredIntensities) {
    let result = interpolateColorsRGB(colorStringToRGB(color0), colorStringToRGB(color1), value, bUseSquaredIntensities)
    return 'rgb('+Math.floor(result[0])+','+Math.floor(result[1])+','+Math.floor(result[2])+')'
}

let interpolateColorsRGB=function(color0, color1, value, bUseSquaredIntensities) {
 let s = 1 - value;
 if(bUseSquaredIntensities)
   return [Math.floor(Math.sqrt(s * color0[0]*color0[0] + value * color1[0]*color1[0])),
           Math.floor(Math.sqrt(s * color0[1]*color0[1] + value * color1[1]*color1[1])),
           Math.floor(Math.sqrt(s * color0[2]*color0[2] + value * color1[2]*color1[2]))];
 return [Math.floor(s * color0[0] + value * color1[0]), Math.floor(s * color0[1] + value * color1[1]), Math.floor(s * color0[2] + value * color1[2])];
}

let distanceColorsRGB=function(color0, color1) {
 let d = Math.abs(color0[0]-color1[0]) + Math.abs(color0[1]-color1[1]) + Math.abs(color0[2]-color1[2]);
 return Number((d/(765)).toFixed(4)); // 765 = 3*255, the max diff
}

let addAlpha=function(color, alpha) {
 alpha = alpha == null ? 1 : alpha;
 let rgb = colorStringToRGB(color);
 if(rgb == null) return 'black';
 return 'rgba(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ',' + alpha + ')';
}
let invertColor=function(color) {
 let rgb = colorStringToRGB(color);
 rgb = invertColorRGB(rgb[0], rgb[1], rgb[2]);
 return RGBtoHEX(rgb[0], rgb[1], rgb[2]);
}
let stringToColor=function(string){
 if(string==null) return;
 if(string=='null' || string=='undefined') return "#202020";
 let colors =  [
 "#d62728", "#1f77b4", "#2ca02c", "#ff7f00", "#9467bd", "#bcbd22", "#8c564b", "#17becf", "#dd4411", "#206010", "#e377c2", "#3330ff", "#dd8811", "#ff220e", "#1f66a3", "#8c453a", "#2ba01c", "#dfc500", "#945600", "#ff008b", "#e37700", "#7f7f7f",
 "#d62720", "#1f77b0", "#2ca02a", "#ff7f08", "#9467ba", "#bcbd20", "#8c564f", "#17bece", "#dd4418", "#206011", "#e377c9", "#3330fe", "#dd8818", "#ff220a", "#1f66a9", "#8c453f", "#2ba01f", "#dfc508", "#945608", "#ff008f", "#e37708"
 ];
 let number = 0;
 for(var i = 0; i<string.length; i++){
   number += string.charCodeAt(i)*(i*i+1);
 }
 return colors[ Math.floor(  getRandomWithSeed(number)*colors.length ) ];
}
let HEXtoRGB=function(hexColor) {
 return [parseInt(hexColor.substr(1, 2), 16), parseInt(hexColor.substr(3, 2), 16), parseInt(hexColor.substr(5, 2), 16)];
}
let RGBtoHEX=function(red, green, blue) {
 return "#" + toHex(Math.floor(red)) + toHex(Math.floor(green)) + toHex(Math.floor(blue));
}
let RGBArrayToString=function(array) {
 return 'rgb(' + array[0] + ',' + array[1] + ',' + array[2] + ')';
}
let colorStringToHEX=function(color_string) {
 let rgb = colorStringToRGB(color_string);
 return RGBtoHEX(rgb[0], rgb[1], rgb[2]);
}
let numberToHex=function(number) {
 let hex = number.toString(16);
 while(hex.length < 2) hex = "0" + hex;
 return hex;
}
let uinttoRGB=function(color) {
 let rgbColor = new Array(color >> 16, (color >> 8) - ((color >> 16) << 8), color - ((color >> 8) << 8));
 return rgbColor;
}
let uinttoHEX=function(color) {
 let rgbColor = uinttoRGB(color);
 let hexColor = RGBToHEX(rgbColor[0], rgbColor[1], rgbColor[2]);
 return hexColor;
}
let RGBtouint=function(red, green, blue) {
 return Number(red) << 16 | Number(green) << 8 | Number(blue);
}
let HEXtouint=function(hexColor) {
 let colorArray = HEXtoRGB(hexColor);
 let color = RGBtouint(colorArray[0], colorArray[1], colorArray[2]);
 return color;
}
let grayByLevel=function(level) {
 level = Math.floor(level * 255);
 return 'rgb(' + level + ',' + level + ',' + level + ')';
}
let HEXtoHSV=function(hexColor) {
 let rgb = HEXtoRGB(hexColor);
 return RGBtoHSV(rgb[0], rgb[1], rgb[2]);
}
let HSVtoHEX=function(hue, saturation, value) {
 let rgb = HSVtoRGB(hue, saturation, value);
 return RGBtoHEX(rgb[0], rgb[1], rgb[2]);
}
let HSLtoHEX=function(hue, saturation, light) {
 let rgb = HSLtoRGB(hue, saturation, light);
 return RGBtoHEX(rgb[0], rgb[1], rgb[2]);
}
let RGBtoHSV=function(r, g, b) {
   var h;
   var s;
   var v;
   var min = Math.min(Math.min(r, g), b);
   var max = Math.max(Math.max(r, g), b);
   v = max / 255;
   var delta = max - min;
   if(delta === 0) return new Array(0, 0, r / 255);
   if(max !== 0) {
     s = delta / max;
   } else {
     s = 0;
     h = -1;
     return new Array(h, s, v);
   }
   if(r == max) {
     h = (g - b) / delta;
   } else if(g == max) {
     h = 2 + (b - r) / delta;
   } else {
     h = 4 + (r - g) / delta;
   }
   h *= 60;
   if(h < 0) h += 360;
   return new Array(h, s, v);
}
let HSVtoRGB=function(hue, saturation, value) {
 hue = hue ? hue : 0;
 saturation = saturation ? saturation : 0;
 value = value ? value : 0;
 let r;
 let g;
 let b;
 //
 let i;
 let f;
 let p;
 let q;
 let t;
 if(saturation === 0) {
   r = g = b = value;
   return [Math.floor(r * 255), Math.floor(g * 255), Math.floor(b * 255)];
 }
 hue /= 60;
 i = Math.floor(hue);
 f = hue - i;
 p = value * (1 - saturation);
 q = value * (1 - saturation * f);
 t = value * (1 - saturation * (1 - f));
 switch(i) {
   case 0:
     r = value;
     g = t;
     b = p;
     break;
   case 1:
     r = q;
     g = value;
     b = p;
     break;
   case 2:
     r = p;
     g = value;
     b = t;
     break;
   case 3:
     r = p;
     g = q;
     b = value;
     break;
   case 4:
     r = t;
     g = p;
     b = value;
     break;
   default:
     r = value;
     g = p;
     b = q;
     break;
 }
 return new Array(Math.floor(r * 255), Math.floor(g * 255), Math.floor(b * 255));
}
let HSLtoRGB=function(hue, saturation, light) {
 let r, g, b;
  function hue2rgb(p, q, t) {
   if(t < 0) t += 1;
   if(t > 1) t -= 1;
   if(t < 1 / 6) return p + (q - p) * 6 * t;
   if(t < 1 / 2) return q;
   if(t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
   return p;
 }
  if(saturation === 0) {
   r = g = b = light; // achromatic
 } else {
   var q = light < 0.5 ? light * (1 + saturation) : light + saturation - light * saturation;
   var p = 2 * light - q;
   r = hue2rgb(p, q, (hue / 360) + 1 / 3);
   g = hue2rgb(p, q, hue / 360);
   b = hue2rgb(p, q, (hue / 360) - 1 / 3);
 }
  return [Math.floor(r * 255), Math.floor(g * 255), Math.floor(b * 255)];
}
let invertColorRGB=function(r, g, b) {
 return [255 - r, 255 - g, 255 - b];
}
let toHex=function(number) {
 let hex = number.toString(16);
 while(hex.length < 2) hex = "0" + hex;
 return hex;
}
let getRandomColor=function() {
    return '#'+Math.floor(Math.random()*16777215).toString(16)
 //return 'rgb(' + String(Math.floor(Math.random() * 256)) + ',' + String(Math.floor(Math.random() * 256)) + ',' + String(Math.floor(Math.random() * 256)) + ')';
}
let colorStringToRGB=function(color_string, factor) {
 if(color_string==null) return;
 factor = factor==null?1:factor;
 
 color_string = String(color_string);
  color_string = color_string.replace(/ /g, '');
 color_string = color_string.toLowerCase()
 if(color_string[0] == '#') { // remove # if any
   color_string = color_string.substr(1, 6)
 }
 let simple_colors = {
   beige: 'f5f5dc',
   black: '000000',
   blue: '0000ff',
   brown: 'a52a2a',
   cyan: '00ffff',
   fuchsia: 'ff00ff',
   gold: 'ffd700',
   gray: '808080',
   grey: '808080',
   green: '008000',
   magenta: 'ff00ff',
   navy: '000080',
   pink: 'ffc0cb',
   salmon: 'fa8072',
   silver: 'c0c0c0',
   turquoise: '40e0d0',
   violet: 'ee82ee',
   white: 'ffffff',
   yellow: 'ffff00'
 };
  if(simple_colors[color_string] != null) color_string = simple_colors[color_string];
   // array of color definition objects
 let color_defs = [
 {
   re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
   //example: ['rgb(123, 234, 45)', 'rgb(255,234,245)'],
   process: function(bits) {
     return [
       parseInt(bits[1])*factor,
       parseInt(bits[2])*factor,
       parseInt(bits[3])*factor
     ];
   }
 },
 {
   re: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),[\.0123456789]+\)$/,
   //example: ['rgb(123, 234, 45)', 'rgb(255,234,245)', 'rgba(200,100,120,0.3)'],
   process: function(bits) {
     return [
       parseInt(bits[1])*factor,
       parseInt(bits[2])*factor,
       parseInt(bits[3])*factor
     ];
   }
 },
 {
   re: /^(\w{2})(\w{2})(\w{2})$/,
   //example: ['#00ff00', '336699'],
   process: function(bits) {
     return [
       parseInt(bits[1], 16)*factor,
       parseInt(bits[2], 16)*factor,
       parseInt(bits[3], 16)*factor
     ];
   }
 },
 {
   re: /^(\w{1})(\w{1})(\w{1})$/,
   //example: ['#fb0', 'f0f'],
   process: function(bits) {
     return [
       parseInt(bits[1] + bits[1], 16)*factor,
       parseInt(bits[2] + bits[2], 16)*factor,
       parseInt(bits[3] + bits[3], 16)*factor
     ];
   }
 }];
  // search through the definitions to find a match
 for(var i = 0; i < color_defs.length; i++) {
   var re = color_defs[i].re;
   var processor = color_defs[i].process;
   var bits = re.exec(color_string);
   if(bits) {
     return processor(bits);
   }
  }
  return null;
}
let createSortedNumberList=function(nValues, start, step, name) {
 if(nValues==null) return null;
 if(Array.isArray(nValues)) nValues=nValues.length;
 nValues = Number(nValues);
  start = start || 0;
 step = step==null?1:step;
 let i;
 let nl = new nL();
 for(i = 0; i < nValues; i++) {
   nl.push(start + i * step);
 }
  if(name != null) nl.name = name;
  return nl;
}
let createNumberListWithinInterval=function(nValues, interval, mode, randomSeed) {
 if(interval == null) interval = new I(0, 1);
  if(mode==1) return createSortedNumberList(nValues, interval.x, (interval.y-interval.x)/nValues);
  mode = mode==null?0:mode;
 let random = randomSeed!=null ? new _Alea("my", randomSeed, "seeds") : NumberOperators_random;
  var nl = new nL();
 let range = interval.getAmplitude();
 let min = Number(interval.getMin());
 let i;
 switch(mode){
   case 0://random
     for(i = 0; i < nValues; i++) {
       nl.push(min + Number(random() * range));
     }
     break;
 }
 
 return nl;
}
let createRandomNormalDistribution=function(nValues, mean, standardDeviation) {
 let nL = new nL();
 let i;
 
 for(i=0; i<nValues; i++){
   nL.push(normal(mean,standardDeviation));
 }
 
 return nL;
}
let createRandomBetaPERTDistribution=function(nValues,min,max,mode,lambda,randomSeed) {
 min = (min == null) ? 0 : min;
 max = (max == null) ? 1 : max;
 mode = (mode == null) ? .5 : mode;
 lambda = (lambda == null) ? 1 : lambda;
 if(randomSeed)
   randomSeed(randomSeed);
 let nL = new nL();
 let i;
 
 for(i=0; i<nValues; i++){
   nL.push(betaPERT(min,max,mode,lambda));
 }
 if(randomSeed)
   randomSeedPop();
 return nL;
}
let createRandomBimodalDistribution=function(nValues,min,max,mode1,mode2,lambda,balance,randomSeed) {
 min = (min == null) ? 0 : min;
 max = (max == null) ? 1 : max;
 mode1 = (mode1 == null) ? .25 : mode1;
 mode2 = (mode2 == null) ? .75 : mode2;
 lambda = (lambda == null) ? 1 : lambda;
 balance = (balance == null) ? .5 : balance;
 if(randomSeed!=null)
   randomSeed(randomSeed);
 let nL = new nL();
 let i;
 
 for(i=0; i<nValues; i++){
   if(random() > balance)
     nL.push(betaPERT(min,max,mode1,lambda));
   else
     nL.push(betaPERT(min,max,mode2,lambda));
 }
 if(randomSeed)
   randomSeedPop();
 return nL;
}
let createRandomNumbers=function(nValues, interval, seed, func) {
 seed = seed == null ? -1 : seed;
 interval = interval == null ? new I(0, 1) : interval;
  var nl = new nL();
 let amplitude = interval.getAmplitude();
  var random = seed == -1 ? NumberOperators_random : new _Alea("my", seed, "seeds");
  for(var i = 0; i < nValues; i++) {
   //seed = (seed*9301+49297) % 233280; //old method, close enough: http://moebio.com/research/randomseedalgorithms/
   //nl[i] = interval.x + (seed/233280.0)*amplitude; //old method
    nl[i] = func == null ? (random() * amplitude + interval.x) : func(random() * amplitude + interval.x);
 }
  return nl;
}
let createUniformTable=function(nLists, nRows, element, sLNames) {
 let table = new T();
 for(var i = 0; i < nLists; i++) {
   table[i] = createListWithSameElement(nRows, element);
   if(sLNames && sLNames[i])
    table[i].name = sLNames[i];
 }
 return table.downcast();
}
let dotProduct=function(nl1, nl2) {
 let sum = 0;
 let i;
 let nElements = Math.min(nl1.length, nl2.length);
 for(i = 0; i < nElements; i++) {
   sum += nl1[i] * nl2[i];
 }
 return sum;
}
let linearRegression=function(nlX, nlY, returnType) {
 returnType = returnType == null || returnType > 2 ? 0:returnType;
 let nlR = new nL();
  if(nlX == null ||
    (nlY != null && nlX.length != nlY.length) ||
    nlX.length === 0)
   return returnType===0?nlR:new P();
  if(nlY==null){
   nlY = nlX;
   nlX = createSortedNumberList(nlX.length, 0, 1);
 }
  var sumx=0,sumy=0,sumx2=0,sumxy=0,sumy2=0;
  var n = nlX.length;
 for(var i = 0; i < n; i++) {
   sumx += nlX[i];
   sumy += nlY[i];
   sumx2 += nlX[i]*nlX[i];
   sumxy += nlX[i]*nlY[i];
   sumy2 += nlY[i]*nlY[i];
 }
 let denominator = n*sumx2 - sumx*sumx;
 let slope = denominator===0?0 : (n * sumxy - sumx * sumy) / denominator;
 if(returnType==2) return slope
  var intercept = (sumy / n) - (slope * sumx) / n;
 if(returnType==1)
   return new P(slope,intercept);
 let r2 = Math.pow((n*sumxy - sumx*sumy)/Math.sqrt((n*sumx2-sumx*sumx)*(n*sumy2-sumy*sumy)),2);
 nlR.push(slope);
 nlR.push(intercept);
 nlR.push(r2);
 nlR.push(n);
 return nlR;
}
let distance=function(nl1, nl2, distanceMetric) {
 if(nl1==null || nl2==null) return;
 let sum = 0;
 let i;
 let nElements = Math.min(nl1.length, nl2.length);
 distanceMetric = distanceMetric == null ? 'euclidean' : distanceMetric;
 distanceMetric = distanceMetric.toLowerCase();
 if(distanceMetric == 'cosine')
   return (1 - cosineSimilarity(nl1,nl2));
 if(distanceMetric == 'manhattan'){
   for(i = 0; i < nElements; i++) {
     sum += Math.abs(nl1[i] - nl2[i]);
   }
   return sum;
 }
 if(distanceMetric != 'euclidean')
   throw new Error('Invalid distanceMetric.');
 // euclidean
 for(i = 0; i < nElements; i++) {
   sum += Math.pow(nl1[i] - nl2[i], 2);
 }
 return Math.sqrt(sum);
}
let cosineSimilarity=function(nl0, nl1, norm0, norm1) {
 norm0 = norm0==null?nl0.getNorm():norm0;
 norm1 = norm1==null?nl1.getNorm():norm1;
 let norms = norm0 * norm1;
 if(norms === 0) return 0;
 return dotProduct(nl0, nl1) / norms;
}
let covariance=function(nl0, nl1,bUseInfoObject) {
 if(nl0==null || nl1==null) return;
  var l = Math.min(nl0.length, nl1.length);
 let i,av0,av1,s=0;
 if(bUseInfoObject && nl0.infoObject)
    av0 = nl0.infoObject.average;
 else
   av0 = nl0.mean!=null?nl0.mean:nl0.getMean();
 
 if(bUseInfoObject && nl1.infoObject)
   av1 = nl1.infoObject.average;
 else
   av1 = nl1.mean?nl1.mean:nl1.getMean();
  for(i = 0; i<l; i++) {
   s += (nl0[i] - av0)*(nl1[i] - av1);
 }
  return s/l;
}
let standardDeviationTwoNumberLists=function(nl0, nl1) {
 if(nl0==null || nl1==null) return;
 let s = 0;
 let l = Math.min(nl0.length, nl1.length);
 let i;
  for(i = 0; i < l; i++) {
   s += Math.pow(nl0[i] - nl1[i], 2);
 }
  return s/l;
}
let numericCorrelation=function(nl0, nl1, sd0, sd1) {
 if(nl0==null || nl1==null) return;
 if(nl0?.infoObject?.standardDeviation) sd0 = nl0.infoObject.standardDeviation;
 if(nl1?.infoObject?.standardDeviation) sd1 = nl1.infoObject.standardDeviation;
 if(nl0?.standardDeviation) sd0 = nl0.standardDeviation;
 if(nl1?.standardDeviation) sd1 = nl1.standardDeviation;
 if(sd0==null) sd0 = nl0.getStandardDeviation();
 if(sd1==null) sd1 = nl1.getStandardDeviation();
 let stndDeviations = sd0*sd1;//nl0.getStandardDeviation() * nl1.getStandardDeviation();
 if(stndDeviations===0) return 0;
 return covariance(nl0, nl1) / stndDeviations;
}
let slidingWindowCorrelation=function(nl0, nl1, nPoints) {
 if(nl0==null || nl1==null || nl0.length != nl1.length) return;
 if(nPoints == null || isNaN(nPoints) || nPoints < 1)
   nPoints = 5;
 nPoints = Math.round(nPoints);
  var i,j,nLt0,nLt1,corr;
 let len = nl0.length;
 let nLResult = new nL();
 for(i=0;i<len;i++){
   nLt0 = new nL();
   nLt1 = new nL();
   for(j=Math.max(0,i-nPoints); j <= i+nPoints; j++){
     if(j<0 || j >= len) continue;
     nLt0.push(nl0[j]);
     nLt1.push(nl1[j]);
   }
   corr = numericCorrelation(nLt0,nLt1);
   nLResult.push(corr);
 }
 return nLResult;
}
let normalizeToSum=function(numberlist, factor, sum) {
 if(numberlist==null) return;
 
 factor = factor == null ? 1 : factor;
 let newNumberList = new nL();
 newNumberList.name = numberlist.name;
 if(numberlist.length === 0) return newNumberList;
 let i;
 sum = sum == null ? numberlist.getSum() : sum;
 if(sum === 0) return numberlist.clone();
  factor/=sum;
  for(i = 0; i < numberlist.length; i++) {
   //newNumberList.push(factor * numberlist[i] / sum);
   newNumberList[i] = factor*numberlist[i];
 }
 return newNumberList;
}
let normalizeByZScore=function(numberlist, mean, sd) {
 if(numberlist==null) return;
 if(numberlist.length === 0) return null;
  var i;
    mean = mean||numberlist.getMean();
 let stddev = sd||numberlist.getStandardDeviation(mean);
 if(stddev===0) stddev=1; // all returned values will be zero
  var newNumberList = new nL();
 for(i = 0; i < numberlist.length; i++) {
   newNumberList.push((numberlist[i] - mean) / stddev);
 }
 newNumberList.name = numberlist.name;
 return newNumberList;
}
let normalizeToMax=function(numberlist, factor) {
 if(numberlist==null) return;
 
 factor = factor == null ? 1 : factor;
  if(numberlist.length === 0) return null;
  var max = numberlist.getMax();
 if(max === 0) {
   max = numberlist.getMin();
   if(max === 0) return createListWithSameElement(numberlist.length, 0);
 }
 let newNumberList = new nL();
 for(var i = 0; numberlist[i] != null; i++) {
   newNumberList.push(factor * (numberlist[i] / max));
 }
 newNumberList.name = numberlist.name;
 return newNumberList;
}
let normalizeToInterval=function(numberlist, interval) {
 if(numberlist==null || interval==null || numberlist.length === 0) return;
 interval = interval==null?numberlist.getInterval():interval
  var i;
 let nlInterval = numberlist.getInterval();
 let nLAmplitude = nlInterval.getAmplitude();
 if(nLAmplitude===0) return ListGenerators.createListWithSameElement (numberlist.length, interval.x, numberlist.name);
 let amplitude = interval.getSignedAmplitude();
 let factor = amplitude/nLAmplitude;
 let newNumberList = new nL();
 for(i = 0; i < numberlist.length; i++) {
   newNumberList.push( interval.x + factor*(numberlist[i] - nlInterval.x) );
 }
 newNumberList.name = numberlist.name;
 return newNumberList;
}
let trimNumberList=function(numberlist, min, max) {
 return numberlist.trim(min, max);
 // var newNumberList = new nL();
 // for(var i = 0; i < numberlist.length; i++) {
 //   newNumberList[i] =  min==null?numberlist[i]:Math.max(min, numberlist[i]);
 //   if(max!=null) newNumberList[i] =  Math.min(max, newNumberList[i]);
 // }
 // return newNumberList;
}
let getAccumulativeSum=function(numberlist) {
 if(numberlist==null || numberlist.length === 0) return;
  var newNumberList = new nL();
  newNumberList[0] = numberlist[0];
  for(var i = 1; i < numberlist.length; i++) {
   newNumberList[i] = numberlist[i] + newNumberList[i-1];
 }
  return newNumberList;
}
let shorten=function(nl, newLength) {
 if(nl==null) return null;
 if(newLength==null || newLength>=nl.length) return nl;
  var windowSize = nl.length/newLength;
 let newNumberList = new nL();
 let windowSizeInt = Math.floor(windowSize);
 let val;
 let i, j, j0;
  newNumberList.name = nl.name;
  for(i=0; i<newLength; i++){
   j0 = Math.floor(i*windowSize);
   val = 0;
   for(j=0; j<windowSizeInt; j++){
     val += nl[j0+j];
   }
   newNumberList[i] = val/windowSizeInt;
 }
 return newNumberList;
}
let simplify=function(nl, method, param) {
 if(nl==null) return;
  method = method||0;
 param = param||0;
  var newList = new nL();
 newList.name = nl.name;
   switch(method){
   case 0:
     var power = Math.pow(10, param);
     nl.forEach(function(val){
       newList.push(Math.floor(val/power)*power);
     });
     break;
   case 1:
     //deploy quantiles first (optional return of n percentile, min value, interval, numberTable with indexes, numberTable with values)
     break;
 }
  return newList;
}
let segmentNumberList=function(nL,limits,mode) {
   if(nL == null || limits == null) return null;
   mode = mode==null?0:mode;
    var ranges = mode==0?new nL():new sL();
   ranges.name = "segments "+nL.name;
   for(var i=0;i<nL.length;i++){
       var ranged = false;
       for(var j=0;j<limits.length;j++){
           if(nL[i]<limits[j]){
               ranged=true;
               ranges[i] = mode==0?j:( j==0?"<"+limits[j]:limits[j-1]+"-"+limits[j] );
               break;
           }
       }
       if(!ranged) ranges[i] = mode==0?limits.length:">="+limits.at(-1);
   }
   return ranges;
}

let averageSmoother=function(nl, intensity, nIterations) {
 if(nl==null) return;
  nIterations = nIterations == null ? 1 : nIterations;
 intensity = intensity == null ? 0.1 : intensity;
  intensity = Math.max(Math.min(intensity, 0.5), 0);
 intensity *= 0.6; // we can get rippling if intensity is too high
 let n = nl.length;
  var list1 = nl.clone();
 let list2 = nl.clone();
 let i,j;
  // Use values in L1 to construct smoothed values in L2
 // alternate lists so we don't need to copy full list back and forth
 let L1,L2,nNeighbors,val;
 for(i = 0; i < nIterations; i++) {
   L1 = i % 2 ? list2 : list1;
   L2 = i % 2 ? list1 : list2;
   for(j = 0; j < n; j++){
     val = 0;
     nNeighbors = 0;
     if(j - 1 >= 0){
       nNeighbors++;
       val += L1[j-1] * intensity;
     }
     if(j + 1 < n){
       nNeighbors++;
       val += L1[j+1] * intensity;
     }
     L2[j] = val + L1[j] * (1 - nNeighbors*intensity);
   }
 }
  return L2;
}
let closestValue=function(nl, value, returnValue, mode) {
 if(nl==null) return;
 returnValue = returnValue==null?true:returnValue;
  var dMin = Math.abs(nl[0]-value);
 let iMin = 0;
 let d;
  for(var i=1; i<nl.length; i++){
   d = Math.abs(nl[i]-value);
   if(d<dMin){
     if(mode==1 && nl[i]>value || mode==2 && nl[i]<value || mode==3 && nl[i]>=value || mode==4 && nl[i]<=value) continue;
     dMin=d;
     iMin = i;
   }
 }
 return returnValue?nl[iMin]:iMin;
}
let filterNumberListByInterval=function(nl, min, max, includeMin, includeMax, returnMode) {
 return null;
}
let filterNumberListByNumber=function(nl, value, comparisonOperator, returnIndexes) {
 returnIndexes = returnIndexes || false;
 let newNumberList = new nL();
 let i;
  if(returnIndexes) {
   switch(comparisonOperator) {
     case "<":
       for(i = 0; nl[i] != null; i++) {
         if(nl[i] < value) {
           newNumberList.push(i);
         }
       }
       break;
     case "<=":
       for(i = 0; nl[i] != null; i++) {
         if(nl[i] <= value) {
           newNumberList.push(i);
         }
       }
       break;
     case ">":
       for(i = 0; nl[i] != null; i++) {
         if(nl[i] > value) {
           newNumberList.push(i);
         }
       }
       break;
     case ">=":
       for(i = 0; nl[i] != null; i++) {
         if(nl[i] >= value) {
           newNumberList.push(i);
         }
       }
       break;
     case "==":
       for(i = 0; nl[i] != null; i++) {
         if(nl[i] == value) {
           newNumberList.push(i);
         }
       }
       break;
     case "!=":
       for(i = 0; nl[i] != null; i++) {
         if(nl[i] != value) {
           newNumberList.push(i);
         }
       }
       break;
   }
  } else {
   switch(comparisonOperator) {
     case "<":
       for(i = 0; nl[i] != null; i++) {
         if(nl[i] < value) {
           newNumberList.push(nl[i]);
         }
       }
       break;
     case "<=":
       for(i = 0; nl[i] != null; i++) {
         if(nl[i] <= value) {
           newNumberList.push(nl[i]);
         }
       }
       break;
     case ">":
       for(i = 0; nl[i] != null; i++) {
         if(nl[i] > value) {
           newNumberList.push(nl[i]);
         }
       }
       break;
     case ">=":
       for(i = 0; nl[i] != null; i++) {
         if(nl[i] >= value) {
           newNumberList.push(nl[i]);
         }
       }
       break;
     case "==":
       for(i = 0; nl[i] != null; i++) {
         if(nl[i] == value) {
           newNumberList.push(nl[i]);
         }
       }
       break;
     case "!=":
       for(i = 0; nl[i] != null; i++) {
         if(nl[i] != value) {
           newNumberList.push(nl[i]);
         }
       }
       break;
   }
 }
  return newNumberList;
}
let frameFromTwoNumberLists=function(nlX, nlY){
 if(nlX==null || nlY==null) return;
 let intX = nlX.getInterval();
 let intY = nlY.getInterval();
 return new Rec(intX.x, intY.x, intX.getAmplitude(), intY.getAmplitude());
}
let rangeCounts=function(nl, nBins, interval, mode){
 if(nl==null) return;
 nBins = nBins == null ? 10 : nBins;
 
 mode = mode || 0;
 let nLCounts = mode==1?[]:createListWithSameElement(nBins,0);
 interval = interval==null ? nl.getInterval() : interval;
 if(interval == null)
   return nLCounts;
 let amp = interval.y-interval.x;
 let bin,len=nl.length;
 let binIndexes = new nL();
 for(var i=0;i<len;i++){
   bin = Math.min(Math.floor(nBins*(nl[i] - interval.x)/amp),nBins-1);
   binIndexes[i] = bin;
   if(mode===0) nLCounts[bin]++;
 }
 if(mode==1) return binIndexes;
 return nLCounts;
}

let simpleCompression=function(nl, compress){
 if(nl==null) return null;
  compress = compress==null?true:compress;
  var i;
 let newNl = new nL();
 newNl.name = nl.name;
  if(nl.length===0) return newNl;
  newNl[0] = nl[0];
  if(compress){
   for(i=1; i<nl.length; i++){
     newNl[i] = nl[i]-nl[i-1]-1;
   }
 } else {
   for(i=1; i<nl.length; i++){
     newNl[i] = newNl[i-1]+nl[i]+1;
   }
 }
 return newNl;
}

let regression=function(nlY, nlX, method, order) {
 if(nlY == null || nlY.length == 0) return null;
 if(nlX == null)
   nlX = createSortedNumberList(nlY.length,1); 
 method = method == null ? 'linear' : method;
 if(typeof method != 'string' || 
   (method != 'linear' && method != 'exponential' && method != 'logarithmic' && method != 'power' && method != 'polynomial') )
   throw new Error('Invalid method in NumberListOperators.regression: ' + method);
 order = order == null ? 2 : order;
 
 // make paired array using data
 let data = [];
 for(var i=0;i<nlX.length;i++){
   data.push([nlX[i],nlY[i] == null ? null : nlY[i]]);
 }
 let result = _Regression(method, data, order, {precision:3});
  var nLY = new nL(); nLY.name = method + ' Regression Series';
 for(i=0; i<result.points.length; i++){
   nLY.push(result.points[i][1]);
 }
  var nLCoeff = nL.toL(result.equation);
 nLCoeff.name = 'Coefficients';
  return [
   {
     type: "nL",
     name: "Y Results",
     description: "Y Results are the forecasted values",
     value: nLY
   },
   {
     type: "nL",
     name: "Coefficients",
     description: "Coefficients of the regression equation",
     value: nLCoeff
   },
   {
     type: "String",
     name: "Equation",
     description: "Equation in string form",
     value: result.string
   },
   {
     type: "Number",
     name: "R^2",
     description: "R^2 value",
     value: result.r2
   },
   {
     type: "Function",
     name: "fnModel",
     description: "Function that takes input and calculates output based on model",
     value: result.func
   }
 ];
}
let getDecimalsInterval=function(nl){
 if(nl == null) return null;
 let intDecimals = new I(0,0);
 let i,d;
 for(i = 0;i < nl.length; i++){
   d = decimalPlaces(nl[i]);
   intDecimals.adjustToContain(d);
 }
 return intDecimals;
}
let setDecimals=function(nl,nDecimals){
 if(nl == null) return null;
 let i,d;
 if(nl.isTable){
   var nT = instanceSameType(nl);
   nT.name = nl.name;
   for(i = 0;i < nl.length; i++){
     if(nl[i].type == 'nL')
       nT.push(setDecimals(nl[i],nDecimals));
     else
       nT.push(nl[i].clone());
   }
   return nT;
 }
 let newList = new nL();
 newList.name = nl.name;
 for(i = 0;i < nl.length; i++){
   d = nl[i] == null ? null : Number(nl[i].toFixed(nDecimals));
   newList.push(d);
 }
 return newList;
}

let getDistributionHeights=function(nL,mode,nBins) {
   if(nL == null) return null;
   mode = (mode == null || mode != 1) ? 0 : mode;
   nBins = nBins == null ? 50 : nBins;
   var i,y,count;
   var nLBinCounts = rangeCounts(nL,nBins,null,0);
   var nLBin = rangeCounts(nL,nBins,null,1);
   var nLY = new nL();
   randomSeed(1);
   for(i=0;i<nL.length;i++){
       count = nLBinCounts[nLBin[i]];
       if(mode == 0){
         y = count - 1; //want it to start at bottom when plotted
         nLBinCounts[nLBin[i]]--;
       }
       else
         y = random()*count;
       nLY.push(y);
   }
   randomSeedPop();
   return nLY;
}
let kNearestNeighbours=function(nT, nL, k, mode, bItemsInColumns, distanceMetric, bFindFarthest) {
 if(nT == null || nL == null || nT.length == 0) return;
 k = k == null ? 1 : k;
 mode = mode == null ? 0 : mode;
 bItemsInColumns = bItemsInColumns == null ? false : bItemsInColumns;
 bFindFarthest = bFindFarthest == null ? false : bFindFarthest;
 let bInsideInput = typeof nL == 'number';
 let iRowInside;
  if(!bItemsInColumns)
   nT = nT.transpose();
 if(bInsideInput){
   if(nL < 0 || nL >= nT.length || Math.floor(nL) != nL)
     throw new Error('Invalid value for second inlet.');
   iRowInside = nL;
   nL = nT[iRowInside];
 }
 if(nL.length != nT[0].length) throw new Error('The input nl must have the same number of values as columns of the numberTable.');
 let nTDistances = new nT();
 nTDistances.push(new nL());
 nTDistances.push(new nL());
 nTDistances.assignNames('index,distance');
 for(var i=0;i < nT.length; i++){
   if(bInsideInput && i == iRowInside) continue;
   nTDistances[0].push(i);
   nTDistances[1].push(distance(nT[i],nL,distanceMetric));
 }
 nTDistances = nTDistances.sortRowsByList(1,!bFindFarthest,true);
 nTDistances = nTDistances.sliceRows(0,k-1);
 if(mode == 0)
   return nT.getColumns(nTDistances[0]);
 else if(mode == 1)
   return nTDistances[0];
 return nTDistances;
}
let skewness=function(nL, mode){
 if(nL==null) return;
 let mean = nL.getMean();
 mode = mode==null?0:mode;
  if(mode>=2){
   return Math.log2(mean/nL.getMedian());
 }
  var sd = nL.getStandardDeviation();
 if(sd==0) return 0;
  switch(mode){
   case 0:
     var s = 0;
     for(var i=0;i<nL.length;i++){
         s += Math.pow(nL[i]-mean,3);
     }
     return s/nL.length/Math.pow(sd,3);
   case 1:
     if(sd==0) return 0;
     var s = 0;
     for(var i=0;i<nL.length;i++){
         s += Math.pow(nL[i]-mean,3);
     }
     var b1 = s/nL.length/Math.pow(sd,3);
     var n=nL.length;
     return n*n/((n-1)*(n-2))*b1;
 }
}

let TableToObject=function(table, fields) { // To-Do: should return a L instead of Array?
   if(!table)
     return;
    // If no field names supplied, take them from first element
   if(!fields)
   {
     fields = table.getNames();
   }
   var result = [];
   for(var i = 0; i < table[0].length; i++) {
     var row = {};
     for(var f = 0; f < fields.length; f++)
     {
       row[fields[f]] = table[f][i];
     }
     result.push(row);
   }
   return {
     array: result
   };
}
let ArrayOfArraysToTable=function(arrayOfArrays) {
 if(arrayOfArrays===null || !isArray(arrayOfArrays)) return;
  var l = arrayOfArrays.length;
 let i;
 let table = new T();
  for(i=0; i<l; i++){
   if(isArray(arrayOfArrays[i])) table.push(L.toL(arrayOfArrays[i]).downcast());
 }
  return table.downcast();
}
let tableToHtml=function(table,maxRows,styleTable,styleCol,styleRow,styleRowOdd,tCellStyles,bRenderImageURLs,nLColsWithBars,clrBar) {
 if(table==null) return;
 if(table.length == 0) return '';
  if(!table.isTable && (table.isList || Array.isArray(table))){
   // we have a single list, wrap it and continue
   var temp = new T();
   temp.push(table);
   table = temp;
 }
 styleTable = styleTable == null ? 'font-family: arial, sans-serif; border-collapse: collapse; width: 100%;' : styleTable;
 styleCol = styleCol == null ? 'border:1px solid rgba(200,200,200,.5); text-align: left; padding: 4px;' : styleCol;
 styleRow = styleRow == null ? 'background-color: #ffffff;' : styleRow;
 styleRowOdd = styleRowOdd == null ? 'background-color: #f0f0f0;' : ( styleRowOdd == 'same' ? styleRow : styleRowOdd );
 maxRows = maxRows == null ? table[0].length : Math.min(maxRows,table[0].length);
 bRenderImageURLs = bRenderImageURLs == null ? true : bRenderImageURLs;
 clrBar = clrBar == null ? 'rgba(100,160,255,.5)' : clrBar;
  var std = (typeof styleCol =='string') ? '<td style="' + styleCol + '">' : '';
 let str = '<tr style="' + styleRow + '">';
 let strOdd = '<tr style="' + styleRowOdd + '">';
  var sHTML = '';
 let fnGetHTMLBarIndicator,cs;
 if(nLColsWithBars){
   fnGetHTMLBarIndicator = function(p,pMax,clr){
     if(pMax == 0) pMax = 1;
     var ip = Math.max(0,Math.round(100*p/pMax));
     var sHtml = '<div style="background-color: #eee; width:100%; border-style: solid; border-width: 1px; border-color:#aaa; display: inline-block;">';
     sHtml += '<div style="background-color:' + clr + '; width:' + ip + '%; height: 100%; font-size:14px; color:black;">';
     sHtml += '&nbsp;'+p+'</div></div>';
     return sHtml;
   }
   buildInformationObjectForTable(table); // to get min/max for numberlists
 }
 let c,r;
 // headers
 sHTML += '<table style="' + styleTable + '">';
 // if all column names are empty then do not show column header row
 let bShowHeaders = false;
 for(c=0; c < table.length; c++){
   if(table[c].name != '' && table[c].name != null){
     bShowHeaders = true;
     break;
   }
 }
 if(bShowHeaders){
   sHTML += str;
   for(c=0; c < table.length; c++){
     if(styleCol.isList)
       std = '<td style="' + styleCol[c] + '">'
     sHTML += std + '<b>'+ (table[c].name == '' ? 'Column ' + (c+1) : table[c].name) + '</b></td>';
   }
   sHTML += '</tr>';
 }
 for(r=0; r < maxRows; r++){
   if(r % 2 == 1) // shifted 1 by header
     sHTML += str;
   else
     sHTML += strOdd;
   for(c=0; c < table.length; c++){
     if(tCellStyles && tCellStyles[c] != null && tCellStyles[c][r] != null && tCellStyles[c][r] != '')
       sHTML += '<td style="' + tCellStyles[c][r] + '">';
     else{
       if(styleCol.isList)
         std = '<td style="' + styleCol[c] + '">'
       sHTML += std;
     }
     
     if(bRenderImageURLs){
       var s = table[c][r] == null ? '' : String(table[c][r]).toLowerCase();
       if(s.indexOf('http') == 0 &&
          (s.indexOf('.jpg') != -1 || s.indexOf('.jpeg') != -1 || s.indexOf('.png') != -1 || s.indexOf('photo') != -1 || s.indexOf('image') != -1) ){
         // image (not a perfect test)
         sHTML += '<img src="' + table[c][r] + '" width=200>';
         continue;
       }
     }
     if(table[c].type == 'nL' && (nLColsWithBars == 'all' || (nLColsWithBars && nLColsWithBars.indexOf(c) != -1) ) ){
       if(clrBar && clrBar.type == 'cL' && clrBar.length == table[0].length)
         sHTML += fnGetHTMLBarIndicator(table[c][r],table[c].infoObject.max,clrBar[r]);
       else
         sHTML += fnGetHTMLBarIndicator(table[c][r],table[c].infoObject.max,clrBar);
     }
     else
       sHTML += table[c][r];
     sHTML += '</td>';
   }
   sHTML += '</tr>'
 }
 sHTML += '</table>';
 return sHTML;
}
let tableToList=function(table) {
 if(table == null) return;
 // in future provide option to concat rows together
 let list = new L();
 for(var i=0;i<table.length;i++)
   list = list.concat(table[i]);
 return list.downcast();
}
let createColorScaleFromColors=function(colorList, positions) {
 if(colorList == null ) return null;
 if(colorList.length==1){
   cS = function(t){return colorList[0]};
 } else if(colorList.length==2){
   colorList.rgbs = colorList.getRgbArrays();
   var cS = function(t) {
     var antit = 1 - t;
     return 'rgb(' +
         Math.floor( antit*colorList.rgbs[0][0] + t*colorList.rgbs[1][0] ) + ',' +
         Math.floor( antit*colorList.rgbs[0][1] + t*colorList.rgbs[1][1] ) + ',' +
         Math.floor( antit*colorList.rgbs[0][2] + t*colorList.rgbs[1][2] ) + ')';
   };
    return cS;
 }
  //if(positions == null || colorList.length <= 0 || positions.length <= 0 || colorList.length != (positions.length + 2)) return null;
  if(positions==null){
   var step = 1/(colorList.length-1);
   positions = createSortedNumberList(colorList.length-2, step, step);
 }
  if(colorList.rgbs == null) {
   colorList.rgbs = colorList.getRgbArrays();
 }
  positions = positions.slice();
 positions.unshift(0);
 positions.push(1);
  var cS = function(t) {
   var i;
   var intert, antit;
   for(i = 0; positions[i + 1] != null; i++) {
     if(t <= positions[i + 1]) {
       intert = (t - positions[i]) / (positions[i + 1] - positions[i]);
       antit = 1 - intert;
      return 'rgb(' +
        Math.floor( antit*colorList.rgbs[i][0] + intert*colorList.rgbs[i+1][0] ) + ',' +
        Math.floor( antit*colorList.rgbs[i][1] + intert*colorList.rgbs[i+1][1] ) + ',' +
        Math.floor( antit*colorList.rgbs[i][2] + intert*colorList.rgbs[i+1][2] ) + ')';
     }
   }
 };
  return cS;
}
let blackScale=function() {
 return 'black';
}
let grayscale=function(value) {
 let rgb = interpolateColorsRGB([0, 0, 0], [255, 255, 255], value);
 return RGBtoHEX(rgb[0], rgb[1], rgb[2]);
}
let antiGrayscale=function(value) {
 let rgb = interpolateColorsRGB([255, 255, 255], [0, 0, 0], value);
 return RGBtoHEX(rgb[0], rgb[1], rgb[2]);
}
let antiTemperature=function(value) {
 return temperature(1 - value);
}
let temperature=function(value) { //todo:make it efficient
 let color = "#FFFFFF";
 if(value < 0.2) {
   color = interpolateColors('#000000', HSVtoHEX(234, 1, 1), value * 5);
 } else if(value > 0.85) {
   color = interpolateColors(HSVtoHEX(0, 1, 1), '#FFFFFF', (value - 0.85) / 0.15);
 } else {
   color = HSVtoHEX(Math.round((0.65 - (value - 0.2)) * 360), 1, 1);
 }
 return color;
}
let lightTemperature=function(value) {
 return temperature(0.1+value*0.9);
}
let sqrtTemperature=function(value) {
 return temperature(Math.sqrt(value));
}
let sqrt4Temperature=function(value) {
 return temperature(Math.pow(value, 0.25));
}
let quadraticTemperature=function(value) {
 return temperature(Math.pow(value, 2));
}
let cubicTemperature=function(value) {
 return temperature(Math.pow(value, 3));
}
let greenToRed=function(value) { //todo:make it efficient
 let rgb = interpolateColorsRGB([50, 255, 50], [255, 50, 50], value);
 return RGBtoHEX(rgb[0], rgb[1], rgb[2]);
}
let greenToBlue=function(value) { //todo:make it efficient
 let rgb = interpolateColorsRGB([50, 255, 50], [50, 50, 255], value);
 return RGBtoHEX(rgb[0], rgb[1], rgb[2]);
}
let grayToOrange=function(value) {
 return 'rgb(' + Math.floor(100 + value*155) + ','+ Math.floor(100 + value*10) +',' + Math.floor(100 - value*100) + ')';
}
let sqrt4GrayToOrange=function(value){
 return grayToOrange(Math.pow(value, 0.25));
}
let blueToRed=function(value) {
 return 'rgb(' + Math.floor(value * 255) + ',0,' + Math.floor((1 - value) * 255) + ')';
}

let whiteToRed=function(value) {
 let gg = Math.floor(255 - value * 255);
 return 'rgb(255,' + gg + ',' + gg + ')';
}
let redToBlue=function(value) {
 let rgb = interpolateColorsRGB([255, 0, 0], [0, 0, 255], value);
 return RGBtoHEX(rgb[0], rgb[1], rgb[2]);
}
let greenWhiteRed=function(value) { //TODO: make it + efficient
 let rgb = [0,0,0];
 if(value < 0.5) {
   rgb = interpolateColorsRGB([50, 255, 50], [255, 255, 255], value * 2);
 } else {
   rgb = interpolateColorsRGB([255, 255, 255], [255, 50, 50], (value - 0.5) * 2);
 }
 return 'rgb('+rgb[0]+','+rgb[1]+','+rgb[2]+')';
}
let blueWhiteRed=function(value) {
 let rr = value < 0.5 ? Math.floor(510 * value) : 255;
 let gg = value < 0.5 ? Math.floor(510 * value) : Math.floor(510 * (1 - value));
 let bb = value < 0.5 ? 255 : Math.floor(510 * (1 - value));
  return 'rgb(' + rr + ',' + gg + ',' + bb + ')';
}
let blueBlackRed=function(value) {
 let rr = value < 0.5 ? 0 : Math.floor(512*(value-0.5));
 let gg = 0;
 let bb = value < 0.5 ? Math.floor(255 - 512*value) : 0;
  return 'rgb(' + rr + ',' + gg + ',' + bb + ')';
}
let grayBlackOrange=function(value){ //TODO: make it + efficient
 let rgb = [0,0,0];
 if(value < 0.5) {
   rgb = interpolateColorsRGB([100, 100, 100], [0, 0, 0], value * 2);
 } else {
   rgb = interpolateColorsRGB([0, 0, 0], [255, 110, 0], (value - 0.5) * 2);
 }
 return 'rgb('+rgb[0]+','+rgb[1]+','+rgb[2]+')';
}
let grayWhiteOrange=function(value){ //TODO: make it + efficient
 let rgb = [0,0,0];
 if(value < 0.5) {
   rgb = interpolateColorsRGB([100, 100, 100], [255, 255, 255], value * 2);
 } else {
   rgb = interpolateColorsRGB([255, 255, 255], [255, 110, 0], (value - 0.5) * 2);
 }
 return 'rgb('+rgb[0]+','+rgb[1]+','+rgb[2]+')';
}
let solar=function(value) {
 let rgb = interpolateColorsRGB([0, 0, 0], interpolateColorsRGB([255, 0, 0], [255, 255, 0], value), Math.pow(value * 0.99 + 0.01, 0.2));
 return RGBtoHEX(rgb[0], rgb[1], rgb[2]);
}
let antiSolar=function(value) {
 return invertColor(solar(value));
}
let get=function(list, indexOrName){
 return list.get(indexOrName);
}
let getFirstElements=function(list, fromIndex) {
 if(list == null){
   fromIndex = 0;
   // to clear all the outputs insted of just the first
   list = [null,null,null,null,null,null,null,null,null,null];
 }
  fromIndex = fromIndex == null ? 0 : Number(fromIndex);
  return [
 {
   type: "Object",
   name: "first value",
   description: "first value",
   value: list[fromIndex + 0]
 },
 {
   type: "Object",
   name: "second value",
   description: "second value",
   value: list[fromIndex + 1]
 },
 {
   type: "Object",
   name: "third value",
   description: "third value",
   value: list[fromIndex + 2]
 },
 {
   type: "Object",
   name: "fourth value",
   description: "fourth value",
   value: list[fromIndex + 3]
 },
 {
   type: "Object",
   name: "fifth value",
   description: "fifth value",
   value: list[fromIndex + 4]
 },
 {
   type: "Object",
   name: "sixth value",
   description: "sixth value",
   value: list[fromIndex + 5]
 },
 {
   type: "Object",
   name: "seventh value",
   description: "seventh value",
   value: list[fromIndex + 6]
 },
 {
   type: "Object",
   name: "eight value",
   description: "eight value",
   value: list[fromIndex + 7]
 },
 {
   type: "Object",
   name: "ninth value",
   description: "ninth value",
   value: list[fromIndex + 8]
 },
 {
   type: "Object",
   name: "tenth value",
   description: "tenth value",
   value: list[fromIndex + 9]
 }];
}
let containSameElements=function(list0, list1) {
 if(list0==null || list1==null) return null;
  var l = list0.length;
 let i;
  if(l!=list1.length) return;
  for(i=0; i<l; i++){
   if(list0[i]!=list1[i]) return false;
 }
  return true;
}
let fractionOfSameElements=function(list0, list1) {
 if(list0==null || list1==null) return null;
  var l = Math.max(list0.length,list1.length);
 let i;
 let n=0;
 for(i=0; i<l; i++){
   if(list0[i]==list1[i])
     n++;
 }
 if(l==0) return 0;
 return n/l;
}
let getCorrespondenceBetweenLists=function(list0, list1, valSame, valDiff) {
 if(list0==null || list1==null) return null;
 if(list0.length != list1.length)
   throw new Error('The two lists must be the same length');
 valDiff = valDiff == null ? false : valDiff;
  var newList = new L();
 let l = Math.max(list0.length,list1.length);
 let i;
 for(i=0; i<l; i++){
   if(list0[i] == list1[i])
     newList.push(valSame == null ? list0[i] : valSame);
   else
     newList.push(valDiff);
 }
 return newList.downcast();;
}
let getConfusionMatrix=function(lista, listp) {
 if(lista==null || listp==null) return null;
 if(lista.length != listp.length)
   throw new Error('The two lists must be the same length');
  var listAll = union(lista,listp).getWithoutRepetitions().getSorted();
 let oCounts = {};
 let i,j,c = '-|-';
  for(i=0; i < listAll.length; i++){
   for(j=0; j < listAll.length; j++){
     oCounts[listAll[i] + c + listAll[j]] = 0;
   }
 }
  for(i = 0; i < lista.length; i++){
   oCounts[lista[i] + c + listp[i]]++;
 }
  var t = new T();
 t.name = 'Confusion Mx';
 for(i=0; i <= listAll.length; i++){
   if(i == 0){
     t.push(new sL());
     t[i].name = 'Predicted Class';
   }
   else{
     t.push(new nL());
     t[i].name = 'Actual:'+listAll[i-1];
   }
   for(j=0; j < listAll.length; j++){
     if(i == 0)
       t[i].push(listAll[j]);
     else
       t[i].push(oCounts[listAll[i-1] + c + listAll[j]]);
   }
 }
 return t;
}

let indexOf=function(list, element) {
 if(list==null) return;
 return list.indexOf(element);
}
let replaceElement=function(list, elementToSearch, elementToPlace){
 if(list==null || elementToSearch==null) return null;
  var newList = new L();
 newList.name = list.name;
 let l = list.length;
 let i;
 for(i=0; i<l; i++){
   newList[i] = (list[i]==elementToSearch)?elementToPlace:list[i];
 }
 return newList.downcast();
}
let replaceElementAtIndex=function(list, index, elementToPlace){
 if(list==null || elementToPlace==null) return null;
 index = index == null ? 0 : index;
  if(typeof index != 'number' || index % 1 != 0 || index < 0 || index >= list.length)
   throw new Error('Invalid index in replaceElement');
  var newList = list.clone();
 newList[index] = elementToPlace;
 return newList.downcast();
}
let replaceNullsInList=function(list, mode, element, nullElement){
 if(list==null || mode==null) return;
  if(mode===0 && element==null){
   throw new Error("when mode is 0, must provide a non-null element to replace nulls");
 }
  var n = list.length;
 let i;
 let average = 0;
 let nNumbers = 0;
 let previous;
 let next;
 let factor;
 let newList = new L();
 let i0, i1;
  switch(mode){
   case 6://most common element
     element = list.getWithoutElement(null).getMode();
     return replaceNullsInList(list, 0, element);
   case 3://average
     for(i=0; i<n; i++){
       if(typeof list[i] == 'number'){
         average+=list[i];
         nNumbers++;
       }
     }
     element = average/nNumbers;
     return replaceNullsInList(list, 0, element);
   case 7://median
     element = list.getWithoutElement(null).getSorted();
     if(element.length>1 && element.length/2 == Math.floor(element.length/2)){
       element = (element[(element.length/2)-1]+element[element.length/2])*0.5
     } else {
       element = element[Math.floor(element.length/2)];
     }
   case 0://element
     for(i=0; i<n; i++){
       newList[i] = list[i]==nullElement?element:list[i];
     }
     break;
   case 1://previous
     for(i=0; i<n; i++){
       if(list[i]!=nullElement) {
         previous = list[i];
         break;
       }
     }
     for(i=0; i<n; i++){
       if(list[i]==nullElement){
         newList[i] = previous;
       } else {
         newList[i] = previous = list[i];
       }
     }
     break;
   case 2://next
     for(i=n-1; i>=0; i--){
       if(list[i]!=nullElement) {
         next = list[i];
         break;
       }
     }
     for(i=n-1; i>=0; i--){
       if(list[i]==nullElement){
         newList[i] = next;
       } else {
         newList[i] = next = list[i];
       }
     }
     break;
   case 4://local average
     i0 = 0;
     for(i=0; i<n; i++){
       if(list[i]!=nullElement) {
         i1 = i;
         newList[i] = element = list[i];
         break;
       }
     }
     
     if(element==nullElement) return list;
      if(i==n) i1=n;
      while(i0<n){
       for(i=i0; i<i1; i++){
         newList[i] = element;
       }
       for(i=i1; i<n; i++){
         if(list[i]==nullElement){
           i0 = i;
           break;
         } else {
           newList[i] = list[i];
         }
       }
       if(i==n) {
         i0=i1=n;
       } else {
         for(i=i0; i<n; i++){
           if(list[i]!=nullElement){
             i1 = i;
             break;
           }
         }
         if(i==n) i1=n;
       }
       if(i0>=0) {
         element = i1==n?list[i0-1]:(list[i0-1]+list[i1])*0.5;
       }
     }
     break;
   case 5://interpolation
     i0 = 0;
     for(i=0; i<n; i++){
       if(list[i]!=nullElement) {
         i1 = i;
         newList[i] = previous = next = list[i];
         break;
       }
     }
      if(previous==nullElement) return list;
      if(i==n) i1=n;
      while(i0<n){
       factor = (next - previous)/(1+i1-i0);
       for(i=i0; i<i1; i++){
         newList[i] = previous + (i-i0+1)*factor;
       }
       for(i=i1; i<n; i++){
         if(list[i]==nullElement){
           i0 = i;
           break;
         } else {
           newList[i] = list[i];
         }
       }
       if(i==n) {
         i0=i1=n;
       } else {
         for(i=i0; i<n; i++){
           if(list[i]!=nullElement){
             i1 = i;
             break;
           }
         }
         if(i==n) i1=n;
       }
       if(i0>0) previous = list[i0-1];
       next = i1==n?previous:list[i1];
     }
     break;
 }
  newList.name = list.name;
 return newList.downcast();
}
let concat=function() {
 if(arguments == null || arguments.length === 0 ||  arguments[0] == null) return null;
 if(arguments.length == 1) return arguments[0];
  var i;
 let list = arguments[0].concat(arguments[1]);
 for(i = 2; i<arguments.length; i++) {
   list = list.concat(arguments[i]);
 }
 return list;
}

let reverse=function(list) {
 if(list==null) return;
 return list.getReversed();
}
let getBooleanDictionaryForList=function(list){
 if(list==null) return;
  var dictionary = {};
 let l = list.length;
 let i;
 for(i=0;i<l;i++){
   dictionary[list[i]] = true;
 }
  return dictionary;
}
let getFirstOccurrenceDictionaryForList=function(list){
 if(list==null) return;
  var i;
 let l = list.length;
  var dictionary = {};
 for(i=0; i<l; i++){
   dictionary[list[i]] = i;
 }
  return dictionary;
}
let getIndexesDictionary=function(list){
 if(list==null) return;
 let indexesDictionary = {};
 let i;
 let l = list.length;
  //list.forEach(function(element, i){
 for(i=0; i<l; i++){
   if(indexesDictionary[list[i]]==null) indexesDictionary[list[i]]=new nL();
   indexesDictionary[list[i]].push(i);
 }
  return indexesDictionary;
}
let getIndexesTable=function(list){
 if(list==null) return;
 let indexesTable = new T();
 indexesTable[0] = new L();
 indexesTable[1] = new nT();
 let indexesDictionary = {};
 let indexOnTable;
 let element;
 let i;
  for(i=0; i<list.length; i++){
   element = list[i];
   indexOnTable = indexesDictionary[element];
   if(indexOnTable==null){
     indexesTable[0].push(element);
     indexesTable[1].push(new nL(i));
     indexesDictionary[element]=indexesTable[0].length-1;
   } else {
     indexesTable[1][indexOnTable].push(i);
   }
 }
  indexesTable[0] = indexesTable[0].downcast();
  return indexesTable;
}
let buildDictionaryObjectForDictionary=function(dictionary){
 if(dictionary==null || dictionary.length<2 || dictionary[0] == null || dictionary[1] == null) return;
  var dictionaryObject = {};
  dictionary[0].forEach(function(element, i){
   dictionaryObject[element] = dictionary[1][i];
 });
  return dictionaryObject;
}
let mapWithTable=function(list, dictionary, nullElement, keepsOriginal) {
 if(list==null || dictionary==null || dictionary.length<2) return;
  var dictionaryObject = buildDictionaryObjectForDictionary(dictionary);
  var newList = mapWithObject(list, dictionaryObject, nullElement, keepsOriginal);
  newList.dictionaryObject = dictionaryObject;
  return newList;
}
let mapWithObject=function(list, dictionaryObject, nullElement, keepsOriginal) {
 if(list==null || dictionaryObject==null) return;
  var newList = new L();
 let i;
 let nElements = list.length;
  for(i=0; i<nElements; i++){
   newList[i] = dictionaryObject[list[i]];
 }
  if(nullElement!=null || keepsOriginal){
   var l = list.length;
   for(i=0; i<l; i++){
     if(newList[i]==null) newList[i]=keepsOriginal?list[i]:nullElement;
   }
 }
 
 newList.name = list.name;
 return newList.downcast();
}
let sortListByNumberList=function(list, nl, descending) {
 if(descending == null) descending = true;
 if(nl == null || nl.length === 0) return list;
  return list.getSortedByList(nl,!descending,false,true);
}
let getRankingsList=function(list, ascendant, randomSortingForEqualElements, normalize){
 if(list==null) return null;
 
 ascendant = ascendant==null?true:ascendant;
  var indexes = createSortedNumberList(list.length);
 indexes = indexes.getSortedByList(list, ascendant, randomSortingForEqualElements);
 let rankings = new nL();
 let l = list.length;
 let i;
 for(i=0;i<l; i++){
   rankings[indexes[i]] = i;
 }
  if(normalize) rankings=rankings.getNormalized();
  rankings.name = list.name;
  return rankings;
}
let sortListByIndexes=function(list, indexedArray) {
 let newList = instantiate(_typeOf(list));
 newList.name = list.name;
 let nElements = list.length;
 let i;
 for(i = 0; i < nElements; i++) {
   newList.push(list[indexedArray[i]]);
 }
 return newList;
}
let concatWithoutRepetitions=function() {
 let l = arguments.length;
 if(l===0) return;
 if(l==1) return arguments[0];
  var i, j;
 let newList = arguments[0].clone();
 let newListBooleanDictionary = getBooleanDictionaryForList(newList);
 let addList;
 let nElements;
 for(i = 1; i < l; i++) {
   addList = arguments[i];
   nElements = addList.length;
   for(j = 0; j < nElements; j++) { // TODO Is the redefing of i intentional? <----- !
     //if(newList.indexOf(addList[i]) == -1) newList.push(addList[i]);
     if(!newListBooleanDictionary[addList[j]]) newList.push(addList[j]);
   }
 }
 return newList.downcast();
}
let slidingWindowOnList=function(list, subListsLength, step, finalizationMode) {
 finalizationMode = finalizationMode || 0;
 let table = new T();
 let newList;
 let nElements = list.length;
 let i;
 let j;
  step = Math.max(1, step);
  switch(finalizationMode) {
   case 0: //all sub-Lists same length, doesn't cover the L
     for(i = 0; i < nElements; i += step) {
       if(i + subListsLength <= nElements) {
         newList = new L();
         for(j = 0; j < subListsLength; j++) {
           newList.push(list[i + j]);
         }
         table.push(newList.downcast());
       }
     }
     break;
   case 1: //last sub-List catches the last elements, with lesser length
     for(i = 0; i < nElements; i += step) {
       newList = new L();
       for(j = 0; j < Math.min(subListsLength, nElements - i); j++) {
         newList.push(list[i + j]);
       }
       table.push(newList.downcast());
     }
     break;
   case 2: //all lists same length, last sub-list migth contain elements from the beginning of the L
     for(i = 0; i < nElements; i += step) {
       newList = new L();
       for(j = 0; j < subListsLength; j++) {
         newList.push(list[(i + j) % nElements]);
       }
       table.push(newList.downcast());
     }
     break;
 }
  return table.downcast();
}
let getNewListForObjectType=function(object) {
 let newList = new L();
 newList[0] = object;
 return instanceSameType(newList.downcast());
}
let union=function(list0, list1, list2, list3, list4) {
 if(list0==null || list1==null) return;
  var union = new L();
 let l0 = list0.length;
 let l1 = list1.length;
 let l2 = list2 == null ? 0 : list2.length;
 let l3 = list3 == null ? 0 : list3.length;
 let l4 = list4 == null ? 0 : list4.length;
 let i, k;
  if(list0.type=='ndL' || list1.type=='ndL'){
   union = new ndL();
   union = list0.clone();
   for(i = 0; i<l1; i++){
     if(list0.get(list1[i].id)==null) union.addNode(list1[i]);
   }
   if(list2) union = union(union,list2);
   if(list3) union = union(union,list3);
   if(list4) union = union(union,list4);
   return union;
 }
  var obj = {};
  for(i = 0; i<l0; i++) obj[list0[i]] = list0[i];
 for(i = 0; i<l1; i++) obj[list1[i]] = list1[i];
 for(i = 0; i<l2; i++) obj[list2[i]] = list2[i];
 for(i = 0; i<l3; i++) obj[list3[i]] = list3[i];
 for(i = 0; i<l4; i++) obj[list4[i]] = list4[i];
 
 for(k in obj) {
   union.push(obj[k]);
 }
 return union.downcast();
}
let intersection=function(list0, list1, list2, list3, list4) {
 if(list0==null || list1==null) return;
  if(list0["isTable"] && list1["isTable"]) return list0.getColumns(list1.getNames());
  // handle optional case where list2 is actually a dictionary
 let bDictionary0 = null;
 if(!Array.isArray(list2) && typeof list2 == 'object'){
   bDictionary0 = list2;
   list2 = null;
 }
 let intersection;
 let l0  = list0.length;
 let l1  = list1.length;
 let i;
 let element;
  if(list0.type=="ndL" && list1.type=="ndL"){
   intersection = new ndL();
   for(i=0; i<l0; i++){
     if(list1.get(list0[i].id))
       intersection.addNode(list0[i]);
   }
   if(list2) intersection = intersection(intersection,list2);
   if(list3) intersection = intersection(intersection,list3);
   if(list4) intersection = intersection(intersection,list4);
   return intersection;
 }
   var dictionary =  bDictionary0==null?getBooleanDictionaryForList(list0):bDictionary0;
 let dictionaryIntersected = {};
 let dict2 = list2 == null ? null : getBooleanDictionaryForList(list2);
 let dict3 = list3 == null ? null : getBooleanDictionaryForList(list3);
 let dict4 = list4 == null ? null : getBooleanDictionaryForList(list4);
 
 intersection = new L();
  // in case where we have list2->4 we want to avoid recursive calls so we don't do downcast over and over
 for(i=0; i<l1; i++){
   element = list1[i];
   if(dictionaryIntersected[element]==null && dictionary[element] &&
     (dict2 == null || dict2[element] ) &&
     (dict3 == null || dict3[element] ) &&
     (dict4 == null || dict4[element] ) ){
      dictionaryIntersected[element]=true;
     intersection.push(element);
   }
 }
  return intersection.downcast();
}
let difference=function(list0, list1) {
 if(list0==null || list1==null) return;
  var dictionary =  getBooleanDictionaryForList(list1);
 let dictionaryDif =  {};
 let i;
 let difference = new L();
 let l0  = list0.length;
  if(list0.type=="ndL"){
   //@todo:finish
 }
  for(i=0; i<l0; i++){
   if(!dictionary[list0[i]] && !dictionaryDif[list0[i]]){
     difference.push(list0[i]);
     dictionaryDif[list0[i]] = true;
   }
 }
  return difference.downcast();
}
let symmetricDifference=function(list0, list1) {
 if(list0==null || list1==null) return;
  var dictionary0 =  getBooleanDictionaryForList(list0);
 let dictionary1 =  getBooleanDictionaryForList(list1);
 let dictionaryDif =  {};
 let i;
 let difference = new L();
 let l0  = list0.length;
 let l1  = list1.length;
  if(list0.type=="ndL"){
   //@todo:finish
 }
  for(i=0; i<l0; i++){
   if(!dictionary1[list0[i]] && !dictionaryDif[list0[i]]){
     difference.push(list0[i]);
     dictionaryDif[list0[i]] = true;
   }
 }
 for(i=0; i<l1; i++){
   if(!dictionary0[list1[i]] && !dictionaryDif[list1[i]]){
     difference.push(list1[i]);
     dictionaryDif[list1[i]] = true;
   }
 }
  return difference.downcast();
}
let jaccardIndex=function(list0, list1, sigma, bDictionary0) {//TODO: see if this can be more efficient, maybe one idctionar for doing union and interstection at the same time
 if(list0==null || list1==null) return;
 if(list0.length===0 && list1.length===0) return 0;
 sigma = sigma==null?0:sigma;
  var inter = intersection(list0, list1, bDictionary0).length;
 return (inter+sigma)/(list0.getWithoutRepetitions().length + list1.getWithoutRepetitions().length - inter);
}

let jaccardDistance=function(list0, list1) {
 return 1 - jaccardIndex(list0, list1);
}

let filterList=function(list, operator="=c", value, otherList, value2, mode){
 if(list==null) return

 if(operator == '=') operator = '==';
  if(otherList==null) otherList = list;
  if(mode===true) mode=1
  
 let l = list.length;
 let i;
  if(mode==2){
   var booleans = new L();
    switch(operator){
     case "==":
       for(i=0; i<l; i++){
         booleans.push(otherList[i]===value);
       }
       break;
     case "<":
       for(i=0; i<l; i++){
         booleans.push(otherList[i]<value);
       }
       break;
     case "<=":
       for(i=0; i<l; i++){
         booleans.push(otherList[i]<=value);
       }
       break;
     case ">":
       for(i=0; i<l; i++){
         booleans.push(otherList[i]>value);
       }
       break;
     case ">=":
       for(i=0; i<l; i++){
         booleans.push(otherList[i]>=value);
       }
       break;
     case "!=":
       for(i=0; i<l; i++){
         booleans.push(otherList[i]!==value);
       }
       break;
     case "contains":
       for(i=0; i<l; i++){
         booleans.push(otherList[i].includes(value));
       }
       break;
     case "between":
       for(i=0; i<l; i++){
         booleans.push(otherList[i]>=value && otherList[i]<=value2);
       }
       break;
     case "init":
       for(i=0; i<l; i++){
         booleans.push(otherList[i].indexOf(value)===0);
       }
       break;
     case "property value":
       for(i=0; i<l; i++){
         booleans.push(otherList[i][value]==value2);
       }
       break;
   }
   return booleans;
 }
  var newList = new L();
 let listToUse = (mode==1)?createSortedNumberList(list.length):list;
  switch(operator){
   case "==":
     for(i=0; i<l; i++){
       if(otherList[i]==value) newList.push(listToUse[i]);
     }
     break;
   case "<":
     for(i=0; i<l; i++){
       if(otherList[i]<value) newList.push(listToUse[i]);
     }
     break;
   case "<=":
     for(i=0; i<l; i++){
       if(otherList[i]<=value) newList.push(listToUse[i]);
     }
     break;
   case ">":
     for(i=0; i<l; i++){
       if(otherList[i]>value) newList.push(listToUse[i]);
     }
     break;
   case ">=":
     for(i=0; i<l; i++){
       if(otherList[i]>=value) newList.push(listToUse[i]);
     }
     break;
   case "!=":
     for(i=0; i<l; i++){
       if(otherList[i]!=value) newList.push(listToUse[i]);
     }
     break;
   case "contains":
     for(i=0; i<l; i++){
       if(otherList[i].includes(value)) newList.push(listToUse[i]);
     }
     break;
   case "between":
     for(i=0; i<l; i++){
       if(otherList[i]>=value && otherList[i]<=value2) newList.push(listToUse[i]);
     }
     break;
   case "init":
     for(i=0; i<l; i++){
       if(otherList[i].indexOf(value)===0) newList.push(listToUse[i]);
     }
     break;
   case "property value":
     for(i=0; i<l; i++){
       if(otherList[i][value]==value2) newList.push(listToUse[i]);
     }
     break;
 }
 return newList.downcast();
}
let mapWithFunction=function(list, func, param0, param1, listName, param2, param3, param4, param5, iterator){
 if(list==null || func==null) return;
 if(iterator==null) iterator=true;
  if(typeof(func)=="string"){
   iterator = false;
   func = stringToFunction(func);
 }
  var newList = new L();
 let l = list.length;
 let i;
  if(iterator){
   for(i=0; i<l; i++){
     newList[i] = func.call(this, list[i], i, param0, param1, param2, param3, param4, param5);
   }
 } else {
   
   for(i=0; i<l; i++){
     var args = [list[i]];
     if(param0!=null) args[1] = param0;
     if(param1!=null) args[2] = param1;
     if(param2!=null) args[3] = param2;
     if(param3!=null) args[4] = param3;
     if(param4!=null) args[5] = param4;
     if(param5!=null) args[6] = param5;
     newList[i] = func.apply(this, args);
   }
 }
  newList.name = listName;
  return newList.downcast();
}
let mapFunctionsOnList=function(list, functionList, param0, param1){
 if(list==null || functionList==null) return;
  var listResults = new L();
 let l = Math.min(list.length, functionList.length);
  for(var i=0; i<l; i++){
   var func = functionList[i];
   if(typeof(func)=="string") func = stringToFunction(func);
   var args = [list[i]];
   if(param0!=null) args[1] = param0;
   if(param1!=null) args[2] = param1;
   listResults[i] = func.apply(this, args);
 }
 return listResults.downcast();
}

let aggregateList=function(aggregatorList, toAggregateList, mode, indexesTable, weightList, aggregationFunction){
 if(aggregatorList==null || toAggregateList==null) return null;
 let table = new T();
  if(mode!=null && _typeOf(mode)=='string') mode = ListOperators._aggregationDictionary[mode];
 if(mode == 18 && weightList == null) throw Error("weightList must be defined to aggregate to a weighted average.");
  indexesTable = aggregatorList.indexesTable;
  if(indexesTable==null){
   indexesTable = getIndexesTable(aggregatorList);
   aggregatorList.indexesTable = indexesTable;
 }
 
 if(mode==11) return indexesTable;
 
  table[0] = indexesTable[0];
  if(mode===0 && aggregatorList==toAggregateList){
   table[1] = indexesTable[0];
   return table;
 }
  mode = mode==null?0:mode;
  var list;
 let elementsTable;
 let nIndexes = indexesTable[1].length;
 let indexes;
 let index;
 let elements;
 let i, j;
  switch(mode){
   case 0://first element
     table[1] = new L();
     //indexesTable[1].forEach(function(indexes){
     for(i=0; i<nIndexes; i++){
       indexes = indexesTable[1][i];
       table[1].push(toAggregateList[indexes[0]]);
     }
     table[1] = table[1].downcast();
     return table;
   case 1://count
     table[1] = new nL();
     //indexesTable[1].forEach(function(indexes){
     for(i=0; i<nIndexes; i++){
       indexes = indexesTable[1][i];
       table[1].push(indexes.length);
     }
     return table;
   case 2://sum
   case 3://average
   case 18://weighted average
   case 19://median
     var sum,sumWeighted,sumWeights;
     table[1] = new nL();
     //indexesTable[1].forEach(function(indexes){
     for(i=0; i<nIndexes; i++){
       indexes = indexesTable[1][i];
       sum = 0;
       sumWeighted = 0;
       sumWeights = 0;
       //indexes.forEach(function(index){
         var nLValues = new nL();
       for(j=0; j<indexes.length; j++){
         index = indexes[j];
         sum+=toAggregateList[index];
         if(mode==19)
           nLValues.push(toAggregateList[index]);
         if(mode==18){
           sumWeighted+=toAggregateList[index]*weightList[index];
           sumWeights +=weightList[index];
         }
       }
       if(mode==3) sum/=indexes.length;
       else if(mode==18) sum = (sumWeights==0) ? 0 : sumWeighted/sumWeights;
       if(mode==19) sum = nLValues.getMedian();
       // get rid of most common case of floating point errors leading to lots of garbage decimals
       if(mode == 2 && !Number.isInteger(sum))
         sum = Number(parseFloat(sum).toPrecision(12));
       table[1].push(sum);
     }
     return table;
   case 4://min
     var min;
     table[1] = new nL();
     //indexesTable[1].forEach(function(indexes){
     for(i=0; i<nIndexes; i++){
       indexes = indexesTable[1][i];
       min = 99999999999;
       //indexes.forEach(function(index){
       for(j=0; j<indexes.length; j++){
         index = indexes[j];
         min=Math.min(min, toAggregateList[index]);
       }
       table[1].push(min);
     }
     return table;
   case 5://max
     var max;
     table[1] = new nL();
     for(i=0; i<nIndexes; i++){
       indexes = indexesTable[1][i];
       max = -99999999999;
       for(j=0; j<indexes.length; j++){
         index = indexes[j];
         max=Math.max(max, toAggregateList[index]);
       }
       table[1].push(max);
     }
     return table;
   case 6://standard deviation
     var average;
     table = aggregateList(aggregatorList, toAggregateList, 3, indexesTable)
     for(i=0; i<nIndexes; i++){
       indexes = indexesTable[1][i];
       sum = 0;
       average = table[1][i]
       for(j=0; j<indexes.length; j++){
         index = indexes[j];
         sum += Math.pow(toAggregateList[index] - average, 2);
       }
       table[1][i] = Math.sqrt(sum/indexes.length);
     }
     return table;
   case 16://frequency table
   case 7://enlist
     table[1] = new T();
     //indexesTable[1].forEach(function(indexes){
     for(i=0; i<nIndexes; i++){
       indexes = indexesTable[1][i];
       list = new L();
       //indexes.forEach(function(index){
       for(j=0; j<indexes.length; j++){
         index = indexes[j];
         if(toAggregateList[index]!=null) list.push(toAggregateList[index]);
       }
       
       list = list.downcast();
        if(mode==16){
         list = list.getFrequenciesTable(true);
       }
        table[1].push(list);
     }
     if(mode==16) return table;
     return table.downcast();
   case 8://last element
     table[1] = new L();
     //indexesTable[1].forEach(function(indexes){
     for(i=0; i<nIndexes; i++){
       indexes = indexesTable[1][i];
       table[1].push(toAggregateList[indexes.at(-1)]);
     }
     table[1] = table[1].downcast();
     return table;
   case 9://most common
     table[1] = new L();
      elementsTable = aggregateList(aggregatorList, toAggregateList, 7, indexesTable);
     //elementsTable[1].forEach(function(elements){
     for(i=0; i<elementsTable[1].length; i++){
       elements = elementsTable[1][i];
       table[1].push(elements.getMode());
     }
     table[1] = table[1].downcast();
     
     return table;
   case 10://random
     table[1] = new L();
     //indexesTable[1].forEach(function(indexes){
     for(i=0; i<nIndexes; i++){
       indexes = indexesTable[1][i];
       table[1].push( toAggregateList[indexes[ Math.floor(Math.random()*indexes.length) ]] );
     }
     table[1] = table[1].downcast();
     return table;
   case 11://indexes (returned previosuly)
     break;
   case 12://count non repeated
     table[1] = new nL();
     elementsTable = aggregateList(aggregatorList, toAggregateList, 7, indexesTable);
     for(i=0;i<elementsTable[1].length;i++){
       elements = elementsTable[1][i];
       table[1].push(elements.getWithoutRepetitions().length);
     }
     return table;
   case 13://enlist non repeated
     table[1] = new L();
     elementsTable = aggregateList(aggregatorList, toAggregateList, 7, indexesTable);
     for(i=0;i<elementsTable[1].length;i++){
       elements = elementsTable[1][i];
       table[1].push(elements.getWithoutRepetitions());
     }
     table[1] = table[1].downcast();
     return table;
   case 14://concat string ", "
   case 17://concat string
     var sep = mode==14?", ":"";
     table[1] = new sL();
     elementsTable = aggregateList(aggregatorList, toAggregateList, 7, indexesTable);
     for(i=0;i<elementsTable[1].length;i++){
       elements = elementsTable[1][i];
       table[1].push( elements.join(sep) );
     }
     return table;
   case 15://concat with "," string non repeated
     table[1] = new sL();
     elementsTable = aggregateList(aggregatorList, toAggregateList, 7, indexesTable);
     //elementsTable[1].forEach(function(elements){
     for(i=0;i<elementsTable[1].length;i++){
       elements = elementsTable[1][i];
       table[1].push( elements.getWithoutRepetitions().join(', ') );
     }
     return table;
   case 16://frequencies table (solved on case 7)
     break;
   case 20://aggregation function
     table[1] = new L();
     elementsTable = aggregateList(aggregatorList, toAggregateList, 7, indexesTable);
     for(i=0;i<elementsTable[1].length;i++){
       elements = elementsTable[1][i];
       table[1].push( aggregationFunction(elements) );
     }
     table[1] = table[1].downcast();
     return table;
 }
  return null;
}
let subCategoricalAnalysis=function(list0, list1){
 if(list0==null || list1==null) return;
  var dictionary = {};
 let element, projection;
 let i;
 let list0SubCategorical = true;
 for(i=0; list0[i]!=null; i++){
   element = list0[i];
   projection = dictionary[element];
   if(projection==null){
     dictionary[element] = list1[i];
   } else if(projection!=list1[i]){
     list0SubCategorical = false;
     break;
   }
 }
  dictionary = {};
 let list1SubCategorical = true;
 for(i=0; list1[i]!=null; i++){
   element = list1[i];
   projection = dictionary[element];
   if(projection==null){
     dictionary[element] = list0[i];
   } else if(projection!=list0[i]){
     list1SubCategorical = false;
     break;
   }
 }
  if(list1SubCategorical && list0SubCategorical) return 1;
 if(list0SubCategorical) return 2;
 if(list1SubCategorical) return 3;
 return 0;
}
let getListEntropy=function(list, valueFollowing, freqTable, normalizedMode) {
 if(list == null) return;
  if(list.length < 2) {
   if(list.length == 1) {
     list._mostRepresentedValue = list[0];
     list._biggestProbability = 1;
     if(valueFollowing != null) list._P_valueFollowing = list[0] == valueFollowing ? 1 : 0;
   } else {
     if(valueFollowing != null) list._P_valueFollowing = 0;
   }
   return 0;
 }
  if(list.infoObject!=null) freqTable = list.infoObject.frequenciesTable;
  if(freqTable==null) freqTable = list.getFrequenciesTable(true);// countElementsRepetitionOnList(list, true);
  list._mostRepresentedValue = freqTable[0][0];
 let N = list.length;
 list._biggestProbability = freqTable[1][0] / N;
 if(freqTable[0].length == 1) {
   list._P_valueFollowing = list[0] == valueFollowing ? 1 : 0;
   return 0;
 }
 let entropy = 0;
  var norm = Math.log(freqTable[0].length);
 let l = freqTable[1].length;//number of different elements (change the name of the variable!!!!!)
 let i;
 let val;
 for(i=0; i<l; i++){
   val = freqTable[1][i];
   entropy -= val/N * Math.log(val/N);// / norm;
 }
  if(normalizedMode>0) entropy*=(1/norm);
  /*
 if(normalizedMode>=1){
   var min = ( -((l-1)/N)*Math.log(1/N) - ((N-(l-1))/N)*Math.log((N-(l-1))/N) )/norm;
   entropy = (entropy-min)/(1-min);
 }
 */

 if(normalizedMode==2){
   var mintropy = function(nV, n){
       if(nV==1) return 0;
       if(nV==n) return 1;
       var fq = n-(nV-1);//frequency of single most repeated element
       return  ( -(nV-1)*(1/n)*Math.log(1/n) - 1*(fq/n)*Math.log(fq/n) )/Math.log(nV);
       
   }
    var min = mintropy(l, list.length);
   if(min<1) entropy = (entropy-min)/(1-min);
 }
  if(valueFollowing != null) {
   var index = freqTable[0].indexOf(valueFollowing);
   list._P_valueFollowing = index == -1 ? 0 : freqTable[1][index] / N;
 }
 return entropy;
}
let getListDiversity=function(list, mode, freqTable) {
 mode = (mode == null? 0: mode);
 if ((mode < 0) || (mode > 2) || (list == null)) return;    
 if(list.length<2) return 0;    
  if (!list["isList"]) {
     if(Array.isArray(list)) list = L.toL(list);
     else return;
 }
  if (list.infoObject != null) freqTable = list.infoObject.frequenciesTable;
 if (freqTable == null) freqTable = list.getFrequenciesTable();
  switch(mode){
   case 0:
     var sum=0;
     var total = list.length*(list.length-1);
     for(var i=0; i<freqTable[1].length; i++){
         sum+=freqTable[1][i]*(freqTable[1][i]-1);
     }
     return (1 - sum/total);
   case 1:
     return freqTable[0].length/list.length;
   case 2:
     return getListEntropy(list,null,null,1)*freqTable[0].length/list.length;
 }
 return;
}
let getInformationGain=function(feature, supervised, reductionRatioNormalization) {
 if(feature == null || supervised == null || feature.length != supervised.length) return null;
  var entS = supervised.infoObject==null?getListEntropy(supervised):supervised.infoObject.entropy;
 let ig = entS;
 let childrenObject = {};
 let childrenLists = new T();
 let i;
 let N = feature.length;
 let element;
   //feature.forEach(function(element, i) {
 for(i=0; i<N; i++){
   element = feature[i];
   if(childrenObject[element] == null) {
     childrenObject[element] = new L();
     childrenLists.push(childrenObject[element]);
   }
   childrenObject[element].push(supervised[i]);
 }//);
  N = childrenLists.length;//.getLengths().getSum();
 let n_total = supervised.length;//childrenLists.getLengths().getSum();
  var entropy;
 let enCond = 0; //conditional entropy
 
 for(i=0; i<N; i++){
   entropy = (childrenLists[i].infoObject==null?getListEntropy(childrenLists[i]):childrenLists[i].infoObject.entropy);
   enCond += (childrenLists[i].length / n_total) * entropy;
 }
  ig = entS - enCond; // non-normalized ig
  if(reductionRatioNormalization) {
     ig = ig/entS; //ig normalizaed as ratio
 }
  //});
  return ig;
}
// var groupElements=function(list, sortedByValue, mode, fillBlanks) {
//  if(!list)
//    return;
//  var result = groupElementsByPropertyValue(list, null, sortedByValue, mode, fillBlanks);
//  return result;
// }
let groupElementsByPropertyValue=function(list, propertyName, sortedByValue, mode, fillBlanks) {
//  if(!list)
//    return;
//  var result = _groupElements_Base(list, propertyName, sortedByValue, mode, fillBlanks);
//  return result;
// }
// var _groupElements_Base=function(list, propertyName, sortedByValue, mode, fillBlanks) {
 if(!list)
   return;
 if(mode == undefined){
   mode = 0;
 }
 let resultOb = {};
 let resultTable = new T();
 let pValue, item, minValue, maxValue, i;
 for(i = 0; i < list.length; i++) {
   item = list[i];
   pValue = propertyName == undefined ? item : item[propertyName];
   if(resultOb[pValue] === undefined) {
     resultOb[pValue] = new L();
     resultOb[pValue].name = pValue;
     resultOb[pValue].valProperty = pValue;
     resultTable.push(resultOb[pValue]);
   }
   if(mode === 0)
     resultOb[pValue].push(item);
   else if(mode == 1)
     resultOb[pValue].push(i);
   // Update boundaries
   if(minValue === undefined || pValue < minValue) {
     minValue = pValue;
   }
   if(maxValue === undefined || pValue > maxValue) {
     maxValue = pValue;
   }
 }
  // Fill the blanks
 if(fillBlanks) {
   var numBlanks = 0;
   for(i = minValue; i < maxValue; i++) {
     if(resultOb[i] === undefined) {
       resultOb[i] = new L();
       resultOb[i].name = i;
       resultOb[i].valProperty = i;
       resultTable.push(resultOb[i]);
       numBlanks++;
     }
   }
 }
  // To-do: looks like getSortedByProperty is removing the valProperty from the objects
 if(sortedByValue)
   resultTable = resultTable.getSortedByProperty("name"); // "valProperty"
  return resultTable;
}
let repeatElements=function(list, repetitions) {
 if(!list || !repetitions)
   return;
 let newList = instanceSameType(list);
 newList.name = list.name;
  for (var i = 0; i<list.length; i++) {
   for (var j = 0; j < repetitions[i%repetitions.length]; j++) {
     newList.push(list[i]);
   };
 };
  return newList;
}
let _isCategorical=function(list, numberOfDifferentElements){
 //list unique < 20
 //at least one repeated
 return numberOfDifferentElements > 1 && numberOfDifferentElements<list.length && (list.length<=20 || numberOfDifferentElements/list.length<0.8);
}
let buildInformationObjectForList=function(list, bUseExistingObjectIfPresent){
 if(list==null) return;
  bUseExistingObjectIfPresent = bUseExistingObjectIfPresent==null?true:bUseExistingObjectIfPresent;
  if(bUseExistingObjectIfPresent == true && list.infoObject != null) return list.infoObject;
 
 let n = list.length;
 let i, val;
  var infoObject = {
   isInfoObject:true,//useful for solving ambiguity when reading infoObject.type
   type:list.type,
   name:list.name,
   length:n
 };
  infoObject.frequenciesTable = list.getFrequenciesTable(true, true, true);
 infoObject.numberDifferentElements = infoObject.frequenciesTable[0].length;
 infoObject.mostFrequentElement = infoObject.frequenciesTable[0][0];
 infoObject.isNumeric =  list.type == "nL";
  infoObject.isCategorical = _isCategorical(list, infoObject.numberDifferentElements);// infoObject.numberDifferentElements/list.length<0.8;
 infoObject.isLongTexts = false;
 infoObject.isDefault = false;
  infoObject.isNumericCategorical = infoObject.isNumeric && infoObject.isCategorical;
  infoObject.isUnique = infoObject.numberDifferentElements == list.length;
  infoObject.containsNulls = infoObject.frequenciesTable[0].includes(null) || infoObject.frequenciesTable[0].includes(undefined);
 infoObject.containsNullsOrEqual = infoObject.containsNulls || infoObject.frequenciesTable[0].includes("") || infoObject.frequenciesTable[0].includes("null");
  infoObject.isLongitude = false;
 infoObject.isLatitude = false;
  infoObject.isSmall = list.length<=100;
  if(list.type == "nL") {
   var min = 999999999999;
   var max = -999999999999;
   var average = 0;
   var standardDeviation = 0;
   var shorten = new nL();
   var index = 0;
   var accumsum = 0;
   var maxAccumsum = -999999999999;
   var sizeAccum = Math.max(Math.floor(list.length/50), 1);
   var allIntegers = true;
    //isSorted
   //isConsecutive
   //years like
    for(i=0; i<n; i++){
     val = list[i];
     min = Math.min(min, val);
     max = Math.max(max, val);
     average += val;
     accumsum += val;
     index++;
     if(val%1!==0) allIntegers = false;
     if(index==sizeAccum){
       accumsum /= index;
       maxAccumsum = Math.max(maxAccumsum, accumsum);
       shorten.push(accumsum);
       accumsum=0;
       index=0;
     }
   }
    if(index !== 0){
       accumsum /=index;
       maxAccumsum = Math.max(maxAccumsum, accumsum);
       shorten.push(accumsum);
   }
    shorten = shorten.factor(1/maxAccumsum);
   var sum = average;
   average /= list.length;
    for(i = 0; i<n; i++) {
     standardDeviation += Math.pow(list[i] - average, 2);
   }
      infoObject.min = min;
   infoObject.max = max;
   infoObject.average = average;
   infoObject.sum = sum;
   //infoObject.median = list.getMedian(); //probably too costful
   infoObject.standardDeviation = Math.sqrt(standardDeviation/n);
   infoObject.allIntegers = allIntegers;
   infoObject.kind = allIntegers?"integer numbers":"numbers";
   infoObject.allPositive = infoObject.min>=0;
   infoObject.allNegative = infoObject.min<0;
   infoObject.histogram = rangeCounts(list, 50);
   // geo tests
   if(list.name){
     var sNameLower = list.name.toLowerCase().trim();
     if(infoObject.min >= -90 && infoObject.max <= 90){
       if(sNameLower == 'lat' || sNameLower == 'lat.' || sNameLower.match(/latitud.*/i))
         infoObject.isLatitude = true;
     }
     if(infoObject.min >= -180 && infoObject.max <= 180){
       if(sNameLower == 'lon' || sNameLower == 'lon.' || sNameLower == 'long' || sNameLower.match(/longitud.*/i) || sNameLower == 'long.' || sNameLower == 'lng')
         infoObject.isLongitude = true;
     }
   }
 }
  if(list.type != "nL" || infoObject.allIntegers) {
   
   infoObject.categoricalColors = infoObject.frequenciesTable[3];
   
   if(list.type=="sL"){
     var textLengths = list.getLengths();
      infoObject.averageTextLengths = 0;
     infoObject.minTextLength = 999999999999999;
     infoObject.maxTextLength = 0;
      for(i=0; i<n; i++){
       infoObject.averageTextLengths+=textLengths[i];
       if(textLengths[i]>infoObject.maxTextLength){
         infoObject.maxTextLength = textLengths[i];
       }
       if(textLengths[i]<infoObject.minTextLength){
         infoObject.minTextLength = textLengths[i];
       }
     }
     infoObject.averageTextLengths = Number(numberToString(infoObject.averageTextLengths/n, (infoObject.averageTextLengths/n < 10) ? 1 : 0));
     if(infoObject.averageTextLengths>40) infoObject.isLongTexts = true; //[!] completely arbitrary, there might be a better criteria
    }
    if(infoObject.isLatitude || infoObject.isLongitude){
     infoObject.kind = "geo coordinate";
   } else if(list.type=="sL" && !infoObject.isCategorical){
     //if 80% of texts are different, they aren't reckoned as categories
     infoObject.kind = "strings";
   } else if(list.type=="sL" && !infoObject.isCategorical){
     infoObject.kind = "strings";
     } else if(list.type=="L"){
     // Count number of category-like unique items and look at ratio
     var iCategoryLike=0;
     for(i=0; i<infoObject.frequenciesTable[0].length; i++){
       val=infoObject.frequenciesTable[0][i];
       if(isNaN(parseFloat(val)) || !isFinite(val))
         iCategoryLike++; // string
       else if(Math.floor(val) == val && val < 1000)
         iCategoryLike++; // simple integer less than 1000
     }
     if(infoObject.isCategorical && iCategoryLike/infoObject.numberDifferentElements>0.8)
       infoObject.kind = "categories";
     else
       infoObject.kind = "strings";
   } else if(list.type!="nL"){// ||  (list.type=="nL" && infoObject.numberDifferentElements/list.length<0.8) ){
     infoObject.kind = "categories";
   } else if(list.type=="nL"){
     infoObject.kind = "integer numbers";
     if(infoObject.numberDifferentElements/list.length <= 0.2 && infoObject.numberDifferentElements <= 30)
       infoObject.kind = "categories";
   }
 }
  //entropy for all lists (even if not categorical)
 infoObject.entropy = infoObject.numberDifferentElements==list.length?1:
                         (infoObject.numberDifferentElements==1?0:getListEntropy(list, null, infoObject.frequenciesTable));
                         
 infoObject.isLabel = list.type != "sL" && infoObject.isUnique && infoObject.maxTextLength<100;
 infoObject.isDefault = !infoObject.isNumeric && !infoObject.isCategorical && !infoObject.isLongTexts;
  list.infoObject = infoObject;
  return infoObject;
}
let kCombinations=function(list, k){
 if(list==null || k==null) return;
  var kCombinations = new T();
 let i, j;
 let head, tailkCombinations;
  if (k > list.length || k <= 0) {
   return kCombinations;
 }
 
 if (k == list.length) {
   kCombinations.push(list.clone());
   return kCombinations;
 }
 
 if (k == 1) {
   for (i = 0; i < list.length; i++) {
     kCombinations.push( new L(list[i]).downcast() );
   }
   return kCombinations;
 }
 
 for (i = 0; i < list.length - k + 1; i++) {
   head = list.slice(i, i+1);
   tailkCombinations = kCombinations(L.toL(list.slice(i + 1)).downcast(), k - 1);
   for (j = 0; j < tailkCombinations.length; j++) {
     kCombinations.push( L.toL( head.concat(tailkCombinations[j]) ).downcast() );
   }
 }
 return kCombinations.downcast();
}
let allSubLists=function(list, includeEmpty){
 if(list==null) return null;
  var allSubLists  = new T();
 let k;
 if(includeEmpty) allSubLists.push(new L());
 for(k=1; k<=list.length; k++){
   allSubLists = T.toL( allSubLists.concat( kCombinations(list, k) ) );
 }
 return allSubLists.downcast();
}
let crossCombineLists=function(list1, list2, sep){
 if(list1 == null || list2 == null) return null;
 sep = sep == null ? ' ' : sep;
 let i,j;
 let newList = new sL();
 for(i=0;i<list1.length;i++){
   for(j=0;j<list2.length;j++){
     newList.push(list1[i] + sep + list2[j]);
   }
 }
 return newList;
}
let characterizeList=function(list, mode, bShowMode){
 if(list == null) return null;
 if(!list.isList) throw new Error('first inlet must be a list');
 if(list.isTable){
   var sLRet = new sL();
   for(let i=0;i<list.length;i++){
     sLRet.push(characterizeList(list[i],mode, bShowMode));
   }
   return sLRet;
 }
 if(list.length == 0) return '';
 if(list.infoObject == null) buildInformationObjectForList(list);
 mode = mode == null ? 0 : mode;
 bShowMode = bShowMode == null ? false : bShowMode;
 if(isNaN(mode) || mode % 1 != 0 || mode < 0 || mode > 14) throw new Error('Mode must be an integer between 0 and 14');
 if([1,2,3,4,9,10].includes(mode) && list.type != 'nL') throw new Error('This mode only applicable for nL input');
  var sRes,i,l2,tf,s;
 switch(mode){
   case 0:
     sRes = list[0] + (bShowMode ? '(first)' : '');
     break;
   case 1:
     sRes = list.getSum() + (bShowMode ? '(sum)' : '');
     break;
   case 2:
     var intDec = getDecimalsInterval(list);
     sRes = numberToString(list.infoObject.average,intDec.y+1) + (bShowMode ? '(avg)' : '');
     break;
   case 3:
     sRes = list.infoObject.min + (bShowMode ? '(min)' : '');
     break;
   case 4:
     sRes = list.infoObject.max + (bShowMode ? '(max)' : '');
     break;
   case 5:
     if(list.type != 'sL')
       sRes = list.toStringList().join(', ') + (bShowMode ? '(all)' : '');
     else
       sRes = list.join(', ') + (bShowMode ? '(all)' : '');
     break;
   case 6:
     sRes = list.infoObject.mostFrequentElement + (bShowMode ? '(common)' : '');
     break;
   case 7:
     sRes = list.infoObject.numberDifferentElements + (bShowMode ? '(unique count)' : '');
     break;
   case 8:
     l2 = list.infoObject.frequenciesTable[0];
     if(l2.type != 'sL')
       sRes = l2.toStringList().join(',') + (bShowMode ? '(unique)' : '');
     else
       sRes = l2.join(', ') + (bShowMode ? '(unique)' : '');
     break;
   case 9:
     sRes = list.infoObject.min + '-' + list.infoObject.max + (bShowMode ? '(range)' : '');
     break;
   case 10:
     sRes = list.getMedian() + (bShowMode ? '(median)' : '');
     break;
   case 11:
     sRes = '';
     for(i=0;i<3 && i < list.length;i++){
       if(sRes != '') sRes += ', ';
       sRes += String(list[i]);
     }
     if(list.length > 3)
       sRes += ', + ' + (list.length-3) + ' more';
     if(bShowMode)
       sRes += '(short list)';
     break;
   case 12:
     // freq table inline
     tf = list.infoObject.frequenciesTable;
     var OtherCount = 0;
     sRes = '';
     for(i=0;i<tf[0].length;i++){
       if(i < 5){
         if(sRes != '') sRes += ', ';
         sRes += String(tf[0][i]) + ':' + tf[1][i]; 
       }
       else
         OtherCount += tf[1][i];
     }
     if(OtherCount > 0)
       sRes += ', Other:' + OtherCount;
     sRes += (bShowMode ? '(frequency)' : '');
     break;
   case 13:
     // word freq table inline
     l2 = (list.type == 'sL') ? list : list.toStringList();
     l2 = getWords(l2.join(' '),false,true,null,null,null,2);
     tf = l2.getFrequenciesTable(true,true);
     sRes = '';
     for(i=0;i < 5 && i<tf[0].length;i++){
       if(sRes != '') sRes += ', ';
       s = (100*tf[2][i]).toPrecision(2);
       s = s.includes('e') ? parseFloat(s) : s;
       sRes += String(tf[0][i]) + ':' + s;
     }
     sRes += (bShowMode ? '(word rate)' : '');
   case 14:
     sRes = list.name && list.name != '' ? list.name + ': ' : '';
     if(list.type != 'sL')
       sRes += list.toStringList().getSubList(0,5).join(', ') + (bShowMode ? '(name:5)' : '');
     else
       sRes += list.getSubList(0,5).join(', ') + (bShowMode ? '(name:5)' : '');
     break;
 }
 sRes = sRes.replace(/\n/g, ' '); // want single line result
 return sRes;
}


let isColor = function(string){
    let colorRegex = /^(#(?:[0-9a-fA-F]{3}){1,2}\b|#(?:[0-9a-fA-F]{4}){1,2}\b|rgba?\(\s*(?:\d{1,3}\s*,\s*){2}\d{1,3}\s*(?:,\s*(?:0|1|0?\.\d+)\s*)?\)|hsla?\(\s*\d{1,3}(?:\s*,\s*\d{1,3}%){2}\s*(?:,\s*(?:0|1|0?\.\d+)\s*)?\)|\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGray|DarkGrey|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGray|DarkSlateGrey|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGray|DimGrey|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gray|Grey|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGray|LightGrey|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGray|LightSlateGrey|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGray|SlateGrey|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b)$/
    return string.match(colorRegex)!=null
}
let areColor = function(array){
    return array.find(string=>!isColor(string))==null
}


let createDefaultCategoricalColorList=function(nColors, alpha, invert, bDarken = false) {
 let colors = createCategoricalColors(2, nColors,null,null,null,null,null,bDarken);
 if(alpha!=null && alpha <= 1) colors = colors.addAlpha(alpha);
  if(invert) colors = colors.getInverted();
  return colors;
}

let colorsForCategoricalList=function(list, colorList, stableColors){
 if(list==null) return;
  

  if(stableColors){
   var colors = new cL();
   colors.name = list.name+" colors";
   for(var i=0; i<list.length; i++){
     colors[i] = stringToColor(String(list[i]));
   }
   return colors;
 }
  return createCategoricalColorListForList(list, colorList)[0].value;
}



let createCategoricalColorListForList=function(list, colorList, alpha, color, interpolate, invert, bDarken){
  if(list==null) return null

 interpolate = interpolate==null?0:interpolate;
 let diffValues = list.getWithoutRepetitions();
 let diffColors;
 if(colorList && interpolate>0){
   diffColors = colorList.getInterpolated(color, interpolate);
 } else {
   diffColors = createCategoricalColors(2, diffValues.length, null, alpha, color, interpolate, colorList,bDarken);
 }
 if(alpha!=null && alpha<=1) diffColors = diffColors.addAlpha(alpha);
  if(invert) diffColors = diffColors.getInverted();
  var colorDictTable = T.toL([diffValues, diffColors]);
 let dictionaryObject = buildDictionaryObjectForDictionary(colorDictTable);
  var fullColorList = mapWithTable(list, colorDictTable, 'black');
  fullColorList = cL.toL(fullColorList)

  return [
   {
     value: fullColorList,
     type: 'cL'
   }, {
     value: diffValues,
     type: diffValues.type
   }, {
     value: diffColors,
     type: 'cL'
   }, {
     value: colorDictTable,//new T(diffValues, fullColorList),
     type: 'T'
   }, {
     value: dictionaryObject,
     type: 'Object'
   }
 ];
}

let createColorListFromColorScale=function(n, colorScale, transformation){
 if(n==null) return;
 transformation = transformation==null?0:transformation;
  colorScale = colorScale==null?grayToOrange:colorScale;
  var i;
 let colorList = new cL();
  switch(transformation){
   case 0:
     for(i=0; i<n; i++){
       colorList[i] = colorScale(i/(n-1));
     }
     break;
   case 1:
     for(i=0; i<n; i++){
       colorList[i] = colorScale(Math.pow(i/(n-1), 2));
     }
     break;
   case 2:
     for(i=0; i<n; i++){
       colorList[i] = colorScale(Math.sqrt(i/(n-1)));
     }
     break;
   case 3:
     for(i=0; i<n; i++){
       colorList[i] = colorScale(Math.pow(i/(n-1), 4));
     }
     break;
   case 4:
     for(i=0; i<n; i++){
       colorList[i] = colorScale(Math.pow(i/(n-1), 0.25));
     }
     break;
 }
  return colorList;
}
let createColorListFromNumberList=function(nl, colorScale, mode) {
 if(nl==null) return null

 colorScale = colorScale==null?grayToOrange:colorScale

  var colorList = new cL();
 let newNumberList;
 let i;
 let l = nl.length;
  switch(mode) {
   case 0: //0 to max
     newNumberList = normalizeToMax(nl);
     break;
   case 1: //min to max
        newNumberList = nl.getNormalized()
     break;
   case 2: //values between 0 and 1
     newNumberList = nl;
     break;
 }
  for(i = 0; i<l; i++) {
   colorList[i]  = colorScale(newNumberList[i]);
 }
  return colorList;
}
let createSymmetricalColorListFromNumberList=function(nl, colorNeg, color0, colorPos, emphasize, interval){
 if(nl==null) return;
 let inter = interval==null?nl.getInterval():interval;
 let maxAbs = Math.max(Math.abs(inter.x),Math.abs(inter.y));
  colorNeg = colorNeg==null?'red':colorNeg;
 color0 = color0==null?'gray':color0;
 colorPos = colorPos==null?'blue':colorPos;
  var rgb0 = colorStringToRGB(colorNeg);
 let rgb1 = colorStringToRGB(color0);
 let rgb2 = colorStringToRGB(colorPos);
  var colorList = new cL();
 let abs;
  for(var i = 0; i<nl.length; i++){
   abs = Math.abs(nl[i])/maxAbs;
   if(emphasize>0) abs = Math.sqrt(abs);
   if(emphasize>1) abs = Math.sqrt(abs);
   if(interval!=null && nl[i]<interval.x){
     colorList[i] = colorNeg;
   } else if(interval!=null && nl[i]>interval.y){
     colorList[i] = colorPos;
   } else {
     colorList[i] = RGBArrayToString(nl[i]<0?interpolateColorsRGB(rgb1, rgb0, abs):interpolateColorsRGB(rgb1, rgb2, abs));
   }
 }
  return colorList;
}
let createColorListWithSingleColor=function(nColors, color) {
 let colorList = new cL();
 for(var i = 0; i < nColors; i++) {
   colorList.push(color);
 }
 return colorList;
}
let createColorListBetweenTwoColors=function(nColors, color1, color2) {
 nColors = nColors == null? 8:nColors;
 if(color1 == null || color2 == null) return;
 let colorList = new cL();
 for(var i = 0; i < nColors; i++) {
   var clr = nColors == 1 ? color1 : interpolateColors(color1,color2,i/(nColors-1),true);
   colorList.push(clr);
 }
 return colorList;
}
let createColorListSpectrum=function(nColors, saturation, value) {
 // use HSV and rotate through hues
 nColors = nColors == null? 8:nColors;
 saturation = saturation == null? 1:saturation;
 value = value == null? 1:value;
 let colorList = new cL();
 let hue;
 for(var i = 0; i < nColors; i++) {
   // hue of 0 == hue of 360 so we go to nColors-1
   hue = 360*i/nColors;
   colorList.push(HSVtoHEX(hue,saturation,value));
 }
 return colorList;
}

let stringsToColors=function(list,dictionary){
 if(list==null) return;
  if(dictionary != null && dictionary.isTable)
   dictionary = buildDictionaryObjectForDictionary(dictionary);
  var colors =  new cL();
 for(var i=0; i<list.length; i++){
   colors[i] = dictionary ? dictionary[String(list[i])] : null;
   if(colors[i] == null)
     colors[i] = stringToColor(String(list[i]));
 }
  return colors;
}

let createCategoricalColors=function(mode, nColors, colorScaleFunction, alpha, interpolateColor, interpolateValue=0.5, colorList, bDarken) {
 colorScaleFunction = colorScaleFunction == null ? temperature : colorScaleFunction;
 let i, j;
 let newColorList = new cL();
 switch(mode) {
   case 0: //picking from cScale
     for(i = 0; i < nColors; i++) {
       newColorList[i] = colorScaleFunction(i / (nColors - 1));
     }
     break;
   case 1: //seeded random numbers
     var values = createRandomNumbers(nColors, null, 0);
     for(i = 0; i < nColors; i++) {
       newColorList[i] = colorScaleFunction(values[i]);
     }
     break;
   case 2:
     colorList = colorList==null?_HARDCODED_CATEGORICAL_COLORS:colorList;
     var nInterpolate;
     for(i = 0; i < nColors; i++) {
       newColorList[i] = colorList[i%colorList.length];
        if(bDarken && i >= colorList.length){
         // move towards black
         nInterpolate = Math.floor(i/colorList.length);
         for(j=0; j < nInterpolate;j++){
           newColorList[i]= interpolateColors(newColorList[i],'black',0.20);
         }
       }
     }
     break;
   case 3:
     newColorList = createColorListSpectrum(nColors);
     break;
   case 4:
   case 5:
     var randomNumbersSource = createRandomNumbers(1001, null, 0);
     var positions = createSortedNumberList(nColors);
     var randomNumbers = createRandomNumbers(nColors, null, 0);
     var randomPositions = sortListByNumberList(positions, randomNumbers);
      var nGenerations = Math.floor(nColors * 2) + 100;
     var nChildren = Math.floor(nColors * 0.6) + 5;
     var bCircular = mode == 4;
     var bExtendedNeighbourhood = mode == 4;
     var bestEvaluation = _evaluationFunction(randomPositions,bCircular,bExtendedNeighbourhood);
     var child;
     var bestChildren = randomPositions;
     var nr = 0;
     var evaluation;
      for(i = 0; i < nGenerations; i++) {
       for(j = 0; j < nChildren; j++) {
         child = _sortingVariation(randomPositions, randomNumbersSource[nr], randomNumbersSource[nr + 1]);
         nr = (nr + 2) % 1001;
         evaluation = _evaluationFunction(child,bCircular,bExtendedNeighbourhood);
         if(evaluation > bestEvaluation) {
           bestChildren = child;
           bestEvaluation = evaluation;
         }
       }
       randomPositions = bestChildren;
     }
     if(mode == 4){
       var colorListSpectrum = createColorListSpectrum(nColors);
       for(i = 0; i < nColors; i++) {
         newColorList.push(colorListSpectrum[randomPositions[i]]);
       }
     }
     else{ // 5
       for(i = 0; i < nColors; i++) {
         newColorList.push(colorScaleFunction((1 / nColors) + randomPositions[i] / (nColors + 1))); //TODO: make more efficient by pre-nuilding the colorList
       }
     }
     break;
 }
  if(interpolateValue>0 && interpolateColor != null) {
   newColorList = newColorList.getInterpolated(interpolateColor, interpolateValue);
 }
  if(alpha!=null) {
   newColorList = newColorList.addAlpha(alpha);
 }
   return newColorList;
}
let _sortingVariation=function(nl, rnd0, rnd1) { //private
 let newNumberList = nl.clone();
 let pos0 = Math.floor(rnd0 * newNumberList.length);
 let pos1 = Math.floor(rnd1 * newNumberList.length);
 let cache = newNumberList[pos1];
 newNumberList[pos1] = newNumberList[pos0];
 newNumberList[pos0] = cache;
 return newNumberList;
}
let _evaluationFunction=function(nl, bCircular, bExtendedNeighbourhood) { //private
 // bCircular == true means distance between 0 and n-1 is 1
 // bExtendedNeighbourhood == true means consider diffs beyond adjacent pairs
 let sum = 0;
 let i,d,r2,
   len=nl.length,
   h=Math.floor(len/2);
 let range = bExtendedNeighbourhood ? 4 : 1;
 for(var r=1; r <= range; r++){
   r2 = r*r;
   for(i = 0; nl[i + r] != null; i++) {
     d = Math.abs(nl[i + r] - nl[i]);
     if(bCircular && d > h){
       d = len-d;
     }
     sum += Math.sqrt(d/r2);
   }
 }
 return sum;
}
let createCategoricalColorListDictionaryObject=function(list, colorList, alpha, color, interpolate, invert){
 if(list==null) return;
  if(list.isTable){
   // special processing for tables, look at all categorical lists
   var table = list;
   var i,colorListRemaining,colorListToUse,oForList,oForTable,n,info;
   var colorListAll = colorList == null ? _HARDCODED_CATEGORICAL_COLORS : colorList;
   colorListRemaining = colorListAll.clone();
   // we want to try and have unique colors even for different categories if we can
   oForTable = {};
   for(i=0; i < table.length; i++){
     info = buildInformationObjectForList(table[i]);
     if(!info.isCategorical) continue;
     n = info.numberDifferentElements;
     if(n >= colorListAll.length)
       oForList = createCategoricalColorListDictionaryObject(table[i],colorListAll,alpha,color,interpolate,invert);
     else{
       if(n > colorListRemaining.length)
         colorListRemaining = colorListAll.clone();
       oForList = createCategoricalColorListDictionaryObject(table[i],colorListRemaining,alpha,color,interpolate,invert);
       colorListRemaining = colorListRemaining.getSubList(n,colorListRemaining.length-1);
     }
     // add the oForList to the oForTable
     // Note that if the same string is used in different lists the color choice might not be optimal
     oForTable = Object.assign(oForTable,oForList);
   }
   return oForTable;
 }
  var diffValues = list.getWithoutRepetitions();
  var diffColors = createCategoricalColors(2, diffValues.length, null, alpha, color, interpolate, colorList);
  if(invert) diffColors = diffColors.getInverted();
  var dictionaryObject = {};
  var l = diffColors.length
  for(i=0; i<l; i++){
   dictionaryObject[diffValues[i]] = diffColors[i];
 }
  // diffValues.forEach(function(element, i){
 //   dictionaryObject[element] = diffColors[i];
 // });
  return dictionaryObject;
}
let stringToDate=function(string, formatCase, separator) {// @todo: move to StringConversions
 if(string == null) return null;
 separator = separator == null ? "-" : separator;
 formatCase = formatCase == null ? 1 : formatCase;
  formatCase = Number(formatCase);
 if(string.type == 'sL' || _typeOf(string) == 'Array'){
   // operate on each element
   var i,sLRet = new dL();
   sLRet.name = string.name;
   for(i=0;i<string.length;i++){
     sLRet.push(stringToDate(string[i], formatCase, separator));
   }
   return sLRet;
 }
  string = String(string);
  if(formatCase == 1) {
   if(separator != "-") string = string.replace(new RegExp(separator, "g"), "-");
   // parseDate transforms '.' so we keep backwards compatibility in that case
   if(string.indexOf('.') == -1)
     return parseDate(string);
   return new Date(string);
 }
  var y;
 let parts = string.split(separator);
 switch(formatCase) {
   case 0: //MM-DD-YYYY
     return new Date(Number(parts[2]), Number(parts[0]) - 1, Number(parts[1]));
   case 1: //YYYY-MM-DD
     return new Date(string); //Number(parts[0]), Number(parts[1])-1, Number(parts[2]));
   case 2: //MM-DD-YY
     y = Number(parts[2]);
     y = y >= 0 ? y + 2000 : y + 1900;
     return new Date(y, Number(parts[0]) - 1, Number(parts[1]));
   case 3: //YY-MM-DD
     y = Number(parts[0]);
     y = y >= 0 ? y + 2000 : y + 1900;
     return new Date(y, Number(parts[1]) - 1, Number(parts[2]));
   case 4: //DD-MM-YY
     y = Number(parts[2]);
     y = y >= 0 ? y + 2000 : y + 1900;
     return new Date(y, Number(parts[1]) - 1, Number(parts[0]));
   case 5: //DD-MM-YYYY
     y = Number(parts[2]);
     return new Date(y, Number(parts[1]) - 1, Number(parts[0]));
   case 6: // YYYYMMDD
     y = Number(string.substr(0,4));
     var m = Number(string.substr(4,2));
     var d = Number(string.substr(6,2));
     return new Date(y, m - 1, d) ;
 }
}
let dateToString=function(date, formatCase=0, separator="-") {// @todo: move to DateConversions
 if(date == null) return null;
 if(date.type == 'dL' || _typeOf(date) == 'Array'){
   // operate on each element
   var i,sLRet = new sL();
   sLRet.name = date.name;
   for(i=0;i<date.length;i++){
     sLRet.push(dateToString(date[i], formatCase, separator));
   }
   return sLRet;
 }
 // separator = separator == null ? "-" : separator;
 // formatCase = formatCase == null ? 0 : formatCase;
 if(typeof date == 'string')
   date = new Date(date);
 let year = date.getFullYear();
 let yearTwoLast = String(year).substr(2);
 let month = date.getMonth() + 1;
 let day = date.getDate();
  switch(formatCase) {
   case 0: //MM-DD-YYYY
     return month + separator + day + separator + year;
   case 1: //YYYY-MM-DD
     return year + separator + month + separator + day;
   case 2: //MM-DD-YY
     return month + separator + day + separator + yearTwoLast;
   case 3: //YY-MM-DD
     return yearTwoLast + separator + month + separator + day;
   case 4: //YYYY-MM-DD HH:MM:SS
     var hour = date.getHours();
     var min = date.getMinutes();
     min = min < 10 ? '0' + min : min;
     var sec = date.getSeconds();
     sec = sec < 10 ? '0' + sec : sec;
     return year + separator + month + separator + day + ' ' + hour + ':' + min + ':' + sec;
   case 5: // d Month YYYY
     return day + ' ' + DateOperators_MONTH_NAMES[month-1] + ' ' + year;
   case 6: // dayname, d Month YYYY
     var dd = date.getDay();
     dd = dd == 0 ? dd = 6 : dd-1; // our list starts with monday for some reason
     return DateOperators_WEEK_NAMES[dd] + ', ' + day + ' ' + DateOperators_MONTH_NAMES[month-1] + ' ' + year;
   case 7: // month name
     return DateOperators_MONTH_NAMES[month-1];
   case 8: // dayname
     var dd = date.getDay();
     dd = dd == 0 ? dd = 6 : dd-1; // our list starts with monday for some reason
     return DateOperators_WEEK_NAMES[dd];
   case 9: //YYYY-MM-DD
     return year + separator + (month < 10 ? '0'+month : month) + separator + (day < 10 ? '0'+day : day);
   case 10: // HH:MM:SS
     var hour = date.getHours();
     hour = hour < 10 ? '0' + hour : hour;
     var min = date.getMinutes();
     min = min < 10 ? '0' + min : min;
     var sec = date.getSeconds();
     sec = sec < 10 ? '0' + sec : sec;
     return hour + ':' + min + ':' + sec;
   case 11: // DD-MM-YYYY
     return (day < 10 ? '0'+day : day) + separator + (month < 10 ? '0'+month : month) + separator + year;
 }
}
let clearHoursMinutesSeconds=function(date) {
 if(date==null) return null;
 let s = dateToString(date,1); // converts to YYYY-MM-DD
 return stringToDate(s,1);
}
let currentDate=function(trigger) {
 return new Date();
}
let addDaysToDate=function(date, nDays) {
 if(date == null) return null;
 nDays = nDays==null?0:nDays;
 if(typeof date == 'string')
   date = parseDate(date);
 let date2 = new Date(date);
 date2.setDate(date2.getDate() + nDays);
 return date2;
}
let addMillisecondsToDate=function(date, nMilliseconds) {
 return new Date(date.getTime() + nMilliseconds);
}
let parseDate=function(string) {
 string = String(string);
 // javascript date handling is problematic. See for example: new Date('1994-10-9') and new Date('1994-10-09')
 // We use numeric form for the special case of YYYY-MM-DD to make them consistent
 let aParts = string.match(/^(\d{4})[\-\.](\d{1,2})[\-\.](\d{1,2})$/);
 if(aParts && aParts.length == 4)
   return new Date(aParts[1],aParts[2]-1,aParts[3]);
 return new Date(Date.parse(string));
}
let parseDates=function(sl) {
 let dateList = new dL();
 let i;
 for(i = 0; sl[i] != null; i++) {
   dateList.push(this.parseDate(sl[i]));
 }
 return dateList;
}
let hoursBetweenDates=function(date0, date1) {
 return(date1.getTime() - date0.getTime()) * DateOperators_millisecondsToHours;
}
let daysBetweenDates=function(date0, date1) {
 return(date1.getTime() - date0.getTime()) * DateOperators_millisecondsToDays;
}
let weeksBetweenDates=function(date0, date1) {
 return(date1.getTime() - date0.getTime()) * DateOperators_millisecondsToWeeks;
}
let yearsBetweenDates=function(date0, date1) {
 return(date1.getTime() - date0.getTime()) * DateOperators_millisecondsToYears;
}
let nDayInYear=function(date) {
 return Math.floor((date.getTime() - new Date(date.getFullYear(), 0, 1).getTime()) * DateOperators_millisecondsToDays);
}
let getDateDaysAgo=function(nDays) {
 return addDaysToDate(new Date(), -nDays);
}
let getWeekInYear=function(date) {
 if(date == null) return null;
 let onejan = new Date(date.getFullYear(), 0, 1);
 return Math.ceil((((date - onejan) / 86400000) + onejan.getDay() + 1) / 7);
}
let getNDaysInMonth=function(month, year) {
 return new Date(year, month, 0).getDate();
}
let getDecimalDate=function(d0) {
 let date;
 if(d0 == null) return null;
 if(typeof d0 == 'string'){
   date = new Date(d0);
   if(isNaN(date))
     throw new Error('Invalid format for date:' + d0);
 }
 else
   date = d0;
  var year = date.getFullYear();
 d0 = new Date(year, 0, 1);
 let d1 = new Date(year + 1, 0, 1);
 return year + (date.getTime() - d0.getTime()) / (d1.getTime() - d0.getTime());
}
let convertFromDecimalDate=function(nDate) {
 if(nDate == null) return null;
 if(nDate.type == 'nL'){
   var dL = new dL();
   dL.name = nDate.name;
   for(var i=0;i < nDate.length; i++)
     dL.push(convertFromDecimalDate(nDate[i]));
   return dL;
 }
 let year = Math.floor(nDate);
 let d0 = new Date(year, 0, 1);
 let d1 = new Date(year + 1, 0, 1);
 let ntime = d0.getTime() + (d1.getTime()-d0.getTime())*(nDate-year);
 let date = new Date(Math.round(ntime));
 if(isNaN(date))
   throw new Error('Invalid decimal date value:' + nDate);
 return date;
}
let extractPropertiesFromDate=function(dt, cType){
 if(dt == null) return null;
 cType = cType == null ? 0 : cType;
 if(isNaN(cType) || cType % 1 !== 0 || cType < 0 || cType > 15)
   throw new Error('Invalid output type.');
  var res,dd,hrs,k;
 switch(cType){
   case 0:
     res = dt.getFullYear();
     break;
   case 1:
     res = dt.getMonth() + 1;
     break;
   case 2:
     res = dt.getDate();
     break;
   case 3:
     res = dt.getDay();
     break;
   case 4:
     res = dt.getHours();
     break;
   case 5:
     res = dt.getMinutes();
     break;
   case 6:
     res = dt.getSeconds();
     break;
   case 7:
     res = getDecimalDate(dt);
     break;
   case 8:
     res = nDayInYear(dt);
     break;
   case 9:
     dd = getDecimalDate(dt);
     res = Math.floor((dd - Math.floor(dd)) * 4) + 1;
     break;
   case 10:
     hrs = dt.getHours() + (dt.getMinutes()*60 + dt.getSeconds())/3600;
     res = Number(hrs.toFixed(5));
     break;
   case 11:
     res = [];
     for(k=0;k<7;k++){
       if(dt.getDay() == k)
         res.push(1);
       else
         res.push(0);
     }
     break;
   case 12:
     res = [];
     for(k=0;k<12;k++){
       if(dt.getMonth() == k)
         res.push(1);
       else
         res.push(0);
     }
     break;
   case 13:
     res = dateToString(dt,8);
     break;
   case 14:
     res = dateToString(dt,7);
     break;
   case 15:
     res = dt.getHours() >= 12 ? 'pm' : 'am';
     break;
 }
 return res;
}
let StringListToNumberList=function(stringlist) {
 let numbers = new nL();
 numbers.name = stringlist.name;
 let i;
 for(i = 0; stringlist[i] != null; i++) {
   numbers[i] = Number(stringlist[i]);
 }
 return numbers;
}
let toDateList=function(sl, formatCase, separator) {
 if(sl==null) return;
 
 let dateList = new dL();
 dateList.name = sl.name;
 let i;
 let l = sl.length;
 for(i = 0; i<l; i++) {
   dateList.push(stringToDate(sl[i], formatCase, separator));
 }
 return dateList;
}

let _y=function(date) {
 return date.getFullYear();
}
let _m=function(date) {
 return date.getMonth();
}
let _d=function(date) {
 return date.getDate() - 1;
}
let _h=function(date) {
 return date.getHours();
}
let _mn=function(date) {
 return date.getMinutes();
}
let _s=function(date) {
 return date.getSeconds();
}
let _ms=function(date) {
 return date.getMilliseconds();
}
let getDateLists=function(table){
 let newT = new T();
 for(var i=0; i<table.length; i++){
   if(table[i].type=="dL") newT.push(table[i]);
 }
 return newT;
}
let buildSummaryTableFromDates=function(dates,outputType,nlValues,intDates){
 if(dates == null || dates.type != 'dL') return null;
 outputType = outputType == null ? 0 : outputType;
 let nameType = 'Weekday by Hour Summary';
 let sCol0 = 'Hour';
 if(outputType == 1){
   nameType = 'Month by Day Summary';
   sCol0 = 'Day';
 }
 else if(outputType == 2){
   nameType = 'Sequence';
   sCol0 = 'Date';
 }
 let tab = new T();
 if(dates.name != null)
   tab.name = dates.name + ' ' + nameType;
 else
   tab.name = nameType;
 tab.push(new sL());
 tab[0].name = sCol0;
 let lang = window && window.navigator && window.navigator.language ? window.navigator.language : 'en-US';
 let dt0 = new Date(2016,0,17,10,0,0,0); // sunday
 let i,dt,nL,j,d,h;
 if(outputType == 2){
   // do this separately, it's too different from the other two outputs
   if(intDates == null || intDates.type != 'dI')
     intDates = new dI(dates.getMin(),dates.getMax());
   tab.push(new nL());
   tab[1].name = 'Value';
   var iDays = daysBetweenDates(intDates.date0,intDates.date1);
   // fill values with zero to start
   for(i=0;i<=iDays;i++){
     dt = addDaysToDate(intDates.date0,i);
     tab[0][i] = dateToString(dt,1);
     tab[1][i] = 0;
   }
   // now process dates
   for(i=0;i<dates.length;i++){
     // get row number
     j = Math.floor(daysBetweenDates(intDates.date0,dates[i]));
     if(j < 0 || j >= tab[1].length) continue; // skip entries outside of range
     if(bValues)
       tab[1][j] += nlValues[i];
     else
       tab[1][j] ++;
   }
   return tab;
 }
  var bValues = nlValues && nlValues.length == dates.length;
 let nCols = outputType == 0 ? 7 : 12;
 let inc = outputType == 0 ? 1 : 30;
 for(i=0;i<nCols;i++){
   dt = i == 0 ? dt0 : addDaysToDate(dt0,i*inc);
   nL = new nL();
   nL.name = dt.toLocaleString(lang, outputType == 0 ? {weekday: 'long'} : {month: 'long'});
   tab.push(nL);
   if(i==0){
     if(outputType == 0)
       for(j=0;j<24;j++){
         if(j==0)
           tab[0][j] = 'Midnight';
         else if(j==12)
           tab[0][j] = 'Noon';
         else if(j > 12)
           tab[0][j] = String(j-12);
         else
           tab[0][j] = String(j);
       }
     else
       for(j=0;j<31;j++){
         tab[0][j] = String(j+1);
       }
   }
 }
 for(d=1;d<=nCols;d++){
   for(h=0;h<tab[0].length;h++)
     tab[d][h]=0;
 }
 for(i=0;i<dates.length;i++){
   if(outputType==0){
     d = dates[i].getDay();
     h = dates[i].getHours();
   }
   else{
     d = dates[i].getMonth();
     h = dates[i].getDate()-1;
   }
   if(bValues)
     tab[d+1][h]+=nlValues[i];
   else
     tab[d+1][h]++;
 }
  return tab;
}
let transformDateList=function(dates, nLOutputs, sBaseName, dStart) {
 if(dates == null) return null;
 if(dates.type == 'sL')
   dates = toDateList(dates);
 if(nLOutputs == null)
   nLOutputs = nL.toL([0,1,2]);
 if(nLOutputs.type != 'nL' && !(nLOutputs instanceof Array) )
   throw new Error('Invalid input. Second argument must be a nL.');
 sBaseName = sBaseName == null ? '' : sBaseName;
 let aNames=['year','month','day of month','day of week','hour','minute','second','decimal date','day number of year','quarter','decimal hour','day','month','day name','month name','week number in year','day number'];
 let aDays=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
 let aMonths=['January','February','March','April','May','June','July','August','September','October','November','December'];
 let table;
  dStart = dStart == null ? '2000-01-01' : dStart;
 if(dStart.type == 'dL'){
   dStart = dStart.getMin();
 }
 else if(dStart.type == 'sL'){
   dStart = toDateList(dStart);
   dStart = dStart.getMin();
 }
 else if(typeof dStart == 'string'){
   if(dStart == 'earliest')
     dStart = dates.getMin();
   else{
     dStart = parseDate(dStart);
     if(isNaN(dStart))
       throw new Error('Invalid format for date:' + dStart);
   }
 }
 dStart = clearHoursMinutesSeconds(dStart);
  if(nLOutputs.includes(13) || nLOutputs.includes(14))
   table = new T();
 else
   table = new nT();
 let k,s2,cur;
 for(var c=0; c < nLOutputs.length; c++){
   var cType = nLOutputs[c];
   cur = table.length;
   if(isNaN(cType) || cType % 1 !== 0 || cType < 0 || cType > 16)
     throw new Error('Invalid output type.');
   if(cType == 11){
     for(k=0;k<7;k++){
       table.push(new nL());
       s2 = sBaseName == '' ? aNames[cType] : sBaseName + ' ' + aNames[cType];
       table[cur+k].name = s2 + ':' + aDays[k];
     }
   }
   else if(cType == 12){
     for(k=0;k<12;k++){
       table.push(new nL());
       s2 = sBaseName == '' ? aNames[cType] : sBaseName + ' ' + aNames[cType];
       table[cur+k].name = s2 + ':' + aMonths[k];
     }
   }
   else{
     if(cType == 13 || cType == 14)
       table.push(new sL());
     else
       table.push(new nL());
     table[cur].name = sBaseName == '' ? aNames[cType] : sBaseName + ' ' + aNames[cType];
   }
   for(var r=0; r < dates.length ; r++){
     var dt = dates[r];
     switch(cType){
       case 0:
         table[cur].push(dt.getFullYear());
         break;
       case 1:
         table[cur].push(dt.getMonth() + 1);
         break;
       case 2:
         table[cur].push(dt.getDate());
         break;
       case 3:
         table[cur].push(dt.getDay());
         break;
       case 4:
         table[cur].push(dt.getHours());
         break;
       case 5:
         table[cur].push(dt.getMinutes());
         break;
       case 6:
         table[cur].push(dt.getSeconds());
         break;
       case 7:
         table[cur].push(getDecimalDate(dt));
         break;
       case 8:
         table[cur].push(nDayInYear(dt));
         break;
       case 9:
         var dd = getDecimalDate(dt);
         dd = Math.floor((dd - Math.floor(dd)) * 4) + 1;
         table[cur].push(dd);
         break;
       case 10:
         var hrs = dt.getHours() + (dt.getMinutes()*60 + dt.getSeconds())/3600;
         hrs = Number(hrs.toFixed(5));
         table[cur].push(hrs);
         break;
       case 11:
         for(k=0;k<7;k++){
           if(dt.getDay() == k)
             table[cur+k].push(1);
           else
             table[cur+k].push(0);
         }
         break;
       case 12:
         for(k=0;k<12;k++){
           if(dt.getMonth() == k)
             table[cur+k].push(1);
           else
             table[cur+k].push(0);
         }
         break;
       case 13:
         table[cur].push(dateToString(dt,8));
         break;
       case 14:
         table[cur].push(dateToString(dt,7));
         break;
       case 15:
         table[cur].push(getWeekInYear(dt));
         break;
       case 16:
         table[cur].push(Math.round(daysBetweenDates(dStart,clearHoursMinutesSeconds(dt))));
         break;
     }
   }
 }
 return table;
}
let changeTimeResolution=function(dates, mode, maxPeriods,bAdaptiveUseActualPeriodsInData,modeOutput) {
 if(dates == null) return;
 maxPeriods = maxPeriods == null ? 100 : maxPeriods;
 mode = mode == null ? 0 : mode;
 bAdaptiveUseActualPeriodsInData = bAdaptiveUseActualPeriodsInData == null ? false : bAdaptiveUseActualPeriodsInData;
 modeOutput = modeOutput == null ? 0 : modeOutput;
 if(mode != Math.floor(mode) || mode < 0 || mode > 9)
   throw new Error('Invalid mode value provided in changeTimeResolution');
 // convert to regular dates
 let typeInitial = dates.type;
 if(dates.type == 'sL')
   dates = toDateList(dates);
 else if(dates.type == 'nL'){
   // decimal dates
   dates = convertFromDecimalDate(dates);
 }
 if(dates.type != 'dL')
   throw new Error('changeTimeResolution input must be a dL, sL containing dates, or a nL of decimal dates');
 let tEncoded = encodeDatesAsNumericFeatures(dates,[0,1,2,3,4,5,6,7]);
 let i,numPeriods,dt,dtTemp;
 // get interval of dates
 let intDates = tEncoded[7].getInterval();
 let dt0 = convertFromDecimalDate(intDates.x);
 let dt1 = convertFromDecimalDate(intDates.y);
 let nSecondsInSpan = (dt1.getTime() - dt0.getTime())/1000;
 // number of seconds in each time resolution, quarters/months/years/decades are approximate due to varying lengths
 let aTimeScales = [3652*24*3600,365*24*3600,91*24*3600,31*24*3600,7*24*3600,24*3600,3600,60,1];
 if(mode == 0){
   // choose mode 1->9
   mode = 9;
   for(mode=9; mode>=1; mode--){
     // find # periods in timespan at this resolution
     if(bAdaptiveUseActualPeriodsInData){
       var dates2 = changeTimeResolution(dates,mode);
       var nLTemp = dates2.toNumberList(); // decimal dates
       numPeriods = nLTemp.getWithoutRepetitions().length;
     }
     else
       numPeriods = nSecondsInSpan/aTimeScales[mode-1];
     if(numPeriods <= maxPeriods){
       break;
     }
   }
   // we don't go beyond decade resolution
 }
 if(mode < 1) mode = 1;
 // now mode is set to 1->9, convert dates to proper resolution based on mode
 let datesRet = new dL();
 datesRet.name = dates.name;
 let sLLabel = new sL();
 sLLabel.name = dates.name == null ? 'label' : dates.name + ' label';
 let year,month,day,hour,minute,second,s;
 let fn0 = function(n){
     if(n<10) return '0'+n;
     return ''+n;
 }
  for(i=0; i < dates.length; i++){
   year = tEncoded[0][i];
   month = tEncoded[1][i]-1;
   day = tEncoded[2][i];
   hour = tEncoded[4][i];
   minute = tEncoded[5][i];
   second = tEncoded[6][i];
   switch(mode){
     case 1: // decade
       year = Math.floor(year/10)*10;
       s = String(year);
       dt = new Date(year,0);
       break;
     case 2: // year
       dt = new Date(year,0);
       s = String(year);
       break;
     case 3: // quarter
       var q = ' Q' + (Math.floor(month/3) + 1);
       month = Math.floor(month/3)*3;
       dt = new Date(year,month); // months are zero-based
       s = String(year) + q;
       break;
     case 4: // month
       dt = new Date(year,month);
       s = String(year) + '-' + fn0(month+1) + '-01';
       break;
     case 5: // week
       // map to the sunday just before the original date
       dtTemp = new Date(year,month,day - tEncoded[3][i]);
       year = dtTemp.getFullYear();
       month = dtTemp.getMonth();
       day = dtTemp.getDate();
       dt = new Date(year,month,day);
       s = String(year) + '-' + fn0(month+1) + '-' + fn0(day);
       break;
     case 6: // day
       dt = new Date(year,month,day);
       s = String(year) + '-' + fn0(month+1) + '-' + fn0(day);
       break;
     case 7: // hour
       dt = new Date(year,month,day,hour);
       s = String(year) + '-' + fn0(month+1) + '-' + fn0(day) + ' ' + fn0(hour) + ':00:00';
       break;
     case 8: // minute
       dt = new Date(year,month,day,hour,minute);
       s = String(year) + '-' + fn0(month+1) + '-' + fn0(day) + ' ' + fn0(hour) + ':' + fn0(minute) + ':00';
       break;
     case 9: // second
       dt = new Date(year,month,day,hour,minute,second);
       s = String(year) + '-' + fn0(month+1) + '-' + fn0(day) + ' ' + fn0(hour) + ':' + fn0(minute) + ':' + fn0(second);
       break;
   }
   datesRet.push(dt);
   sLLabel.push(s);
 }
 // we want to emit the dates in the same form as they came in
 if(typeInitial == 'nL')
   datesRet = datesRet.toNumberList();
 else if(typeInitial == 'sL')
   datesRet = dateToString(datesRet,1);
 if(modeOutput == 0)
   return datesRet;
 let tabOutput = new T();
 tabOutput.push(datesRet);
 tabOutput.push(sLLabel);
 if(modeOutput == 1)
   return tabOutput;
  numPeriods = nSecondsInSpan/aTimeScales[mode-1];
 numPeriods = Number.isInteger(numPeriods) ? numPeriods+1 : Math.ceil(numPeriods);
  var oResult = {
   'table': tabOutput,
   'extra': {
     'numPeriods' :numPeriods,
     'modeUsed' : mode,
     'intervalDates' : intDates
   }
 };
  oResult.name = dates.name + "("+mode+")";
  return oResult;
}
let getElementFromTable=function(table, i, j) {//deprecated, replaced by getCell
 if(table[i] == null) return null;
 return table[i][j];
}
let getSubTable=function(table, x, y, width, height) {
 if(table == null) return table;
  var nLists = table.length;
 if(nLists === 0) return null;
 let result = new T();
  if(width <= 0) width = (nLists - x) + width;
 x = Math.min(x, nLists - 1);
 width = Math.min(width, nLists - x);
  var nRows = table[0].length;
  if(nRows === 0) return null;
  if(height <= 0) height = (nRows - y) + height;
  y = Math.min(y, nRows - 1);
 height = Math.min(height, nRows - y);
  var column;
 let newColumn;
 let i;
 let j;
 let element;
 for(i = x; i < x + width; i++) {
   column = table[i];
   newColumn = new L();
   newColumn.name = table[i].name;
   for(j = y; j < y + height; j++) {
     element = column[j];
     newColumn.push(element);
   }
   result.push(newColumn.downcast());
 }
 return result.downcast();
}
let sliceColumns=function(table, indexColumn0, indexColumn1){
 if(typeof(indexColumn0)=='string') indexColumn0=table.getNames().indexOf(indexColumn0);
 if(indexColumn1!=null && typeof(indexColumn1)=='string') indexColumn1=table.getNames().indexOf(indexColumn1);
 return table.getSubList(indexColumn0, indexColumn1);
}
let filterTable=function(table, operator, value, listToCheck, value2, bIgnoreCase, returnIndexes, multiplValuesMode, onNames){
  // input validation and defaults
 if(table==null || table.length === 0 || table[0]==null) return;
 if(table.isList && !table.isTable){
   // we have a single list, wrap it and continue
   var temp = new T();
   temp.push(table);
   table = temp;
 }
 if(onNames) return table.getElements(filterList(table.getNames(), operator, value, listToCheck, value2, true));
 if(operator === undefined && value === undefined) return returnIndexes?createSortedNumberList(table[0].length):table;
 if(operator === '!contains' && (value === undefined || value === '') ) return returnIndexes?createSortedNumberList(table[0].length):table;
 if(operator==null) operator='=c';
 if(operator == '=') operator = '==';
 operator = operator.toLowerCase();
  var nLKeep = new nL();
 let nRows = table.getLengths().getMax();
 let r,c,val,val0,bKeep,score;
 let cStart=0;
 let cEnd=table.length;
 let type = _typeOf(value);
 let bExternalList = listToCheck != null && listToCheck.isList === true;
  var multipleValues = value!= null && value["isList"]==true && value.length>0;
 if(multipleValues){
   multiplValuesMode = multiplValuesMode==null?0:multiplValuesMode;
   var indexes;
    nLKeep = filterTable(table, operator, value[0], listToCheck, value2, bIgnoreCase, true);
    for(var i=1; i<value.length; i++){
     val = value[i];
     indexes = filterTable(table, operator, val, listToCheck, value2, bIgnoreCase, true);
     nLKeep = multiplValuesMode==1?intersection(nLKeep, indexes):union(nLKeep, indexes);
   }
    return returnIndexes?nLKeep:table.getRows(nLKeep);
 }
     if(bExternalList && listToCheck.length != nRows){
   throw new Error('selected L (in listToCheck position) must have same length as table');
 }
  if(listToCheck!=null){
   if(typeof listToCheck === 'string') listToCheck=table.getNames().indexOf(listToCheck);
   if(listToCheck==-1) throw new Error('do not find any list with such name');
 }
  if(value==null){
   type = 'Null';
   value = '';
 } else if(type == 'string' &&  (String(value)==String(Number(value))) && value.trim() !== ''){
   type='number';
   value=Number(value);
 } else if(type == 'boolean'){
   type='string';
   value=String(value);
 }
  if(operator == '=c'){
   if(type == 'string')
     operator = 'contains';
   else
     operator = '==';
 }
 if(type == 'number' && (operator == 'between' || operator == '!between') ){
   if(isNaN(value2))
     operator='noop';
   else {
     value2 = Number(value2)
   }
 }
 if( (operator == 'between' || operator == '!between')  && value2 == null)
   operator='noop';
 if( (operator == 'fuzzy' || operator == 'fuzzywords') && value2 == null)
   value2=50;
 if(listToCheck != null){
   cStart=listToCheck;
   cEnd=listToCheck+1;
 }
 if(bExternalList){
   cStart=0;
   cEnd=1;
 }
  if(bIgnoreCase == null || (bIgnoreCase !== true && bIgnoreCase !== false) )
   bIgnoreCase = true;
 if(type == 'string' && bIgnoreCase){
   value = value.toLowerCase();
   value2 = value2 ? String(value2).toLowerCase() : value2;
 }
 if(operator == '==' && bIgnoreCase)
   operator = '==i';
 if(operator == '!=' && bIgnoreCase)
   operator = '!=i';
 
  var stringedValue = String(value);
 let stringedValue2 = value2==null?null:String(value2);
  var isString = type=='string';
 let isNumber = type=='number';
  var list;
  switch(operator){
   case "==":
     for(r=0; r<nRows; r++){
       for(c=cStart; c<cEnd; c++){
         list = bExternalList ? listToCheck : table[c];
         if(list.type=="nL" && isString || list.type=="sL" && isNumber) continue;
         val0 = list[r];
         if(val0 == null) val0 = '';
         if(val0 == value){
           nLKeep.push(r);
           break;
         }
       }
     }
     break;
   case "==i":
     for(r=0; r<nRows; r++){
       for(c=cStart; c<cEnd; c++){
         list = bExternalList ? listToCheck : table[c];
         if(list.type=="nL" && isString) continue;
         val = list[r]==null?'':list[r];
         val = list.type=="sL"?val:String(val);
         //val0 = bExternalList ? listToCheck[r] : table[c][r];
         //val = val0 == null ? '' : String(val0).toLowerCase();
         val = bIgnoreCase?val.toLowerCase():val;
         if(val == value){
           nLKeep.push(r);
           break;
         }
       }
     }
     break;
   case "!=":
     for(r=0; r<nRows; r++){
       bKeep=true;
       for(c=cStart; c<cEnd; c++){
         val0 = bExternalList ? listToCheck[r] : table[c][r];
         if(val0 == null) val0 = '';
         if(val0 == value){
           bKeep=false;
           break;
         }
       }
       if(bKeep)
         nLKeep.push(r);
     }
     break;
   case "!=i":
     for(r=0; r<nRows; r++){
       bKeep=true;
       for(c=cStart; c<cEnd; c++){
         val0 = bExternalList ? listToCheck[r] : table[c][r];
         val = val0 == null ? '' : String(val0).toLowerCase();
         if(val == value){
           bKeep=false;
           break;
         }
       }
       if(bKeep)
         nLKeep.push(r);
     }
     break;
   case "contains":
     for(r=0; r<nRows; r++){
       for(c=cStart; c<cEnd; c++){
         list = bExternalList ? listToCheck : table[c];
         if(list.type=="nL" && isString) continue;
         val = list.type=="sL"?list[r]:String(list[r]);
         //val0 = bExternalList ? (listToCheck.type=="sL"?listToCheck[r]:String(listToCheck[r])) : (table[c].type=="sL"?table[c][r]:String(table[c][r]));
         val = bIgnoreCase?val.toLowerCase():val;
         if(val.includes(stringedValue)){
           nLKeep.push(r);
           break;
         }
       }
     }
     break;
   case "!contains":
     for(r=0; r<nRows; r++){
       bKeep=true;
       for(c=cStart; c<cEnd; c++){
         val0 = bExternalList ? listToCheck[r] : table[c][r];
         val = bIgnoreCase ? String(val0).toLowerCase() : String(val0);
         if(val.includes(stringedValue)){
           bKeep=false;
           break;
         }
       }
       if(bKeep)
         nLKeep.push(r);
     }
     break;
   case "init":
     for(r=0; r<nRows; r++){
       for(c=cStart; c<cEnd; c++){
         val0 = bExternalList ? listToCheck[r] : table[c][r];
         val = bIgnoreCase ? String(val0).toLowerCase() : String(val0);
         if(val.indexOf(stringedValue) === 0){
           nLKeep.push(r);
           break;
         }
       }
     }
     break;
   case "<":
   case "<=":
     for(r=0; r<nRows; r++){
       for(c=cStart; c<cEnd; c++){
         val0 = bExternalList ? listToCheck[r] : table[c][r];
         if(type != _typeOf(val0)) continue;
         //val = bIgnoreCase ? String(val0).toLowerCase() : String(val0);
         val =  (type == 'string')?( bIgnoreCase ? String(val0).toLowerCase() : String(val0) ):Number(val0);
         if(val < value){
           nLKeep.push(r);
           break;
         }
         else if(val == value && operator == '<='){
           nLKeep.push(r);
           break;
         }
       }
     }
     break;
   case ">":
   case ">=":
     for(r=0; r<nRows; r++){
       for(c=cStart; c<cEnd; c++){
         val0 = bExternalList ? listToCheck[r] : table[c][r];
         if(type != _typeOf(val0)) continue;
         val =  (type == 'string')?( bIgnoreCase ? String(val0).toLowerCase() : String(val0) ):Number(val0);
         if(val > value){
           nLKeep.push(r);
           break;
         }
         else if(val == value && operator == '>='){
           nLKeep.push(r);
           break;
         }
       }
     }
     break;
   case "between":
     for(r=0; r<nRows; r++){
       for(c=cStart; c<cEnd; c++){
         val0 = bExternalList ? listToCheck[r] : table[c][r];
         //if(type != typeOf(val0)) continue;
          //val = bIgnoreCase ? String(val0).toLowerCase() : String(val0);
         val =  (type == 'string')?( bIgnoreCase ? String(val0).toLowerCase() : String(val0) ):Number(val0);
          if(type == 'number')
           val = Number(val);
          if(value <= val && val <= value2){
           nLKeep.push(r);
           break;
         }
       }
     }
     break;
   case "!between":
     for(r=0; r<nRows; r++){
       for(c=cStart; c<cEnd; c++){
         val0 = bExternalList ? listToCheck[r] : table[c][r];
         //if(type != typeOf(val0)) continue;
          //val = bIgnoreCase ? String(val0).toLowerCase() : String(val0);
         val =  (type == 'string')?( bIgnoreCase ? String(val0).toLowerCase() : String(val0) ):Number(val0);
          if(type == 'number')
           val = Number(val);
          if(value > val || val > value2){
           nLKeep.push(r);
           break;
         }
       }
     }
     break;
   case "unique":
     // this operator will keep only rows with unique combinations of values in the target lists
     var dict = {};
     for(r=0; r<nRows; r++){
       var sCheck='';
       for(c=cStart; c<cEnd; c++){
         val0 = bExternalList ? listToCheck[r] : table[c][r];
         val = bIgnoreCase ? String(val0).toLowerCase() : String(val0);
         sCheck = sCheck + '|' + val;
       }
       if(dict[sCheck] == null){
         dict[sCheck] = true;
         nLKeep.push(r);
       }
     }
     break;
   case "fuzzy":
   case "fuzzywords":
     // same as fuzzy but split target strings into words first and take the best match
     value = String(value).trim();
     if(value == '')
       break;
     value2 = Number(value2);
     var tfuzzy = new nT(2);
     var aVals, scoreMax, i0;
     for(r=0; r<nRows; r++){
       for(c=cStart; c<cEnd; c++){
         val0 = bExternalList ? listToCheck[r] : table[c][r];
         val = bIgnoreCase ? String(val0).toLowerCase() : String(val0);
         if(operator == 'fuzzywords')
           aVals = val.split(' ');
         else
           aVals = [val];
         scoreMax = 0;
         for(i0 = 0; i0 < aVals.length && scoreMax < value2; i0++){
           score = 100*(1-getLevenshteinDistance(aVals[i0],value,true));
           // for fuzzywords also consider a match on the start of the word of the same size as the pattern
           // penalize it a bit compared to a normal match by using 90 rather than 100
           // if(operator == 'fuzzywords' && aVals[i0].length > value.length)
             // score = Math.max(score, 90*(1-getLevenshteinDistance(aVals[i0].substring(0,value.length),value,true)));
           scoreMax = Math.max(scoreMax,score);
         }
         if(scoreMax >= value2){
           tfuzzy[0].push(r);
           tfuzzy[1].push(scoreMax);
           break;
         }
       }
     }
     tfuzzy = tfuzzy.sortRowsByList(1,false,true);
     nLKeep = tfuzzy[0];
     break;
   default:
     if(typeof(operator) == 'function'){
       for(r=0; r<nRows; r++){
         for(c=cStart; c<cEnd; c++){
           if(operator.call(this,table[c][r], value, value2, listToCheck, table, c, r, bIgnoreCase) ){
             nLKeep.push(r);
             break;
           }
         }
       }
     }
 }
  if(returnIndexes) return nLKeep;
  var newTable = new T();
 newTable.name = table.name;
 let len = table.length;
  for(c=0; c<len; c++){
   newTable.push(table[c].getElements(nLKeep,true)); // need second parm to handle null elements properly
 }
 return newTable.downcast();
}
let filterColumns=function(table, minMumberDifferentValues, maxProportionDifferentValues, minEntropy, maxEntropy, mode){
 if(table==null) return;
 
 let newTable = new T();
  var column, iO;
  for(var i=0; i<table.length; i++){
   column = table[i];
   iO = buildInformationObjectForList(column, true);
    if(minMumberDifferentValues!=null && iO.numberDifferentElements<minMumberDifferentValues) continue;
   if(maxProportionDifferentValues!=null && iO.numberDifferentElements/column.length>maxProportionDifferentValues) continue;
   if(minEntropy!=null && iO.entropy<minEntropy) continue;
   if(maxEntropy!=null && iO.entropy>maxEntropy) continue;
    switch(mode){
     case 0://type numbers
       if(!iO.isNumeric) continue;
       break;
     case 1://type strings
       if(column.type!="sL") continue;
       break;
     case 2://type numbers
       if(!iO.isCategorical) continue;
       break;
     case 3://type integers
       if(iO.kind != "integer numbers") continue;
       break;
     case 4://without nulls
       if(iO.containsNulls) continue;
       break;
     case 5://without blank cells
       if(column.includes("") || column.includes(" ") || column.includes("  ")) continue;
       break;
     case 6://without blank cells
       if(column.type!="nL" && !iO.isCategorical) continue;
       break;
   }
    newTable.push(column);
 }
  return newTable.downcast();
}
let getSubTableByElementOnList=function(table, nList, element){
 if(table==null || nList==null || element==null) return;
  var i, j;
 let nLists = table.length;
  if(nList<0) nList = nLists+nList;
 nList = nList%nLists;
  var newTable = instanceSameType(table);
 newTable.name = table.name;
  for(i=0; i<nLists; i++){
   var newList = new L();
   newList.name = table[i].name;
   newTable.push(newList);
 }
 // table.forEach(function(list){
 //   var newList = new L();
 //   newList.name = list.name;
 //   newTable.push(newList);
 // });
  var supervised = table[nList];
 let nSupervised = supervised.length;
 let nElements;
  for(i=0; i<nSupervised; i++){
   if(element==supervised[i]){
     nElements = newTable.length;
      for(j=0; j<nElements; j++){
         newTable[j].push(table[j][i]);
      }
   }
 }
  nLists = newTable.length;
  for(i=0; i<nLists; i++){
   newTable[i] = newTable[i].downcast();
 }
 // newTable.forEach(function(list, i){
 //   newTable[i] = list.downcast();
 // });
  return newTable.downcast();
}
let getSubTableByElementsOnList=function(table, nList, list){
 if(table==null || nList==null || list==null) return;
  var i, j;
  if(nList<0) nList = table.length+nList;
 nList = nList%table.length;
  var newTable = instanceSameType(table);
 newTable.name = table.name;
  table.forEach(function(list){
   var newList = new L();
   newList.name = list.name;
   newTable.push(newList);
 });
  var supervised = table[nList];
  var listDictionary = getBooleanDictionaryForList(list);
  for(i=0; supervised[i]!=null; i++){
   if(listDictionary[supervised[i]]){
      for(j=0; newTable[j]!=null; j++){
         newTable[j].push(table[j][i]);
      }
   }
 }
  newTable.forEach(function(list, i){
   newTable[i] = list.downcast();
 });
  return newTable.downcast();
}


let getRandomRows=function(table, numberOrProportion=0.5, avoidRepetitions=true, shuffle, randomSeed) {
 if(table == null || table[0] == null) return null

 if(numberOrProportion < 0) return null
 let nRows = table[0].length
 const n = numberOrProportion <= 1?Math.round(numberOrProportion*nRows):Math.round(numberOrProportion)

 let listIndexes = createSortedNumberList(nRows, 0, 1);
  //if(shuffle) listIndexes = listIndexes.getSortedRandom();
  listIndexes = listIndexes.getRandomElements(n, avoidRepetitions, randomSeed);
  if(!shuffle) listIndexes = listIndexes.getSorted();
  return table.getRows(listIndexes);
}

let transpose=function(table, firstListAsHeaders, headersAsFirstList) {
 if(table == null || !table.isTable) return null;
 return table.transpose(firstListAsHeaders, headersAsFirstList);
}
let replaceElementInTable=function(table, elementToBeRemoved, elementToBePlaced){
 if(table==null) return;
  var nLists = table.length;
 let l;
 let i, j;
 let list, newList;
  var newTable = new T();
  for(i=0; i<nLists; i++){
   list = table[i];
   l = list.length;
   newList = new L();
   newTable[i] = newList;
   for(j=0; j<l; j++){
     newList[j] = list[j]==elementToBeRemoved?elementToBePlaced:list[j];
   }
   newList = newList.downcast();
   newList.name = list.name;
 }
  return newTable.downcast();
}
let replaceSectionInTable=function(table, elementListOrTable, column0, column1, row0, row1){
 if(table==null) return;
  var onlyColumn = column0!=null && column0==column1;
 let onlyRow = row0!=null && row0==row1;
 let names;
 let i, j;
  if(column0==null) column0 = 0;
 if(column1==null) column1 = table.length-1;
 if(row0==null) row0 = 0;
 if(row1==null) row1 = table[0].length-1;
  if(typeof(column0)=='string' || typeof(column1)=='string') names = table.getNames();
  if(typeof(column0)=='string') column0 = names.indexOf(column0);
 if(typeof(column1)=='string') column1 = names.indexOf(column1);
  if(onlyColumn && onlyRow){
   if(elementListOrTable["isList"]) elementListOrTable = elementListOrTable[0];
   if(elementListOrTable["isList"]) elementListOrTable = elementListOrTable[0];
   return replaceCellInTable(table, elementListOrTable, column0, row0);
 }
  if(onlyColumn){
   var newTable = new T();
    if(elementListOrTable["isTable"]) elementListOrTable = elementListOrTable[0];
    for(i=0; i<table.length; i++){
     if(i==column0){
       newTable[i] = new L();
       newTable[i].name = table[i].name;
       for(j=0; j<table[i].length; j++){
         if(j<row0 || j>row1){
           newTable[i][j] = table[i][j];
         } else {
           newTable[i][j] = elementListOrTable[j-row0];
         }
       }
       newTable[i] = newTable[i].downcast();
     } else {
       newTable[i] = table[i];
     }
   }
   return newTable.downcast();
 }
  var newTable;
  if(onlyRow){
   newTable = new T();
    if(elementListOrTable["isTable"]) elementListOrTable = elementListOrTable.getRow(0);
    for(i=0; i<table.length; i++){
     if(i<column0 || i>column1){
       newTable[i] = table[i];
     } else {
       newTable[i] = table[i].clone();
       newTable[i][row0] = elementListOrTable[i-column0];
       newTable[i] = newTable[i].downcast();
     }
   }
   return newTable.downcast();
 }
  newTable = new T();
  column1 = Math.min(column1, column0+elementListOrTable.length);
 row1 = Math.min(row1, row0+elementListOrTable[0].length);
  for(i=0; i<table.length; i++){
   if(i<column0 || i>column1){
     newTable[i] = table[i];
   } else {
     newTable[i] = new L();
     newTable[i].name = table[i].name;
     for(j=0; j<table[i].length; j++){
       if(j<row0 || j>row1){
         newTable[i][j] = table[i][j];
       } else {
         newTable[i][j] = elementListOrTable[i-column0][j-row0];
       }
     }
     newTable[i] = newTable[i].downcast();
   }
 }
  return newTable.downcast();
}
let replaceNullsInTable=function(table, modeForNumbers, modeForNotnumbers, number, element, nullElement){
 if(table==null) return;
if(number!=null) modeForNumbers = modeForNumbers==null?0:modeForNumbers;
 if(element!=null) modeForNotnumbers = modeForNotnumbers==null?0:modeForNotnumbers;
 number = (number==null && modeForNumbers!=null)?0:number;
 element = (element==null && modeForNotnumbers!=null)?"-":element;
  var nLists = table.length;
 let l;
 let i, j;
 let list, newList;
 let notNumeric;
 let containsNull;
  var modesList = (modeForNumbers!=null && modeForNumbers["length"] && modeForNumbers["isList"])?modeForNumbers:null;
 let elements = (element!=null && element["length"] && element["isList"])?element:null;
  var newTable = new T();
  if(modesList){
   nLists = Math.min(nLists, modesList.length);
   var modesDictionary = {0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,"element":0,"previous":1,"next":2,"average":3,"local average":4,"interpolate":5,"common":6,"median":7};
 }
  for(i=0; i<nLists; i++){
   list = table[i];
   l = list.length;
   notNumeric = false;
   containsNull = false;
   for(j=0; j<l; j++){
     if(list[j]==nullElement){
       containsNull=true;
     } else if(typeof list[j] != "number"){
       notNumeric = true;
       if(containsNull) break;
     }
   }
    if(containsNull){
     if(modesList){
       newList = replaceNullsInList(list, modesDictionary[modesList[i]], elements?elements[i%nLists]:element, nullElement);
     } else if(notNumeric){
       newList = replaceNullsInList(list, modeForNotnumbers==3?6:modeForNotnumbers, element, nullElement);
     } else {
       newList = replaceNullsInList(list, modeForNumbers, number, nullElement);
     }
     newTable[i] = newList;
   } else {
     newTable[i] = list;
   }
 }
  return newTable.downcast();
}


let testClassificationModel=function(numberTable, classes, model, metric) {
 if(numberTable == null || classes == null || model == null) return null;
  metric = metric || 0;
  var nErrors = 0;
  classes.forEach(function(clss, i) {
   if(model(numberTable[0][i], numberTable[1][i]) != clss) {
     nErrors++;
   }
 });
  return nErrors / classes.length;
}
let getRows=function(table, indexes) {
 let newTable = new T();
 newTable.name = table.name;
 let list;
 let newList;
 for(var i = 0; table[i] != null; i++) {
   list = table[i];
   newList = instanceSameType(list);
   newList.name = list.name;
   for(var j = 0; indexes[j] != null; j++) {
     newList[j] = list[indexes[j]];
   }
   newTable[i] = newList.downcast();
 }
 return newTable;
}
let sortListsByNumberList=function(table, nl, descending) {
 if(descending == null) descending = true;
  var newTable = instantiate(_typeOf(table));
 newTable.name = table.name;
 let nElements = table.length;
 let i;
 // only need to do the sort once, not for each column
 let indexList = nl.clone();
 // save original index
 for(i = 0; i < indexList.length; i++) {
   indexList[i] = i;
 }
 indexList = sortListByNumberList(indexList, nl, descending);
 // now clone and then move from original based on index
 for(i = 0; i < nElements; i++) {
   newTable[i] = table[i].clone();
   for(var j = 0; j < indexList.length; j++) {
     newTable[i][j] = table[i][indexList[j]];
   }
 }
 return newTable;
}
let aggregateTable=function(table, indexAggregationList, indexesListsToAggregate, modes, newListsNames, weightList, aggregationModesForReminaingLists, aggregationFunction){
  indexAggregationList = indexAggregationList||0;
  if(table==null) return;
  if(indexesListsToAggregate==null) indexesListsToAggregate = createSortedNumberList( table.length);
 if(modes==null) modes = createListWithSameElement( table.length, 9 );
  if(indexesListsToAggregate.type=='sL') indexesListsToAggregate = table.getNames().indexesOfElements(indexesListsToAggregate);
 if(indexesListsToAggregate.type != 'nL' && Array.isArray(indexesListsToAggregate)) indexesListsToAggregate = nL.toL(indexesListsToAggregate);
 if(typeof(indexAggregationList)=='string') indexAggregationList = table.getNames().indexOf(indexAggregationList);
  if(!table.length ||  table.length<indexAggregationList || indexesListsToAggregate==null || !indexesListsToAggregate.length || modes==null) return;
  //remaining lists
 if(aggregationModesForReminaingLists!=null && aggregationModesForReminaingLists.length==3){
   var infoOb;
   indexesListsToAggregate = indexesListsToAggregate.clone();
   modes = modes.clone();
   for(var i=0; i<table.length; i++){
     if(!indexesListsToAggregate.includes(i)){
       indexesListsToAggregate.push(i);
       infoOb = buildInformationObjectForList(table[i]);
       if(infoOb.isNumericCategorical){
         modes.push(aggregationModesForReminaingLists[0]);
       } else if(infoOb.isNumeric){
         modes.push(aggregationModesForReminaingLists[1]);
       } else {
         modes.push(aggregationModesForReminaingLists[2]);
       }
     }
   }
 }
  if(indexAggregationList["length"]!=null){
    if(indexAggregationList.length==table[0].length){
     aggregatorList = indexAggregationList;
   } else if(indexAggregationList.length==0){
     indexAggregationList = indexAggregationList[0];
   } else {//multiple aggregation
     var toAggregate = table.getColumns(indexAggregationList);
     var typesToAggregate = toAggregate.getTypes();
      var text;
     var j;
     var textsList = new sL();
     var JOIN_CHARS = "*__*";
     l = toAggregate[0].length;
     for(i=0; i<l; i++){
       text = toAggregate[0][i];
       for(j=1; j<toAggregate.length; j++){
         text+=JOIN_CHARS+toAggregate[j][i];
       }
       textsList[i] = text;
     }
      
      /** new idea:
      don't remove indexAggregationList, just put textsList at the beginning
     as well as a new index in newIndexesListsToAggregate (0)
     and a new mode (0),
     and a new name ("")
     */
    
    //unshift?
    newTable = new T.toL( [textsList].concat(table.getElements(indexesListsToAggregate)) );
     var newIndexesListsToAggregate = new nL();
     var newModes = new nL();
     newIndexesListsToAggregate[0] = 0;
     newModes[0] = 0;
     if(newListsNames!=null){
       newListsNames = newListsNames.clone();
       newListsNames.unshift("_");
     }
      for(var i=0; i<indexesListsToAggregate.length; i++){
       newIndexesListsToAggregate.push(indexesListsToAggregate[i]+1);
       newModes.push(modes[i]);
     }
      var indexes = createSortedNumberList(newTable.length-1, 1);
      newTable = aggregateTable(newTable, 0, indexes, newModes, newListsNames);
      return newTable;
      /*
     var aggregationTable = new T();
     var parts;
      for(j=0; j<indexAggregationList.length; j++){
         aggregationTable[j] = instantiate(typesToAggregate[j]);
         aggregationTable[j].name = toAggregate[j].name;
     }
      l = newTable[0].length;
      for(i=0; i<l; i++){
       text = newTable[0][i];
       parts = text.split(JOIN_CHARS);
       for(j=0; j<indexAggregationList.length; j++){
          aggregationTable[j][i] = typesToAggregate[j]=="nL"?Number(parts[j]):parts[j];
        }
     }
      return T.toL(aggregationTable.concat(newTable.getSubList(1))).downcast();
     */
     ////////end new idea
     //---> fix this
    //
    /*
     newTable = new T.toL( [textsList].concat(table.getElements(indexesListsToAggregate.getWithoutElements(indexAggregationList))) );
       var newIndexesListsToAggregate = new nL();
     var newModes = new nL();
     newIndexesListsToAggregate[0] = 0;
     newModes[0] = 0;
     
      for(i=indexAggregationList.length; i<indexesListsToAggregate.length; i++){
       newIndexesListsToAggregate.push(i+1);
       newModes.push(modes[i]);
     }
      newTable = aggregateTable(newTable, 0, newIndexesListsToAggregate, newModes, newListsNames);
      return newTable;
     */
      /*
     var aggregationTable = new T();
     var parts;
      for(j=0; j<indexAggregationList.length; j++){
         aggregationTable[j] = instantiate(typesToAggregate[j]);
         aggregationTable[j].name = toAggregate[j].name;
     }
      l = newTable[0].length;
      for(i=0; i<l; i++){
       text = newTable[0][i];
       parts = text.split(JOIN_CHARS);
       for(j=0; j<indexAggregationList.length; j++){
          aggregationTable[j][i] = typesToAggregate[j]=="nL"?Number(parts[j]):parts[j];
        }
     }
      return T.toL(aggregationTable.concat(newTable.getSubList(1))).downcast();
     */
   }
 }
    var aggregatorList = aggregatorList==null?table[indexAggregationList]:aggregatorList;
 let indexesTable = getIndexesTable(aggregatorList);
 let newTable = new T();
 let newList;
 let toAggregateList;
 let index;
 let l = indexesListsToAggregate.length;
  //indexesListsToAggregate.forEach(function(index, i){
 for(i=0; i<l; i++){
   index = indexesListsToAggregate[i];
   toAggregateList = table[index];
   newList = aggregateList(aggregatorList, toAggregateList, i<modes.length?modes[i]:1, indexesTable, weightList, aggregationFunction)[1];
   if(newListsNames && i<newListsNames.length){
     newList.name = newListsNames[i];
   } else {
     newList.name = toAggregateList.name;
   }
   newTable.push(newList);
 }
 //});
  return newTable.downcast();
}
let disAggregateTable=function(table, indexesExpansion, indexToSplit, tagsSeparator = ","){
 if(table==null || indexToSplit==null) return;
 if(typeof(indexesExpansion)=="number") indexesExpansion = [indexesExpansion]
  var lists = indexesExpansion==null?table:table.getColumns(indexesExpansion);
 let toSplit = table.get(indexToSplit);
  var split = new L();
 split.name = toSplit.name;
 let newTable = new T();
  for(var i=0; i<lists.length; i++){
   newTable[i] = instanceSameType(lists[i]);
   newTable[i].name = lists[i].name;
 }
 newTable.push(split)
  var parts;
  for(i=0; i<lists[0].length; i++){
   parts = sL.toL(String(toSplit[i]).split(tagsSeparator)).trim();
   for(var j=0; j<parts.length; j++){
     for(var k=0; k<lists.length; k++){
       newTable[k].push(lists[k][i]);
     }
     split.push(String(Number(parts[j]))==parts[j]?Number(parts[j]):parts[j]);
   }
  }
  split = split.downcast()
    return newTable;
}
let deSegmentTable=function(table, weights, expansionFactor) {
   expansionFactor = expansionFactor==null?10:expansionFactor;
   
   var repetitions = normalizeToSum(weights, expansionFactor*weights.length);
   var newTable = new T();
   
   
   for(var i=0; i<table.length; i++){
       newTable[i] = instanceSameType(table[i]);
       newTable[i].name = table[i].name;
   }
   
   var weightPerItem = new nL();
   newTable.push(weightPerItem);
   weightPerItem.name = "weight per item";
   
   var count = new nL();
   newTable.push(count);
   count.name = "count repetitions segment";
   var n, w;
   
   for(var j=0;j<repetitions.length; j++){
       n = Math.round(repetitions[j]);
       w = weights[j];
       for(var k=0; k<n; k++){
           for(i=0; i<table.length; i++){
               newTable[i].push(table[i][j]);
           }
           weightPerItem.push(w/n);
           count.push(n);
       }
   }
   
   return newTable;
}
let pivotTable=function(table, firstAggregationList, secondAggregationList, listToAggregate, aggregationMode, fillMode, resultMode, sortingMode, fillValue){
 if(table==null || !table.length || firstAggregationList==null || secondAggregationList==null || listToAggregate==null) return;
 let listFirstAggregation = firstAggregationList["isList"]?firstAggregationList:table.get(firstAggregationList);
let listSecondAggregation = secondAggregationList["isList"]?secondAggregationList:table.get(secondAggregationList);
listToAggregate = listToAggregate["isList"]?listToAggregate:table.get(listToAggregate);
  /*
 if(typeof(firstAggregationList)=='string') firstAggregationList = table.getNames().indexOf(firstAggregationList);
 if(typeof(secondAggregationList)=='string') secondAggregationList = table.getNames().indexOf(secondAggregationList);
 if(typeof(listToAggregate)=='string') listToAggregate = table.getNames().indexOf(listToAggregate);
 */
  aggregationMode = aggregationMode==null?1:aggregationMode;
 //aggregations modes to add:
 //<|>4:min<|>5:max<|>6:standard deviation<|>7:enlist (creates a list of elements)<|>8:last element<|>9:most common element<|>10:random element<|>11:indexes
  resultMode = resultMode||0;
 //nullValue = nullValue==null?"":nullValue;
  switch(fillMode){
   case 0:
   case 3:
     fillValue = null;
     break;
   case 1:
     fillValue = 0;
     break;
 }
  var element1;
 let coordinate, indexes;
 //var listToAggregate = table[listToAggregate];
  var newTable = new T();
 let sum;
 let i;
  if(resultMode==1){//two lists of elements and a list of aggregation value
   var indexesDictionary = {};
   var elementsDictionary = {};
    //table[firstAggregationList].forEach(function(element0, i){//@todo: imporve this
   listFirstAggregation.forEach(function(element0, i){
     //element1 = table[secondAggregationList][i];
     element1 = listSecondAggregation[i];
     coordinate = String(element0)+"∞"+String(element1);
     if(indexesDictionary[coordinate]==null){
       indexesDictionary[coordinate]=new nL();
       elementsDictionary[coordinate]=new L();
     }
     indexesDictionary[coordinate].push(i);
     elementsDictionary[coordinate].push(listToAggregate[i]);
   });
    newTable[0] = new L();
   newTable[1] = new L();
   switch(aggregationMode){
     case 0://first element
       newTable[2] = new L();
       break;
     case 1://count
     case 2://sum
     case 3://average
       newTable[2] = new nL();
       break;
   }
     for(coordinate in indexesDictionary) {
     indexes = indexesDictionary[coordinate];
     //newTable[0].push(table[firstAggregationList][indexes[0]]);
     //newTable[1].push(table[secondAggregationList][indexes[0]]);
     newTable[0].push(listFirstAggregation[indexes[0]]);
     newTable[1].push(listSecondAggregation[indexes[0]]);
      switch(aggregationMode){
       case 0://first element
         newTable[2].push(listToAggregate[indexes[0]]);
         break;
       case 1://count
         newTable[2].push(indexes.length);
         break;
       case 2://sum
       case 3://average
         sum = 0;
         indexes.forEach(function(index){
           sum+=listToAggregate[index];
         });
         if(aggregationMode==3) sum/=indexes.length;
         newTable[2].push(sum);
         break;
     }
   }
    newTable[0] = newTable[0].downcast();
   newTable[1] = newTable[1].downcast();
    switch(aggregationMode){
     case 0://first element
       newTable[2] = newTable[2].downcast();
       break;
   }
    //newTable[0].name = table[firstAggregationList].name;
   newTable[0].name = listFirstAggregation.name;
    return newTable;
 }
  ////////////////////////resultMode==0, a table whose first list is the first aggregation list, and each i+i list is the aggregations with elements for the second aggregation list
  newTable[0] = new L();
  var elementsPositions0 = {};
 let elementsPositions1 = {};
  var x, y;
 let element;
 let newList;
  //table[firstAggregationList].forEach(function(element0, i){
 listFirstAggregation.forEach(function(element0, i){
   //element1 = table[secondAggregationList][i];
   element1 = listSecondAggregation[i];
   element = listToAggregate[i];
    y = elementsPositions0[String(element0)];
   if(y==null){
     newTable[0].push(element0);
     y = newTable[0].length-1;
     elementsPositions0[String(element0)] = y;
   }
    x = elementsPositions1[String(element1)];
   if(x==null){
     switch(aggregationMode){
       case 0:
         newList = new L();
         break;
       case 1:
       case 2:
       case 3:
       case 4:
       case 5:
         newList = new L();
         break;
     }
     newTable.push(newList);
     newList.name = String(element1);
     x = newTable.length-1;
     elementsPositions1[String(element1)] = x;
   }
       switch(aggregationMode){
     case 0://first element
       if(newTable[x][y]==null) newTable[x][y]=element;
       break;
     case 1://count
       if(newTable[x][y]==null) newTable[x][y]=0;
       newTable[x][y]++;
       break;
     case 2://sum
       if(newTable[x][y]==null) newTable[x][y]=0;
       newTable[x][y]+=element;
       break;
     case 3://average
       if(newTable[x][y]==null) newTable[x][y]=[0,0];
       newTable[x][y][0]+=element;
       newTable[x][y][1]++;
       break;
     case 4://min
       if(newTable[x][y]==null) newTable[x][y]=element;
       newTable[x][y]=Math.min(element, newTable[x][y]);
       break;
     case 5://max
       if(newTable[x][y]==null) newTable[x][y]=element;
       newTable[x][y]=Math.max(element, newTable[x][y]);
       break;
        /*
     case 6://most common
     case 7://median
     case 8://standard deviation
     case 9://count non repeated
       if(newTable[x][y]==null) newTable[x][y]=new list();
       newTable[x][y].push(element);
       break;
       */
    }
  });
  var needsInterpolation = false;
  switch(aggregationMode){
   case 0://first element
     for(i=1; i<newTable.length; i++){
       if(newTable[i]==null) newTable[i]=new L();
        newTable[0].forEach(function(val, j){
         if(newTable[i][j]==null) newTable[i][j]=fillValue;
       });
        newTable[i] = newTable[i].downcast();
       if(newTable[i].type=="L") needsInterpolation=true;
     }
     break;
   case 1://count
   case 2://sum
   case 4://min
   case 5://max
     for(i=1; i<newTable.length; i++){
       if(newTable[i]==null) newTable[i]=new L();
       newTable[0].forEach(function(val, j){
         if(newTable[i][j]==null) newTable[i][j]=fillValue;
       });
        newTable[i] = newTable[i].downcast();
       if(newTable[i].type=="L") needsInterpolation=true;
     }
     break;
   case 3://average
     for(i=1; i<newTable.length; i++){
       if(newTable[i]==null) newTable[i]=new L();
       newTable[0].forEach(function(val, j){
         if(newTable[i][j]==null){
           newTable[i][j]=fillValue;
         } else {
           newTable[i][j]=newTable[i][j][0]/newTable[i][j][1];
         }
       });
       newTable[i] = newTable[i].downcast();
       if(newTable[i].type=="L") needsInterpolation=true;
     }
      /*
   case 6://most common
     case 7://median
     case 8://standard deviation
     case 9://count non repeated
     break;
     */
 }
  if(fillMode && needsInterpolation){
   newTable = replaceNullsInTable(newTable, 5);
 }
  if(sortingMode==1){
     var toSort = newTable.slice(1);
     var names = newTable.getNames().getSubList(1);
     //if(table[secondAggregationList].type == "nL") names = names.toNumberList();
     if(listSecondAggregation.type == "nL") names = names.toNumberList();
     
     toSort = L.toL(toSort).getSortedByList(names);
     var newTable2 = new T();
     newTable2[0] = newTable[0];
     newTable = newTable2.concat(toSort);
     return newTable;
 }
  newTable[0] = newTable[0].downcast();
 return newTable.downcast();
}
let unpivotTable=function(table, entitiesColumn, variablesColumns) {
   var entities = table.get(entitiesColumn);
   var variables = table.getColumns(variablesColumns);
   var entity;
    var newT = new T();
   newT[0] = new L();
   newT[0].name = entities.name;
   newT[1] = new sL();
   newT[1].name = "variables";
   newT[2] = new L();
   newT[2].name = "value";
   
   for(var i=0; i<entities.length; i++){
       entity = entities[i];
       for(var j=0; j<variables.length; j++){
           newT[0].push(entity);
           newT[1].push(variables[j].name);
           newT[2].push(variables[j][i]);
       }
   }
   
   newT[0] = newT[0].downcast();
   newT[2] = newT[2].downcast();
   
   return newT.downcast();
}
let getCountPairsMatrix=function(table, bListsFromSameDomain,iValues,iOrder,maxItems) {
 if(table == null || table.length < 2 || table[0] == null || table[0][0] == null) return null;
 bListsFromSameDomain = bListsFromSameDomain == null ? false : bListsFromSameDomain;
 iValues = iValues == null ? 0 : iValues;
 iOrder = iOrder == null ? 0 : iOrder;
  var list0,list1;
 if(iOrder == 0){
   list0 = table[0].getWithoutRepetitions();
   list1 = table[1].getWithoutRepetitions();
   if(bListsFromSameDomain){
     // use the same set of list values in both dimensions
     list0 = list0.concat(list1);
     list0 = list0.getWithoutRepetitions();
     list1 = list0;
   }
 }
 else if(iOrder == 1){
   if(bListsFromSameDomain){
     list0 = table[0].concat(table[1]);
     var tf0 = list0.getFrequenciesTable(true);
     list1 = list0 = tf0[0];
   }
   else{
     var tf0 = table[0].getFrequenciesTable(true);
     list0 = tf0[0];
     tf0 = table[1].getFrequenciesTable(true);
     list1 = tf0[0];
   }
 }
 else if(iOrder == 2){
   if(bListsFromSameDomain){
     list0 = table[0].concat(table[1]);
     var tf0 = list0.getFrequenciesTable(true);
     tf0 = tf0.sortRowsByList(0,true);
     list1 = list0 = tf0[0];
   }
   else{
     var tf0 = table[0].getFrequenciesTable(true);
     tf0 = tf0.sortRowsByList(0,true);
     list0 = tf0[0];
     tf0 = table[1].getFrequenciesTable(true);
     tf0 = tf0.sortRowsByList(0,true);
     list1 = tf0[0];
   }
 }
 if(maxItems != null && !isNaN(maxItems) && maxItems > 0){
   var nLKeep = createSortedNumberList(maxItems);
   if(list0.length > maxItems)
     list0 = list0.getElements(nLKeep);
   if(list1.length > maxItems)
     list1 = list1.getElements(nLKeep);
 }
  var matrix = new nT(list1.length);
  list1.forEach(function(element1, i) {
   matrix[i].name = String(element1);
   list0.forEach(function(element0, j) {
     matrix[i][j] = 0;
   });
 });
  var i0,i1;
 table[0].forEach(function(element0, i) {
   var element1 = table[1][i];
   i1=list1.indexOf(element1);
   i0=list0.indexOf(element0);
   if(i0 != -1 && i1 != -1)
     matrix[i1][i0]++;
 });
 if(iValues != 0){
   var maxOverall = 0;
   for(var i=0;i<matrix.length;i++){
     matrix[i]._max = matrix[i].getMax();
     maxOverall = Math.max(maxOverall,matrix[i]._max);
   }
   if(iValues == 1 && maxOverall != 0){
     var d0;
     // largest freq maps to dist=0, others larger
     for(var i=0;i<matrix.length;i++){
       for(var j=0;j<matrix[i].length;j++){
         d0 = (maxOverall - matrix[i][j])/maxOverall;
         matrix[i][j] = Number(d0.toFixed(5));
       }
     }
   }
   else if(iValues == 2 && maxOverall != 0){
     var d0;
     // largest freq in column maps to dist=0, others larger
     for(var i=0;i<matrix.length;i++){
       for(var j=0;matrix[i]._max > 0 && j<matrix[i].length;j++){
         d0 = (matrix[i]._max - matrix[i][j])/matrix[i]._max;
         matrix[i][j] = Number(d0.toFixed(5));
       }
     }
   }
   else if(iValues == 3){
     var rowsum;
     // sum row vals, convert to fraction of total in row
     for(var j=0;j<matrix[0].length;j++){
       rowsum=0;
       for(var i=0;i<matrix.length;i++)
         rowsum+=matrix[i][j];
       for(i=0;rowsum != 0 && i<matrix.length;i++){
         d0 = matrix[i][j]/rowsum;
         matrix[i][j] = Number(d0.toFixed(5));
       }
     }
   }
 }
  // add the list of actual strings so we can tell what the rows correspond to
 let tw = new T();
 list0.name = table[0].name;
 tw.push(list0);
 matrix = tw.concat(matrix);
 return matrix;
}
let getPairsFrequencyTable=function(table) {
 if(table == null || table.length < 2 || table[0] == null || table[0][0] == null || table[0].length != table[1].length) return null;
  var dict={};
 for(var i=0;i<table[0].length;i++){
   var o = dict[table[0][i]];
   if(o == null){
     o = {sL: new L(), c:0, s:table[0][i]};
     dict[table[0][i]] = o;
   }
   o.sL.push(table[1][i]);
   o.c++;
 }
  var aObjs = [];
 for(o in dict)
   aObjs.push(dict[o]);
 aObjs = aObjs.sort(function(a,b){
   var d=b.c - a.c;
   if(d!=0) return d;
   return a.s < b.s ? 1 : -1;
 });
  var t = new T();
 t[0] = instanceSameType(table[0]);
 t[0].name = table[0].name == '' ? 'L 1' : table[0].name;
 t[1] = instanceSameType(table[1]);
 t[1].name = table[1].name == '' ? 'L 2' : table[1].name;
 t[2] = new nL();
 t[2].name = 'Combination Frequency';
  var tf;
 for(i = 0; i < aObjs.length; i++){
   o=aObjs[i];
   tf = o.sL.getFrequenciesTable(true);
   for(var j=0; j < tf[0].length; j++){
     t[0].push(o.s);
     t[1].push(tf[0][j]);
     t[2].push(tf[1][j]);
   }
 }
  return t;
}
let concatenateRowElements=function(table, separator) {
 if(table == null || !table.isTable) return null;
 separator = separator == null ? ' ' : separator;
 let sL = new sL();
 let s,row,col,maxRows = table.getLengths().getMax();
 let bAllEmpty = true;
 for(row = 0; row < maxRows; row++){
   s = '';
   for(col = 0; col < table.length; col++){
     if(col>0) s += separator;
     if(table[col][row] === undefined) continue;
     s += String(table[col][row]);
     if(row == 0){
       if(col > 0)
         sL.name += separator;
       sL.name += String(table[col].name);
       bAllEmpty = bAllEmpty && String(table[col].name).length == 0;
     }
   }
   sL.push(s);
 }
 // if all table list names are blank keep the final result blank instead of a bunch of separators jammed together
 if(bAllEmpty) sL.name = '';
 return sL;
}
let filterTableByElementInList=function(table, nList, element, keepRowIfElementIsPresent) {
 if(table == null ||  table.length <= 0 || nList == null) return;
 if(element == null) return table;
  keepRowIfElementIsPresent = keepRowIfElementIsPresent==null?true:keepRowIfElementIsPresent;
  if(typeof nList == 'string'){
   var iList = table.getNames().indexOf(nList);
   if(iList == -1)
     throw new Error("The table doesn't contain a list with name " + nList);
   nList = iList;
 }
  var newTable = new T();
 let i, j;
 let l = table.length;
 let l0 = table[0].length;
  newTable.name = table.name;
  for(j = 0; j<l; j++) {
   newTable[j] = instanceSameType(table[j]);
   newTable[j].name = table[j].name;
 }
  if(keepRowIfElementIsPresent){
   for(i = 0; i<l0; i++) {
     if(table[nList][i] == element) {
       for(j = 0; j<l; j++) {
         newTable[j].push(table[j][i]);
       }
     }
   }
 } else {
   for(i = 0; i<l0; i++) {
     if(table[nList][i] != element) {
       for(j = 0; j<l; j++) {
         newTable[j].push(table[j][i]);
       }
     }
   }
 }
  for(j = 0; j<l; j++) {
   // subset of a nL is always a nL, much faster to skip for large NumberLists
   if(newTable[j].type != 'nL')
     newTable[j] = newTable[j].downcast();
 }
  return newTable;
}
let filterTableByElementsInList=function(table, nList, elements, keepRowIfElementIsPresent) {
 if(table == null ||  table.length <= 0 || nList == null) return;
 if(elements == null || elements.length===0) return table;
  keepRowIfElementIsPresent = keepRowIfElementIsPresent==null?true:keepRowIfElementIsPresent;
  if(typeof nList == 'string'){
   var iList = table.getNames().indexOf(nList);
   if(iList == -1)
     throw new Error("The table doesn't contain a list with name " + nList);
   nList = iList;
 }
  var elementsDictionary = getBooleanDictionaryForList(elements);
  var newTable = new T();
 let i, j;
 let l = table.length;
 let l0 = table[0].length;
  newTable.name = table.name;
  for(j = 0; j<l; j++) {
   newTable[j] = new L();
   newTable[j].name = table[j].name;
 }
  if(keepRowIfElementIsPresent){
   for(i = 0; i<l0; i++) {
     if(elementsDictionary[ table[nList][i] ]) {
       for(j = 0; j<l; j++) {
         newTable[j].push(table[j][i]);
       }
     }
   }
 } else {
   for(i = 0; i<l0; i++) {
     if(!elementsDictionary[ table[nList][i] ]) {
       for(j = 0; j<l; j++) {
         newTable[j].push(table[j][i]);
       }
     }
   }
 }
  for(j = 0; j<l; j++) {
   newTable[j] = newTable[j].downcast();
 }
  return newTable;
}
let selectRows=function(table, lists, values, keepMatchingRows, returnIndexes) {
 if(table == null ||  table.length <= 0) return;
 keepMatchingRows = keepMatchingRows==null?true:keepMatchingRows;
 returnIndexes = returnIndexes==null?false:returnIndexes;
 if(lists == null || values == null || lists.length == undefined) return keepMatchingRows ? table : null;
 if(!Array.isArray(values))
   values = [values];
 if(lists.length != values.length && lists.length != 1) return;
  var nLMatch = new nL();
 let nRows = table[0].length;
 let bOrValues = lists.length == 1 && values.length > 1;
 let dictValues = {};
 if(bOrValues)
   dictValues = getBooleanDictionaryForList(values);
  for(var r=0; r < nRows; r++){
   var bMatch = true;
   for(var c=0; c < lists.length && bMatch; c++){
     if(isNaN(lists[c]) || lists[c] < 0 || lists[c] >= table.length)
       return; // invalid input
     if(table[lists[c]][r] != values[c]){
       bMatch = false;
       if(bOrValues && dictValues[table[lists[c]][r]])
         bMatch = true;
     }
   }
   if(bMatch)
     nLMatch.push(r);
 }
  var newTable;
 if(returnIndexes){
   if(keepMatchingRows)
     return nLMatch;
   // want the other indices
   var nLAll = createSortedNumberList(table[0].length);
   var nLNonMatch = difference(nLAll,nLMatch);
   return nLNonMatch;
 }
 if(keepMatchingRows)
   newTable = table.getRows(nLMatch);
 else
   newTable = table.getWithoutRows(nLMatch);
  return newTable;
}
let joinTables=function(table0, table1, keyIndex0, keyIndex1, mode){
 if(table0==null || table1==null) return;
  var joinTable = new T();
 let list0, list1;
  keyIndex0 = keyIndex0==null?0:keyIndex0;
 keyIndex1 = keyIndex1==null?0:keyIndex1;
 mode = mode==null?0:mode;
  if(mode == 2){
   var tAll = joinTables(table1, table0, keyIndex1, keyIndex0, 1);
   // we want to rearrange the column order so 1st table cols come first
   var aLists = [0];
   for(let i=table1.length; i < tAll.length; i++)
     aLists.push(i);
   for(let i=1; i < table1.length; i++)
     aLists.push(i);
   return tAll.getColumns(aLists).downcast();
 }
  //receives indexes or lists names
 if(typeof keyIndex0 == "string"){
   list0 = table0.get(keyIndex0);
   if(list0==null) throw Error("the table doesn't contain a list with name "+keyIndex0);
   keyIndex0 = table0.indexOf(list0);
 } else {
   if(keyIndex0<0) keyIndex0+=table0.length;
   keyIndex0 = keyIndex0%table0.length;
   list0 = table0[keyIndex0];
 }
 if(typeof keyIndex1 == "string"){
   list1 = table1.get(keyIndex1);
   if(list1==null) throw Error("the table doesn't contain a list with name "+keyIndex1);
   keyIndex1 = table1.indexOf(list1);
 } else {
   if(keyIndex1<0) keyIndex1+=table1.length;
   keyIndex1 = keyIndex1%table1.length;
   list1 = table1[keyIndex1];
 }
  var dictionary1 = getIndexesDictionary(list1);
  var n0 = table0.length;
 let n1 = table1.length;
  var l0 = list0.length;
  var val0;
 let indexes1;
  var i, j, k;
 let list;
  //prepares de table
 let joinList = new L();
 joinList.name = list0.name;
 joinTable[0] = joinList;
  for(k=0; k<n0; k++){
   if(k!=keyIndex0){
     list = new L();
     list.name = table0[k].name;
     list._list0=true;
     list._listOnTable = table0[k];
     joinTable.push(list);
   }
 }
 for(k=0; k<n1; k++){
   if(k!=keyIndex1){
     list = new L();
     list.name = table1[k].name;
     list._list0=false;
     list._listOnTable = table1[k];
     joinTable.push(list);
   }
 }
  //this is where the actual join happens
 for(i=0; i<l0; i++){
   val0 = list0[i];
   indexes1 = dictionary1[val0];
   if(indexes1!=null){
     for(j=0; j<indexes1.length; j++){
       joinList.push(val0);
       for(k=1; k<joinTable.length; k++){
          joinTable[k].push(  joinTable[k]._list0?joinTable[k]._listOnTable[i]:joinTable[k]._listOnTable[indexes1[j]] );
       }
     }
   } else if(mode==1 || mode == 3){//left or full join
     joinList.push(val0);
     for(k=1; k<joinTable.length; k++){
        joinTable[k].push(  joinTable[k]._list0?joinTable[k]._listOnTable[i]:null );
     }
   }
 }
 if(mode == 3){
   // need to add rows from table1 that didn't match
   var dictionary0 = getBooleanDictionaryForList(list0);
   for(i=0; i<list1.length; i++){
     val0 = list1[i];
     if(dictionary0[val0]) continue;
     joinList.push(val0);
     for(k=1; k<joinTable.length; k++){
        joinTable[k].push(  joinTable[k]._list0 ? null : joinTable[k]._listOnTable[i] );
     }
   }
 }
  for(i=0; i<joinTable.length; i++){
   // remove the extra internal list properties
   delete joinTable[i]._list0;
   delete joinTable[i]._listOnTable;
   joinTable[i] = joinTable[i].downcast();
 }
  return joinTable.downcast();
}
let joinMultipleTables=function(listOfTables, listOfIndexes, mode){
 if(listOfTables==null || listOfIndexes==null) return;
  if(listOfTables.length<2) throw new Error("listOfTables must have at least two tables");
 if(listOfIndexes.length!=listOfTables.length) throw new Error("listOfIndexes must have same length as listOfTables");
 if(listOfTables[0]==null) throw new Error("listOfTables[0] is null");
 if(listOfTables[1]==null) throw new Error("listOfTables[1] is null");
  var joinTable = joinTables(listOfTables[0], listOfTables[1], listOfIndexes[0], listOfIndexes[1], mode);
 let i;
 let l = listOfTables.length;
  for(i=2; i<l; i++){
   joinTable = joinTables(joinTable, listOfTables[i], 0, listOfIndexes[i], mode);
 }
  return joinTable;
}
let combineLists=function(table, returnNumberFinalRows) {
 if(table==null) return null;
 returnNumberFinalRows = returnNumberFinalRows==null?true:returnNumberFinalRows;
  var newTable = new T();
 let combinedTable = new T();
 let indexes = new nL();
 let lengths = new nL();
 let nRows = 1;
 for(var i=0; i<table.length; i++){
   combinedTable[i] = new L();
   newTable[i] = table[i].getWithoutRepetitions();
   indexes[i]=0;
   lengths[i]=newTable[i].length;
   nRows*=lengths[i];
 }
  if(returnNumberFinalRows || nRows>100000) return nRows;
  for(i=0; i<nRows; i++){
   for(var j=0; j<table.length;j++){
     combinedTable[j].push(newTable[j][indexes[j]]);
   }
    j=0;
   var exceed=true;
   indexes[j]++;
   exceed = indexes[j]>=lengths[j];
   while(exceed && j<table.length){
     indexes[j]=0;
     indexes[j+1]++;
     j++;
     exceed = indexes[j]>=lengths[j];
   }
   
 }
  for(var j=0; j<table.length;j++){
   combinedTable[j] = combinedTable[j].downcast();
 }
  return combinedTable.downcast();
}

let completeTable=function(table, nRows, value) {
 value = value === undefined ? 0 : value;
  var newTable = new T();
 newTable.name = table.name;
  var list;
 let newList;
 let j;
  for(var i = 0; i < table.length; i++) {
   list = table[i];
   newList = list == null ? getNewListForObjectType(value) : instanceSameType(list);
   newList.name = list == null ? '' : list.name;
   for(j = 0; j < nRows; j++) {
     newList[j] = (list == null || list[j] == null) ? value : list[j];
   }
   newTable[i] = newList;
 }
 return newTable;
}

let getNumberTableFromTable=function(table) {
 if(table == null ||  table.length <= 0) {
   return null;
 }
  var i;
 let newTable = new nT();
 newTable.name = table.name;
 for(i = 0; table[i] != null; i++) {
   if(table[i].type == "nL") newTable.push(table[i]);
 }
 return newTable;
}

let getVariablesInformationGain=function(variablesTable, supervised) {
 if(variablesTable == null) return null;
  var igs = new nL();
 variablesTable.forEach(function(feature) {
   igs.push(getInformationGain(feature, supervised));
 });
 return igs;
}

let splitTableByCategoricList=function(table, listCategories, bReturnObject) {
 if(table == null || listCategories == null) return null;
  var list = listCategories["isList"]?listCategories:table.get(listCategories);
  var childrenTable;
 let tablesList = new L();
 let childrenObject = {};
  list.forEach(function(element, i) {
   childrenTable = childrenObject[element];
   if(childrenTable == null) {
     childrenTable = new T();
     childrenTable.name = String(element);
     childrenObject[element] = childrenTable;
     tablesList.push(childrenTable);
     table.forEach(function(list, j) {
       childrenTable[j] = instanceSameType(list);
       childrenTable[j].name = list.name;
     });
     childrenTable._element = element;
   }
   table.forEach(function(list, j) {
     childrenTable[j].push(table[j][i]);
   });
 });
 if(bReturnObject)
   return childrenObject;
 return tablesList;
}

let buildCorrelationsNetwork=function(table, nodesAreRows, names, colorsByList, correlationThreshold, negativeCorrelation, mode, weightByList, minConnectionsPerNode){
 if(table==null) return null;
  nodesAreRows = nodesAreRows==null?true:Boolean(nodesAreRows);
 correlationThreshold = correlationThreshold==null?0.9:correlationThreshold;
 negativeCorrelation = Boolean(negativeCorrelation);
 mode = mode==null?0:mode;
 minConnectionsPerNode = minConnectionsPerNode==null?3:minConnectionsPerNode;
  //var types = table.getTypes();
 let i, j;
 let l = table.length;
 let nRows = table[0].length;
 let node, node1, relation;
 let id, name;
 let pearson, jaccard, weight;
 let colorsList, colors;
  var someCategorical = false;
 let someText = false;
 let someNumeric = false;
  var network = new Net();
   var pseudoKinds = new sL(); //numbers, categories and texts; similar to kind
 let type;
  var nNodes = nodesAreRows?nRows:l;
  var nNumbers=0;
 let nCategories=0;
 let nTexts=0;
  for(i=0; i<l;i++){
   type = table[i].type;
   if(type == "nL"){
     pseudoKinds[i] = 'numbers';
     nNumbers++;
   } else if(type == 'sL'){
     if(table[i].getWithoutRepetitions().length/table[i].length>0.8){
       pseudoKinds[i] = 'texts';
       nTexts++;
     } else {
       pseudoKinds[i] = 'categories';
       nCategories++;
     }
   } else {
     pseudoKinds[i] = 'categories';
     nCategories++;
   }
 }
  if(colorsByList!=null){
    if(colorsByList["isList"]){
     colorsList = colorsByList;
   } else {
     colorsList = table.get(colorsByList);
   }
   /*
   if(typeOf(colorsByList)=="number"){
     if(colorsByList<=nNodes){
       colorsList = table[colorsByList];
     }
   } else if(colorsByList["isList"]){
     if(colorsByList.length>=nNodes) colorsList = colorsByList;
   }
   */
    if(colorsList!=null){
     if(colorsList.type === "cL"){
       colors = colorsList;
     } else if(colorsList.type === "nL"){
       colors = createColorListFromNumberList(colorsList, blueToRed, 0);// colorListFromColorScaleFunctionAndNumberList(blueToRed, colorsList, true);
     } else {
       colors = createCategoricalColorListForList(colorsList)[0].value; //@todo [!] this method will soon change
     }
   }
 }
  var weights;
  if(weightByList!=null){
    weights = new nL();
    if(_typeOf(weightByList)=="number"){
     if(weightByList<=l){
       weights = table[weightByList];
       if(weights.type!="nL") weights = null;
     }
   } else if(weightByList["isList"] && weightByList.type=="nL"){
     if(weightByList.length>=nNodes) weights = weightByList;
   }
 }
  //if(names!=null && typeOf(names)=="number" && names<l) names = table[names];
  if(names!=null && !names["isList"]){
   names = table.get(names);
 }
  if(!nodesAreRows){ //why not just take transposed table?????
    if(table.type=="nT"){//correlations network, for the time being
      for(i=0; i<l; i++){
       node = new Nd("list_"+i, (table[i].name==null || table[i].name=="")?"list_"+i:table[i].name);
       network.addNode(node);
       node.i = i;
       node.numbers = table[i];
        if(colors!=null) node.color = colors[i];
       if(weights!=null) node.weight = weights[i];
     }
      for(i=0; i<l; i++){
       node = network.nodes[i];
       for(j=i+1; j<l; j++){
         node1 = network.nodes[j];
         pearson = numericCorrelation(node.numbers, node1.numbers);
         weight = pearson;
         if( (negativeCorrelation && Math.abs(weight)>correlationThreshold) || (!negativeCorrelation && weight>correlationThreshold) ){
           id = i+"_"+j;
           name = node.name+"_"+node1.name;
           relation = new Rel(id, name, node, node1, Math.abs(weight)-correlationThreshold*0.9);
           relation.color = weight>0?'blue':'red';
           relation.pearson = pearson;
           network.addRelation(relation);
         }
       }
     }
   } else {
     //any table
   }
 } else {
   for(i=0; i<nRows; i++){
     id = "_"+i;
     name = names==null?id:names[i];
     node = new Nd(id, name);
     node.i = i;
      node.row = table.getRow(i);
     node.numbers = new nL();
     node.categories = new L();
     node.texts = new sL();
      if(colors!=null) node.color = colors[i];
     if(weights!=null) node.weight = weights[i];
      for(j=0; j<l; j++){
       //types[j]==="nL"?node.numbers.push(node.row[j]):node.categories.push(node.row[j]);
       switch(pseudoKinds[j]){
         case 'numbers':
           node.numbers.push(node.row[j]);
           someNumeric = true;
           break;
         case 'categories':
           node.categories.push(node.row[j]);
           someCategorical = true;
           break;
         case 'texts':
           node.texts.push(node.row[j]);
           someText = true;
           break;
       }
     }
      if(mode===0){
       node.numbers.sd = node.numbers.getStandardDeviation();
     } else {
       node.numbers.norm = node.numbers.getNorm();
     }
      network.addNode(node);
   }
    var relationWeights;
    for(i=0; i<nRows; i++){
     node = network.nodes[i];
     relationWeights = new nL();
      for(j=0; j<nRows; j++){
       if(mode!=2 && j<i+1) continue;
        node1 = network.nodes[j];
        pearson = someNumeric?
         (mode===0?
           numericCorrelation(node.numbers, node1.numbers, node.numbers.sd, node1.numbers.sd)
           :
           cosineSimilarity(node.numbers, node1.numbers, node.numbers.norm, node1.numbers.norm)
         )
         :
         0;
        //jaccard is normalized to -1, 1 so it can be negative
       jaccard = someCategorical?Math.pow( jaccardIndex(node.categories, node1.categories), 0.2 )*2 - 1 : 0;
        //texts
        
        if(someNumeric && someCategorical){
         weight = (pearson*nNumbers + jaccard*nCategories)/(nNumbers+nCategories);
       } else if (someNumeric){
         weight = pearson;
       } else {
         weight = jaccard;
       }
        if(mode==2){
         relationWeights.push(i==j?0:weight);
       } else {
         if( (negativeCorrelation && Math.abs(weight)>correlationThreshold) || (!negativeCorrelation && weight>correlationThreshold) ){
           id = i+"_"+j;
           name = names==null?id:node.name+"_"+node1.name;
           relation = new Rel(id, name, node, node1, Math.abs(weight)-correlationThreshold*0.9);
           relation.color = weight>0?'blue':'red';
           relation.pearson = pearson;
           relation.jaccard = jaccard;
           network.addRelation(relation);
         }
       }
     }
      if(mode==2){
       var nodesToConnect = network.nodes.getSortedByList(relationWeights, false);
       relationWeights = relationWeights.getSorted(false);
        for(j=0;j<minConnectionsPerNode;j++){
         node1 = nodesToConnect[j];
         id = i+"_"+node1.id;
         name = names==null?id:node.name+"_"+node1.name;
         relation = new Rel(id, name, node, node1, relationWeights[j]);
         network.addRelation(relation);
       }
     }
    }
 }
  return network;
}
let buildSimpleDecisionTree=function(table, supervised, supervisedValue, min_entropy, min_size_node, min_info_gain, generatePattern, colorScale){
 if(table==null || supervised==null) return;
 let newTable = new T();
 let iO;
 let nL;
  var newSupervised = supervised["isList"]?supervised:table.get(supervised);
  for(var i=0; i<table.length; i++){
   if(table[i]==newSupervised) continue;
   iO = buildInformationObjectForList(table[i], true);
   if(iO.isCategorical){
     newTable.push(table[i]);
   } else if(iO.isNumeric){
     nL = table[i].getQuantiles(3, 3);
     newTable.push(nL);
   } 
 }
  iO = buildInformationObjectForList(newSupervised, true);
 
 //if(iO.isNumeric) newSupervised = newSupervised.getQuantiles(3, 3); //used to be a good idea…
  return buildDecisionTree(newTable, newSupervised, supervisedValue, min_entropy, min_size_node, min_info_gain, generatePattern, colorScale);
}
let buildDecisionTree=function(variablesTable, supervised, supervisedValue, min_entropy, min_size_node, min_info_gain, generatePattern, colorScale){
 if(variablesTable == null ||  supervised == null) return;
  if(colorScale==null) colorScale = blueWhiteRed;
  if(_typeOf(supervised)=='number'){
   var newTable = variablesTable.getWithoutElementAtIndex(supervised);
   supervised = variablesTable.get(supervised);
   variablesTable = newTable;
 }
  min_entropy = min_entropy == null ? 0.1 : min_entropy;
 min_size_node = min_size_node || 10;
 min_info_gain = min_info_gain || 0.002;
  var indexes = createSortedNumberList(supervised.length);
 let tree = new Tr();
  
  tree.supervisedValue = supervisedValue;
  if(supervisedValue==null){
   tree._colorDic = createCategoricalColorListForList(supervised)[4].value
 }
  _buildDecisionTreeNode(tree, variablesTable, supervised, 0, min_entropy, min_size_node, min_info_gain, null, null, supervisedValue, indexes, generatePattern, colorScale);
  tree.leavesWeights = tree.getLeaves().getPropertyValues("weight");
 tree.sumWeightsLeaves = tree.leavesWeights.getSum();
 tree.supervised = supervised;
  return tree;
}
let _buildDecisionTreeNode=function(tree, variablesTable, supervised, level, min_entropy, min_size_node, min_info_gain, parent, value, supervisedValue, indexes, generatePattern, colorScale) {
 let MAX_LEVEL_FOR_CONSOLE = 0
  var nullSupervisedValue = supervisedValue==null;
  if(nullSupervisedValue){
   var fT = supervised.getFrequenciesTable(true);
   supervisedValue = fT[0][0];
 }
  var entropy = getListEntropy(supervised, supervisedValue) 
   
  var maxIg = 0;
 let iBestFeature = 0;
 let informationGains = 0;
  if(entropy >= min_entropy) {
   informationGains = getVariablesInformationGain(variablesTable, supervised);
   informationGains.forEach(function(ig, i){
     if(ig > maxIg) {
       maxIg = ig;
       iBestFeature = i;
     }
   });
 }
  var subDivide = entropy >= min_entropy && maxIg > min_info_gain && supervised.length >= min_size_node && level<9 && supervised._P_valueFollowing>0 && supervised._P_valueFollowing<1;
  var id = tree.nodes.getNewId();
 let name = (value == null ? '' : value + ':') + (subDivide ? variablesTable[iBestFeature].name : 'P=' + supervised._biggestProbability + '(' + supervised._mostRepresentedValue + ')');
 let node = new Nd(id, name);
  tree.addNodeToTree(node, parent);
  if(parent == null) {
   tree.informationGainTable = new T();
   tree.informationGainTable[0] = variablesTable.getNames();
   if(informationGains) {
     tree.informationGainTable[1] = informationGains.clone();
     tree.informationGainTable = tree.informationGainTable.sortRowsByList(informationGains, false);
   }
 }
  node.entropy = entropy;
 node.weight = supervised.length;
 node.supervised = supervised;
 node.supervisedValue = supervisedValue;
 node.indexes = node.indexesOnTable = indexes;
 node.value = value;
 node.fromList = parent==null?"":parent.bestFeatureName;
 node.mostRepresentedValue = supervised._mostRepresentedValue;
 node.biggestProbability = supervised._biggestProbability;
 node.valueFollowingProbability = supervised._P_valueFollowing;
 node.lift = node.valueFollowingProbability / tree.nodes[0].valueFollowingProbability;
 node.i = tree.nodes.length-1;
  if(node.fromList==""){
   node.filter = {}
 } else {
   node.filter = {
     column:node.fromList
   }
   if(node.value && node.value.includes && node.value.includes("-")){
     var parts = node.value.split("-");
     if(String(Number(parts[0]))==parts[0] && String(Number(parts[1]))==parts[1]){
       node.filter.type="range";
       node.filter.value=[
         true,
         Number(parts[0]),
         true,
         Number(parts[1])
       ]
     }
   }
   if(node.filter.type==null){
     node.filter.type="in_array";
     node.filter.value = [node.value];
   }
 }
  node.filters = [];
  var addFilters = function(node_in_chain){
   if(node_in_chain.parent) addFilters(node_in_chain.parent);
   if(node_in_chain.filter.column) node.filters.push(node_in_chain.filter);
 }
  addFilters(node);
  if(nullSupervisedValue){
   var clrs = new cL();
   for(var i=0; i<fT[0].length; i++){
     clrs[i] = tree._colorDic[fT[0][i]];
   }
    node._color = node.color = interpolateColors('white', colorsLinearCombination(clrs, fT[1]), node.valueFollowingProbability) ; //tree._colorDic[supervisedValue];
 } else {
   node._color = node.color = colorScale(1-node.valueFollowingProbability);
 }
  if(generatePattern) {
   var newCanvas = document.createElement("canvas");
   newCanvas.width = 150;
   newCanvas.height = 100;
   var newContext = newCanvas.getContext("2d");
   newContext.clearRect(0, 0, 150, 100);
    _decisionTreeGenerateColorsMixture(newContext, 150, 100, ['blue', 'red'],
    node.mostRepresentedValue==supervisedValue?
      [Math.floor(node.biggestProbability*node.weight), Math.floor((1-node.biggestProbability)*node.weight)]
      :
      [Math.floor((1-node.biggestProbability)*node.weight), Math.floor(node.biggestProbability*node.weight)]
   );
    var img = new Image();
   img.src = newCanvas.toDataURL();
   node.pattern = newContext.createPattern(img, "repeat");
 }
  if(!subDivide){
   node.isLeaf = true;
   node.label = Math.floor(node.valueFollowingProbability*100)/100;
   return node;
 }
  node.isLeaf = false;
  node.bestFeatureName = variablesTable[iBestFeature].name;
 node.bestFeatureName = node.bestFeatureName === "" ? "list "+ iBestFeature:node.bestFeatureName;
 node.iBestFeature = iBestFeature;
 node.informationGain = maxIg;
  node.label = node.bestFeatureName;
  var expanded = variablesTable.concat([supervised, indexes]);
  var tables = splitTableByCategoricList(expanded, variablesTable[iBestFeature]);
 let childTable;
 let childSupervised;
 let childIndexes;
  tables.forEach(function(expandedChild) {
   childTable = expandedChild.getSubList(0, expandedChild.length - 3);
   childSupervised = expandedChild[expandedChild.length - 2];
   childIndexes = expandedChild[expandedChild.length - 1];
   _buildDecisionTreeNode(tree, childTable, childSupervised, level + 1, min_entropy, min_size_node, min_info_gain, node, expandedChild._element, nullSupervisedValue?null:supervisedValue, childIndexes, generatePattern, colorScale);
 });
  node.to = node.to.getSortedByProperty('valueFollowingProbability', false);
  return node;
}
let _decisionTreeGenerateColorsMixture=function(ctxt, width, height, colors, weights){
 let x, y, i; //, rgb;
 let allColors = createListWithSameElement(weights[0], colors[0]);
  for(i = 1; colors[i] != null; i++) {
   allColors = allColors.concat(createListWithSameElement(weights[i], colors[i]));
 }
  for(x = 0; x < width; x++) {
   for(y = 0; y < height; y++) {
     i = (x + y * width) * 4;
     ctxt.fillStyle = allColors.getRandomElement();
     ctxt.fillRect(x, y, 1, 1);
   }
 }
}
let allListsSameLength=function(table){
 if(table==null) return null;
  var l = table.length;
 let length = table[0].length;
 let i;
 for(i=1; i<l; i++){
   if(table[i].length!=length) return false;
 }
  return true;
}
let getListsWithoutRepetition=function(table){
 if(table==null) return;
  var l = table.length;
 let i;
 let newTable = new T();
  for(i=0; i<l; i++){
   newTable[i] = table[i].getWithoutRepetitions();
 }
  return newTable.downcast();
}
let getNumberOfDifferentElementsOfLists=function(table, proprotion){
 if(table==null) return;
  var l = table.length;
 let i;
 let nList = new nL();
 nList.name = "count different elements"+proprotion?"(proportion)":"";
  for(i=0; i<l; i++){
   nList[i] = table[i].countDifferentElements();// table[i].getWithoutRepetitions().length;
   if(proprotion) nList[i]/=table[i].length;
 }
  return nList;
}
let buildInformationObjectForTable=function(table, bUseExistingObjectIfPresent){
 if(table==null) return;
  bUseExistingObjectIfPresent = bUseExistingObjectIfPresent==null?true:bUseExistingObjectIfPresent; // <------- not sure if this could cause issues
  if(bUseExistingObjectIfPresent == true && table.infoObject != null) return table.infoObject;
  var n = table.length;
 let i, listInfoObject;
 let min = 999999999999;
 let max = -999999999999;
 let average = 0;
 let intsAndCats = true;
  var infoObject = {
   type:table.type,
   name:table.name,
   length:n,
   kind:'mixed', //mixed, numbers, integer numbers, texts, categories, integers and categories
   allListsSameLength:true,
   allListsSameSize:true,
   allListsSameType:true,
   allListsSameKind:true,
   listsInfoObjects:new L(),
   names:new sL(),
   lengths:new nL(),
   types:new sL(),
   kinds:new sL()
 };
   for(i=0; i<n; i++){
   listInfoObject = buildInformationObjectForList(table[i],bUseExistingObjectIfPresent);
   infoObject.listsInfoObjects[i] = listInfoObject;
    if(listInfoObject.containsNulls) infoObject.containsNulls=true;
    infoObject.names[i] = listInfoObject.name;
   infoObject.types[i] = listInfoObject.type;
   infoObject.kinds[i] = listInfoObject.kind;
   infoObject.lengths[i] = listInfoObject.length;
    if(listInfoObject.kind!='categories' && listInfoObject.kind!='integer numbers') intsAndCats = false;
    if(i>0){
     if(infoObject.lengths[i]!=infoObject.lengths[i-1]) infoObject.allListsSameLength = false;
     if(infoObject.types[i]!=infoObject.types[i-1]) infoObject.allListsSameType = false;
     if(infoObject.kinds[i]!=infoObject.kinds[i-1]) infoObject.allListsSameKind = false;
     if(infoObject.lengths[i]!=infoObject.lengths[i-1]) infoObject.allListsSameType = false;
   }
    if(listInfoObject.type == "nL"){
     min = Math.min(min, listInfoObject.min);
     max = Math.min(max, listInfoObject.max);
     average+=listInfoObject.average;
   }
 }
  if(average!==0) average/=infoObject.length;
  if(infoObject.allListsSameLength){
   infoObject.minLength = infoObject.lengths[0];
   infoObject.maxLength = infoObject.lengths[0];
   infoObject.averageLength = infoObject.lengths[0];
 } else {
   var interval = infoObject.lengths.getInterval();
   infoObject.minLength = interval.x;
   infoObject.maxLength = interval.y;
   infoObject.averageLength = (interval.x + interval.y)*0.5;
 }
  if(infoObject.allListsSameKind){
   switch(infoObject.kinds[0]){
     case 'numbers':
       infoObject.kind = 'numbers';
       break;
     case 'integer numbers':
       infoObject.kind = 'integer numbers';
       break;
     case 'texts':
       infoObject.kind = 'texts';
       break;
     case 'categories':
       infoObject.kind = 'categories';
       break;
   }
 } else {
   if(intsAndCats){
     infoObject.kind = 'integers and categories';
   } else if(infoObject.allListsSameType && infoObject.types[0]=='nL'){
     infoObject.kind = 'numbers';
   }
 }
  table.infoObject = infoObject
  return infoObject;
}
let getCategoricalLists=function(table){
 let infoObject = buildInformationObjectForTable(table);
  var catTable = new T();
  for(var i=0;i<table.length; i++){
   if(table[i].infoObject.isCategorical) catTable.push(table[i]);
 }
  return catTable.downcast();
}

let getTableSimplified=function(table, nCategories, othersElement, quantilesMode) {
 if(table==null || !(table.length>0)) return null;
nCategories = nCategories||20;
 let i;
let l = table.length;
let newTable = new T();
newTable.name = table.name;
 for(i=0; i<l; i++){
  newTable.push(
    table[i].type==='nL'?
    table[i].getNumbersSimplified(quantilesMode==1?6:2, nCategories)
    :
    table[i].getSimplified(nCategories, othersElement)
  );
}
 return newTable.downcast();
}
let concatTables=function(table0, table1){
 if(table0==null || table1==null || table0.length!=table1.length) return;
  var newT = new T();
  for(var i=0;i<table0.length;i++){
   newT[i] = table0[i].concat(table1[i]);
   newT[i].name = table0[i].name;
 }
  return newT.downcast();
}
let concatRows=function() {
 if(arguments == null || arguments.length === 0 ||  arguments[0] == null) return null;
 if(arguments.length == 1) return arguments[0];
  var i,j,tab1,tabResult,namePrev;
 // find maximum number of cols
 let maxCols=0;
 for(i = 0; i<arguments.length; i++) {
   if(arguments[i] == null) continue;
   maxCols = Math.max(maxCols,arguments[i].length);
   if(!arguments[i].isTable){
     return null;
   }
 }
  for(i = 0; i<arguments.length; i++) {
   if(arguments[i] == null) continue;
   tab1 = arguments[i];
   var nLLengths = tab1.getLengths();
   var maxLen = nLLengths.getMax();
   var minLen = nLLengths.getMin();
   if(maxLen != minLen){
     // complete the table so all cols have same length
     tab1 = completeTable(tab1,maxLen,null);
   }
   while(tab1.length < maxCols){
     tab1.push(createListWithSameElement(maxLen,null,''));
   }
   if(i == 0)
     tabResult = tab1.clone();
   else{
     // concat each list
     for(j = 0; j<tabResult.length; j++){
       namePrev = tabResult[j].name; // concat loses name
       tabResult[j] = tabResult[j].concat(tab1[j]);
       tabResult[j].name = namePrev != '' ? namePrev : tab1[j].name;
     }
   }
 }
  return tabResult;
}
let concatLists=function(table){
 if(table==null) return;
  var nL = table[0];
 for(var i=1; i <table.length; i++){
   nL = nL.concat(table[i]);
 }
  //note: slightly more efficient with _concat (only one downcast())
 return nL;
}
let unionListsFromTables=function(table){
 if(table==null) return;
  var list = table[0].getWithoutRepetitions();
 let i, j;
 let l = table.length;
 let n;
  for(i=1; i<l; i++){
   n = table[i].length;
   for(j=0; j<n; j++){
     if(!list.includes(table[i][j])) list.push(table[i][j]);
   }
 }
  return list;
}
let intersectListsFromTables=function(table){
 if(table==null) return;
  var list = table[0].getWithoutRepetitions();
 let i;
 let l = table.length;
  for(i=1; i<l; i++){
   list = intersection(list, table[i]);
 }
  return list;
}

let encodeStringLists=function(table, method, maxUniqueValues, bRemove){
 if(table==null) return;
  method = method == null ? 0 : method;
 maxUniqueValues = maxUniqueValues == null ? 20 : maxUniqueValues;
 bRemove = bRemove == null ? true : bRemove;
  var tResult = new T();
 // builds table[i].infoObject
 buildInformationObjectForTable(table,true);
 let i,j,tt,bLeaveAlone,list;
 for(i=0;i < table.length;i++){
   bLeaveAlone = false;
   list = table[i];
   if(list.type == 'nL'){
     tResult.push(list.clone());
     continue;
   }
   if(list.type != 'sL'){
     list = list.toStringList();
     buildInformationObjectForList(list);
   }
   // is a sL now for sure
   if(list.infoObject.numberDifferentElements < 2 ||
      list.infoObject.numberDifferentElements > maxUniqueValues)
     bLeaveAlone = true;
   else{
     tt = encodeStringsAsNumericFeatures(list,method);
     for(j=0;j < tt.length;j++){
       tt[j].name = list.name + ':' + tt[j].name;
     }
     tResult = concat(tResult,tt);
   }
   if(bLeaveAlone && !bRemove)
     tResult.push(list.clone());
 }
 return tResult;
}

let translateListsWithDictionary=function(table, dictionary, nullElement, keepsOriginal) {
 if(table == null || dictionary==null) return;
  var newT = new T();
 for(var i=0; i<table.length; i++){
   newT[i] = mapWithTable(table[i], dictionary, nullElement, keepsOriginal);
 }
 return newT.downcast();
}

let getModes=function(table, bInCols=true) {
    if(table == null) return
    if(!bInCols) table = table.transpose()
    let newList = toL(table.map(l=>l.getMode())).downcast()
    newList.name = 'mode'
    return newList
}

let getSubTables=function(table, columnsList){
 if(table==null) return;
 let subTablesList = new L();
 subTablesList.name = "subtables";
 for(var i=0; i<columnsList.length; i++){
   subTablesList.push(table.getColumns(columnsList[i]));
 }
 return subTablesList;
}

let mapFunctionOnLists=function(table, func, param0, param1, param2, param3, param4, param5, iterator){
 if(table==null) return;
 let listResults = new L();
 let l = table.length;
  for(var i=0; i<l; i++){
   listResults.push(mapWithFunction(table[i], func, param0, param1, null, param2, param3, param4, param5, iterator));
 }
  return listResults.downcast();
}

let mapFunctionsOnLists=function(table, functionList, param0, param1, param2, param3, param4, param5, iterator){
 if(table==null) return;
 let listResults = new L();
 let l = Math.min(table.length, functionList.length);
  for(var i=0; i<l; i++){
   listResults.push(mapWithFunction(table[i], functionList[i], param0, param1, null, param2, param3, param4, param5, iterator));
 }
  return listResults.downcast();
}

let useVariablesDictionary=function(table, variablesDictionaryTable) {
   if(table==null || variablesDictionaryTable==null) return;
   
   var dNames = variablesDictionaryTable.get('name',null,null,true)||variablesDictionaryTable[0];
   var dLabels = variablesDictionaryTable.get('label',null,null,true)||variablesDictionaryTable[1];
   var dDescriptions = variablesDictionaryTable.get('description',null,null,true)||variablesDictionaryTable[2];
   var dCategories = variablesDictionaryTable.get('category',null,null,true)||variablesDictionaryTable[3];
   var dRelevances = variablesDictionaryTable.get('relevance',null,null,true)||variablesDictionaryTable[4];
   
   var columnNames = table.getNames();
   var namesDict = getFirstOccurrenceDictionaryForList(columnNames);
   var namesDictOnDictionary = getFirstOccurrenceDictionaryForList(dNames);
   
   var l = columnNames.length;
    for(var i=0; i<table.length;i++){
     var cName = table[i].name;
     var dIndex = namesDictOnDictionary[cName];
      if(dIndex != null) {
       table[i].label = dLabels[dIndex];
       table[i].description = dDescriptions[dIndex];
       table[i].category = dCategories[dIndex];
       table[i].relevance = dRelevances[dIndex];        
     }
   }
   
   return table;
}

let matrixToTwoColumns=function(matrix){
   var nT = new T();
   nT[0] = new sL();
   nT[0].name = matrix[0].name;
   nT[1] = new sL();
   nT[1].name = "related with";
   for(var i=1; i<matrix.length; i++){
       for(var j=0; j<matrix[0].length; j++){
           for(var k=0; k<matrix[i][j]; k++){
               nT[0].push(String(matrix[0][j]));
               nT[1].push(matrix[i].name);
           }
       }
   }
   return nT;
}

let _preserveOrder=function(newTable,oldTable){
 let oldNames = oldTable.getNames();
 let newNames = newTable.getNames().getWithoutElements(oldNames);
  return newTable.getColumns(oldNames.concat(newNames));
}

let concatStrings=function(sl, joinString) { //deprecated
 if(joinString == null) joinString = "";
 return sL.toL(sl.join(joinString));
}
let join=function(sl, character = "", prefix = "", sufix = "", byEnter) {
 if(sl == null) return;
  if(byEnter) character="\n"
 return prefix + sl.join(character) + sufix;
}

let cleanTexts=function(strings, rmvEnters, rmvTabs, replaceTabsAndEntersBy, rmvPunctuation, toLowerCase, stopWords, rmvDoubleSpaces, rmvAccentsAndDiacritics){
 if(strings==null) return null;
  var newStrings = new sL();
 newStrings.name = strings.name;
 
 for(var i=0; i<strings.length; i++){
   newStrings[i] = cleanText(strings[i], rmvEnters, rmvTabs, replaceTabsAndEntersBy, rmvPunctuation, toLowerCase, stopWords, rmvDoubleSpaces, rmvAccentsAndDiacritics);
 }
  return newStrings;
}

let filterStringListByString=function(sl, string, asWord, returnIndexes) {
 if(sl==null || string==null) return null;
  var i;
 let newList = returnIndexes ? new nL() : new sL();
 let regex;
 let l = sl.length;
  if(asWord) {
   regex = new RegExp("\\b" + string + "\\b");
 }
  for(i = 0; i<l; i++) {
   if(asWord) {
     if(sl[i].match(regex).length > 0) {
       newList.push(returnIndexes ? i : sl[i]);
     }
   } else {
     if(sl[i].indexOf(string) != -1) {
       newList.push(returnIndexes ? i : sl[i]);
     }
   }
 }
 
 return newList;
}

let replaceStringsInTexts=function(texts, strings, replacement) {
 if(texts==null || strings==null || replacement==null) return null;
  var newTexts = new sL();
 newTexts.name = texts.name;
 let nTexts = texts.length;
 let nStrings = strings.length;
 let i, j;
  for(i = 0; i<nTexts; i++) {
   newTexts[i] = texts[i];
   if(newTexts[i] == null) continue;
   for(j=0; j<nStrings; j++){
     newTexts[i] = replaceStringInText(newTexts[i],strings[j],replacement);
   }
 }
  return newTexts;
}

let replaceStringInTexts=function(texts, string, replacement) {
 if(texts==null || string==null ||replacement==null) return null;
  var newTexts = new sL();
 newTexts.name = texts.name;
 let nTexts = texts.length;
 let i;
  for(i = 0; i<nTexts; i++) {
   newTexts[i] = texts[i]==null?null:replaceStringInText(texts[i],string,replacement);
 }
  return newTexts;
}

let replaceStringsInTextsByStrings=function(texts, strings, replacements) {
 if(texts==null || strings==null || replacements==null) return null;
  var newTexts = new sL();
 newTexts.name = texts.name;
 let nTexts = texts.length;
 let nStrings = strings.length;
 let i, j;
 let string;
  for(i = 0; i<nTexts; i++) {
   newTexts[i] = texts[i];
   if(newTexts[i] == null)
     continue;
   for(j=0; j<nStrings; j++){
     newTexts[i] = replaceStringInText(newTexts[i],strings[j],replacements[j]);
   }
 }
  return newTexts;
}

let countStringsOccurrencesOnTexts=function(strings, texts, asWords) {
 if(strings == null || texts == null) return null;
 let occurrencesTable = new nT();
  var i;
 let j;
 let string;
 let nl;
 //var splitArray;
 let nStrings = strings.length;
 let nTexts = texts.length;
 let wordRegex;
  for(i = 0; i<nStrings; i++) {
   string = strings[i];
   wordRegex = new RegExp("\\b" + string + "\\b");
   nl = new nL();
   nl.name = string;
   for(j = 0; j<nTexts; j++) {
     if(asWords){
       nl[j] = countRegexOccurrences(texts[j], wordRegex);
     } else {
       nl[j] = countOccurrences(texts[j], string);
     }
   }
   occurrencesTable[i] = nl;
 }
 return occurrencesTable;
}

let getWordsInTextsOccurrencesTable=function(texts, weightsMode, stopWords=1, includeLinks, wordsLimitPerString=500, totalWordsLimit=1000, sortByTotalWeight, minSizeWords=3, addTotalList, minSupportFraction=0, wordDelimiter) {
 if(texts == null) return;
  var i, j;
 let matrix;
 let nTexts = texts.length;
 if(stopWords==1) stopWords = StringOperators_STOP_WORDS
 let normalize = weightsMode==1;
 let tfidf = weightsMode==2 || weightsMode==3 || weightsMode==4;
 sortByTotalWeight = (sortByTotalWeight || true)
 let table;
 let oWordCounts = {};
 let tabCounts;
 for(i = 0; i<nTexts; i++){
   table = getWordsOccurrencesTable(texts[i], stopWords, includeLinks, wordsLimitPerString, minSizeWords, wordDelimiter);
   for(j = 0; j<table[0].length; j++){
     tabCounts = oWordCounts[table[0][j]];
     if(tabCounts == undefined){
       tabCounts = new nT();
       tabCounts.push(new nL())
       tabCounts.push(new nL())
       oWordCounts[table[0][j]] = tabCounts;
     }
     tabCounts[0].push(i);
     tabCounts[1].push(table[1][j]);
   }
 }
 let sLWords = new sL();
 for(var key in oWordCounts){
   if(!oWordCounts.hasOwnProperty(key)) continue;
   if(oWordCounts[key][0].length < minSupportFraction*nTexts){
     delete oWordCounts[key];
     continue;
   }
   sLWords.push(key);
 }
 matrix = createUniformTable(nTexts+1,sLWords.length,0);
 // set list names
 for(i = 0; i < matrix.length; i++){
   if(i==0)
     matrix[i] = createListWithSameElement(sLWords.length,'','words');
   else
     matrix[i].name = 'text ' + (i-1);
 }
 // fill with data
 let iWord = 0;
 for(var key in oWordCounts){
   if(!oWordCounts.hasOwnProperty(key)) continue;
   matrix[0][iWord] = key;
   tabCounts = oWordCounts[key];
   for(i = 0; i < tabCounts[0].length; i++){
     matrix[tabCounts[0][i]+1][iWord] += tabCounts[1][i];
   }
   iWord++;
 }
   if(matrix[0].length > totalWordsLimit) sortByTotalWeight = true;
  matrix[0].name = 'words';
  if(tfidf || sortByTotalWeight || addTotalList) {
   var totalList = new nL();
   var occurrencesInText;
   totalList = matrix[1].clone();
   var idf = createListWithSameElement(matrix[0].length, 0, 'idf');
    for(i=1; i<matrix.length; i++){
       occurrencesInText = matrix[i];
       occurrencesInText.name = 'text '+(i-1);
       for(j=0; j<occurrencesInText.length; j++){
         if(occurrencesInText[j]>0){
           if(i>1) totalList[j] += occurrencesInText[j];
           idf[j]++;
         }
       }
   }
   
   if(tfidf) {
      totalList = createListWithSameElement(matrix[0].length, 0, 'total tf-idf');
      if(weightsMode==2){
       for(i=1; i<matrix.length; i++){
         occurrencesInText = matrix[i];
         for(j=0; j<occurrencesInText.length; j++){
           occurrencesInText[j] /= idf[j];
           totalList[j] += occurrencesInText[j];
         }
       }
     } else if(weightsMode==3){
       for(i=1; i<matrix.length; i++){
         occurrencesInText = matrix[i];
         for(j=0; j<occurrencesInText.length; j++){
           occurrencesInText[j] *= Math.log(nTexts/idf[j]);
           totalList[j] += occurrencesInText[j];
         }
       }
     } else if(weightsMode==4){
       for(i=1; i<matrix.length; i++){
         occurrencesInText = matrix[i];
         for(j=0; j<occurrencesInText.length; j++){
           occurrencesInText[j] *= idf[j];
           totalList[j] += occurrencesInText[j];
         }
       }
     }
   }
    if(addTotalList){
     matrix.push(totalList);
     totalList.name = 'totals';
   }
    if(sortByTotalWeight) {
     matrix = matrix.sortRowsByList(totalList, false);
   }
  } else {
   for(i=1; i<matrix.length; i++){
     matrix[i].name = 'text '+(i-1);
   }
 }
  if(normalize) {
   matrix.forEach(function(occurrences, i) {
     if(i === 0) return;
     matrix[i] = normalizeToSum(matrix[i]);
   });
 }
   if(totalWordsLimit > 0 && totalWordsLimit < matrix[0].length) matrix = matrix.sliceRows(0, totalWordsLimit - 1);
  return matrix;
}
let createShortTextsNetwork=function(texts, stopWords, relationThreshold, mode, applyIntensity, wordsFrequencyTable, names, colors) {
 if(texts == null ||  texts.length == null || texts.length === 0) return;
  var _time = new Date().getTime();
  var network = new Net();
 let joined = texts.join(' *** ').toLowerCase();
 let textsLowerCase = joined.split(' *** ');
 let n_texts = texts.length;
 let i, j;
 let word;
 let nWords;
 let n_words;
 let weights;
 let weight;
 let maxWeight = 0;
  if(colors!=null && !colors["isColorList"]) colors = colors.toColorList();
  relationThreshold = relationThreshold || 0.2;
 mode = mode || 0;
  if(wordsFrequencyTable) {
   wordsFrequencyTable[0] = wordsFrequencyTable[0].toLowerCase();
   var maxFreq = wordsFrequencyTable[1][0];
   var index;
 }
  var weightFunction;
 switch(mode) {
   case 0: //pseudo-entropy
     weightFunction = function(nOtherTexts) {
       return 1 - Math.pow(2 * nOtherTexts / (n_texts - 1) - 1, 2);
     };
     break;
   case 1: //originality
     weightFunction = function(nOtherTexts) {
       return 1 / (nOtherTexts + 1);
     };
     break;
   case 2: //skewed entropy (favoring very few external occurrences)
     weightFunction = function(nOtherTexts) {
       return 1 - Math.pow(2 * Math.pow(nOtherTexts / (n_texts - 1), 0.2) - 1, 2);
     };
     break;
   default: //originality except isolation
     weightFunction = function(nOtherTexts) {
       if(nOtherTexts === 0) return 0;
       return 1 / nOtherTexts;
     };
     break;
 }
 _time = new Date().getTime();
  var node, name;
  texts.forEach(function(text, i) {
   name = names==null || names[i]==null?"_" + i:names[i];
   node = new Nd("_" + i, name);
   network.addNode(node);
   node.content = text;
   if(colors!=null) node.color = colors[i];
   var words = getWords(text, true, stopWords, false, false, 0, 3);
    n_words = words.length;
   weights = new nL();
   //words.forEach(function(word, j){
   for(j = 0; words[j] != null; j++) {
     word = words[j];
     var nOtherTexts = 0;
     textsLowerCase.forEach(function(text, k) {
       if(i == k) return;
       nOtherTexts += Number(text.indexOf(word) != -1); //is this the fastest way?
     });
      if(nOtherTexts === 0) {
       words.splice(j, 1);
       j--;
       continue;
     }
      weights[j] = weightFunction(nOtherTexts); //1-Math.pow(2*Math.pow(nOtherTexts/(n_texts-1), 0.25)-1, 2);
      if(applyIntensity) weights[j] *= (1 - 1 / (countOccurrences(textsLowerCase[i], word) + 1));
      if(wordsFrequencyTable) {
       index = wordsFrequencyTable[0].indexOf(word);
       weights[j] *= (index == -1 ? 1 : (1 - Math.pow(wordsFrequencyTable[1][index] / maxFreq, 0.2)));
     }
      maxWeight = Math.max(maxWeight, weights[j]);
   }
    nWords = Math.floor(Math.log(n_words + 1) * 3);
    words = words.getSortedByList(weights, false).slice(0, nWords);
    words.position = {};
   words.forEach(function(word, j) {
     words.position[word] = j;
   });
    weights = weights.getSorted(false).slice(0, nWords);
   node.wordsTable = new T();
   node.wordsTable[0] = words;
   node.wordsTable[1] = weights;
 })
 _time = new Date().getTime();
  for(i = 0; network.nodes[i + 1] != null; i++) {
   var node = network.nodes[i];
   for(j = i + 1; network.nodes[j] != null; j++) {
     var node1 = network.nodes[j];
     weight = 0;
     node.wordsTable[0].forEach(function(word, i) {
       //index = node1.wordsTable[0].indexOf(word);//TODO:this could be improved (as seen in forums, indexOf might be unneficient for arrays
       index = node1.wordsTable[0].position[word];
       if(index != null) weight += node.wordsTable[1][i] * node1.wordsTable[1][index];
     });
     weight = Math.sqrt((weight / maxWeight) / Math.max(node.wordsTable[0].length, node1.wordsTable[0].length));
     if(weight > relationThreshold) {
       var relation = new Rel(node.id + "_" + node1.id, node.id + "_" + node1.id, node, node1, weight);
       network.addRelation(relation);
     }
   }
 }
  return network;
}
let splitStrings=function(texts, separator, maxComponents, bMergeExtraComponents, sLabel) {
 if(texts==null) return null;
 if(separator == null) separator = ',';
 if(maxComponents == null) maxComponents = 4;
 bMergeExtraComponents = bMergeExtraComponents == null ? true: bMergeExtraComponents;
 sLabel = sLabel == null ? '': sLabel;
  var tab = new T();
 let i,j,k;
 for(i=0;i<maxComponents;i++){
   tab.push(new sL());
   tab[i].name = 'Level ' + (i+1);
 }
 let nLUsed = new nL();
 for(i=0; i<texts.length; i++){
   var sComps = splitString(texts[i],separator);
   if(sComps == null){
     for(j=0; j<maxComponents; j++)
       tab[j][i] = j==0 ? sLabel : null;
     continue;
   }
   sComps = sComps.trim();
   for(j=0; j<maxComponents; j++){
     if(j < sComps.length){
       tab[j][i] = sComps[j];
       if(j >= nLUsed.length)
         nLUsed.push(j);
     }
     else
       tab[j][i] = null;
     if(bMergeExtraComponents && j == maxComponents-1 && sComps.length > maxComponents){
       // cannot easily support reg exp separators because we just append them back again in a simple fashion
       for(k = j+1; k < sComps.length; k++){
         tab[j][i] += separator + sComps[k];
       }
     }
   }
 }
 if(nLUsed.length == 0) tab = new T(); // empty
 else if(nLUsed.length < tab.length){
   tab = tab.getColumns(nLUsed);
 }
 return tab;
}
let encodeStringsAsNumericFeatures=function(texts, method, sLComplete, bmakeLowerCase, bUseListNamePrefix, bThrowError) {
 if(texts==null) return null;
 method = method == null ? 0 : method;
 bmakeLowerCase = bmakeLowerCase == null ? false : bmakeLowerCase;
 bUseListNamePrefix = bUseListNamePrefix == null ? false : bUseListNamePrefix;
 if(bThrowError == null)
   bThrowError = method == 3 ? false : true;
 let dict = {}, LNoReps, output, j;
 if(texts.type != 'sL')
   texts = texts.toStringList();
 if(bmakeLowerCase)
   texts = texts.toLowerCase();
 // leave values as they are, don't trim
 if(sLComplete == null)
   LNoReps = texts.getWithoutRepetitions().getSorted();
 else{
   LNoReps = bmakeLowerCase ? sLComplete.toLowerCase() : sLComplete;
   LNoReps = LNoReps.getWithoutRepetitions().getSorted();
 }
 let a = [];
 for(var i=0; i < LNoReps.length; i++){
   dict[LNoReps[i]] = i;
   a.push(LNoReps[i]);
 }
 let sNamePrefix = '';
 if(bUseListNamePrefix)
   sNamePrefix = texts.name == '' ? '' : texts.name + ':';
 output = new nT();
 if(method == 0 || method == 3){
   for(i=0; i < LNoReps.length; i++){
     output.push(new nL());
     output[i].name = sNamePrefix + LNoReps[i];
   }
 }
 else if(method == 1){
   output.push(new nL());
   output[0].name = texts.name == '' ? 'Code' : texts.name + ' Code';
 }
 else{
   var sHighestInBinary = ((LNoReps.length - 1) >>> 0).toString(2);
   var nBinaryDigitsRequired = sHighestInBinary.length;
   for(i=0; i < nBinaryDigitsRequired; i++){
     output.push(new nL());
     output[i].name = sNamePrefix + 'Bit ' + i;
   }
 }
 if(method == 0 || method == 3){
   // one-hot
   for(i=0; i < texts.length; i++){
     j = dict[texts[i]];
     if(j != null){
       for(var c=0; c < output.length; c++){
         output[c].push(c == j ? 1 : 0);
       }
     }
     else{
       // can happen if texts contains things not in sLComplete
       if(bThrowError)
         throw new Error('Element in texts not found in sLComplete.');
       for(var c=0; c < output.length; c++){
         output[c].push(0);
       }
     }
   }
 }
 else if(method == 1){
   // ordinal
   for(i=0; i < texts.length; i++){
     j = dict[texts[i]];
     if(j != null){
       output[0].push(j);
     }
     else{
       // can happen if texts contains things not in sLComplete
       if(bThrowError)
         throw new Error('Element in texts not found in sLComplete.');
       for(var c=0; c < output.length; c++){
         output[c].push(0);
       }
     }
   }
 }
 else {
   // binary
   for(i=0; i < texts.length; i++){
     j = dict[texts[i]];
     if(j != null){
       var jBinary = (j >>> 0).toString(2);
       var lenDiff = output.length - jBinary.length;
       for(var c=0; c < output.length; c++){
         var bdigit = c-lenDiff < 0 ? '0' : jBinary.substr(c-lenDiff,1);
         output[c].push(Number(bdigit));
       }
     }
     else{
       // can happen if texts contains things not in sLComplete
       if(bThrowError)
         throw new Error('Element in texts not found in sLComplete.');
       for(var c=0; c < output.length; c++){
         output[c].push(0);
       }
     }
   }
 }
 if(method == 0){
   // remove last column since it is redundant
   if(output.length > 1)
     output = output.getWithoutElementAtIndex(output.length - 1);
 }
 return output;
}


let correlationRatio=function(sL, nL, weightMode) {
 if(nL == null || sL == null) return null;
 if(sL.type == 'L')
   sL = sL.toStringList();
 if(nL.type != 'nL')
   throw new Error('The first list must be a nL');
 if(sL.type != 'sL')
   throw new Error('The second list must be a sL');
 if(nL.length != sL.length)
   throw new Error('The two lists must have the same length');
 weightMode = weightMode == null ? 0 : weightMode;
 if(weightMode != 0)
   nL = normalizeByZScore(nL); // keeps weighted scores scale invariant
  var t = new T();
 t.push(sL);
 t.push(nL);
 t = aggregateTable(t,0,[0,1],[0,7]);
 let SumSquaresOverall = nL.getVariance()*nL.length;
 let avgOverall = nL.getMean();
 if(SumSquaresOverall == 0) return 0;
 let SumSquaresWeightedGroup, SumSquaresGroups = 0;
 let avgGroup, nLGroupAverages = new nL();
 for(var i=0; i < t[1].length; i++){
   avgGroup = t[1][i].getMean();
   nLGroupAverages.push(avgGroup);
   SumSquaresWeightedGroup = Math.pow(avgGroup-avgOverall,2)*t[1][i].length;
   SumSquaresGroups += SumSquaresWeightedGroup;
 }
 let f=1;
 if(weightMode != 0){
   // Tried using coefficient of variation as weighting factor but a simple sum of pairwise diffs works better
   // There is likely room to improve this by making it more scale and translation invariant
   var interval = nL.getInterval();
   // normalize to original nL interval
   nLGroupAverages = normalizeToInterval(nLGroupAverages,interval);
   var diff,s=0;
   var min = Infinity, max = -Infinity;
   for(var i=0;i<nLGroupAverages.length;i++){
     for(var j=i+1;j<nLGroupAverages.length;j++){
       diff = Math.abs(nLGroupAverages[i]-nLGroupAverages[j]);
       s += diff;
       min = Math.min(min,diff);
       max = Math.max(max,diff);
     }
   }
   var nCombos = nLGroupAverages.length*(nLGroupAverages.length-1)/2;
   if(weightMode == 1)
     f = 10*min;
   else if(weightMode == 2)
     f = 10*s/nCombos;
   else if(weightMode == 3)
     f = 10*max;
 }
 return Number((Math.abs(f)*Math.sqrt(SumSquaresGroups/SumSquaresOverall)).toFixed(5));
}


let splitByEnter=function(string,trim) {
 if(string == null) {
   return null;
 }
 let sl = splitString(string, "\n", null, trim);
 if(sl.length > 1)
 {
  return sl;
 }
 sl = splitString(string, ENTER2, null, trim);
 if(sl.length > 1) {
   return sl;
 }
 sl = splitString(string, ENTER3, null, trim);
 if(sl.length > 1) {
   return sl;
 }
 return new sL(string);
}
let replaceStringInText=function(text, string, replacement) {
 if(text == null || string == null || replacement == null) return null;
 if(typeof text == 'object') return text;
  if(Object.prototype.toString.call(string) != '[object RegExp]'){
   string = String(string);
   var aParts = string.match(/\/(.+)\/(.*)/);
   if(aParts == null){
     // simple string pattern, replace all but with case specific (historical behaviour)
     string = new RegExp(string, "g")// _toRegEx(string);
   }
   else{
     // we have a regexp expressed as a string
     try{
       string = new RegExp(aParts[1],aParts[2]);
     }
     catch(err){
       throw err;
     }
   }
 }
  return String(text).replace(string, replacement);
}
let replaceStringsInText=function(text, strings, replacement, asWords) {
 if(text==null || strings==null || replacement==null) return null;
  var newText = text;
 let nStrings = strings.length;
 let j;
 let string;
  for(j=0; j<nStrings; j++){
   string = strings[j];
   if(asWords && Object.prototype.toString.call(string) != '[object RegExp]')
     string = new RegExp('\\b' + escapeForRegExp(string) + '\\b', 'g');
   newText = replaceStringInText(newText,string,Array.isArray(replacement)?String(replacement[j]):replacement) ;
 }
  return newText;
}
let removeTextsBetweenStrings=function(text, substring0, substring1, includeSubstring0, includeSubstring1, nMaxRemovals) {
 if(text==null || substring0==null || substring1==null) return null;
  var reduce_nextstep = function(txt){
      var index0 = txt.indexOf(substring0);
      var index1 = txt.indexOf(substring1, index0);
      if(index0==-1 || index1==-1) return null;
      
      
      return txt.substr(0,index0-(includeSubstring0?substring0.length:0))+txt.substr(index1+(includeSubstring1?0:substring1.length));
  };
  
  var new_txt = reduce_nextstep(text);
  if(new_txt) text = new_txt;
  var n=1;
  nMaxRemovals = nMaxRemovals>0?nMaxRemovals:Number.MAX_SAFE_INTEGER;
  
  while(new_txt && n<nMaxRemovals){
      text = new_txt;
      new_txt = reduce_nextstep(text);
      n++;
  }
  
  return text;
}
let getWords=function(string, withoutRepetitions=true, stopWords=true, sortedByFrequency=true, includeLinks=true, limit=0, minSizeWords=3, wordDelimiter = " ") {
 if(string == null) return null;
  var links;

 wordDelimiter = wordDelimiter == '' ? ' ' : wordDelimiter

  var regexlink = StringOperators_LINK_REGEX;
 let i, j, list;
 if(typeof string != 'string')
   string = String(string);
 if(includeLinks) {
   links = string.match(regexlink);
 }
   string = string.toLowerCase().replace(regexlink,"");
  if(wordDelimiter == ' '){
   // regexp \w in javascript is same as [A-Za-z_0-9] and does not include accented characters
   // This expression below works for latin-based languages but not Cyrillic or Chinese
   list = string.match(/[A-Za-z_0-9À-ÖØ-öø-ÿ]+/g);
 }
 else
   list = splitString(string,wordDelimiter,null,true);
  if(list == null) return new sL();
  list = sL.toL(list);
 list = list.getFilteredByFunction(function(val){ return val != ''});
  if(includeLinks && links != null) list = list.concat(links);
 if(wordDelimiter == ' ')
   list = sL.toL(list).replace(/ /g, "");
  var nMatches;
  if(stopWords != null) {
   var bUseOldMethod = true;
   if(stopWords===true){
     stopWords = StringOperators_STOP_WORDS;
     bUseOldMethod = false;
   }
   else{
     bUseOldMethod = false;
     for(j = 0; j < stopWords.length; j++){
       if(typeof stopWords[j] == 'object'){
         // regular exp
         bUseOldMethod = true;
         break;
       }
     }
   }
    if(bUseOldMethod){
     nMatches = list.length;
     var nStopWords = stopWords.length;
     for(i = 0; i<nMatches; i++) {
       for(j = 0; j<nStopWords; j++) {
         if((typeof stopWords[j]) == 'string') {
           if(stopWords[j] == list[i]) {
             list.splice(i, 1);
             i--;
             nMatches = list.length;
             break;
           }
         } else if(stopWords[j].test(list[i])) {
           list.splice(i, 1);
           i--;
           nMatches = list.length;
           break;
         }
       }
     }
   }
   else{
     // much faster than old method when we have stop words
     list = list.getWithoutElements(stopWords);
     nMatches = list.length;
   }
 }
  if(minSizeWords > 1) {
   nMatches = list.length;
   for(i = 0; i<nMatches; i++) {
     if(list[i].length < minSizeWords) {
       list.splice(i, 1);
       i--;
       nMatches = list.length;
     }
   }
 }
  if(sortedByFrequency) {
   if(withoutRepetitions)
     list = list.getFrequenciesTable(true)[0];// //countElementsRepetitionOnList(list, true)[0];
   else {
     var occurrences = list.getFrequenciesTable();
     var list2 = new sL();
     for(i=0; i < occurrences[0].length; i++){
       for(j=0; j < occurrences[1][i]; j++)
         list2.push(occurrences[0][i]);
     }
     list = list2;
   }
    if(limit > 0) list = list.splice(0, limit);
    return list;
 }
  if(withoutRepetitions) {
   list = list.getWithoutRepetitions();
 }
  if(limit > 0) list = list.splice(0, limit);
 return list;
}

let getBigrams=function(string, withoutRepetitions=true, stopWords=true, sortedByFrequency=true, minSizeWords=3){
    if(stopWords===true) stopWords = StringOperators_STOP_WORDS
    string = cleanText(string, true, true, " ", true, true, stopWords, true, true)
    let words = string.split(" ")
    let bigrams = new sL()
    let n = words.length-1
    for(let i=0; i<n; i++){
        if(words[i].length>=minSizeWords && words[i+1].length>=minSizeWords) bigrams.push(words[i]+" "+words[i+1])
    }
    if(withoutRepetitions) bigrams = bigrams.getWithoutRepetitions()
    return bigrams
}

let substr=function(string, i0, length) {
 if(string == null) return null;
 i0 = i0 || 0;
 return string.substr(i0, length);
}

let splitString=function(string, separator, segments, trim) {
 if(string == null) return null;
 if(segments != null && !isNaN(segments) && segments != 0){
   var aWords = string.match(/\w+/g);
   if(aWords == null)
     aWords = [string];
   var bSplitAtWordBoundary = true;
   var fShrinkShift = string.length/aWords.length/2;
   if(segments > aWords.length){
     bSplitAtWordBoundary = false;
     fShrinkShift = 0;
   }
   var sL = new sL();
   var ss, sRemaining = string, indexOfBreak, size;
    while(sRemaining.length > 0){
     size = Math.max(1,Math.floor(sRemaining.length / (segments - sL.length) - fShrinkShift));
     if(sL.length == segments - 1){
       sL.push(sRemaining);
       break;
     }
     indexOfBreak = bSplitAtWordBoundary ? sRemaining.substring(size - 1).search(/\s/) : 0;
     if(indexOfBreak == -1)
       indexOfBreak = size;
     else
       indexOfBreak += size;
     ss = sRemaining.substring(0,indexOfBreak);
     sL.push(ss);
     sRemaining = sRemaining.substring(indexOfBreak);
   }
   if(trim) return sL.trim();
   return sL;
 }
  if(separator == null) separator = ",";
 if(typeof separator == "string") separator = separator.replace("\\n", "\n");
 if(string.indexOf(separator) == -1) return new sL(string);
  sL = sL.toL(string.split(separator));
  if(trim) return sL.trim();
 return sL;
}
let getFirstTextBetweenStrings=function(text, subString0, subString1) {
 if(text == null) return null;
 let i0 = text.indexOf(subString0);
 if(i0 == -1) return null;
 if(subString1 === "" || subString1 == null) return text.substr(i0 + subString0.length);
 let i1 = text.indexOf(subString1, i0 + subString0.length + 1);
 if(i1 == -1) return text.substring(i0 + subString0.length);
 return text.substr(i0 + subString0.length, i1 - (i0 + subString0.length));
}
let getAllTextsBetweenStrings=function(text, subString0, subString1) { //TODO: improve using indexOf(string, START_INDEX)
 if(text.indexOf(subString0) == -1) return new sL();
 let blocks = text.split(subString0);
 let nBlocks = blocks.length;
 let sl = new sL();
 let block;
 let index;
 let i;
 for(i = 1; i < nBlocks; i++) {
   block = blocks[i];
   if(subString1 == subString0) {
     sl.push(block);
   } else {
     index = block.indexOf(subString1);
     if(index >= 0) {
       sl.push(block.substr(0, index));
     }
   }
 }
 return sl;
}

let textContainsString=function(text, string, asWord, caseSensitive) {
 text = caseSensitive ? string : text.toLowerCase();
 string = caseSensitive ? string : string.toLowerCase();
 return asWord ?
   text.match(new RegExp("\\b" + string + "\\b")).length > 0 :
   text.indexOf(string) != -1;
}

let getParenthesisContents=function(text, brackets) {
 let contents = new sL();
  var subText = text;
  var contentObject = getFirstParenthesisContentWithIndexes(text, brackets);
  var nAttempts = 0;
 while(contentObject.content !== "" && contentObject.index1 < subText.length - 1 && nAttempts < text.length) {
   contents.push(contentObject.content);
   subText = subText.substr(contentObject.index1 + 2);
   contentObject = getFirstParenthesisContentWithIndexes(subText, brackets);
   nAttempts++;
 }
  return contents;
}

let getFirstParenthesisContent=function(text, brackets) {
 return getFirstParenthesisContentWithIndexes(text, brackets).content;
}
let getFirstParenthesisContentWithIndexes=function(text, brackets) {
 let open = brackets ? "[" : "(";
 let close = brackets ? "]" : ")";
  var openRegEx = brackets ? /\[/g : /\(/g;
 let closeRegEx = brackets ? /\]/g : /\)/g;
  var indexOpen = text.indexOf(open);
  if(indexOpen == -1) return {
   "content": "",
   "index0": 0,
   "index1": 0
 };
  var indexClose = text.indexOf(close);
  var part = text.substring(indexOpen + 1, indexClose);
  var openMatch = part.match(openRegEx);
 let closeMatch = part.match(closeRegEx);
  var nOpen = (openMatch == null ? 0 : openMatch.length) - (closeMatch == null ? 0 : closeMatch.length);
 let nAttempts = 0;
   while((nOpen > 0 || indexClose == -1) && nAttempts < text.length) {
   indexClose = text.indexOf(close, indexClose);
   part = text.substring(indexOpen + 1, indexClose + 1);
   indexClose++;
   openMatch = part.match(openRegEx);
   closeMatch = part.match(closeRegEx);
   nOpen = (openMatch == null ? 0 : openMatch.length) - (closeMatch == null ? 0 : closeMatch.length);
    nAttempts++;
 }
 indexClose = text.indexOf(close, indexClose);
  return {
   "content": indexClose == -1 ? text.substring(indexOpen + 1) : text.substring(indexOpen + 1, indexClose),
   "index0": indexOpen + 1,
   "index1": indexClose == -1 ? (text.length - 1) : (indexClose - 1)
 };
}
let placeString=function(string, stringToPlace, index) {
 return string.substr(0, index) + stringToPlace + string.substr(index + stringToPlace.length);
}
let insertString=function(string, stringToInsert, index) {
 return string.substr(0, index) + stringToInsert + string.substr(index);
}
let cleanText=function(string, rmvEnters, rmvTabs, replaceTabsAndEntersBy, rmvPunctuation, toLowerCase, stopWords, rmveDoubleSpaces, rmveAccentsAndDiacritics){
 if(string==null) return null;
 if(string["isList"]) return cleanTexts(string, rmvEnters, rmvTabs, replaceTabsAndEntersBy, rmvPunctuation, toLowerCase, stopWords, rmveDoubleSpaces, rmveAccentsAndDiacritics);
 
  if(rmvEnters) string = removeEnters(string, replaceTabsAndEntersBy);
 if(rmvTabs) string = removeTabs(string, replaceTabsAndEntersBy);
 if(rmvPunctuation) string = removePunctuation(string);
 if(toLowerCase) string = string.toLowerCase();
  if(stopWords != null){
    if(stopWords===true) stopWords=StringOperators_STOP_WORDS
   string = replaceStringsInText(string, stopWords, "", true);
 }
  if(rmveDoubleSpaces) string = removeDoubleSpaces(string);
  if(rmveAccentsAndDiacritics) string = removeAccentsAndDiacritics(string);
  return string;
}
let removeEnters=function(string, replaceBy) {
 if(string==null) return null;
 replaceBy = replaceBy==null?"":replaceBy
 return string.replace(/(\r|\n)/g, replaceBy);
}
let removeTabs=function(string, replaceBy) {
 if(string==null) return null;
 replaceBy = replaceBy || ""
 return string.replace(/\t/g, replaceBy);
}
let removePunctuation=function(string, replaceBy) {
 if(string==null) return null;
 replaceBy = replaceBy || "";
 return string.replace(/[:,.;?!\(\)\"\']/gi, replaceBy);
}
let removeDoubleSpaces=function(string) {
 if(string==null) return null;
 let retString = string;
 let regExpr = RegExp(/\s\s/g)
 while(regExpr.test(retString)) {
   retString = retString.replace(regExpr, " ")
 }
 return retString;
}

let removeHtmlTags=function(html) {
 let tmp = document.createElement("DIV");
 tmp.innerHTML = html;
 return tmp.textContent || tmp.innerText;
}

let escapeForRegExp=function(text) {
 if(text==null) return null;
 return text.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}
let removeLinks=function(text) {
 text += ' ';
 let regexp = /https*:\/\/[a-zA-Z0-9\/\.]+( |:|;|\r|\t|\n|\v)/g;
 return(text.replace(regexp, ' ')).substr(0, text.length - 2);
}
let removeQuotes=function(string) { //TODO:improve
 if(string.charAt(0) == "\"") string = string.substr(1);
 if(string.charAt(string.length - 1) == "\"") string = string.substr(0, string.length - 1);
 return string;
}
let removeAccentsAndDiacritics=function(string) {
 let r = string.replace(new RegExp(/[àáâãäå]/g), "a");
 r = r.replace(new RegExp(/æ/g), "ae");
 r = r.replace(new RegExp(/ç/g), "c");
 r = r.replace(new RegExp(/[òóôõö]/g), "o");
 r = r.replace(new RegExp(/œ/g), "oe");
 r = r.replace(new RegExp(/[ùúûü]/g), "u");
 r = r.replace(new RegExp(/[ýÿ]/g), "y");
  r = r.replace(new RegExp(/[ÀÁÂÄÃ]/g), "A");
 r = r.replace(new RegExp(/Æ/g), "AE");
 r = r.replace(new RegExp(/Ç/g), "c");
 r = r.replace(new RegExp(/[ÈÉÊË]/g), "E");
 r = r.replace(new RegExp(/[ÌÍÎÏ]/g), "I");
 r = r.replace(new RegExp(/[èéêë]/g), "e");
 r = r.replace(new RegExp(/[ìíîï]/g), "i");
 r = r.replace(new RegExp(/ñ/g), "n");
 r = r.replace(new RegExp(/Ñ/g), "N");
 r = r.replace(new RegExp(/[ÒÓÔÖÕ]/g), "O");
 r = r.replace(new RegExp(/Œ/g), "OE");
 r = r.replace(new RegExp(/[ÙÚÛÜ]/g), "U");
 r = r.replace(new RegExp(/[Ÿ]/g), "Y");
  return r;
}


let getWordsOccurrencesTable=function(string, stopWords, includeLinks, limit, minSizeWords, wordDelimiter, includeBiGrams=false) {
 if(string == null) return;
 if(string.length === 0) return new T(new sL(), new nL());
  if(stopWords==1) stopWords = StringOperators_STOP_WORDS
    //console.log(stopWords, includeLinks, limit, minSizeWords, wordDelimiter, includeBiGrams)
    var words = getWords(string, false, stopWords, false, includeLinks, null, minSizeWords, wordDelimiter)
    if(includeBiGrams) words = words.concat(getBigrams(string, false, stopWords, false, includeLinks, null, minSizeWords))




 let table
 if(limit != null)
   table = words.getFrequenciesTable(true).sliceRows(0, limit-1);
 else
   table = words.getFrequenciesTable(true);
 table[0].name = 'Word';
 table[1].name = 'Frequency';
 return table
}


let indexesOf=function(text, string, asWord) { //TODO:test
 let indexes, index;
 
 if(asWord){
   indexes  = new nL()
    string = new RegExp("\\b" + string + "\\b");
   index = text.search(string);
   if(index!=-1) text = text.substr(index);
   var prev;
   while(index != -1){
     indexes.push(index);
     prev = index;
     index = text.search(string);
     text = text.substr(index+1);
     if(index>=0) index+=prev;
   }
   return indexes;
 }
  index = text.indexOf(string);
 if(index == -1) return new nL();
 indexes  = new nL(index);
  index = text.indexOf(string, index + 1);
  while(index != -1) {
   indexes.push(index);
   index = text.indexOf(string, index + 1);
 }
 return indexes;
}
let indexesOfString=function(text, string, asWord){
 return indexesOf(text, string, asWord);
}
let repeatString=function(text, n) {
 let i;
 let newText = "";
 for(i = 0; i < n; i++) {
   newText += text;
 }
 return newText;
}

let countStringOccurrences=function(text, string, asWord) {
 return countOccurrences(text, string, asWord);
}

let countOccurrences=function(text, string, asWord) { //seems to be th emost efficient: http://stackoverflow.com/questions/4009756/how-to-count-string-occurrence-in-string
 if(asWord) return countWordOccurrences(text, string);
  var n = 0;
 let index = text.indexOf(string);
 while(index != -1) {
   n++;
   index = text.indexOf(string, index + string.length);
 }
 return n;
}

let countWordOccurrences=function(string, word) {
 let regex = new RegExp("\\b" + word + "\\b");
 return countRegexOccurrences(string, regex);
}

let countRegexOccurrences=function(string, regex) {
 let match = string.match(regex);
 return match == null ? 0 : match.length;
}

let countStringsOccurrences=function(text, strings, asWords) {
 if(text==null || strings==null) return;
  var i;
 let nl = new nL();
 let nStrings = strings.length;
 for(i = 0; i<nStrings; i++) {
   if(asWords){
     nl[i] = countRegexOccurrences(text, new RegExp("\\b" + strings[i] + "\\b"));
   } else {
     nl[i] = countOccurrences(text, strings[i]);
   }
 }
 return nl;
}
let validateEmail=function(text) {
 return StringOperators_MAIL_REGEX.test(text);
}
let validateUrl=function(text) {
 return StringOperators_LINK_REGEX.test(text);
}

let getClosestLevenshtein = function(text, texts, mode=0){
    let closest = texts[0]
    let dMin = 99999
    texts.forEach(other=>{
        let d = getLevenshteinDistance(text, other)
        if(d<dMin){
            dMin = d
            closest = other
        }
    })
    if(mode==0) return closest
    return {closest, distance:dMin}
}

let getLevenshteinDistance=function(a, b, bNormalized=false) {
    /*
    Copyright (c) 2011 Andrei Mackenzie
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
    documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
    rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
    permit persons to whom the Software is furnished to do so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
    WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
    HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    */
  // treat null like empty string
 a = a == null ? '' : a;
 b = b == null ? '' : b;
 if(a.length === 0 && b.length === 0) return 0;
 if(a.length === 0) return bNormalized ? 1 : b.length;
 if(b.length === 0) return bNormalized ? 1 : a.length;
  var matrix = [];
  // increment along the first column of each row 
 let i;
 for(i = 0; i <= b.length; i++){
   matrix[i] = [i];
 }
  // increment each column in the first row
 let j;
 for(j = 0; j <= a.length; j++){
   matrix[0][j] = j;
 }
  // Fill in the rest of the matrix
 for(i = 1; i <= b.length; i++){
   for(j = 1; j <= a.length; j++){
     if(b.charAt(i-1) == a.charAt(j-1)){
       matrix[i][j] = matrix[i-1][j-1];
     } else {
       matrix[i][j] = Math.min(matrix[i-1][j-1] + 1, // substitution
                               Math.min(matrix[i][j-1] + 1, // insertion
                                        matrix[i-1][j] + 1)); // deletion
     }
   }
 }
  if(bNormalized){
   var levn = matrix[b.length][a.length]/Math.max(a.length,b.length);
   return Number(levn.toFixed(5)); // no need to get really precise
 }
  return matrix[b.length][a.length];
}

let getNgrams=function(text, minSequenceSize=2, maxSequenceSize=2, stopWords, limit=0, minSizeWords=0, iStopwordMode){
 if(maxSequenceSize < minSequenceSize) maxSequenceSize = minSequenceSize;
 if(stopWords===true) stopWords = StringOperators_STOP_WORDS;
 iStopwordMode = iStopwordMode == null ? (stopWords == null ? 1 : 0) : iStopwordMode;
 if(iStopwordMode != 1 && stopWords == null) stopWords = StringOperators_STOP_WORDS;
 if(iStopwordMode == 1) stopWords=null;
 let i, j, sSeq;
 let sLSequences = new sL();
 if(text == null || typeof text != 'string') return sLSequences;
  // get all the tokens
 let linkregex = StringOperators_LINK_REGEX;
 text = text.toLowerCase().replace(linkregex, "");
 let tokens = text.match(/\w+|[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g);
 if(tokens == null) return sLSequences;
 tokens = sL.toL(tokens);
  var rePunct = /[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/;
  for(i=0; i<tokens.length; i++){
   sSeq = tokens[i];
   if(stopWords && stopWords.indexOf(tokens[i]) != -1) continue;
   if(minSizeWords && tokens[i].length < minSizeWords) continue;
   if(tokens[i].length == 1 && tokens[i].match(rePunct)) continue;
   if(minSequenceSize == 1) sLSequences.push(sSeq);
   for(j=i+1; j < tokens.length && j < i+maxSequenceSize; j++){
     if(stopWords && stopWords.indexOf(tokens[j]) != -1) {
       if(iStopwordMode == 0)
         break;
     }
     if(minSizeWords && tokens[j].length < minSizeWords) break;
     if(tokens[j].length == 1 && tokens[j].match(rePunct)) break;
     if(j >= i + minSequenceSize - 1){
       sSeq = sSeq + ' ' + tokens[j];
       if(iStopwordMode == 2 && stopWords.indexOf(tokens[j]) != -1)
         continue;
       sLSequences.push(sSeq);
       if(limit !== 0 && sLSequences.length == limit) break;
     }
     else
       sSeq = sSeq + ' ' + tokens[j];
   }
   if(limit !== 0 && sLSequences.length == limit) break;
 }
 return sLSequences;
}

let stringToFunction=function(string){
 if(string==null) return;
  var realCode;
 let myTempraryFunction;
  if(string.search(/function\(/)!=-1){
   realCode = "myTempraryFunction = " + string;
   eval(realCode);
   return myTempraryFunction;
 }
  var func;
 for(var i=0; i<methods.length; i++){
   if(methods[i].methodName==string){
     if(methods[i].isPrototype){
       var funcName = string;
       func = function(element, param0, param1, param2, param3, param4, param5){ 
         if(element[funcName]==null) return null;
         return element[funcName](param0, param1, param2, param3, param4, param5);
       };
     } else {
       func = methods[i].func;
     }
     break;
   }
 }
  if(func!=null) return func;
  realCode = "myTempraryFunction = function(x){return " + string + "}";
 eval(realCode);
 return myTempraryFunction;
}
let stringFormat=function(string,inputPattern,outputPattern,method){
 if(string == null || inputPattern == null || outputPattern == null) return null;
 method = method == null ? 0 : method;
 let i,j;
 if(string.type == 'sL' || _typeOf(string) == 'Array'){
   // operate on each element
   var sLRet = new sL();
   sLRet.name = string.name;
   for(i=0;i<string.length;i++){
     sLRet.push(stringFormat(string[i], inputPattern, outputPattern, method));
   }
   return sLRet;
 }
 string = typeof string != 'string' ? String(string) : string;
 inputPattern = typeof inputPattern != 'string' ? String(inputPattern) : inputPattern;
 outputPattern = typeof outputPattern != 'string' ? String(outputPattern) : outputPattern;
 // handle single string case
 if(string.length != inputPattern.length){
   if(method == 0)
     return string;
   else if(method == 1)
     return null;
   throw new Error('Input string must be same length as the input pattern');
 }
 if(new Set(inputPattern).size != inputPattern.length)
   throw new Error('All characters in the input pattern must be unique');
  var sOutput = outputPattern;
 for(i=0; i < outputPattern.length; i++){
   j = inputPattern.indexOf(outputPattern[i]);
   if(j != -1)
     sOutput = sOutput.substring(0,i) + string[j] + sOutput.substring(i+1);
 }
 return sOutput;
}
let createListWithSameElement=function(nValues, element, name) {
 if(nValues == null) return null;
 if(Array.isArray(nValues)) nValues=nValues.length;
  var list;
 switch(_typeOf(element)) {
   case 'number':
     list = new nL();
     break;
   case 'L':
     list = new T();
     break;
   case 'nL':
     list = new nT();
     break;
   case 'Rec':
     list = new recL();
     break;
   case 'string':
     list = new sL();
     break;
   case 'boolean':
     list = new L(); //TODO:update once BooleanList exists
     break;
   default:
     list = new L();
 }
  var i;
  for(i = 0; i < nValues; i++) {
   list[i] = element;
 }
  if(name != null)
   list.name = name;
 return list;
}

let createIterationSequence=function(nValues, firstElement, dynamicFunction) {
 let list = createListWithSameElement(1, firstElement);
 for(var i = 1; i < nValues; i++) {
   list[i] = dynamicFunction(list[i - 1]);
 }
 return list;
}

let createListWithUniqueElements=function(nValues, style=0, prefix, name, nWords=5) {
 prefix = prefix == null ? '' : prefix
 let list;
 if(prefix == '' && style == 1)
   list = new nL();
 else
   list = new sL();
 if(name != null)
   list.name = name;
  var i,j;
  if(style == 0){
   // find number of chars required
   var nChars = 1;
   var sChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   var len=sChars.length;
   while(nValues > Math.pow(len,nChars)){
     nChars++;
   }
   var nLPos = createListWithSameElement(nChars,0);
   var s;
   for(i = 0;i < nValues; i++){
     s='';
     for(j = 0;j < nLPos.length;j++)
       s = sChars[nLPos[j]] + s;
     list.push(prefix + s);
     for(j = 0;j < nLPos.length;j++){
       nLPos[j]++;
       if(nLPos[j] != len)
         break;
       nLPos[j] = 0;
     }
   }
 }
 else if(style == 1){
   for(i = 0; i < nValues; i++) {
     if(prefix == '')
       list.push(i+1);
     else
       list.push(prefix + (i+1));
   }
 }
 else if(style == 2){
   for(i = 0; i < nValues; i++) {
     s = StringOperators_WORDLISTS['lorem'].getRandomElements(nWords).join(' ');
     list.push(s);
   }
 }
  return list;
}
let replaceChomasInTextLine=function(line, separator) {
 let quoteBlocks = line.split("\"");
 if(quoteBlocks.length < 2) return line;
 let insideQuote;
 let i;
 let re;
 separator = separator==null?",":separator;
  // put escape in front of it in case it is something like | or +
 re = new RegExp('\\'+separator,'g');
  for(i = 0; quoteBlocks[i] != null; i++) {
   insideQuote = i * 0.5 != Math.floor(i * 0.5);
   if(insideQuote) {
     quoteBlocks[i] = quoteBlocks[i].replace(re, "*CHOMA*");
   }
 }
 line = sL.toL(quoteBlocks).getConcatenated("");
 return line;
}
let _replaceSpacesInLine=function(line) {
 let quoteBlocks = line.split("\"");
 if(quoteBlocks.length < 2) return line;
 let insideQuote;
 let i;
 for(i = 0; quoteBlocks[i] != null; i++) {
   insideQuote = i * 0.5 != Math.floor(i * 0.5);
   if(insideQuote) {
     quoteBlocks[i] = quoteBlocks[i].replace(/ /g, "*SPACE*");
   }
 }
 line = sL.toL(quoteBlocks).getConcatenated("\"");
 return line;
}


////TextNet
let decodeTextNet=function(code) {
 if(code == null) return;
 if(code === "") return new Net();
  console.log('\n\n*************////////// decodeTextNet //////////*************');


 //code = "\n"+code;
  var i, j;
 let line, simpleLine;
 let id, id2;
 let name;
 let index, minIndex;
 let lines;
 let node, otherNode;
 let relation;
 let sep;
 let colorLinesRelations = []; //for relations
 let colorLinesGroups = [];
 let colorSegments = [];
 let regex;
 let iEnd;
 let propertyName;
 let propertyValue;
 let network = new Net();
 let paragraphs = new sL();
 let content;
  network.nodesPropertiesNames = new sL();
 network.relationsPropertiesNames = new sL();
  lines = code.split(/\n/g);
 lines.forEach(function(line, i) {
   lines[i] = line.trim();
 });
  code = lines.join('\n');
   var nLineParagraph = 0;
 while(code.charAt(0) == '\n') {
   code = code.substr(1);
   nLineParagraph++;
 }
   var left = code;
  index = left.search(/\n\n./g);
  while(index != -1) {
   paragraphs.push(left.substr(0, index));
   left = left.substr(index + 2);
   index = left.search(/\n\n./g);
 }
  paragraphs.push(left);
  var firstLine;
   paragraphs.forEach(function(paragraph) {
    if(paragraph.indexOf('\n') == -1) {
     line = paragraph;
     lines = null;
   } else {
     lines = paragraph.split(/\n/g);
     line = lines[0];
   }
   if(lines) lines = lines.filter(l=>l.trim()!="")

    firstLine = line;
    //console.log('firstLine: ['+firstLine+']');
    if(line == '\n' || line === '' || line == ' ' || line == '  ') { //use regex here
    } else if(line.indexOf('//') === 0) {
      if(colorSegments[nLineParagraph] == null) colorSegments[nLineParagraph] = [];
      colorSegments[nLineParagraph].push({
       type: 'comment',
       iStart: 0,
       iEnd: line.length
     });
    } else if(line == "relations colors:" || line == "groups colors:" || line == "categories colors:") {
      if(lines) {
       lines.slice(1).forEach(function(line, i) {
          index = line.indexOf(':');
         if(firstLine == "relations colors:" && index != -1 && colorStringToRGB(line.split(':')[1]) != null) {
           //console.log('  more colors!');
            colorLinesRelations.push(line);
            if(colorSegments[nLineParagraph + i] == null) colorSegments[nLineParagraph + i] = [];
            colorSegments[nLineParagraph + i].push({
             type: 'relation_color',
             iStart: 0,
             iEnd: line.length
           });
          }
          if((firstLine == "groups colors:" || firstLine == "categories colors:") && index != -1 && colorStringToRGB(line.split(':')[1]) != null) {
           //console.log(line)
           //console.log('  color to group!');
            colorLinesGroups.push(line);
            if(colorSegments[nLineParagraph + i] == null) colorSegments[nLineParagraph + i] = [];
            colorSegments[nLineParagraph + i].push({
             type: 'relation_color',
             iStart: 0,
             iEnd: line.length
           });
          }
       });
     }
    } else { //node
      minIndex = 99999999;
      index = line.indexOf(NetworkEncodings_nodeNameSeparators[0]);
      if(index != -1) {
       minIndex = index;
       sep = NetworkEncodings_nodeNameSeparators[0];
     }
      j = 1;
      while(j < NetworkEncodings_nodeNameSeparators.length) {
       index = line.indexOf(NetworkEncodings_nodeNameSeparators[j]);
       if(index != -1) {
         minIndex = Math.min(index, minIndex);
         sep = NetworkEncodings_nodeNameSeparators[j];
       }
       j++;
     }
       index = minIndex == 99999999 ? -1 : minIndex;
      name = index == -1 ? line : line.substr(0, index);
     name = name.trim();
      if(name !== "" && name != "---") {
       id = _simplifyForTextNet(name);
        node = network.nodes.get(id);
        iEnd = index == -1 ? line.length : index;
        if(node == null) {
          node = new Nd(id, name);
         node._nLine = nLineParagraph;
         network.addNode(node);
         node.content = index != -1 ? line.substr(index + sep.length).trim() : "";
          node._lines = lines ? lines.slice(1) : new sL();
          node.position = network.nodes.length - 1;
          node.impact = 1
          if(colorSegments[nLineParagraph] == null) colorSegments[nLineParagraph] = [];
          colorSegments[nLineParagraph].push({
           type: 'node_name',
           iStart: 0,
           iEnd: iEnd
         });
        } else {
         if(lines != null) node._lines = node._lines.concat(lines.slice(1));
          node.content += index != -1 ? (" | " + line.substr(index + sep.length).trim()) : "";
          if(colorSegments[nLineParagraph] == null) colorSegments[nLineParagraph] = [];
          colorSegments[nLineParagraph].push({
           type: 'node_name_repeated',
           iStart: 0,
           iEnd: iEnd
         });
       }
     } else {
      }
   }
    node.content = node._lines.join(" / ");
    nLineParagraph += (lines ? lines.length : 1) + 1;
 });
   //find equalities (synonyms)
  var foundEquivalences = true;
  while(foundEquivalences) {
   foundEquivalences = false;
    loop: for(i = 0; network.nodes[i] != null; i++) {
     node = network.nodes[i];
      loop2: for(j = 0; node._lines[j] != null; j++) {
       line = node._lines[j];
        if(line.indexOf('=') === 0) {
          id2 = _simplifyForTextNet(line.substr(1));
         otherNode = network.nodes.get(id2);
          if(otherNode && node != otherNode) {
            foundEquivalences = true;
            node._lines = otherNode._lines.concat(otherNode._lines);
            network.nodes.removeNode(otherNode);
           network.nodes.ids[otherNode.id] = node;
            break loop;
         } else {
           network.nodes.ids[id2] = otherNode;
         }
          if(!node._otherIds) node._otherIds = [];
         node._otherIds.push(id2);
       }
     }
   }
 }
    let categoryValues = new sL()
   //build relations and nodes properties
  network.nodes.forEach(function(node) {
    nLineParagraph = node._nLine;
    //console.log('node.nLineWeight', node.nLineWeight);
    node._lines.forEach(function(line, i) {
      if(line.indexOf('=') != -1) {
      } else if(line.indexOf(':') > 0) {
        simpleLine = line.trim();
        propertyName = removeAccentsAndDiacritics(simpleLine.split(':')[0]).replace(/\s/g, "_");
        propertyValue = line.split(':')[1].trim();
       if(propertyValue == String(Number(propertyValue))) propertyValue = Number(propertyValue);
        if(propertyValue != null) {
            if(propertyName=="x") propertyName="_x"
            if(propertyName=="y") propertyName="_y"
            node[propertyName] = propertyValue;
            if(propertyName=="category") categoryValues.pushIfUnique(String(propertyValue))
            if(!network.nodesPropertiesNames.includes(propertyName)) network.nodesPropertiesNames.push(propertyName);
       }
      } else {
       simpleLine = line;
        network.nodes.forEach(function(otherNode) {
         regex = _regexWordForTextNet(otherNode.id);
         index = simpleLine.search(regex);
          if(index == -1 && otherNode._otherIds) {
           for(j = 0; otherNode._otherIds[j] != null; j++) {
             regex = _regexWordForTextNet(otherNode._otherIds[j]);
             index = simpleLine.search(regex);
             if(index != -1) break;
           }
         }
          if(index != -1) {

           iEnd = index + simpleLine.substr(index).match(regex)[0].length;
            relation = network.relations.getFirstRelationBetweenNodes(node, otherNode, true);
            //console.log("1++", simpleLine, otherNode.name, relation)
             if(relation != null) {
              content = relation.node0.name + " " + line;
              relation.content += " | " + content;
              if(colorSegments[nLineParagraph + i + 1] == null) colorSegments[nLineParagraph + i + 1] = [];
              colorSegments[nLineParagraph + i + 1].push({
               type: 'node_name_in_repeated_relation',
               iStart: index,
               iEnd: iEnd
             });
            } else {
             relation = network.relations.getFirstRelationBetweenNodes(otherNode, node, true);
                //console.log("  2++", simpleLine, otherNode.name, relation)
              //if(relation == null || relation.content != content) {
                var relationName = line;
                regex = _regexWordForTextNet(node.id);
                index = relationName.search(regex);
                if(index != -1) {
                     relationName = relationName.substr(index);
                     relationName = relationName.replace(regex, "").trim();
                   }
                //console.log(node.id, "*", line, "*", index, "*", line.substr(index));
                //line = line.replace(regex, "").trim();
                regex = _regexWordForTextNet(otherNode.id);
               index = relationName.search(regex);
               relationName = "… " + relationName.substr(0, index).trim() + " …";
                id = node.id+"_"+otherNode.id// line;
               relation = new Rel(id, relationName, node, otherNode);
                content = relation.node0.name + " " + line;
                if(line.indexOf("- ")==0){
                    relation.color = "red"
                    relation.influence = -1
                } else if(line.indexOf("+ ")==0){
                    relation.color = "blue"
                    relation.influence = 1
                } else {
                    relation.influence = 0
                }
                relation.content = content; //.substr(0,index);
               network.addRelation(relation);
                if(colorSegments[nLineParagraph + i + 1] == null) colorSegments[nLineParagraph + i + 1] = [];
                colorSegments[nLineParagraph + i + 1].push({
                 type: 'node_name_in_relation',
                 iStart: index,
                 iEnd: iEnd
               });
              //}
           }
         }
       });
     }
   });
    node.positionWeight = Math.pow(network.nodes.length - node.position - 1 / network.nodes.length, 2);
   node.combinedWeight = node.positionWeight + node.nodes.length * 0.1;
  });

    if(categoryValues.length>0){
        console.log("categories:", categoryValues)
        let colors = createDefaultCategoricalColorList(categoryValues.length)
        let colorDic = {}
        categoryValues.forEach((category,i)=>colorDic[category]=interpolateColors( colors[i], "white", 0.8))
        network.nodes.forEach(n=>n.color = colorDic[n.category])
    }

   //colors in relations and groups
  colorLinesRelations.forEach(function(line) {
   index = line.indexOf(':');
   var texts = line.substr(0, index).split(',');
   texts.forEach(function(text) {
     var color = line.substr(index + 1);
     network.relations.forEach(function(relation) {
       if(relation.name.indexOf(text) != -1) relation.color = color;
     });
   });
 });
  colorLinesGroups.forEach(function(line) {
   index = line.indexOf(':');
   var texts = line.substr(0, index).split(',');
   texts.forEach(function(text) {
     var color = line.substr(index + 1);
     network.nodes.forEach(function(node) {
       if(node.group == text) node.color = color;
       if(node.category == text) node.color = color;
     });
   });
 });
  network.colorSegments = colorSegments;
  return network;
}
let _simplifyForTextNet=function(name) {
 name = name.toLowerCase();
 if(name.substr(name.length - 2) == 'es') {
   name = name.substr(0, name.length - 1);
 } else if(name.charAt(name.length - 1) == 's') name = name.substr(0, name.length - 1);
 return name.trim();
}
let _regexWordForTextNet=function(word, global) {
 global = global == null ? true : global;
 try {
   return new RegExp("(\\b)(" + word + "|" + word + "s|" + word + "es)(\\b)", global ? "gi" : "i");
 } catch(err) {
   return null;
 }
}
let encodeTextNet=function(network, nodeContentSeparator, nodesPropertyNames, relationsPropertyNames) {
 if(network == null) return;
  var code = "";
 let regex, lineRelation;
  var codedRelationsContents;
  nodeContentSeparator = nodeContentSeparator || ', ';
 nodesPropertyNames = nodesPropertyNames || [];
 relationsPropertyNames = relationsPropertyNames || [];
  network.nodes.forEach(function(node) {
   code += node.name;
   if(node.content && node.content !== "") code += nodeContentSeparator + node.content;
   code += "\n";
    nodesPropertyNames.forEach(function(propName) {
     if(node[propName] != null) code += propName + ":" + String(node[propName]) + "\n";
   });
    codedRelationsContents = new sL();
    node.toRelations.forEach(function(relation) {
      var content = ((relation.content == null ||  relation.content === "") && relation.description) ? relation.description : relation.content;
      if(content && content !== "") {
       regex = _regexWordForTextNet(relation.node1.name);
       lineRelation = content + ((regex != null && content.search(regex) == -1) ? (" " + relation.node1.name) : "");
     } else {
       lineRelation = "connected with " + relation.node1.name;
     }
      if(codedRelationsContents.indexOf(lineRelation) == -1) {
       code += lineRelation;
       code += "\n";
       codedRelationsContents.push(lineRelation);
     }
    });
    code += "\n";
  });
  return code;
}
////


let modelInfluence=function(network, node, impact=1, spread_strength=1){
    if(node==null) return
    if(typeof(node)=="string") node = network.get(node)

    network.nodes.forEach(n=>n.impact=1)
    network.relations.forEach(r=>r._impact_hits=0)
    node.impact = impact

    let _spread = function(node, level){
        if(level>15) return

        //let ratio = spread_strength/(level**2+1)

        let impactFactor
        let impactAddition

        //+
        //0.5 -> x1.05
        //1 -> x1.2
        //2 -> x2

        //-
        //0.5 -> x0.95
        //1 -> x0.8
        //2 -> x0.5
        let prevImpact
        //node.toRelations.forEach(relation=>{

        for(var i=0; i<10000; i++){
            let relation = network.relations.getRandomElement()

            if(relation.influence==0) continue

            let from = relation.node0
            let affected = relation.node1

            //if(from.id=="gras" && affected.id=="otter") console.log("gras otter")

            impactAddition = spread_strength*((from.impact-1)**2)*(1/(1+0.9*relation._impact_hits))
            impactFactor = (1 + impactAddition)//*Math.pow(from.impact, 0.02)
            prevImpact = affected.impact

            relation._impact_hits++

            if(relation.influence>0){
                if(from.impact>1){
                    affected.impact*=(impactFactor**2)
                } else {
                    affected.impact/=impactFactor
                }
                if(from.id=="gras" && affected.id=="otter") console.log("1 grass otter | from.impact, impactFactor, prevImpact ---> affected.impact\n", from.impact, impactFactor, prevImpact, "-->", affected.impact)
            } else if(relation.influence<0){
                if(from.impact>1){
                    affected.impact/=impactFactor
                } else {
                    affected.impact*=(impactFactor**2)
                }
                if(affected.id=="gras" && from.id=="deer") console.log("-1 deer grass | from.impact, impactFactor, prevImpact ---> affected.impact\n", from.impact, impactFactor, prevImpact, "-->", affected.impact)
            }

            affected.impact = 0*affected.impact + 1*( 2/(1+Math.pow(Math.E, -2*(affected.impact-1))) )
            
        }
            
        //})
        //node.to.forEach(node_to=>_spread(node_to, level+1))
    }

    _spread(node, 0)

    network.nodes.forEach(n=>console.log(n.name, n.impact))
}


let prepareTable = function(names, types){
    let t = new T()
    names.forEach((name, i)=>{
        let l
        if(types && types[i]){
            l = new types[i]()
        } else {
            l = new L()
        }
        l.name = name
        t.push(l)
    })
    return t
}

let NetworkToTable=function(network, useIds, includeLabelsList, countMode){
 if(network==null) return;
  useIds = useIds==null?true:useIds;
 countMode = countMode==null?0:countMode;
  var table = includeLabelsList?new T():new nT();
 let labels = useIds?network.nodes.getIds():network.nodes.getNames();
 labels.name = "node names";
 if(includeLabelsList) table[0] = labels;
  var list;
 let nNodes = network.nodes.length;
 let nRelations = network.relations.length;
 let i;
 let relation;
 let indexesDictionary = {};
  var indexOffset = includeLabelsList?1:0;
  for(i=0; i<nNodes; i++){
   list = createListWithSameElement(nNodes, 0);
   list.name = labels[i];
   table.push(list);
   indexesDictionary[network.nodes[i].id] = i;
 }
  for(i=0; i<nRelations; i++){
   relation = network.relations[i];
   if(countMode===0){
     table[indexesDictionary[relation.node0.id]+indexOffset][indexesDictionary[relation.node1.id]]++;
   } else {
     table[indexesDictionary[relation.node0.id]+indexOffset][indexesDictionary[relation.node1.id]]+=relation.weight;
   }
 }
  return table;
}
let TableToNetworkPairs = function(table, nl, threshold=0, allowMultipleRelations=false, minRelationsInNode=0, sl, tagsSeparator = ",") {
 if(table == null || table[0] == null || table[1] == null) return;
  var nElements;
 let node0;
 let node1;
 let name0;
 let name1;
 let relation;
 let i, j;
 let list;
 let network = new Net();
  //as matrix
  if(table.type == "nT" && table.length > 2  && table.length==table[0].length){
    nElements = table.length;
    for(i=0; i<nElements; i++){
        name0 = sl==null?( (table[i].name==null || table[i].name=="")?"node_"+i:table[i].name ):sl[i];
        if(!name0) continue 
        node0 = new Nd(name0, name0);
        network.addNode(node0);
    }
    for(i=0; i<nElements; i++){
     list = table[i];
     node0 = network.nodes[i];
     for(j=0; j<nElements; j++){
       node1 = network.nodes[j];
       if(list[j]>threshold){
         relation = new Rel(i+"_"+j,i+"_"+j,node0, node1, list[j]);
         network.addRelation(relation);
       }
     }
   }
   return network;
 }

 let indexes = createSortedNumberList(table[0])
 indexes.name = "indexes"

//in case either of two columns is a tags list
if(table[0].join("").includes(tagsSeparator)){
    let tableWithIndexes = toT(table)//table.addElements(indexes)
    table.push(indexes)
   var disaggregatedTable = disAggregateTable(tableWithIndexes, tableWithIndexes.getWithoutElementAtIndex(0).getNames(), 0);
   disaggregatedTable.setNames(tableWithIndexes.getNames());
   indexes = disaggregatedTable.get("indexes")
   disaggregatedTable = disaggregatedTable.getWithoutElement(indexes)
   disaggregatedTable = disaggregatedTable.getColumns(disaggregatedTable.length==3?[2,0, 1]:[1, 0]);
   table = disaggregatedTable;
 }
  if(table[1].join("").includes(tagsSeparator)){
    let tableWithIndexes = toT(table)//table.addElements(indexes)
    tableWithIndexes.push(indexes)
   disaggregatedTable = disAggregateTable(tableWithIndexes, tableWithIndexes.getWithoutElementAtIndex(1).getNames(), 1);
   disaggregatedTable.setNames(table.getNames());
   indexes = disaggregatedTable.get("indexes")
   disaggregatedTable = disaggregatedTable.getWithoutElement(indexes)
   disaggregatedTable = disaggregatedTable.getColumns(disaggregatedTable.length==3?[2,0, 1]:[1, 0]);
   table = disaggregatedTable;
 }

  //trace("••••••• createNetworkFromPairsTable", table);
 if(table.length < 2) return null;
 
 
  if(nl == null) {
   nElements = Math.min(table[0].length, table[1].length);
 } else {
   nElements = Math.min(table[0].length, table[1].length, nl.length);
 }
  //trace("nElements", nElements);
  if(nl == null && table.length > 2 && _typeOf(table[2]) == "nL" && table[2].length >= nElements) nl = table[2];
   if(_typeOf(table[0]) == ndL && _typeOf(table[1]) == NodeList) {
   //....    different methodology here
    }
  var provisionalRelations = new ndL();
 let id;


 for(i = 0; i < nElements; i++) {
   name0 = ("" + table[0][i]).trim()
   name1 = ("" + table[1][i]).trim()
   if(!name0 || !name1 || name0=="undefined" || name1=="undefined") continue
   //trace("______________ i, name0, name1:", i, name0, name1);
   node0 = network.nodes.get(name0);
   if(node0 == null) {
     node0 = new Nd(name0, name0);
     network.addNode(node0);
     node0.color = 'rgb(255,140,80)';
     node0.kind = table[0].name;
     node0.indexes = new nL()
   } else {
     node0.weight++;
   }
   node0.indexes.push(indexes[i])
   node1 = network.nodes.get(name1);
   if(node1 == null) {
     node1 = new Nd(name1, name1);
     network.addNode(node1);
     node1.color = 'rgb(60,180,255)';
     node1.kind = table[1].name;
     node1.indexes = new nL()
   } else {
     node1.weight++;
     if(node1.color=='rgb(200,100,0)') node1.color = 'rgb(100,100,100)';
   }
   node1.indexes.push(indexes[i])

    if(nl == null) {
      if(allowMultipleRelations){
       id = name0 + "_" + name1 + "_" + i;
       relation = new Rel(id, name0 + "_" + name1, node0, node1, 1);
       network.addRelation(relation);
     } else {
       id = name0 + "_" + name1 + "_";
       relation = provisionalRelations.get(id);
       if(relation == null || allowMultipleRelations) {
         relation = new Rel(id, id, node0, node1, 1);
         //network.addRelation(relation);
         provisionalRelations.addNode(relation);
       } else {
         relation.weight++;
       }
     }
   } else if(nl[i] > threshold) {
     relation = new Rel(name0 + "_" + name1, name0 + "_" + name1, node0, node1, nl[i]);
     network.addRelation(relation);
   }
    if(sl) relation.content = sl[i];
 }

 let maxWeight = 0
 network.nodes.forEach(n=>{
    n.indexes=n.indexes.getWithoutRepetitions()
    maxWeight = Math.max(maxWeight, n.weight)
 })
 

 

  if(nl == null){
   if(allowMultipleRelations){
     for(i=0; i<provisionalRelations.length; i++){
       network.addRelation(provisionalRelations[i]);
     }
   } else {
     for(i=0; i<provisionalRelations.length; i++){
       if(provisionalRelations[i].weight > threshold) network.addRelation(provisionalRelations[i]);
     }
   }
 }
  if(minRelationsInNode=0) {
   for(i = 0; network.nodes[i] != null; i++) {
     if(network.nodes[i].relations.length < minRelationsInNode) {
       network.removeNode(network.nodes[i]);
       i--;
     }
   }
 }

 network.nodes.forEach(n=>n.weight/=maxWeight)

 maxWeight = 0
 network.relations.forEach(r=>{
    maxWeight = Math.max(maxWeight, r.weight)
 })
 network.relations.forEach(r=>r.weight/=maxWeight)

  return network;
}

let matrixToNetwork=function(matrix){
 let net = new Net();
 let n1,n2,rel,id;
  for(var i=1; i<matrix.length; i++){
     n1 = net.get(matrix[i].name);
     if(n1==null){
       n1 = new Nd(matrix[i].name, matrix[i].name);
       net.addNode(n1);
     }
     for(var j=0; j<matrix[0].length; j++){
         if(matrix[i][j]>0){
             id = String(matrix[0][j]);
             n2 = net.get(id);
             if(n2==null){
               n2 = new Nd(id, id);
               net.addNode(n2);
             }
              id = (i-1)+"_"+j;
             rel = new Rel(id, n1.name+"_"+n2.name, n1, n2, matrix[i][j]);
             net.addRelation(rel);
         }
     }
 }
 return net;
}
let CSVToTable=function(csvString, firstRowIsHeader=true, separator, valueForNulls, listsToStringList, name) {
 if(csvString==null) return null;
 
 
  //valueForNulls = valueForNulls == null ? "" : valueForNulls;
 listsToStringList = listsToStringList==null?false:listsToStringList;
 
 if(csvString.indexOf("\n")==-1 && csvString.indexOf(",")==-1 && csvString.indexOf(";")==-1 ){
    if(csvString.indexOf("http:/")===0 || csvString.indexOf("https:/")===0 || csvString.indexOf("fttp:/")===0 || csvString.indexOf("fttps:/")===0){
     throw new Error("The provided string seems to be a url, not a csv<br><br>Use <b>CSVLoader</b> to upload and decode csv files");
   } else {
     throw new Error("the provided string doesn't seem to be a csv, it contains no enters or chomas");
   }
  }
  var i, j;
 //firstRowIsHeader = firstRowIsHeader == null ? false : firstRowIsHeader;
  var automaticFirstRowAsHEaderDetection = firstRowIsHeader==2;
  if(automaticFirstRowAsHEaderDetection){
   firstRowIsHeader = true;
 }
  if(csvString == null) return null;
 if(csvString === "") return new T();
  csvString = csvString.replace(/\$/g, "");
  //var blocks = csvString.split("\"");
 
  //var blocks = csvString.split(/'|"/);
  var blocks = csvString.split("\"");
   for(i = 1; blocks[i] != null; i += 2) {
   blocks[i] = blocks[i].replace(/\n|\r/g, "*ENTER*");
 }
 csvString = blocks.join("\""); //TODO: create a general method for replacements inside "", apply it to chomas
  var lines = csvString.split(/\n|\r/g);
   if(lines.length==1 && firstRowIsHeader){
   throw new Error("CSV contains only one line and firstRowIsHeader is true, a T can't be build");
 }
  if(separator == 'auto'){
   // try and automatically detect separator using the first 11 rows
   var aAutoSepChars = [',',';',':','|','\t','+','-','_'];
   var shortCsvString = lines.slice(0,11).join('\n');
   var tTemp,score,scoreBest=0,sepBest=',';
   for(i=0;i<aAutoSepChars.length;i++){
     try{
       tTemp = CSVToTable(shortCsvString,firstRowIsHeader,aAutoSepChars[i]);
     }
     catch(e){
       tTemp=null;
     }
     if(tTemp == null || tTemp.length == 0) continue;
     buildInformationObjectForTable(tTemp);
     score = tTemp.length;
     if(firstRowIsHeader){
       var sLNames = tTemp.getNames();
       score -= sLNames.getElementNumberOfOccurrences('');
     }
     // count nulls in table
     var numNulls = tTemp.reduce(function(count, col) {
       return count + col.getElementNumberOfOccurrences(null);
       }, 0);
     // count cells in table
     var numCells = tTemp.reduce(function(count, col) {
       return count + col.length;
       }, 0);
     score -= numCells == 0 ? 0 : numNulls/numCells;
     if(!tTemp.infoObject.allListsSameLength)
       score--;
     if(score > scoreBest){
       scoreBest = score;
       sepBest = aAutoSepChars[i];
     }
   }
   separator = sepBest;
 }
  separator = (separator==null || separator==="")?",":separator;
 if(separator == '\\t' || separator == 'tab')
   separator = '\t';
  var table = new T();
 let comaCharacter = separator;
  if(csvString == null || csvString === "" || csvString == " " || lines.length === 0) return null;
  var startIndex = 0;
 let headerContent;
 if(firstRowIsHeader) {
   startIndex = 1;
    //currently applied only in automatic header detection case, but could be applied always
   if(automaticFirstRowAsHEaderDetection){
     headerContent = replaceChomasInTextLine(lines[0], separator).split(",");
     for(i=0;i<headerContent.length;i++){
       headerContent[i] = headerContent[i].replace("*CHOMA*", separator);
     }
   } else {
     headerContent = lines[0].split(comaCharacter);
   }
  }
  var element;
 let cellContent;
 let numberCandidate;
 let cellContents;
 //var actualIndex;
   var k;
 i = 0;
  for(k = startIndex; k < lines.length; k++) {
    if(lines[k].length < 2){
     continue;
   }
    cellContents = replaceChomasInTextLine(lines[k], separator).split(comaCharacter); //TODO: will be obsolete (see previous TODO)
    for(j = 0; j < cellContents.length; j++) {
     table[j] = table[j] == null ? new L() : table[j];
      if(firstRowIsHeader && i === 0) {
       table[j].name = ( headerContent[j] == null ? "" : _removeQuotes(headerContent[j]) ).trim();
     }
     
     
      cellContent = cellContents[j].replace(/\*CHOMA\*/g, separator).replace(/\*ENTER\*/g, "\n");
      cellContent = cellContent === '' ? valueForNulls : cellContent;
      if(cellContent!=null) {
       cellContent = String(cellContent);
       numberCandidate = Number(cellContent.replace(',', '.'));
       element = (numberCandidate || (numberCandidate === 0 && cellContent !== '')) ? numberCandidate : cellContent;
       if(typeof element == 'string') element = _removeQuotes(element);
     } else {
       element = null;
     }
     
     table[j][i] = element
   }
    i++;
 }
  for(i = 0; table[i] != null; i++) {
   table[i] = table[i].downcast();
   if(listsToStringList && table[i].type=="L") table[i] = toStringList(table[i]);
 }
  table = table.downcast();
 table.name = name;
  if(automaticFirstRowAsHEaderDetection){
   var allNumberListsHaveNumberNames = true;
   var nNumerical = 0;
   for(var i=0; i<table.length; i++){
     if(table[i].type=="nL"){
       nNumerical++;
       if(String(Number(table[i].name))!=Number(table[i].name)){
         allNumberListsHaveNumberNames = false;
         break;
       }
     }
   }
    if(!allNumberListsHaveNumberNames) return table;
    //2. check in how many cases names are part of list values
   var nCategoricalVarsWithNamesAsValues = 0;
   var nCategorical = 0;
   for(i=0; i<table.length; i++){
     if(table[i].type!="nL"){
       nCategorical++;
       if(table[i].includes(table[i].name)){
         nCategoricalVarsWithNamesAsValues++;
       } else {
         var noRepetitions = table[i].getWithoutRepetitions().length==table[i].length;
         if(noRepetitions){
           nCategoricalVarsWithNamesAsValues++;
         }
       }
     }
   }
    if(nCategorical>0 && ( (nCategoricalVarsWithNamesAsValues+nNumerical)/table.length)>0.3){
     for(i=0; i<table.length; i++){
       table[i].unshift(table[i].name);
       table[i].name = "col "+i;
     }
   }
 }
   return table;
}
let _removeQuotes=function(string) {
 if(string.length === 0) return string;
 if((string.charAt(0) == "\"" || string.charAt(0) == "'") && (string.charAt(string.length - 1) == "\"" || string.charAt(string.length - 1) == "'")) string = string.substr(1, string.length - 2);
 return string;
}

function jsonToTable(jsonArray, separator = ","){
    return CSVToTable(jsonToCSV(jsonArray, separator))
}
function jsonToCSV(jsonArray, separator = ",") {
  if (!Array.isArray(jsonArray) || jsonArray.length === 0) {
    return '';
  }

  // Extract the headers (keys)
  const headers = Object.keys(jsonArray[0]);

  // Helper function to convert an object to a CSV row
  function toCSVRow(obj) {
    return headers.map(header => {
      let value = obj[header];

      if (typeof value === 'object' && !Array.isArray(value)) {
        value = JSON.stringify(value);
      } else if (Array.isArray(value)) {
        value = value.join(';');
      }

      // Escape double quotes by doubling them
      if (typeof value === 'string') {
        value = `"${value.replace(/"/g, '""')}"`;
      }

      return value;
    }).join(separator);
  }

  // Convert the array of JSON objects to CSV
  const csvRows = jsonArray.map(toCSVRow);

  // Add the header row
  csvRows.unshift(headers.join(separator));

  // Combine all rows into a single string with newline characters
  return csvRows.join('\n');
}

let TableToCSV=function(table, separator=",", namesAsHeaders=true, replaceCommasBy,addTypesAsFirstLine) {
 if(table==null) return;

 let i;
 let j;
 let list;
 let type;
 let lines = createListWithSameElement(table[0].length, "");
 let addSeparator;
 for(i = 0; table[i] != null; i++) {
   list = table[i];
   type = list.type;
   addSeparator = i != table.length - 1;
   for(j = 0; j < list.length; j++) {
     if(list[j] !== null){
       switch(type) {
         case 'nL':
           lines[j] += list[j];
           break;
         default:
           if(replaceCommasBy!=null){
             lines[j] += String(list[j]).replace(/,/g,replaceCommasBy);
           } else {
             lines[j] += "\"" + list[j] + "\"";
           }
           break;
       }
     }
     if(addSeparator) lines[j] += separator;
   }
 }
  var headers = '';
 if(namesAsHeaders) {
   for(i = 0; table[i] != null; i++) {
     list = table[i];
     if(replaceCommasBy!=null){
       headers += list.name.replace(/,/g,replaceCommasBy);
     } else {
       headers += "\"" + list.name + "\"";
     }
     if(i != table.length - 1) headers += separator;
   }
   headers += '\n';
   
 }
 let csv = (addTypesAsFirstLine?table.getTypes().join(separator)+"\n":"") + headers + lines.getConcatenated("\n")
  return csv
}

let TableToJSON = function(table){
    if(table==null) return
    let names = table.getNames()

    const jsonArray = []

    table[0].forEach((element, nRow)=>{
        const obj = {}
        names.forEach((name,nCol)=>{
            obj[name] = table[nCol][nRow]
        })
        jsonArray.push(obj)
    })

    return jsonArray
}

// let TableToJSONString=function(table,bKeepObject) {
//  if(table == null) return '';
//  let array = table.slice(0);
//  let names = table.getNames();
//  let types = table.getTypes();
//  let aNulls = [];
//  // preserve whether it is undefined, true, or false
//  for(var i=0; i < table.length; i++){
//    if(table[i].containsNulls === undefined)
//      aNulls.push(null);
//    else
//      aNulls.push(table[i].containsNulls);
//  }
//  let obj = {
//    data:array,
//    name:table.name,
//    type:table.type,
//    handle:table.handle,
//    names:names,
//    types:types,
//    nulls:aNulls
// };
//  if(table.containsNulls !== undefined)
//    obj.containsNulls = table.containsNulls;
//  if(bKeepObject) return obj;
//  try {
//    return JSON.stringify(obj);
//  } catch (e) {
//    return JSON.stringify({"error":"cannot convert."});
//  }
// }


let JSONStringToTable=function(json) {
 if(json == null || json.length == 0) return new T();
 let obj,i;
 if(typeof json == 'object')
   obj = json;
 else
   try {
     obj = JSON.parse(json);
   } catch(err) {
     return null;
   }
 let table;
 if(obj.type == 'nT')
   table = nT.toL(obj.data);
 else
   table = T.toL(obj.data);
 table.name = obj.name == null ? obj.name : String(obj.name);
 table.type = obj.type;
 if(obj.handle != null)
   table.handle = obj.handle;
 if(obj.containsNulls != null)
   table.containsNulls = obj.containsNulls;
 if(obj.types && obj.types.length > 0)
   for(i=0; i < obj.types.length; i++){
     if(table[i]){
       switch(obj.types[i]){
         case 'sL':
           table[i] = sL.toL(table[i],false);
           break;
         case 'nL':
           table[i] = nL.toL(table[i],false);
           break;
         case 'dL':
           table[i] = dL.toL(table[i],true);
           break;
         case 'iL':
           table[i] = iL.toL(table[i],false);
           break;
         case 'L':
         default:
       }
     }
   }
 else{
   // No types defined. Get improved versions of lists
   for(i=0;i<table.length;i++){
     table[i] = table[i].downcast();
     // sometimes numbers get encoded as strings
     if(table[i].type == 'sL'){
       var bAllNumbers=true;
       for(var j=0;bAllNumbers && j<table[i].length;j++){
         bAllNumbers = !isNaN(table[i][j]) && table[i][j].trim() !== '';
       }
       if(bAllNumbers)
         table[i] = toNumberList(table[i]);
     }
   }
 }
 if(obj.names)
   for(i=0; i < obj.names.length; i++){
     if(table[i]) table[i].name = String(obj.names[i]);
   }
 if(obj.nulls)
   for(i=0; i < obj.nulls.length; i++){
     if(table[i] && obj.nulls[i] != null)
       table[i].containsNulls = obj.nulls[i];
   }
 return table;
}
let NumberListToPolygon=function(numberlist) {
 if(numberlist.length === 0) return null;
 let polygon = new Pol();
 for(var i = 0; numberlist[i + 1] != null; i += 2) {
   polygon.push(new P(numberlist[i], numberlist[i + 1]));
 }
 return polygon;
}
let NumberListToStringList=function(numberlist) {
 let i;
 let sl = new sL();
 for(i = 0; numberlist[i] != null; i++) {
   sl[i] = String(numberlist[i]);
 }
 sl.name = numberlist.name;
 return sl;
}

// let ObjectToTable=function(object, fields) {
//  if(object==null) return null;
//  // Formats:
//  // 1: normal list of objects
//  // 2: Object with single property, containing normal list of obejcts
//  // 3: Object as CSV (each property represents a column)
//  let format;
//  let p;
//   // If it's an array, then it's format 1
//  if(Array.isArray(object)) {
//     console.log("is array")

//     if(typeof object[0]=="string" || typeof object[0]=="number"){
//         console.log("is simple array")
//         return new _.T(object.toL())
//     }

//    format = 1;
//    // If not field names supplied, get them from first element
//    if(!fields)
//    {
//      fields = [];
//      for(p in object[0]) {
//        if (object[0].hasOwnProperty(p)) {
//          fields.push(p);
//        }
//      }
//    }
   
//    // Else (not array), it's an object
//  } else {
//    // Check how many properties the object has
//    var properties = [];
//    for(p in object) {
//      properties.push(p);
//    }
//     // If it has only one, and it's an array, it's foramt 2, so assume it's just a capsule
//    // and extract the array as format 1
//    if(properties.length == 1 && Array.isArray(object[properties[0]]))
//    {
//      format = 1;
//      object = object[properties[0]];
//       // If not field names supplied, get them from first element
//      if(!fields)
//      {
//        fields = [];
//        for(p in object[0]) {
//          fields.push(p);
//        }
//      }
//    } else {
//      // Finally, if the object has many properties, we assume it's a csv encoded as JSON
//      // ( each property of the object represents a column of the CSV )
//      format = 3;
//       // If not fields supplied, use all properties
//      if(!fields)
//        fields = properties;
//    }
//  }
//    // Create table and columns
//  let column, i, f, j;
//  let result = new T();
//  for(i = 0; i < fields.length; i++) {
//    var fieldName = fields[i];
//    column = new L();
//    result[i] = column;
//    column.name = fieldName;
//  }
//   // Fill the table
//  if(format == 1)
//  {
//    for(i = 0; i < object.length; i++) {
//      var row = object[i];
//      for(f = 0; f < fields.length; f++) {
//        result[f].push(row[fields[f]]);
//      }
//    }
//  } else {
//    for(f = 0; f < fields.length; f++) {
//      column = object[fields[f]];
//      for(i = 0; i < column.length; i++) {
//        result[f].push(column[i]);
//      }
//    }
//  }
//  // sometimes the list elements are Objects with their own properties.
//  // In that case we flatten list of Objects into a new table of multiple lists and insert it
//  // into the original table in place of the single list of Objects.
//  for(i = 0; i < result.length; i++) {
//    var colType = result[i].getTypeOfElements();
//    if(colType == '' || colType == 'Object'){
//      // check to see if mixture of 'Object' and nulls
//      var bObjectMixture = true;
//      // also check that object type is consistent
//      var sObjectStructure = '';
//      for(j = 0; j < result[i].length && bObjectMixture; j++){
//        if(result[i][j] === null) continue;
//        if(_typeOf(result[i][j]) != 'Object'){
//          bObjectMixture = false;
//          break;
//        }
//        // we have an object, test for consistent structure
//        if(sObjectStructure == '')
//          sObjectStructure = getObjectStructure(result[i][j]);
//        else if(sObjectStructure != getObjectStructure(result[i][j]))
//          bObjectMixture = false; // objects will be left in column
//      }
//      if(bObjectMixture)
//        colType == 'Object';
//      else
//        colType = ''; // in case of inconsistent Object types
//    }
//    if(colType == 'Object'){
//      var subTable = ObjectToTable(result[i]);
//      var nameTop = result[i].name;
//      for(j=0; j < subTable.length; j++)
//        subTable[j].name = nameTop + '_' + subTable[j].name;
//      // remove list of objects and replace with columns from subtable
//      result = T.toL(result.slice(0, i).concat(subTable).concat(result.slice(i+1)));
//      i--; // so we check the newly inserted lists also. They may be object lists as well
//    }
//  }
//    // Improve columns
//  for(i = 0; i < result.length; i++) {
//    result[i] = result[i].downcast();
//  }
//   //if(result.getLengths.getMax()==1) return result.getRow(0);
//   // Improve table
//  result = result.downcast();
//   // Return best possible
//  return result;
// }


let ObjectToTable = function(json) {
    if(typeof json=="string") json = JSON.parse(json)

    let headers = new Set();

    // Function to flatten the nested structure
    function flatten(obj, parentKey = '', result = {}) {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                let newKey = parentKey ? `${parentKey}.${key}` : key;
                if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
                    flatten(obj[key], newKey, result);
                } else {
                    result[newKey] = obj[key];
                    headers.add(newKey);
                }
            }
        }
        return result;
    }

    // Flatten all objects and collect headers
    let table = new _.T();
    json.forEach(item => {
        if (Array.isArray(item.countries)) {
            item.countries.forEach(country => {
                let flattened = flatten({ ...item, countries: undefined, ...country });
                table.push(flattened);
            });
        } else {
            let flattened = flatten(item);
            table.push(flattened);
        }
    });

    // Convert headers set to an array and sort it (optional)
    headers = Array.from(headers).sort();

    // Create feature arrays with names
    let featureArrays = headers.map(header => {
        let featureArray = table.map(row => row[header] !== undefined ? row[header] : '').toL();
        featureArray.name = header;
        return featureArray;
    });

    return featureArrays.toT();
}


let ObjectToList=function(object, fields) {
 let result = ObjectToTable(object, fields);
  if(result.getLengths.getMax() == 1) return result.getRow(0);
}
let objectToString=function(object){
 try {
   return JSON.stringify(object);
 } catch (e) {
   return JSON.stringify({"error":"cannot convert."});
 }
}
let conversor=function(object, toType) {
 if(object==null || toType==null) return;
  var i;
 let type = _typeOf(object);
 let pairType = type + "_" + toType;
 let newList;
  switch(pairType) {
   case 'Array_List':
     return ArrayToList(object);
   case 'NumberTablePolygon':
     var polygon = new Pol();
     var length2 = object.length > 1;
     for(i = 0; object[0][i] != null; i++) {
       polygon[i] = new P(object[0][i], length2 ? object[1][i] : 0);
     }
     return polygon;
   case 'date_string':
     return dateToString(object);
   case 'string_date':
     return stringToDate(object);
   case 'date_number':
     return object.getTime();
   case 'number_date':
     return new Date(object);
   case 'List_StringList':
   case 'NumberList_StringList':
     return NumberListToStringList(object);
   case 'DateList_StringList':
     return DateListToStringList(object);
   case 'StringList_NumberList':
     return StringListToNumberList(object);
   case 'Object_string':
     return JSON.stringify(object, null, "\t");
   case 'string_Object':
     return JSON.parse(object);
   case 'string_ColorScale':
     return ColorScales[object]; //todo: not working, fix
   case 'string_Table':
     return CSVToTable(object);
   case 'StringList_DateList': //TODO: solve cases of lists
     newList = new dL();
     object.forEach(function(string) {
       newList.push(stringToDate(string));
     });
     newList.name = object.name;
     return newList;
   case 'DateList_NumberList': //TODO: solve cases of lists
     return object.getTimes();
   case 'Table_Network':
     return TableToNetworkPairs(object, null, 0, false);
  }
  switch(toType) {
   case 'string':
     return object.toString();
   case 'number':
     return Number(object);
 }
  // var short = TYPES_SHORT_NAMES_DICTIONARY[toType];
 // if(short!=null && short!=toType){
 //   return conversor(object, short);
 // }
  return null;
}
let ArrayToList=function(array){
 if (array == null) return;
 return L.toL(array).downcast();
}

let angleFromTwoPoints=function(point0, point1) {
 return Math.atan2(point1.y - point0.y, point1.x - point0.x);
}
let dot=function(point0, point1) {
 return point0.x * point1.x + point0.y * point1.y;
}
let twoPointsInterpolation=function(point0, point1, t) {
 return new P((1 - t) * point0.x + t * point1.x, (1 - t) * point0.y + t * point1.y);
}
let pointMultiplication=function(point0, point1) {
 return new P( point0.x*point1.x - point0.y*point1.y, point0.y*point1.x + point0.x*point1.y);
}
let normalizeTableToMax=function(numbertable, factor) {
 if(numbertable==null) return;
 factor = factor == null ? 1 : factor;
  var newTable = new nT();
 let i;
 let antimax = factor / numbertable.getMax();
 for(i = 0; numbertable[i] != null; i++) {
   newTable[i] = numbertable[i].factor(antimax);
 }
 newTable.name = numbertable.name;
 return newTable;
}

/**
 * modes: max, min-max, sum, z-score
 **/
let normalizeLists=function(numbertable, factor, mode) {
 if(numbertable==null || !numbertable.length || !numbertable[0].length) return;
 
 mode = mode == null ? 'min-max' : mode;
  var newTable = instanceSameType(numbertable);
  newTable.name = numbertable.name;
 let i;
 for(i = 0; numbertable[i] != null; i++) {
   if(numbertable[i].type != 'nL'){
     newTable[i] = numbertable[i].clone();
     continue;
   }

   switch(mode){
    case "max":
        newTable[i] = normalizeToMax(numbertable[i], factor);
        break
    case "sum":
        newTable[i] = normalizeToSum(numbertable[i], factor);
        break
    case "z-score":
        newTable[i] = normalizeByZScore(numbertable[i])//, factor);
        break
    case "min-max":
    default:
        newTable[i] = numbertable[i].getNormalized()
        break

   }
 }
 
 return newTable;
}
let normalizeListsToMax=function(numbertable, factorValue) {
 if(numbertable==null || !numbertable[0].length) return;
  var newTable = new nT();
 let numberlist;
 let l = numbertable.length;
 let i;
 for(i = 0; i<l; i++) {
   numberlist = numbertable[i];
   newTable[i] = normalizeToMax(numberlist, factorValue);
 }
 newTable.name = numbertable.name;
 return newTable;
}
let normalizeListsToSum=function(numbertable, factorValue) {
 if(numbertable==null || !numbertable[0].length) return;
  var newTable = new nT();
 let numberlist;
 let l = numbertable.length;
 let i;
 for(i = 0; i<l; i++) {
   numberlist = numbertable[i];
   newTable[i] = normalizeToSum(numberlist, factorValue);
 }
 newTable.name = numbertable.name;
 return newTable;
}
let normalizeListsToInterval=function(numbertable, interval, factorValue) {
 if(numbertable==null || !numbertable[0].length) return;
  var newTable = new nT();
 let numberlist;
 let l = numbertable.length;
 let i;
 for(i = 0; i<l; i++) {
   numberlist = numbertable[i];
   newTable[i] = normalizeToInterval(numberlist, interval, factorValue);
 }
 newTable.name = numbertable.name;
 return newTable;
}


let averageSmootherOnLists=function(numberTable, intensity, nIterations) {
 if(numberTable == null || !numberTable[0].length) return;
  intensity = intensity || 0.5;
 nIterations = nIterations || 1;
  var newNumberTable = new nT();
 newNumberTable.name = numberTable.name;
 numberTable.forEach(function(nL, i) {
   newNumberTable[i] = averageSmoother(numberTable[i], intensity, nIterations);
 });
 return newNumberTable;
}


//distance

let kMeans=function(numberTable, k, returnIndexesMode=0, N=1000, listSeeds, distanceFunction){
 if(numberTable == null || numberTable[0]==null || k == null || k <= 0 || numberTable.getLengths().getInterval().getAmplitude()!==0) return null;
  //returnIndexesMode = returnIndexesMode==null?0:returnIndexesMode;
 //N = (N==null || (N<=0))?1000:N;
  var clusters = new nT();// = returnIndexesMode?new nL():new nT();
 clusters.name = "k-means clusters";
 let i, j, l;
 let jK;
 let row;
 let d;
 let dMin;
 let n;
 let means = new nT();
 let length = numberTable.length;
 let nRows = numberTable[0].length;
 let rows = numberTable.transpose();
 let initdMin = 99999999;
 let nRowsMean;
 let meanRowsIndexes;
 let newMean;
 let clustersPrev = clusters.clone();
 let numTrials,maxTrials=100;
 distanceFunction = distanceFunction||distance

  if(k>=rows.length) return rows;
  var equalToPreviousMean = function(row, meansSoFar){
   var kSoFar = meansSoFar.length;
   for(i=0; i<kSoFar; i++){
     if( containSameElements(row, meansSoFar[i]) ) return true;
   }
   return false;
 };
   //initial means (Forgy method, picking random rows)
  for(j = 0; j < k; j++) {
   if(listSeeds && j < listSeeds.length){
     means[j] = rows[listSeeds[j]].clone();
     continue;
   }
   row = rows.getRandomElement();
   // It's possible if there are repeated rows in the input data to run forever looking for enough unique rows.
   // Add a check and reduce k if it looks like we are having trouble finding enough.
   numTrials = 0;
   while(equalToPreviousMean(row, means) && numTrials < maxTrials){
     row = rows.getRandomElement();
     numTrials++;
   }
   if(numTrials == maxTrials){
     k = j;
     break;
   }
    means[j] = row.clone();
 }
   for(n = 0; n < N; n++) {
       for(j = 0; j < k; j++) {
         clusters[j] = new nL()
         clusters[j].name = "-means cluster "+j
       }
    //for each row finds its closer mean
       for(i = 0; i<nRows; i++) {
         row = rows[i];
         dMin = initdMin;
         jK = 0;
          for(j = 0; j < k; j++) {
           d = distanceFunction(row, means[j])
           if(d < dMin) {
             dMin = d;
             jK = j;
           }
         }
         clusters[jK].push(i);
       }
   // Sometimes a cluster will end up empty (usually when you have repeated items) which breaks the algorithm.
   // Detect this and add an item from another cluster.
   for(i=0; i < clusters.length; i++){
     if(clusters[i].length == 0){
       for(j=0; j < clusters.length; j++){
         if(j == i || clusters[j].length < 2) continue;
         // move last item from cluster j to cluster i
         var iRemove = clusters[j].length-1;
         clusters[i].push(clusters[j][iRemove]);
         clusters[j] = clusters[j].getWithoutElementAtIndex(iRemove);
         break; // only once
       }
     }
   }
    // Check to see if clusters have changed since previous iteration.
   // If they are the same then we are done and do not need to do all the iterations
   if(clusters.isEqual(clustersPrev))
     break;
   clustersPrev = clusters.clone();
   for(j=0; j<k; j++){
     meanRowsIndexes = clusters[j];
     nRowsMean = meanRowsIndexes.length;
     means[j] = new nL();
     means[j].name = "k-means mean "+j;
      newMean = means[j];
      row = rows[meanRowsIndexes[0]]
     for(l=0; l<length; l++){
       newMean[l] = row[l]/nRowsMean;
     }
     for(i=1; i<nRowsMean; i++){
       row = rows[meanRowsIndexes[i]];
       for(l=0; l<length; l++){
           newMean[l] += row[l]/nRowsMean;
       }
     }
    }
 }
  //prepare results
  var meanNumber;
 let cluster;
 let sizeCluster;
   if(returnIndexesMode==1 || returnIndexesMode==5){
   meanNumber = new nL();
   meanNumber.name = "mean index";
   for(i=0; i<k; i++){
     cluster = clusters[i];
     sizeCluster = cluster.length;
     for(j=0; j<sizeCluster; j++){
       meanNumber[cluster[j]] = i;
     }
   }
 }
   var colors;
  if(returnIndexesMode==2 || returnIndexesMode==5){
   colors = new cL();
   colors.name = "mean color";
   var catColors = createDefaultCategoricalColorList(k);
   for(i=0; i<k; i++){
     cluster = clusters[i];
     sizeCluster = cluster.length;
     for(j=0; j<sizeCluster; j++){
       colors[cluster[j]] = catColors[i];
     }
   }
 }
  var subTables = new L();
  if(returnIndexesMode==4 || returnIndexesMode==5){
   for(i=0; i<k; i++){
     subTables[i] = new nT();
     subTables[i].name = 'k-means subtable_'+i;
     cluster = clusters[i];
     sizeCluster = cluster.length;
     for(j=0; j<sizeCluster; j++){
       subTables[i].push(rows[cluster[j]]);
     }
     subTables[i] = subTables[i].transpose();
   }
 }
  switch(returnIndexesMode){
   case 0://return list of indexes of rows
     return clusters;
   case 1://return a list of number of mean, k different values, one per row
     return meanNumber;
   case 2://return a list of categorical colors, k different colors, one per row
     return colors;
   case 3://return means
     return means;
   case 4://return list of sub-tables
     return subTables;
   case 5://return object with all the previous
     return {indexes:clusters, means:means, meanNumber:meanNumber, colors:colors, subtables:subTables};
 }
  return null;
}

let product=function(numberTable0, numberTable1){
 if(numberTable0==null || numberTable1==null) return;
 let n = numberTable0.length;
 let m = numberTable0[0].length;
  if(n === 0 || m === 0 || n!=numberTable1[0].length || m!=numberTable1.length) return;
   var newTable = new nT();
 let i, j, k;
 let val;
  for(i=0; i<n; i++){
   newTable[i] = new nL();
   for(j=0; j<n; j++){
     val = 0;
     for(k=0; k<m; k++){
       val+=numberTable0[i][k]*numberTable1[k][j];
     }
     newTable[i][j] = val;
   }
 }
  return newTable;
}
let getCovarianceMatrix=function(numberTable){//TODO:build more efficient method
 if(numberTable==null) return;
 return product(numberTable, numberTable.transpose()).factor(1/numberTable.length);
}

let generateNumberTable=function(mode, nColumns, nRows, factor){//this method should be placed at NumberTableGenerators.js
 mode = mode==null?0:mode;
 nRows = nRows==null?nColumns:nRows;
 factor = factor==null?1:factor;
  var nT = new nT();
 let valueAtCell;
  switch(mode){
   case 0:
     valueAtCell = function(i,j){
       return i==j?factor:0;
     }
     break;
    case 1:
     valueAtCell = function(i,j){
       return factor;
     }
     break;
    case 2:
     valueAtCell = function(i,j){
       return Math.random()*factor;
     }
     break;
    case 3:
     valueAtCell = function(i,j){
       return i==j?Math.random()*factor:0;
     }
     break;
 };
  for(var i=0; i<nColumns; i++){
   nT[i] = new nL();
   nT[i].name = "col_"+i;
   for(var j=0; j<nRows; j++){
     nT[i][j] = valueAtCell(i,j);
   }
 }
  return nT;
}
let identity=function(object) {
 return object;
}
let mergeObjects=function(target, source){
 // TODO: Improve this function to give more functionalities, as:
 //   - select what properties to merge
 //   - to choose if overwrite already existing properties on target object (today it does by default)
 if(target == null) return null;
 if(source == null) return target;
 let oNew = Object.assign(cloneObject(target),source);
 return isEqual(target,oNew) ? target : oNew;
}
let cloneObject=function(object){
 if(object == null) return null;
 let string;
 if(object["clone"] && typeof(object.clone)=="function") return object.clone();
 try {
   string = JSON.stringify(object);
 } catch (e) {
   string = JSON.stringify(serliazeObject(object));
 }
 return JSON.parse(string);
}
let serliazeObject=function(object){
 if(object==null) return null
  var newObject;
 let l;
 let i;
  if(object["isTable"]) {
   newObject = object.toArray();
   l = object.length;
   for(i=0; i<l; i++){
     newObject[i] = serliazeObject(object[i])
   }
   return newObject;
 }
  if(object["isList"]) return object.toArray();
  return object;
}
let getInterval=function(object){
 if(object==null) return;
  if(object.getInterval!=null) return object.getInterval();
}
let getFrame=function(object, expansion){
 let frame;
  if(object.getFrame){
   frame = object.getFrame();
   if(expansion!=null) frame = frame.expand(expansion);
   return frame;
 }
}
let getInfo=function(object, bUseExistingObjectIfPresent) {
 if(object==null) return null;
  var infoObject;
 if(object.isTable){
   infoObject = buildInformationObjectForTable(object, bUseExistingObjectIfPresent);
 } else if(object.isList){
   infoObject = buildInformationObjectForList(object, bUseExistingObjectIfPresent);
 } else if(object["getInfo"]) {
   infoObject = object.getInfo();
 }
  if(infoObject==null) return null;
  infoObject.objectType = infoObject.type;
 infoObject.type = null;
 return infoObject;
}

let getObjectStructure=function(object){
 let objSkeleton = replaceValuesByNull(object);
 return objectToString(objSkeleton);
}
let replaceValuesByNull=function(object){
 let oNew = {};
 for (var i in object) {
   if (object.hasOwnProperty(i)) {
     if(typeof object[i] == "object" && object[i]!= null){
       oNew[i] = replaceValuesByNull(object[i]);
       continue;
     }
     // replace all values with null
     oNew[i] = null;
   }
 }
 return oNew;
}
let getLength=function(object,bGetElementCount){
 if(object==null || object["length"]==null) return;
 bGetElementCount = bGetElementCount == null ? false: bGetElementCount;
 if(bGetElementCount && object.length != null){
   var totalCount = 0;
   for(var index = 0; index < object.length; index++){
     if (index in object) {
       totalCount++;
     }
   }
   return totalCount;
 }
  return object.length;
}
let includes=function(object,element_or_substring){
 if(object==null) return;
 return object.includes(element_or_substring);
}


let getPropertyValue=function(object, property_name) {
 if(object == null) return;
  var propertiesChain = typeof(property_name)==='string'?property_name.split('.'):property_name;
 let objectProp = object[propertiesChain[0]];
 let propCount = 1;
  while (propertiesChain[propCount]!=null) {
   if(objectProp == null) return null;
   objectProp = objectProp[propertiesChain[propCount]];
   propCount++;
 }
 return objectProp;
}
let getPropertyValues=function(object, propertyName, valueIfNull) {
 if(object == null || object.length == null) return;
 if(object.isList) return object.getPropertyValues(propertyName, valueIfNull);
 let newList = new L();
 newList.name = propertyName;
 let val;
 let l = object.length;
 for(var i = 0; i<l; i++) {
   val = getPropertyValue(object[i],propertyName);
   newList[i] = (val == null ? valueIfNull : val);
 }
 return newList.downcast();
}

let getPropertyValuesInterval=function(array, propertyName) {
 if(array == null) return
 let min = Number.MAX_VALUE
 let max = -Number.MAX_VALUE
 array.forEach(ob=>{
    if(ob[propertyName]==null) return
    min = Math.min(min, ob[propertyName])
    max = Math.max(max, ob[propertyName])
 })
 return new I(min, max)
}

let getMultiplePropertyValues=function() {
 if(arguments == null || arguments.length === 0 ||  arguments[0] == null) return null;
 let object = arguments[0];
 let aRet = [];
 for(var i=1; i < arguments.length; i++){
   var o = {
     name: "value"+(i-1),
     description: arguments[i] ? "The value of property " + arguments[i] : ''
   }
   o.value = arguments[i] ? getPropertyValue(object,arguments[i]) : null;
   o.type = o.value == null ? 'Object' : _typeOf(o.value);
   aRet.push(arguments[i] ? o : null);
 }
 aRet.isOutput = true;
 return aRet;
}
let getName=function(object) {
 if(object==null) return;
 return object["name"];
}
let isPropertyValue=function(object, property_value) {
 if(object == null) return false;
 for (var property in object) {
   if(object[property] === property_value)
     return true;
 }
 return false;
}
let getPropertiesNames=function(object) {
 if(object == null) return;
 let sLProps = sL.toL(Object.getOwnPropertyNames(object));
 sLProps.removeElement('__ob__'); // explicitly remove this special property added by Vue
 return sLProps;
}
let getPropertiesNamesAndValues=function(object) {
 if(object == null) return;
  var table = new T();
  table[0] = getPropertiesNames(object);
 table[1] = new L();
  table[0].forEach(function(value, i) {
   table[1][i] = object[value];
 });
  table[1] = table[1].downcast();
  return table;
}
let setPropertyValue=function(object, property_name, property_value, transformative, bForNullKeepPrevious) {
 if(object == null || property_name == null) return;
 let newObject = transformative?object:cloneObject(object);
 if(bForNullKeepPrevious && property_value == null) return newObject;
 let propertiesChain = typeof(property_name)==='string'?property_name.split('.'):property_name;
  var tempObj = newObject;
 for(var i=0; i<propertiesChain.length-1;  i++){
     tempObj = tempObj[propertiesChain[i]] = tempObj[propertiesChain[i]] || {};
 }
 
 tempObj[propertiesChain[i]]  = property_value;
 return newObject;
}

let interpolateObjects=function(object0, object1, value, minDistance) {
 let type = _typeOf(object0);
 let i,dx2,sumdx2;
  value = value == null ? 0.5 : value;
 let antivalue = 1 - value;
 if(type != _typeOf(object1)) return value < .5 ? object0 : object1;;
  switch(type) {
   case 'number':
     if(minDistance && Math.abs(object0 - object1) <= minDistance) return object1;
     return antivalue * object0 + value * object1;
   case 'I':
     if(minDistance && (Math.abs(object0.x - object1.x) + Math.abs(object0.y - object1.y)) <= minDistance) return object1;
     return new I(antivalue * object0.x + value * object1.x, antivalue * object0.y + value * object1.y);
   case 'nL':
     var minL = Math.min(object0.length, object1.length);
     var newNumberList = new nL();
     sumdx2 = 0;
     for(i = 0; i < minL; i++) {
       newNumberList[i] = antivalue * object0[i] + value * object1[i];
       dx2=Math.pow(object1[i] - newNumberList[i], 2);
       sumdx2+=dx2;
     }
     if(minDistance && sumdx2<minDistance*minDistance) return object1;
     return newNumberList;
   case 'Pol':
     var minL = Math.min(object0.length, object1.length);
     var newPolygon = new Pol();
     for(i = 0; i < minL; i++) {
       newPolygon[i] = twoPointsInterpolation(object0[i],object1[i],value);
     }
     return newPolygon;
   case 'T':
   case 'nT':
     var table = instanceSameType(object1);
     var minL = Math.min(object0.length, object1.length);
     var bDone = true;
     for(i = 0; i < minL; i++) {
       table[i] = interpolateObjects(object0[i],object1[i],value,minDistance);
       bDone = bDone && table[i] == object1[i];
     }
     return bDone ? object1 : table;
 }
 // jump to new value for any unknown type when value is past halfway
 return value < .5 ? object0 : object1;
}
let replaceObject=function(object, obectToReplace, objectToPlace) {
 return object == obectToReplace ? objectToPlace : object;
}
let toList=function(array) {
 return L.toL(array).downcast();
}
let floor=function(object){
 if(typeof object == 'number') return Math.floor(object);
 if(object.floor) return object.floor();
 return null;
}
let addition=function() {
 let result;
 let i;
 if(arguments.length < 2) {
   if(arguments.length == 1 && arguments[0] != null && arguments[0].isList) {
     result = arguments[0][0];
     for(i = 1; arguments[0][i] != null; i++) {
       result = addition(result, arguments[0][i]);
     }
     return result;
   }
   return null;
 }
  if(arguments.length == 2) {
   if(arguments[0] != null && arguments[0].isList && arguments[1] != null && arguments[1].isList) {
     return _applyBinaryOperatorOnLists(arguments[0], arguments[1], ObjectOperators.addition);
   } else if(arguments[0] != null && arguments[0].isList) {
     return _applyBinaryOperatorOnListWithObject(arguments[0], arguments[1], ObjectOperators.addition);
   } else if(arguments[1] != null && arguments[1].isList) {
     return _applyBinaryOperatorOnObjectWithList(arguments[0], arguments[1], ObjectOperators.addition);
   }
    var a0 = arguments[0];
   var a1 = arguments[1];
   var a0Type = _typeOf(a0);
   var a1Type = _typeOf(a1);
   var reversed = false;
    if(a1Type < a0Type && a1Type != "string" && a0Type != "string") {
     a0 = arguments[1];
     a1 = arguments[0];
     a0Type = _typeOf(a0);
     a1Type = _typeOf(a1);
     reversed = true;
   }
    var pairType = a0Type + "_" + a1Type;
   //
   switch(pairType) {
     case 'boolean_boolean':
       return a0 && a1;
     case 'date_string':
       return reversed ? a1 + dateToString(a0) : dateToString(a0) + a1;
     case 'number_string':
     case 'string_string':
     case 'string_number':
     case 'boolean_number':
     case 'number_number':
       return a0 + a1;
     case 'PointPoint':
       return new P(a0.x + a1.x, a0.y + a1.y);
     case 'Point3DPoint3D':
       return new P3D(a0.x + a1.x, a0.y + a1.y, a0.z + a1.z);
     case 'numberPoint':
       return new P(a0.x + a1, a0.y + a1);
     case 'numberPoint3D':
       return new P3D(a0.x + a1, a0.y + a1, a0.z + a1);
     case 'Interval_number':
       return new I(a0.x + a1, a0.y + a1);
     case 'IntervalPoint':
       return new P(a0.getMin() + a1.x, a0.getMax() + a1.y);
     case 'Interval_Interval':
       return new P(a0.getMin() + a1.getMin(), a0.getMax() + a1.getMax());
     case 'Point_Rectangle':
       return new Rec(a0.x + a1.x, a0.y + a1.y, a1.width, a1.height);
     case 'Interval_Rectangle':
       return new Rec(a0.getMin() + a1.x, a0.getMax() + a1.y, a1.width, a1.height);
     case 'Rectangle_Rectangle':
       return new Rec(a0.x + a1.x, a0.y + a1.y, a0.width + a1.width, a0.height + a1.height);
     case 'date_number':
       return new Date(a0.getTime() + (a1 / DateOperators_millisecondsToDays));
     case 'date_date':
       return new Date(Number(a0.getTime() + a1.getTime())); //?
     case 'date_DateInterval':
       return new dI(addition(a0, a1.date0), addition(a0, a1.date1));
     case 'DateInterval_number':
       return new dI(addition(a0.date0, a1), addition(a0.date1, a1));
     case 'DateInterval_Interval':
       return new dI(addition(a0.date0, a1.min), addition(a0.date1, a1.max));
     case 'DateInterval_DateInterval':
       return new dI(addition(a0.date0, a1.date0), addition(a0.date1, a1.date1));
     case 'string_StringList':
       return a1.append(a0, false);
     case 'StringList_string':
       return a1.append(a0, true);
     default:
       return null;
    }
   return a0 + a1;
  }
  result = arguments[0];
 for(i = 1; i < arguments.length; i++) {
   result = addition(result, arguments[i]);
 }
 return result;
}
let multiplication=function() {
 let result;
 let i;
 if(arguments.length < 2) {
   if(arguments.length == 1 && arguments[0].isList) {
     result = arguments[0][0];
     for(i = 1; arguments[0][i] != null; i++) {
       result = multiplication(result, arguments[0][i]);
     }
     return result;
   }
   return null;
 }
  var a0 = arguments[0];
 let a1 = arguments[1];
 let a0Type = _typeOf(a0);
 let a1Type = _typeOf(a1);
 let pairType = a0Type + "_" + a1Type;
  //c.log('pairType:['+pairType+']');
  if(arguments.length == 2) {
   if(arguments[0] == null) return null;
    if(pairType=='NumberTable_NumberTable') return product(a0, a1);
    if(arguments[0].isList && arguments[1].isList) {
     return _applyBinaryOperatorOnLists(arguments[0], arguments[1], ObjectOperators.multiplication);
   } else if(arguments[0].isList) {
     return _applyBinaryOperatorOnListWithObject(arguments[0], arguments[1], ObjectOperators.multiplication);
   } else if(arguments[1].isList) {
     return _applyBinaryOperatorOnListWithObject(arguments[1], arguments[0], ObjectOperators.multiplication);
   }
    if(a1Type < a0Type){
     a0 = arguments[1];
     a1 = arguments[0];
     a0Type = _typeOf(a0);
     a1Type = _typeOf(a1);
   }
    pairType = a0Type + "_" + a1Type;
    //
   switch(pairType) {
     case 'number_number':
     case 'boolean_boolean':
     case 'boolean_number':
     case 'Date_string':
     case 'number_string':
     case 'string_string':
       return a0 * a1; //todo: what to do with strings?
     case 'PointPoint':
       return pointMultiplication(a0, a1);
       //return new P(a0.x * a1.x, a0.y * a1.y);
     case 'Point3DPoint3D':
       return new P3D(a0.x * a1.x, a0.y * a1.y, a0.z * a1.z);
     case 'numberPoint':
       return new P(a0.x * a1, a0.y * a1);
     case 'numberPoint3D':
       return new P3D(a0.x * a1, a0.y * a1, a0.z * a1);
     case 'Interval_number':
       return new I(a0.getMin() * a1, a0.getMax() * a1);
     case 'IntervalPoint':
       return new P(a0.getMin() * a1.x, a0.getMax() * a1.y);
     case 'Interval_Interval':
       return new P(a0.getMin() + a1.getMin(), a0.getMax() + a1.getMax());
     case 'Point_Rectangle':
       return new Rec(a0.x * a1.x, a0.y * a1.y, a1.width, a1.height); //todo: no
     case 'Interval_Rectangle':
       return new Rec(a0.getMin() * a1.x, a0.getMax() * a1.y, a1.width, a1.height); //todo: no
     case 'Rectangle_Rectangle':
       return new Rec(a0.x * a1.x, a0.y * a1.y, a0.width * a1.width, a0.height * a1.height);
     case 'date_number':
       return new Date(a0.getTime() * (a1 / DateOperators_millisecondsToDays));
     case 'date_date':
       return new Date(Number(a0.getTime() + a1.getTime())); //todo: ???
     case 'date_DateInterval':
       return new dI(multiplication(a0, a1.date0), multiplication(a0, a1.date1)); //todo: ???
     case 'DateInterval_number':
       return new dI(multiplication(a0.date0, a1), multiplication(a0.date1, a1)); //todo: ???
     case 'DateInterval_Interval':
       return new dI(multiplication(a0.date0, a1.min), multiplication(a0.date1, a1.max)); //todo: ???
     case 'DateInterval_DateInterval':
       return new dI(multiplication(a0.date0, a1.date0), multiplication(a0.date1, a1.date1)); //todo: ???
     default:
       //[!] multiplication failed, pairType, a0 * a1
       return null;
    }
   return a0 * a1;
 }
  result = arguments[0];
 for(i = 1; i < arguments.length; i++) {
   result = multiplication(result, arguments[i]);
 }
 return result;
}
let division=function() {
 let result;
 let i;
 if(arguments.length < 2) {
   if(arguments.length == 1 && arguments[0] && arguments[0].isList) {
     result = arguments[0][0];
     for(i = 1; arguments[0][i] != null; i++) {
       result = division(result, arguments[0][i]);
     }
     return result;
   }
   return null;
 }
 if(arguments.length == 2) {
   if(arguments[0] != null && arguments[0].isList && arguments[1] != null && arguments[1].isList) {
     return _applyBinaryOperatorOnLists(arguments[0], arguments[1], ObjectOperators.division);
   } else if(arguments[0] != null && arguments[0].isList) {
     //list against Object
     return _applyBinaryOperatorOnListWithObject(arguments[0], arguments[1], ObjectOperators.division);
   } else if(arguments[1] != null && arguments[1].isList) {
     return _applyBinaryOperatorOnListWithObject(arguments[1], arguments[0], ObjectOperators.division);
   }
    var a0 = arguments[0];
   var a1 = arguments[1];
   var a0Type = _typeOf(a0);
   var a1Type = _typeOf(a1);
    if(a1Type < a0Type) {
     a0 = arguments[1];
     a1 = arguments[0];
     a0Type = _typeOf(a0);
     a1Type = _typeOf(a1);
   }
    var pairType = a0Type + "_" + a1Type;
   //
   switch(pairType) {
     case 'number_number':
     case 'boolean_boolean':
     case 'boolean_number':
     case 'Date_string':
     case 'number_string':
     case 'string_string':
       return a0 / a1; //todo: what to do with strings?
     case 'PointPoint':
       return new P(a0.x / a1.x, a0.y / a1.y);
     case 'Point3DPoint3D':
       return new P3D(a0.x / a1.x, a0.y / a1.y, a0.z / a1.z);
     case 'numberPoint':
       return new P(a0.x / a1, a0.y / a1);
     case 'numberPoint3D':
       return new P3D(a0.x / a1, a0.y / a1, a0.z / a1);
     case 'Interval_number':
       return new I(a0.getMin() / a1, a0.getMax() / a1);
     case 'IntervalPoint':
       return new P(a0.getMin() / a1.x, a0.getMax() / a1.y);
     case 'Interval_Interval':
       return new P(a0.getMin() + a1.getMin(), a0.getMax() + a1.getMax());
     case 'Point_Rectangle':
       return new Rec(a0.x / a1.x, a0.y / a1.y, a1.width, a1.height); //todo: no
     case 'Interval_Rectangle':
       return new Rec(a0.getMin() / a1.x, a0.getMax() / a1.y, a1.width, a1.height); //todo: no
     case 'Rectangle_Rectangle':
       return new Rec(a0.x / a1.x, a0.y / a1.y, a0.width / a1.width, a0.height / a1.height);
     case 'date_number':
       return new Date(a0.getTime() / (a1 / DateOperators_millisecondsToDays));
     case 'date_date':
       return new Date(Number(a0.getTime() + a1.getTime())); //todo: ???
     case 'date_DateInterval':
       return new dI(division(a0, a1.date0), division(a0, a1.date1)); //todo: ???
     case 'DateInterval_number':
       return new dI(division(a0.date0, a1), division(a0.date1, a1)); //todo: ???
     case 'DateInterval_Interval':
       return new dI(division(a0.date0, a1.min), division(a0.date1, a1.max)); //todo: ???
     case 'DateInterval_DateInterval':
       return new dI(division(a0.date0, a1.date0), division(a0.date1, a1.date1)); //todo: ???
     default:
       //[!] division failed, pairType, a0 / a1
       return null;
    }
   return a0 / a1;
 }
  result = arguments[0];
 for(i = 1; i < arguments.length; i++) {
   result = division(result, arguments[i]);
 }
 return result;
}
let applyFunctionOnInput=function(input, func, param1, param2, param3, param4, param5) {
 if(input==null || func==null) return;
 if(typeof(func)=="string") func = stringToFunction(func);
 return func.apply(this, [input, param1, param2, param3, param4, param5]);
}
let isEqual=function(obj1, obj2){
 return _recursiveEqual(obj1, obj2);
}
let _recursiveEqual=function(obj1, obj2){
 if(obj1==obj2) return true;
 // primitive types
 let type = _typeOf(obj1);
 if(type == 'string' || type == 'number' || type == 'boolean' || type == 'null'){
   return false;
 }
 if(obj1 == null || obj2 == null) return false;
 if(Object.keys(obj1).length!=Object.keys(obj2).length){
   return false;
 }
 
 for(var propName in obj1){
   if(!_recursiveEqual(obj1[propName], obj2[propName])){
     return false;
   }
 }
 // Any 2 Dates are considered equivalent since they have no keys. Perhaps other object types also.
 if(Object.keys(obj1).length == 0 && obj1.toString != null && obj2.toString != null)
   return obj1.toString() == obj2.toString();
 return true;
}

let arrayOfArraysToTable=function(array_arrays, firstValueIsColumnName, treatStringNumbersAsNumeric){
if(array_arrays == null) return null;
firstValueIsColumnName = firstValueIsColumnName==null?true:firstValueIsColumnName;
treatStringNumbersAsNumeric = treatStringNumbersAsNumeric == null ? true : treatStringNumbersAsNumeric;
let table = new T();
let j0 = firstValueIsColumnName?1:0;
  for(var i=0; i<array_arrays.length; i++){
      table[i] = new L();
      if(firstValueIsColumnName && array_arrays[i].length>0) {
       table[i].name = String(array_arrays[i][0]);
     } else {
       table[i].name = "_";
     }
      for(var j=j0;j<array_arrays[i].length;j++){
         table[i][j-j0] = array_arrays[i][j];
         if(treatStringNumbersAsNumeric && table[i][j-j0] !== null){
           var cellContent = String(table[i][j-j0]);
           var numberCandidate = Number(cellContent.replace(',', '.'));
           var element = (numberCandidate || (numberCandidate === 0 && cellContent !== '')) ? numberCandidate : cellContent;
           if(typeof element == 'string') element = _removeQuotes(element);
           table[i][j-j0] = element;
         }
      }
      table[i] = table[i].downcast();
  }
  
  return table.downcast();
}
let operate=function(operation, x, y, factor, mapFunction, name, numIterations){
  if(numIterations>1){
   var accumulated = x["isList"]?new T():new L();
   accumulated.push(x);
   for(var i=0; i<numIterations; i++){
     x = operate(operation, x, y, factor, mapFunction, name);
     accumulated.push(x);
   }
   return accumulated.downcast();
 } else if(numIterations<=-1){
   return operate(operation, operate(operation, x, y, factor, mapFunction, name, numIterations+1), y, factor, mapFunction, name);
 }
  var f = mapFunction!=null?mapFunction:[_sum, _multiplication, _pow2, _pow3, Math.pow, Math.sqrt, Math.log, _logSum, Math.log2, _log2Sum, _log_y, Math.cos, _cosSum, Math.sin, _sinSum, Math.tan, _tanSum, Math.atan2, Math.floor, Math.round, Math.ceil, Math.abs, _modulo, _subtract, _divide][operation]; 
 factor = factor==null?1:factor;
  var type_x = x==null?"object":(x["isTable"]?"table":(x["isList"]?"list":"object"));
 let type_y = y==null?"object":(y["isTable"]?"table":(y["isList"]?"list":"object"));
  var combinedType = type_x+"_"+type_y;
 let nL, nT, l;
  if(_typeOf(f)=="string"){
   eval("f = function(x,y){ return "+f+"}");
 }
  switch(combinedType){
   case "object_list":
     nL = new L();
     nL.name = name==null?y.name:name;
     for(i=0;i<y.length;i++){
       nL[i] = factor==1?f(x, y[i]):factor*f(x, y[i]);
     }
     return nL.downcast();
   case "list_object":
     nL = new L();
     nL.name = name==null?x.name:name;
     for(i=0;i<x.length;i++){
       nL[i] = factor==1?f(x[i], y):factor*f(x[i], y);
     }
     return nL.downcast();
   case "list_list":
     nL = new L();
     nL.name = name==null?y.name:name;
     l = Math.min(x.length, y.length);
     for(i=0;i<l;i++){
       nL[i] = factor==1?f(x[i], y[i]):factor*f(x[i], y[i]);
     }
     return nL.downcast();
   case "object_table":
     nT = new T();
     nT.name = name;
     for(i=0;i<y.length;i++){
       nT[i] = operate(operation, x, y[i], factor, mapFunction);
     }
     return nT.downcast();
   case "table_object":
     nT = new T();
     nT.name = name;
     for(i=0;i<x.length;i++){
       nT[i] = operate(operation, x[i], y, factor, mapFunction);
     }
     return nT.downcast();
   case "list_table":
   case "table_list":
   case "table_table":
     nT = new T();
     nT.name = name;
     l = Math.min(x.length, y.length);
     for(i=0;i<x.length;i++){
       nT[i] = operate(operation, x[i], y[i], factor, mapFunction);
     }
     return nT.downcast();
   default:
     return factor==1?f(x, y):factor*f(x, y);
 }
 return;
}
let _sum=function(x,y){
 return x+y;
}
let _multiplication=function(x,y){
 return x*y;
}
let _pow2=function(x){
 return Math.pow(x, 2);
}
let _pow3=function(x){
 return Math.pow(x, 2);
}
let _logSum=function(x,y){
 return Math.log(x+y);
}
let _log2Sum=function(x,y){
 return Math.log2(x+y);
}
let _log_y=function(x,y){
 return Math.log(x)/Math.log(y);
}
let _cosSum=function(x,y){
 return Math.cos(x+y);
}
let _sinSum=function(x,y){
 return Math.sin(x+y);
}
let _tanSum=function(x,y){
 return Math.tan(x+y);
}
let _modulo=function(x,y){
 return x%y;
}
let _subtract=function(x,y){
 return x-y;
}
let _divide=function(x,y){
 return x/y;
}
let numberToString=function(value, nDecimals ) {
 let string = value.toFixed(nDecimals)
 if(nDecimals == 0)
   return string;
 while(string.charAt(string.length - 1) == '0') {
   string = string.substring(0, string.length - 1);
 }
 if(string.charAt(string.length - 1) == '.') string = string.substring(0, string.length - 1);
 return string;
}

let getRandomWithSeed=function(seed) {
 seed = seed==null?1:seed;
  seed = (seed * 9301 + 49297) % 233280;
 return seed / (233280.0);
}

let numberFromBinaryPositions=function(binaryPositions) {
 let i;
 let n = 0;
 for(i = 0; binaryPositions[i] != null; i++) {
   n += Math.pow(2, binaryPositions[i]);
 }
 return n;
}

let numberFromBinaryValues=function(binaryValues) {
 let n = 0;
 let l = binaryValues.length;
 for(var i = 0; i < l; i++) {
   n += binaryValues[i] == 1 ? Math.pow(2, (l - (i + 1))) : 0;
 }
 return n;
}

//converts number into binary, return array
let _powersOfTwoDecomposition=function(number, length) {
  var powers = new nL();
  var constructingNumber = 0;
 let biggestPower;
  while(constructingNumber < number) {
   biggestPower = Math.floor(Math.log(number) / Math.LN2);
   powers[biggestPower] = 1;
   number -= Math.pow(2, biggestPower);
 }
  length = Math.max(powers.length, length == null ? 0 : length);
  for(var i=0; i<powers.length;i++){
   powers[i] = powers[i]?1:0;
 }
 while(powers.length<length){
   //powers.unshift(0);
   powers.push(0)
 }
  return powers;
}

let toBinary=function(number, length, bLeastSignificantFirst=true){
 let nL = _powersOfTwoDecomposition(number, length);
 if(!bLeastSignificantFirst)
   nL = nL.getReversed();
 return nL;
}

let binaryToNumber=function(booleanListOrNumberList, bLeastSignificantFirst=true){
 if(booleanListOrNumberList==null) return
 let nL = bLeastSignificantFirst ? booleanListOrNumberList.getReversed() : booleanListOrNumberList;
 let n = 0;
 let l = nL.length;
  for(var i=0; i<l; i++){
   n += Number(nL[i])==0 ? 0 : Math.pow(2, (l - (i + 1)));
 }
  return n;
}

let positionsFromBinaryValues=function(binaryValues) {
 let i;
 let positions = new nL();
 for(i = 0; binaryValues[i] != null; i++) {
   if(binaryValues[i] == 1) positions.push(i);
 }
 return positions;
}


//////////////////////////////////////////////////////////////////////
//Copyright (c) 2017-2020, W. "Mac" McMeans
//All rights reserved.
//https://github.com/macmcmeans/aleaPRNG
let _Alea=function() {
 return(function(args) {
   // Johannes Baagøe <baagoe@baagoe.com>, 2010
   var s0 = 0;
   var s1 = 0;
   var s2 = 0;
   var c = 1;
    if(args.length === 0) {
     args = [+new Date()];
   }
   var mash = _Mash();
   s0 = mash(' ');
   s1 = mash(' ');
   s2 = mash(' ');
    for(var i = 0; i < args.length; i++) {
     s0 -= mash(args[i]);
     if(s0 < 0) {
       s0 += 1;
     }
     s1 -= mash(args[i]);
     if(s1 < 0) {
       s1 += 1;
     }
     s2 -= mash(args[i]);
     if(s2 < 0) {
       s2 += 1;
     }
   }
   mash = null;
    var random = function() {
     var t = 2091639 * s0 + c * 2.3283064365386963e-10; // 2^-32
     s0 = s1;
     s1 = s2;
     // https://github.com/nquinlan/better-random-numbers-for-javascript-mirror/blob/master/support/js/Alea.js#L38
     return s2 = t - (c = t | 0);
   };
   random.uint32 = function() {
     return random() * 0x100000000; // 2^32
   };
   random.fract53 = function() {
     return random() +
       (random() * 0x200000 | 0) * 1.1102230246251565e-16; // 2^-53
   };
   random.version = 'Alea 0.9';
   random.args = args;
   return random;
  }(Array.prototype.slice.call(arguments)));
}
let _Mash=function() {
 let n = 0xefc8249d;
  var mash = function(data) {
   data = data.toString();
   for(var i = 0; i < data.length; i++) {
     n += data.charCodeAt(i);
     var h = 0.02519603282416938 * n;
     n = h >>> 0;
     h -= n;
     h *= n;
     n = h >>> 0;
     h -= n;
     n += h * 0x100000000; // 2^32
   }
   return(n >>> 0) * 2.3283064365386963e-10; // 2^-32
 };
  mash.version = 'Mash 0.9';
 return mash;
}
let random=function(){
 return new _Alea();
}

//end of:
//Copyright (c) 2017-2020, W. "Mac" McMeans
//All rights reserved.
//https://github.com/macmcmeans/aleaPRNG
////////////////////////////////////////////////////////////////////////////



let randomSeed=function(seed){
 NumberOperators_stackRandom.push(NumberOperators_random);
 if(NumberOperators_stackRandom.length > 100){
   NumberOperators_stackRandom.shift(); // drop the oldest
 }
 NumberOperators_random = new _Alea("my", seed, "seeds");
 NumberOperators_lastNormal = NaN;
}
let randomSeedPop=function(){
 if(NumberOperators_stackRandom.length > 0){
   NumberOperators_random = NumberOperators_stackRandom.pop();
 }
}
let decimalPlaces=function(value) {
 let match = String(value).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
 if (!match) { return 0; }
 return Math.max(
      0,
      // Number of digits right of decimal point.
      (match[1] ? match[1].length : 0)
      // Adjust for scientific notation.
      - (match[2] ? +match[2] : 0));
}

let logistic=function(value,maxValue,midpoint,k) {
 if(value==null || isNaN(value)) return null;
 maxValue = maxValue == null ? 1 : maxValue;
 midpoint = midpoint == null ? 0 : midpoint;
 k = k == null ? 1 : k;
 return maxValue / (1 + Math.exp(-k*(value-midpoint)));
}

let formatShort=function(value,prec) {
 if(value == null) return;
 if(value == 0 || value == Infinity) return String(value);
 if(isNaN(value)) return value;
 prec = (prec == null || prec < 1) ? 2 : prec;
 if(String(value).length <= prec) return String(value);
 let nice = parseFloat((value).toPrecision(prec));
 let order = Math.floor(Math.log10(nice));
  var suffix = '';
 if(order >= 15){
   nice = parseFloat((nice / Math.pow(10, order)).toPrecision(prec));
   suffix = 'e' + order + '';
 }
 else if (order >= 12){
   nice /= Math.pow(10, 12);
   suffix = 't';
 }
 else if(order >= 9){
   nice /= Math.pow(10, 9);
   suffix = 'b';
 }
 else if(order >= 6){
   nice /= Math.pow(10, 6);
   suffix = 'm';
 }
 else if(order >= 3){
   nice /= Math.pow(10, 3);
   suffix = 'k';
 }
 else if(order < -3){
   nice = parseFloat((nice / Math.pow(10, order)).toPrecision(prec));
   suffix = 'e' + order + '';
 }
 // clean up floating point errors that sometimes occur
 nice = parseFloat(nice.toPrecision(12))
 return nice + suffix;
}


let numberToPosition=function(n){
 let j = n % 10;
 let k = n % 100;
 if(j == 1 && k != 11)
   return n + 'st';
 if(j == 2 && k != 12)
   return n + 'nd';
 if(j == 3 && k != 13)
   return n + 'rd';
 return n + 'th';
}


let getSoftenControlPoints=function(point0, point1, point2, controlVectorSize) {
 controlVectorSize = controlVectorSize || 10;
 let angle = angleFromTwoPoints(point0, point2);
 let controlPoint0 = new P(point1.x - controlVectorSize * Math.cos(angle), point1.y - controlVectorSize * Math.sin(angle));
 let controlPoint1 = new P(point1.x + controlVectorSize * Math.cos(angle), point1.y + controlVectorSize * Math.sin(angle));
 return [controlPoint0, controlPoint1];
}
let bezierCurvePoints=function(x0, y0, c0x, c0y, c1x, c1y, x1, y1, t) {
    let s = 1 - t
    let ax = s * x0 + t * c0x
    let ay = s * y0 + t * c0y
    let bx = s * c0x + t * c1x
    let by = s * c0y + t * c1y
    let cx = s * c1x + t * x1
    let cy = s * c1y + t * y1
    let ex = s * ax + t * bx
    let ey = s * ay + t * by
    let fx = s * bx + t * cx
    let fy = s * by + t * cy
    return new P(t * fx + s * ex, t * fy + s * ey)
}

let distanceToBezierCurve = function(x0, y0, c0x, c0y, c1x, c1y, x1, y1, p, returnPoint) {
  var steps = Math.round((Math.abs(x0-x1) + Math.abs(y0-y1) ) / 50);
  steps = Math.min(50,Math.max(10,steps));
  var pt0,ptm;
  var dm = Number.MAX_VALUE;
  var d0,tm;
  // coarse check
  for(var s=0;s<=steps;s++){
    pt0 = bezierCurvePoints(x0, y0, c0x, c0y, c1x, c1y, x1, y1, s/steps);
    d0 = Math.pow(pt0.x - p.x, 2) + Math.pow(pt0.y - p.y, 2);
    if(d0<dm){
      dm=d0;
      tm=s/steps;
    }
  }
  // fine check
  dm = Number.MAX_VALUE;
  var tDelta = 0.1/steps;
  var tStart = Math.max(0,tm - 1/steps);
  var tEnd   = Math.min(1,tm + 1/steps);
  for(var t=tStart; t <= tEnd; t += tDelta){
    pt0 = bezierCurvePoints(x0, y0, c0x, c0y, c1x, c1y, x1, y1, t);
    d0 = Math.pow(pt0.x - p.x, 2) + Math.pow(pt0.y - p.y, 2);
    if(d0<dm){
      dm=d0;
      ptm=pt0;
    }
  }
  if(returnPoint) return ptm;
  return Math.sqrt(dm);
}

let triangleContainsPoint=function(pT0, pT1, pT2, p) {
 let a = (pT0.x - p.x) * (pT1.y - p.y) - (pT1.x - p.x) * (pT0.y - p.y);
 let b = (pT1.x - p.x) * (pT2.y - p.y) - (pT2.x - p.x) * (pT1.y - p.y);
 let c = (pT2.x - p.x) * (pT0.y - p.y) - (pT0.x - p.x) * (pT2.y - p.y);
 return(a > 0 && b > 0 && c > 0) || (a >= 0 && b >= 0 && c >= 0);
}

let triangleArea=function(triangle) {
 return Math.abs(triangle.a.x * (triangle.b.y - triangle.c.y) + triangle.b.x * (triangle.c.y - triangle.a.y) + triangle.c.x * (triangle.a.y - triangle.b.y)) / 2;
}
let lineFromTwoPoints=function(point0, point1) {
 if(point0.x == point1.x) return new P(Infinity, point0.x);
 let m = (point1.y - point0.y) / (point1.x - point0.x);
 return new P(m, point0.y - m * point0.x);
}
let distancePointToLine=function(point, line) {
 let m2;
 let b2;
 if(line.x === 0) {
   m2 = Infinity;
   b2 = point.x;
 } else {
   m2 = -1 / line.x;
   b2 = point.y - m2 * point.x;
 }
 let interPoint = intersectionLines(line, new P(m2, b2));
 return Math.sqrt(Math.pow(point.x - interPoint.x, 2) + Math.pow(point.y - interPoint.y, 2));
}
let distancePointToSegment=function(point, point0Segment, point1Segment) {
 let m = point0Segment.x == point1Segment.x ? Infinity : (point1Segment.y - point0Segment.y) / (point1Segment.x - point0Segment.x);
 let line = m == Infinity ? new P(Infinity, point0Segment.x) : new P(m, point0Segment.y - m * point0Segment.x);
 let m2;
 let b2;
 if(line.x === 0) {
   m2 = Infinity;
   b2 = point.x;
 } else {
   m2 = -1 / line.x;
   b2 = point.y - m2 * point.x;
 }
 let interPoint = intersectionLines(line, new P(m2, b2));
 if(interPoint.x >= Math.min(point0Segment.x, point1Segment.x) && interPoint.x <= Math.max(point0Segment.x, point1Segment.x)) return point.distanceToPoint(interPoint);
 return Math.min(point.distanceToPoint(point0Segment), point.distanceToPoint(point1Segment));
}
let intersectionLines=function(line0, line1) {
 if(line0.x == line1.x) {
   if(line0.y == line1.y) {
     if(line0.x == Infinity) {
       return new P(line0.y, 0);
     } else {
       return new P(0, line0.y);
     }
   }
   return null;
 }
 if(line0.x == Infinity) {
   return new P(line0.y, line1.x * line0.y + line1.y);
 } else if(line1.x == Infinity) {
   return new P(line1.y, line0.x * line1.y + line0.y);
 }
  var xx = (line1.y - line0.y) / (line0.x - line1.x);
 return new P(xx, line0.x * xx + line0.y);
}

let intersectionLineRectangle=function(point0, point1, rect, bLineInfinite){
 bLineInfinite = bLineInfinite == null ? false : bLineInfinite;
 let lineTest = lineFromTwoPoints(point0,point1);
 // test each side of rectangle
 let lineTop = lineFromTwoPoints(rect.getTopLeft(),rect.getTopRight());
 let lineRight = lineFromTwoPoints(rect.getTopRight(),rect.getBottomRight());
 let lineBottom = lineFromTwoPoints(rect.getBottomLeft(),rect.getBottomRight());
 let lineLeft = lineFromTwoPoints(rect.getTopLeft(),rect.getBottomLeft());
 let pt;
 let polyResults = new Pol();
 pt = intersectionLines(lineTest,lineTop);
 if(pt != null && rect.pointIsOnBorder(pt)) polyResults.push(pt);
 pt = intersectionLines(lineTest,lineRight);
 if(pt != null && rect.pointIsOnBorder(pt)) polyResults.push(pt);
 pt = intersectionLines(lineTest,lineBottom);
 if(pt != null && rect.pointIsOnBorder(pt)) polyResults.push(pt);
 pt = intersectionLines(lineTest,lineLeft);
 if(pt != null && rect.pointIsOnBorder(pt)) polyResults.push(pt);
 // Could be multiple results and may be intersection with infinite line
 if(!bLineInfinite){
   var polyKeep = new Pol();
   for(var i=0;i<polyResults.length;i++){
     pt = polyResults[i];
     if(pt.x >= Math.min(point0.x,point1.x) &&
        pt.x <= Math.max(point0.x,point1.x) &&
        pt.y >= Math.min(point0.y,point1.y) &&
        pt.y <= Math.max(point0.y,point1.y) ){
       // inside the segment defined by point0 -> point1
       polyKeep.push(pt);
     }
   }
   polyResults = polyKeep;
 }
 return polyResults;
}



let numberTableToPolygon=function(numberTable) {
 if(numberTable == null || numberTable.length < 2) return null;
  var i;
 let n = Math.min(numberTable[0].length, numberTable[1].length);
 let polygon = new Pol();
  for(i = 0; i < n; i++) {
   polygon[i] = new P(numberTable[0][i], numberTable[1][i]);
 }
  return polygon;
}
let numberTableToColorList=function(nT, bRgb) {
 if(nT == null) return;
 bRgb = bRgb == null ? true : bRgb;
 if(nT.type != 'T' && nT.type != 'nT')
   throw new Error('Input must be a table');
 if(nT.length < 3)
   throw new Error('T must have at least 3 lists');
 let cL = new cL();
 let r,g,b;
 for(var i = 0;i < nT[0].length;i++){
   if(bRgb){
     r = Math.max(0,Math.min(255,Math.round(nT[0][i])));
     g = Math.max(0,Math.min(255,Math.round(nT[1][i])));
     b = Math.max(0,Math.min(255,Math.round(nT[2][i])));
   }
   else{
     var rgb = HSVtoRGB(nT[0][i],nT[1][i],nT[2][i]);
     r = Math.max(0,Math.min(255,Math.round(rgb[0])));;
     g = Math.max(0,Math.min(255,Math.round(rgb[1])));;
     b = Math.max(0,Math.min(255,Math.round(rgb[2])));;
   }
   if(isNaN(r) || isNaN(g) || isNaN(b))
     throw new Error('Invalid format. T cells must be numbers in range [0,255]');
   cL.push('rgb('+r+','+g+','+b+')');
 }
 return cL;
}

let numberTableToNetwork=function(numberTable, method, tolerance) {
 tolerance = tolerance == null ? 0 : tolerance;
  var network = new Net();
  var list0;
 let list1;
  var i;
 let j;
  var node0;
 let node1;
 let relation;
   switch(method) {
   case 0: // standard deviation
      var sd;
     var w;
      for(i = 0; numberTable[i + 1] != null; i++) {
       list0 = numberTable[i];
        if(i === 0) {
         node0 = new Nd(list0.name, list0.name);
         network.addNode(node0);
       } else {
         node0 = network.nodes[i];
       }
         for(j = i + 1; numberTable[j] != null; j++) {
         list1 = numberTable[j];
          if(i === 0) {
           node1 = new Nd(list1.name, list1.name);
           network.addNode(node1);
         } else {
           node1 = network.nodes[j];
         }
            list1 = numberTable[j];
         sd = standardDeviationTwoNumberLists(list0, list1);
          w = 1 / (1 + sd);
          if(w >= tolerance) {
           relation = new Rel(i + "_" + j, node0.name + "_" + node1.name, node0, node1, w);
           network.addRelation(relation);
         }
       }
     }
      break;
   case 1:
     break;
   case 2:
     break;
 }
  return network;
}

let buildDendrogramFromPolygon=function(polygon) {
 let tree = new Tr();
 let node;
 let tW;
 let parent;
 let leaves = new ndL();
  var node0, node1, nodes = new Pol();
  polygon.forEach(function(point, i) {
   node = new Nd('point_' + i, 'point_' + i);
   node.weight = 1;
   node.barycenter = point;
   node.point = point;
   node.polygon = new Pol(point);
   tree.addNode(node);
   nodes.push(node);
   leaves.push(node);
 });
  tree.nodes = tree.nodes.getReversed();
  //c.l('-');
  var buildNodeFromPair = function(node0, node1) {
   var parent = new Nd("(" + node0.id + "," + node1.id + ")", "(" + node0.id + "," + node1.id + ")");
   parent.polygon = node0.polygon.concat(node1.polygon);
   //c.l("node0.polygon.length, node1.polygon.length, parent.polygon.length", node0.polygon.length, node1.polygon.length, parent.polygon.length);
   parent.weight = parent.polygon.length;
   tW = node0.weight + node1.weight;
   parent.barycenter = new P((node0.weight * node0.barycenter.x + node1.weight * node1.barycenter.x) / tW, (node0.weight * node0.barycenter.y + node1.weight * node1.barycenter.y) / tW);
   //c.l('parent.barycenter.x', parent.barycenter.x, parent.barycenter.y);
   tree.addNode(parent);
   tree._newCreateRelation(parent, node0);
   tree._newCreateRelation(parent, node1);
   return parent;
 };
  var closestPair;
 while(nodes.length > 1) {
   closestPair = _findClosestNodes(nodes);
   node0 = nodes[closestPair[0]];
   node1 = nodes[closestPair[1]];
   parent = buildNodeFromPair(node0, node1);
   parent.distance = closestPair.distance;
   nodes.splice(closestPair[0], 1);
   nodes.splice(closestPair[1] - 1, 1);
   nodes.push(parent);
 }
  tree.nodes = tree.nodes.getReversed();
  var assignLevel = function(node, parentLevel) {
   node.level = parentLevel + 1;
   node.to.forEach(function(son) {
     assignLevel(son, node.level);
   });
 };
  assignLevel(tree.nodes[0], -1);
  tree.leaves = leaves;
  return tree;
}
let _findClosestNodes=function(nodes) {
 let i, j;
 let d2;
 let d2Min = 9999999999;
 let pair;
  for(i = 0; nodes[i + 1] != null; i++) {
   for(j = i + 1; nodes[j] != null; j++) {
     d2 = Math.pow(nodes[i].barycenter.x - nodes[j].barycenter.x, 2) + Math.pow(nodes[i].barycenter.y - nodes[j].barycenter.y, 2);
     if(d2 < d2Min) {
       d2Min = d2;
       pair = [i, j];
     }
   }
 }
  pair.distance = d2Min;
  return pair;
}
let sortOnXY=function(polygon) {
 return polygon.sort(function(p0, p1) {
   if(p0.x < p1.x) return -1;
   if(p0.x == p1.x && p0.y < p1.y) return -1;
   return 1;
 });
}

let expandFromBarycenter=function(polygon, factor) {
 let newPolygon = new Pol();
 let barycenter = polygon.getBarycenter();
  for(var i = 0; polygon[i] != null; i++) {
   newPolygon[i] = polygon[i].expandFromPoint(barycenter, factor);
 }
  return newPolygon;
}

let simplifyPolygon=function(polygon, margin) {
 margin = margin == null || margin === 0 || margin === undefined ? 1 : margin;
 let newPolygon = polygon.clone();
 let p0;
 let p1;
 let p2;
 let line;
 let i;
 let nPoints = polygon.length;
 for(i = 0; i < nPoints; i++) {
   p0 = newPolygon[i];
   p1 = newPolygon[(i + 1) % nPoints];
   p2 = newPolygon[(i + 2) % nPoints];
   line = lineFromTwoPoints(p0, p2);
   if(distancePointToLine(p1, line) < margin) {
     //newPolygon.splice((i+1)%nPoints, 1);
     newPolygon = newPolygon.getWithoutElementAtIndex((i + 1) % nPoints);
     i--;
   }
   nPoints = newPolygon.length;
 }
 return newPolygon;
}
let bezierPolygonContainsPoint=function(polygon, point, border, graphics) {
 let frame = polygon.getFrame();
 graphics.clearContext();
 graphics.context.fillStyle = 'black';
 graphics.context.fillRect(0, 0, frame.width, frame.height);
 if(border != null) {
   graphics.context.strokeStyle = 'black';
   graphics.context.lineWidth = border;
 }
 graphics.context.fillStyle = 'white';
 graphics.context.beginPath();
 graphics.drawBezierPolygon(polygon, -frame.x, -frame.y);
 graphics.context.fill();
 if(border != null) graphics.context.stroke();
 let data = graphics.context.getImageData(point.x - frame.x, point.y - frame.y, 1, 1).data;
 graphics.clearContext();
 return data[0] > 0;
}

let placePointsInsidePolygon=function(polygon, nPoints, mode) {
 let points = new Pol();
 let frame = polygon.getFrame();
 mode = mode || 0;
 switch(mode) {
   case 0: //random simple
     var p;
     while(points.length < nPoints) {
       p = new P(frame.x + Math.random() * frame.width, frame.y + Math.random() * frame.height);
       if(polygonContainsPoint(polygon, p)) points.push(p);
     }
     return points;      
 }
}
let placePointsInsideBezierPolygon=function(polygon, nPoints, mode, border) {
 let points = new Pol();
 let frame = polygon.getFrame();
 mode = mode || 0;
 switch(mode) {
   case 0: //random simple
     var p;
     var nAttempts = 0;
     while(points.length < nPoints && nAttempts < 1000) {
       p = new P(frame.x + Math.random() * frame.width, frame.y + Math.random() * frame.height);
       nAttempts++;
       if(bezierPolygonContainsPoint(polygon, p, border)) {
         points.push(p);
         nAttempts = 0;
       }
     }
     return points;      
 }
}
let geoCoordinateToDecimal=function(value) {
 return Math.floor(value) + (value - Math.floor(value)) * 1.66667;
}
let geoDistance=function(point0, point1) {
 let a = Math.pow(Math.sin((point1.y - point0.y) * 0.5 * gradToRad), 2) + Math.cos(point0.y * gradToRad) * Math.cos(point1.y * gradToRad) * Math.pow(Math.sin((point1.x - point0.x) * 0.5 * gradToRad), 2);
 return GeoOperators_EARTH_DIAMETER * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}
let polygonLength=function(polygon) {
 if(polygon.length < 2) return 0;
  var length = geoDistance(polygon[0], polygon[1]);
 for(var i = 2; polygon[i] != null; i++) {
   length += geoDistance(polygon[i - 1], polygon[i]);
 }
 return length;
}

let minRect=function(){
 if(arguments==null || arguments.length<1) return null;
  var i;
 let frame = arguments[0].clone();
  frame.width = frame.getRight();
 frame.height = frame.getBottom();
 for(i = 1; arguments[i] != null; i++) {
   frame.x = Math.min(frame.x, arguments[i].x);
   frame.y = Math.min(frame.y, arguments[i].y);
    frame.width = Math.max(arguments[i].getRight(), frame.width);
   frame.height = Math.max(arguments[i].getBottom(), frame.height);
 }
  frame.width -= frame.x;
 frame.height -= frame.y;
  return frame;
}

let packingRectangles = function(rectangles, frame, margin=2) {
    let _rectIntersectRectangles = function(rectangles, px, py, width, height, margin) {
      var rect;
      for(var i = 0; rectangles[i] != null; i++) {
        rect = rectangles[i];
        if(px + width > (rect.x - margin) && px < (rect.x + rect.width + margin) && (py + height) > (rect.y - margin) && py < (rect.y + rect.height + margin)) return true;
      }
      return false;
    }

    let center = frame.getCenter();
    let prop = frame.width / frame.height;
    let rectanglesPlaced = new L();
    var newRectangles = new L();
    let px, py
    let w, h
    let a, r, rMax = 0

    for(let i = 0; i<rectangles.length; i++) {
        w = rectangles[i].width
        h = rectangles[i].height
        if(i === 0) {
          px = center.x - w * 0.5;
          py = center.y - h * 0.5;
        } else {
          a = i * 0.1;
          r = 0;
          while(_rectIntersectRectangles(rectanglesPlaced, px, py, w, h, margin)) {
            r += 1;
            a += r * 0.005;

            px = center.x + prop * r * Math.cos(a) - w * 0.5;
            py = center.y + r * Math.sin(a) - h * 0.5;
          }
          rMax = Math.max(rMax, prop * r + w * 0.5);
        }
        newRectangles[i] = new Rec(px, py, w, h)
        rectanglesPlaced.push(newRectangles[i])
    }

    let rectangle;
    prop = 0.5 * frame.width / rMax;
    for(let i = 0; i<newRectangles.length; i++) {
      rectangle = newRectangles[i]
      rectangle.x = center.x + (rectangle.x - center.x) * prop
      rectangle.y = center.y + (rectangle.y - center.y) * prop
      rectangle.width *= prop
      rectangle.height *= prop
    }

    return newRectangles
}

let packingCircles = function(weights, frame, margin) {
  if(weights == null ||  weights.length === 0) return null;
    var _pointInCircles = function(circles, px, py, r, margin) {
      var circle;
      for(var i = 0; circles[i] != null; i++) {
        circle = circles[i];
        if(Math.pow(circle.x - px, 2) + Math.pow(circle.y - py, 2) < Math.pow(circle.z + r + margin, 2)) return true;
      }
      return false;
    }

  margin = margin == null ? 0 : margin;

  var normWeights = _.normalizeToMax(weights).sqrt();
  var circlesPlaced = new Pol3D();

  var a = 0;
  var r = 0;
  var px = 0;
  var py = 0;
  var center = frame.getCenter();
  var rMax = normWeights[0] * 100;
  var rCircle;
  var firstR;

  var prop = frame.width / frame.height;

  for(var i = 0; i<normWeights.length; i++) {
    rCircle = normWeights[i] * 100;
    if(i === 0) {
      px = center.x;
      py = center.y;
      firstR = rCircle;
    } else {
      a = 0; //i*0.5;
      r = firstR + rCircle + margin + 0.1;
      while(_pointInCircles(circlesPlaced, px, py, rCircle, margin)) {
        r += 0.06;
        a += r * 0.003;

        px = center.x + prop * r * Math.cos(a);
        py = center.y + r * Math.sin(a);
      }
      rMax = Math.max(rMax, prop * r + normWeights[i] * 100);
    }

    circlesPlaced[i] = new _.P3D(px, py, rCircle);
  }

  var circle;
  prop = 0.5 * frame.width / (rMax + 0.001);
  for(i = 0; circlesPlaced[i] != null; i++) {
    circle = circlesPlaced[i];
    circle.x = center.x + (circle.x - center.x) * prop;
    circle.y = center.y + (circle.y - center.y) * prop;
    circle.z *= prop;
  }

  return circlesPlaced;
}


//0: quadrification
//1: vertical
//2: horizontal
//3: continental quadrigram (Africa, Asia, Australasia, Europe, North America, South America)
//4: europe quadrigram
//5:vertical strips
let fillWithRectangles=function(weights, packingMode, rectangle, param) {
 //TODO: return recL instead of L
 if(rectangle == null) rectangle = new Rec(0, 0, 1, 1);
 packingMode = packingMode ? packingMode : 0;
 switch(packingMode) {
   case 0:
     return squarify(rectangle, weights);
   case 1:
     var minMax = weights.getInterval();
     if(minMax.min < 0) {
       weights = weights.add(-minMax.min);
       minMax = new I(0, minMax.max - minMax.min);
     }
      var sum = weights.getSum();
      var rectangleList = new L(); //RectangleList();
     var dY = rectangle.y;
     var h;
     var vFactor = rectangle.height / sum;
     var i;
     for(i = 0; weights[i] != null; i++) {
       h = vFactor * weights[i];
       rectangleList.push(new Rec(rectangle.x, dY, rectangle.width, h));
       dY += h;
     }
     return rectangleList;
   case 2:
     minMax = weights.getInterval();
     if(minMax.min < 0) {
       weights = weights.add(-minMax.min);
       minMax = new I(0, minMax.max - minMax.min);
     }
     sum = weights.getSum();
      rectangleList = new L(); //RectangleList();
     var dX = rectangle.x;
     var w;
     var hFactor = rectangle.width / sum;
     for(i = 0; weights[i] != null; i++) {
       w = hFactor * weights[i];
       rectangleList.push(new Rec(dX, rectangle.y, w, rectangle.height));
       dX += w;
     }
     return rectangleList;
     //var newNumberList:nL = OperatorsNumberList.accumulationNumberList(OperatorsNumberList.normalizeNumberListToInterval(weights, new I(weights.min, 1)));
   case 3:
     if(weights.length < 6) {
      } else if(weights.length == 6) {
       var rAfrica = new Rec(0.44, 0.36, 0.16, 0.45);
       var rAsia = new Rec(0.6, 0.15, 0.3, 0.3);
       var rAustralasia = new Rec(0.72, 0.45, 0.28, 0.32);
       var rEurope = new Rec(0.38, 0.04, 0.22, 0.32);
        var pivotEuroafrasia = new P(0.6, 0.36);
       rAfrica = expandRectangle(rAfrica, Math.sqrt(weights[0]), pivotEuroafrasia);
       rAsia = expandRectangle(rAsia, Math.sqrt(weights[1]), pivotEuroafrasia);
       rEurope = expandRectangle(rEurope, Math.sqrt(weights[3]), pivotEuroafrasia);
        rAustralasia.x = rAsia.x + rAsia.width * 0.5;
       rAustralasia.y = rAsia.bottom;
       var pivotAustralasia = new P(rAustralasia.x + rAustralasia.width * 0.3, rAsia.bottom);
       rAustralasia = expandRectangle(rAustralasia, Math.sqrt(weights[2]), pivotAustralasia);
       rAustralasia.y += rAustralasia.height * 0.2;
        var pivotAmericas = new P(0.26, 0.36 + Math.max(rAfrica.height * 0.3, rEurope.height * 0.2));
        var rNorthAmerica = new Rec(0.1, pivotAmericas.y - 0.4, 0.2, 0.4);
       var rSouthAmerica = new Rec(0.22, pivotAmericas.y, 0.16, 0.5);
        rNorthAmerica = expandRectangle(rNorthAmerica, Math.sqrt(weights[4]), pivotAmericas);
       rSouthAmerica = expandRectangle(rSouthAmerica, Math.sqrt(weights[5]), pivotAmericas);
        var separation = Math.max(rEurope.width, rAfrica.width, rSouthAmerica.right - pivotAmericas.x, rNorthAmerica.right - pivotAmericas.x) * 0.2;
       var delta = Math.min(rEurope.x, rAfrica.x) - Math.max(rNorthAmerica.right, rSouthAmerica.right) - separation;
        rSouthAmerica.x += delta;
       rNorthAmerica.x += delta;
        return new L(rAfrica, rAsia, rAustralasia, rEurope, rNorthAmerica, rSouthAmerica); //RectangleList
      } else {
      }
   case 4:
     //return europeQuadrigram(weights);
   case 5:
     param = param || 0;
     var nLists;
     if(param === 0) {
       nLists = Math.round(Math.sqrt(weights.length));
     } else {
       nLists = Math.round(weights.length / param);
     }
     var nRows = Math.ceil(weights.length / nLists);
      var nMissing = nLists * nRows - weights.length;
      var average = weights.getMean();
     var weigthsCompleted = concat(weights, createListWithSameElement(nMissing, average));
     var table = slidingWindowOnList(weigthsCompleted, nRows, nRows, 0);
     var sumList = table.getSums();
     var rectangleColumns = this.fillWithRectangles(sumList, 2, rectangle);
      rectangleList = L(); //new recL();
      for(i = 0; i < nLists; i++) {
       rectangleList = concat(rectangleList, this.fillWithRectangles(table[i], 1, rectangleColumns[i]));
     }
      return rectangleList;
   case 6: //horizontal strips
 }
 return null;
}

let squarify=function(frame, weights, isNormalizedWeights, isSortedWeights) { //, funcionEvaluacionnWeights:Function=null):Array{
 if(weights == null) return;
 if(weights.length === 0) return new recL();
 if(weights.length === 1) return new recL(frame);
  isNormalizedWeights = isNormalizedWeights ? isNormalizedWeights : false;
 isSortedWeights = isSortedWeights ? isSortedWeights : false;
 let newWeightList;
  if(isNormalizedWeights) {
   newWeightList = weights; // new nL(arregloPesos);
 } else {
   newWeightList = normalizeToSum(weights);
 }
 
 let newPositions;
 if(!isSortedWeights) {
   newPositions = weights.positions==null?newWeightList.getSortIndexes():weights.positions; // sortListByNumberList();// newWeightList.sortNumericIndexedDescending();
   //newWeightList = sortListByNumberList(newWeightList, newWeightList);
   newWeightList = newWeightList.sortedWeights==null?newWeightList.getSorted(false):newWeightList.sortedWeights;
 }
  var area = frame.width * frame.height;
 let rectangleList = new recL();
 let freeRectangle = frame.clone();
 let subWeightList;
 let subRectangleList = new L(); //RectangleList();//
 let prevSubRectangleList;
 let proportion;
 let worstProportion;
 let index = 0;
 let subArea;
 let freeSubRectangle = new Rec();
 let nWeights = weights.length;
 let lastRectangle;
 let newRectangleList;
 let i, j;
  if(nWeights > 2) {
   var sum;
   for(i = index; i < nWeights; i++) {
     proportion = Number.MAX_VALUE;
     if(newWeightList[i] === 0) {
       rectangleList.push(new Rec(freeSubRectangle.x, freeSubRectangle.y, 0, 0));
     } else {
       for(j = 1; j < nWeights; j++) {
         subWeightList = nL.toL(newWeightList.slice(i, i + j)); //NumberList.toL(newWeightList.slice(i, i+j));//
         prevSubRectangleList = subRectangleList.slice(); //.clone();
         sum = subWeightList.getSum();
         subArea = sum * area;
         freeSubRectangle.x = freeRectangle.x;
         freeSubRectangle.y = freeRectangle.y;
         if(freeRectangle.width > freeRectangle.height) { //column
           freeSubRectangle.width = subArea / freeRectangle.height;
           freeSubRectangle.height = freeRectangle.height;
         } else { //fila
           freeSubRectangle.width = freeRectangle.width;
           freeSubRectangle.height = subArea / freeRectangle.width;
         }
          subRectangleList = partitionRectangle(freeSubRectangle, subWeightList, sum);
         worstProportion = subRectangleList.highestRatio; // _getHighestRatio(subRectangleList);//
         if(proportion <= worstProportion) {
           break;
         } else {
           proportion = worstProportion;
         }
       }
        if(prevSubRectangleList.length === 0) {
         rectangleList.push(new Rec(freeRectangle.x, freeRectangle.y, freeRectangle.width, freeRectangle.height)); //freeRectangle.clone());
         if(rectangleList.length == nWeights) {
           if(!isSortedWeights) {
             newRectangleList = new L(); //RectangleList();
             for(i = 0; rectangleList[i] != null; i++) {
               newRectangleList[newPositions[i]] = rectangleList[i];
             }
             return newRectangleList;
           }
           return rectangleList;
         }
         index++;
       } else {
         rectangleList = rectangleList.concat(prevSubRectangleList);
         if(rectangleList.length == nWeights) {
           if(!isSortedWeights) {
             newRectangleList = new L();
             for(i = 0; rectangleList[i] != null; i++) {
               newRectangleList[newPositions[i]] = rectangleList[i];
             }
             return newRectangleList;
           }
           return rectangleList;
         }
         index += prevSubRectangleList.length;
         lastRectangle = prevSubRectangleList[prevSubRectangleList.length - 1];
         if(freeRectangle.width > freeRectangle.height) {
           freeRectangle.x = (lastRectangle.width + lastRectangle.x);
           freeRectangle.width -= lastRectangle.width;
         } else {
           freeRectangle.y = (lastRectangle.height + lastRectangle.y);
           freeRectangle.height -= lastRectangle.height;
         }
       }
       i = index - 1;
     }
   }
 } else if(nWeights == 2) {
   subWeightList = newWeightList.clone(); //.clone();
   freeSubRectangle = frame.clone();
   rectangleList = partitionRectangle(freeSubRectangle, subWeightList, subWeightList.getSum());
 } else {
   rectangleList[0] = new Rec(frame.x, frame.y, frame.width, frame.height); //frame.clone();
 }
   if(!isSortedWeights) {
   newRectangleList = new L(); //RectangleList();//
   for(i = 0; rectangleList[i] != null; i++) {
     newRectangleList[newPositions[i]] = rectangleList[i];
   }
   return newRectangleList;
 }
  return rectangleList;
}

let partitionRectangle=function(rectangle, normalizedWeightList, sum) {
 let area = rectangle.width * rectangle.height;
 let rectangleList = new L(); //RectangleList();
 let freeRectangle = new Rec(rectangle.x, rectangle.y, rectangle.width, rectangle.height); //rectangle.clone();
 let areai;
 let i;
 let rect;
 let highestRatio = 1;
 let l = normalizedWeightList.length;
 for(i = 0; i < l; i++) {
   areai = normalizedWeightList[i] * area / sum;
   if(rectangle.width > rectangle.height) {
     rect = new Rec(freeRectangle.x, freeRectangle.y, areai / freeRectangle.height, freeRectangle.height);
     rectangleList.push(rect);
     freeRectangle.x += areai / freeRectangle.height;
     //rect.ratio = rect.width/rect.height;
   } else {
     rect = new Rec(freeRectangle.x, freeRectangle.y, freeRectangle.width, areai / freeRectangle.width);
     rectangleList.push(rect);
     freeRectangle.y += areai / freeRectangle.width;
     //rect.ratio = rect.height/rect.width;
   }
   rect.ratio = Math.max(rect.width, rect.height) / Math.min(rect.width, rect.height);
   highestRatio = Math.max(highestRatio, rect.ratio);
 }
  rectangleList.highestRatio = highestRatio;
  return rectangleList;
}
let _getHighestRatio=function(rectangleList) {
 let highestRatio = 1;
 let rectangle;
 let i;
 for(i = 0; i < rectangleList.length; i++) {
   rectangle = rectangleList[i];
   highestRatio = Math.max(highestRatio, rectangle.getRatio());
 }
 return highestRatio;
}

let simplifyPolygons=function(polygonList, margin, removeEmptyPolygons) {
 let newPolygonList = new polL();
 let newPolygon;
 for(var i = 0; polygonList[i] != null; i++) {
   newPolygon = simplifyPolygon(polygonList[i], margin);
   if(newPolygon.length > 0 || !removeEmptyPolygons) {
     newPolygonList.push(newPolygon);
   }
 }
 return newPolygonList;
}

let createPolygon=function(nPoints, mode, frame) {
 let polygon = new Pol();
  switch(mode) {
   case 0: //random
     for(var i = 0; i < nPoints; i++) {
       polygon.push(new P(frame.x + frame.width * Math.random(), frame.y + frame.height * Math.random()));
     }
     break;
   case 1: //circle
     break;
 }
  return polygon;
}

let twoNumberListsToPolygon=function(nl0, nl1) { //TODO:change name to NumberTableToPolygon
 let n = Math.min(nl0.length, nl1.length);
 let polygon = new Pol();
 for(var i = 0; i < n; i++) {
   polygon[i] = new P(nl0[i], nl1[i]);
 }
 return polygon;
}

let colorListFromColorScale=function(colorScale, nColors) {
 return colorScale.getColorList.apply(colorScale, [nColors]);
}
let colorListFromColorScaleFunction=function(colorScaleFunction, nColors) {
 let colorList = new cL();
 let i;
 for(i = 0; i < nColors; i++) {
   colorList[i] = colorScaleFunction(i / (nColors - 1));
 }
 return colorList;
}

//mixColors
let colorsLinearCombination=function(colorList, weights) {
 if(colorList==null || colorList.length==0) return;
 if(colorList.length==1) return colorList[0];
  if(weights==null) weights = createListWithSameElement(colorList.length,1);
  weights = normalizeToSum(weights);
  var rgb = colorStringToRGB(colorList[0], weights[0]);
 let rgbN;
  for(var i=1; i<colorList.length; i++){
   rgbN = colorStringToRGB(colorList[i], weights[i]);
   rgb[0]+=rgbN[0];
   rgb[1]+=rgbN[1];
   rgb[2]+=rgbN[2];
 }
  return 'rgb('+Math.floor(rgb[0])+','+Math.floor(rgb[1])+','+Math.floor(rgb[2])+')';
}

let polygon3DToColorList=function(polygon3D) {
 let nPoints = polygon3D.length;
 let colorList = new cL();
 let i;
 for(i = 0; i < nPoints; i++) {
   colorList.push(point3DToColor(polygon3D[i]));
 }
 return colorList;
}
let colorListToPolygon3D=function(colorList) {
 let nColors = colorList.length;
 let polygon3D = new Pol3D();
 let i;
 for(i = 0; i < nColors; i++) {
   polygon3D.push(colorToPoint3D(colorList[i]));
 }
 return polygon3D;
}

let randomColor=function(alpha) {
 alpha = alpha == null ? 1 : alpha;
 return 'rgba(' + Math.floor(256 * Math.random()) + ',' + Math.floor(256 * Math.random()) + ',' + Math.floor(256 * Math.random()) + ',' + alpha + ')';
}
let getFlowTable=function(numberTable, normalized, include0s) {
 if(numberTable == null) return;
  normalized = normalized || false;
 let nElements = numberTable.length;
 let nRows = numberTable[0].length;
 let nl;
 let minList = new nL();
 let maxList = new nL();
 let sums = new nL();
 let minInRow;
 let maxInRow;
 let sumInRow;
 let MAX = -9999999;
 let MIN = 9999999;
 let MAXSUMS = -9999999;
 let i, j;
 for(i = 0; i < nRows; i++) {
   minInRow = 9999999; //TODO: what's the max Number?
   maxInRow = -9999999;
   sumInRow = 0;
   for(j = 0; j < nElements; j++) {
     nl = numberTable[j];
     if(nl.length != nRows) return;
      maxInRow = Math.max(maxInRow, nl[i]);
     minInRow = Math.min(minInRow, nl[i]);
     sumInRow += nl[i];
   }
   minList.push(minInRow);
   maxList.push(maxInRow);
   sums.push(sumInRow);
   MIN = Math.min(MIN, minInRow);
   MAX = Math.max(MAX, maxInRow);
   MAXSUMS = Math.max(MAXSUMS, sumInRow);
 }
  var dMINMAX = MAXSUMS - MIN;
 let flowTable = new nT();
 let flowNumberList;
 let minToNormalize;
 let maxToNormalize;
  var include0Add = include0s ? 1 : 0;
   if(normalized && include0s) {
   flowTable = new nT(numberTable.length + 1);
    numberTable[0].forEach(function() {
     flowTable[0].push(0);
   });
    numberTable.forEach(function(list, iList) {
     list.forEach(function(val, j) {
       var sum = sums[j];
       flowTable[iList + 1][j] = val / (sum === 0 ? 0.00001 : sum) + flowTable[iList][j];
     });
   });
    return flowTable;
 }
  flowTable = new nT();
  if(!normalized) {
   minToNormalize = MIN;
   maxToNormalize = dMINMAX;
 } else {
   minToNormalize = Math.max(MIN, 0);
 }
 for(i = 0; i < nElements; i++) {
   flowNumberList = new nL();
   flowTable.push(flowNumberList);
 }
 if(include0s) flowTable.push(new nL());
  for(i = 0; i < nRows; i++) {
   nl = numberTable[0];
   if(normalized) {
     maxToNormalize = sums[i] - minToNormalize;
   }
   if(include0s) {
     flowTable[0][i] = 0;
   }
   if(maxToNormalize === 0) maxToNormalize = 0.00001;
   flowTable[include0Add][i] = (nl[i] - minToNormalize) / maxToNormalize;
   for(j = 1; j < nElements; j++) {
     nl = numberTable[j];
     flowTable[j + include0Add][i] = ((nl[i] - minToNormalize) / maxToNormalize) + flowTable[j - 1 + include0Add][i];
   }
 }
  return flowTable;
}
let getFlowTableIntervals=function(numberTable, normalized, sorted, stacked) {
 if(numberTable == null) return null;
  var table = getFlowTable(numberTable, normalized, true);
  var intervalTable = new T();
 let i, j;
  var nElements = table.length;
 let nRows = table[0].length;
  var intervalList;
  var maxCols = new nL();
  var nl;
 for(i = 1; i < nElements; i++) {
   nl = table[i];
   intervalList = new L();
   intervalTable[i - 1] = intervalList;
   for(j = 0; j < nRows; j++) {
     intervalList.push(new I(table[i - 1][j], table[i][j]));
     if(i == nElements - 1) maxCols[j] = table[i][j];
   }
  }
  var interval;
 if(sorted) {
   var amplitudes;
   var yy;
   for(j = 0; j < nRows; j++) {
     amplitudes = new nL();
     intervalList = intervalTable[i];
     for(i = 0; i < nElements - 1; i++) {
       amplitudes.push(intervalTable[i][j].getAmplitude());
     }
     var indexes = amplitudes.getSortIndexes();
      yy = (normalized || stacked) ? 0 : (1 - maxCols[j]) * 0.5;
      for(i = 0; i < nElements - 1; i++) {
       interval = intervalTable[indexes[i]][j];
       interval.y = yy + interval.getAmplitude();
       interval.x = yy;
       yy = interval.y;
     }
   }
 } else if(!normalized) {
   for(j = 0; j < nRows; j++) {
     for(i = 0; i < nElements - 1; i++) {
       interval = intervalTable[i][j];
       if(stacked) {
         intervalTable[i][j].x = 1 - intervalTable[i][j].x;
         intervalTable[i][j].y = 1 - intervalTable[i][j].y;
       } else {
         intervalTable[i][j] = interval.add((1 - maxCols[j]) * 0.5);
       }
     }
   }
 }
  return intervalTable;
}
let scaleIntervals=function(intervalList, value) {
if(intervalList==null) return;
  value = value==null?1:value;
  var newIntervalList = new L();
 let l = intervalList.length;
 let i;
  newIntervalList.name = intervalList.name;
  for(i = 0; i<l; i++) {
   newIntervalList[i] = intervalList[i].getScaled(value);
 }
  return newIntervalList;
}
let nlsToIntervalList=function(nl0, nl1, bAmplitude) {
 if(nl0==null || nl1==null) return;
 bAmplitude = bAmplitude ==  null ? false : bAmplitude;
  var l = Math.min(nl0.length, nl1.length);
 let i;
 let intervalList = new iL();
  if(bAmplitude){
   nl1 = addition(nl0,nl1);
 }
 for(i=0; i<l; i++){
   intervalList.push(new I(nl0[i], nl1[i]));
 }
  return intervalList;
}

let fillTextRectangle=function(text, x, y, width, height, lineHeight, returnHeight, ellipsis, metacanvas, bHorizontalCenter, bVerticalCenter) {
 bHorizontalCenter = bHorizontalCenter == null ? false : bHorizontalCenter;
 bVerticalCenter = bVerticalCenter == null ? false : bVerticalCenter;
 let textLines = textWordWrapReturnLines(text, width, height, lineHeight, ellipsis, metacanvas);
 if(bVerticalCenter){
   // the 16 and 600 defaults come from textWordWrapReturnLines
   var lh = lineHeight == null ? 16 : lineHeight;
   var h = height == null ? 600 : height;
   var hText = lh*textLines.length;
   y += (h - hText)/2;
 }
 let alignPrev = metacanvas.context.textAlign; // preserve because we want to set it back
 if(bHorizontalCenter){
   metacanvas.context.textAlign = 'center';
   var w = width == null ? 100 : width;
   x += w/2;
 }
 let ret = fillTextRectangleWithTextLines(textLines, x, y, height, lineHeight, returnHeight, metacanvas);
 metacanvas.context.textAlign = alignPrev;
 return ret;
}
let fillTextRectangleWithTextLines=function(textLines, x, y, height, lineHeight, returnHeight, metacanvas) {
 height = height === 0 || height == null ? 99999 : height;
  for(var i = 0; textLines[i] != null; i++) {
   metacanvas.context.fillText(textLines[i], x, y + i * lineHeight);
   if((i + 2) * lineHeight > height) break;
 }
 if(returnHeight) return textLines.length * lineHeight;
 return textLines.length;
}
let textWordWrapReturnLines=function(text, fitWidth, fitHeight, lineHeight, ellipsis, metacanvas) {
 fitWidth = fitWidth || 100;
 fitHeight = fitHeight || 600;
 lineHeight = lineHeight || 16;
  var nLinesLimit = lineHeight === 0 ? -1 : Math.floor(fitHeight / lineHeight);
 let lines = new sL();
  if(fitWidth <= 0) {
   lines.push(text);
   return lines;
 }
  var sentences = text.split(/\\n|\n/);
 let i;
 let currentLine = 0;
 let words;
 let idx;
 let str;
 let w;
 let sentence;
  for(i = 0; i < sentences.length; i++) {
   if(sentences[i] === '') {
     lines.push('');
     currentLine++;
     continue;
   }
   // shortcut to avoid measuring word by word, performance opt
   if(metacanvas.context.measureText(sentences[i]).width < fitWidth && lines.length < nLinesLimit){
     lines.push(sentences[i]);
     continue;
   }
   words = sentences[i].split(' ');
   idx = 1;
   while(words.length > 0 && idx <= words.length) {
     str = words.slice(0, idx).join(' ');
     w = metacanvas.context.measureText(str).width;
     if(w > fitWidth) {
       if(idx == 1) idx = 2;
       sentence = words.slice(0, idx - 1).join(' ');
       if(sentence !== '') lines.push(sentence);
       if(lines.length == nLinesLimit) {
         if(ellipsis) {
           var lastLine = lines[lines.length - 1];
           if(metacanvas.context.measureText(lastLine + "…").width <= fitWidth) {
             lines[lines.length - 1] += "…";
           } else {
             words = lastLine.split(" ");
             sentence = words.slice(0, words.length - 1).join(" ") + "…";
             lines.push(sentence);
           }
         }
         return lines;
       }
       currentLine++;
       words = words.splice(idx - 1);
       idx = 1;
     } else {
       idx++;
     }
   }
   if(idx > 0) {
     sentence = words.join(' ');
     if(sentence !== '') lines.push(sentence);
   }
   currentLine++;
 }
  lines.width = lines.length == 1 ? w : fitWidth;
  return lines;
}
let getMaxTextWidth=function(texts, k) {
 let max = k.getTextW(texts[0]);
 for(var i = 1; texts[i] != null; i++) {
   max = Math.max(max, k.getTextW(texts[i]));
 }
 return max;
}

let stringToObject=function(string) {
 try {
   return JSON.parse(string);
 } catch(err) {
   // fall through and try some common quasi-json formats
 }
 if(string == null) return null;
 // often we have a list of objects on separate lines without enclosing [] or commas between
 let aObjs = string.split(/\r?\n/);
 let s='[';
 let sAdded, bAddedItem = false;
 for(var i = 0; i<aObjs.length; i++){
   if(aObjs[i].trim().length == 0) continue;
   if(aObjs[i] == '{'){
     // assume each object definition spread across multiple lines
     sAdded = '';
     while(aObjs[i] != '}' && i < aObjs.length){
       sAdded += ' ' + aObjs[i];
       i++;
     }
     sAdded += '}';
   }
   else
     sAdded = aObjs[i];
   sAdded = (bAddedItem ? ',\r\n' : '\r\n') + sAdded;
   bAddedItem = true;
   s += sAdded;
 }
 s += '\r\n]';
 try {
   return JSON.parse(s);
 } catch(err) {
   return null;
 }
}

let stringToHash=function(str,m,k) {
 // Fowler/Noll/Vo hashing
 // from https://github.com/jasondavies/bloomfilter.js/blob/master/bloomfilter.js
 if(str == null) return null;
 m = m == null ? 4294967295 : m;
 k = k == null ? 1 : k;
 let x,i,c,d,n,a = 2166136261;
 for(i = 0, n = str.length; i < n; ++i){
   c = str.charCodeAt(i);
   d = c & 0xff00;
   if(d) a = _fnv_multiply(a ^ d >> 8);
   a = _fnv_multiply(a ^ c & 0xff);
 }
 a = _fnv_mix(a);
 x = a % m;
 let b = k == 1 ? 0 : _fnv_mix(_fnv_multiply(a));
 let nL = [];
 for(i = 0;i < k;i++){
   nL.push(x < 0 ? (x + m) : x);
   x = (x + b) % m;
 }
 if(k == 1)
   return nL[0];
 return nL;
}
let _fnv_multiply=function(a){
 // a * 16777619 mod 2**32, part of Fowler/Noll/Vo hashing.
 return a + (a << 1) + (a << 4) + (a << 7) + (a << 8) + (a << 24);
}
let _fnv_mix=function(a){
 // part of Fowler/Noll/Vo hashing.
 // See https://web.archive.org/web/20131019013225/http://home.comcast.net/~bretm/hash/6.html
 a += a << 13;
 a ^= a >>> 7;
 a += a << 3;
 a ^= a >>> 17;
 a += a << 5;
 return a & 0xffffffff;
}

//failing
let decodeIdentedTree=function(indexedTreeText, superiorNodeName, identationCharacter) {
 superiorNodeName = superiorNodeName == null ? "" : superiorNodeName;
 identationCharacter = identationCharacter == null ? "\t" : identationCharacter;
  var tree = new Tr();
  var lines = splitByEnter(indexedTreeText);
 let nLines = lines.length;
  if(nLines === 0 ||  (nLines == 1 && (lines[0] == null || lines[0] === ""))) return null;
  var i;
 let j;
  var line;
 let lineLength;
 let name;
 let level;
  var node;
 let parent;
 let superiorNode;
  if(superiorNodeName !== "" && superiorNodeName != null) {
   superiorNode = new Nd(superiorNodeName, superiorNodeName);
   tree.addNodeToTree(superiorNode, null);
 }
  for(i = 0; i < nLines; i++) {
   line = lines[i];
   lineLength = line.length;
   //c.log('line:'+line);
   for(j = 0; j < lineLength; j++) {
     if(line.charAt(j) != identationCharacter) {
       name = line.substr(j);
       break;
     }
   }
    node = new Nd(line, name);
   //c.log("+ ", name);
   if(j === 0) {
     if(superiorNode != null) {
       tree.addNodeToTree(node, superiorNode);
     } else {
       tree.addNodeToTree(node, null);
     }
   } else {
     level = j + 1 - Number(superiorNode == null);
     if(tree.getLevel(level - 1) != null && tree.getLevel(level - 1).length > 0) {
       parent = tree.getLevel(level - 1)[tree.getLevel(level - 1).length - 1];
     } else {
       parent = null;
     }
     //c.log("   ", node.name, "---------->>", parent.name);
     tree.addNodeToTree(node, parent);
   }
 }
  tree.assignDescentWeightsToNodes();
  return tree;
}

//not working properly with let table = new _.T(["a","b", "c"].toL(),["b","c", "d"].toL())
let TableToTree=function(table, fatherName, colorsOnLeaves, colorAssignmentMode, colorDeepest, nLWeights, colors, iTableMode)  {
 if(table == null) return;
  if(table.length===0){
   throw new Error("T has no Lists");
 } else if(table[0]===null){
   throw new Error("table[0] is null");
 } else if(nLWeights != null && nLWeights.length != table[0].length){
   throw new Error("weightsList must have a value for each row in the table");
 } else if(colors != null && colors.length != table[0].length){
   throw new Error("colors list must have a value for each row in the table");
 }
  fatherName = fatherName == null ? table[0].name : fatherName;
 colorAssignmentMode = colorAssignmentMode == null ? 0 : colorAssignmentMode;
 colorDeepest = colorDeepest == null  || colorDeepest == '' ? 'rgb(255,255,255)' : colorDeepest;
 iTableMode = iTableMode == null ? 0 : iTableMode;
  if(nLWeights != null && nLWeights.getMin() < 0)
   nLWeights = normalizeToInterval(nLWeights,new I(0,1));
  var tree = new Tr();
 let node, parent;
 let id;
  var father = new Nd(fatherName, fatherName);
 tree.addNodeToTree(father, null);
  var nLists = table.length;
 //var nElements = table[0].length;
 let i, j;
 let list, element, iListToColorFrom;
 let leavesColorsDictionary;
  if(colorsOnLeaves){
   if(colorAssignmentMode == 0)
     iListToColorFrom = nLists-1;
   else  
     iListToColorFrom = 0;
   if(colors){
     var colorDictTable = T.toL([table[iListToColorFrom], colors]);
     leavesColorsDictionary = buildDictionaryObjectForDictionary(colorDictTable);
   }
   else
     leavesColorsDictionary = createCategoricalColorListForList(table[iListToColorFrom])[4].value;
 }
  if(iTableMode == 1){
   if(table.length != 2) throw new Error("T must have 2 Lists for parent-child mode");
   var sLCurrent = difference(table[0].getWithoutRepetitions(),table[1].getWithoutRepetitions());
   if(sLCurrent.length == 0) throw new Error("Invalid data for a tree. Likely has loops in the relationships.")
   for(i=0; i < sLCurrent.length;i++){
     node = new Nd(String(sLCurrent[i]), String(sLCurrent[i]));
     tree.addNodeToTree(node,father);
   }
   var sLChildren, nodec, nodep;
   // traverse table rows processing any that have parent in sLCurrent, save the children
   while(sLCurrent.length > 0){
     sLChildren = new sL();
     for(i=0;i<table[0].length;i++){
         if(sLCurrent.indexOfElement(table[0][i]) == -1) continue;
         nodep = tree.nodes.get(String(table[0][i]));
         if(nodep == null) new Error('Invalid data for a tree. Nd '+String(table[0][i])+ ' not found as parent')
         nodec = tree.nodes.get(String(table[1][i]));
         if(nodec != null) throw new Error('Invalid data for a tree. Nd '+String(table[1][i])+ ' has multiple parents.')
         nodec = new Nd(String(table[1][i]), String(table[1][i]));
         if(colorsOnLeaves && colorAssignmentMode == 0) {
             nodec.color = leavesColorsDictionary[String(table[1][i])];
         }
         else if( colorsOnLeaves && (colorAssignmentMode == 1 || colorAssignmentMode == 2) ) {
             nodec.color = leavesColorsDictionary[String(table[1][i])];
         }
         sLChildren.push(String(table[1][i]));
         tree.addNodeToTree(nodec,nodep);
         // addNodeToTree sets .weight property to 1
         if(nLWeights != null)
             nodec.weight = nLWeights[i];
     }
     sLCurrent = sLChildren.clone();
   }
 }
 else{
   for(i=0; i<nLists; i++){
     if (table[i] == null) continue;
     list = table[i];
     //if(list.length!=nElements) return null;
      for(j=0; j<list.length; j++){
       element = list[j];
        if(element!=null){
         id = _getId(table, i, j);
         node = tree.nodes.get(id);
         if(node == null) {
           node = new Nd(id, String(element));
            if( colorsOnLeaves && i==(nLists-1) && colorAssignmentMode == 0) {
              node.color = leavesColorsDictionary[element];
           }
           else if( colorsOnLeaves && (colorAssignmentMode == 1 || colorAssignmentMode == 2) ) {
              node.color = leavesColorsDictionary[table[0][j]];
           }
            if(i === 0) {
             tree.addNodeToTree(node, father);
           } else {
              parent = tree.nodes.get(_getId(table, i - 1, j));
              tree.addNodeToTree(node, parent);
           }
            node.firstIndexInTable = j;
           node.indexesInTable = new nL(j);
            if(nLWeights != null)
             node.weight = nLWeights[j];
          } else {
           if(nLWeights != null)
             node.weight+= nLWeights[j];
           else
             node.weight++;
            node.indexesInTable.push(j);
         }
       }
     }
   }
 }
  if(colorsOnLeaves && colorAssignmentMode == 2){
   for(i=0; i < tree.nodes.length; i++){
     node = tree.nodes[i];
     if(node.level == 0)
       node.color = colorDeepest;
     else{
       node.color = interpolateColors(node.color,colorDeepest,(node.level-1)/(tree.nLevels-1) );
     }
   }
 }
 tree.assignDescentWeightsToNodes();
  var _assignIndexesToNode = function(node) {
    var i;
   if(node.to.length === 0) {
     return node.indexesInTable;
   } else {
     node.indexesInTable = new nL();
   }
   for(i = 0; node.to[i] != null; i++) {
     node.indexesInTable = node.indexesInTable.concat( _assignIndexesToNode(node.to[i]) );
   }
   return node.indexesInTable;
 };
  _assignIndexesToNode(tree.nodes[0]);
  return tree;
}
let _getId=function(table, i, j) {
 let iCol = 1;
 let id = "_"+String(table[0][j]);
 while(iCol <= i) {
   id += "_" + String(table[iCol][j]);
   iCol++;
 }
 return id;
}

let buildTagsTree = function(tagsList, namesList, colors, minOccurrences=0, limitSons, stopSplittingAt){

    //TODO
    //stopSplittingAt: when number of indexes is higher, stops splitting

    let tree = new Tr()
    let node


    let allTags = new sL()
    tagsList.forEach(tags=>allTags=allTags.concat(tags.split(",").tosL().trim()))

    let tagsFreq =  allTags.getFrequenciesTable()
    tagsFreq = filterTable(tagsFreq, ">=", minOccurrences, tagsFreq[1])


    let addSons = function(node, tags_covered){
        let subTags = tagsList.filter(tags=>{
            for(let i=0; i<tags_covered.length; i++){
                if(!tags.includes(tags_covered[i])) return false
            }
            return true
        })

        allTags = new sL()
        subTags.forEach(tags=>allTags=allTags.concat(tags.split(",").tosL().trim()))
        allTags = allTags.filter(tag=>!tags_covered.includes(tag)).toL()
        
        let tagsFreq =  allTags.getFrequenciesTable()
        tagsFreq = filterTable(tagsFreq, ">=", minOccurrences, tagsFreq[1])

        let tags = tagsFreq[0]
        if(limitSons) tags = tags.slice(0, limitSons)

        if(tags.length>1){

            tags.forEach(tag=>{
                const id = node.id+"_"+tag
                //console.log(id)
                const son = new Nd(id, tag)
                son.color = "rgb(245,245,245)"
                son.tags = tags_covered.concat([tag])
                tree.addNodeToTree(son, node)
                addSons(son, son.tags)
            })
        }

    }

    let top = new Nd("_", "tags")
    top.color = "rgb(245,245,245)"
    tree.addNodeToTree(top, null)

    let tags = tagsFreq[0]
    if(limitSons) tags = tags.slice(0, limitSons)

    tags.forEach(tag=>{
        node = new Nd(tag, tag)
        node.color = "rgb(245,245,245)"
        node.tags = [tag]
        tree.addNodeToTree(node, top)
        addSons(node, node.tags)
    })


    if(namesList){
        let leaves = tree.getLeaves()

        leaves.forEach(leaf=>{
            tagsList.forEach((tags,i)=>{
                //all leaf.tags in tags
                for(let i=0; i<leaf.tags.length; i++){
                    if(!tags.includes(leaf.tags[i])) return
                }
                const node = new Nd(namesList[i],namesList[i])
                node.color = colors?colors[i]:"rgb(230,240,255)"
                tree.addNodeToTree(node, leaf)
                node.indexes = new nL(i)
                if(!node.parent.indexes) node.parent.indexes = new nL()
                node.parent.indexes.pushIfUnique(i)
            })
        })

        
        ///////////////////////////////////////////////
        //mark brother nodes that have same indexes, so they will be fused

        let setIndexesId = function(node){
            if(node.to.length==0) return
            if(!node.indexes) node.indexes = new nL()
            node.to.forEach(son=>{
                setIndexesId(son)
                son.indexes.forEach(index=>{
                    node.indexes.pushIfUnique(index)
                })
            })
            node.indexes = node.indexes.getSorted()
            node.indexId = node.indexes.join("_")
        }

        setIndexesId(tree.nodes[0])

        let markAllSonsSameIndexes = function(node){
            node.to.forEach
        }

        tree.nodes.forEach(node=>{
            if(node.to.length==0 || node.to[0].to.length==0) {
                node.allSonsSameIndexes = false
                return
            }
            node.allSonsSameIndexes = true
            let sons_indexId = node.to[0].indexId
            for(let i=1; i<node.to.length; i++){
                if(node.to[i].indexId!=sons_indexId){
                    node.allSonsSameIndexes = false
                    return
                }
            }
        })

        


        /////////////////////////////////////////
        //builds a new tree

        let newTree = new Tr()

        let replicateSons = function(node, newNode){
            if(node.allSonsSameIndexes || node.indexes<6){
                let leaf = node.to[0]
                while(leaf.to[0].to.length>0) {
                    leaf = leaf.to[0]
                }
                
                leaf.to.forEach(son=>{
                    const newSon = new Nd(son.id, son.name)
                    newSon.color = son.color
                    newTree.addNodeToTree(newSon, newNode)
                })
                return
            }
            node.to.forEach(son=>{
                const newSon = new Nd(son.id, son.name)
                newSon.color = son.color
                newTree.addNodeToTree(newSon, newNode)
                replicateSons(son, newSon)
            })
        }

        let top = new Nd("_", "tags")
        top.color = tree.nodes[0].color
        newTree.addNodeToTree(top, null)

        replicateSons(tree.nodes[0], top)

        tree = newTree

    }

   

    return tree
}

//not working properly
let TreeToTable=function(tree, includes_superior_node,valuesDifferentation) {
   if(tree==null) return;
   includes_superior_node = includes_superior_node==null?true:includes_superior_node;
   valuesDifferentation = valuesDifferentation==null?false:valuesDifferentation;
    var table = new T();
   var leaves = tree.getLeaves();
   var chain;
   var name;
    var noBrotherWithSameName = function(col, name, parentName){
     if(col==0) return false;
     for(var i=0;i<table[col].length;i++){
       if(table[col][i]==name && table[col-1][i]!=parentName) return true;
     }
     return false;
   };
    if(!valuesDifferentation) noBrotherWithSameName = function(){return false};
   
   for(var i=0; i<leaves.length; i++){
       chain = tree.getAncestorsOf(leaves[i]).reverse();
       chain.addNode(leaves[i]);
       if(!includes_superior_node) chain = chain.slice(1);
       for(var j=chain.length-1; j>=0; j--){
           if(table[j]==null) table[j]=new sL();
           name = chain[j].name;
           while(noBrotherWithSameName(j, name, j>0?chain[j-1].name:"")) name+="´";
           table[j][i] = name;
       }
   }
    return table;
}


let treeToObject=function(tree,bAll) {
 if(tree == null || tree.type != 'Tr') return null;
 let oOutput = {};
 let aCurrentParentObjects = [oOutput];
 let curLevel = 0, o;
 let aBareProperties = ['name','id','level','weight','color'];
 let nodes = tree.traverse(null,null,function(nd){
   if(nd.level == 0)
     o = oOutput;
   else{
     o = {};
     aCurrentParentObjects[nd.level].push(o);
   }
   for(var p in nd){
     if(p == 'type' && nd.level == 0) continue;
     if(!bAll && !aBareProperties.includes(p)) continue;
     if(typeof nd[p] != 'object' && nd[p] != null){
       o[p] = nd[p];
     }
   }
   if(nd.to.length > 0){
     o.children = [];
     aCurrentParentObjects[nd.level+1] = o.children;
   }
   return true;
 });
 return oOutput;
}

/*
let objectToTree=function(obj) {
 if(obj == null) return null;
 let tree = new Tr();
  var fnAddObjectToTree = function(tr,parentNode,o){
   var name = o.name != null ? o.name : '';
   var id = o.id != null ? o.id : '_' + name;
   if(tr.nodes.get(id) != null){
     // already exists, make it unique
     id = tr.nodes.getNewId();
   }
   var nd = new Nd(id, name);
   tr.addNodeToTree(nd, parentNode);
   var bFirstArray = true;
   for(var i in o){
     if(i == 'id' || i == 'name') continue;
     if(Object.prototype.toString.call(o[i]) == "[object Array]"){
       if(bFirstArray){
         for(var j=0;j<o[i].length;j++)
           fnAddObjectToTree(tr,nd,o[i][j]);
         bFirstArray = false;
       }
       else{
         // just add the array as a property of node
         // clone it using stringify
         nd[i] = JSON.parse(JSON.stringify(o[i]));
       }
       continue;
     }
     // otherwise we have a simple property
     nd[i] = o[i];
   }
 }
  fnAddObjectToTree(tree,null,obj);
  return tree;
}
*/

/**
mode 0: selects n relations
mode 1: selects relations with weight>n
**/
let filterNetworkByRelationsWeight=function(net, mode = 0, n, nodeProperties, relationProperties){
  let newnet = new _.Net()

  let filteredRelations

  switch(mode){
    case 0:
      filteredRelations = net.relations.getSortedByProperty('weight', false).slice(0,n)
      break
    case 1:
      filteredRelations = net.relations.filter(r=>r.weight>n)
      break
  }

  filteredRelations.forEach(r=>{
    let n0 = newnet.createNode(r.node0.name)
    let n1 = newnet.createNode(r.node1.name)
    if(nodeProperties) nodeProperties.forEach(pn=>{
      n0[pn] = r.node0[pn]
      n1[pn] = r.node1[pn]
    })
    let newr = newnet.createRelation(n0, n1)
    if(relationProperties) relationProperties.forEach(pn=>{
      newr[pn] = r[pn]
    })
    newr.weight = r.weight
    newr.color = r.color
  })

  return newnet

}

let filterNodesByMinDegree=function(network, minDegree) {
 let i;
 for(i = 0; network.nodes[i] != null; i++) {
   if(network.nodes[i].nodes.length < minDegree) {
     network.removeNode(network.nodes[i]);
     i--;
   }
 }
 return null;
}
let degreeBetweenNodes=function(network, node0, node1) {
 if(network == null || node0 == null || node1 == null) return null;
  if(node0 == node1) return 0;
 let nodes = node0.nodes;
 let d = 1;
 let newNodes;
 let i;
 let nNodes;
  //while(nodes.indexOf(node1)==-1){//TODO: check if get is faster
 while(nodes.get(node1.id) == null) {
   newNodes = nodes.clone();
   nNodes = nodes.length;
   for(i = 0; i<nNodes; i++) {
     newNodes = concat(newNodes, nodes[i].nodes); //TODO: check if obsolete concat + check if a concatIfNew could be useful, specially if overriden in ndL, with get
   }
   newNodes = newNodes.getWithoutRepetitions();
   if(nodes.length == newNodes.length) return -1;
   nodes = newNodes;
   d++;
 }
  return d;
}
let getNodesBetweenTwoNodes=function(network, node0, node1){
 let nodes = new ndL();
 let nNodes = network.nodes.length;
 let i;
 let node;
 //network.nodes.forEach(function(node){
 for(i=0; i<nNodes; i++){
   node = network.nodes[i];
   if(node.id!=node0.id && node.id!=node1.id && node0.nodes.get(node.id)!=null && node1.nodes.get(node.id)!=null) nodes.addNode(node);
 }
 return nodes;
}
let getSubNetwork=function(net, nodes, nodePropertyNames, relationPropertyNames){
 let newNet = new Net();
 let node, node1, relation;
  for (var i = 0; i < nodes.length; i++) {
   node = new Nd(nodes[i].id, nodes[i].name);
   newNet.addNode(node);
    //node properties
   if(nodePropertyNames){
     for (var j = 0; j < nodePropertyNames.length; j++) {
       node[nodePropertyNames[j]] = nodes[i][nodePropertyNames[j]];
     }
   }
 }
   for(i=0; i<net.relations.length; i++){
   node = newNet.nodes.get(net.relations[i].node0.id);
   node1 = newNet.nodes.get(net.relations[i].node1.id);
   if(node!=null && node1!=null){
     relation = new Rel(net.relations[i].id, net.relations[i].name, node, node1, net.relations[i].weight);
     newNet.addRelation(relation);
      //relation properties
     if(relationPropertyNames){
       for (j = 0; j < relationPropertyNames.length; j++) {
         relation[relationPropertyNames[j]] = net.relations[i][relationPropertyNames[j]];
       }
     }
   }
 }
  return newNet;
}
let shortestPath=function(network, node0, node1, includeExtremes) {
 if(network == null || node0 == null || node1 == null) return null;
  var tree = spanningTree(network, node0, node1);
 let path = new ndL();
 if(includeExtremes) path.addNode(node1);
 let node = tree.nodes.get(node1.id);
  if(node == null) return null;
  while(node.parent.id != node0.id) {
   path.addNode(node.parent.node);
   node = node.parent;
   if(node == null) return null;
 }
  if(includeExtremes) path.addNode(node0);
 return path.getReversed();
}
let shortestPaths=function(network, node0, node1, shortPath, spTree) {
 if(network == null || node0 == null || node1 == null) return null;
  var i;
 let allPaths = new T();
  if(node0.nodes.get(node1.id)!=null){
   allPaths.push(new ndL(node0, node1));
   return allPaths;
 }
  if(spTree==null) spTree = spanningTree(network, node0, node1);
  var n = spTree.nLevels;
 
 let level1 = new ndL(node1);
 let extended_from_1 = adjacentNodeList(network, level1, false);
 let level0 = intersection(extended_from_1, spTree.getLevel(n-2));//spanningTree.getLevel(n-2);
  var relationsTable = new T();
 let relationsBetween;
  relationsTable.push(getRelationsBetweenNodeLists(network, level0, level1, false));
  while(n>2){
   n--;
   level1 = level0;
    level0 = intersection(adjacentNodeList(network, level1, false), spTree.getLevel(n-2));
   relationsBetween = getRelationsBetweenNodeLists(network, level0, level1, false);
   
   relationsTable.push(relationsBetween);
 }
  relationsTable = relationsTable.getReversed();
  for(i=0; relationsTable[0][i]!=null; i++){
   allPaths.push( new ndL(node0, relationsTable[0][i].getOther(node0)) );
 }
  var newPaths;
  var _findNewPaths = function(path, relations){
   var newPaths = new T();
   var finalNode = path.at(-1)//[path.length-1];
   var newPath;
   relations.forEach(function(relation){
     if(finalNode.relations.get(relation.id)){
       newPath = path.clone();
       newPath.addNode(relation.getOther(finalNode));
       newPaths.push(newPath);
     }
   });
    return newPaths;
 };
  var toAdd;
 let nPaths;
 let path;
 if(allPaths.length==0) return allPaths

  while(allPaths[0].length<spTree.nLevels){
   
   newPaths = new T();
   nPaths = allPaths.length;
    for(i=0; i<nPaths; i++){
     path = allPaths[i];
     toAdd = _findNewPaths(path, relationsTable[path.length-1]);
     newPaths = newPaths.concat(toAdd);
   }
   allPaths = newPaths;
 }
  return allPaths;
}
let getRelationsBetweenNodeLists=function(network, nodes0, nodes1, directed=true){
 if(nodes0==null || nodes1==null) return null
  var relations = new relL();
 let nRelations = network.relations.length;
 let relation;
 let i;
  for(i=0; i<nRelations; i++){
   relation = network.relations[i];
   if(
     (nodes0.get(relation.node0.id)!=null && nodes1.get(relation.node1.id)!=null) ||
     (!directed && nodes0.get(relation.node1.id)!=null && nodes1.get(relation.node0.id)!=null)
   ){
     relations.addRelation(relation);
   }
 }
  return relations;
}
let _extendPaths=function(allPaths, nodeDestiny, maxLength) {
  if(allPaths[0].length >= maxLength) return allPaths;
  var i, j;
 let next;
 let node;
  var newPaths = new T();
 let path, newPath;
 let nPaths = allPaths.length;
 let nNext;
  for(i = 0; i<nPaths; i++) {
   path = allPaths[i];
   node = path[path.length - 1];
   next = node.nodes.getWithoutRepetitions();
   nNext = next.length;
    for(j = 0; j<nNext; j++) {
     if(path.get(next[j].id) == null) {
       newPath = path.clone();
       newPath.addNode(next[j]);
       newPaths.push(newPath);
     }
   }
  }
  allPaths = newPaths;
  return _extendPaths(allPaths, nodeDestiny, maxLength);
}
let loops=function(network, minSize=3) {
 if(network == null) return null

 let _sameLoop = function(loop0, loop1) {
      if(loop0.length != loop1.length) return false;
      if(loop1.get(loop0[0].id) == null) return false;

      var i1 = loop1.indexOf(loop0[0]);
      var l = loop0.length;
      for(var i = 1; loop0[i] != null; i++) {
        if(loop0[i] != loop1[(i + i1) % l]) return false;
      }
      return true;
  }

  var i, j, k, loops;
  var allLoops = new T();
  for(i = 0; network.nodes[i] != null; i++) {
   loops = _getLoopsOnNode(network.nodes[i]);
    for(k = 0; allLoops[k] != null; k++) {
     for(j = 0; loops[j] != null; j++) {
       if(_sameLoop(loops[j], allLoops[k])) {
         loops.splice(j, 1);
         j--;
       }
     }
   }
   allLoops = allLoops.concat(loops);
 }
  if(minSize) allLoops = allLoops.getFilteredByPropertyValue("length", minSize, "greater");
  allLoops.sort(function(a0, a1) {
   return a0.length > a1.length ? -1 : 1;
 })
  return allLoops;
}

let _getLoopsOnNode=function(central) {
 if(central.to.length === 0 || central.from.length === 0) return [];
  var columns = new T();
 let nl = new ndL();
 let n, i, j;
 let node;
  nl.addNode(central);
 columns.push(nl);
  _loopsColumns(central.to, 1, columns, 1);
  //purge
 for(n = 1; columns[n]; n++) {
   for(i = 1; columns[i] != null; i++) {
     for(j = 0; columns[i][j] != null; j++) {
       node = columns[i][j];
       delete node.onColumn;
       if(node.to.length === 0) {
         columns[i].removeNodeAtIndex(j);
         j--;
       }
     }
   }
 }
  /////////////////////
 //build loops
 let loops = new T();
 let loop;
 for(i = 1; columns[i] != null; i++) {
   for(j = 0; columns[i][j] != null; j++) {
     node = columns[i][j];
     //if(node.to.indexOf(central)!=-1){
     if(node.to.get(central.id) != null) {
       loop = new ndL(node);
       loops.push(loop);
       _pathsToCentral(columns, i, loop, loops);
     }
   }
 }
  loops.sort(function(a0, a1) {
   return a0.length > a1.length ? -1 : 1;
 });
  return loops;
}
let _pathsToCentral=function(columns, iColumn, path, paths) {
 if(path.finished) return;
  if(iColumn === 0) {
   path.finished = true;
   return;
 }
  var i;
 let node = path[0];
 let prevNode;
 let prevPath;
 let newPath;
 let first = true;
  var nodesToCheck = columns[iColumn - 1].clone();
 nodesToCheck.addNodes(columns[iColumn]);
  var lPrevColumn = columns[iColumn - 1].length;
  for(i = 0; nodesToCheck[i] != null; i++) {
   prevNode = nodesToCheck[i];
   if(node == prevNode || path.get(prevNode.id) != null || (prevPath != null && prevPath.get(prevNode.id) != null)) continue;
     if(prevNode.to.get(node.id) != null) {
     if(first) {
       prevPath = path.clone();
        path.unshift(prevNode);
       path.ids[prevNode.id] = prevNode;
        _pathsToCentral(columns, i < lPrevColumn ? (iColumn - 1) : iColumn, path, paths);
       first = false;
     } else {
       newPath = prevPath.clone();
        paths.push(newPath);
        newPath.unshift(prevNode);
       newPath.ids[prevNode.id] = prevNode;
        _pathsToCentral(columns, i < lPrevColumn ? (iColumn - 1) : iColumn, newPath, paths);
     }
   }
 }
}
let _loopsColumns=function(nodes, iColumn, columns) {
 if(columns[iColumn] == null) columns[iColumn] = new ndL();
 let node;
 let newNodeList = new ndL();
 for(var i = 0; nodes[i] != null; i++) {
   node = nodes[i];
   if(!node.onColumn) {
     node.onColumn = true;
     columns[iColumn].addNode(node);
     newNodeList.addNodes(node.to);
   }
 }
 newNodeList = newNodeList.getWithoutRepetitions();
 for(i = 0; i<newNodeList.length; i++) {
   if(newNodeList[i].onColumn) {
     newNodeList.removeNodeAtIndex(i);
     i--;
   }
 }
 if(newNodeList.length > 0) _loopsColumns(newNodeList, iColumn + 1, columns);
}
let spanningTree=function(network, node0, nodeLimit, mode) { //TODO: this method is horribly inneficient // add: level limt
 if(network==null) return;
 if(mode>0) return _spanningTree2(node0, mode, nodeLimit);
  node0 = node0==null?network.nodes[0]:node0;
 mode = mode==null?0:mode;
  var tree = new Tr();
 let parent = new Nd(node0.id, node0.name);
 parent.node = node0;
 tree.addNodeToTree(parent);
  var nodes;
 nodes = node0.nodes;
 let newNodes;
 let newNode;
 let nodeInPrevNodes;
 let i;
 let id;
 let l = nodes.length;
  var limitReached = false;
  for(i = 0; i<l; i++) {
   newNode = new Nd(nodes[i].id, nodes[i].name);
   if(newNode.id == parent.id) continue;
   newNode.node = nodes[i];
   tree.addNodeToTree(newNode, parent);
   if(nodeLimit != null && newNode.id == nodeLimit.id){
     limitReached = true;
   }
 }
 
 if(limitReached) return tree;
  var accumulated = nodes.clone();
 accumulated.addNode(node0);
  var N = 0;
  while(true) {
   newNodes = mode==0?new ndL():nodes.clone();
   for(i = 0; nodes[i] != null; i++) {
     //newNodes.addNodes(nodes[i].nodes); //TODO: check if obsolete concat + check if a concatIfNew could be useful, specially if overriden in ndL, with get
     newNodes.addNodes(nodes[i].nodes);
     
   }
   newNodes = newNodes.getWithoutRepetitions();
   newNodes.removeElements(accumulated);
   if(newNodes.length === 0) return tree;
    for(i = 0; i<newNodes.length; i++) {
     newNode = new Nd(newNodes[i].id, newNodes[i].name);
     newNode.node = newNodes[i];
     var next = newNodes[i].nodes;
     if(next==null || next.length==0) continue;
     for(var j = 0; next[j] != null; j++) {
       id = next[j].id;
       nodeInPrevNodes = nodes.get(id);
       if(nodeInPrevNodes != null && newNode.id != id) {
         tree.addNodeToTree(newNode, tree.nodes.get(id));
         break;
       }
     }
     if(nodeLimit != null && newNode.id == nodeLimit.id){
       limitReached = true;
     }
   }
   if(limitReached) limitReached = true;
    if(limitReached) return tree;
    nodes = newNodes
   accumulated = accumulated.concat(newNodes);
    N++;
   if(N>network.nodes){
     return null;
   }
 }
 return tree;
}
let _spanningTree2=function(node, mode, nodeLimit) {
   mode = mode==null?0:mode;
   
   var tree = new Tr();
   
   var addAndExpandNode = function(node, parent){
     if(nodeLimit && node.id==nodeLimit.id) return;
     var node_in_tree = tree.nodes.get(node.id);
     if(node_in_tree!=null) return;
     node_in_tree = new Nd(node.id, node.name);
     tree.addNodeToTree(node_in_tree, parent);
 
     var nest_from_node;
     switch(mode){
         case 0:
             nest_from_node = node.nodes;
             break;
         case 1:
             nest_from_node = node.to;
             break;
         case 2:
             nest_from_node = node.from;
             break;
     }
     
     for(var i=0;i<nest_from_node.length;i++){
         addAndExpandNode(nest_from_node[i], node_in_tree);
     }
   };
   
   if(Array.isArray(node)){
     var root = new Nd("root", "root");
     tree.addNodeToTree(root);
     node.forEach(n=>addAndExpandNode(n,root));
   } else {
     addAndExpandNode(node, null);
   }
   
   return tree;
}

let spreads = function(node, size, proportionKept = 0.5, receivedPropertyName="sizeReceived", initialGivesAll = true, _originalSize){
    let isInitial = _originalSize==null

    _originalSize = _originalSize||size

    let toKeep = isInitial?0:size*proportionKept
    let toGive = isInitial?size:size*(1-proportionKept)
    node[receivedPropertyName] = (node[receivedPropertyName]||0) + toKeep

    //console.log(node.name + " is given " + size + " / " + _originalSize + " / total:" + node[receivedPropertyName])

    //spreads only if remaining is >1%
    let continueSpread = node.to.length>0 && size/_originalSize>0.01
    if(continueSpread){
        let toGivePerReceiver = toGive/node.to.length
        node.to.forEach(receiver=>{
            spreads(receiver, toGivePerReceiver, proportionKept, receivedPropertyName, initialGivesAll, _originalSize)
        })
    } else {
        node[receivedPropertyName] += toGive
    }
}

let influenceLevels = function(network, node_or_nodes, direction_to=true){
    let levelsTableMain = new T()
    let levelsTableSecondary = new T()
    let levelsTable
    let influenceRelations = new relL()

    let isNodeList = node_or_nodes["length"]!=null

    let nodes = isNodeList?node_or_nodes:new ndL()
    if(!isNodeList) nodes.addNode(node_or_nodes)

    let __mark = Math.random()
    //network.relations.forEach(r=>{r._onImpactTo = false; r._thickFactor = 0.6})
    nodes.forEach(n=>{n.__mark = __mark; n.__level = -1})
    //node.__mark = __mark

    let nextNodesFromList = function(list, to, level){
      if(list.length==0) return null
      let newList = new ndL()
      let nextRelations
      let otherNode
      let aligned = to==direction_to

      list.forEach(n=>{
        n.__level = level
        nextRelations = to?n.toRelations:n.fromRelations
        nextRelations?.forEach(r=>{
          otherNode = to?r.node1:r.node0
          r._onImpactTo = true
          if(otherNode.__mark == __mark) return
          otherNode.__mark = __mark
          //r._thickFactor = aligned?2.2:0.6
          if(aligned) influenceRelations.addRelation(r)
          newList.addNode(otherNode)
        })
      })

      return newList
    }

    let _recursiveLevelsPlacement = function(nodes, to, level=0){
      levelsTable.push(nodes)
      let newNodes = nextNodesFromList(nodes, to, level)
      if(newNodes.length==0) return
      _recursiveLevelsPlacement(newNodes, to, level+1)
      return newNodes
    }
    

    if(direction_to){
      levelsTable = levelsTableMain
      _recursiveLevelsPlacement(nodes, true)

      levelsTable = levelsTableSecondary
      _recursiveLevelsPlacement(nodes, false)
    } else {
      levelsTable = levelsTableMain
      _recursiveLevelsPlacement(nodes, false)

      levelsTable = levelsTableSecondary
      _recursiveLevelsPlacement(nodes, true)
    }

    let notImpacted = []

    for(let i=0; i<network.nodes.length; i++){
      if(network.nodes[i].__mark!=__mark){
        notImpacted.push(network.nodes[i])
        network.nodes[i].__level=-1
      }
    }

    let extendedInfluenceRelations = new relL()
    for(let i=0; i<network.relations.length; i++){
      if(network.relations[i].node1?.__level - network.relations[i].node0?.__level==1) extendedInfluenceRelations.addRelation(network.relations[i])
    }

    return {
      levelsTableMain,
      levelsTableSecondary,
      notImpacted,
      influenceRelations,
      extendedInfluenceRelations
    }
  }

let adjacentNodeList=function(network, nodes, returnConcat, directional){
 if(network==null || nodes==null) return null;
  var newNodeList = returnConcat?nodes.clone():new ndL();
 let i, j;
 let node0, node1;
  if(directional){
   for(i=0; i<nodes.length; i++){
     for(j=0; j<nodes[i].to.length; j++){
       node1 = nodes[i].to[j].id;
       if(nodes.get(node1)==null && newNodeList.get(node1)==null) newNodeList.addNode(node1);
     }
   }
    return newNodeList;
 }
  for(i=0; i<nodes.length; i++){
   for(j=0; nodes[i].relations[j]!=null; j++){
     node0 = nodes[i].relations[j].node0;
     node1 = nodes[i].relations[j].node1;
     if(nodes.get(node0.id)==null && newNodeList.get(node0.id)==null ) newNodeList.addNode(node0);
     if(nodes.get(node1.id)==null && newNodeList.get(node1.id)==null ) newNodeList.addNode(node1);
   }
 }
  return newNodeList;
}
let degreesPartition=function(network, node) {
 //TODO:optionally add a ndL of not connected Nodes
 let list0 = new ndL(node);
 let nodes = node.nodes;
 let nextLevel = nodes;
 let nextNodes;
 let externalLayer;
 let i;
 let j;
 let nodesTable = new T(list0);
 let added = nextLevel.length > 0;
  if(added) nodesTable.push(nextLevel);
  var listAccumulated = nextLevel.clone();
 listAccumulated.push(node);
  while(added) {
   externalLayer = new ndL();
   for(i = 0; nextLevel[i] != null; i++) {
     nextNodes = nextLevel[i].nodes;
     for(j = 0; j<nextNodes.length; j++) {
       //if(listAccumulated.indexOf(nextNodes[j]) == -1) { //fix this
       if(!listAccumulated.includes(nextNodes[j])) {
          externalLayer.push(nextNodes[j]);
         listAccumulated.push(nextNodes[j]);
       }
     }
   }
   added = externalLayer.length > 0;
   if(added) {
     nextLevel = externalLayer;
     nodesTable.push(nextLevel);
   }
 }
  return nodesTable;
}
let getNodes=function(object){
 if(object==null) return null;
 
 if(object["nodes"]!=null) return object["nodes"];
 if(typeOf(object)=="Rel") return new ndL(object.node0, object.node1);
  return null;
}

let buildDendrogram=function(network) {
 if(network == null) return null;
  var tree = new Tr();
 let nodes = new ndL();
  var closest;
 let node0;
 let node1;
 let newNode;
 let id;
 let i;
 let nNodes = network.nodes.length;
  var pRelationPair = 2 * network.relations.length / (nNodes * (nNodes - 1));
  for(i = 0; i<nNodes; i++) {
   newNode = new Nd("[" + network.nodes[i].id + "]", "[" + network.nodes[i].id + "]");
   newNode.nodes = new ndL(network.nodes[i]);
   tree.addNode(newNode);
   nodes[i] = newNode;
 }
   while(nodes.length > 1) {
   closest = _getClosestPair(nodes, true, pRelationPair);
    node0 = nodes[closest[0]];
   node1 = nodes[closest[1]];
    id = "[" + node0.id + "-" + node1.id + "]";
    newNode = new Nd(id, id);
   newNode.weight = closest.strength;
    tree.addNode(newNode);
   tree.createRelation(newNode, node0, id + "-" + node0.id);
   tree.createRelation(newNode, node1, id + "-" + node1.id);
    newNode.node = new Nd(id, id);
   newNode.nodes = node0.nodes.concat(node1.nodes);
    for(i = 0; i<node0.nodes.length; i++) {
     newNode.node.nodes.addNode(node0.nodes[i]);
     newNode.node.relations.addRelation(node0.relations[i]);
   }
   for(i = 0; i<node1.nodes.length; i++) {
     newNode.node.nodes.addNode(node1.nodes[i]);
     newNode.node.relations.addRelation(node1.relations[i]);
   }
    nodes.removeElement(node0);
   nodes.removeElement(node1);
   nodes.addNode(newNode);
 }
   //recalculate levels for nodes here
 for(i = 0; i<tree.nodes.length; i++) {
   node0 = tree.nodes[i];
   if(node0.nodes.length > 1) {
     node0.level = Math.max(node0.nodes[0].level, node0.nodes[1].level) + 1;
   }
 }
  return tree;
}
let _getClosestPair=function(nodes, returnIndexes, pRelationPair) {
 let indexes
  if(nodes.length == 2) {
   var index = nodes[0].nodes.indexOf(nodes[1]);
   //var index = nodes[0].nodes.indexOfElement(nodes[1]);
   if(returnIndexes) {
     indexes = [0, 1];
     indexes.strength = index == -1 ? 0 : nodes[0].relations[index].weight;
     return indexes;
   }
   nodes = new ndL(nodes[0], nodes[1]);
   nodes.strength = index == -1 ? 0 : nodes[0].relations[index].weight;
   return nodes;
 }
  var i;
 let j;
  var nodes0;
  var strength;
 let maxStrength = -1;
  for(i = 0; i<nodes.length-1; i++) {
   nodes0 = nodes[i].nodes;
   for(j = i + 1; j<nodes.length; j++) {
     strength = _strengthBetweenSets(nodes0, nodes[j].nodes, pRelationPair);
     if(strength > maxStrength) {
       indexes = [i, j];
       maxStrength = strength;
     }
   }
 }
 indexes.strength = maxStrength;
 if(returnIndexes) return indexes;
 nodes = new ndL(nodes[indexes[0]], nodes[indexes[1]]);
 nodes.strength = maxStrength;
 return nodes;
}
let _strengthBetweenSets=function(nodes0, nodes1, pRelationPair) {
 let strength = 0;
 let i, j;
 let node0;
  for(i = 0; i<nodes0.length; i++) {
   node0 = nodes0[i];
   for(j = 0; j<node0.nodes.length; j++) {
     if(nodes1.includes(node0.nodes[j])) {
       strength += node0.relations[j].weight;
     }
   }
 }
  return strength / (nodes0.length * nodes1.length * pRelationPair);
}

// provides a metric for comparing two different nodes placement
let nodesPositionCoeficient =function(network){
    const relations_ids = {}
    let weight = 0
    net.relations.forEach(relation=>{
        relations_ids[relation.node0.id+"_"+relation.node1.id] = true
        const distance = Math.sqrt( (relation.node0.x-relation.node1.x)**2 + (relation.node0.y-relation.node1.y)**2 )
        weight += relation.weight/distance
    })

    return weight/(net.nodes**2)
}



let buildNetworkClusters=function(network, mode=0, dendrogramTree, minWeight, addColorToNodes, returnMode) {
 if(network == null) return;
  var clusters;
 let colors;
 let i, j;
 let nClusters, nNodes;
 if(mode===0){
   clusters = _buildNetworkClustersLvn(network);
 } else {
   if(network._dendrogramTree!=null) dendrogramTree = network._dendrogramTree;
   if(dendrogramTree == null) dendrogramTree = buildDendrogram(network);
    network._dendrogramTree = dendrogramTree;
    minWeight = minWeight || 0.5;
    clusters = new T();
    _iterativeBuildClusters(dendrogramTree.nodes[dendrogramTree.nodes.length - 1], clusters, minWeight);
 }
  if(addColorToNodes){
   colors = createDefaultCategoricalColorList(clusters.length);
   nClusters = clusters.length;
   for(i=0; i<nClusters; i++){
     nNodes = clusters[i].length;
     for(j=0; j<nNodes; j++){
       clusters[i][j].color = colors[i];
     }
   }
 }
  if(returnMode==1){
   var clustersNames = new sL();
   clustersNames.name = 'clusters names';
   for(i=0; i<network.nodes.length; i++){
     network.nodes[i]._index = i;
   }
   for(i=0; i<clusters.length; i++){
     nNodes = clusters[i].length;
     for(j=0; j<nNodes; j++){
       clustersNames[clusters[i][j]._index] = "cluster_"+i;
     }
   }
   return clustersNames;
 }
  return clusters;
}
let _iterativeBuildClusters=function(node, clusters, minWeight) {
 if(node.nodes.length == 1) {
   clusters.push(new ndL(node.node));
   return;
 }
  if(node.nodes[0].nodes.length == 1 || node.nodes[0].weight > minWeight) {
   clusters.push(node.nodes[0].nodes);
 } else {
   _iterativeBuildClusters(node.nodes[0], clusters, minWeight);
 }
  if(node.nodes[1].nodes.length == 1 || node.nodes[1].weight > minWeight) {
   clusters.push(node.nodes[1].nodes);
 } else {
   _iterativeBuildClusters(node.nodes[1], clusters, minWeight);
 }
}

//Louvain clusters algorithm
let _buildNetworkClustersLvn=function(network) {
 if(network==null) return network;
  var node_data = [];
 let i;
 for(i=0; i < network.nodes.length; i++){
   // force nodes to be stringlike since they get used as properties in result
   node_data.push('n'+network.nodes[i].id);
 }
 let edge_data = [];
 for(i=0; i < network.relations.length; i++){
   var obj = {source: 'n'+network.relations[i].node0.id,
              target: 'n'+network.relations[i].node1.id,
              weight:network.relations[i].weight};
   edge_data.push(obj);
 }
  // Object with ids of nodes as properties and community number assigned as value.
 let community = _jLvn().nodes(node_data).edges(edge_data);
 let result  = community();
 let clusters = new T();
  if(result)
   for(i=0; i < network.nodes.length; i++){
     var j = result['n'+network.nodes[i].id];
     if(clusters[j] == undefined)
       clusters[j]= new ndL();
     clusters[j].addNode(network.nodes[i]);
   }
 else{
   // no results mean no communities, make them all unique
   for(i=0; i < network.nodes.length; i++){
     clusters.push(new ndL(network.nodes[i]));
   }
 }
 return clusters;
}
let getNodesPageRanks=function(network, mode, useRelationsWeight){
 return addPageRankToNodes(network, mode, useRelationsWeight);
}

let addPageRankToNodes = function(network, from=2, useRelationsWeight){
      //TODO:deploy useRelationsWeight
      //from = from == null ? true : from;

      var n;
      var i;
      var j;
      var d =0.85; //dumping factor;
      var N = network.nodes.length;
      var base = (1 - d) / N;
      from = from==false?0:(from==true?1:from);
      var propName =  ["toPageRank", "fromPageRank","allPageRank"][from];
      var node;
      var otherNode;
      var nodes;
      var weights, w=1;

      network.minFromPageRank = network.minToPageRank = 99999999;
      network.maxFromPageRank = network.maxToPageRank = -99999999;


      for(i = 0; network.nodes[i] != null; i++) {
        node = network.nodes[i];
        node[propName] = 1 / N;
      }

      let max
      for(n = 0; n < 300; n++) {
        for(i = 0; network.nodes[i] != null; i++) {
          node = network.nodes[i];

          switch(from){
            case 0:
              nodes = node.to;
              break;
            case 1:
              nodes = node.from;
              break;
            case 2:
              nodes = node.nodes;
              break;
          }

          //nodes = from ? node.from : node.to;
          node[propName] = base;

          if(useRelationsWeight) weights = from ? node.fromRelations : node.toRelations;

          for(j = 0; nodes[j] != null; j++) {
            otherNode = nodes[j];
            if(useRelationsWeight) w = weights[j].weight;
            node[propName] += w * d * otherNode[propName] / (from ? otherNode.to.length : otherNode.from.length);
          }

          if(n == 299) {

            if(useRelationsWeight) node[propName] = Math.pow(node[propName], 4);

            if(from) {
              network.minFromPageRank = Math.min(network.minFromPageRank, node[propName]);
              max = network.maxFromPageRank = Math.max(network.maxFromPageRank, node[propName]);
            } else {
              network.minToPageRank = Math.min(network.minToPageRank, node[propName]);
              max = network.maxToPageRank = Math.max(network.maxToPageRank, node[propName]);
            }

          }
        }
      }

      network.nodes.forEach(node=>{node[propName]/=max; console.log(node[propName])})

      return network.nodes.getPropertyValues(propName);
    }

let fusionNetworks=function(networks, hubsDistanceFactor, hubsForceWeight, nodesProperties) {
 hubsDistanceFactor = hubsDistanceFactor == null ? 1 : hubsDistanceFactor;
 hubsForceWeight = hubsForceWeight == null ? 1 : hubsForceWeight;
  var fusionNet = new Net();
 let newNode;
 let newRelation;
 let i, j;
 let mapsCluster = new T();
  var colors = createDefaultCategoricalColorList(networks.length).getInterpolated('black', 0.17).getInterpolated('white', 0.55);
  networks.forEach(function(net, i) {
   mapsCluster[i] = new ndL();
    net.nodes.forEach(function(node) {
      newNode = fusionNet.nodes.get(node.id);
      if(newNode == null) {
       newNode = new Nd(node.id, node.name);
       newNode.basicId = node.basicId;
       newNode.mapId = "map_" + i;
       newNode.mapsIds = [newNode.mapId];
       newNode.color = node.color==null?node.color:colors[i];
       newNode.nMaps = 1;
       newNode.weight = node.weight;
       newNode.kind = node.kind;
       if(nodesProperties) nodesProperties.forEach(prop=>newNode[prop] = node[prop]);
        fusionNet.addNode(newNode);
       mapsCluster[i].addNode(newNode);
     } else {
       newNode.nMaps += 1;
       newNode.mapsIds.push("map_" + i);
       newNode.color = newNode.color==null?'rgb(200,200,200)':newNode.color;
        if(node.weight && newNode.weight==null) newNode.weight = node.weight;
       if(node.kind && newNode.kind==null) newNode.kind = node.kind;
       if(nodesProperties) nodesProperties.forEach(prop=>{if(node[prop] && newNode[prop]==null) newNode[prop] = node[prop]});
     }
   });
  });
    networks.forEach(function(net) {
   net.relations.forEach(function(relation) {
     newRelation = new Rel(relation.id, relation.name, fusionNet.nodes.get(relation.node0.id), fusionNet.nodes.get(relation.node1.id));
     newRelation.color = relation.color;
     newRelation.content = relation.content;
     newRelation.description = relation.description;
     newRelation.weight = relation.weight;
     fusionNet.addRelation(newRelation);
   });
 });
  var node0;
  for(i = 0; fusionNet.nodes[i] != null; i++) {
   node0 = fusionNet.nodes[i];
   for(j = i + 1; fusionNet.nodes[j] != null; j++) {
     if(node0.name == fusionNet.nodes[j].name) {
       //newRelation = new Rel(node0.id+'_'+fusionNet.nodes[j].id, node0.id+'_'+fusionNet.nodes[j].id, node0, fusionNet.nodes[j]);
       newRelation = new Rel(node0.id + '_' + fusionNet.nodes[j].id, "same variable", node0, fusionNet.nodes[j]);
       newRelation.color = 'black';
       newRelation.distanceFactor = hubsDistanceFactor;
       newRelation.forceWeight = hubsForceWeight;
       fusionNet.addRelation(newRelation);
        newRelation = new Rel(fusionNet.nodes[j].id + '_' + node0.id, "same variable", fusionNet.nodes[j], node0);
       newRelation.color = 'black';
       newRelation.distanceFactor = hubsDistanceFactor;
       newRelation.forceWeight = hubsForceWeight;
       fusionNet.addRelation(newRelation);
        newRelation.node0.nMaps += 1;
       newRelation.node1.nMaps += 1;
     }
   }
 }
  for(i = 0; fusionNet.nodes[i] != null; i++) {
   fusionNet.nodes[i].hubWeight = Math.sqrt(fusionNet.nodes[i].nMaps - 1);
 }
  fusionNet.mapsCluster = mapsCluster;
  return fusionNet;
}
let _jLvn=function() {
 //Constants
 let __PASS_MAX = -1;
 let __MIN    = 0.0000001;
  //Local vars
 let original_graph_nodes;
 let original_graph_edges;
 let original_graph = {};
 let partition_init;
  //Helpers
 function make_set(array){
   var set = {};
   array.forEach(function(d){
     set[d] = true;
   });
   return Object.keys(set);
 }
  function obj_values(obj){
    var vals = [];
    for( var key in obj ) {
        if ( obj.hasOwnProperty(key) ) {
            vals.push(obj[key]);
        }
    }
    return vals;
 }
  function get_degree_for_node(graph, node){
   var neighbours = graph._assoc_mat[node] ? Object.keys(graph._assoc_mat[node]) : [];
   var weight = 0;
   neighbours.forEach(function(neighbour){
     var value = graph._assoc_mat[node][neighbour] || 1;
     if(node == neighbour)
       value *= 2;
     weight += value;
   });
   return weight;
 }
  function get_neighbours_of_node(graph, node){
   if(typeof graph._assoc_mat[node] == 'undefined')
     return [];
    var neighbours = Object.keys(graph._assoc_mat[node]);
   return neighbours;
 }
   function get_edge_weight(graph, node1, node2){
   return graph._assoc_mat[node1] ? graph._assoc_mat[node1][node2] : undefined;
 }
  function get_graph_size(graph){
   var size = 0;
   graph.edges.forEach(function(edge){
     size += edge.weight;
   });
   return size;
 }
  function add_edge_to_graph(graph, edge){
   update_assoc_mat(graph, edge);
    var edge_index = graph.edges.map(function(d){
    return d.source+'_'+d.target;
   }).indexOf(edge.source+'_'+edge.target);
    if(edge_index != -1)
    graph.edges[edge_index].weight = edge.weight;
   else
    graph.edges.push(edge);
  }
  function make_assoc_mat(edge_list){
   var mat = {};
   edge_list.forEach(function(edge){
     mat[edge.source] = mat[edge.source] || {};
     mat[edge.source][edge.target] = edge.weight;
     mat[edge.target] = mat[edge.target] || {};
     mat[edge.target][edge.source] = edge.weight;
   });
    return mat;
 }
  function update_assoc_mat(graph, edge){
   graph._assoc_mat[edge.source] = graph._assoc_mat[edge.source] || {};
   graph._assoc_mat[edge.source][edge.target] = edge.weight;
   graph._assoc_mat[edge.target] = graph._assoc_mat[edge.target] || {};
   graph._assoc_mat[edge.target][edge.source] = edge.weight;
 }
  function clone(obj){
     if(obj == null || typeof(obj) != 'object')
         return obj;
      var temp = obj.constructor();
      for(var key in obj)
         temp[key] = clone(obj[key]);
     return temp;
 }
  //Core-Algorithm Related
 function init_status(graph, status, part){
   status.nodes_to_com = {};
   status.total_weight = 0;
   status.internals = {};
   status.degrees = {};
   status.gdegrees = {};
   status.loops = {};
   status.total_weight = get_graph_size(graph);
    if(typeof part == 'undefined'){
     graph.nodes.forEach(function(node,i){
       status.nodes_to_com[node] = i;
       var deg = get_degree_for_node(graph, node);
       if (deg < 0) return
         //throw 'Bad graph type, use positive weights!';
       status.degrees[i] = deg;
       status.gdegrees[node] = deg;
       status.loops[node] = get_edge_weight(graph, node, node) || 0;
       status.internals[i] = status.loops[node];
     });
   }else{
     graph.nodes.forEach(function(node){
       var com = part[node];
       status.nodes_to_com[node] = com;
       var deg = get_degree_for_node(graph, node);
       status.degrees[com] = (status.degrees[com] || 0) + deg;
       status.gdegrees[node] = deg;
       var inc = 0.0;
        var neighbours  = get_neighbours_of_node(graph, node);
       neighbours.forEach(function(neighbour){
         var weight = graph._assoc_mat[node][neighbour];
         if (weight <= 0){
           throw "Bad graph type, use positive weights";
         }
          if(part[neighbour] == com){
           if (neighbour == node){
             inc += weight;
           }else{
             inc += weight/2.0;
           }
         }
       });
       status.internals[com] = (status.internals[com] || 0) + inc;
     });
   }
 }
  function __modularity(status){
   var links = status.total_weight;
   var result = 0.0;
   var communities = make_set(obj_values(status.nodes_to_com));
    communities.forEach(function(com){
     var in_degree = status.internals[com] || 0 ;
     var degree = status.degrees[com] || 0 ;
     if(links > 0){
       result = result + in_degree / links - Math.pow((degree / (2.0*links)), 2);
     }
   });
   return result;
 }
  function __neighcom(node, graph, status){
   // compute the communities in the neighb. of the node, with the graph given by
   // node_to_com
    var weights = {};
   var neighboorhood = get_neighbours_of_node(graph, node);//make iterable;
    neighboorhood.forEach(function(neighbour){
     if(neighbour != node){
       var weight = graph._assoc_mat[node][neighbour] || 1;
       var neighbourcom = status.nodes_to_com[neighbour];
       weights[neighbourcom] = (weights[neighbourcom] || 0) + weight;
     }
   });
    return weights;
 }
  function __insert(node, com, weight, status){
   //insert node into com and modify status
   status.nodes_to_com[node] = +com;
   status.degrees[com] = (status.degrees[com] || 0) + (status.gdegrees[node]||0);
   status.internals[com] = (status.internals[com] || 0) + weight + (status.loops[node]||0);
 }
  function __remove(node, com, weight, status){
   //remove node from com and modify status
   status.degrees[com] = ((status.degrees[com] || 0) - (status.gdegrees[node] || 0));
   status.internals[com] = ((status.internals[com] || 0) - weight -(status.loops[node] ||0));
   status.nodes_to_com[node] = -1;
 }
  function __renumber(dict){
   var count = 0;
   var ret = clone(dict); //deep copy :)
   var new_values = {};
   var dict_keys = Object.keys(dict);
   dict_keys.forEach(function(key){
     var value = dict[key];
     var new_value =  typeof new_values[value] =='undefined' ? -1 : new_values[value];
     if(new_value == -1){
       new_values[value] = count;
       new_value = count;
       count = count + 1;
     }
     ret[key] = new_value;
   });
   return ret;
 }
  function __one_level(graph, status){
   //Compute one level of the Communities Dendogram.
   var modif = true,
     nb_pass_done = 0,
     cur_mod = __modularity(status),
     new_mod = cur_mod;
    while (modif && nb_pass_done != __PASS_MAX){
     cur_mod = new_mod;
     modif = false;
     nb_pass_done += 1;
      graph.nodes.forEach(function(node){
       var com_node = status.nodes_to_com[node];
       var degc_totw = (status.gdegrees[node] || 0) / (status.total_weight * 2.0);
       var neigh_communities = __neighcom(node, graph, status);
       __remove(node, com_node, (neigh_communities[com_node] || 0.0), status);
       var best_com = com_node;
       var best_increase = 0;
       var neigh_communities_entries = Object.keys(neigh_communities);//make iterable;
        neigh_communities_entries.forEach(function(com){
         var incr = neigh_communities[com] - (status.degrees[com] || 0.0) * degc_totw;
         if (incr > best_increase){
           best_increase = incr;
           best_com = com;
         }
       });
        __insert(node, best_com, neigh_communities[best_com] || 0, status);
        if(best_com != com_node)
         modif = true;
     });
     new_mod = __modularity(status);
     if(new_mod - cur_mod < __MIN)
       break;
   }
 }
  function induced_graph(partition, graph){
   var ret = {nodes:[], edges:[], _assoc_mat: {}};
   var w_prec, weight;
   //add nodes from partition values
   var partition_values = obj_values(partition);
   ret.nodes = ret.nodes.concat(make_set(partition_values)); //make set
   graph.edges.forEach(function(edge){
     weight = edge.weight || 1;
     var com1 = partition[edge.source];
     var com2 = partition[edge.target];
     w_prec = (get_edge_weight(ret, com1, com2) || 0);
     var new_weight = (w_prec + weight);
     add_edge_to_graph(ret, {'source': com1, 'target': com2, 'weight': new_weight});
   });
   return ret;
 }
  function partition_at_level(dendogram, level){
   var partition = clone(dendogram[0]);
   for(var i = 1; i < level + 1; i++ )
     Object.keys(partition).forEach(function(key){
       var node = key;
       var com  = partition[key];
       partition[node] = dendogram[i][com];
     });
   return partition;
 }
   function generate_dendogram(graph, part_init){
    if(graph.edges.length === 0){
     var part = {};
     graph.nodes.forEach(function(node){
       part[node] = node;
     });
     return part;
   }
   var status = {};
    init_status(original_graph, status, part_init);
   var mod = __modularity(status);
   var status_list = [];
   __one_level(original_graph, status);
   var new_mod = __modularity(status);
   var partition = __renumber(status.nodes_to_com);
   status_list.push(partition);
   mod = new_mod;
   var current_graph = induced_graph(partition, original_graph);
   init_status(current_graph, status);
    while (true){
     __one_level(current_graph, status);
     new_mod = __modularity(status);
     if(new_mod - mod < __MIN)
       break;
      partition = __renumber(status.nodes_to_com);
     status_list.push(partition);
      mod = new_mod;
     current_graph = induced_graph(partition, current_graph);
     init_status(current_graph, status);
   }
    return status_list;
 }
  var core = function(){
   var dendogram = generate_dendogram(original_graph, partition_init);
   return partition_at_level(dendogram, dendogram.length - 1);
 };
  core.nodes = function(nds){
   if(arguments.length > 0){
     original_graph_nodes = nds;
   }
   return core;
 };
  core.edges = function(edgs){
   if(typeof original_graph_nodes == 'undefined')
     throw 'Please provide the graph nodes first!';
    if(arguments.length > 0){
     original_graph_edges = edgs;
     var assoc_mat = make_assoc_mat(edgs);
     original_graph = { 'nodes': original_graph_nodes,
                  'edges': original_graph_edges,
                  '_assoc_mat': assoc_mat };
   }
   return core;
  };
  core.partition_init = function(prttn){
   if(arguments.length > 0){
     partition_init = prttn;
   }
   return core;
 };
  return core;
}
let getNodesCentralities=function(network, mode, bNormalized, bReversed) {
 if(network==null) return;
  var weights = new nL();
  mode = mode==null?0:mode;
 if(mode===0) addEigenvectorCentralityToNodes(network, bNormalized, bReversed);
 if(mode===1) addBetweennessCentralityToNodes(network, bNormalized, bReversed);
  for(var i=0;i<network.nodes.length; i++){
   weights[i] = mode==0?network.nodes[i].eigenvectorCentrality:network.nodes[i].betweennessCentrality;
 }
  return weights;
}
let addCentralitiesToNodes=function(network, mode, bNormalized, bReversed) {
 if(network==null) return;
 mode = mode==null?0:mode;
 if(mode===0) addEigenvectorCentralityToNodes(network, bNormalized, bReversed);
 if(mode===1) addBetweennessCentralityToNodes(network, bNormalized, bReversed);
 if(mode===2) addReachToNodes(network, false);
 if(mode===3) addReachToNodes(network, true);
 return network;
}

let _getAdjacencyMap = function(network,bDirected,bReversed,bStochastic){
// derived from Graph.js inside http://www.clips.ua.ac.be/pages/pattern
  if(network==null) return null;
  bDirected = bDirected == null ? false : bDirected;
  bReversed = bReversed == null ? false : bReversed;
  bStochastic = bStochastic == null ? false : bStochastic;
  var map = {};
  for(var i=0; i < network.nodes.length; i++) {
      map[network.nodes[i].id] = {};
  }
  for(i=0; i < network.relations.length; i++) {
      var e = network.relations[i];
      var id1 = e[(bReversed)?"node1":"node0"].id;
      var id2 = e[(bReversed)?"node0":"node1"].id;
      map[id1][id2] = 1.0 - e.weight*0.5;
      if (!bDirected) { 
          map[id2][id1] = map[id1][id2];
      }
  }
  if(bStochastic) {
    for (var id1 in map) {
      var v = []; for(var k in map[id1]) v.push(map[id1][k]);
      var n = 0; for(var i=0; i < v.length; i++) n += v[i];
      for(var id2 in map[id1]) {
        map[id1][id2] /= n;
      }
    }
  }
  return map;
}

let addEigenvectorCentralityToNodes=function(network, bNormalized, bReversed) {
 // derived from Graph.js inside http://www.clips.ua.ac.be/pages/pattern
 /* Eigenvector centrality for nodes in the graph (cfr. Google's PageRank).
  * Eigenvector centrality is a measure of the importance of a node in a directed network. 
  * It rewards nodes with a high potential of (indirectly) connecting to high-scoring nodes.
  * Nodes with no incoming connections have a score of zero.
  * If you want to measure outgoing connections, reversed should be False.        
  */
 // Based on: NetworkX, Aric Hagberg (hagberg@lanl.gov)
 // http://python-networkx.sourcearchive.com/documentation/1.0.1/centrality_8py-source.html
 // Note: much faster than betweenness centrality (which grows exponentially)

 if(network == null) return network;
 if(bNormalized === undefined) bNormalized = true;
 if(bReversed   === undefined) bReversed   = true;
 let nIterations = 100;
 let fTolerance  = 0.0001;
 let rating = {};
 function normalize(vector) {
   var v = []; for(var k in vector) v.push(vector[k]);
   var total = 0; for (var i=0; i < v.length; i++) total += v[i];
   var w = 1.0 / (total || 1);
   for (var node in vector) {
     vector[node] *= w;
   }
 }
 let G = _getAdjacencyMap(network,null,bReversed);
 randomSeed(1); // use consistent random function so we get consistent results
 let v = {}; for(var i=0;i<network.nodes.length;i++) v[network.nodes[i].id] = random(); normalize(v);
 randomSeedPop();
 // Eigenvector calculation using the power iteration method: y = Ax.
 // It has no guarantee of convergence.
 for(var i=0; i < nIterations; i++) {
   var v0 = v;
    v={}; for (var k in v0) v[k]=0;
   for (var n1 in v) {
     for (var n2 in G[n1]) {
       v[n1] += 0.01 + v0[n2] * G[n1][n2] * (rating[n]? rating[n] : 1);
     }
   }
   normalize(v);
   var e=0; for (var n in v) e += Math.abs(v[n]-v0[n]); // Check for convergence.
   if(e < network.nodes.length * fTolerance) {
     if(bNormalized){
       var vals = []; for(var k in v) vals.push(v[k]);
       var m=Math.max.apply(Math, vals) || 1;
       for(var id in v) v[id] /= m;
     }
     // set property on nodes
     for(var id in v){
       var node = network.nodes.get(id);
       node.eigenvectorCentrality = v[id];
     }
     return network;
   }
 }
 // node weight is 0 because eigenvectorCentrality() did not converge
 for(var i=0;i<network.nodes.length;i++){
   network.nodes[i].eigenvectorCentrality=0;
 }
 return network;
}
let addBetweennessCentralityToNodes=function(network, bNormalized, bDirected) {
 // derived from Graph.js inside http://www.clips.ua.ac.be/pages/pattern
 /* Betweenness centrality for nodes in the graph.
  * Betweenness centrality is a measure of the number of shortests paths that pass through a node.
  * Nodes in high-density areas will get a good score.
  */
 // Ulrik Brandes, A Faster Algorithm for Betweenness Centrality,
 // Journal of Mathematical Sociology 25(2):163-177, 2001,
 // http://www.inf.uni-konstanz.de/algo/publications/b-fabc-01.pdf
 // Based on: Dijkstra's algorithm for shortest paths modified from Eppstein.
 // Based on: NetworkX 1.0.1: Aric Hagberg, Dan Schult and Pieter Swart.
 // http://python-networkx.sourcearchive.com/documentation/1.0.1/centrality_8py-source.html
 if(network == null) return network;
 if(bNormalized === undefined) bNormalized = true;
 if(bDirected === undefined) bDirected = false;

  var Heap = function(){
     this.init = function() {
       /* Items in the heap are ordered by weight (i.e. priority).
        * Heap.pop() returns the item with the lowest weight.
        */
       this.k = [];
       this.w = [];
       this.length = 0;
     };
     this.init();
     this.push = function(key, weight) {
       var i = 0; while (i <= this.w.length && weight < (this.w[i]||Infinity)) i++;
       this.k.splice(i, 0, key);
       this.w.splice(i, 0, weight);
       this.length += 1;
       return true;            
     };
     this.pop = function () {
       this.length -= 1;
       this.w.pop(); return this.k.pop();
     };
 };
  var W = _getAdjacencyMap(network,null,true);
 let b = {}; for(var i=0;i<network.nodes.length;i++) b[network.nodes[i].id] = 0.0;
 let dist,pred,v;
 for(i=0;i<network.nodes.length;i++) {
   var id = network.nodes[i].id;
   var Q = new Heap(); // Use Q as a heap with [distance, node id] lists.
   var D = {}; // Dictionary of final distances.
   var P = {}; // # Dictionary of paths.
   for(var j=0;j<network.nodes.length;j++) P[network.nodes[j].id]=[];
   var seen = {id: 0};
   Q.push([0, id, id], 0);
   var S = [];
   var E = {};
   for(var j=0;j<network.nodes.length;j++) E[network.nodes[j].id]=0; // sigma
   E[id] = 1.0;
   while(Q.length) {
     var q = Q.pop(); dist=q[0]; pred=q[1]; v=q[2];
     if(v in D) continue;
     D[v] = dist;
     S.push(v);
     E[v] += E[pred];
     for (var w in W[v]) {
       var vw_dist = D[v] + W[v][w];
       if(!(w in D) && (!(w in seen) || vw_dist < seen[w])) {
         seen[w] = vw_dist;
         Q.push([vw_dist, v, w], vw_dist);
         P[w] = [v];
         E[w] = 0.0;
       } else if (vw_dist == seen[w]) { // Handle equal paths.
         P[w].push(v);
         E[w] = E[w] + E[v];
       }
     }
   }
   var d = {}; for(var j=0;j<network.nodes.length;j++) d[network.nodes[j].id]=0;
   while (S.length) {
     var w = S.pop();
     for (var j=0; j < P[w].length; j++) {
       v = P[w][j];
       d[v] += (1 + d[w]) * E[v] / E[w];
     }
     if (w != id) {
       b[w] += d[w];
     }
   }
 }
 // Normalize between 0 and 1.
 if(bNormalized){
   var vals = []; for(var k in b) vals.push(b[k]);
   var m=Math.max.apply(Math, vals) || 1;
   for(var id in b) b[id] /= m;
 }
 // set property on nodes
 for(var id in b){
   var node = network.nodes.get(id);
   node.betweennessCentrality = b[id];
   node.betweennessCentralityDegreeRatio = node.betweennessCentrality/(node.nodes.length+0.001);
 }
 return network;
}

let addReachToNodes=function(network, countDifferentPaths=false){
    let _addReachNodesToNode = function(node){
        if(node.reach) return node.reach
        node.reach=new L()
        node.to.forEach(son=>{
            node.reach = node.reach.concat(_addReachNodesToNode(son, countDifferentPaths))
            node.reach.push(son)
            if(!countDifferentPaths){
                node.reach = node.reach.getWithoutRepetitions()
            }
        })
        return node.reach
    }
    network.nodes.forEach(n=>n.reach=null)
    network.nodes.forEach(n=>{if(!n.reach) _addReachNodesToNode(n)})
    network.nodes.forEach(n=>{console.log(n.name, n.reach.getPropertyValues("name").join(", ")); n.reach=n.reach.length})
}



let getLeaves=function(object){//@todo: move to TreeOperators
 if(object==null) return;
 if(object.getLeaves!=null) return object.getLeaves();
 return null;
}

let createNetworkFromListAndFunction=function(list, weightFunction, names, threshold, weightMode, symmetric) {
 if(list==null || weightFunction==null) return;
  var i, j;
 let w;
 let node, node1;
 let network = new Net();
 let n = list.length;
  threshold = threshold==null?0.3:threshold;
  for(i=0; i<n; i++){
   node = new Nd("n_"+i, names == null ? "n_"+i : names[i]);
   node.element = list[i];
   node.i = i;
   network.addNode(node);
 }
  if(symmetric){
   for(i=0; i<n; i++){
     node = network.nodes[i];
     for(j=i+1; j<n; j++){
       node1 = network.nodes[j];
       w = weightFunction(list[i], list[j]);
       if(w > threshold) {
         if(weightMode>0) w -= threshold;
         if(weightMode==2) w /= (1-threshold);
         network.addRelation(new Rel(i + "_" + j, i + "_" + j, node, node1, w));
       }
     }
   }
 } else {
   for(i=0; i<n; i++){
     node = network.nodes[i];
     for(j=0; j<n; j++){
       if(i==j) continue;
       node1 = network.nodes[j];
       w = weightFunction(list[i], list[j]);
       if(w > threshold) {
         if(weightMode>0) w -= threshold;
         if(weightMode==2) w /= (1-threshold);
         network.addRelation(new Rel(i + "_" + j, i + "_" + j, node, node1, w));
       }
     }
   }
 }
  return network;
}
let createRandomNetwork=function(nNodes, pRelationOrNumberOfRelations, mode, randomRelationsWeights, seed) {
 if(nNodes == null || pRelationOrNumberOfRelations == null) return null;
  var funcRandom;
  if(seed!=null){
   funcRandom = function(){
     seed++;
    return getRandomWithSeed(seed);
  };
 } else {
   funcRandom = Math.random;
 }
  mode = mode == null ? 0 : mode;
  var i, j;
 let network = new Net();
 let node;
  for(i = 0; i < nNodes; i++) {
   network.addNode(new Nd("n" + i, "n" + i));
 }
  switch(mode) {
   case 0:
     if(pRelationOrNumberOfRelations<1){
       for(i = 0; i < nNodes - 1; i++) {
         node = network.nodes[i];
         for(j = i + 1; j < nNodes; j++) {
           if(funcRandom() < pRelationOrNumberOfRelations) network.addRelation(new Rel(i + "_" + j, i + "_" + j, node, network.nodes[j], randomRelationsWeights ? funcRandom() : 1));
         }
       }
     } else {
       pRelationOrNumberOfRelations = Math.min(pRelationOrNumberOfRelations, nNodes*(nNodes-1)*0.5);
       while(network.relations.length<pRelationOrNumberOfRelations){
         i = Math.floor(funcRandom()*nNodes);
         j = Math.floor(funcRandom()*nNodes);
         if(i!=j && network.relations.get(i + "_" + j)==null){
           network.addRelation(new Rel(i + "_" + j, i + "_" + j, network.nodes[i], network.nodes[j], randomRelationsWeights ? funcRandom() : 1));
         }
       }
     }
     
     return network;
   case 1:
     var nPairs = nNodes * (nNodes - 1) * 0.5;
     var pending;
     var maxDegree = 0;
     var otherNode;
     var id;
     for(i = 0; i < nPairs; i++) {
       if(funcRandom() < pRelationOrNumberOfRelations) {
         pending = true;
         while(pending) {
           node = network.nodes[Math.floor(network.nodes.length * funcRandom())];
           if(funcRandom() < (node.nodes.length + 1) / (maxDegree + 1)) {
             while(pending) {
               otherNode = network.nodes[Math.floor(network.nodes.length * funcRandom())];
               id = node.id + "_" + otherNode.id;
               if(network.relations.get(id) != null || network.relations.get(otherNode.id + "_" + node.id) != null) continue;
               if(funcRandom() < (otherNode.nodes.length + 1) / (maxDegree + 1)) {
                 network.addRelation(new Rel(id, id, node, otherNode, randomRelationsWeights ? funcRandom() : 1));
                 pending = false;
               }
             }
           }
         }
       }
     }
     return network;
 }
}


/**
 * json with some of following formats:
 * [{node0:"Jupiter", node1:"IO"},…]
 * {entities:[{name:"Jupiter"},…], relations:[{node0:"Jupiter", "IO"},…]}
 * with optional properties on entities and relations (such as type, description, weight…)
 * with property names on entities: "node", "name", "entity"
 * and with property names on relations: "node0", "name0", "entity1" (with 0 and 1, or 1 and 2)
 * @param {Object} json - json Object
 * @returns {Net}
 **/
let jsonToNet = function(json){
    if(typeof json == "string") json = JSON.parse(json)

    const net = new _.Net()

    const relations = json.relations||json.relationsList
    const entities = json.entities||json.entitiesList

    let buildNode = function(name){
        let node = net.get(name)
        if(!node){
            node = net.createNode(name, name)
            const entity = entities?.find(ent=>ent.name==name)
            if(entity){
                node.description = entity.description
                node.category = entity.type
                if(entity.emoji) node.name = entity.emoji + node.name
            } else {
                node.description ="-"
                node.category = "-"
            }
        }
        return node
    }
    
    relations.forEach(relation=>{
        let n0 = buildNode(relation.entity1)
        let n1 = buildNode(relation.entity2)
        let rel = net.relations.get(n0.id+"_"+n1.id)
        if(rel){
            rel.weight++
        } else {
            rel = net.createRelation(n0, n1)
            rel.weight = 1
        }
        rel.description = relation.description
    })

    const entityDictionary = {}
    entities?.forEach(entity=>{
        entityDictionary[entity.name.toLowerCase()] = entity
    })

    const categories = []
    net.nodes.forEach(node=>{
        const entity = entityDictionary[node.name.toLowerCase()]
        if(entity){
            node.category = entity.category||entity.type
            categories.push(node.category)
        }
    })

    if(categories[0]){
        const colors = _.colorsForCategoricalList(categories.toL())
        net.nodes.forEach((node,i)=>node.color = colors[i])
    }
    
    return net;
}

let textsToNet = function(texts, names, colorsList, threshold = 0.8, stopWords=1){
    //getWordsInTextsOccurrencesTable(texts, weightsMode, stopWords=1, includeLinks, wordsLimitPerString=500, totalWordsLimit=1000, sortByTotalWeight, minSizeWords=3, addTotalList, minSupportFraction=0, wordDelimiter)
    let wordsTable = transpose(getWordsInTextsOccurrencesTable(texts, 0, stopWords), true)
    let net = buildCorrelationsNetwork(wordsTable, true, names||texts, colorsList, threshold)
    return net
}

/**
 * universal parser, identifies format and builds net
 **/
let parseNet = function(netData, threshold=0.2){
    let net = new _.Net()

    if(Array.isArray(netData) && netData.length==2){
        //nodes and relations
        let nodesObjectsArray = Array.isArray(netData[0])?netData[0]:netData[0].split("\n")
        let relationsObjectsArray = Array.isArray(netData[1])?netData[1]:netData[1].split("\n")


        //nodes

        try{
            nodesObjectsArray = JSON.parse(nodesObjectsArray)
        }catch(e){

        }
        //if(!Array.isArray(nodesObjectsArray==null)){
            //nodesObjectsArray=[]
            //let nodesLines = Array.isArray(netData[0]);netData[0]:netData[0].split("\n")
            nodesObjectsArray.forEach((line,i)=>{
                if(typeof(line)=="string") nodesObjectsArray[i] = JSON.parse(line)
                // line = typeof(line)=="string"?JSON.parse(line):line
                // nodesObjectsArray.push(JSON.parse(line))
            })
        //}

        const forbiddenPropNames = ["nodes", "relations", "type"]

        nodesObjectsArray.forEach(nodeObject=>{
            let category = nodeObject.node.labels[0]
            let node = new _.Nd(String(nodeObject.node?.id), nodeObject.node?.properties?.fullName||nodeObject.node?.properties?.title)
            node.category = category
            node.color = interpolateColors(stringToColor(category), "white", 0.7)
            node.urlImage = nodeObject.node?.properties?.savedImg

            node.properties = nodeObject.node?.properties

            if(node.properties){
                for(let propName in node.properties){
                    if(forbiddenPropNames.includes(propName)) continue
                    node[propName] = node.properties[propName]
                }
            }

            net.addNode(node)
        })


        //relations

        try{
            relationsObjectsArray = JSON.parse(relationsObjectsArray)
        }catch(e){
            
        }
        //if(!Array.isArray(relationsObjectsArray)){
            //relationsObjectsArray=[]
            //let relationsLines = netData[1].split("\n")
            relationsObjectsArray.forEach((line,i)=>{
                if(typeof(line)=="string") relationsObjectsArray[i] = JSON.parse(line)
                //relationsObjectsArray.push(JSON.parse(line))
            })
        //}

        relationsObjectsArray.forEach(relationObject=>{
            let weight = relationObject.rel?.properties?.weight
            if(weight<threshold) return
            if(net.get(String(relationObject.rel.start.id))==null || net.get(String(relationObject.rel.end.id))==null) return
            let relation = net.createRelation(relationObject.rel.start.id, relationObject.rel.end.id)
            relation.weight = weight
        })

    }
    

    return net
}


let textToNet = function(text, separator="\n\n", nNodes, thresholdCorrelation, groupsSeparator, stopWords, includeBiGrams, addContextToRelations=false){
    if(text==null) return

    let groupBlocks

    if(Array.isArray(text)){
        groupBlocks = text
        text = text.join(/\n\n/)
    } else if(groupsSeparator!=null){// && text.includes(groupsSeparator)){
        groupBlocks = text.split(groupsSeparator)
    } else {
        groupBlocks = [text]
    }

    groupBlocks = groupBlocks.filter(g=>g!="")


    let wordsOb = {}
    let nLocation = 0
    let parts
    groupBlocks.forEach((block,i)=>{
        parts = block.split(separator)
        parts.forEach((part,j)=>{
            let words = getWords(part)
            if(includeBiGrams) words = words.concat(getBigrams(part))
            words.forEach(word=>{
                let wOb = wordsOb[word]
                if(wOb==null){
                    wOb={
                        word,
                        count:0,
                        contexts:[],
                        groups:[],
                        locations:[]
                    }
                    wordsOb[word] = wOb
                }
                wOb.count++
                //wOb.contexts.push(part)
                wOb.groups.push(i)
                wOb.locations.push(nLocation)
            })
            nLocation++
        })

    })

    let listWordObjects = new L()
    let maxCount = 0

    for(let word in wordsOb){
        let ob = wordsOb[word]
        listWordObjects.push(ob)
    }

    listWordObjects = listWordObjects.getSortedByProperty("count", false).slice(0, nNodes).filter(w=>w.count>1)

    listWordObjects.forEach(wO=>{
        maxCount = Math.max(maxCount, wO.count)
        wO.vector = createListWithSameElement(nLocation,0)
        wO.locations.forEach(n=>wO.vector[n]++)
        wO.vector.mean = wO.vector.getMean()
        wO.vector.standardDeviation = wO.vector.getStandardDeviation()
    })

    let listConnections = new L()

    let usesThreshold = thresholdCorrelation<=1

    for(let i=0; i<listWordObjects.length; i++){
        for(let j=i+1; j<listWordObjects.length; j++){
            let wordObject0 = listWordObjects[i]
            let wordObject1 = listWordObjects[j]
            let pair_id = wordObject0.word+"_"+wordObject1.word
            let connection = {
                pair_id,
                wordObject0,
                wordObject1,
                //weight:(numericCorrelation(wordObject0.vector, wordObject1.vector)**2)*Math.log(wordObject0.count)*Math.log(wordObject1.count)
                weight:numericCorrelation(wordObject0.vector, wordObject1.vector)
            }
            if(!usesThreshold || connection.weight>=thresholdCorrelation) listConnections.push(connection)
            //connections[pair_id] = connection
            //if(listWordObjects)
        }
    }

    if(!usesThreshold) listConnections = listConnections.getSortedByProperty("weight", false).slice(0, thresholdCorrelation)

    let net = new Net()
    listConnections.forEach(connection=>{
        let rel = net.createRelation(connection.wordObject0.word, connection.wordObject1.word)
        if(rel.node0.count==null){
            rel.node0.count = connection.wordObject0.count
            rel.node0.weight = Math.log(connection.wordObject0.count)
            rel.node0.groups = connection.wordObject0.groups
        }
        if(rel.node1.count==null){
            rel.node1.count = connection.wordObject1.count
            rel.node1.weight = Math.log(connection.wordObject1.count)
            rel.node1.groups = connection.wordObject1.groups
        }
        rel.content = rel.node0.name+"|"+rel.node1.name+" "+connection.weight
        rel.weight = connection.weight
    })

    let nGroups = groupBlocks.length
    let colors = createDefaultCategoricalColorList(nGroups, "0.9").getInterpolated("white", 0.6)
    net.colorsTable = new T()
    net.colorsTable[0]=new sL()
    net.colorsTable[1]=new cL()
    for(let i=0; i<nGroups; i++){
        net.colorsTable[0][i]=i
        net.colorsTable[1][i]=colors[i]
    }

    net.nodes.forEach(n=>{
        n.colorsTable = toL(n.groups).getFrequenciesTable(true, true).getColumns([0,2])
        if(nGroups==2) n.groupsProportion = (n.groups.filter(g=>g==0).length-n.groups.filter(g=>g==1).length)/n.groups.length//could be done more efficiently
        n.colorsTable[0] = n.colorsTable[0].map(group=>colors[group])
    })

    if(addContextToRelations){
        parts = text.toLowerCase().split(separator)
        net.relations.forEach(r=>{
            r.content = ""
            parts.forEach(part=>{
                if(part.includes(r.node0.name) && part.includes(r.node1.name)){
                    if(r.content!="") r.content+=separator+" /// "
                    r.content+=part
                }
            })
        })
    }

    return net
}

let textToTree = function(text, divisors, parentName="text"){
    let tree = new _.Tr()
    // let parent = new _.Nd(parentName, parentName)
    // parent.text = text
    // parent.level = 0

    let getSubTexts = function(txt, level, parent){
        if(!txt || txt.trim()=="") return
        let name = parent==null?"text":(txt.includes("\n")?txt.split("\n")[0]
                                :(txt.includes(".")?txt.split(".")[0]
                                    :(txt.includes(" ")?txt.split(" ")[0]:txt.substr(0,100))))
        
        let node = new _.Nd(name, name)
        node.text = txt
        node.level = level
        tree.addNodeToTree(node, parent)
        node.weight = txt.length
        let blocks = txt.split(divisors[level])
        console.log(level, name, blocks.length)
        if(blocks.length<2) return

        let captureDivisor = divisors[level].toString().includes("(")

        if(level<3){
            //console.log("txt:", txt)
            console.log("level:", level)
            console.log("div:", divisors[level])
            console.log("blocks:", blocks)
            //console.log("match:", txt.match(divisors[level]))
            console.log("divisors[level]:", divisors[level])
            console.log("captureDivisor:", captureDivisor)
        }

        //if(blocks[0].trim()=="") blocks.shift()
        
        if(captureDivisor){
            let block, content, detectedDivisor = ""
            for(var i=0; i<blocks.length; i+=2){
                console.log("+++", i)
                block = blocks[i]
                if(!block || block.trim()==""){
                    i++
                    continue
                }
                //if(block.match(divisors[level])){
                
                detectedDivisor = i>0?block[i-1]:""
                content = block[i]

                console.log("   ++++++++ level, detectedDivisor:", level, detectedDivisor)
                if(level<divisors.length){
                    getSubTexts(i>0?(detectedDivisor+content).trim():block.trim(), level+1, node)
                }
            }
        } else {
            blocks.forEach(block=>{
                if(!block || block.trim()=="") return
                block = block.trim()
                if(level<divisors.length) getSubTexts(block, level+1, node)
            })
        }
        
    }

    getSubTexts(text, 0)

    tree.nodes[0].name = parentName

    return tree
}


let imageToTableOfRGBA=function(img, brgbaStringsInCells) {
 if(img == null || img.width <= 0) return null;
 brgbaStringsInCells = brgbaStringsInCells == null ? false : brgbaStringsInCells;
 let data = _getPixelData(img);
 if(data == null) return null;
 let tab;
 if(brgbaStringsInCells){
   tab = new T();
   for(var col=0; col < img.width; col++){
     tab.push(new cL());
     for(var row=0; row < img.height; row++)
       tab[col].push('');
   }
 }
 else
  tab = createUniformTable(img.width,img.height,[]);
 // var i = (y * width + x) * 4;
 let x,y,r,g,b,a;
 for(var i=0;i<data.length;i+=4){
   x = (i / 4) % img.width;
   y = Math.floor((i / 4) / img.width);
   if(brgbaStringsInCells)
     tab[x][y] = 'rgba('+data[i]+','+data[i+1]+','+data[i+2]+','+data[i+3]/255+')';
   else
     tab[x][y] = [data[i],data[i+1],data[i+2],data[i+3]/255];
 }
 return tab;
}
let invertImageColors=function(img) {
 if(img == null || img.width <= 0) return null;
 let data = _getPixelData(img);
 if(data == null) return null;
 for(var i=0;i<data.length;i+=4){
   data[i]   = 255 - data[i];
   data[i+1] = 255 - data[i+1];
   data[i+2] = 255 - data[i+2];
 }
 let inverted = new ImageData(data, img.width, img.height);
 return _makeImageFromData(inverted);
}
let grayscaleImage=function(img) {
 if(img == null || img.width <= 0) return null;
 let data = _getPixelData(img);
 if(data == null) return null;
 for(var i=0;i<data.length;i+=4){
   // CIE luminance for the RGB
   var v = 0.2126*data[i] + 0.7152*data[i+1] + 0.0722*data[i+2];
   data[i] = data[i+1] = data[i+2] = v;
 }
 let grayed = new ImageData(data, img.width, img.height);
 return _makeImageFromData(grayed);
}


let cropImage=function(img, x, y, w, h) {
 if(img == null || img.width <= 0 ) return null;
  if(img.isList){
   // operate on each one in the list
   var Lout = new L();
   for(var i=0; i < img.length; i++){
     var res = cropImage(img[i],x, y, w, h);
     Lout = Lout.concat(res);
   }
   return Lout;
 }
  x = x == null ? 0 : x;
 y = y == null ? 0 : y;
 w = w == null ? img.width : w;
 h = h == null ? img.height : h;
 let canvas = document.createElement('canvas');
 let context = canvas.getContext('2d');
 canvas.width = img.width;
 canvas.height = img.height;
 context.drawImage(img, 0, 0 );
  var odata = context.getImageData(x, y, w, h);
 return _makeImageFromData(odata);
}
let resizeImage=function(img, width, height, method, colorBackground) {
 if(img == null || img.width <= 0) return null;
 width = width == null || Math.round(width) <= 0 ? 200 : Math.round(width);
 height = height == null || Math.round(height) <= 0 ? Math.round(width/img.width*img.height) : Math.round(height);
 method = method == null || (method!=0 && method!=1) ? 0 : method;
 colorBackground = colorBackground == null ? 'topleft' : colorBackground;
  // make temporary metacanvas object
 let gt = new MetaCanvas({
   container: null,
   dimensions: {width: width, height: height},
   noLoop: true,
   noStart: true
 });
  var imgRet;
 if(method == 0){
   var clr = colorBackground;
   if(clr.toLowerCase() == 'topleft'){
     var data = _getPixelData(img);
     clr = 'rgba('+data[0]+','+data[1]+','+data[2]+','+(data[3]/255).toFixed(2)+')';
   }
   gt.fill(clr);
   gt.fRect(0,0,width,height);
   var x2,y2,w2,h2;
   h2 = Math.min(height,width*img.height/img.width);
   w2 = h2*img.width/img.height;
   x2=(width-w2)/2;
   y2=(height-h2)/2;
   gt.drawImage(img,0,0,img.width,img.height,x2,y2,w2,h2);
   imgRet = gt.captureCanvas();
 }
 else if(method == 1){
   gt.drawImage(img,0,0,img.width,img.height,0,0,width,height);
   imgRet = gt.captureCanvas();
 }
  return imgRet;
}

let getDataURL=function(img, bHTMLResult) {
 if(img == null || img.width <= 0) return null;
 // make temporary graphics object
 let gt = new MetaCanvas({
   container: null,
   dimensions: {width: img.width, height: img.height},
   noLoop: true,
   noStart: true
 });
 gt.drawImage(img, 0, 0);
 let im2 = gt.captureCanvas();
 if(bHTMLResult)
   return '<img src="' + im2.src + '">';
 return im2.src;
}
let _getPixelData=function(img) {
 if(img == null || img.width <= 0) return null;
 let data;
 try {
   var canvas = document.createElement('canvas');
   var context = canvas.getContext('2d');
   canvas.width = img.width;
   canvas.height = img.height;
   context.drawImage(img, 0, 0 );
   data = context.getImageData(0, 0, img.width, img.height).data;
 }
 catch(err){
   throw(err);
 }
 return data;
}
let _makeImageFromData=function(imgData) {
 if(imgData == null || imgData.width == null || imgData.width <= 0 || imgData.height <=0) return null;
 try {
   var canvas = document.createElement('canvas');
   var context = canvas.getContext('2d');
   canvas.width = imgData.width;
   canvas.height = imgData.height;
   context.putImageData(imgData, 0, 0 );
   var img2 = document.createElement('img');
   img2.src = canvas.toDataURL("image/png");
 }
 catch(err){
   throw(err);
 }
 return img2;
}


//
let checkIfIsMarkdown = function(text) {
    // Regular expressions to match common Markdown syntax
    const markdownPatterns = [
        /^#{1,6}\s+/m,                      // Headings: #, ##, ###, ####, #####, ######
        /\*\*[^*]+\*\*/,                    // Bold: **text**
        /\*[^*]+\*/,                        // Italic: *text* or _text_
        /\[[^\]]+\]\([^\)]+\)/,             // Links: [text](url)
        /^\s*-\s+/m,                        // Unordered list: - item
        /^\s*\d+\.\s+/m,                    // Ordered list: 1. item
        /^>\s+/m,                           // Blockquote: > quote
        /^`{3}.*$/m,                        // Fenced code block: ``` code ```
        /`[^`]+`/,                          // Inline code: `code`
        /^[-*_]{3,}\s*$/m                   // Horizontal rule: ---, ***, ***
    ]

    // Check if the text matches any of the Markdown patterns
    return markdownPatterns.some(pattern => pattern.test(text))
}


//known before as Fasthtml
let expandSimpleHtml = function(abreviatedHTML, idForLinks, entersAsBreaks) {
 if(abreviatedHTML == null || abreviatedHTML === "") return "";
 if(entersAsBreaks) abreviatedHTML = abreviatedHTML.replaceAll("\n", "<br>")
  var bit;
  if(abreviatedHTML.split("<").length != abreviatedHTML.split(">").length) return abreviatedHTML;
  var newText = abreviatedHTML;
 if(newText.indexOf("<fs")!=-1){
   bit = "";
   while(bit != null) {
     bit = getFirstTextBetweenStrings(newText, "<fs", ">"); //OperacionesString.textEntreSubStrings(newText, "<fs", ">");
     if(bit != null) newText = newText.replace("<fs" + bit + ">", "<font style=\"font-size:" + Number(bit) + "px\">");
     if(newText.indexOf(">") == -1) bit = null;
   }
 }
  bit = "";
 while(bit != null) {
   bit = getFirstTextBetweenStrings(newText, "<ff", ">");
   if(bit != null) newText = newText.replace("<ff" + bit + ">", "<font face=\"" + bit + "\">");
 }
  newText = newText.replace(/¬/, "<br/>");
 newText = newText.replace(/<fcBlack>/g, "<font color=\"#000000\">");
 newText = newText.replace(/<fcWhite>/g, "<font color=\"#FFFFFF\">");
 newText = newText.replace(/<fcRed>/g, "<font color=\"#FF0000\">");
 newText = newText.replace(/<fcGreen>/g, "<font color=\"#00FF00\">");
 newText = newText.replace(/<fcBlue>/g, "<font color=\"#0000FF\">");
 newText = newText.replace(/<fcOrange>/g, "<font color=\"#FFAA00\">");
  newText = newText.replace(/<fcCyan>/g, "<font color=\"#00FFFF\">");
 newText = newText.replace(/<fcYellow>/g, "<font color=\"#FFFF00\">");
 newText = newText.replace(/<fcMagenta>/g, "<font color=\"#FF00FF\">");
  bit = "";
 while(bit != null) {
   bit = getFirstTextBetweenStrings(newText, "<fcuint", ">");
   if(bit != null) newText = newText.replace("<fcuint" + bit + ">", "<font color=\"" + uinttoHEX(bit) + "\">");
 }
  bit = "";
 while(bit != null) {
   bit = getFirstTextBetweenStrings(newText, "<fccolor", ">");
   if(bit != null) newText = newText.replace("<fccolor" + bit + ">", "<font color=\"" + colorStringToHEX(bit) + "\">");
 }
  bit = "";
 while(bit != null) {
   bit = getFirstTextBetweenStrings(newText, "<frgb", ">");
   if(bit != null) {
     var rgb = bit.split(".");
     newText = newText.replace("<frgb" + bit + ">", "<font color=\"" + RGBtoHEX(Number(rgb[0]), Number(rgb[1]), Number(rgb[2])) + "\">");
   }
 }
  if(newText.indexOf("<fc")!=-1){
   bit = "";
   while(bit != null) {
     bit = getFirstTextBetweenStrings(newText, "<fc", ">");
     if(bit != null){
       //var newbit = bit[0];// == "#"?bit.substr(1):bit;
       newText = newText.replace("<fc" + bit + ">", "<font color=\"" + (bit[0]=="#"?"":"#") + bit + "\">");
     }
   }
 }
  bit = "";
 while(bit != null) {
   bit = getFirstTextBetweenStrings(newText, "<tl", ">");
   if(bit != null) newText = newText.replace("<tl" + bit + ">", "<textformat leftmargin=\"" + bit + "\">");
 }
  bit = "";
 while(bit != null) {
   bit = getFirstTextBetweenStrings(newText, "<tv", ">");
   if(bit != null) newText = newText.replace("<tv" + bit + ">", "<textformat leading=\"" + bit + "\">");
 }
   bit = "";
 let href;
 let text;
 let target;
   while(bit != null) {
   bit = getFirstTextBetweenStrings(newText, "<e", ">");
   if(bit != null) {
     href = bit.split("*")[0];
     text = bit.split("*")[1];
     if(bit.split("*").length > 2 && bit.split("*")[2] == "s") {
       target = "_self";
     } else {
       target = "_blank";
     }
     if(href.substr(0, 7) == "http://" ||  href.substr(0, 8) == "https://") {
       newText = newText.replace("<e" + bit + ">", "<u><a href='" + href + "' target='" + target + "'>" + text + "</a></u>");
     } else {
       newText = newText.replace("<e" + bit + ">", "<u><a href='javascript:document.clickLink(\"" + href + "\",\"" + idForLinks + "\")' FastHtml.onclick='event.preventDefault(); clickLink(\"" + href + "\",\"" + idForLinks + "\"); return false; '>" + text + "</a></u>");
     }
   }
 }
   newText = newText.replace(/<pl>/g, "<p align=\"left\">");
 newText = newText.replace(/<pc>/g, "<p align=\"center\">");
 newText = newText.replace(/<pr>/g, "<p align=\"right\">");
 newText = newText.replace(/<pj>/g, "<p align=\"justify\">");
 newText = newText.replace(/<\/f>/g, "</font>");
 newText = newText.replace(/<\/t>/g, "</textformat>");
  // c.log("/////////FastHtml convertion////////");
 // c.log(newText);
 // c.log("////////////////////////////////////");

  return newText;
}

let clickLink=function(param, idForLinks) {
 for(var i=0; i<FastHtml_clickLinkFunctionsToCall.length; i++){
   FastHtml_clickLinkFunctionsToCall[i].call(FastHtml_clickLinkTargetsToCall[i], param, idForLinks);
 }
 //FastHtml_linkFunction.call(target, param);
}

//---------------types dict-----------------
let _typeDict = {
    L,iL,cL,P,P3D,Pol,Pol3D,Rec,T,nT,polL,Nd,sL,ndL,relL,recL,Rel,Net,Tr,dI,dL,nL,I,pol3DL,cScale,MetaCanvas,Engine3D,Forces,
};


//---------------ClassUtils (only _typeOf, noOperation…)-----------------
let TwoPi=6.28318530718;function ifDef(value, fallback) {  if (value !== undefined && value !== null) {    return value;  } else {    return fallback;  }};function typeOf(e){if(null==e)return null;var t=typeof e;return"object"!==t?t:null!=e.type?e.type:"[object Array]"==Object.prototype.toString.call(e)?"Array":null!=e.getDate?"date":"Object"}var _typeOf=function(e){if(null==e)return null;var t=typeof e;return"object"!==t?t:null!=e.type?e.type:"[object Array]"==Object.prototype.toString.call(e)?"Array":null!=e.getDate?"date":"Object"},noOperation=function(){};function resizeThrottler(e,t){var n;return function(r){n||(n=setTimeout(function(){n=null,e(r)},t))}}
function instantiate(e,t){switch(e){case"number":case"string":return window[e](t);case"date":if(!t||0===t.length)return new Date;if(1==t.length){if(t[0].match(/d*.-d*.-d*Dd*.:d*.:d*/)){var n=t[0].split(" ");return n[0]=n[0].split("-"),n[1]?n[1]=n[1].split(":"):n[1]=new Array(0,0,0),new Date(Date.UTC(n[0][0],Number(n[0][1])-1,n[0][2],n[1][0],n[1][1],n[1][2]))}return"NaN"!=Number(t[0])?new Date(Number(t[0])):new Date(t[0])}return new Date(Date.UTC.apply(null,t));case"boolean":return window[e]("false"!=t&&"0"!=t);case"L":case"T":case"sL":case"nL":case"nT":case"ndL":case"relL":case"Pol":case"Pol3D":case"polL":case"dL":case"cL":case"iL":return _typeDict[e].apply(new _typeDict[e],t);case null:case void 0:case"undefined":return null}var r,a,i;return i=window[e],(a=function(){}).prototype=i.prototype,r=new a,i.apply(r,t),r}
function instanceSameType(e,t){return instantiate(typeOf(e),t)}

//---------------variables-----------------

let plasma = createColorScaleFromColors(cL.toL(['rgb(13,8,135)','rgb(125,3,168)','rgb(203,70,121)','rgb(248,148,65)','rgb(240,249,33)']),[0.25,0.5,0.75]);
let viridis = createColorScaleFromColors(cL.toL(['rgb(68,1,84)','rgb(59,81,139)','rgb(33,144,141)','rgb(92,200,99)','rgb(253,231,37)']),[0.25,0.5,0.75]);
let _HARDCODED_CATEGORICAL_COLORS = ["#d62728", "#1f77b4", "#2ca02c", "#ff7f00", "#9467bd", "#bcbd22", "#8c564b", "#17becf", "#dd4411", "#206010", "#e377c2", "#3330ff", "#dd8811", "#ff220e", "#1f66a3", "#8c453a", "#2ba01c", "#dfc500", "#945600", "#ff008b", "#e37700", "#7f7f7f"];
let DateOperators_millisecondsToHours = 1 / (1000 * 60 * 60);
let DateOperators_millisecondsToDays = 1 / (1000 * 60 * 60 * 24);
let DateOperators_millisecondsToWeeks = 1 / (1000 * 60 * 60 * 24 * 7);
let DateOperators_millisecondsToYears = 0.00000000003169;
let DateOperators_MONTH_NAMES = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
let DateOperators_MONTH_NAMES_SHORT = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
let DateOperators_MONTH_NDAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let DateOperators_WEEK_NAMES = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
let StringOperators_ENTER = String.fromCharCode(13);
let StringOperators_ENTER2 = String.fromCharCode(10);
let StringOperators_ENTER3 = String.fromCharCode(8232);
let StringOperators_SPACE = String.fromCharCode(32);
let StringOperators_SPACE2 = String.fromCharCode(160);
let StringOperators_TAB = " ";
let StringOperators_TAB2 = String.fromCharCode(9);
let StringOperators_LINK_REGEX = /(^|\s+)(https*\:\/\/\S+[^\.\s+])/;
let StringOperators_MAIL_REGEX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let StringOperators_STOP_WORDS = "t,s,mt,rt,re,m,http,amp,a,able,about,across,after,all,almost,also,am,among,an,and,any,are,as,at,be,because,been,but,by,can,cannot,could,dear,did,do,does,either,else,ever,every,for,from,get,got,had,has,have,he,her,hers,him,his,how,however,i,if,in,into,is,it,its,just,least,let,like,likely,may,me,might,most,must,my,neither,no,nor,not,of,off,often,on,or,other,our,own,rather,said,say,says,she,should,since,so,some,than,that,the,their,them,then,there,these,they,this,tis,to,too,twas,us,wants,was,we,were,what,when,where,which,while,who,whom,why,will,with,would,yet,you,your".split(",");
let StringOperators_WORDLISTS = {};
let NetworkEncodings_nodeNameSeparators = ['|', ':', ' is ', ' are ', '.', ','];
let NumberOperators_stackRandom = [];
//var NumberOperators_random = 1
//let NumberOperators_lastNormal = NaN;
let NumberOperators_random = Math.random
//let NumberOperators_lastNormal = NaN;
let NumberOperators_lastNormal = 1
let NumberOperators_SG_MAGICCONST = 1 + Math.log(4.5);
let NumberOperators_LOG4 = Math.log(4.0);
let TableEncodings_ENTER = String.fromCharCode(13);
let TableEncodings_ENTER2 = String.fromCharCode(10);
let TableEncodings_ENTER3 = String.fromCharCode(8232);
let TableEncodings_SPACE = String.fromCharCode(32);
let TableEncodings_SPACE2 = String.fromCharCode(160);
let TableEncodings_TAB = "  ";
let TableEncodings_TAB2 = String.fromCharCode(9);
let GeoOperators_EARTH_RADIUS = 6371009;
let GeoOperators_EARTH_DIAMETER = GeoOperators_EARTH_RADIUS * 2;
let DrawTexts_POINT_TO_PIXEL = 1.3333;
let DrawTexts_PIXEL_TO_POINT = 0.75;
let FastHtml_clickLinkFunctionsToCall = [];
let FastHtml_clickLinkTargetsToCall = [];
let FastHtml_target = null;
let FastHtml_linkFunction = null;



let _parseData = function(data, parse, params){
  switch(parse){
    case "csv":
      return toT(data, params)
    case "json":
      return JSON.parse(data)
    default:
      return data
  }
}
exports._parseData = _parseData

// Extend
exports.loadData = function(url, callback, parse, parseParams){
  var _parseD = _parseData
  var myHeaders = new Headers();
myHeaders.append('Content-Type','text/plain; charset=UTF-8');
  fetch(url, myHeaders)
    .then(res => res.text())
    .then(data => callback({result:_parseD(data, parse, parseParams), path:url}))
};

exports.loadDatas = function(urls, callbackEach, callBackAll, parse, parseParams){
  let nUrl = 0
  let url = urls[nUrl]
  let resultsL = new L()
  let _parseD = _parseData
  let singleParse = typeof parse == "string"?parse:null
  let arraysParses = Array.isArray(parse)?parse:null
  let callNext = function(){
    fetch(url)
      .then(res => res.text())
      .then(data => {
        let singleParseForLoad = arraysParses?arraysParses[nUrl]:singleParse
        let resultObject = {result:_parseD(data, singleParseForLoad, parseParams), path:url, nFile:nUrl}
        resultsL.push(resultObject);
        callbackEach?.(resultObject, resultsL)
        if(nUrl<urls.length-1){
          url = urls[++nUrl]
          callNext()
        } else {
          callBackAll?.(resultsL.downcast())
        }
      })
  }
  callNext()
}

let loadImage = function(url, callback, param){
    if(url==null) return

  var img = document.createElement('img')
  img.onload = function() {
      let resultObject = {
          path:url,
          result:img
      }
      if(callback) callback.call(this, resultObject, param);
  }
  img.onerror=function(e) {
    let resultObject = {
          path:url,
          result:null
      }
      if(callback) callback.call(this, resultObject, param);
  }
  //img.crossOrigin = 'Anonymous'
  img.src = url
}

let loadImages = function(urls, callbackEach, callBackAll){
  var nUrl = 0
  var url = urls[nUrl]
  var resultsL = new L()
  var images = new iL()
  //var _parseD = _parseData
  var callNext = function(){
    loadImage(url, ob=>{
        //callbackEach(ob)
        resultsL.push(ob)
        images.push(ob.result)
        callbackEach?.(ob, {paths:urls.slice(0,images.length), results:images})
        if(nUrl<urls.length-1){
          url = urls[++nUrl]
          callNext()
        } else {
          callBackAll?.({paths:urls, results:images})
        }
    })
  }
  callNext()
}




let downloadData = function(data, filename) {
    var element = document.createElement('a');
    element.setAttribute('href','data:text/plain;charset=utf-8,' + encodeURIComponent(data))
    element.setAttribute('download', filename)
    document.body.appendChild(element)
    element.click()
}

let downloadTable = function(table, filename) {
    let csv = TableToCSV(table, ",", true)
    downloadData(csv, filename)
}



exports.LOG = function(...theArgs){
  if(theArgs==null || theArgs[0]==null) return;
  if(theArgs[0]["isTable"]){
    var ob={};
    theArgs[0].forEach(l=>{ob[l.name]=l.serial()});
    return;
  } else if(theArgs[0]["isList"]){
    return;
  } else if(theArgs[0].type == "Net"){
    theArgs[0].nodes.forEach(nd => {
      nd.nodes.forEach( nd2 => nd2.color?console.log("%c  "+nd2.name, "color:"+nd2.color):console.log("  "+nd2.name));
    });
    console.groupEnd();
    return;
  } else if(theArgs[0]=="-"){
    console.table("----------------------------------------------");
    return;
  }
  console.log.apply(null, theArgs);
}

//**transformative!!
exports.passPropertiesObjects = function(listObjectsReceive, listObjectsGive, propertiesNames, passIfNull){
  propertiesNames.forEach(propName => listObjectsReceive.forEach((ob,i)=> {if(!passIfNull || ob[propName]==null){ob[propName] = listObjectsGive[i][propName]} }))
}

exports.passPropertiesToNodes = function(netReceive, netGive, propertiesNames, passIfNull = false){
  propertiesNames.forEach(propName => netGive.nodes.forEach(n=>{let n2=netReceive.get(n.id); if(n2){ if(!passIfNull || n2[propName]==null){n2[propName] = n[propName]} } }))
}

///////////////////////////////Array to List functions
let toL = function(array){
  //add string to list capability here
  return L.toL(array).downcast();
}
let tosL = function(array){
  return sL.toL(array);
}
let tonL = function(array){
  return nL.toL(array);
}
let todL = function(array){
  return dL.toL(array);
}
//maybe input is array of arrays
let toT = function(arrayOrString){
  if( typeof arrayOrString == 'string') return CSVToTable.apply(null, arguments);
  var arrayOrString = arrayOrString[0].isList?arrayOrString:arrayOrString.map((a)=>a.toL());
  return T.toL(arrayOrString).downcast();
}
let tonT = function(array){
  return nT.toL(array);
}
let tocL = function(array){
  return cL.toL(array);
}

//
let serial = function(ob){
  if(ob["isTable"]) return ob.map( t => t.slice());// ob.reduce((t, l,[]) => { t=t.concat(l)});
  if(ob["isList"]) return ob.slice();
  //Network -> serialize nodes and relations with essential properties
  //no nodess in Nodes and Relations
  //Relations has just two ids and weight
  //Net has only a list of Nodes and a list of Relations
  //finish (change name?)
}

Array.prototype.toL = function(){return toL(this)};
Array.prototype.tosL = function(){return tosL(this)};
Array.prototype.tonL = function(){return tonL(this)}
Array.prototype.todL = function(){return todL(this)}
Array.prototype.tocL = function(){return tocL(this)}
Array.prototype.toT = function(){return toT(this)};
Array.prototype.tonT = function(){return tonT(this)};


//serial methods
Array.prototype.serial = function(){return serial(this)};

exports.toL = toL
exports.tosL = tosL
exports.tonL = tonL
exports.todL = todL
exports.tocL = tocL
exports.toT = toT
exports.tonT = tonT
exports.serial = serial



L.prototype._filter = Array.prototype.filter
L.prototype.filter = function(...theArgs){LOG("…"); return this._filter(theArgs).toL()}


L.prototype.pushNew = function(){
  for(let i=0; i<arguments.length; i++){
    if(!this.includes(arguments[i])) this.push(arguments[i])
  }
}

L.prototype.concatNew = function(array){
  let newArray = []
  array.forEach(e=>{
    if(!this.includes(e)) newArray.push(e)
  })
  return this.concat(newArray)
}


	//transformative
	//takes an object an recursevely adds properties to it
	exports.deepAssign = function(object, objectToFusion, _level=0){//TODO: move to ObjectOperators
		//objectToFusion = JSON.parse(JSON.stringify(objectToFusion))
        _level++;//used to optionally control depth, log levels…
		for(var propName in object){
			if(objectToFusion[propName]!=null){
				if(objectToFusion[propName] instanceof Array){
					object[propName] = objectToFusion[propName];
				} else {
					var type = typeof(objectToFusion[propName]);
					var isObject = !(type=='number' || type=='string' || type=='boolean');
					if(isObject){
						exports.deepAssign(object[propName], objectToFusion[propName], _level);
					} else {
						object[propName] = objectToFusion[propName];
					}
				}
			}
		}
	}

	exports.expandTags = function(tagsList, character){
		character = character??",";
		return tagsList.join(character).getWithoutElement().split(character).tosL().trim();
	}


	//Table

	/**
	ATTENTION: it assumes the names of the nodes do not repeat
	**/
	var TableToNetwork = function(table, names, relationFunction, directed = true){
		let net = new Net()

		if(!Array.isArray(names)){
			names = table.get(names)
		}
        
        let node
        let newPropName
        
        names.forEach((name,i)=>{
            node = net.createNode(name, name)
            table.forEach(l=>{
            	if(l.name!="name" && l.name!="id"){
            		newPropName = l.name.replaceAll(" ","_").toLowerCase()
            		node[newPropName] = l[i]
            	}
            })
        })
        
        if(relationFunction){
        	let node2, relation
        	let relInfo
        	
        	net.nodes.forEach((node, i)=>{
        		net.nodes.forEach((node2, j)=>{
              if(i==j) return
              if(!directed && j<i) return
        			relInfo = relationFunction(node, node2)
        			if(relInfo){
        				let rel = net.createRelation(node, node2, node.name+"_"+node2.name)
        				for(let propName in relInfo){
        					rel[propName] = relInfo[propName]
        				}
        			}
        		})
        	})
        }
        
        return net
	}

  Net.prototype.createNode = function(id, name){
		var nd = this.nodes.get(id);
		if(nd) return nd;
		nd = new Nd(id, name||id);
		this.addNode(nd);
		return nd;
	}

  Net.prototype.filter = function(ffunc){
		var newNodes = this.nodes.filter(n=>ffunc(n));
		for(var i=0; i<this.nodes.length; i++){
			if(!newNodes.includes(this.nodes[i])){
				this.removeNode(this.nodes[i]);
				i--;
			}
		}
	}



  


 //Graphics

 MetaCanvas.prototype.fTexts = function(texts, xL, yL, sizes = null, colors = null){
   texts.forEach( (t,i)=>{if(sizes) this.fontSize = sizes[i]; if(colors) this.fontColor = colors[i]; this.fText(t, xL[i], yL[i])} )
 }
 //add: sTexts…
 MetaCanvas.prototype.fCircles = function(xL, yL, rL, colors = null){
   xL.forEach( (x,i)=>{if(colors) this.fill(colors[i]); this.fCircle(x, yL[i], rL[i])} )
 }

 MetaCanvas.prototype._setDragZoomTransformation = function(value){
   let fX = x => x*this.ZOOM + this.x0
     let fY = y => y*this.ZOOM + this.y0

     let invfX = x => (x-this.x0)/this.ZOOM
     let invfY = y => (y-this.y0)/this.ZOOM

     this.applyTransformationFunctions(fX, fY, null, invfX, invfY)
 }
 MetaCanvas.prototype.setDRAGGABLE = function(value){
    if(this.DRAGGABLE == value) return
   this.DRAGGABLE = value
       if(value){
         this.x0 = this.x0??0
         this.y0 = this.y0??0
         this.ZOOM = this.ZOOM??1
         this._setDragZoomTransformation()
       } else {
         if(!this.ZOOMABLE){
           this.resetTransformation()
         } else {
           this.x0 = this.x0??0
            this.y0 = this.y0??0
         }
       }
 }
 MetaCanvas.prototype.setZOOMABLE = function(value, maxZoom = 50, minZoom = 0.1){
    if(this.ZOOMABLE == value) return
   this.ZOOMABLE = value
   this.MAX_ZOOM = maxZoom
   this.MIN_ZOOM = minZoom
   if(value){
         this.x0 = this.x0??0
         this.y0 = this.y0??0
         this.ZOOM = this.ZOOM??1
         this._setDragZoomTransformation()
   } else {
     if(!this.DRAGGABLE){
       this.resetTransformation()
     } else {
       this.ZOOM = this.ZOOM??1
     }
   }
 }


/**
either a table with actors and tags --> returns a net of actors
or a table (or list) with just tags --> returns a net of tags
**/
exports.buildTagsNetwork = function(table, splitChar = ",", minCoOccurrences=1){
    if(table==null) return;

    var net = new Net();

    //just tags
    if(table.length==1 || (!table["isTable"] && table["isList"])){
      var tags = table["isTable"]?table[0]:table;
      var countPairs = {}
      let part0, part1

      tags.forEach((block,index)=>{
        if(block==null) return
        let parts = block.split(splitChar)
        //let n0, n1
        for(let i=0; i<parts.length; i++){
          //n0 = net.nodes.get(parts[i])
          //if(n0==null) new Nd(parts[i], parts[i])
          for(let j=i+1; j<parts.length; j++){
            //n0 = net.nodes.get(parts[i])
            //if(n0==null) new Nd(parts[i], parts[i])
            
            if(parts[i]<parts[j]){
              part0 = parts[i]
              part1 = parts[j]
            } else {
              part0 = parts[j]
              part1 = parts[i]
            }

            let countPairsOb = countPairs[part0+"_"+part1]

            if(countPairsOb==null){
              countPairsOb = countPairs[part0+"_"+part1]={
                count:0,
                indexes:[],
                indexesDic:{}
              }
            }

            countPairsOb.count++
            if(!countPairsOb.indexesDic["_"+index]){
              countPairsOb.indexes.push(index)
              countPairsOb.indexesDic["_"+index] = true
            }
          } 
        }
      })

      let nlPairs = new nL()
      let n0, n1, r
      let nWMax = 1
      let rWMax = 1
      for(let pairName in countPairs){
        let n = countPairs[pairName].count
        if(n>=minCoOccurrences){
          //console.log(pairName, n, countPairs["indexes_"+pairName])
          let parts = pairName.split("_")
          n0 = net.createNode(parts[0])
          n1 = net.createNode(parts[1])
          if(n0.indexes==null) n0.indexes=[]
          if(n1.indexes==null) n1.indexes=[]
          n0.indexes = n0.indexes.concat(countPairs[pairName].indexes)
          n1.indexes = n1.indexes.concat(countPairs[pairName].indexes)
          n0.weight++
          n1.weight++
          nWMax = Math.max(nWMax, n0.weight, n1.weight)
          r = net.createRelation(n0, n1)
          r.weight = (1+n-minCoOccurrences)
          r.count = n
          rWMax = Math.max(rWMax, r.weight)
        }
      }

      net.nodes.forEach(n=>{
        n.weight=0.5 + 0.5*n.weight/nWMax
        n.indexes = _.tonL(n.indexes).getWithoutRepetitions()
      })

      net.relations.forEach(r=>r.weight = 0.2 + 0.8*r.weight/rWMax)

      return net
    }

    var actor = table[0];
    var tags = table[1];
    
    actor.forEach(name => {
      var nd = new Nd(name, name);
      net.addNode(nd);
      nd.kind = nameActor??"actor";
      nd.color = "blue";
    });
    tags.forEach((string,i) => {
      if(string==null) return;
      var nd = net.nodes[i];
      var tagsList = string.split(",").toL().trim();
      tagsList.forEach(tag => {
        var tagNd = net.createNode(tag, tag);
        tagNd.kind = nameTags??"tag";
        tagNd.color = "red";
        net.createRelation(nd, tagNd);
      });
    });
    return net;
  }

 //geometry
 exports.expandForBarycenters = function(polL, factor){
  if(!polL) return
  var newPolL = new PolL()
  newPolL.name = polL.name
  polL.forEach(p=>newPolL.push(expandForBarycenter(p,factor)))
  return newPolL
}

exports.closestPointToLine = function(x, y, x0, y0, x1, y1){
  let a_to_p_x = x-x0
  let a_to_p_y = y-y0
  let a_to_b_x = x1-x0
  let a_to_b_y = y1-y0
  let atb2 = a_to_b_x**2 + a_to_b_y**2
  let atp_dot_atb = a_to_p_x*a_to_b_x + a_to_p_y*a_to_b_y
  let t = atp_dot_atb / atb2
  return new _.P(x0 + a_to_b_x*t, y0 + a_to_b_y*t)
}
exports.distanceToLine2 = function(x, y, x0, y0, x1, y1){
  let p = this.closestPointToLine(x, y, x0, y0, x1, y1)
  return (p.x-x)**2+(p.y-y)**2
}
exports.distanceToLine = function(x, y, x0, y0, x1, y1){
  let p = this.closestPointToLine(x, y, x0, y0, x1, y1)
  return Math.sqrt((p.x-x)**2+(p.y-y)**2)
}


//dataDropper
exports.dataDropper = function(data, fileName, path) {
    if(!data) return
    if(!fileName) return
    
    let absolute
    
    if(!path){
        path = "data/"
        absolute = "https://moebio.protozoo.com/dataDropper/"+path
    } else if(path?.startsWith("DATA")){
        absolute = "https://moebio.protozoo.com/data/"+path.substr(5)
        path = "../data/"+path.substr(5)
    }
    if(path!="" && !path.endsWith("/")){
        path+="/"
        absolute+="/"
    }
    
    path+=fileName
    absolute+=fileName
    
    var phpUrl = "https://moebio.protozoo.com/dataDropper/storeData.php"
    var client = new XMLHttpRequest()
    client.onreadystatechange = function() {
      console.log("dataDropper | this.readyState: "+this.readyState)
      if (this.readyState == 4) console.log('sent');
    };
    client.open('POST', phpUrl, true)
    // this controls the content type of the post
    //client.setRequestHeader('Content-Type', 'text/xml');
    // we can send XML since we set content-type to xml
    //var receive = client.send("erase_me.txt<***>data/other/<***>"+text);
    var receive = client.send(path+"<***>"+data)
    
    return absolute
}

L.prototype.getRandomElement=function() {//lacks seed
  return this[Math.floor(this.length * Math.random())];
}
random = Math.random
NumberOperators_random = Math.random




//---------------exports-----------------

exports.pulse_version=pulse_version
exports.L=L
exports.iL=iL
exports.cL=cL
exports.P=P
exports.P3D=P3D
exports.Pol=Pol
exports.Pol3D=Pol3D
exports.Rec=Rec
exports.T=T
exports.nT=nT
exports.polL=polL
exports.Nd=Nd
exports.sL=sL
exports.ndL=ndL
exports.relL=relL
exports.recL=recL
exports.Rel=Rel
exports.Net=Net
exports.Tr=Tr
exports.dI=dI
exports.dL=dL
exports.nL=nL
exports.I=I
exports.pol3DL=pol3DL
exports.cScale=cScale
exports.MetaCanvas=MetaCanvas
exports.Engine3D=Engine3D
exports.Forces=Forces
exports.interpolateColors=interpolateColors
exports.interpolateColorsRGB=interpolateColorsRGB
exports.distanceColorsRGB=distanceColorsRGB
exports.addAlpha=addAlpha
exports.invertColor=invertColor
exports.stringToColor=stringToColor
exports.HEXtoRGB=HEXtoRGB
exports.RGBtoHEX=RGBtoHEX
exports.RGBArrayToString=RGBArrayToString
exports.colorStringToHEX=colorStringToHEX
exports.numberToHex=numberToHex
exports.uinttoRGB=uinttoRGB
exports.uinttoHEX=uinttoHEX
exports.RGBtouint=RGBtouint
exports.HEXtouint=HEXtouint
exports.grayByLevel=grayByLevel
exports.HEXtoHSV=HEXtoHSV
exports.HSVtoHEX=HSVtoHEX
exports.HSLtoHEX=HSLtoHEX
exports.RGBtoHSV=RGBtoHSV
exports.HSVtoRGB=HSVtoRGB
exports.HSLtoRGB=HSLtoRGB
exports.invertColorRGB=invertColorRGB
exports.toHex=toHex
exports.getRandomColor=getRandomColor
exports.colorStringToRGB=colorStringToRGB
exports.createSortedNumberList=createSortedNumberList
exports.createNumberListWithinInterval=createNumberListWithinInterval
exports.createRandomNormalDistribution=createRandomNormalDistribution
exports.createRandomBetaPERTDistribution=createRandomBetaPERTDistribution
exports.createRandomBimodalDistribution=createRandomBimodalDistribution
exports.createRandomNumbers=createRandomNumbers
exports.createUniformTable=createUniformTable
exports.dotProduct=dotProduct
exports.linearRegression=linearRegression
exports.distance=distance
exports.cosineSimilarity=cosineSimilarity
exports.covariance=covariance
exports.standardDeviationTwoNumberLists=standardDeviationTwoNumberLists
exports.numericCorrelation=numericCorrelation
exports.slidingWindowCorrelation=slidingWindowCorrelation
exports.normalizeToSum=normalizeToSum
exports.normalizeByZScore=normalizeByZScore
exports.normalizeToMax=normalizeToMax
exports.normalizeToInterval=normalizeToInterval
exports.trimNumberList=trimNumberList
exports.getAccumulativeSum=getAccumulativeSum
exports.shorten=shorten
exports.simplify=simplify
exports.segmentNumberList=segmentNumberList
exports.averageSmoother=averageSmoother
exports.closestValue=closestValue
exports.filterNumberListByInterval=filterNumberListByInterval
exports.filterNumberListByNumber=filterNumberListByNumber
exports.frameFromTwoNumberLists=frameFromTwoNumberLists
exports.rangeCounts=rangeCounts
exports.simpleCompression=simpleCompression
exports.regression=regression
exports.getDecimalsInterval=getDecimalsInterval
exports.setDecimals=setDecimals
exports.getDistributionHeights=getDistributionHeights
exports.kNearestNeighbours=kNearestNeighbours
exports.skewness=skewness
exports.TableToObject=TableToObject
exports.ArrayOfArraysToTable=ArrayOfArraysToTable
exports.tableToHtml=tableToHtml
exports.tableToList=tableToList
exports.createColorScaleFromColors=createColorScaleFromColors
exports.blackScale=blackScale
exports.grayscale=grayscale
exports.antiGrayscale=antiGrayscale
exports.antiTemperature=antiTemperature
exports.temperature=temperature
exports.lightTemperature=lightTemperature
exports.sqrtTemperature=sqrtTemperature
exports.sqrt4Temperature=sqrt4Temperature
exports.quadraticTemperature=quadraticTemperature
exports.cubicTemperature=cubicTemperature
exports.greenToRed=greenToRed
exports.greenToBlue=greenToBlue
exports.grayToOrange=grayToOrange
exports.sqrt4GrayToOrange=sqrt4GrayToOrange
exports.blueToRed=blueToRed
exports.whiteToRed=whiteToRed
exports.redToBlue=redToBlue
exports.greenWhiteRed=greenWhiteRed
exports.blueWhiteRed=blueWhiteRed
exports.blueBlackRed=blueBlackRed
exports.grayBlackOrange=grayBlackOrange
exports.grayWhiteOrange=grayWhiteOrange
exports.solar=solar
exports.antiSolar=antiSolar
exports.get=get
exports.getFirstElements=getFirstElements
exports.containSameElements=containSameElements
exports.fractionOfSameElements=fractionOfSameElements
exports.getCorrespondenceBetweenLists=getCorrespondenceBetweenLists
exports.getConfusionMatrix=getConfusionMatrix
exports.indexOf=indexOf
exports.replaceElement=replaceElement
exports.replaceElementAtIndex=replaceElementAtIndex
exports.replaceNullsInList=replaceNullsInList
exports.concat=concat
exports.reverse=reverse
exports.getBooleanDictionaryForList=getBooleanDictionaryForList
exports.getFirstOccurrenceDictionaryForList=getFirstOccurrenceDictionaryForList
exports.getIndexesDictionary=getIndexesDictionary
exports.getIndexesTable=getIndexesTable
exports.buildDictionaryObjectForDictionary=buildDictionaryObjectForDictionary
exports.mapWithTable=mapWithTable
exports.mapWithObject=mapWithObject
exports.sortListByNumberList=sortListByNumberList
exports.getRankingsList=getRankingsList
exports.sortListByIndexes=sortListByIndexes
exports.concatWithoutRepetitions=concatWithoutRepetitions
exports.slidingWindowOnList=slidingWindowOnList
exports.getNewListForObjectType=getNewListForObjectType
exports.union=union
exports.intersection=intersection
exports.difference=difference
exports.symmetricDifference=symmetricDifference
exports.jaccardIndex=jaccardIndex
exports.jaccardDistance=jaccardDistance
exports.filterList=filterList
exports.mapWithFunction=mapWithFunction
exports.mapFunctionsOnList=mapFunctionsOnList
exports.aggregateList=aggregateList
exports.subCategoricalAnalysis=subCategoricalAnalysis
exports.getListEntropy=getListEntropy
exports.getListDiversity=getListDiversity
exports.getInformationGain=getInformationGain
//exports.groupElements=groupElements
exports.groupElementsByPropertyValue=groupElementsByPropertyValue
//exports._groupElements_Base=_groupElements_Base
exports.repeatElements=repeatElements
exports._isCategorical=_isCategorical
exports.buildInformationObjectForList=buildInformationObjectForList
exports.kCombinations=kCombinations
exports.allSubLists=allSubLists
exports.crossCombineLists=crossCombineLists
exports.characterizeList=characterizeList
exports.isColor = isColor
exports.areColor = areColor
exports.createDefaultCategoricalColorList=createDefaultCategoricalColorList
exports.colorsForCategoricalList=colorsForCategoricalList
exports.createCategoricalColorListForList=createCategoricalColorListForList
exports.createColorListFromColorScale=createColorListFromColorScale
exports.createColorListFromNumberList=createColorListFromNumberList
exports.createSymmetricalColorListFromNumberList=createSymmetricalColorListFromNumberList
exports.createColorListWithSingleColor=createColorListWithSingleColor
exports.createColorListBetweenTwoColors=createColorListBetweenTwoColors
exports.createColorListSpectrum=createColorListSpectrum
exports.stringsToColors=stringsToColors
exports.createCategoricalColors=createCategoricalColors
exports._sortingVariation=_sortingVariation
exports._evaluationFunction=_evaluationFunction
exports.createCategoricalColorListDictionaryObject=createCategoricalColorListDictionaryObject
exports.stringToDate=stringToDate
exports.dateToString=dateToString
exports.clearHoursMinutesSeconds=clearHoursMinutesSeconds
exports.currentDate=currentDate
exports.addDaysToDate=addDaysToDate
exports.addMillisecondsToDate=addMillisecondsToDate
exports.parseDate=parseDate
exports.parseDates=parseDates
exports.hoursBetweenDates=hoursBetweenDates
exports.daysBetweenDates=daysBetweenDates
exports.weeksBetweenDates=weeksBetweenDates
exports.yearsBetweenDates=yearsBetweenDates
exports.nDayInYear=nDayInYear
exports.getDateDaysAgo=getDateDaysAgo
exports.getWeekInYear=getWeekInYear
exports.getNDaysInMonth=getNDaysInMonth
exports.getDecimalDate=getDecimalDate
exports.convertFromDecimalDate=convertFromDecimalDate
exports.extractPropertiesFromDate=extractPropertiesFromDate
exports.StringListToNumberList=StringListToNumberList
exports.toDateList=toDateList
exports._y=_y
exports._m=_m
exports._d=_d
exports._h=_h
exports._mn=_mn
exports._s=_s
exports._ms=_ms
exports.getDateLists=getDateLists
exports.buildSummaryTableFromDates=buildSummaryTableFromDates
exports.transformDateList=transformDateList
exports.changeTimeResolution=changeTimeResolution
exports.getElementFromTable=getElementFromTable
exports.getSubTable=getSubTable
exports.sliceColumns=sliceColumns
exports.filterTable=filterTable
exports.filterColumns=filterColumns
exports.getSubTableByElementOnList=getSubTableByElementOnList
exports.getSubTableByElementsOnList=getSubTableByElementsOnList
exports.getRandomRows=getRandomRows
exports.transpose=transpose
exports.replaceElementInTable=replaceElementInTable
exports.replaceSectionInTable=replaceSectionInTable
exports.replaceNullsInTable=replaceNullsInTable
exports.testClassificationModel=testClassificationModel
exports.getRows=getRows
exports.sortListsByNumberList=sortListsByNumberList
exports.aggregateTable=aggregateTable
exports.disAggregateTable=disAggregateTable
exports.deSegmentTable=deSegmentTable
exports.pivotTable=pivotTable
exports.unpivotTable=unpivotTable
exports.getCountPairsMatrix=getCountPairsMatrix
exports.getPairsFrequencyTable=getPairsFrequencyTable
exports.concatenateRowElements=concatenateRowElements
exports.filterTableByElementInList=filterTableByElementInList
exports.filterTableByElementsInList=filterTableByElementsInList
exports.selectRows=selectRows
exports.joinTables=joinTables
exports.joinMultipleTables=joinMultipleTables
exports.combineLists=combineLists
exports.completeTable=completeTable
exports.getNumberTableFromTable=getNumberTableFromTable
exports.getVariablesInformationGain=getVariablesInformationGain
exports.splitTableByCategoricList=splitTableByCategoricList
exports.buildCorrelationsNetwork=buildCorrelationsNetwork
exports.buildSimpleDecisionTree=buildSimpleDecisionTree
exports.buildDecisionTree=buildDecisionTree
exports._buildDecisionTreeNode=_buildDecisionTreeNode
exports._decisionTreeGenerateColorsMixture=_decisionTreeGenerateColorsMixture
exports.allListsSameLength=allListsSameLength
exports.getListsWithoutRepetition=getListsWithoutRepetition
exports.getNumberOfDifferentElementsOfLists=getNumberOfDifferentElementsOfLists
exports.buildInformationObjectForTable=buildInformationObjectForTable
exports.getCategoricalLists=getCategoricalLists
exports.getTableSimplified=getTableSimplified
exports.concatTables=concatTables
exports.concatRows=concatRows
exports.concatLists=concatLists
exports.unionListsFromTables=unionListsFromTables
exports.intersectListsFromTables=intersectListsFromTables
exports.encodeStringLists=encodeStringLists
exports.translateListsWithDictionary=translateListsWithDictionary
exports.getModes=getModes
exports.getSubTables=getSubTables
exports.mapFunctionOnLists=mapFunctionOnLists
exports.mapFunctionsOnLists=mapFunctionsOnLists
exports.useVariablesDictionary=useVariablesDictionary
exports.matrixToTwoColumns=matrixToTwoColumns
exports._preserveOrder=_preserveOrder
exports.concatStrings=concatStrings
exports.join=join
exports.cleanTexts=cleanTexts
exports.filterStringListByString=filterStringListByString
exports.replaceStringsInTexts=replaceStringsInTexts
exports.replaceStringInTexts=replaceStringInTexts
exports.replaceStringsInTextsByStrings=replaceStringsInTextsByStrings
exports.countStringsOccurrencesOnTexts=countStringsOccurrencesOnTexts
exports.getWordsInTextsOccurrencesTable=getWordsInTextsOccurrencesTable
exports.createShortTextsNetwork=createShortTextsNetwork
exports.splitStrings=splitStrings
exports.encodeStringsAsNumericFeatures=encodeStringsAsNumericFeatures
exports.correlationRatio=correlationRatio
exports.splitByEnter=splitByEnter
exports.replaceStringInText=replaceStringInText
exports.replaceStringsInText=replaceStringsInText
exports.removeTextsBetweenStrings=removeTextsBetweenStrings
exports.getWords=getWords
exports.getBigrams=getBigrams
exports.substr=substr
exports.splitString=splitString
exports.getFirstTextBetweenStrings=getFirstTextBetweenStrings
exports.getAllTextsBetweenStrings=getAllTextsBetweenStrings
exports.textContainsString=textContainsString
exports.getParenthesisContents=getParenthesisContents
exports.getFirstParenthesisContent=getFirstParenthesisContent
exports.getFirstParenthesisContentWithIndexes=getFirstParenthesisContentWithIndexes
exports.placeString=placeString
exports.insertString=insertString
exports.cleanText=cleanText
exports.removeEnters=removeEnters
exports.removeTabs=removeTabs
exports.removePunctuation=removePunctuation
exports.removeDoubleSpaces=removeDoubleSpaces
exports.removeHtmlTags=removeHtmlTags
exports.escapeForRegExp=escapeForRegExp
exports.removeLinks=removeLinks
exports.removeQuotes=removeQuotes
exports.removeAccentsAndDiacritics=removeAccentsAndDiacritics
exports.getWordsOccurrencesTable=getWordsOccurrencesTable
exports.indexesOf=indexesOf
exports.indexesOfString=indexesOfString
exports.repeatString=repeatString
exports.countStringOccurrences=countStringOccurrences
exports.countOccurrences=countOccurrences
exports.countWordOccurrences=countWordOccurrences
exports.countRegexOccurrences=countRegexOccurrences
exports.countStringsOccurrences=countStringsOccurrences
exports.validateEmail=validateEmail
exports.validateUrl=validateUrl
exports.getLevenshteinDistance=getLevenshteinDistance
exports.getClosestLevenshtein = getClosestLevenshtein
exports.getNgrams=getNgrams
exports.stringToFunction=stringToFunction
exports.stringFormat=stringFormat
exports.createListWithSameElement=createListWithSameElement
exports.createIterationSequence=createIterationSequence
exports.createListWithUniqueElements=createListWithUniqueElements
exports.replaceChomasInTextLine=replaceChomasInTextLine
exports._replaceSpacesInLine=_replaceSpacesInLine

exports.decodeTextNet=decodeTextNet
exports._simplifyForTextNet=_simplifyForTextNet
exports._regexWordForTextNet=_regexWordForTextNet
exports.encodeTextNet=encodeTextNet

exports.modelInfluence=modelInfluence
exports.prepareTable = prepareTable
exports.NetworkToTable=NetworkToTable
exports.TableToNetwork=TableToNetwork
exports.TableToNetworkPairs=TableToNetworkPairs
exports.matrixToNetwork=matrixToNetwork
exports.CSVToTable=CSVToTable
exports.jsonToTable=jsonToTable
exports.jsonToCSV=jsonToCSV
exports._removeQuotes=_removeQuotes
exports.TableToCSV=TableToCSV
//exports.TableToJSONString=TableToJSONString
exports.TableToJSON=TableToJSON
exports.JSONStringToTable=JSONStringToTable
exports.NumberListToPolygon=NumberListToPolygon
exports.NumberListToStringList=NumberListToStringList
exports.ObjectToTable=ObjectToTable
exports.ObjectToList=ObjectToList
exports.objectToString=objectToString
exports.conversor=conversor
exports.ArrayToList=ArrayToList
exports.angleFromTwoPoints=angleFromTwoPoints
exports.dot=dot
exports.twoPointsInterpolation=twoPointsInterpolation
exports.pointMultiplication=pointMultiplication
exports.normalizeTableToMax=normalizeTableToMax
exports.normalizeLists=normalizeLists
exports.normalizeListsToMax=normalizeListsToMax
exports.normalizeListsToSum=normalizeListsToSum
exports.normalizeListsToInterval=normalizeListsToInterval
exports.averageSmootherOnLists=averageSmootherOnLists
exports.kMeans=kMeans
exports.product=product
exports.getCovarianceMatrix=getCovarianceMatrix
exports.generateNumberTable=generateNumberTable
exports.identity=identity
exports.mergeObjects=mergeObjects
exports.cloneObject=cloneObject
exports.serliazeObject=serliazeObject
exports.getInterval=getInterval
exports.getFrame=getFrame
exports.getInfo=getInfo
exports.getObjectStructure=getObjectStructure
exports.replaceValuesByNull=replaceValuesByNull
exports.getLength=getLength
exports.includes=includes
exports.getPropertyValue=getPropertyValue
exports.getPropertyValues=getPropertyValues
exports.getPropertyValuesInterval=getPropertyValuesInterval
exports.getMultiplePropertyValues=getMultiplePropertyValues
exports.getName=getName
exports.isPropertyValue=isPropertyValue
exports.getPropertiesNames=getPropertiesNames
exports.getPropertiesNamesAndValues=getPropertiesNamesAndValues
exports.setPropertyValue=setPropertyValue
exports.interpolateObjects=interpolateObjects
exports.replaceObject=replaceObject
exports.toList=toList
exports.floor=floor
exports.addition=addition
exports.multiplication=multiplication
exports.division=division
exports.applyFunctionOnInput=applyFunctionOnInput
exports.isEqual=isEqual
exports._recursiveEqual=_recursiveEqual
exports.arrayOfArraysToTable=arrayOfArraysToTable
exports.operate=operate
exports._sum=_sum
exports._multiplication=_multiplication
exports._pow2=_pow2
exports._pow3=_pow3
exports._logSum=_logSum
exports._log2Sum=_log2Sum
exports._log_y=_log_y
exports._cosSum=_cosSum
exports._sinSum=_sinSum
exports._tanSum=_tanSum
exports._modulo=_modulo
exports._subtract=_subtract
exports._divide=_divide
exports.numberToString=numberToString
exports.getRandomWithSeed=getRandomWithSeed
exports.numberFromBinaryPositions=numberFromBinaryPositions
exports.numberFromBinaryValues=numberFromBinaryValues
exports._powersOfTwoDecomposition=_powersOfTwoDecomposition
exports.toBinary=toBinary
exports.binaryToNumber=binaryToNumber
exports.positionsFromBinaryValues=positionsFromBinaryValues
exports._Alea=_Alea
exports._Mash=_Mash
exports.random=random
exports.randomSeed=randomSeed
exports.randomSeedPop=randomSeedPop
exports.decimalPlaces=decimalPlaces
exports.logistic=logistic
exports.formatShort=formatShort
exports.numberToPosition=numberToPosition
exports.getSoftenControlPoints=getSoftenControlPoints
exports.bezierCurvePoints=bezierCurvePoints
exports.distanceToBezierCurve=distanceToBezierCurve
exports.triangleContainsPoint=triangleContainsPoint
exports.triangleArea=triangleArea
exports.lineFromTwoPoints=lineFromTwoPoints
exports.distancePointToLine=distancePointToLine
exports.distancePointToSegment=distancePointToSegment
exports.intersectionLines=intersectionLines
exports.intersectionLineRectangle=intersectionLineRectangle
exports.numberTableToPolygon=numberTableToPolygon
exports.numberTableToColorList=numberTableToColorList
exports.numberTableToNetwork=numberTableToNetwork
exports.buildDendrogramFromPolygon=buildDendrogramFromPolygon
exports._findClosestNodes=_findClosestNodes
exports.sortOnXY=sortOnXY
exports.expandFromBarycenter=expandFromBarycenter
exports.simplifyPolygon=simplifyPolygon
exports.bezierPolygonContainsPoint=bezierPolygonContainsPoint
exports.placePointsInsidePolygon=placePointsInsidePolygon
exports.placePointsInsideBezierPolygon=placePointsInsideBezierPolygon
exports.geoCoordinateToDecimal=geoCoordinateToDecimal
exports.geoDistance=geoDistance
exports.polygonLength=polygonLength
exports.minRect=minRect
exports.packingCircles=packingCircles
exports.packingRectangles=packingRectangles
exports.fillWithRectangles=fillWithRectangles
exports.squarify=squarify
exports.partitionRectangle=partitionRectangle
exports._getHighestRatio=_getHighestRatio
exports.simplifyPolygons=simplifyPolygons
exports.createPolygon=createPolygon
exports.twoNumberListsToPolygon=twoNumberListsToPolygon
exports.colorListFromColorScale=colorListFromColorScale
exports.colorListFromColorScaleFunction=colorListFromColorScaleFunction
exports.colorsLinearCombination=colorsLinearCombination
exports.polygon3DToColorList=polygon3DToColorList
exports.colorListToPolygon3D=colorListToPolygon3D
exports.randomColor=randomColor
exports.getFlowTable=getFlowTable
exports.getFlowTableIntervals=getFlowTableIntervals
exports.scaleIntervals=scaleIntervals
exports.nlsToIntervalList=nlsToIntervalList
exports.fillTextRectangle=fillTextRectangle
exports.fillTextRectangleWithTextLines=fillTextRectangleWithTextLines
exports.textWordWrapReturnLines=textWordWrapReturnLines
exports.getMaxTextWidth=getMaxTextWidth
exports.stringToObject=stringToObject
exports.stringToHash=stringToHash
exports._fnv_multiply=_fnv_multiply
exports._fnv_mix=_fnv_mix
exports.decodeIdentedTree=decodeIdentedTree
exports.TableToTree=TableToTree
exports.buildTagsTree=buildTagsTree
exports._getId=_getId
exports.TreeToTable=TreeToTable
exports.treeToObject=treeToObject
exports.filterNetworkByRelationsWeight=filterNetworkByRelationsWeight
//exports.objectToTree=objectToTree
exports.filterNodesByMinDegree=filterNodesByMinDegree
exports.degreeBetweenNodes=degreeBetweenNodes
exports.getNodesBetweenTwoNodes=getNodesBetweenTwoNodes
exports.getSubNetwork=getSubNetwork
exports.shortestPath=shortestPath
exports.shortestPaths=shortestPaths
exports.getRelationsBetweenNodeLists=getRelationsBetweenNodeLists
exports._extendPaths=_extendPaths
exports.loops=loops
exports._getLoopsOnNode=_getLoopsOnNode
exports._pathsToCentral=_pathsToCentral
exports._loopsColumns=_loopsColumns
exports.spanningTree=spanningTree
exports.spreads=spreads
exports.influenceLevels=influenceLevels
exports._spanningTree2=_spanningTree2
exports.adjacentNodeList=adjacentNodeList
exports.degreesPartition=degreesPartition
exports.getNodes=getNodes
exports.buildDendrogram=buildDendrogram
exports._getClosestPair=_getClosestPair
exports._strengthBetweenSets=_strengthBetweenSets
exports.nodesPositionCoeficient=nodesPositionCoeficient
exports.buildNetworkClusters=buildNetworkClusters
exports._iterativeBuildClusters=_iterativeBuildClusters
exports._buildNetworkClustersLvn=_buildNetworkClustersLvn
exports.getNodesPageRanks=getNodesPageRanks
exports.addPageRankToNodes=addPageRankToNodes
exports.fusionNetworks=fusionNetworks
exports._jLvn=_jLvn
exports.getNodesCentralities=getNodesCentralities
exports.addCentralitiesToNodes=addCentralitiesToNodes
exports.addEigenvectorCentralityToNodes=addEigenvectorCentralityToNodes
exports.addBetweennessCentralityToNodes=addBetweennessCentralityToNodes
exports.addReachToNodes=addReachToNodes
exports.getLeaves=getLeaves
exports.createNetworkFromListAndFunction=createNetworkFromListAndFunction
exports.createRandomNetwork=createRandomNetwork
exports.textToNet=textToNet
exports.textToTree=textToTree
exports.jsonToNet=jsonToNet
exports.textsToNet=textsToNet
exports.parseNet=parseNet
exports.imageToTableOfRGBA=imageToTableOfRGBA
exports.invertImageColors=invertImageColors
exports.grayscaleImage=grayscaleImage
exports.cropImage=cropImage
exports.resizeImage=resizeImage
exports.getDataURL=getDataURL
exports._getPixelData=_getPixelData
exports._makeImageFromData=_makeImageFromData
exports.expandSimpleHtml=expandSimpleHtml
exports.checkIfIsMarkdown=checkIfIsMarkdown
exports.clickLink=clickLink
exports.downloadData=downloadData
exports.downloadTable=downloadTable
exports.loadImage=loadImage
exports.loadImages=loadImages

exports.instanceSameType=instanceSameType

exports.StringOperators_STOP_WORDS = StringOperators_STOP_WORDS
}));