export interface Field {
    fieldId?: number;
    name: string;
    datatype: string;
    length: number;
    active: boolean;
    created_By?: string;
    creation_Date?: Date;
    modified_By?: string;
    date_Modified?: Date;
}

export interface FieldStatus 
{
    isExisting: boolean;
    field: Field;
}

export class Field implements Field {
    constructor(
        public name: string,
        public datatype: string,
        public length: number,
        public active: boolean
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

    public static CheckFieldInList(list: FieldStatus[], field: Field, isExisting: boolean){
        var i;
        for (i = 0; i < list.length; i++) {
            if (list[i].field === field) {
                return true;
            }
        }
        list.push({ isExisting: isExisting, field: field });
    }
}