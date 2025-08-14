
import repoCategoria from "../repositories/repository.categoria.js"





async function Listar(id_usuario) {


    
   
    const categoria = await repoCategoria.Listar(id_usuario);

    return categoria;


    

}

async function Inserir(id_usuario, categoria, icone) {

    
   
   
    const retorno = await repoCategoria.Inserir(id_usuario, categoria, icone)

  
    
    

    return retorno ;

  

}




async function Editar(id_categoria,id_usuario, categoria, icone) {


    

    

    const retorno  = await repoCategoria.Editar(id_categoria,id_usuario, categoria, icone )

    return retorno 

   

}

async function Excluir(id_usuario,id_categoria) {

    

    const retorno  = await repoCategoria.Excluir(id_usuario,id_categoria)

    return retorno 
}






export default {Inserir, Listar, Editar, Excluir}