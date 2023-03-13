export interface User{
    id:number
    name:string
    email:string
    password:string
}

export interface Message{
    message:string
}

export interface LoginUser{
    email:string
    password:string
}

export interface LoginSuccess{
    message:string
    token:string
    role:string
    name:string
}
export interface Questions{
    Id:string
    Title:string,
    Body:string
    Tags:string
    Date:string
}

export interface AddQuestions{
    Title:string,
    Body:string
    Tags:string
}
