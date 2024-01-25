import {Task} from "../Interface.ts";

const API_BASE_URL = 'http://localhost:3000';

export async function getAllTasks():Promise<[]> {
    try {
        const response = await fetch(API_BASE_URL+'/tasks');
        return await response.json();
    }catch (e) {
        throw e;
    }
}

export async function deleteTaskFromServer(id:string){
    try {
        const response = await fetch(API_BASE_URL+'/tasks/'+id,{
            method: 'DELETE'
        });
        console.log(response.status);
        // todo: should look for ok or not?
        return true;
    }catch (e) {
        throw e;
    }
}

export async function saveTask(task:Task):Promise<Task>{
    console.log(task);
    try {
        const response = await fetch(API_BASE_URL+"/tasks",{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body:  JSON.stringify(task)
        });
        console.log(response.status);
        if(response.status === 500){
            throw new Error("Error");
        }

        return (await response.json()) as Task;

    }catch (e) {
        throw e;
    }
}

export async function updateStatusInServer(task:Task):Promise<boolean>{
    try{
        const response =  await fetch(API_BASE_URL+"/tasks/"+task._id,{
            method : 'PATCH',
            headers: { 'Content-Type': 'application/json'},
            body:  JSON.stringify(task)
        });

        if(response.status != 200){
            throw new Error(response.statusText);
        }
        return true;
    }catch (err){
        throw err;
    }
}