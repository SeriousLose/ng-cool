import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { UserHttpService } from "./framework/http/http";
import { ApiRequestService } from "./framework/services/api.server";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})
export class AppComponent {
  title = "app";

  constructor(private translate: TranslateService, private userHttpService: UserHttpService, private apiRequest: ApiRequestService) {}

  public async ngOnInit() {
    this.getUserById("1111");
    debugger
    //调用测试，不必要的代码全略掉
    this.apiRequest.exec("GET", "/assets/i18n/zh-CN.json",'1').subscribe((data:any) => {
      console.log(data);
    });
    debugger
    this.apiRequest.exec("GET", "/assets/i18n/zh-CN.json",'2').subscribe((data:any) => {
      console.log(data);
    });
    this.apiRequest.exec("GET", "/assets/i18n/zh-CN.json",'3').subscribe((data:any) => {
      console.log(data);
    });
    this.apiRequest.exec("GET", "/assets1/i18n/zh-CN.json",'3').subscribe((data:any) => {
      console.log(data);
    });
    this.apiRequest.exec("GET", "/assets/i18n/zh-CN.json",'3').subscribe((data:any) => {
      console.log(data);
    });
    this.apiRequest.exec("GET", "/assets/i18n/zh-CN.json",'3').subscribe((data:any) => {
      console.log(data);
    });
    //三次log都被触发，但是只有一次http请求。

    // 语言初始化(若未设置语言, 则取浏览器语言)
    let currentLanguage = (await localStorage.getItem("currentLanguage")) || this.translate.getBrowserCultureLang();
    // 当在assets/i18n中找不到对应的语言翻译时，使用'zh-CN'作为默认语言
    this.translate.setDefaultLang("zh-CN");
    this.translate.use(currentLanguage);
    // 记录当前设置的语言
    localStorage.setItem("currentLanguage", currentLanguage);

    //订阅语言切换事件
    this.translate.onLangChange.subscribe((params: any) => {
      // do something
      console.log("11111111");
    });
  }

  async getUserById(userId: any) {
    const userInfo = await this.userHttpService.getUserById(userId);
    alert(JSON.stringify(userInfo));
    console.log(userInfo);
  }

  public selectLanguage(lang: any) {
    this.translate.use(lang);
    // 更新当前记录的语言
    localStorage.setItem("currentLanguage", lang);
  }
}
