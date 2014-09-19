$(document).ready(function ()
{
    var $list = $('#fruits');
    

    var entries = ["Guava", "Mango", "Pineapple", "Passionfruit", "Pomegranate"];


    for (i = 0; i < entries.length; i++) {
        $list.append("<li id=" + entries[i] + ">" + entries[i] + "</li>")
    }

    $("#newfruit").change(function () {

            for (j = 0; j < entries.length; j++) {
                if (entries[j] == $("#newfruit").val()) {

                    $(("#" + entries[j])).remove();

                    $('#basket').append("<li id=" + entries[j] + ">" + entries[j] + "</li>");
                }
            }
        
    });
    
    
    
});