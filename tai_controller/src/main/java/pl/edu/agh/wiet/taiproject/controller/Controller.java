package pl.edu.agh.wiet.taiproject.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
public class Controller {

    @RequestMapping("/authorized")
    public Principal user(Principal principal) {
        return principal;
    }
}
