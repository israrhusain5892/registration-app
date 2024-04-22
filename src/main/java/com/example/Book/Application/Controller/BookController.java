package com.example.Book.Application.Controller;

import com.example.Book.Application.Models.Book;
import com.example.Book.Application.Models.IssueBook;
import com.example.Book.Application.Response.Dto;
import com.example.Book.Application.Services.Bookservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class BookController {

    @Autowired
    private Bookservice bookservice;

    @PostMapping("/add/book")
    public String addBook(@RequestBody Book book){
           return bookservice.addBook(book);
    }

     @PutMapping("/update/{bookId}")
     public String updateBook(@RequestBody  Book book,@PathVariable int bookId){
            return bookservice.update(book,bookId);
     }

//     @GetMapping("/get/books")
//     public List<Book> getBooks(){
//           return bookservice.getBooks();
//     }

    @GetMapping("/get/book/{bookId}")
    public Book getBook(@PathVariable int bookId){
          return bookservice.getBookBybookId(bookId);
    }

    @GetMapping("/get/books")
    public List<Book> getBooks(){
        return bookservice.getAllBooks();
    }

    @DeleteMapping("/delete/book/{bookId}")
    public String deleteBook(@PathVariable int bookId){
          return bookservice.deleteBookById(bookId);
    }

    @PostMapping("/issue/book/{email}")
    public String issueBook(@RequestBody IssueBook issueBook,@PathVariable String email){
           return bookservice.bookIssued(issueBook,email);
    }
    @GetMapping("/get/issuebooks")
    public List<Dto> getAlls(){
        return bookservice.getAll();
    }
}
