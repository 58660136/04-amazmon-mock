function testApp(val){
    return val
}

test('Mock function should be return 1',() => {
    //jest.fn() = PK
    const testApp = jest.fn(1).mockReturnValue(1)
    //ทำการ mock function 
    expect(testApp(1)).toBe(1)
    expect(testApp).toBeCalledWith(1)
})
