var modalContent = document.querySelector(".modal-content");

document.querySelectorAll(".cid-btns").forEach(function (button) {
  button.addEventListener("click", function () {
    var count = parseInt(this.dataset.count);
    document.querySelector("#q" + count).style.display = "none";
    document.querySelector("#q" + (count + 1)).style.display = "block";

    if (count === 3) {
      ____ShowPreloadingInfoNextLine();

      setTimeout(function () {
        document.querySelector("#q" + (count + 1)).style.display = "none";
        document.querySelector("#q" + (count + 2)).style.display = "block";
      }, 4000);
    }
  });
});

function displayModal() {
  var modal = document.getElementById("static-modal");
  var modal = document.getElementById("static-modal");

  modal.style.display = "block";

  // Add 'modal-open' class to body to prevent scrolling
  document.body.classList.add("modal-open");
}

function hideModal() {
  var modal = document.getElementById("static-modal");

  modalContent.classList.remove("slideDown");
  modalContent.classList.add("slideUp");

  setTimeout(() => {
    modal.style.display = "none";
  }, 500);

  // Remove 'modal-open' class from body to enable scrolling
  document.body.classList.remove("modal-open");
}

function displayModalVide() {
  var modal = document.getElementById("modal-vide-static");
  var modalVideUp = document.getElementById("modal-vide-up");

  modalVideUp.classList.remove("slideUp");
  modalVideUp.classList.add("slideDown");
  modal.style.display = "block";

  // Add 'modal-open' class to body to prevent scrolling
  document.body.classList.add("modal-open");
}

function hideModalVide() {
  var modal = document.getElementById("modal-vide-static");
  var modalVideUp = document.getElementById("modal-vide-up");

  modalVideUp.classList.remove("slideDown");
  modalVideUp.classList.add("slideUp");

  setTimeout(() => {
    modal.style.display = "none";
  }, 500);

  // Remove 'modal-open' class from body to enable scrolling
  document.body.classList.remove("modal-open");
}

function displayModalGagné() {
  var modal = document.getElementById("modal-gagné-static");
  var modalGagnéUp = document.getElementById("modal-gagné-up");

  modalGagnéUp.classList.remove("slideUp");
  modalGagnéUp.classList.add("slideDown");
  modal.style.display = "block";

  // Add 'modal-open' class to body to prevent scrolling
  document.body.classList.add("modal-open");
}

function hideModalGagné() {
  var modal = document.getElementById("modal-gagné-static");
  var modalGagnéUp = document.getElementById("modal-gagné-up");

  modalGagnéUp.classList.remove("slideDown");
  modalGagnéUp.classList.add("slideUp");

  setTimeout(() => {
    modal.style.display = "none";
  }, 500);

  // Remove 'modal-open' class from body to enable scrolling
  document.body.classList.remove("modal-open");

  location.reload();
}

document.getElementById("dialog-button").addEventListener("click", function () {
  hideModal();
});

document
  .getElementById("dialog-vide-button")
  .addEventListener("click", function () {
    hideModalVide();
  });

document
  .getElementById("dialog-gagné-button")
  .addEventListener("click", function () {
    hideModalGagné();
  });

function ____StartTheQuiz() {
  var initButtonHolder = document.querySelector("#init_button_holder");
  initButtonHolder.style.transition = "500ms";
  initButtonHolder.style.opacity = "0";
  setTimeout(function () {
    console.log("Finished!");
    ___showNextAnswer();
  }, 500);
  document.querySelectorAll(".intro-text").forEach(function (element) {
    element.style.transition = "500ms";
    element.style.opacity = "0";
  });
}

function ___showNextAnswer() {
  window.__ca = document.querySelector(".card-answer.d-none");
  __ca.classList.remove("d-none");
  setTimeout(function () {
    __ca.classList.add("zvisible");
  }, 50);
}

var _answers = [];
function ____asnwerTheQuestion(quiestionID, answer) {
  _answers.push({
    quiestionID: quiestionID,
    answer: answer,
  });
  document.querySelector(".card-answer.zvisible").classList.remove("zvisible");
  setTimeout(function () {
    var cardAnswer = document.querySelector(".card-answer.d-none");
    if (cardAnswer === null) {
      document.querySelector("#quiz").style.transition = "500ms";
      document.querySelector("#quiz").style.opacity = "0";
      setTimeout(function () {
        ____showThePreloader();
      }, 500);
    } else {
      ___showNextAnswer();
    }
  }, 500);
}

function ____showThePreloader() {
  var preloader = document.querySelector("#preloader");
  preloader.classList.remove("d-none");
  setTimeout(function () {
    preloader.classList.add("zvisible");
  }, 10);

  setTimeout(function () {
    ____ShowPreloadingInfoNextLine();
  }, 2 * 1000);
}

function ____ShowPreloadingInfoNextLine() {
  var preloadInfo = document.querySelector(".preload-info.d-none");
  if (preloadInfo === null) {
    setTimeout(function () {
      _____ShowTheGifts();
    }, 500);
  } else {
    preloadInfo.classList.remove("d-none");
    setTimeout(function () {
      preloadInfo.classList.add("zvisible");
    }, 10);
    setTimeout(function () {
      ____ShowPreloadingInfoNextLine();
    }, 1 * 1000);
  }
}

function _____ShowTheGifts() {
  displayModal();

  var preloader = document.querySelector("#preloader");
  preloader.style.transition = "500ms";
  preloader.style.opacity = "0";
  setTimeout(function () {
    var theGifts = document.querySelector("#the_gifts");
    theGifts.classList.remove("d-none");
    setTimeout(function () {
      theGifts.classList.add("zvisible");
    }, 10);
  }, 500);
  setTimeout(function () {
    document
      .querySelector('button[data-bs-target="#modal_after_preload_stops"]')
      .click();
  }, 1000);
}

document.querySelectorAll(".gift-box").forEach(function (giftBox) {
  giftBox.addEventListener("click", function () {
    if (
      document.querySelectorAll(".gift-box.clicked.show_the_phone").length >= 1
    ) {
      return;
    }
    this.classList.add("clicked");
    var showThePhone = Math.random() > 0.5;
    if (
      document.querySelectorAll(".gift-box.clicked").length > 1 &&
      (showThePhone ||
        document.querySelectorAll(".gift-box.clicked").length > 3)
    ) {
      this.classList.add("show_the_phone");

      setTimeout(function () {
        var theGiftFinal = document.querySelector(".the_gift_final");
        theGiftFinal.style.display = "block";
        theGiftFinal.classList.add("do_visible");
        setTimeout(function () {
          document
            .querySelector(
              'button[data-bs-target="#modal_after_click_final_gift"]'
            )
            .click();
        }, 1 * 2000);
      }, 1 * 3000);

      setTimeout(() => {
        displayModalGagné();
      }, 1 * 4000);
    } else {
      displayModalVide();

      document
        .querySelector('button[data-bs-target="#modal_after_click_first_gift"]')
        .click();
      setTimeout(function () {
        var circleLoader = document.querySelector(
          "#modal_after_click_first_gift .circle-loader"
        );
        circleLoader.classList.add("load-complete");
        var checkmark = document.querySelector(
          "#modal_after_click_first_gift .checkmark"
        );
        checkmark.style.display = "block";
        checkmark.classList.add("draw");
      }, 1 * 500);
    }
  });
});
