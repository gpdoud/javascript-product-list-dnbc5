
function display() {
    var tbodyCtrl = document.getElementById("tbody");
    tbodyCtrl.innerHTML = ""; // clear the table 
    for(var product of products) {
        var row = "<tr>";
        row += "<td class='center'>" + product.id + "</td>";
        row += "<td>" + product.code + "</td>";
        row += "<td>" + product.name + "</td>";
        row += "<td class='right'>" + (product.price == 0 ? "Free" : product.price) + "</td>";
        row += "<td>" + product.vendor.name + "</td>";
        row += "</tr>";
        tbodyCtrl.innerHTML += row;
    }

}

function loaded() {
    display();
}