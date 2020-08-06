package com.example.demo.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;
import org.springframework.stereotype.Repository;
import com.example.demo.pojo.User;

import java.util.List;
import java.util.Map;

@Mapper
@Repository
public interface UserMapper {

    List<User> getUserList();
    void addUser(Map<String,Object> map);
    void updateUser(Map<String,Object> map);
    void deleteUser(int userid);
}
