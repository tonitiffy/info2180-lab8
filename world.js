function pageLoad(){
    $("lookup").observe("click", pageAlert);
    
}

function pageAlert(){
    if ($("checkbox").checked === true){
        new Ajax.Request("world.php?all=true",
        {
            method: "GET",
            onSuccess: function showAll(ajax){
                $("result").innerHTML = ajax.responseText;
            }
        }
    );
    }
    else{
    var country = $("term").value;
    new Ajax.Request("world.php?lookup="+country,
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

