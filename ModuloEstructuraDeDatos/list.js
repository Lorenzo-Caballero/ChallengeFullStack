class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    };
};

class LinkendList {
    constructor() {
        this.head = null;
        this.size = 0;

    };

    add(value) {

        const newNode = new Node(value, null);
        if (this.head === null) {//si la lista esta vacia
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            };
            current.next = newNode;
        };
        this.size++//incrementamos el tamaño de la lista
    };

    insertAt(data, index) {
        if (index <= 0 || index > this.size) {
            return null;
        };

        const newNode = new Node(data);

        let current = this.head;
        let previous;

        if (index == 0) {
            newNode.next = current;
            this.head = newNode;

        } else {
            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
            };
            newNode.next = current;
            previous.next = newNode;
        };
        this.size++;
    };

    print() {

        if (!this.size) {
            return null;
        };
        let current = this.head;
        let result = '';
        while (current) {
            result += current.data += '->';
            current = current.next;
        };
        result += 'X';
        return result;
    };

sumaRecursiva(data) {
    const newNode = new Node(data);
    let suma = 0;
    if (data == null) {
        suma = 0;
    } else {
        suma +=newNode.head + sumaRecursiva(newNode.next);  //el resultado es el primer nodo de la lista 
        return suma;                                       // mas el resultado de la suma de la sublista siguiente 
    };
};

//remover un nodo de una lista mientras el dato pasado por parametro este el dicha lista
    removeData(data) {
        let current = this.head;
        let previous = null;

        while (current != null) {
            if (current.data === data) {
                if (!previous) {
                    this.head = current.next;
                } else {
                    previous.next = current.next;
                };
                this.size--;
                return current.data;
            };
            previous = current;
            current = current.next
        };
        return null;
    };
};

const linkendList = new LinkendList();
linkendList.add(2);
linkendList.add(1);

let result = linkendList.sumaRecursiva(linkendList);
console.log(result);

