export class httpError extends Error{
    public readonly statusCode : number;

    constructor(statusCode : number , message : string){
        super(message);
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}