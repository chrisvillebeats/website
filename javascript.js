<script>
  document.addEventListener("DOMContentLoaded", function () {
    const sidebarToggle = document.getElementById("sidebarToggle");
    const genreSidebar = document.getElementById("genreSidebar");
    const genreLinks = document.querySelectorAll("#genreLinks a");
    const genreTitle = document.querySelector("#genreDetails h2");
    const genreDesc = document.querySelector("#genreDetails p");

    const genreContent = {
      dancehall: {
        title: "Dancehall Beats",
        desc: "High-quality Dancehall beats ready to elevate your music with authentic Jamaican vibes. Perfect for artists seeking that signature dancehall sound."
      },
      // other genres ...
    };

    if (sidebarToggle && genreSidebar) {
      sidebarToggle.addEventListener("click", () => {
        genreSidebar.classList.toggle("active");
      });

      genreLinks.forEach(link => {
        link.addEventListener("click", e => {
          e.preventDefault();
          const genre = link.getAttribute("data-genre");
          if (genreContent[genre]) {
            genreTitle.textContent = genreContent[genre].title;
            genreDesc.textContent = genreContent[genre].desc;
          }
        });
      });
    }
  });
</script>
