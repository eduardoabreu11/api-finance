
import repoLancamento from "../repositories/repository.lancamento.js"





async function Listar(id_usuario,dt_filtro,busca) {


    
   
    const categoria = await repoLancamento.Listar(id_usuario,dt_filtro,busca);

    return categoria;


    

}

async function Inserir(id_usuario, descricao, valor, id_categoria, tipo, dt_lancamento) {

    
   
   
    const retorno = await repoLancamento.Inserir(id_usuario, descricao, valor, id_categoria, tipo, dt_lancamento)

  
    
    

    return retorno ;

  

}




async function Editar(id_usuario,id_lancamento, descricao, valor, id_categoria, tipo, dt_lancamento) {


    

    

    const retorno  = await repoLancamento.Editar(id_usuario,id_lancamento, descricao, valor, id_categoria, tipo, dt_lancamento )

    return retorno 

   

}

async function Excluir(id_usuario,id_lancamento) {

    

    const retorno  = await repoLancamento.Excluir(id_usuario,id_lancamento)

    return retorno 
}


async function Resumo(id_usuario) {

    

    const retorno  = await repoLancamento.Resumo(id_usuario)

    return retorno 
}






export default {Inserir, Listar, Editar, Excluir, Resumo}