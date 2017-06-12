'use strict';

const Node = function(key, val, next=null, prev=null) {
  this.key = key;
  this.val = val;
  this.next = next;
  this.prev = prev;
};

const DLL = module.exports = function() {
  this.head = null;
  this.tail = null;
  this.length = 0;
};

// prev and next (<->) pointers from each Node
// (TAIL)  <-[]<->[]<->[]-> (HEAD)
// (prepend)                (append)

DLL.prototype.append = function(key, val) {
  if(!val) throw new Error('Please provide a value');
  if(!this.head) return this.head = this.tail = new Node(key, val);

  this.head.next = new Node(key, val);
  this.head.next.prev = this.head;
  this.head = this.head.next;
  this.length++;
  return this.head;
};

DLL.prototype.prepend = function(key, val) {
  if(!val) throw new Error('must provide value');
  if(!this.tail) return this.tail = this.head = new Node(key, val);

  this.tail.prev = new Node(key, val);
  this.tail.prev.next = this.tail;
  this.tail = this.tail.prev;
  this.length++;
  return this.tail;
};

DLL.prototype.remove = function(val) {
  if(!val) throw new Error('must provide value');
  if(!this.tail) throw new Error('the list is empty');

  // NOTE: Implement this method. :-)

};

DLL.prototype.find = function(key) {
  if (!key) throw new Error('must provide key');
  _trav(this.head);

  function _trav(node) {
    if(!node) throw new Error('item not found');
    if(node.key === key) return node.value;
    _trav(node.next);
  }
};
