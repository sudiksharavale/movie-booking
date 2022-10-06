function preferedBrowser()
{
if(mySelect.value==1)
{
window.open('cash.html', '_blank');
}
if(mySelect.value==2)
{
window.open('card.html', '_blank');
}
if(mySelect.value==3)
{
window.open('bhimupi.html', '_blank');
}
}
function vali()
{
var n=document.forms["book"]["per"];
if(n.value=="")
{
alert("Please enter the number of persons");
n.focus();
return false;
}
if(phone.value == "")
{
window.alert("Please enter your telephone number.");
phone.focus();
return false;
}
if(email.value == "")
{
window.alert("Please enter a valid e-mail address.");
email.focus();
return false;
}
if(email.value.indexOf("@", 0) < 0)
{
window.alert("Please enter a valid e-mail address.");
email.focus();
return false;
}
if (email.value.indexOf(".", 0) < 0)
{
window.alert("Please enter a valid e-mail address.");
email.focus();
return false;
}
if(phone.value == "")
{
window.alert("Please enter your telephone number.");
phone.focus();
return false;
}
if(cou.value=="abc")
{
window.alert("You get a 50% off")
}
document.getElementById("mySelect").disabled = false;
return true;
}
