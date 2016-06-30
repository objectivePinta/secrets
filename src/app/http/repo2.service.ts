import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Headers} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
import {Secret} from "../shared/secret";

@Injectable()
export class DataService {
  constructor(private _http:Http) {
  }

  postData(data:any):Observable<any> {
    const body = JSON.stringify(data);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(body);
    return this._http.post('http://localhost:8080/secrets', body, {headers: headers}).map(response => response.json());
  }

  editSecret(data:Secret):Observable<any> {
    const body = JSON.stringify(data);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(body);
    return this._http.post('http://localhost:8080/secrets-api/little',
      body, {headers: headers}).map(response => response.json());

  }

  getData():Observable<any> {
    return this._http.get('http://localhost:8080/secrets-api/all').map(response=>response.json());
  }

}

//
// import {Component} from "angular2/core";
// import {DataService} from "./data.service";
// import {error} from "util";
// @Component({
//   selector: 'my-app',
//   template: `<div>
//     <div class="input">
//         <label for="title">Title</label>
//         <input type="text" id="title" #title>
//     </div>
//     <div class="input">
//         <label for="body">Body</label>
//         <input type="text" id="body" #body>
//     </div>
//     <div class="input">
//         <label for="user-id">User Id</label>
//         <input type="text" id="user-id" #userId>
//     </div>
//     <button (click)="onPost(title.value,body.value,userId.value)">Post Data</button>
//     <button (click)="onGetPosts()">Get all Posts</button>
//     <p>Response:{{response}}</p>
// </div>
//     `,
//   providers: [DataService]
// })
//
// export class AppComponnet {
//   response:string;
//
//   constructor(private _dataService:DataService) {
//   }
//
//   onPost(title:string, body:string, userId:string) {
//     const data = {title: title, body: body, userId: userId};
//     this._dataService.postData(data).subscribe(
//       data=>this.response = JSON.stringify(data),
//       error => console.log(error));
//   }
//
//   onGetPosts() {
//     this._dataService.getData().subscribe(data=> {
//         console.log(data);
//         this.response = JSON.stringify(data);
//       },
//       error=>console.error(error));
//
//
//   }
// }
