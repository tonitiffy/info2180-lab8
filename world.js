function pageLoad(){
    $("lookup").observe("click", pageAlert);
    
}

function pageAlert(){
    if ($("checkbox").checked === true){
        new Ajax.Request("https://info2180-lab8-tonitiffy.c9.io/world.php?all=true",
        {
            method: "GET",
            onSuccess: function showAll(ajax){
                //alert(ajax.responseText);
                $("result").innerHTML = ajax.responseText;
            }
        }
    );
    }
    else{
    var country = $("term").value;
    new Ajax.Request("https://info2180-lab8-tonitiffy.c9.io/world.php?lookup="+country,
        {
            method: "GET",
            onSuccess: function giveAlert(ajax){
                alert(ajax.responseText);
                $("result").innerHTML = ajax.responseText;
            }
        }
    );
    }
}

window.onload = pageLoad;

