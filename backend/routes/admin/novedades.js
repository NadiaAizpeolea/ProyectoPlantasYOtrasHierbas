var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');
var util = require('util');
var claudinary = require('cloudinary').v2;

const uploader = util.promisify(claudinary.uploader.upload);

/* GET novedades */
router.get('/', async function (req, res, next){
  var novedades = await novedadesModel.getNovedades();

  novedades = novedades.map(novedad =>{
    if (novedad.img_id){
      const imagen = claudinary.image(novedad.img_id, {
        width: 100,
        height: 100,
        crop: 'fill'
      });
      return{
        ...novedad,
        imagen
      }
    } else{
      ...novedad,
      imagen: ''
    }
  })

  res.render('admin/novedades',{
    layout: 'admin/layout',
    usuario: req.session.nombre,
    novedades 
  });
});
router.get('/agregar', (req, res, next)=>{
res.render('admin/agregar',{
  layout: 'admin/layout'
});
});

/*Agregar novedades*/

router.post('/agregar', async (req, res, next) => {
  try{
    var img_id='';
    console.log(req.files.imagen);
    if (req.files && Object.keys(req.files).length>0){
      imagen = req.files.imagen;
      img_id = (await uploader (imagen.tempFilePath)).public_id;
       }



    if(req.body.titulo !="" && req.body.subtitulo!="" && req.body.cuerpo!=""){
      await novedadesModel.insertNovedad({
        ...req.body,
          img_id    
      });
      res.redirect('/admin/novedades')
    } else {
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true, message:'todos los campos son requeridos'
      });
    }
  } catch(error){
    console.log(error)
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true, message:'no se ha podido cargar la novedad'
    })
  }
});

/*eliminar novedades*/ 

router.get('/eliminar/:id', async (req, res, next)=>{
  let id = req.params.id;
  await novedadesModel.deleteNovedad(id);
  res.redirect('/admin/novedades');
});

/*modificar novedades*/

router.get('/modificar/:id', async(req, res, next)=>{
  let id = req.params.id;
  let novedad = await novedadesModel.getNovedadById(id);
  res.render('admin/modificar',{
    layout: 'admin/layout',
    novedad
  });
});

router.post('/modificar', async(req, res, next)=>{
  try{
    let obj = {
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      cuerpo: req.body.cuerpo,
    }
    await novedadesModel.modificarNovedad(obj, req.body.id);
    res.redirect('/admin/novedades');
  } catch(error) {
    console.log(error)
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true, message: 'No se pudo modificar la novedad, intentelo nuevamente'
    })

  }
});

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('admin/novedades', {
  layout: 'admin/layout',
  persona: req.session.nombre
});
});*/ 



module.exports = router;

