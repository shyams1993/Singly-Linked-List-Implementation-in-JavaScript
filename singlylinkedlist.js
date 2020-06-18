class Node
{
    constructor(value)
    {
        this.value = value
        this.next = null
    }
}

class LinkedList
{
    constructor(value)
    {
        this.head = null
        this.tail = null
        this.length = 0
    }
    append(value)
    {
        const newNode = new Node(value);
        if (this.head === null)
        {
            this.head = newNode;
            this.tail = this.head;
            this.length++;
        }
        else
        {
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;
        }
        return this
    }
    prepend(value)
    {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }
    insert(index,value)
    {
        const newNode = new Node(value);
        let currentNode = this.head;
        let i = 0;
        if (index == 0)
        {
            this.prepend(newNode.value);
        }
        else if (index === this.length)
        {
            this.append(newNode.value);
        }
        else
        {
            while (i < this.length)
            {
                if(i === index-1)
                {
                    newNode.next = currentNode.next
                    currentNode.next = newNode
                    this.length += 1
                    break;
                }
                currentNode = currentNode.next
                i++;
            }
        }
        return this;
    }
    remove(index)
    {
        let currentNode = this.head;
        let i = 0;
        while(i < this.length)
        {
            if(index === 0)
            {
                this.head = currentNode.next;
                this.length--;
                break;
            }
            if(i === index-1)
            {
                if(currentNode.next === this.tail)
                {
                    currentNode.next = null;
                    this.tail = currentNode
                    this.length--;
                    break
                }
                else
                {
                    currentNode.next = currentNode.next.next;
                    this.length--;
                    break
                }
            }
            i++;
            currentNode = currentNode.next;
        }
        return this;
    }
    reverse()
    {
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while(second != null)
        {
            let third = second.next;
            second.next = first;
            first = second;
            second = third;
        }
        this.head.next = null;
        this.head = first;
    }
    printer()
    {   
        let arr = [];
        let currentNode = this.head;
        while(currentNode != null)
        {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return arr;
    }
}
const m = new LinkedList();
m.append(100)
m.append(101)
m.append(102)
m.prepend(99)
m.insert(0,98)
m.insert(5,104)
m.insert(6,105)
m.insert(5,103)
// m.remove(0)
m.remove(7)
m.remove(6)
m.remove(2)
// console.log(m.reverse())
console.log(m.head.next.next.next.value)
console.log(m.tail.value)
console.log(m.printer())
