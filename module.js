var os = require('os');

var toMB = function(f){
    return(Math.round((f/1024/1024)*100)/100);
    }
    console.log('host: ' + os.hostname());
    console.log('15min. load average: ' + os.loadavg()[2]);
    console.log(toMB(os.freemem()) + 'of' + toMB(os.totalmem())+'Mbfree');