var pool = require('./bd');

async function getNovedades(){
    var query = "select * from novedades";
    var rows = await pool.query(query);

    return rows;  
}

/* Agregar novedades */
async function insertNovedad(obj){
    try{
        var query = "insert into novedades set ?";
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error){
        throw(error);
    }
}

/*borrar novedades*/
async function deleteNovedad(id){
    let query= 'delete from novedades where id = ?';
    let rows =  await pool.query(query, [id]);
    return rows;

}

/*modificar novedades*/
async function getNovedadById(id){
    let query = "select * from novedades where id = ?";
    let rows = await pool.query(query, [id]);
    return rows[0];
}

async function modificarNovedad(obj,id){
    try{
        console.log(obj);
        var query = "update novedades set ? where id = ?"
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch(error){
        throw(error);
    }
}

module.exports = {getNovedades, insertNovedad, deleteNovedad, getNovedadById, modificarNovedad} 