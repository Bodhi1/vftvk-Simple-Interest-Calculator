function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = (principal * years * rate) /100;
    var year = new Date().getFullYear()+parseInt(years);

    if (principal <= 0)
    {
        alert("Enter a positive number");
    }
    else
    {
        document.getElementById("result").textContent="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>";
    }
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").textContent=rateval+"%";
}
