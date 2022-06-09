export class persona{
id?: number;
nombre: string;
apellido: string;
img: string;
descripcion: string;
ubicacion: string;
acercaDe: string;

constructor (nombre: string, apellido: string,img: string,descripcion: string,ubicacion: string,acercaDe: string){

    this.nombre=nombre;
    this.apellido=apellido;
    this.img=img;
    this.descripcion=descripcion;
    this.ubicacion=ubicacion;
    this.acercaDe=acercaDe;
}

}