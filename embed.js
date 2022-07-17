document.addEventListener("DOMContentLoaded", function(){
    const container = document.getElementById("review-embedded");
    const link = container.getAttribute("data-url");
    const iframe = document.createElement("iframe");
    container.style.minHeight="207px";

    iframe.style.border="medium";
    iframe.style.width="600px";
    iframe.style.height="448px";
    iframe.style.overflow="hidden";
    iframe.setAttribute("src", link);
    container.appendChild(iframe);

}, false);
