import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  datos: FormGroup;
  constructor(private fb: FormBuilder, private empleadosService: EmpleadosService,private toastr: ToastrService, private _dialogRef:MatDialogRef<CreateComponent>){
    this.datos = this.fb.group({
      primApellido: ['',Validators.required],
      primNombre: ['',Validators.required],
      otrosNombres: ['',Validators.required],
      tipoId: ['',Validators.required],
      numId: ['',Validators.required],
      paisEmpleo: ['',Validators.required],
      fechaIngreso: ['',Validators.required],
      fechaRegistro: ['',Validators.required]
    }, { validators: this.validarhora });
  }

  validarhora(group: FormGroup){
    // const horainicio = group.value.horaInit;
    // const horafin = group.value.hortaFin;

    // if(horainicio > horafin){
    //   console.log('La hora de finalizacion debe ser mayor a la hora de inicio')
    // }

  }

  enviarDatos(): void{
    const empleado: Empleado = {
      primer_nombre: this.datos.value.primNombre,
      primer_apellido: this.datos.value.primApellido,
      otros_nombres: this.datos.value.otrosNombres,
      tipo_identificacion: this.datos.value.tipoId,
      numero_identificacion: this.datos.value.numId,
      pais_empleo: this.datos.value.paisEmpleo,
      fecha_ingreso: this.datos.value.fechaIngreso,
      registro: this.datos.value.fechaRegistro,
      email: this.datos.value.primNombre + '.' + this.datos.value.primApellido + '@cidenet.com.co'
    };
    console.log('formulario datos ',empleado)

    this.empleadosService.addEmpleado(empleado).subscribe(data => {
      this.toastr.success('El empleado fue registrado con exito', 'Empleado Registrado');
      this._dialogRef.close(true);
    }, error => {
      this.toastr.error('Opps.. Ocurrio un error!', 'Error');
    });
  }

  close(){  
    this._dialogRef.close(true);
  } 
}
