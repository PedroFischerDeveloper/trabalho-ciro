package com.api.api.models;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Entity(name = "tb_movimentacao")
@Table(name = "tb_movimentacao")
public class MovimentacaoModel implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NotNull(message = "Nome navio é obrigatório")
    @Valid
    private String nm_navio;

    @NotNull(message = "Tipo movimentação é obrigatório")
    @Valid
    private String nm_tipo_movimentacao;

    @NotNull(message = "Data inicio é obrigatório")
    @Valid
    private Date dt_inicio;

    private Date dt_fim;

    private long cliente_id;

    public MovimentacaoModel() {}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNm_navio() {
		return nm_navio;
	}

	public void setNm_navio(String nm_navio) {
		this.nm_navio = nm_navio;
	}

	public String getNm_tipo_movimentacao() {
		return nm_tipo_movimentacao;
	}

	public void setNm_tipo_movimentacao(String nm_tipo_movimentacao) {
		this.nm_tipo_movimentacao = nm_tipo_movimentacao;
	}

	public Date getDt_inicio() {
		return dt_inicio;
	}

	public void setDt_inicio(Date dt_inicio) {
		this.dt_inicio = dt_inicio;
	}

	public Date getDt_fim() {
		return dt_fim;
	}

	public void setDt_fim(Date dt_fim) {
		this.dt_fim = dt_fim;
	}

	public long getCliente_id() {
		return cliente_id;
	}

	public void setCliente_id(long cliente_id) {
		this.cliente_id = cliente_id;
	}
    
   
}
