package com.example.Book.Application.Controller;

import com.example.Book.Application.Models.AuthRequest;
import com.example.Book.Application.Models.Register;
import com.example.Book.Application.Repository.RegisterRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalTime;

@CrossOrigin
@RestController
public class AuthController {

    @Autowired
    private RegisterRepo repo;
    @PutMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest request) {
        // Hardcoded username and password for demonstration purposes


        Register register=repo.findByEmail(request.getEmail());
//        System.out.println(LocalTime.now().toString() );
        register.setLoginTime(LocalTime.now().toString());
        register.setLoginDate(LocalDate.now().toString());
         repo.save(register);
//        System.out.print(request.getEmail());
        String validUsername = register.getEmail();
        String validPassword = register.getPassword();

        if (validUsername.equals(request.getEmail()) && validPassword.equals(request.getPassword())) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }


    @PutMapping("/logout/{email}")
    public Register logOut(@PathVariable  String email){

        Register register=repo.findByEmail(email);
        System.out.println(register.toString());

        register.setLogoutTime(LocalTime.now().toString());
        register.setLogoutDate(LocalDate.now().toString());

        return repo.save(register);
    }
}

