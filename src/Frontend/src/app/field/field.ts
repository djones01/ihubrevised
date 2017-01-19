export interface Field {
    fieldId?: number;
    name: string;
    datatype: string;
    length: string;
    active: string;
    created_By?: string;
    creation_Date?: Date;
    modified_By?: string;
    date_Modified?: Date;
}

export class Field implements Field {
    constructor(
        public name: string,
        public datatype: string,
        public length: string,
        public active: string
        ) {}
}