import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IUser } from '../models/user';
import { tap, catchError } from 'rxjs/operators';
import { ICar } from '../models/car';
import { IFood } from '../models/food';

@Injectable({
   providedIn: 'root'
})
export class PartService{
    constructor(private http: HttpClient){

    }
    private url = 'http://localhost:5001/api/parts';
    private updateUrl = 'http://localhost:5001/api/parts/updatePartAmount';

    async getParts(): Promise<IFood[]>{
        return this.http.get<IFood[]>(this.url)
            .pipe(
                tap(data => console.log('Parts: '+ JSON.stringify(data))),
                catchError(this.error)
            ).toPromise();
    }

    addPart(part: IFood): Observable<IFood>{
        return this.http.post<IFood>(this.url, part)
            .pipe(
                tap(data => console.log('Parts: '+ JSON.stringify(data))),
                catchError(this.error)
            );
    }

    updatePart(parts: IFood[]): Observable<IFood>{
        debugger;
        return this.http.post<IFood>(this.updateUrl, parts)
            .pipe(
                tap(data => console.log('Parts: '+ JSON.stringify(data))),
                catchError(this.error)
            );
    }

    async removePart(part: IFood): Promise<IFood>{
        return this.http.delete<IFood>(this.url+'/'+part.id_part)
            .pipe(
                tap(data => console.log('Parts: '+ JSON.stringify(data))),
                catchError(this.error)
            ).toPromise();
    }

    private error(err: HttpErrorResponse){
        return throwError('error');
    }

}
