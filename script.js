// Select all accordion headers
const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling; // Get the corresponding content
    const icon = header.querySelector(".icon i"); // Get the icon inside the header

    // Check if the content is already open
    const isOpen = content.classList.contains("open");

    // Close all accordion items
    document.querySelectorAll(".accordion-content").forEach((item) => {
      item.classList.remove("open"); // Remove open class from all
      item.previousElementSibling.classList.remove("active"); // Remove active class from headers
      item.previousElementSibling
        .querySelector(".icon i")
        .classList.remove("fa-times"); // Change to plus icon
      item.previousElementSibling
        .querySelector(".icon i")
        .classList.add("fa-plus"); // Add plus icon back
    });

    // If the clicked item was not open, open it
    if (!isOpen) {
      content.classList.add("open"); // Open the clicked content
      header.classList.add("active"); // Mark this header as active
      icon.classList.remove("fa-plus"); // Remove plus icon
      icon.classList.add("fa-times"); // Add times icon (cross)
    }
  });
});
