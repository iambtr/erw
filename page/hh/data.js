const fs = require('fs')
const path = require('path')

let data = fs.readFileSync(path.join(__dirname, '1.txt'), 'utf8')
data = data.replace(/<input.*?>/ig, '')
data = JSON.parse(data).data
let dataArray = data.filter(item=> item.v_status == '完成').map(item => {
    let a = {}
    a.m3u8 = item.source_link_m3u8
    a.img = item.screenshot
    return a 
})
let newData=JSON.stringify(dataArray)
fs.writeFileSync(path.join(__dirname, '2.json'), newData, 'utf8')

