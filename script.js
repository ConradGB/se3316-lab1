window.onload = function () {

    var list = document.getElementById("fruits");

    var entries = ["Guava", "Mango", "Pineapple", "Passionfruit", "Pomegranate"];
    var oHold = [];

    for (i = 0; i < entries.length; i++) {
        var entry = document.createElement("li");
        oHold.push(entry);
        entry.appendChild(document.createTextNode(entries[i]));
        list.appendChild(entry);
    }

    (function () {
        var basket = document.getElementById("basket");
        var textBox = document.getElementById("newfruit");

        textBox.onchange = function () {
            for (j = 0; j < entries.length; j++) {
                if (textBox.value == entries[j])
                    basket.appendChild(oHold[j]);
            }
        }
    })();
}