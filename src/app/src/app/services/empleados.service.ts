import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  endpoint = "http://localhost:8000/empleados"
  constructor(private http:HttpClient) { }

  getEmpleado():Observable<Empleado>{
    return this.http.get<any>(this.endpoint)
  }

  addEmpleado(empleado: Empleado): Observable<Empleado>{
    return this.http.post<Empleado>(this.endpoint,empleado)
  }

  deleteEmpleado(id: number): Observable<any> {
    return this.http.delete(this.endpoint + '/' + id);
   }
}
