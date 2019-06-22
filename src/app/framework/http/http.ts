import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APITREE } from './api-tree';

@Injectable()
export class UserHttpService {

  constructor(private http: HttpClient) { }



  async getUserById(userId:any) {
    console.log(APITREE);
    // const url = APITREE.api.v1.user._this + '/' + userId;
    // return this.http.get(url).toPromise();
  }

  // async getUserByName(name) {
  //   const url = APITREE.api.v1.user.getByName + '/' + name;
  //   return this.http.get(url).toPromise();
  // }

  // async getUserListByAge(age) {
  //   const url = APITREE.api.v1.user.getByAge + '/' + age;
  //   return this.http.get(url).toPromise();
  // }

}
