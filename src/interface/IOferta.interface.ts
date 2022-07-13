import { IEmpresa } from "./IEmpresa.interface";
type Tecnologias = {
  id: number;
  nombre: string;
  createdAt: Date;
  updatedAt: Date;
};
type Idioma = { id: number; nombre: string; createdAt: Date; updatedAt: Date };
type Beneficio = {
  id: number;
  nombre: string;
  descripcion: string;
  createdAt: Date;
  updatedAt: Date;
};
type Categoria = {
  id: number;
  nombre: string;
  createdAt: Date;
  updatedAt: Date;
};

export enum region {
  LATAM = "latam",
  EUROPA = "europa",
}

export enum TipoExperiencia {
  JUNIOR = "junior",
  SEMISENIOR = "semi-senior",
  SENIOR = "senior",
}

export enum TipoPresencialidad {
  REMOTO = "remoto",
  MIXTO = "mixto",
  PRESENCIAL = "presencial",
}

export enum TipoJornada {
  COMPLETA = "completa",
  PARCIAL = "parcial",
}
export enum TipoEstado {
  ABIERTA = "abierta",
  CERRADA = "cerrada",
}

export interface IOferta {
  id: string;
  nombre: string;
  descripcion: string;
  ubicacion: string;
  region: region;
  experiencia: TipoExperiencia;
  presencialidad: TipoPresencialidad;
  jornada: TipoJornada;
  estado: TipoEstado;
  publicada: boolean;
  salarioMin: number;
  salarioMax: number;
  vacantes: number;
  requisitos: string[];
  tecnologias: Tecnologias[];
  idiomas: Idioma[];
  beneficios: Beneficio[];
  categoriaId: number;
  categoria: Categoria;
  empresaId: number;
  empresa: IEmpresa;
}
