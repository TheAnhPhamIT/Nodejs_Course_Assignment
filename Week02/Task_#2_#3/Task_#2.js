
//import {formatDistance, subDays } from 'date-fns';
const formatDistance = require('date-fns/formatDistance');
//const format = require('./format');
const vi = require ('date-fns/locale/vi');

const fs = require('fs');
const formatnumber = num => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

fs.readFile('product.json', (err,data) => {
    if(err) {
        console.error(err);
        return;
    }
    let obj = JSON.parse(data.toString('utf8'));
    

    let count = 0;
    obj.forEach(element =>{
        count++;
        element.dateUpdated = new Date();
    });
    //console.log(obj);
    
    obj.forEach(element => {
        //let fromNow = format(formatDistance(element.dateUpdated, new Date()),'dddd D');
        let fromNow = formatDistance(element.dateUpdated, new Date(),{locale:vi});
        console.log(`${element.name} - ${formatnumber(element.price)}VND - Cập nhật cách đây ${fromNow}`);
    });
    console.log(`number of product: ${count}`);

});


