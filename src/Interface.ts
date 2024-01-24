export class Task {
    private _taskDescription: string;
    private _status:boolean;

    constructor(taskDescription: string, status: boolean) {
        this._taskDescription = taskDescription;
        this._status = status;
    }

    get taskDescription(): string {
        return this._taskDescription;
    }

    set taskDescription(value: string) {
        this._taskDescription = value;
    }

    get status(): boolean {
        return this._status;
    }

    set status(value: boolean) {
        this._status = value;
    }
}