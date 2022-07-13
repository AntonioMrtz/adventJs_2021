const CHRISTMAS_DAY=25
const CHRISTMAS_MONTH=11
const CHRISTMAS_YEAR=2021

var actual_date=new Date("Dec 25, 2021")

function daysToXmas(date) {
    
    let date_diff=(actual_date.getTime()-date.getTime())/1000 // time ms -> s

    if(date_diff==0){

        return 0;

    }

    return Math.ceil((date_diff/86400))
    
}


const date1 = new Date('Dec 1, 2021')
console.log(daysToXmas(date1)) // 24
const date2 = new Date('Dec 24, 2021 00:00:01')
console.log(daysToXmas(date2)) // 1
const date3 = new Date('Dec 24, 2021 23:59:59')
console.log(daysToXmas(date3)) // 1
const date4 = new Date("December 20, 2021 03:24:00")
console.log(daysToXmas(date4)) // 5