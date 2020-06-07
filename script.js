const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn,index) => {
  btn.addEventListener("click", ()=> {
    var listItems = document.querySelectorAll(".list-items")[0];
    var item = document.createElement("div");
    item.className = (listItems.children.length % 2 === 0) ? 'odd' : 'even';
    item.innerHTML = 'item ' + String(listItems.children.length + 1);
    listItems.appendChild(item);
  });
});
