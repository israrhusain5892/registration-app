//package com.example.Book.Application.Models;
//
//import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
//import jakarta.persistence.*;
//import lombok.AllArgsConstructor;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//
//import java.sql.Date;
//import java.util.ArrayList;
//import java.util.List;
//
//@Entity
//@Data
//@NoArgsConstructor
//@AllArgsConstructor
//public class Publisher {
//
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private int publisherId;
//
//    private String publisherName;
//    private int bookIssued;
//    private int totalBookPublished;
//    private Date publishDate;
//    private boolean bookAvailable;
//
////    @OneToMany(mappedBy = "publisher",cascade = CascadeType.ALL)
//////    @JsonIgnoreProperties("publisher")
////    private List<Book> books=new ArrayList<>();
//}
