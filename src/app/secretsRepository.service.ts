import {Injectable} from "@angular/core";
import {Secret} from './shared/secret.ts'
@Injectable()
export class SecretsRepo {

  SECRETS = new Array<Secret>();
  counter:number = 0;

  insert(secret:string) {
    const id = this.counter++;
    this.SECRETS.push({id: id, content: secret});
  }

  delete(item:Secret) {
    this.SECRETS.splice(this.SECRETS.indexOf(item), 1);
  }

  update(item:Secret) {
    this.SECRETS[this.SECRETS.indexOf(item)] = item;
  }


}
