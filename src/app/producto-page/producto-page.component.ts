import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../inventario/productos.service';
import { ActivatedRoute } from '@angular/router';
import { ProductoCompleto } from './productoCompleto.interface';


@Component({
  selector: 'app-producto-page',
  templateUrl: './producto-page.component.html',
  styleUrls: ['./producto-page.component.scss']
})
export class ProductoPageComponent {

  miProducto: ProductoCompleto;


  constructor(private productosService: ProductosService, private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe((params) => {
      this.miProducto = productosService.getProductoCompleto(params['id']);
    })
    console.log(this.miProducto);
  }



}
