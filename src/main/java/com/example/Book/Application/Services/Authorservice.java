//package com.example.Book.Application.Services;
//
//import com.example.Book.Application.Models.Author;
//import com.example.Book.Application.Models.Book;
//import com.example.Book.Application.Repository.AuthorRepository;
//import com.example.Book.Application.Repository.BookRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.ArrayList;
//import java.util.List;
//
//@Service
//public class Authorservice {
//
//    @Autowired
//    private AuthorRepository authorRepository;
//
//    @Autowired
//    private BookRepository bookRepository;
//    public String saveAuthor(Author author,int bookId){
//
//
//         Book book=bookRepository.findById(bookId).get();
//           System.out.println(book.toString());
//
//          List<Book> list=author.getBooksWritten();
//          list.add(book);
//          author.setBooksWritten(list);
//          book.setAuthor(author);
////          bookRepository.save(book);
//
//         authorRepository.save(author);
//
//         return "author saved successfully!!";
//
//
//    }
//}
