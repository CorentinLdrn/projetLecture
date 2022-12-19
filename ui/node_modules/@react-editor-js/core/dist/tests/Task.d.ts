export declare class Task {
    private _promise;
    private _resolver;
    constructor();
    done(): void;
    wait(): Promise<void>;
}
