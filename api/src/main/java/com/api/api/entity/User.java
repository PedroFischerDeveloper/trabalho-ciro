package com.api.api.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "tb_usuarios")
public class User implements Serializable {
    
    @Id
    private int id;
    private String userName;
    private String password;
    private String email;
    /*
        0 = webmaster
        1 = operacional
        2 = usuario
    */ 
    private String role;

    public String getUserName() {
        return userName;
    }
    public String getPass() {
        return password;
    }
}
