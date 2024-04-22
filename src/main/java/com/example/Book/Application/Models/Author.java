//package com.example.Book.Application.Models;
//
//import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
//import jakarta.persistence.*;
//import lombok.AllArgsConstructor;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//
//import java.util.ArrayList;
//import java.util.List;
//
//@Entity
//@Data
//@NoArgsConstructor
//@AllArgsConstructor
//public class Author {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private int authorId;
//
//    private String authorName;
//
//    @OneToMany(mappedBy = "author",cascade = CascadeType.ALL)
////    @JsonIgnoreProperties("author")
//    private List<Book> booksWritten=new ArrayList<>();
//
//}
