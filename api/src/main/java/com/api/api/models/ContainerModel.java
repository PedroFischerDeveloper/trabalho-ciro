package com.api.api.models;

import java.io.Serializable;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity (name = "tb_containers")
@Table(name = "tb_containers")


public class ContainerModel implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NotNull(message = "Nome cliente é obrigatório")
    @Valid
    private String nm_cliente;
    
    @NotNull(message = "Número do container é obrigatório")
    @Size(min = 7)
    @Valid
    private String cd_numero_cntr;

    @NotNull(message = "Nome tipo é obrigatório")
    @Valid
    private int nm_tipo;

    @NotNull(message = "Nome status é obrigatório")
    @Valid
    private String nm_status;

    @NotNull(message = "Nome categoria é obrigatório")
    @Valid
    private String nm_categoria;

    public ContainerModel() {}
    
    public long getId() {
        return id;
    }
    
    public String getNomeCliente() {
        return nm_cliente;
    }

    public String setNomeCliente(final String paramNomeCliente) {
        return this.nm_cliente = paramNomeCliente;
    }

    public String getNumeroContainer() {
        return cd_numero_cntr;
    }

    public String setNumeroContainer(final String paramNumeroContainer) {
        return this.cd_numero_cntr = paramNumeroContainer;
    }

    public int getTipoContainer() {
        return nm_tipo;
    }

    public int setTipoContainer(final int paramTipoContainer) {
        return this.nm_tipo = paramTipoContainer;
    }

    public String getStatusContainer() {
        return nm_status;
    }

    public String setStatusContainer(final String paramStatusContainer) {
        return this.nm_status = paramStatusContainer;
    }

    public String getCategoriaContainer() {
        return nm_categoria;
    }

    public String setCategoriaContainer(final String paramCategoria) {
        return this.nm_categoria = paramCategoria;
    }

}
