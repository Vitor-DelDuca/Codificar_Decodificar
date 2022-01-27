var divChave = document.querySelector(".divChave");
var selecaoCod = document.addEventListener("click", function () {
  var codigo = document.getElementById("codigo").value;
  if (codigo == "cesar") {
    divChave.style.display = "block";
  } else {
    divChave.style.display = "none";
  }
});