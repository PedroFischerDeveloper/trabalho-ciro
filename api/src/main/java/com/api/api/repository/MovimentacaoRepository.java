package com.api.api.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.api.api.models.MovimentacaoModel;

@Repository
public interface MovimentacaoRepository extends CrudRepository <MovimentacaoModel, Long>  {
    public List<MovimentacaoModel> findAll();

    public MovimentacaoModel findById(long id);

//    // query do relatorio
//    @Query(value="SELECT m.nm_navio, m.dt_inicio, m.dt_fim, m.nm_tipo_movimentacao,m.container_id, count(m.nm_tipo_movimentacao) "+ 
//                 "FROM tb_movimentacao AS m "+
//                 "INNER JOIN tb_containers AS c ON m.container_id = c.id "+ 
//                 "GROUP BY m.container_id, c.nm_cliente, m.nm_tipo_movimentacao", nativeQuery = true)
//    public List<MovimentacaoModel> findAllByRelatorios();
//
//    @Query(value="SELECT M FROM tb_movimentacao AS M WHERE M.nm_navio LIKE ?1% ORDER BY M.nm_navio ASC")
//    public List<MovimentacaoModel> findAllByFilterNomeNavio(Optional<String> navio);
//
//    @Query(value="SELECT M FROM tb_movimentacao AS M WHERE M.nm_tipo_movimentacao LIKE ?1%")
//    public List<MovimentacaoModel> findAllByFilterMovimentacao(Optional<String> movimentacao);

}