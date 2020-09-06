function validate()
{
    var u1= document.forms[0].user.value;
    var p1= document.forms[0].pass.value;
    var v = localStorage.getItem(u1);
    if( v == p1 )
    {
        alert("sigin successfull");
        window.location='./index.html';
    }
    else
    {
        alert("check ut details");
    }
}

