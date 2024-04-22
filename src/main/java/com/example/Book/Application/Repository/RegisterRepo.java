package com.example.Book.Application.Repository;

import com.example.Book.Application.Models.IssueBook;
import com.example.Book.Application.Models.Register;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RegisterRepo extends JpaRepository<Register,Integer> {
    Register findByEmail(String email);


//    List<IssueBook> findAllByEmail(String email);
}
