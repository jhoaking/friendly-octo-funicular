import { httpError } from "./httpError";

export class NotFound extends httpError{
    constructor(recurso: string = "recurso"){
        super(404,`${recurso} no encontrado`);
    }
}

export class BadRequest extends httpError{
    constructor(message : string = "dato invalido"){
        super(404,message);
    }
}

// export class ForbidenError extends httpError{
//     constructor(message : string = 'acceso denegado'){
//         super(404,message);
//     }
// }

