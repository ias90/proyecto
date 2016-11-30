/**
 * Entrenamiento.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //relacion entrenamiento frecuencia
    //cod_frecuencia: { model:'catalogo_frecuencia', required: true },
    cod_frecuencia: { type: 'string' , required: true},

    descripcion : { type: 'string' , required: true},

	//cod_tipo_entr: { model:'catalogo_tipo_entr', required: true },
	cod_tipo_entr: { type: 'string' , required: true},

    cancha : { type: 'string' , required: true},

	//cod_categ_entre: { model:'catalogo_categoria_entr', required: true },
	cod_categ_entre: { type: 'string' , required: true},

	id_profesor: { model:'profesor', required: true },

	id_alumno: { model:'alumno', required: true }
  }
};

