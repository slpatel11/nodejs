var http=require("http");
var qstring=require("querystring");
var url=require("url");
var fs=require("fs");
var m=require("./validateUser");

function process_request(req,res)
{
var p=url.parse(req.url);

switch (p.pathname)
{
	case "/":
	fs.readFile("./login.html",function(err,data)
	{
		if(err)
		{
			console.log("error");
		}
		else{
			res.end(data);
		}
});
break;
   case "/login":
   var d=qstring.parse(p.query);
   console.log(d);
   
   if(d.pass.length >= 6)
   {
	   console.log(d.pass);
	   if(m.checkUsers(d.name,d.pass))
	   {
		   res.end("<h1><i><b>Login Successful</b></i></h1>");
	   }
	   else{
		   res.end("<h1><i><b>Login Failure</b></i></h1>");
	   }
   }
   else{
	   res.end("<h1><i><b>password  must be minimum 6 characters!!!</b></i></h1>");
   }
   break;
}
}

var srv=http.createServer(process_request);
srv.listen(8181);
console.log("server started...");
	   
	   
	   
	   
	   
	   
	   
	   
   

