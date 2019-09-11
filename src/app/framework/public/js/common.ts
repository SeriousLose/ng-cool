export function formatTime(time: any, format?: any) {
  if (!time) return "";
  let _d = new Date(time);

  var year = _d.getFullYear(),
    month = _d.getMonth() + 1, // 月份是从0开始的
    day = _d.getDate(),
    hour = _d.getHours(),
    min = _d.getMinutes(),
    sec = _d.getSeconds();
  var preArr = Array.apply(null, Array(10)).map(function(elem: any, index: any) {
    return "0" + index;
  });

  if (format) {
    return format
      .replace(/YY/g, year)
      .replace(/MM/g, preArr[month] || month)
      .replace(/DD/g, preArr[day] || day)
      .replace(/hh/g, preArr[hour] || hour)
      .replace(/mm/g, preArr[min] || min)
      .replace(/ss/g, preArr[sec] || sec);
  }
  return `${year}-${preArr[month] || month}-${preArr[day] || day} ${preArr[hour] || hour}:${preArr[min] || min}`;
}

export function throttle(func: any, wait: any, mustRun: any) {
  let timeout:any;
  let startTime = new Date();
  return function() {
    const self = this;
    const args = arguments;
    const curTime = new Date();
    debugger
    clearTimeout(timeout);
    // 如果达到了规定的触发时间间隔，触发 handler
    if (curTime.getTime() - startTime.getTime() >= mustRun) {
      func.apply(self, args);
      startTime = curTime;
      // 没达到触发间隔，重新设定定时器
    } else {
      timeout = setTimeout(func, wait);
    }
  };
}
