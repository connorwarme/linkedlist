
const NodeFactory = (input) => {
    return {
    value: input || null,
    nextNode: null
    };
};

const LinkedList = (() => {

    let headP = null;
    let tailP = null;
    let length = 0; 

    const append = (value) => {
        // create new
        const newNode = NodeFactory(value);
        console.log(newNode);
        // add to end of list
        // check if head is empty (hence no list)
        // update pointer (previously null, now points to this new node)
        if (headP === null) {
            headP = newNode;
            tailP = newNode;
        } else {
            tailP.nextNode = newNode;
            tailP = newNode;
        }
        length++;
        console.log(headP);
        console.log(tailP);
        console.log(length);
    }
    const prepend = (value) => {
        // create new
        const newNode = NodeFactory(value);
        // add to beginning of list
        // update head pointer
        newNode.nextNode = headP;
        headP = newNode;
        length++;
    }
    const size = () => {
    // size returns the total number of nodes in the list
    return length;
    }
    const head = () => {
    // head returns the first node in the list
    return headP;
    }
    const tail = () => {
    // tail returns the last node in the list
    return tailP;
    }
    const at = (index) => {
    // at(index) returns the node at the given index
    if (index >= length || index < 0) {
        console.log(`That index position does not exist in current list`);
        // not sure if I should return null here or not.. !!!
        return null;
    } else {
        let next = headP;
        for (let i = 0; i < index; i++) {
            next = next.nextNode;
        }
        return next;
    }
    }
    const pop = () => {
        removeAt(length-1);
    }
    const contains = (value) => {
    // contains(value) returns true if the passed in value is in the list and otherwise returns false.
        let current = headP;
        while (current != null && current.value != value) {
            current = current.nextNode;
        }
        if (current != null) {
            return current;
        } else {
            return false;
        }
    }
    const find = (value) => {
    // find(value) returns the index of the node containing value, or null if not found.
        let index = 0;
        let current = headP;
        while (current != null && current.value != value) {
            current = current.nextNode;
            index++;
        }
        if (current != null) {
            return index;
        } else {
            return null;
        }
    }
    const toString = () => {
    // toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
        let current = headP;
        let text = "Values: ";
        for (let i = 0; i < length; i++) {
            text += `${current.value} -> `;
            current = current.nextNode;
        }
        text += `null.`
        return text;
    }
    const insertAt = (value, index) => {
        let current = at(index);
        if (index === 0) {
            prepend(value);
        } else if (index === length -1) {
            append(value);
        } else {
            let previous = at(index - 1);
            let newNew = NodeFactory(value);
            newNew.nextNode = current;
            previous.nextNode = newNew;
            length++;
        }
    }
    const removeAt = (index) => {
        let current = at(index);
        if (index === 0) {
            headP = current.nextNode;
        } else {
            let previous = at(index - 1);
            previous.nextNode = current.nextNode;
            if (current === tailP) {
                tailP = previous;
            }
        }
        length--;
        console.log(tailP);
    }
    return { 
        append, 
        prepend, 
        size, 
        head, 
        tail, 
        at, 
        pop, 
        contains, 
        find, 
        toString,
        insertAt,
        removeAt }
})(); 

LinkedList.append(5);
LinkedList.append(55);
LinkedList.append(555);
LinkedList.append(5555);
LinkedList.append(55555);