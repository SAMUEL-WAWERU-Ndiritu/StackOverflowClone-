export interface User{
    Name:string
    Email:string
    Password:string
}

export interface Message{
    message:string
}

export interface LoginUser{
    Email:string
    Password:string
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
