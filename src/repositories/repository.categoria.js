import { query } from "../database/sqlite.js";

async function Listar(id_usuario) {

    let sql = `select * from categoria where id_usuario = ? order by categoria`;
   const categoria = await query(sql, [id_usuario]);

  
    return categoria


    

}

async function Inserir(id_usuario, categoria, icone) {

    
   let sql = `insert into categoria(id_usuario, categoria, icone) values(?, ?, ?) returning id_categoria`;
   const usuario = await query(sql, [id_usuario, categoria, icone]);
   


    return usuario[0];

  

}






async function Editar(id_categoria,id_usuario, categoria, icone) {


    
     
   let sql = `update categoria set categoria =?, icone =? where id_categoria = ? and id_usuario = ?`;
   const usuario = await query(sql, [categoria, icone, id_categoria, id_usuario]);


    return {id_categoria};
    

   

}

async function Excluir(id_usuario,id_categoria) {


  let sql = `delete from categoria where id_categoria = ? and id_usuario = ?`;
    await query(sql, [id_categoria, id_usuario]);
   


    return {id_categoria};
    

}






export default {Inserir, Excluir, Listar, Editar}