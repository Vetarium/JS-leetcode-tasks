/**
 * @param {Object | Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    for(var itm in obj)
        return false;
    return true;
    
};