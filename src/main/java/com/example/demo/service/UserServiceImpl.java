package com.example.demo.service;

import com.example.demo.mapper.UserMapper;
import com.example.demo.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    UserMapper userMapper;

    @Override
    public List<User> getUserList(){
        return userMapper.getUserList();
    }

    @Override
    public void addUser(Map<String, Object> map) {
        userMapper.addUser(map);
    }

    @Override
    public void updateUser(Map<String, Object> map) {
        userMapper.updateUser(map);
    }

    @Override
    public void deleteUser(int userid) {
        userMapper.deleteUser(userid);
    }
}
