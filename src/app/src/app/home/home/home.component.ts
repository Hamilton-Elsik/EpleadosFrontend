import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { lastValueFrom } from 'rxjs';
import { CreateComponent } from '../PopUp/create/create.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  empleados: any;
  constructor(public dialog: MatDialog, private empleadosService: EmpleadosService,private toastr: ToastrService){
  }

  ngOnInit(): void {
    this.getdatos();
  }

  async getdatos(){
    [this.empleados]= await Promise.all([
      lastValueFrom(this.empleadosService.getEmpleado()),
    ]);
    console.log('datos del mantenimiento ',this.empleados)
  }
  add(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "90vw"
    dialogConfig.maxHeight = "90vh"
    const dialogRef = this.dialog.open(CreateComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(x => {this.getdatos()})

    // console.log('hicimos click')
  }

  eliminar(i){
    this.empleadosService.deleteEmpleado(i).subscribe(data => {
      this.toastr.success('El empleado fue eliminado con exito', 'Empleado Registrado');
      this.getdatos();
    }, error => {
      this.toastr.error('Opps.. Ocurrio un error!', 'Error');
      // this.router.navigate(['/dashboard']);
      // this.loading =false;
    });
  }
}
