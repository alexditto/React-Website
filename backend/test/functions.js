const functions = {
    add : (num1, num2) => num1 + num2,
    isNull : () => null,
    createUser : () =>{
        const user = {firstName : "Alex"};
        user['lastName'] = "Ditto";
        return user;
    }
}

module.exports = functions;