dateFns = require('date-fns');
//const format = require('date-fns/format')
const xlsx = require('xlsx');
const fs = require('fs');

fs.readFile('product.json', (err,data) => {
    if(err) {
        console.error(err);
        return;
    }
    let obj = JSON.parse(data.toString('utf8'));
   
    obj.forEach(element => {
        delete element.dateUpdated;
        element.updated = dateFns.format(new Date(2019,6,1), 'mm/dd/yyyy');
    });
    
    console.log(obj);
    
    const ws = xlsx.utils.json_to_sheet(obj);
    ws['!cols'] = [{ width: 10}, {width: 30}, {width: 15}, {width: 15}, {width: 20}];
    const wb = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Products');

    const buf = xlsx.write(wb, {type: 'buffer', bookType: 'xlsx'});
    console.log(buf);

    const xlsxBuffer = Buffer.from(buf, 'base64');
    fs.writeFile('products.xlsx', xlsxBuffer, err => {
        console.log('Write success');
    });
})
 