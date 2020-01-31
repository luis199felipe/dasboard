import { Component, OnInit } from '@angular/core';
import { ProductosService } from './productos.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss']
})
export class InventarioComponent implements OnInit {

  misProductos: Producto[];

  constructor(productosService: ProductosService) {
    this.misProductos = productosService.getProductos();
  }

  ngOnInit() {
  }

}
