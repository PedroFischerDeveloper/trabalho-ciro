package com.api.api.controller;

import com.api.api.repository.MovimentacaoRepository;

import java.util.List;

import com.api.api.models.MovimentacaoModel;

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
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "*")
@RestController
public class MovimentacaoController {
    
    @Autowired
	MovimentacaoRepository movimentacaoRepository;
	
	@GetMapping("/movimentacoes")
	public List<MovimentacaoModel> listaTodos(){
		return movimentacaoRepository.findAll();
    }
	
	@GetMapping("/movimentacoes/{id}")
	public MovimentacaoModel buscaPorId(@PathVariable(value="id") long id){
		return movimentacaoRepository.findById(id);
    }

	@PostMapping("/movimentacoes")
    public ResponseEntity<MovimentacaoModel> salvaMovimentacao(@RequestBody MovimentacaoModel movimentacao) {
        try {
            return new ResponseEntity<>(movimentacaoRepository.save(movimentacao), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/movimentacoes/{id}")
    public ResponseEntity<MovimentacaoModel> deletaMovimentacao(@PathVariable long id) {

        try {
            MovimentacaoModel velhaMovimentacao = movimentacaoRepository.findById(id);
            if (velhaMovimentacao.getId() != id) {
                return new ResponseEntity<>(velhaMovimentacao, HttpStatus.NOT_FOUND);
            }

            movimentacaoRepository.delete(velhaMovimentacao);
            return new ResponseEntity<>(HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @PutMapping("/movimentacoes/{id}")
    public ResponseEntity<MovimentacaoModel> atualizaProduto(@RequestBody MovimentacaoModel novaMovimentacao, @PathVariable long id) {

        try {
            MovimentacaoModel velhaMovimentacao = movimentacaoRepository.findById(id);

            if (velhaMovimentacao == null) {
                return new ResponseEntity<>(velhaMovimentacao, HttpStatus.NOT_FOUND);
            }
            velhaMovimentacao.setNomeNavio(novaMovimentacao.getNomeNavio());
            velhaMovimentacao.setTipoMovimentacao(novaMovimentacao.getTipoMovimentacao());
            velhaMovimentacao.setDataInicio(novaMovimentacao.getDataInicio());
			velhaMovimentacao.setDataFim(novaMovimentacao.getDataFim());
			
            movimentacaoRepository.save(novaMovimentacao);

            return new ResponseEntity<>(novaMovimentacao, HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
	
}