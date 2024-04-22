//package com.example.Book.Application.Controller;
//
//import com.example.Book.Application.Models.Author;
//import com.example.Book.Application.Services.Authorservice;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//public class AuthorController {
//
//    @Autowired
//    private Authorservice authorservice;
//
//    @PostMapping("/add/author/{bookId}")
//    public String addAuthor(@RequestBody Author author, @PathVariable int bookId){
//            return authorservice.saveAuthor(author,bookId);
//    }
//}
