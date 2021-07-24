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
        setTimeout(function() {document.getElementById("principal").focus();}, 0);
    }
    else
    {
        document.getElementById("result").textContent="If you deposit "+principal+",\r\nat an interest rate of "+rate+"%\r\nYou will receive an amount of "+interest+",\r\nin the year "+year+"\r\n";
    }
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").textContent=rateval+"%";
}
