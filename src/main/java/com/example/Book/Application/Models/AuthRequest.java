package com.example.Book.Application.Models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AuthRequest {
    private String email;
    private String password;
//    private String loginTime;
//    private String loginDate;
//    private String logoutTime;
//    private String logoutDate;
}
