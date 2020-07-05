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

@Entity (name = "tb_movimentacao")
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

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "cliente_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private ContainerModel container;

    public MovimentacaoModel() {}
    
    public long getId() {
        return id;
    }

    public String getNomeNavio() {
        return nm_navio;
    }

    public String setNomeNavio(String paramNomeNavio) {
        return this.nm_navio = paramNomeNavio;
    }

    public String getTipoMovimentacao() {
        return nm_tipo_movimentacao;
    }

    public String setTipoMovimentacao(String paramTipoMovimentacao) {
        return this.nm_tipo_movimentacao = paramTipoMovimentacao;
    }

    public Date getDataInicio() {
        return dt_inicio;
    }

    public Date setDataInicio(Date paramDataInicio) {
        return this.dt_inicio = paramDataInicio;
    }

    public Date getDataFim() {
        return dt_fim;
    }

    public Date setDataFim(Date paramDataFim) {
        return this.dt_fim = paramDataFim;
    }
}
