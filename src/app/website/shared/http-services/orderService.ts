import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { IOrder } from "../models/order";
import { tap, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
 })
 export class OrderService{
    constructor(private http: HttpClient){

    }
    private url = 'http://localhost:5001/api/order';
    private urlUpdateOrder = 'http://localhost:5001/api/order/updateOrder';

    async getOrders(): Promise<IOrder[]>{
        return this.http.get<IOrder[]>(this.url)
            .pipe(
                tap(data => console.log('all orders; '+ JSON.stringify(data))),
                catchError(this.error)
            ).toPromise();
    }

    async getClientOrders(clientId: number): Promise<IOrder[]>{
        return this.http.get<IOrder[]>(this.url+'/'+clientId)
            .pipe(
                tap(data => console.log('all client orders; '+ JSON.stringify(data))),
                catchError(this.error)
            ).toPromise();
    }

    addOrder(order: IOrder): Observable<IOrder>{
        return this.http.post<IOrder>(this.url, order)
            .pipe(
                tap(data => console.log('order; '+ JSON.stringify(data))),
                catchError(this.error)
            );
    }

    updateOrder(order: IOrder): Observable<IOrder>{
        return this.http.post<IOrder>(this.urlUpdateOrder, order)
            .pipe(
                tap(data => console.log('order; '+ JSON.stringify(data))),
                catchError(this.error)
            );
    }
    
    private error(err: HttpErrorResponse){
        return throwError('error');
    }
 }