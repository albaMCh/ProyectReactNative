import { IOferta } from "./IOferta.interface";
type AttachmentContract = { url: string, name: string, extname: string, size: number, mimeType: string};
type valor = { id: number, nombre: string,  createdAt: Date, updatedAt: Date };
export interface IEmpresa {
   

 nombre: string;
 ubicacion: string;
 descripcion: string;
 url: string;
 enlaceTwitter: string;
 enlaceLinkedin: string;
 enlaceBehance: string;
 imagen: AttachmentContract | null ;
 email: string;
 valores: valor[];
 numEmpleados: string;
 creacion: number // Hacemos referencia al año de creación
 ofertas: IOferta;

// Pendientes de revision
// ----------------------
// userId: number
// user: User
}