function pageLoad(){
    $("lookup").observe("click", pageAlert);
    new Ajax.Request("world.php?all=true",
        {
            method: "get",
            onSuccess: function giveAt(ajax){
                //alert(ajax.responseXML);
                $("result").innerHtml = ajax.responseText;
            }
        }
    );
}

function pageAlert(){
    var str = $("term").value;
    new Ajax.Request("world.php?lookup="+str,
        {
            method: "GET",
            onSuccess: function giveAlert(ajax){
                //alert(ajax.responseText);
                $("result").innerHTML = ajax.responseText;
            }
        }
    );
}

window.onload = pageLoad;

