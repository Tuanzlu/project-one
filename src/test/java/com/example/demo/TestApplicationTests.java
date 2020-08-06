package com.example.demo;

import com.example.demo.pojo.User;
import com.example.demo.service.UserService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.HashMap;
import java.util.Map;

@SpringBootTest
class TestApplicationTests {

    @Autowired
    UserService userService;

    @Test
    void contextLoads() {
    }

    @Test
    void addUserTest(){
        Map<String,Object> map = new HashMap<>();
        map.put("username","li");
        map.put("pwd","123455");
        userService.addUser(map);
    }

}
