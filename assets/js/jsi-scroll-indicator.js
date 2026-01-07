$(document).ready(function () {
  const indicator = $(".modernScrollIndicator");
  if (!indicator.length) return;

  // Hide initially with CSS
  indicator.css("opacity", 0);

  // Show after 2 seconds
  setTimeout(() => {
    indicator.animate({ opacity: 1 }, 600); // fade in smoothly
  }, 2000);

  // Keep fade on scroll behavior
  let lastScrollTop = 0;

  $(window).on("scroll", function () {
    const st = $(this).scrollTop();

    if (st > 50 && st > lastScrollTop) {
      indicator.stop(true, true).fadeOut(400);
    } else if (st <= 50 || st < lastScrollTop) {
      indicator.stop(true, true).fadeIn(400);
    }

    lastScrollTop = st;
  });
});
