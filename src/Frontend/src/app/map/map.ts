import { Field } from "../field/field";

//Interfaces
export interface Map {
    description: string;
    effective_Date: Date;
    active: boolean;
    transformations?: Transformation[],
    mapId?: number;
}

export interface Transformation {
    description: string;
    rule: Rule;
    conditions: Condition[]
}

export interface Condition {
    seqNum: number;
    chain_Operation: string;
    left_Paren?: string;
    operation: string;
    cond_Value: string;
    right_Paren?: string;
    leftField: Field;
    rightField?: Field;
}

export interface Rule {
    rule_Value?: string;
    alt_Value?: string;
    rule_Operation: string;
    targetField: Field;
    ruleFields?: RuleField[];
}

export interface RuleField {
    trim: boolean,
    seqNum: number;
    append?: string;
    prepend?: string;
    custom_Format?: string;
    field: Field;
}

//Classes
export class Map implements Map {
    public mapId?: number;
    constructor(
        public description: string,
        public effective_Date: Date,
        public active: boolean,
        public transformations?: Transformation[]) { }
}

export class Transformation implements Transformation {
    constructor(
        public description: string,
        public rule: Rule,
        public conditions: Condition[]
    ) { }
}

export class Condition implements Condition {
    constructor(
        public seqNum: number,
        public chain_Operation: string,
        public operation: string,
        public cond_Value: string,
        public fieldToFieldCompare: boolean,
        public leftField: Field,
        public left_Paren?: string,
        public right_Paren?: string,
        public rightField?: Field 
    ) { }
}

export class Rule implements Rule {
    constructor(     
        public rule_Operation: string,
        public targetField: Field,
        public ruleFields?: RuleField[],
        public rule_Value?: string,
        public alt_Value?: string,
    ) { }
}

export class RuleField implements RuleField {
    constructor(
        public trim: boolean,
        public seqNum: number,
        public field: Field,
        public append?: string,
        public prepend?: string,
        public custom_Format?: string
    ) { }
}