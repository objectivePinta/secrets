import {Component} from '@angular/core';
import {SecretsRepo} from "../secretsRepository.service";
import {Secret} from "../shared/secret";
import {DataService} from "../http/repo2.service";
@Component({
  selector: 'add-a-secret',
  template: `
        <h3>Tell me your secret:<textarea rows="4" cols="50" #secret></textarea></h3>
        <button (click)="onSend(secret.value)">Send it to me!</button>
`,providers: [DataService],

})

export class AddASecretComponent {

  constructor(private _secretsRepo:SecretsRepo, private _dataService:DataService) {
  }

  response:string;

  onSend(secret:string) {

    // console.log(this._dataService.postData(this.selected));

    this._dataService.postData({id: null, content: secret}).subscribe(
      data=>this.response = JSON.stringify({id: null, content: secret}),
      error => console.log(error));

    console.log(this.response);
  }
}
// this.selected.id = null;
// // console.log(this._dataService.postData(this.selected));
//
// this._dataService.postData(this.selected).subscribe(
//   data=>this.response = JSON.stringify(this.selected),
//   error => console.log(error));
//
// console.log(this.response);
