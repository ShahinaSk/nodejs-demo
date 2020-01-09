const chalk=require('chalk')
const yargs= require('yargs')
const book=require('./book')

//Add command
yargs.command({
    command:'add',
    describe:'Add a book',
    builder:{
        title:{
            describe:'Book Title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Book Body',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        book.addBook(argv.title,argv.body)
    }
})

//Remove command
yargs.command({
    command:'remove',
    describe:'Remove a book',
    builder:{
        title:{
            describe:'Book title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        book.removeBook(argv.title)
    }
})


//List Books
yargs.command({
    command:'list',
    describe:'List Books',
    handler(){
        book.listBooks()
    }
})

//Read command
yargs.command({
    command:'read',
    describe:'Read a Book',
    builder:{
        title:{
            describe:'Book title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        book.readBook(argv.title)
    }
})

yargs.parse()