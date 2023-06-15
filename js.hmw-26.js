/*ღილაკზე დაჭერით input-ში შეტანილი სახელები უნდა 
ჩაიწეროს მასივში და გამოიტანოთ ეკრანზე. მასივში ჩაწერის
 შემდგომ input უნდა სუფთავდებოდეს */

 var masivi = [];

 function addElemet(){
    var x = document.getElementById("input1");
    masivi.push(x.value);
    document.getElementById("names").innerHTML = masivi;

    x.value = "";

    return false;
 }
 