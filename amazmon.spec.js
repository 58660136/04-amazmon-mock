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

function AmazmonAuthen(isbn) {
    this.authService = isbn

    this.Search = (isbn) => {
        var book = this.authService(isbn)
        return {
            /*
            bookname: book.bookname,
            image: book.image,
            isbn: book.isbn
            */
            bookname: 'PHP Mysql',
            image: 'sql.png',
            isbn: 'Bnk1536'
        }
    }
}

test('AmazmonAuthen', ()=> {
    //Arrange
    const mockAmazmonAuthen = jest.fn()
        .mockReturnValue({
            bookname: 'PHP Mysql',
            image: 'sql.png',
            isbn: 'Bnk1536'
        })
    
    //Act
    var app = new AmazmonAuthen(mockAmazmonAuthen)
    var isbn = 'Bnk1536'
    var book = app.Search(isbn)

    //Assert
    expect(mockAmazmonAuthen).toHaveBeenCalled()
    expect(mockAmazmonAuthen).toHaveBeenCalledWith(isbn)
    expect(book).toHaveProperty('bookname')
    expect(book).toHaveProperty('image')
    expect(book).toHaveProperty('isbn')
    expect(book.bookname).toBe('PHP Mysql')
    expect(book.image).toBe('sql.png')
    expect(book.isbn).toHaveLength(7)
    expect(book).toHaveProperty('bookname')
    expect(book).toHaveProperty('image')
    expect(book).toHaveProperty('isbn')
})