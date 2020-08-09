package com.example.demo.controller;

import com.example.demo.JsonResult;
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
    public JsonResult<Map<String,Object>> getUserList(){
        Map<String,Object> map = new HashMap<>();
        map.put("userlist",userService.getUserList());
        return new JsonResult<>(map);
    }

    @RequestMapping("/addUser")
    public JsonResult<Object> addUser(@RequestParam("username") String username,@RequestParam("pwd") String pwd){
        Map<String,Object> map = new HashMap<>();
        map.put("username",username);
        map.put("pwd",pwd);
        userService.addUser(map);
        return new JsonResult<>();
    }

    @RequestMapping("/updateUser")
    public JsonResult<Object> updateUser(@RequestParam("userid") int userid,@RequestParam("username") String username){
        Map<String,Object> map = new HashMap<>();
        map.put("userid",userid);
        map.put("username",username);
        userService.updateUser(map);
        return new JsonResult<>();
    }

    @RequestMapping("/deleteUser")
    public JsonResult<Object> deleteUser(@RequestParam("userid") int userid){
        userService.deleteUser(userid);
        return new JsonResult<>();
    }

}
