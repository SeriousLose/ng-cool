/**
 * 这是最简代码，错误处理等是使用拦截器实现的
 */
import { Injectable } from "@angular/core";
import { throwError, Subject } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

//如果配置文件中设置了代理那么可以丢掉这个
const BEServer = "http://localhost:4200";

@Injectable({
  providedIn: "root"
})
export class ApiRequestService {
  private apiSubjects = {};

  constructor(private http: HttpClient) {}

  /**
   * @description: 设置body
   * @param {type}
   * @return:
   */
  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  /**
   * @description:获取url
   * @param {type}
   * @return:
   */
  private buildUrl(url: any, params: any) {
    /* 此处略去N行代码和迭代方法 */
    return url;
  }

  // 设置headers
  private getHttpOptions(type: any) {
    /* 各种略 */
    return { headers: {} };
  }

  /**
   * @description: 发送请求
   * @param {type}
   * @return:
   */

  exec(type: any, url: any, data: any = null) {
    url = BEServer + url;
    let method = type.toLowerCase(); // 转换大小写
    if (["get", "post", "put", "delete", "file"].indexOf(method) < 0) {
      return throwError("Request method is invalid.");
    }
    let httpOptions = this.getHttpOptions(method); // 根据请求方式设置请求头
    if (method == "get") {
      if (data) {
        url = this.buildUrl(url, data);
      }
    }
    if (method == "get") {
      if (!this.apiSubjects[url]) {
        this.apiSubjects[url] = {
          subscribe: this.http[method](url, httpOptions)
            .pipe(map(this.extractData))
            .subscribe(
              (data: any) => {
                this.apiSubjects[url].subject.next(data);
                //这个delete的处理感觉不顺，但是实测也找不到更好的办法
                delete this.apiSubjects[url];
              },
              (err: any) => {
                delete this.apiSubjects[url]; //补上一句，不然会有bug
              }
            ),
          subject: new Subject<Object>()
        };
        console.log(this.apiSubjects[url], url);
      }
      return this.apiSubjects[url].subject;
    } else if (method == "delete") {
      return this.http[method](url, httpOptions).pipe(map(this.extractData));
    } else {
      return this.http[method](url, data, httpOptions).pipe(map(this.extractData));
    }
  }
}
