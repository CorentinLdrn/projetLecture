import EditorJS, { EditorConfig, OutputData } from '@editorjs/editorjs';
import { EditorCore } from '@react-editor-js/core';
export declare class ClientEditorCore implements EditorCore {
    private _editorJS;
    constructor({ tools, ...config }: EditorConfig);
    get dangerouslyLowLevelInstance(): EditorJS;
    clear(): Promise<void>;
    save(): Promise<OutputData>;
    destroy(): Promise<void>;
    render(data: OutputData): Promise<void>;
}
