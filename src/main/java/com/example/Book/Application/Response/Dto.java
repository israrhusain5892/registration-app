package com.example.Book.Application.Response;

import com.example.Book.Application.Models.Register;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class Dto {
    private int id;

    private String bookName;
    private double totalBookPrice;
    private Date issueDate;
    private int numberofbookissued;
    private int numberofDays;
    private int userId;
    private String userName;
    private String userEmail;

}
