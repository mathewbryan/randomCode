class User {
    constructor(email, name){
        this.email = email;
        this.name = name;

    }
    login(){
        console.log(`${this.name} just logged in`)
        return this
    }
    logout(){
        console.log(`${this.name} just logged in`)
        return this
    }
}

class Admin extends User  {
    constructor(email, name, canDelete, canChange){
        super(email, name)
        // this.email = email
        // this.name = name
        this.canDelete = canDelete
        this.canChange = canChange
    }
    
}

let userOne = new User('mat@mat.com', 'Mat');
let userTwo = new User('em@em.com', 'Emily');
let admin = new Admin('bla@blah.com', 'Blaaaaah', true, false)
console.log(admin)