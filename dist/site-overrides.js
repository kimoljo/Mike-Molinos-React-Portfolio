/* Portfolio Preservation + Light Refresh v2
   Keeps the recovered React bundle untouched.
*/
(function () {
  "use strict";

  var aboutParagraphOne =
    "This selected portfolio presents digital design and multimedia work created through Mountainland Technical College’s Digital Design program and related creative projects, spanning graphic design, motion graphics, video, web, and interactive media.";

  var aboutParagraphTwo =
    "This work combines visual communication, storytelling, and technical production across print, digital, motion, and web formats. The portfolio is preserved as a record of that training and continues to inform current creative work in visual storytelling and multimedia production.";

  function removeBlogNavigation() {
    var blogLinks = document.querySelectorAll('a[href="/blog"]');
    blogLinks.forEach(function (link) {
      var wrapper = link.closest(".nav-link-wrapper");
      var target = wrapper || link;
      if (target.style.display !== "none") {
        target.style.display = "none";
      }
    });
  }

  function refreshAboutPage() {
    if (window.location.pathname !== "/about-me") return;

    var page = document.querySelector(".content-page-wrapper");
    if (!page) return;

    var leftColumn = page.querySelector(".left-column");
    if (leftColumn) {
      var newImage = 'url("/static/assets/images/bio/visual-archive-about.jpg")';
      if (leftColumn.style.getPropertyValue("background-image") !== newImage) {
        leftColumn.style.setProperty("background-image", newImage, "important");
        leftColumn.style.setProperty("background-size", "cover", "important");
        leftColumn.style.setProperty("background-position", "center", "important");
        leftColumn.style.setProperty("background-repeat", "no-repeat", "important");
      }
    }

    var rightColumn = page.querySelector(".right-column");
    if (!rightColumn) return;

    var paragraphs = rightColumn.querySelectorAll("p");
    if (paragraphs.length >= 2) {
      if (paragraphs[0].textContent !== aboutParagraphOne) {
        paragraphs[0].textContent = aboutParagraphOne;
      }
      if (paragraphs[1].textContent !== aboutParagraphTwo) {
        paragraphs[1].textContent = aboutParagraphTwo;
      }

      paragraphs[0].classList.add("portfolio-about-copy");
      paragraphs[1].classList.add("portfolio-about-copy");
    }

    if (!rightColumn.querySelector(".portfolio-credential")) {
      var credential = document.createElement("p");
      credential.className = "portfolio-credential portfolio-about-copy";
      credential.textContent = "Digital Design — Mountainland Technical College, 2021";
      rightColumn.appendChild(credential);
    }
  }

  function refreshContactPage() {
    if (window.location.pathname !== "/contact") return;

    var rightColumn = document.querySelector(".content-page-wrapper .right-column");
    if (!rightColumn || rightColumn.querySelector(".portfolio-contact-refresh")) return;

    rightColumn.innerHTML =
      '<div class="portfolio-contact-refresh">' +
        '<h2>Get in Touch</h2>' +
        '<p>Thanks for viewing the portfolio. For creative projects, multimedia work, or professional collaboration, please get in touch.</p>' +
        '<div class="portfolio-contact-item">' +
          '<span class="contact-label">Email</span>' +
          '<a href="mailto:msm.com@gmail.com">msm.com@gmail.com</a>' +
        '</div>' +
      '</div>';
  }

  function redirectOldBlogRoute() {
    if (window.location.pathname === "/blog") {
      window.location.replace("/");
      return true;
    }
    return false;
  }

  function applyRefresh() {
    removeBlogNavigation();
    refreshAboutPage();
    refreshContactPage();
  }

  if (redirectOldBlogRoute()) return;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyRefresh);
  } else {
    applyRefresh();
  }

  var observer = new MutationObserver(function () {
    applyRefresh();
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });
})();
