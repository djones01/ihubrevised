export interface DataObject {
    dataObjectId?: number;
    name: string;
    description: string;
    objectFormats: ObjectFormat[];
    objectTargets: ObjectTarget[];
}

export interface ObjectFormat {
    objectFormatId?: number;
}

export interface ObjectTarget {
    objectTargetId?: number;
    name: string;
    description: string;
    apiInfos: any[];
    fileInfos: any[];
    checkTypes: boolean;
    evalConditions: boolean;
    stopOnError: boolean;
}

export class DataObject implements DataObject {
    constructor(
        
    ) { }
}

export class ObjectFormat implements ObjectFormat {
    constructor(
        
    ) { }
}

export class ObjectTarget implements ObjectTarget {
    constructor(
        
    ) { }
}