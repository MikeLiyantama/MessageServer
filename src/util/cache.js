/* eslint-disable prettier/prettier */

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
