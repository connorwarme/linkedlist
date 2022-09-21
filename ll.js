// Extra Credit

// insertAt(value, index) that inserts a new node with the provided value at the given index.
// removeAt(index) that removes the node at the given index.

// Extra Credit Tip: When you insert or remove a node, consider how it will affect the existing nodes. Some of the nodes will need their nextNode link updated.

const NodeFactory = (input) => {
    return {
    value: input || null,
    nextNode: null
    };
};

const LinkedList = () => {

    let headP = null;
    let tailP = null;
    let length = 0; 

    const append = (value) => {
        // create new
        const newNode = NodeFactory(value);
        // add to end of list
        // update pointer (previously null, now points to this new node)
    }
    const prepend = (value) => {
        // create new
        const newNode = NodeFactory(value);
        // add to beginning of list
        // update head pointer
    }
    const size = () => {
    // size returns the total number of nodes in the list
    return length;
    }
    const head = () => {
    // head returns the first node in the list
    // return head pointer?
    }
    const tail = () => {
    // tail returns the last node in the list
    }
    const at = (index) => {
    // at(index) returns the node at the given index
    }
    const pop = () => {
    // pop removes the last element from the list
    }
    const contains = (value) => {
    // contains(value) returns true if the passed in value is in the list and otherwise returns false.
    }
    const find = (value) => {
    // find(value) returns the index of the node containing value, or null if not found.
    }
    const toString = () => {
    // toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
    }
} 

