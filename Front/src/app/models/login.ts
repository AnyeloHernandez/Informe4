export interface Usuario {
    id?: number;
    usuario: string;
    contrasenna: string;
    correo: string;
    nombres: string;
    apellido: string;
    created_at?: Date;
}

// el ? indica que son opcionales, por el momento lo dejare asi para que no ocurran problemas.