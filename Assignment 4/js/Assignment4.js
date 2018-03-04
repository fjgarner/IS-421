function MenuChoice()
{
    if (document.getElementById("Menu").value == "Display Section 1")
    {
        document.getElementById("section1").style.visibility = "visible";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section2").style.display = "none";
        document.getElementById("section1").style.display = "block";
    }
    else if (document.getElementById("Menu").value == "Display Section 2")
    {
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "visible";
        document.getElementById("section1").style.display = "none";
        document.getElementById("section2").style.display = "block";
    }
    else
    {
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "hidden";
    }
}