import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-registro-mercancia',
  templateUrl: './registro-mercancia.component.html',
  styleUrls: ['./registro-mercancia.component.scss']
})
export class RegistroMercanciaComponent implements OnInit {

  formMercancia: FormGroup;

  marcas: string[];
  colores: string[];

  constructor(private fb: FormBuilder) {
    this.marcas = ["Nike", "Adidas", "New Balance", "Sport"];
    this.colores = ["Blanco", "Negro", "Azul", "Rojo", "Amarillo"];
  }

  onUploadFinish(event) {
    console.log(event);
  }

  guardar() {
    if (!this.formMercancia.valid) {
      alert("Por favor corrija los errores para poder continuar.");
      return;
    }

    //AQUI SE HACE LA PETICION AL BACKEND PARA GUARDAR EL FORMULARIO
    console.log(this.formMercancia);
  }

  ngOnInit() {
    this.formMercancia = this.fb.group({
      nombre: ['--', [Validators.required]],
      marca: [0, [Validators.required]],
      genero: [0, [Validators.required]],
      referencia: ['31AB84', [Validators.required]],
      talla: [24, [Validators.required, this.validateTalla]],
      cantidad: [1, [Validators.required, this.validateCantidad]],
      color: [0, [Validators.required]],
      subreferencia: ['--', [Validators.required]],
      ubicacion: ['--', [Validators.required]],
      precio: [0, [Validators.required]],
      costo: [0, [Validators.required]],
      producto: ['--', [Validators.required]],
      devolucion: [1, [Validators.required]],
      deAlmacen: ['--', [Validators.required]],
      aAlmacen: ['--', [Validators.required]],
    });

  }

  validateCantidad(control: AbstractControl): { [key: string]: any } | null {

    const val = parseInt(control.value);
    if (val < 1 || val > 20000) {
      return { invalidRange: true };
    } else {
      return null;
    }
  }

  validateTalla(control: AbstractControl): { [key: string]: any } | null {

    const val = parseInt(control.value);
    if (val < 20 || val > 46) {
      return { invalidRange: true };
    } else {
      return null;
    }
  }

}
