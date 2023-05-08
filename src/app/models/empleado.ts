export class Empleado {
    id?: number
    primer_apellido: string
    primer_nombre: string
    otros_nombres: string
    tipo_identificacion: string
    numero_identificacion: string
    pais_empleo: string
    email?: string
    fecha_ingreso: Date
    registro: Date

    constructor(primer_apellido: string, primer_nombre: string, otros_nombres: string,
                tipo_identificacion: string, numero_identificacion: string, pais_empleo: string,
                fecha_ingreso: Date, registro: Date, email: string, id?: number ){
        this.id = id;
        this.primer_apellido = primer_apellido;
        this.primer_nombre = primer_nombre;
        this.otros_nombres = otros_nombres;
        this.tipo_identificacion = tipo_identificacion;
        this.numero_identificacion = numero_identificacion;
        this.pais_empleo = pais_empleo;
        this.email = email;
        this.fecha_ingreso = fecha_ingreso;
        this.registro = registro;
    }
}
