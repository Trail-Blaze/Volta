// Set delay on script as we know people still use OttoMan on potato PCs * cough * * cough *
let newHeight;
// SelectLogin, SelectName (entryName), SelectLocation
setTimeout(() => {
  // Commit #134 - Add support to more entries
  const edit = document.querySelectorAll('[id^="edit_"]');
  const dropdown = document.querySelectorAll('[id^="dropdown_"]');
  const dropdown_c = document.querySelectorAll('[id^="dcont_"]');
  const main = document.getElementsByTagName("main")[0];

  edit.forEach((e, i) => {
    document.getElementById(e.id).addEventListener("click", () => {
      // If hidden...
      if (dropdown[i].classList.contains("hidden")) {
        // Wait 100ms...
        setTimeout(() => {
          // Make dropdown visible
          dropdown[i].classList.remove("hidden");
        }, 100);
        // Stretch UI pane to fit dropdown...
        dropdown_c[i].style.height = "200px";
        // Stretch Main Container to fit entry...
        if (main.style.height != newHeight) {
          main.style.height =
            (
              parseFloat(
                main.style.height.slice(0, main.style.height.length - 2)
              ) + 45
            ).toString() + "vh";
          newHeight = main.style.height;
        }
        // Scroll till visible
        main.scroll({
          // Current-Y scroll position + 180px
          top: document.documentElement.scrollTop + 180,
          left: 0,
          behavior: "smooth",
        });
        // Exit
        return;
      }
      // Otherwise hide dropdown
      dropdown[i].classList.add("hidden");
      // ...and reset UI pane height to default
      dropdown_c[i].style.height = "1px";
    });
  });
}, 5000);

