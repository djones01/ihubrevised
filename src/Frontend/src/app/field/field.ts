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

export class Field implements Field {
    constructor(
        public name: string,
        public datatype: string,
        public length: number,
        public active: boolean
        ) {}
}