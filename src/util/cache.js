/* eslint-disable prettier/prettier */
/**
 * A simple cache module
 */
module.exports = class Cache {
    constructor(){
        this.cache = [];
    }

    addElem(element){
        this.cache.push(element);
    }

    getElems(){
        return this.cache;
    }
}
