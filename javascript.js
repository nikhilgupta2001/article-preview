function myFunction(){
    var mypop=document.getElementById("mypopup")
    var x=screen.width;
    if(x<=375)
    {
        var hon=document.querySelector(".card .card-body .c .no")
  hon.style.display="none";
    }
    if(mypop.style.display=="none")
    {
        mypop.style.display="block";
    }
    else
    {
        mypop.style.display="none";
    }
}
