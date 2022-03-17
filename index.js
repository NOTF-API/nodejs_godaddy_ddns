var axios=require("axios");

// user edit begin
const domain="" // your domain like "abc.com"
const name="" // your A record of your domain like "home"
const key="" // your api key
const secret=""// your secret key
// user edit end

const headers={
    Authorization:`sso-key ${key}:${secret}`
}



let currentDNSIP
let currentIP


console.log("[UTC Time:"+new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')+"]")
queryCurrentDnsIp()
.then((res)=>{
    currentDNSIP=res.data[0].data
    queryCurrentIp().then((res)=>{
        currentIP=res.data.ip
        console.log('old:'+currentDNSIP+' new:'+currentIP);
    })
    .then(()=>{
        if(currentDNSIP!==currentIP){
            setNewDNSIp(currentIP)
            .then(()=>{
                console.log('new ip changed');
            })
        }else{
            console.log('ip address unchanged');
        }
        console.log('--------------------------------------------');
    })
})


function queryCurrentDnsIp(){
    return axios({
        method:'get',
        url:`https://api.godaddy.com/v1/domains/${domain}/records/A/${name}`,
        headers,
    })
}

function queryCurrentIp(){
    return axios({
        method:'get',
        url:"http://ipinfo.io/json",
    })
}

function setNewDNSIp(newIP){
    const body=[{
        data:newIP,
        ttl:3600
    }]
    return axios({
        method:'put',
        headers,
        url:`https://api.godaddy.com/v1/domains/${domain}/records/A/${name}`,
        contentType:'application/x-www-form-urlencoded',
        data:body
    })  
}