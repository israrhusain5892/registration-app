package com.example.Book.Application.Models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Register {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;

    @Column(unique = true)
    private String email;

    private String password;

    @Column(name="loginTime")
    private String loginTime;

    private String loginDate;

    private String logoutTime;
    private String logoutDate;

    @OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
    private List<IssueBook> issueBook=new ArrayList<>();

}
