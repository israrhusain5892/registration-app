package com.example.Book.Application.Models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int bookId;

    private String bookName;
    private int bookPages;
    private double bookPrice;
    private String authorName;

    private String publisherName;
    private int availableBook;
    private Date publishDate;


//    @ManyToOne
//    @JoinColumn(name="authorId")
////    @JsonIgnoreProperties("booksWritten")
//    private Author author;
//
//
//    @ManyToOne
//    @JoinColumn(name="publisherId")
////    @JsonIgnoreProperties("books")
//    private Publisher publisher;


}
