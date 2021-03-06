export interface Field {
    seqNum?: number;
    fieldId?: number;
    name: string;
    datatype: string;
    length: number;
    active: boolean;
    existing?: boolean;
    created_By?: string;
    creation_Date?: Date;
    modified_By?: string;
    date_Modified?: Date;
}

export class Field implements Field {
    constructor(
        public name: string,
        public datatype: string,
        public length: number,
        public active: boolean,
        public existing?: boolean,
        public seqNum?: number
        ) {}
    
    public static isEquivalent(a: Field, b: Field){
        var aProps = Object.getOwnPropertyNames(a);
        var bProps = Object.getOwnPropertyNames(b);

        if (aProps.length != bProps.length) {
            return false;
        }

        var upperA = a.name.toUpperCase();
        var upperB = b.name.toUpperCase();

        if(upperA != upperB || !upperA.includes(upperB) || 
        !upperB.includes(upperA) ||
        a.datatype !== b.datatype || 
        a.length !== b.length || 
        a.active !== b.active) 
            return false;
    }
}