package com.example.demo.controller;

import com.example.demo.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;


import java.util.HashMap;
import java.util.Map;

@RestController
public class UserController {

    @Autowired
    UserService userService;

    @RequestMapping("/getUserList")
    public Map<String,Object> getUserList(){
        Map<String,Object> map = new HashMap<>();
        map.put("userlist",userService.getUserList());
        return map;
    }

    @RequestMapping("/addUser")
    public void addUser(@RequestParam("username") String username,@RequestParam("pwd") String pwd){
        Map<String,Object> map = new HashMap<>();
        map.put("username",username);
        map.put("pwd",pwd);
        userService.addUser(map);
    }

    @RequestMapping("/updateUser")
    public void updateUser(@RequestParam("userid") int userid,@RequestParam("username") String username){
        Map<String,Object> map = new HashMap<>();
        map.put("userid",userid);
        map.put("username",username);
        userService.updateUser(map);
    }

    @RequestMapping("/deleteUser")
    public void deleteUser(@RequestParam("userid") int userid){
        userService.deleteUser(userid);
    }

}
