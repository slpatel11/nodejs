var users=[{name:"user1", pass:"rachana"},{name:"user2", pass:"rushu"},{name:"user3", pass:"paris"}];
exports.checkUsers=function(user,pass)
{
for(var i=0;i<users.length;i++)
{
   if((user== users[i].name) && (pass==users[i].pass))
   {
   return true;
   }
 }
   return false;
   }