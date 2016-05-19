'use strict';
module.exports = function() {
    var theVault = {};
  function setValue(key, value) {
      theVault[key] = value;
    }
     function getValue(key) {
      if (theVault[key]) {
        return theVault;
      }else{
      return null;
    }
  }
    return {
      "setValue": setValue,
      "getValue": getValue
    };

};