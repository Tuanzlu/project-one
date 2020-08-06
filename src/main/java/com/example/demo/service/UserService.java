package com.example.demo.service;

import com.example.demo.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.demo.pojo.User;

import java.util.List;
import java.util.Map;

public interface UserService {

    List<User> getUserList();
    void addUser(Map<String,Object> map);
    void updateUser(Map<String,Object> map);
    void deleteUser(int userid);

}
