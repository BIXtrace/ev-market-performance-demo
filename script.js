// Keep the fallback available for browsers or networks where Tableau cannot load.
window.addEventListener("load", () => {
  const viz = document.getElementById("ev-dashboard");
  const fallback = document.getElementById("embed-fallback");
  if (!viz || !fallback) return;
  let loaded = false;
  viz.addEventListener("firstinteractive", () => { loaded = true; }, { once: true });
  // If the embed component fails to initialize, expose the direct Tableau link.
  window.setTimeout(() => {
    if (!loaded && !customElements.get("tableau-viz")) fallback.classList.add("visible");
  }, 7000);
});
