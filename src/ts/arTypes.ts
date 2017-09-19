export interface ImportScriptStatus {
    isLoaded: boolean;
    isLoading: boolean;
}

export interface ImportRequest {
    callback: () => void;
    srcs: Array<string>
}

export type ImportScriptStatusMap = { [src: string]: ImportScriptStatus };

export type ImportRequestMap = { [ticket: string]: ImportRequest };