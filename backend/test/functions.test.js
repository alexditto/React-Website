const functions = require('./functions');

test('Adds 2 + 2 to equal 4', ()=>{
    expect(functions.add(2,2)).toBe(4);
})

test('Adds 2 + 3 to equal 4', ()=>{
    expect(functions.add(2,3)).toBe(5);
})

test("Should be null", ()=>{
    expect(functions.isNull()).toBeNull()
})

test("Create new user", ()=>{
    expect(functions.createUser()).toStrictEqual({firstName : "Alex", lastName : "Ditto"})
})

test("Should equal 10", ()=>{
    expect(functions.add(9,1)).toBe(10);
})