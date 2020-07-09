package com.api.api.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.api.api.models.ContainerModel;

@Repository
public interface ContainerRepository extends CrudRepository <ContainerModel, Long>  {
    public List<ContainerModel> findAll();

    public ContainerModel findById(long id);

//    @Query(value="SELECT C FROM tb_containers as C WHERE cd_numero_cntr LIKE ?1% ORDER BY C.cd_numero_cntr ASC")
//    public List<ContainerModel> findAllByContainer(Optional<String> cntr);
//
//    @Query(value="SELECT C FROM tb_containers as C WHERE nm_categoria LIKE ?1% ORDER BY C.nm_categoria ASC")
//    public List<ContainerModel> findAllByCategoria(Optional<String> categoria);
//
//    @Query(value="SELECT C FROM tb_containers as C WHERE nm_cliente LIKE ?1% ORDER BY C.nm_cliente ASC")
//    public List<ContainerModel> findAllByCliente(Optional<String> cliente);
//
//    @Query(value="SELECT C FROM tb_containers as C WHERE nm_status LIKE ?1% ORDER BY C.nm_status ASC")
//    public List<ContainerModel> findAllByStatus(Optional<String> status);
//
//    @Query(value="SELECT C FROM tb_containers as C WHERE nm_tipo LIKE ?1% ORDER BY C.nm_tipo ASC")
//    public List<ContainerModel> findAllByTipo(Optional<Integer> nm_tipo);
    
    
}