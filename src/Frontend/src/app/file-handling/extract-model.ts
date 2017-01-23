export interface ExtractModel {
    fromBatchFiles: boolean;
    perFileFormats: boolean;
    preserveFileOrdering: boolean;
    fileInfos: ExtractFileInfo[];
}
export interface ExtractFileInfo {
    index: number;
    fileName: string;
    batchProcessLines: boolean;
    delimiter: string;
    lineFormat: string;
    startLine: number;
    flls: Fll[];
    file: File;
}
export interface Fll {
    lineLength: number;
    lineIndex: number;
    fieldIndexes: string[];
}