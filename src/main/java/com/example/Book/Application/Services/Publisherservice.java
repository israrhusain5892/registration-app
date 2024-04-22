//package com.example.Book.Application.Services;
//
//
//import com.example.Book.Application.Models.Book;
//import com.example.Book.Application.Models.Publisher;
//import com.example.Book.Application.Repository.BookRepository;
//import com.example.Book.Application.Repository.PublisherRepo;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//
//import java.util.Date;
//import java.util.List;
//
//@Service
//public class Publisherservice {
//
//      @Autowired
//      private PublisherRepo publisherRepo;
//
//      @Autowired
//      private BookRepository bookRepository;
//
//      public String addPublisher(Publisher publisher){
//          Book book=new Book();
//          Book book1=bookRepository.findById(book.getBookId()).get();
//
//           List<Book> list=publisher.getBooks();
//           list.add(book1);
//           publisher.setBooks(list);
//           book.setPublisher(publisher);
//             bookRepository.save(book);
//
//           publisher.setPublishDate((java.sql.Date) new Date());
//           publisher.setBookIssued(list.size());
//           publisher.setBookAvailable(true);
//           publisher.setTotalBookPublished(list.size());
//             publisherRepo.save(publisher);
//             return "publisher saved successfully";
//      }
//
//    public Publisher getPublisher(int id) {
//         return  publisherRepo.findById(id).get();
//    }
//}
