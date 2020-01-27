import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-almacen',
  templateUrl: './nuevo-almacen.component.html',
  styleUrls: ['./nuevo-almacen.component.scss']
})
export class NuevoAlmacenComponent implements OnInit {
  myForm: FormGroup;



  constructor(public fb: FormBuilder, private router: Router) { }


  saveData() {
    if (this.myForm.valid) {
      //Aquí se puede guardar
      alert("Se guardo el credito");
      //Se redirecciona a la tabla de creditos
      this.router.navigate(['/creditos']);
    } else {

    }

  }
  ngOnInit() {
    this.myForm = this.fb.group({
      nombre: [' ', [Validators.required]],
      username: [' ', [Validators.required, this.validarUsername]],
      email: [' ', [Validators.required, Validators.email, this.validarEmail]],
      password: ['00000000', [Validators.required]],
      interes: [0, [Validators.required]]
    });

  }

  validarUsername() {

  }

  validarEmail() {

  }

}
