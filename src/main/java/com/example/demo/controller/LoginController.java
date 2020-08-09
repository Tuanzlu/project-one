package com.example.demo.controller;

import com.example.demo.JsonResult;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

    @RequestMapping("/login")
    public JsonResult<Object> login(@RequestParam("username") String username,@RequestParam("pwd") String pwd){
        Subject subject = SecurityUtils.getSubject();
        UsernamePasswordToken usernamePasswordToken = new UsernamePasswordToken(username,pwd);

        try {
            subject.login(usernamePasswordToken);
            return new JsonResult<>("0","登陆成功");
        }catch (UnknownAccountException e){
            return new JsonResult<>("1","用户名不存在");
        }catch (IncorrectCredentialsException e){
            return new JsonResult<>("2","密码错误");
        }
    }

}
