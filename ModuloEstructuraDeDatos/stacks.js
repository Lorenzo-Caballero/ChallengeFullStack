class Stack {
    constructor() {

        this.items = {};
        this.top = 0;
    };
    push(data) {
        this.top++;
        this.items[this.top] = data;

    };
    pop(){
        let deleteData;
        if (this.top) {
            deleteData = this.items[this.top];
            delete this.items[this.top];
            this.top--;
            return deleteData;
        };

    };


    getsize(){
        return this.top;
    };

    isEmpty(){
        if (!this.getsize()){
            return true;
        }else {
            return false;
        }
    };
    peek(){
        if (this.isEmpty()){
            return null;
        };
        return this.items[this.top];
    };
    
    print(){
        let result='';
        for(let i = this.top; i >0; i--){
            result += this.items[i]+''
        };
    };

};


const stack=new  Stack();
stack.push('1');
stack.push('2');
stack.push('3');
stack.push('4');
console.log(stack.getsize());