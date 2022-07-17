document.addEventListener("DOMContentLoaded", function(){
    const container = document.getElementById("review-embed-popup");
    const link = container.getAttribute("data-url");
    const iframe = document.createElement("iframe");
    container.style.minHeight="207px";
    iframe.setAttribute("src", link);

    let htmlBuild = "";
    if(config.position === "" || config.position === "center"){
        htmlBuild += `<div id="bgOverlay" class="backgroundOverlay" style="opacity: 0;"></div>`;
        iframe.style.height="550px";
    }

    htmlBuild += `<div 
                        id="delayedPopup" 
                        class="delayedPopupWindow ${config.position}" 
                        style="width: 100%; opacity: 0;"
                   >
                     <a href="#" id="btnClose" title="Click here to close this deal box.">[ X ]</a>
                   </div>`;

    container.appendChild(parseHtml(htmlBuild));

    const popContainer = document.getElementById("delayedPopup");
    popContainer.appendChild(iframe);

    let opacityOverlay = 0;
    const intervalIDOverLay = 0;
    const bgOverlay = document.getElementById("bgOverlay");

    setTimeout(function () {
        setInterval(function () {
            if (opacityOverlay < 1) {
                opacityOverlay = opacityOverlay + 0.1;
                bgOverlay.style.opacity = opacityOverlay;
            } else {
                clearInterval(intervalIDOverLay);
            }
        },50);

        let opacityPopUp = 0;
        const intervalID = 0;
        const delayedPopup = document.getElementById("delayedPopup");

        setInterval(function () {

            if (opacityPopUp < 1) {
                opacityPopUp = opacityPopUp + 0.1;
                delayedPopup.style.opacity = opacityPopUp;
            } else {
                clearInterval(intervalID);
            }
        }, 50);

    }, config.delay_time);


    const btnClose = document.getElementById("btnClose");

    btnClose.addEventListener("click", function (event) {
        HideDialog();
        event.preventDefault();
    });


    function HideDialog()
    {
        let opacityOverlay = 1;
        const intervalIDOverLay = 540;
        const bgOverlay = document.getElementById("bgOverlay");

        setInterval(function () {
            if (opacityOverlay > 0) {
                opacityOverlay = opacityOverlay - 0.1;
                bgOverlay.style.opacity = opacityOverlay;
            } else {
                bgOverlay.style.display = "none";
                clearInterval(intervalIDOverLay);
            }
        }, 40);

        let opacityPopup = 1;
        const intervalIDPopup = 660;
        const delayedPopup = document.getElementById("delayedPopup");

        setInterval(function () {

            if (opacityPopup > 0) {
                opacityPopup = opacityPopup - 0.1;
                delayedPopup.style.opacity = opacityPopup;
            } else {
                clearInterval(intervalIDPopup);
            }
        }, 30);

    }

}, false);

// Parse String into Html Object
const parseHtml = function (str) {
    let parser = new DOMParser();
    let doc = parser.parseFromString(str, "text/html");
    return doc.body;
};
