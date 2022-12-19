import { EditorConfig, OutputData } from '@editorjs/editorjs';
import { EditorCore } from '@react-editor-js/core';
export declare class ServerEditorCore implements EditorCore {
    private _memoizedData;
    constructor({ data }: EditorConfig);
    get dangerouslyLowLevelInstance(): any;
    clear(): Promise<void>;
    save(): Promise<OutputData>;
    destroy(): Promise<void>;
    render(): Promise<void>;
}
