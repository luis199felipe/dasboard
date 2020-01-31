import { Injectable } from '@angular/core';
import { ProductoCompleto } from '../producto-page/productoCompleto.interface';

@Injectable()
export class ProductosService {
  PRODUCTOSCOMPLETOS: ProductoCompleto[] = [
    {
      marca: 'Nike',
      genero: 'Hombre',
      referencia: '234kl',
      talla: '35',
      cantidad: 50,
      color: 'Negro',
      subreferencia: 'asdf4',
      ubicacion: 'Armenia',
      precio: 150000,
      idProducto: 1,
      nombre: 'Pierre Azul',
      img: '/assets/img/inventario/formalAzul.jpg'
    }
  ]
  PRODUCTOS: Producto[] = [
    {
      idProducto: 1,
      nombre: 'Pierre Azul',
      descripcion: 'El primero imprescindible en todo armario masculino es un zapato Pirre liso y negro. Es la base de todo zapatero. ',
      precio: 152300,
      img: '/assets/img/inventario/formalAzul.jpg'
    },
    {
      idProducto: 2,
      nombre: 'Oxford',
      descripcion: 'sí, si el Oxford negro liso transmite elegancia, el Oxford semi-brogue de tonalidad cercana al coñac aporta estilo. ',
      precio: 113500,
      img: '/assets/img/inventario/zapatoFormal.jpg'
    },
    {
      idProducto: 3,
      nombre: 'Sport magic',
      descripcion: `MATERIAL RESPIRATORIO Y LIGERO: está hecho de un material ultraligero, el tejido está tejido con phylon, cómodo y portátil.`,
      precio: 90000,
      img: '/assets/img/inventario/zapatos-deportivos.jpg'
    },
    {
      idProducto: 4,
      nombre: 'Vans Rojo',
      descripcion: 'Zapato Casual',
      precio: 68000,
      img: '/assets/img/inventario/zapatos-vans-rojo.jpg'
    },
    {
      idProducto: 5,
      nombre: 'Vans azul',
      descripcion: 'Zapato Casual',
      precio: 72000,
      img: '/assets/img/inventario/zapatos-vans.jpg'
    },
    {
      idProducto: 6,
      nombre: 'Zapatos Boteros',
      descripcion: 'Boteros',
      precio: 142600,
      img: '/assets/img/inventario/zapatosBoteros.jpg'
    },
    {
      idProducto: 7,
      nombre: 'Zapato formal',
      descripcion: 'Zapato para hombre',
      precio: 115000,
      img: '/assets/img/inventario/zapatoPierre.jpg'
    },
  ]

  constructor() { }

  getProductos() {
    return this.PRODUCTOS;
  }

  getProductoCompleto(id: number) {
    let prod = this.PRODUCTOSCOMPLETOS.filter(producto => {
      console.log(producto.idProducto, id, producto.idProducto == id)
      return producto.idProducto == id
    });
    console.log("ENTRO Y DEVOLVIO ", prod, id)
    return prod.length > 0 ? prod[0] : null;

  }

}



