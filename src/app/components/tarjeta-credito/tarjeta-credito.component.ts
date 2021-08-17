import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent implements OnInit {

  listTarjetas: any[] = [
    {
      titular: 'Juan Pérez',
      numeroTarjeta: '1234 5678 9012 3456',
      fechaExpiracion: '12/20',
      cvv: '123',
    },
    {
      titular: 'Miguel Gonzalez',
      numeroTarjeta: '1453 5698 9012 3444',
      fechaExpiracion: '12/21',
      cvv: '321',
    }
    ,
    {
      titular: 'Carlos Rodriguez',
      numeroTarjeta: '1422 5498 9012 3444',
      fechaExpiracion: '16/21',
      cvv: '147',
    }
  ];

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      titular: [''],
      numeroTarjeta: [''],
      fechaExpiracion: [''],
      cvv: ['']
    });
  }

  ngOnInit(): void {
  }

  agregarTarjeta() {
    

    const tarjeta = {
      titular: this.form.value.titular,
      numeroTarjeta: this.form.value.numeroTarjeta,
      fechaExpiracion: this.form.value.fechaExpiracion,
      cvv: this.form.value.cvv
    }

    // console.log(tarjeta);
    this.listTarjetas.push(tarjeta);
  }

}
