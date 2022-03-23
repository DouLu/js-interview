/**
 *author:doulu
 *create time:2018-08-13
 *description:模拟日历组件
 * date = new Date(year,month-1,date)【月份要-1】
 * 日期越界自动进位或者退位
 * getFullYear()/getMonth()/getDate()
 * getDay()获取星期几
 * 当月第一天new Date(year,month-1,1)
 * 当月最后一天new Date(year,month,0)
 */
(function () {
    let datepicker = {};
    datepicker.getMonthDate = function (year,month) {
      let ret = [];
      if(!year || !month){
          let today = new Date();
          year = today.getFullYear();
          month = today.getMonth() + 1;
      }

      let firstDay = new Date(year,month-1,1);//当前月第一天
      let firstDayWeekDay = firstDay.getDay();//第一天是周几
      if (firstDayWeekDay === 0) firstDayWeekDay = 7;//修正周天

      let lastDayOfLastMonth = new Date(year, month-1, 0);//上一个月的最后一天
      let lastDateOfLastMonth = lastDayOfLastMonth.getDate();//最后一天的日期

      let preMonthDayCount = firstDayWeekDay - 1;//这个月第一周前面有几天是上个月的

      let lastDay = new Date(year,month,0);//当前月的最后一天
      let lastDate = lastDay.getDate();//最后一天日期

        //以最大范围六周为一页
      for(let i=1; i<= 7*6;i++){
          let date = i - preMonthDayCount;//实际1到42个格子里，日期范围，负值为上月
          let showDate = date; //待修正显示的实际日期
          let thisMonth = month; //真实月份

          //修正日期
          if(date <=0){
              //上一个月的数据
              thisMonth = month - 1;
              showDate = lastDateOfLastMonth + date;
          }else if( date >lastDate){
              //下一个月的数据
              thisMonth = month + 1;
              showDate = showDate - lastDate;
          }

          //修正月份
          if( thisMonth === 0) thisMonth = 12;
          if( thisMonth === 13) thisMonth = 1;

          ret.push({
              month: thisMonth,
              date: date,
              showDate: showDate
          });
      }
      // console.log(ret);

        let c = [];
        for(let i=0;i<6;i++){
            let row = [];
            for(let j=i;j<(7+i);j++){
                row.push(ret[i*6+j].showDate);
            }
            c.push(row);
        }
        console.log( c);
    };

    // window.datepicker = datepicker;
    global.datepicker = datepicker;
})();

// window.datepicker.getMonthDate();
global.datepicker.getMonthDate();