import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageUploadModule } from 'angular2-image-upload';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TableroComponent } from './tablero/tablero.component';

import { Routes, RouterModule } from '@angular/router';
import { NuevoAlmacenComponent } from './almacen/nuevo-almacen/nuevo-almacen.component';
import { ListadoAlmacenesComponent } from './almacen/listado-almacenes/listado-almacenes.component';
import { ListadoClientesComponent } from './clientes/listado-clientes/listado-clientes.component';
import { NgbdSortableHeader } from './shared/sortable.directive';
import { NuevoCreditoComponent } from './creditos/nuevo-credito/nuevo-credito.component';
import { ListadoCreditosComponent } from './creditos/listado-creditos/listado-creditos.component';
import { ListadoPagosComponent } from './pagos/listado-pagos/listado-pagos.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { ChartsModule } from 'ng2-charts';
import { RegistroMercanciaComponent } from './registro-mercancia/registro-mercancia.component';
import { NavImagesComponent } from './nav-images/nav-images.component';
import { HttpClientModule } from '@angular/common/http';
import { InventarioComponent } from './inventario/inventario.component';
import { ProductosService } from './inventario/productos.service';
import { ProductoPageComponent } from './producto-page/producto-page.component';


export const routes: Routes = [
  {
    path: '', component: TableroComponent,
  },
  {
    path: 'mercancia', children: [
      {
        path: '', component: InventarioComponent,
      },
      {
        path: 'listado', component: InventarioComponent,
      },
      {
        path: 'nuevo', component: RegistroMercanciaComponent
      },
      {
        path: ':id', component: ProductoPageComponent
      }
    ]
  },
  {
    path: 'almacen', children: [
      {
        path: '', component: ListadoAlmacenesComponent,
      },
      {
        path: 'listado', component: ListadoAlmacenesComponent,
      },
      {
        path: 'nuevo', component: NuevoAlmacenComponent
      }
    ]
  },
  {
    path: 'cliente', children: [
      {
        path: '', component: ListadoClientesComponent,
      },
      {
        path: 'listado', component: ListadoClientesComponent,
      }]
  },
  {
    path: 'credito', children: [
      {
        path: '', component: ListadoCreditosComponent,
      },
      {
        path: 'listado', component: ListadoCreditosComponent,
      },
      {
        path: 'nuevo', component: NuevoCreditoComponent
      }]
  },
  {
    path: 'pago', children: [
      {
        path: '', component: ListadoPagosComponent,
      },
      {
        path: 'listado', component: ListadoPagosComponent,
      }]
  }
];


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    TableroComponent,
    ListadoAlmacenesComponent,
    NuevoAlmacenComponent,
    ListadoAlmacenesComponent,
    ListadoClientesComponent,
    NgbdSortableHeader,
    NuevoCreditoComponent,
    ListadoCreditosComponent,
    ListadoPagosComponent,
    RegistroMercanciaComponent,
    NavImagesComponent,
    InventarioComponent,
    ProductoPageComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule, ChartsModule,
    NgbCarouselModule,
    RouterModule.forRoot(routes),
    ImageUploadModule.forRoot(),
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [HttpClientModule, ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
