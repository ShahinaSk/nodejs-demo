const fs=require('fs')
const chalk=require('chalk')

//addBook function
const addBook=(title,body)=>{
    const books=loadBooks()
    const duplicateBook = books.find((book)=>book.title===title)

    if(!duplicateBook){
        books.push({
            title:title,
            body:body
        })
        saveBooks(books)
        console.log(chalk.green.inverse('Successfully added '+title))
    }else{
        console.log(chalk.red.inverse('Book already Exists!'))
    }
}

//saveBook function
const saveBooks=(books)=>{
    const dataJSON=JSON.stringify(books)
    fs.writeFileSync('books.json',dataJSON)
}

//removeBook function
const removeBook=(title)=>{
    const books=loadBooks()
    const booksToKeep=books.find((book)=>book.title!==title)
    if (books.length > booksToKeep) {
        console.log(chalk.inverse.green(title+'successfully removed!'))
    } else {
        console.log(chalk.red.inverse('Book Not Found!'))
    }
}


//listBooks function
const listBooks=()=>{
    const books=loadBooks()
    console.log(chalk.inverse.yellow('Books present are'))
    books.forEach(book => {
        console.log(book.title)
        
    });
}

//loadBooks function
const loadBooks=()=>{
    try {
        const dataBuffer=fs.readFileSync('book.json')
        const dataJSON=dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

//readBook function
const readBook=(title)=>{
    const books=loadBooks()
    const book=books.find((book)=>book.title===title)

    if (book) {
        console.log(chalk.inverse(book.title))
    } else {
        console.log(book.body)
    }
}

module.exports={
    addBook,
    removeBook,
    listBooks,
    readBook
}