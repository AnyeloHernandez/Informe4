export interface Publicacion {
    id?: number;
    usuario?: string;
    curso?: string;
    catedratico?: string;
    mensaje?: string;
    created_at?: Date;
}

// el ? indica que son opcionales, por el momento lo dejare asi para que no ocurran problemas.