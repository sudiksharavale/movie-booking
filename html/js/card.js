function exp()
{
var exMonth=document.getElementById("exMonth").value;
var exYear=document.getElementById("exYear").value;
var date = new Date ();
var month = date.getMonth();
var year = date.getFullYear();
if (year> exYear || (year === exYear && month >= exMonth))
{
alert("The expiry date is before today's date. Please select a valid expiry date");
return false;
}
}
var m;
function select1(n)
{
with(document.forms.form1)
{
if(n==1)
{
m=1;
}
if(n==2)
{
m=2;
}
if(n==3)
{
m=3;
}
}
}
function cardnumber(inputtxt)
{
if(m==1)
{
var cardno = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
/*  Starting with 4 length 13 or 16 digits (Visa) */
if(inputtxt.value.match(cardno))
{
return true;
}
else
{
alert("Not a valid Visa credit card number!");
}
}
if(m==2)
{
var cardno = /^(?:5[1-5][0-9]{14})$/;
/* Starting with 51 through 55, length 16 digits (Mastercard) */
if(inputtxt.value.match(cardno))
{
return true;
}
else
{
alert("Not a valid Mastercard number!");
}
}
if(m==3)
{
var cardno = /^(?:3[47][0-9]{13})$/;
/*Starting with 34 or 37, length 15 digits (American Express) */
if(inputtxt.value.match(cardno))
{
return true;
}
else
{
alert("Not a valid Amercican Express credit card number!");
}
}
}
