import { OutputData } from '@editorjs/editorjs';
import { EditorCore } from '../src';
export declare class TestEditorCore implements EditorCore {
    private _data;
    constructor();
    get data(): OutputData;
    get dangerouslyLowLevelInstance(): any;
    clear(): Promise<void>;
    save(): Promise<{
        blocks: any[];
    }>;
    destroy(): Promise<void>;
    render(data: OutputData): Promise<void>;
}
