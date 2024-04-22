//package com.example.Book.Application.Controller;
//
//import com.example.Book.Application.Models.Publisher;
//import com.example.Book.Application.Services.Publisherservice;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//public class PublisherController {
//
//    @Autowired
//    private Publisherservice publisherservice;
//
//    @PostMapping("/add/publisher")
//    public String addPublisher(@RequestBody Publisher publisher){
//
//          return publisherservice.addPublisher(publisher);
//    }
//
//    @GetMapping("/get/publisher/{id}")
//    public Publisher getPublisher(@PathVariable int id){
//          return publisherservice.getPublisher(id);
//    }
//}
