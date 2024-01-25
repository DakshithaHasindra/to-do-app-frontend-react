export class Task {
    // private _id :string;

    description: string;
   status:boolean;

    constructor(taskDescription: string, status: boolean) {
        this.description = taskDescription;
        this.status = status;
    }

    // constructor(id:string,taskDescription: string, status: boolean) {
    //     this._id = id;
    //     this._description = taskDescription;
    //     this._status = status;
    // }

    // get id(): string {
    //     return this._id;
    // }
    //
    // set id(value: string) {
    //     this._id = value;
    // }


}