package com.api.api.controller;

import java.lang.reflect.Array;
import java.util.List;
import java.util.Optional;

import javax.xml.ws.Response;
import org.apache.tomcat.util.http.parser.MediaType;
import org.json.JSONObject;

import com.api.api.repository.UserRepository;
import com.api.api.entity.AuthRequest;
import com.api.api.entity.User;
import com.api.api.models.MovimentacaoModel;
import com.api.api.util.JwtUtil;
import com.fasterxml.jackson.databind.util.JSONPObject;
import com.google.gson.Gson;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
public class UsuarioController {

    @Autowired
    private JwtUtil jwtUtil;
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserRepository repository;

    public String token;


    @PostMapping(value = "/authenticate", produces = "application/json")
    public ResponseEntity<?> generateToken(@RequestBody AuthRequest authRequest) throws Exception {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authRequest.getUserName(), authRequest.getPassword()));
        } catch (Exception ex) {
            throw new Exception("inavalid username/password");
        }
        HttpHeaders httpHeaders = new HttpHeaders();
        String token = jwtUtil.generateToken(authRequest.getUserName());
        String userName = authRequest.getUserName();
        String[] response = new String[2];
        
        Gson g = new Gson();
        String tokenJson = g.toJson(token);
        String userJson = g.toJson(userName);
        
        response[0] = tokenJson;
        response[1] = userJson;
        
        String responseJSon = g.toJson(response);
        return new ResponseEntity<>(responseJSon, httpHeaders, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<?> signUp(@RequestBody User user) {
        try {
        	repository.save(user);
            Gson g = new Gson();            
            String msgJson = g.toJson("E-mail cadastrado");
            String response = g.toJson(msgJson);
            return new ResponseEntity<>(repository.save(user), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
 
}