function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function setTheme(isDark) {
  document.body.classList.toggle("dark", isDark);

  const desktopSwitch = document.getElementById("themeSwitchDesktop");
  const mobileSwitch = document.getElementById("themeSwitchMobile");

  if (desktopSwitch) desktopSwitch.checked = isDark;
  if (mobileSwitch) mobileSwitch.checked = isDark;
}

function toggleThemeFromSwitch(isDark) {
  setTheme(isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

function getPreferredTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "dark") return true;
  if (saved === "light") return false;

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

document.addEventListener("DOMContentLoaded", () => {
  setTheme(getPreferredTheme());
});



function getPreferredTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "dark") return true;
  if (saved === "light") return false;

  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function toggleTheme() {
  const isDark = !document.body.classList.contains("dark");
  setTheme(isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

document.addEventListener("DOMContentLoaded", () => {
  setTheme(getPreferredTheme());
});
