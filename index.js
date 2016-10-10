var mysql = require('mysql');

exports.handler = function(event, context) {

    if (event === null || event.text === null) {
        context.succeed('You sent nothing!');
    }
    else 
    {
        if(event.text.toLowerCase().indexOf('david') !== -1){
            context.succeed(' hello ' + event.text);
        }  
        if(event.text.toLowerCase().indexOf('db') !== -1){
            
           
           var connection =  mysql.createConnection({
          host   : 'futuredb.cbhsjvpjrptr.us-west-2.rds.amazonaws.com',
          user   : 'marty',
          password : 'martymarty',
          database : 'Member'
        });
           
            
            connection.connect(function(err){
                if(err){
                    context.fail('Database connection failed' + err);
                }    
                else{
                connection.query("SELECT business_id FROM members WHERE member_id='MMXAM'",function(err,rows,fields){
                        if(err)
                        {
                           context.fail('Cannot read from database!' + err); 
                        }
                        else
                        {
                            context.succeed(rows[0]);
                            connection.end();
                        }
                    });
                }
            });
        }  
        else
        {
           context.succeed('It seems you sent this: ' + event.text + ', right?');
        }
    }
};
