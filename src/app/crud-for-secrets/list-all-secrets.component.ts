import {Component, Input, OnInit} from "@angular/core";
import {SecretsRepo} from "../secretsRepository.service";
import {Secret} from "../shared/secret";
import {DataService} from "../http/repo2.service";

@Component({
  'selector': 'list-all-secrets',
  template: `
<section>
  <ul>
    <li (click)="onSelect(secret)" *ngFor="let secret of _secretsRepo.SECRETS; let i = index">
    {{secret.content}}, id={{secret.id}}, index={{i}}
    </li>
  </ul>
  <section *ngIf="selected != null">
  <textarea  #newValue>{{selected.content}}</textarea>
    <button (click)="onDelete()">Delete this secret</button>
    <button (click)="onEdit(newValue.value)">Edit this secret</button>
     <button (click)="saveInDb()">Save in db</button>
    <button (click)="onGetPosts()">Get from db</button>
  </section>

</section>

`,
  providers: [DataService]
})

export class ListAllSecretsComponent implements OnInit {
  constructor(private _secretsRepo:SecretsRepo, private _dataService:DataService) {
  }

  selected:Secret = null;
  edit = {id:0,content:''};
  response:string;

  onSelect(secret:Secret) {
    this.selected = secret;
  }

  onDelete() {
    this._secretsRepo.delete(this.selected);
    this.selected = null;
  }

  onEdit(value:string) {
    this.edit.id = this.selected.id;
    this.edit.content = value;
    // console.log(this._dataService.postData(this.selected));

    this._dataService.postData(this.edit).subscribe(
      data=>this.response = JSON.stringify(this.edit),
      error => console.log(error));
    this.onGetPosts();


  }

  saveInDb() {
    this.selected.id = null;
    // console.log(this._dataService.postData(this.selected));

    this._dataService.postData(this.selected).subscribe(
      data=>this.response = JSON.stringify(this.selected),
      error => console.log(error));

    console.log(this.response);
  }

  onGetPosts() {
    this._dataService.getData().subscribe(data=> {
        console.log(data);
        this._secretsRepo.SECRETS = data;
        this.response = JSON.stringify(data);
      },
      error=>console.error(error));


  }

  ngOnInit() {
    this.onGetPosts();
  }
}
