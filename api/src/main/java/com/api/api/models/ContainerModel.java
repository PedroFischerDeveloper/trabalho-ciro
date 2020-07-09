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

@Entity(name = "tb_containers")
@Table(name = "tb_containers")
public class ContainerModel implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    
    @NotNull(message = "Código do container é obrigatório")
    @Valid
    private String cd_numero_cntr;

    @NotNull(message = "Tipo é obrigatório")
    @Valid
    private String nm_tipo;

    @NotNull(message = "Nome status é obrigatório")
    @Valid
    private String nm_status;


    public ContainerModel() {}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getCd_numero_cntr() {
		return cd_numero_cntr;
	}

	public void setCd_numero_cntr(String cd_numero_cntr) {
		this.cd_numero_cntr = cd_numero_cntr;
	}

	public String getNm_tipo() {
		return nm_tipo;
	}

	public void setNm_tipo(String nm_tipo) {
		this.nm_tipo = nm_tipo;
	}

	public String getNm_status() {
		return nm_status;
	}

	public void setNm_status(String nm_status) {
		this.nm_status = nm_status;
	}
    
   

}
