package com.example.Book.Application.Controller;

import com.example.Book.Application.Models.Register;
import com.example.Book.Application.Services.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class RegisterController {
     @Autowired
     private RegisterService registerService;
     @PostMapping("/add/user")
    public String userSave(@RequestBody Register register){
          return registerService.registerUser(register);

    }
    @GetMapping("/get/users")
    public List<Register> getAllUsers(){
         return registerService.getAllUsers();
    }

    @DeleteMapping("/delete/{id}")
    public String deleteByuserId(@PathVariable int id){
        return registerService.deleteById(id);

    }
    @GetMapping("find/user/{email}")
    public Register findByEmail(@PathVariable String email){
         return registerService.findByEmail(email);
    }

    @DeleteMapping("/delete/allusers")
    public String deleteAllUsers(){
         return registerService.deleteAlluser();
    }
}
