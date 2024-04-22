package com.example.Book.Application.Services;

import com.example.Book.Application.Models.Book;
import com.example.Book.Application.Models.IssueBook;
import com.example.Book.Application.Models.Register;
import com.example.Book.Application.Repository.BookRepository;
import com.example.Book.Application.Repository.IssueBookRepo;
import com.example.Book.Application.Repository.RegisterRepo;
import com.example.Book.Application.Response.Dto;
import org.apache.catalina.User;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class Bookservice {



     @Autowired
     private ModelMapper modelMapper;
     @Autowired
     private IssueBookRepo issueBookRepo;
     @Autowired
     private BookRepository bookRepository;

     @Autowired
     private RegisterRepo registerRepo;
     public String  addBook(Book book){
          bookRepository.save(book);
          return "Book saved successfully!!";
     }

     public String update(Book book1,int bookId){
           Book book=bookRepository.findById(bookId).get();
           book.setBookName(book1.getBookName());
           book.setBookPages(book1.getBookPages());
           book.setAuthorName(book1.getAuthorName());
           book.setAvailableBook(book1.getAvailableBook());
           book.setPublishDate(book1.getPublishDate());
           book.setPublisherName(book1.getPublisherName());
           bookRepository.save(book);
           return "book updated succcesfully";
     }

//     public  List<Book> getBooks(){
//          return bookRepository.findAll();
//     }

     public Book getBookBybookId(int id){
          return bookRepository.findById(id).get();
     }

     public List<Book> getAllBooks(){
          return bookRepository.findAll();
     }

    public String deleteBookById(int bookId) {

         bookRepository.deleteById(bookId);
         return "Book deleted successfully !!";
    }
    public String bookIssued(IssueBook issuebook,String email){
        Register user = registerRepo.findByEmail(email);
        List<IssueBook> lis=user.getIssueBook();
        lis.add(issuebook);
        user.setIssueBook(lis);
        issuebook.setUser(user);
//        registerRepo.save(user);
        issuebook.setIssueDate(new Date());

        issueBookRepo.save(issuebook);
        return "Issued book successfully";

    }

    public List<Dto> getAll(){
//           Register user=registerRepo.findByEmail(email);

//            Dto res=new Dto();
            List<Dto> res1=new ArrayList<>();
         List<IssueBook> books= issueBookRepo.findAll();

//          System.out.println(books);
         for(IssueBook book:books){
             Register user=book.getUser();
            Dto res= modelMapper.map(book,Dto.class);
             res.setUserId(user.getId());
             res.setUserName(user.getName());
             res.setUserEmail(user.getEmail());
////              res.setUser(user);
//              res.setBookName(book.getBookName());
//              res.setIssueDate(book.getIssueDate());
//              res.setNumberofbookissued(book.getNumberofbookissued());
////              res.setId(book.getId());
//             res.setTotalBookPrice(book.getTotalBookPrice());
//              res.setNumberofDays(book.getNumberofDays());
              res1.add(res);
         }
         return res1;
    }


}
