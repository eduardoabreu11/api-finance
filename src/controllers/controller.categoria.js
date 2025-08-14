import serviceCategoria from "../services/service.categoria.js";





async function Listar(req, res) {


    try{
    
    const categoria = await serviceCategoria.Listar(req.id_usuario);

       
            res.status(200).json(categoria)

    }catch(error){
            res.status(500).json({error})
    }

}

async function Inserir(req, res) {


    try{
        const id_usuario = req.id_usuario;
        const {categoria, icone} = req.body;
    
        const retorno = await serviceCategoria.Inserir(id_usuario, categoria, icone)
    
    res.status(201).json(retorno)

    }catch(error){
        res.status(500).json({error})
    }

}






async function Editar(req, res) {


    try{
        const id_usuario = req.id_usuario;
        const id_categoria = req.params.id_categoria;
        const {categoria, icone} = req.body;
    
        const retorno = await serviceCategoria.Editar(id_usuario,id_categoria, categoria, icone)
    
    res.status(201).json(retorno)

    }catch(error){
        res.status(500).json({error})
    }

}


async function Excluir(req, res) {


   
    try{
        const id_usuario = req.id_usuario;
        const id_categoria = req.params.id_categoria;
        
       
    
        const retorno = await serviceCategoria.Excluir(id_usuario,id_categoria)
    
    res.status(201).json(retorno)

    }catch(error){
        res.status(500).json({error})
    }


}






export default {Inserir, Excluir, Editar, Listar}