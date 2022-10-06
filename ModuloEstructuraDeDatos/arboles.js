class node { 
    constructor(value){
        this.value=value;
        this.left =null;
        this.rigth=null;
    }

    add (value ){
        if (value<this.value){// si el valor que quiero agregar es menor al valor actual
            this.addToTheLeft(value); //agregamos a la izquierda
        }else {
            this.addToTheRight(value); 
        }
    }
    
    addToTheLeft(value){ //agregamos a la izquierda
        if(this.left){// si ya tengo un nodo a la izquierda... 
            this.left.add(value);
        }else { 
            this.left=new node(value); //si agregamos simplemente el nodo
        }
    }

    
//agregamos a la derecha
    addToTheRight(value){  
        if (this.rigth){
            this.rigth.add(value);
        }
        else{
            this.rigth= new node(value);
        }
    }

    // ordenamientos de un tree , ordenamiento por inOrde PreOrder PostOrtder
    inOrder(node,array){
        if (!node)return;
        this.inOrder(node.left,array);
        array.push(node.value);
        this.inOrder(node.rigth,array);
    }

    preOrder(node,array){
        if(!node) return ;
        array.push(node.value);
        this.preOrder(node.left,array);
        this.preOrder(node.rigth,array);
        return array;
    }

    postOrder(node,array){
        if(!node)return;
        this.postOrder(node.left,array);
        this.postOrder(node.rigth,array);
        array.push(node.value);
        return array;
    }

}

const head =new node(10);
console.log(head);
/* 
                -----   Respuestas teoricas Arboles
1. Nodo A
2. 3
3. Si
4. J,C,A
5. E , A
6. Null
7. B,C,D,E
8. 0
9. 4 
10. 1
11. E
12. Si
13. No
14. No
15. A la izquierda nodo 'i' , a la derecha NUll
16. 4 hijos
*/