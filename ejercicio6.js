
const compra = ['papa', 'harina', 'arroz','jugo','carne']
console.log('compra :>> ', compra);

compra.splice(5,0,'aceite de girasol')
console.log('compra modificada :>> ', compra);

compra.splice(5)
console.log('compra eliminada :>> ', compra);

const peli = [
    {titulo : 'coco', director: 'juanito', fecha: new Date(2011,8, 28) },
    {titulo : 'sirenita', director: 'catalina', fecha: new Date(2001,6, 5) },
    {titulo : 'grinch', director: 'fernando', fecha: new Date(2015,2, 15) },
]

const fec = peli.filter(e => e.fecha >= new Date(2010,0, 1))
console.log('fecha de peliculas posteriores a 1/1/2010 :>> ', fec);

let arrayd= peli.map(function(a){
    return a.director
});
console.log('Directores :>> ', arrayd);

let arrayt = peli.map(function (a) {
    return a.titulo
})
console.log('Titulos :>> ', arrayt);

let t_d = arrayd.concat(arrayt)
console.log('Directores y Titulos concatenados :>> ', t_d);

let d_t = [...arrayd, ...arrayt]
console.log('Factor de propagacion :>> ', d_t);