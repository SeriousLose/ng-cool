import { Directive, OnInit, HostListener, Output, EventEmitter, Input, OnDestroy } from "@angular/core";
import { Subject, Subscription } from "../../../../node_modules/rxjs";
import { debounceTime, throttleTime } from "rxjs/internal/operators";

@Directive({
  selector: "[throttleClick]"
})
export class DebounceClickDirective implements OnInit, OnDestroy {
  @Input() debounceTime = 500;
  // @Output() debounceClick = new EventEmitter();

  // private clicks = new Subject<any>();
  // private subscription: Subscription;

  @Input() public throttleTime = 3000;
  @Output() public throttleClick = new EventEmitter();
  private clicks = new Subject<any>();
  private subscription: Subscription;

  constructor() {}
  ngOnInit() {
    this.subscription = this.clicks.pipe(debounceTime(this.debounceTime)).subscribe(e => this.throttleClick.emit(e));
    // this.subscription = this.clicks.pipe(throttleTime(this.throttleTime)).subscribe(e => this.throttleClick.emit(e));
  }

  ngOnDestroy() {
    // 取消订阅
    this.subscription.unsubscribe();
  }

  // HostListener这个装饰器可以监听directive作用的dom元素的click事件，第二个参数$event告诉Angular传递点击事件到directive中去；
  @HostListener("click", ["$event"])
  clickEvent(event: MouseEvent) {
    // 防止事件继续向parent component中传递
    event.preventDefault();
    event.stopPropagation();
    // 这里使用subject的.next来传递点击事件，然后使用rxjs的函数操作符throttleTime来处理延时事件，在指定事件内只处理第一次操作，调用emit传递点击事件的操作到parent中去继续处理；
    this.clicks.next(event);
    // console.log(1111111);
  }
}
