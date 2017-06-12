'use strict';

const DLL = require('./DLL.js');

const HashTable = module.exports = function(size=9001) {
  this.size = size;
  this.buckets = [...Array(this.size)];
};

HashTable.prototype.hashKey = function(key) {
  let hash = key.split('').reduce((acc, curr) => acc + curr.charCodeAt(0), 0) % this.size;
  // handle collisions here?
  return hash;
};

HashTable.prototype.set = function(key, value){
  let loc = this.buckets[this.hashkey(key)];
  if(loc === undefined) this.buckets[this.hashKey(key)] = new DLL();
  loc.append(value);
};

HashTable.prototype.get = function(key){
  return this.buckets[this.hashKey(key)].find(key);
  // return this.buckets[this.hashKey(key)];
  //iterate DLL until key matches item.key
};

HashTable.prototype.remove = function(key, value){
  let address = this.hashKey(key);
  this.buckets[address].find(key) ? delete this.buckets[address].remove(value) : new Error('invalid key');
};
