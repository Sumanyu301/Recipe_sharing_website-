function getId(id) {
  let modal = document.getElementById("myModal" + id);

  // Get the button that opens the modal

  // Get the <span> element that closes the modal
  let span = document.querySelector(".close");

  // When the user clicks the button, open the modal
  modal.style.display = "block";

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
