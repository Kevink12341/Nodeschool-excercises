const fs = require('fs');
const path = require('path');

module.exports = function get_files(files, filter, callback) {
    fs.readdir(files,(err,data) => {
        if (err) {
            return callback(err, null)};
        let list = []
        for (i=0 ; i<data.length; i++) {
            if (path.extname(data[i]) == ("." + filter)) { 
                list.push(data[i])
            };
        }; 
        callback(null,list); 
    });
};

