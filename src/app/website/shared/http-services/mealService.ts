import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IUser } from '../models/user';
import { tap, catchError } from 'rxjs/operators';
import { ICar } from '../models/car';
import { IMeal as IMeal } from '../models/food';

@Injectable({
   providedIn: 'root'
})
export class PartService{
    constructor(private http: HttpClient){

    }
    private url = 'http://localhost:5001/api/meals';
    private updateUrl = 'http://localhost:5001/api/parts/updatePartAmount';

    async getMeals(): Promise<IMeal[]>{
        return this.http.get<IMeal[]>(this.url)
            .pipe(
                tap(data => console.log('Meals: '+ JSON.stringify(data))),
                catchError(this.error)
            ).toPromise();
    }

    addPart(meal: IMeal): Observable<IMeal>{
        return this.http.post<IMeal>(this.url, meal)
            .pipe(
                tap(data => console.log('Meals: '+ JSON.stringify(data))),
                catchError(this.error)
            );
    }

    updatePart(meal: IMeal[]): Observable<IMeal>{
        debugger;
        return this.http.post<IMeal>(this.updateUrl, meal)
            .pipe(
                tap(data => console.log('Meals: '+ JSON.stringify(data))),
                catchError(this.error)
            );
    }

    async removePart(meal: IMeal): Promise<IMeal>{
        return this.http.delete<IMeal>(this.url+'/'+meal.id_meal)
            .pipe(
                tap(data => console.log('Meals: '+ JSON.stringify(data))),
                catchError(this.error)
            ).toPromise();
    }

    private error(err: HttpErrorResponse){
        return throwError('error');
    }

}
