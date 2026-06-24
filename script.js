document.querySelectorAll(".tab").forEach(function (btn) {
  btn.addEventListener("click", function () {
    var name = btn.dataset.tab;
    document.querySelectorAll(".tab").forEach(function (t) {
      t.classList.toggle("active", t === btn);
    });
    document.querySelectorAll(".panel").forEach(function (p) {
      p.classList.toggle("active", p.id === name);
    });
  });
});
