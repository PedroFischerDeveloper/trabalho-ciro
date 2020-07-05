package com.api.api.controller;

import com.api.api.repository.ContainerRepository;

import java.util.List;
import java.util.Optional;

import com.api.api.models.ContainerModel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
public class ContainerController {

    @Autowired 
    ContainerRepository containerRepository;

    @GetMapping("/containers")
    public List<ContainerModel> listaTodos() {
        return containerRepository.findAll();
    }

    @GetMapping("/containers/{id}")
    public ContainerModel buscaPorId(@PathVariable(value = "id") long id) {
        return containerRepository.findById(id);
    }


    @PostMapping("/containers")
    public ResponseEntity<ContainerModel> salvaContainer(@RequestBody ContainerModel container) {
        try {
            return new ResponseEntity<>(containerRepository.save(container), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/containers/{id}")
    public ResponseEntity<ContainerModel> deletaContainer(@PathVariable long id) {

        try {
            ContainerModel velhoContainer = containerRepository.findById(id);
            if (velhoContainer.getId() != id) {
                return new ResponseEntity<>(velhoContainer, HttpStatus.NOT_FOUND);
            }

            containerRepository.delete(velhoContainer);
            return new ResponseEntity<>(HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @PutMapping("/containers/{id}")
    public ResponseEntity<ContainerModel> atualizaProduto(@RequestBody ContainerModel novoContainer, @PathVariable long id) {
        try {
            ContainerModel velhoContainer = containerRepository.findById(id);

            if (velhoContainer == null) {
                return new ResponseEntity<>(velhoContainer, HttpStatus.NOT_FOUND);
            }
            velhoContainer.setNomeCliente(novoContainer.getNomeCliente());
            velhoContainer.setNumeroContainer(novoContainer.getNumeroContainer());
            velhoContainer.setTipoContainer(novoContainer.getTipoContainer());
            velhoContainer.setStatusContainer(novoContainer.getStatusContainer());
            velhoContainer.setCategoriaContainer(novoContainer.getCategoriaContainer());
            
            containerRepository.save(novoContainer);

            return new ResponseEntity<>(novoContainer, HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}