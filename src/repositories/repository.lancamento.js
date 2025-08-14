import { query } from "../database/sqlite.js";


async function Listar(id_usuario,dt_filtro,busca) {

    let filtro = [id_usuario]
    

    let sql = `select l. *, c.categoria, c.icone
                        from lancamentos l 
                        join categoria c on (c.id_categoria = l.id_categoria and c.id_usuario = l.id_usuario)
                        where l.id_usuario = ?`;

    if(busca){
        filtro.push('%' + busca + '%');
        sql = sql + " and l.descricao like ?"
    }

    if(dt_filtro){
        filtro.push(dt_filtro);
        filtro.push(dt_filtro);
        sql = sql + " and l.dt_lancamento >= ?";
        sql = sql + " and l.dt_lancamento <= date(?,'start of month','+1 month','-1 day')";
    }


    sql = sql + " order by l.dt_lancamento desc"

   const lancamentos = await query(sql, filtro);


  
    return lancamentos


    

}

async function Inserir(id_usuario, descricao, valor, id_categoria, tipo, dt_lancamento) {

    console.log(id_usuario)
   let sql = `insert into lancamentos (id_usuario, descricao, valor, id_categoria, tipo, dt_lancamento) values(?, ?, ?, ?, ?, ?) returning id_lancamento`;
   const lancamento = await query(sql, [id_usuario, descricao, valor, id_categoria, tipo, dt_lancamento]);
   


    return lancamento[0];

  

}






async function Editar(id_usuario,id_lancamento, descricao, valor, id_categoria, tipo, dt_lancamento) {


    
     
   let sql = `update lancamentos set descricao=?, valor=?, id_categoria=?, tipo=?, dt_lancamento=? 
   where id_lancamento = ? and id_usuario = ?`;
   await query(sql, [descricao, valor,id_categoria,tipo, dt_lancamento, id_lancamento, id_usuario]);


    return {id_lancamento};
    

   

}

async function Excluir(id_usuario,id_lancamento) {


  let sql = `delete from lancamentos where id_lancamento = ? and id_usuario = ?`;
    await query(sql, [id_lancamento, id_usuario]);
   


    return {id_usuario};
    

}

async function Resumo(id_usuario) {

    let sql = `select sum(case when l.tipo = 'R' then l.valor else 0 end) as receitas,
                sum(case when l.tipo = 'D' then l.valor else 0 end) as depesas
                from lancamentos l
                where l.id_usuario = ?
                and l.dt_lancamento >= date('now', 'start of month')
                and l.dt_lancamento <= date('now', 'start of month','+1 month','-1 day')`;
   const somas = await query(sql, [id_usuario]);


    sql = `select l. *, c.categoria, c.icone
                        from lancamentos l 
                        join categoria c on (c.id_categoria = l.id_categoria and c.id_usuario = l.id_usuario)
                        where l.id_usuario = ?
                        order by l.dt_lancamento desc
                        limit 5`;
const lancamentos = await query(sql, [id_usuario]);

   let retorno = {
    totais: somas[0],
    lancamentos: lancamentos
   }

  
    return retorno


    

}





export default {Inserir, Excluir, Listar, Editar, Resumo}