# nodejs_godaddy_ddns
ddns script to update the dns record to your local ip address
# how to use
 
1. 
    make sure to use root
    ```bash
    cd /root
    git clone https://github.com/NOTF-API/nodejs_godaddy_ddns.git
    ```
2. 
    ```bash
    cd nodejs_godaddy_ddns
    ```
3. 
   ```bash
   npm install
   ```
4. 
   edit the "ddns.js",set your own infomation and save it

    ```javascript
    // user edit begin
    const domain="" // your domain like "abc.com"
    const name="" // your A record of your domain like "home"
    const key="" // your api key
    const secret=""// your secret key
    // user edit end
    ```

5. if you use it only once
   ```bash
   node index.js
   ```
   or
   ```bash
   ./ddns.sh
   ```

   else, use crontab to run this script 

   ```bash
    crontab -e
   ```
   press insert to enter the edit mode,then input
   ```bash
    */5 * * * * /root/nodejs_godaddy_ddns/ddns.sh
   ```
   : wq to save
   it means to run this script each five minutes

# where I can use it
+ Synology (use admin website to add a crontab task)
+ CentOS
+ openwrt
+ ......
