import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, concatMap, map, mergeMap, of, tap } from "rxjs";
import { UserServiceService } from "src/app/Services/user-service.service";
import * as UserActions from '../Actions/user.actions'
import { User,LoginUser } from "../../components/interfaces";
import { Router } from "@angular/router";


@Injectable()

export class UserEffects{
    
        constructor(private userService:UserServiceService,private actions$:Actions, private router:Router){}
        
        loadUsers$=createEffect(()=>{
            return  this.actions$.pipe(
                ofType(UserActions.loadUser),
                mergeMap(() => this.userService.getUsers().pipe(
                   
                    map(users => UserActions.loadSuccess({users:users})),
                    catchError(error => of(UserActions.loadUsersFailure({ error })))
                )),
            )
        })

     
        login=createEffect(()=>{
            return this.actions$.pipe(
                ofType(UserActions.login),
                mergeMap((action:LoginUser)=>{
                return this.userService.login(action.email,action.password).pipe(
                        map((successResponse:any)=>{

                            localStorage.setItem('token',successResponse.token)
                            return UserActions.loginSuccess({message:successResponse.message,token:successResponse.token,role:successResponse.role,name:successResponse.name})

                        }),
                        catchError(error=>of(UserActions.loginFailure({error:error.message}))),

                    )
                })
            )
        })
    
        register = createEffect(()=>{
        return this.actions$.pipe(
            ofType(UserActions.register),
            concatMap((action:User)=>{
                return this.userService.register(action.name,action.email,action.password).pipe(
                    map(successResponse=>{
                        console.log(successResponse)
                        return UserActions.registerSuccess({message:'User Registered Successfully'})
                    }),
                    catchError(error=>of(UserActions.registerFailure({error:error.message})))
                )
            })
        )
        })
    
    }
















