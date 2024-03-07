const setupSidebar = () => {
  let sideExpanded = false;

  const buttons = document.getElementsByClassName("invoice-details");
  const sideBar = document.getElementsByClassName("payment__details").item(0);
  const wrapper = document.getElementsByClassName("wrapper").item(0);
  const rightArrow = document.getElementById("rightArrowSideBar");
  const closeArrow = document.getElementById("closeSidebar");
  const text = document.getElementById("invoice-details-info");

  const toggleSideBar = (isExpanded) => {
    if (isExpanded) {
      wrapper.style.marginRight = "514px";
      sideBar.style.transform = "translateX(0px)";
      rightArrow.style.display = "none";
      closeArrow.style.display = "block";
      text.innerHTML = "Close invoice and payment details";
    } else {
      wrapper.style.marginRight = "0px";
      sideBar.style.transform = "translateX(514px)";
      rightArrow.style.display = "block";
      closeArrow.style.display = "none";
      text.innerHTML = "View invoice and payment details";
    }
  };

  Array.from(buttons).forEach((button) => {
    button.onclick = () => {
      sideExpanded = !sideExpanded;
      toggleSideBar(sideExpanded);
    };
  });
};

const setupDownloadAnimations = () => {
  const downloadInvoice = document
    .getElementsByClassName("main__block-bill-download")
    .item(0);
  const invoiceMessage = document
    .getElementsByClassName("invoice-message")
    .item(0);

  const toggleDownloadButton = (expanded) => {
    if (expanded) {
      invoiceMessage.style.maxWidth = "100px";
    } else {
      invoiceMessage.style.maxWidth = "0px";
    }
  };

  downloadInvoice.onmouseenter = () => {
    toggleDownloadButton(true);
  };

  downloadInvoice.onmouseleave = () => {
    toggleDownloadButton(false);
  };
};

const setupContactPowdur = () => {
  const contactPowdurMessage = document
    .getElementsByClassName("contact_powdur")
    .item(0);

  const powdurContactsBlock = document
    .getElementsByClassName("contact_details")
    .item(0);

  let powdurContactsVisible = false;

  const updateBlockVisibility = (visible) => {
    if (visible) {
      powdurContactsBlock.style.opacity = "1";
      powdurContactsBlock.style.pointerEvents = "all";
    } else {
      powdurContactsBlock.style.opacity = "0";
      powdurContactsBlock.style.pointerEvents = "none";
    }
  };

  contactPowdurMessage.onclick = () => {
    powdurContactsVisible = !powdurContactsVisible;
    updateBlockVisibility(powdurContactsVisible);
  };
};

window.onload = () => {
  setupDownloadAnimations();
  setupSidebar();
  setupContactPowdur();
};
