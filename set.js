function Set() {
  var items = {}

  /**
   * Function: Add
   * Add a new item to set
   */
  this.add = function(value) {
    if(!this.has(value)){
      items[value] = value;
      return true;
    }
    return false;
  }


  /**
   * Function: Delete
   * Remove a item form set
   */
  this.delete = function(value) {
    if(this.has(value)) {
      delete items[value];
      return true;
    }
    return false;

  }


  /**
   * Function: Has
   * Retrieve if value exists in set
   */
  this.has = function(value) {
    return items.hasOwnProperty(value); //return bool
  }


  /**
   * Function: Clear
   * Clear set
   */
  this.clear = function() {
    items = {};
  }


  /**
   * Function: Size
   * Return set size
   */
  this.size = function() {
    return Object.keys(items).length;
  }


  /**
   * Function: Values
   * Return array with all values of set
   */
  this.values = function() {
    let values = [];
    let keys = Object.keys(items);

    for(let i = 0 ; i < keys.length ; i++) {
      values.push(items[keys[i]]);
    }
    return values;
  }

  /**
   * Set operations
   * 1. union
   * 2. intersection
   * 3. difference
   * 4. subset
   */

   /**
    * Function: Union
    */
  this.union = function(otherSet) {
    let unionSet = new Set();
    let values = this.values(); // [elem1, elem2, ...]

    for( let i = 0 ; i < values.length ; i++ ) {
      unionSet.add(values[i]);
    }
    values = otherSet.values();

    for(let i = 0 ; i < values.length ; i++) {
      unionSet.add(values[i]);
    }

    return unionSet;
  }

  /**
   * Function: Insersection
   */
  this.intersection = function(otherSet) {
    let intersectionSet = new Set();
    let values = this.values();

    for(let i = 0 ; i < values.length ; i++) {
      if(otherSet.has(values[i])){
        intersectionSet.add(values[i]);
      }
    }
    return intersectionSet;
  }

  /**
   * Function: Difference
   */
  this.difference = function(otherSet) {
    let differenceSet = new Set();
    values = this.values();

    for( let i = 0 ; i < values.length ; i++) {
      if(!otherSet.has(values[i])) {
        differenceSet.add(values[i]);
      }
    }
    return differenceSet;
  }

  /**
   * Function: Subset
   */
  this.subset = function(otherSet){
    if(this.size() > otherSet.size()) {
      return false;
    } else {
      let values = this.values;
      
      for( let i = 0 ; i < values.length ; i++ ) {
        if( !otherSet.has(values[i]) ) {
          return false;
        }
      }
      return true;
    }
  }

}


/**
 * Example usage
 */
// let set = new Set();

// set.add(1);
// set.add(2);
// set.add(3);
// set.add(4);

// console.log(set.values());
// console.log(set.size());


// console.log('deleting value 4');
// set.delete(4);
// console.log(set.values());
// console.log(set.size());
// console.log(set.has(2));
// console.log(set.has(4));






/**
 * Union example
 */

// let setA = new Set();
// setA.add(1);
// setA.add(2);
// setA.add(3);

// let setB = new Set();
// setB.add(3);
// setB.add(4);
// setB.add(5);
// setB.add(6);


// let unionAB = setA.union(setB);
// console.log(unionAB.values());




/**
 * Intersection example
 */

// let setA = new Set();
// setA.add(1);
// setA.add(2);
// setA.add(3);
// setA.add(5);

// let setB = new Set();
// setB.add(2);
// setB.add(3);
// setB.add(4);
// setB.add(5);
// setB.add(6);

// let intersectionAB = setA.intersection(setB);
// console.log(intersectionAB.values());





/**
 * Differnece example
 */

// let setA = new Set();
// setA.add(1);
// setA.add(2);
// setA.add(3);
// setA.add(5);
// setA.add(7);
// setA.add(9);

// let setB = new Set();
// setB.add(2);
// setB.add(3);
// setB.add(4);
// setB.add(5);
// setB.add(6);

// let intersectionAB = setA.difference(setB);
// console.log(intersectionAB.values());





/**
 * Subset example
 */

// let setA = new Set();
// setA.add(1);
// setA.add(2);

// let setB = new Set();
// setB.add(1);
// setB.add(2);
// setB.add(3);

// let setC = new Set();
// setB.add(2);
// setB.add(3);
// setB.add(4);

// console.log(setA.subset(setB)); //verify if setA is subset of B - A contains in B : TRUE
// console.log(setA.subset(setC)); //verify if setA is subset of B - A contains in C : FALSE
