import {Component} from '@angular/core';
import {AddASecretComponent} from "./crud-for-secrets/add-a-secret.component";
import {ListAllSecretsComponent} from "./crud-for-secrets/list-all-secrets.component";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives:[AddASecretComponent,ListAllSecretsComponent],
})
export class AppComponent {
  title = 'app works!';
  duck = "";
}
