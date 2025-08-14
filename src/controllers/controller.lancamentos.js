import serviceLancamento from "../services/service.lancamento.js";





async function Listar(req, res) {
        

    try{

    const id_usuario = req.id_usuario
    const dt_filtro = req.query.dt_filtro;
    const busca = req.query.busca
    
    const lancamento = await serviceLancamento.Listar(id_usuario,dt_filtro,busca);

       
            res.status(201).json(lancamento)

    }catch(error){
            res.status(500).json({error})
    }

}

async function Inserir(req, res) {


    try{
        const id_usuario = req.id_usuario;
        
        const {descricao, valor, id_categoria, tipo, dt_lancamento} = req.body;
    
        const retorno = await serviceLancamento.Inserir(id_usuario, descricao, valor, id_categoria, tipo, dt_lancamento)
    
    res.status(201).json(retorno)

    }catch(error){
        res.status(500).json({error})
    }

}






async function Editar(req, res) {


    try{
        const id_usuario = req.id_usuario;
        const id_lancamento = req.params.id_lancamento;
        const {descricao, valor, id_categoria, tipo, dt_lancamento} = req.body;
    
        const retorno = await serviceLancamento.Editar(id_usuario,id_lancamento, descricao, valor, id_categoria, tipo, dt_lancamento)
    
    res.status(201).json(retorno)

    }catch(error){
        res.status(500).json({error})
    }

}


async function Excluir(req, res) {


   
    try{
         const id_usuario = req.id_usuario;
        const id_lancamento = req.params.id_lancamento;
        
       
    
        const retorno = await serviceLancamento.Excluir(id_usuario,id_lancamento)
    
    res.status(201).json(retorno)

    }catch(error){
        res.status(500).json({error})
    }


}



async function Resumo(req, res) {
        

    try{

    const id_usuario = req.id_usuario
   
    
    const resumo = await serviceLancamento.Resumo(id_usuario);

       
            res.status(201).json(resumo)

    }catch(error){
            res.status(500).json({error})
    }

}






export default {Inserir, Excluir, Editar, Listar, Resumo}