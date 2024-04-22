package com.example.Book.Application.Repository;

import com.example.Book.Application.Models.IssueBook;
import com.example.Book.Application.Models.Register;
import com.example.Book.Application.Response.Dto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface IssueBookRepo extends JpaRepository<IssueBook,Integer> {
//    Optional<IssueBook> findById(int id);
     List<IssueBook> findByUser(Register user);

}
