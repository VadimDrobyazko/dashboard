"use strict";

const activeSvg = document.querySelectorAll(".active path");
const dashboardLink = document.querySelectorAll(".nav__item");

activeSvg.forEach((path) => {
  if (path.hasAttribute("fill")) {
    path.setAttribute("fill", "#FFF");
  }
  if (path.hasAttribute("stroke")) {
    path.setAttribute("stroke", "#FFF");
  }
});

const tableRows = document.querySelectorAll("table tbody tr");

tableRows.forEach((row) => {
  const lastCell = row.lastElementChild;

  if (lastCell.textContent.trim() === "Inactive") {
    lastCell.style.display = "flex";
    lastCell.style.padding = "6px 12px";
    lastCell.style.color = "#df0404";
    lastCell.style.background = "#ffc5c5";
    lastCell.style.border = "1px #df0404 solid";
    lastCell.style.borderRadius = "4px";
    lastCell.style.textAlign = "center";
    lastCell.style.margin = "21px auto";
    lastCell.style.width = "80px";
  } else if (lastCell.textContent.trim() === "Active") {
    lastCell.style.display = "flex";
    lastCell.style.padding = "6px 14px";
    lastCell.style.color = "#008767";
    lastCell.style.background = "rgba(22, 192, 152, 0.38)";
    lastCell.style.border = "1px #008767 solid";
    lastCell.style.borderRadius = "4px";
    lastCell.style.textAlign = "center";
    lastCell.style.width = "80px";
    lastCell.style.margin = "21px auto";
  }
});
