(function(){
    const me = document.querySelector('script[data-id="ks-badge"]');
    const url = me.getAttribute('data-url');
    const title = me.getAttribute('data-title');
    const brand = me.getAttribute('data-brand');
    const brandImage = me.getAttribute('data-brand_image');
    const currentUrl = window.location.href;

    const preview = document.getElementById('badge-embed-preview');
    const container = preview ?? document.body;

    container.innerHTML += '<div><!-- START OF BADGE -->\n' +
        '    <link rel="stylesheet" href="https://app.viralrunway.com/css/ks-badge.css">\n' +
        '    <div class="ks-badge">\n' +
        '      <div class="ks-badge-wrapper">\n' +
        '        <button class="ks-badge-close-btn" onclick="this.closest(\'.ks-badge\').style.display = \'none\'">\n' +
        '          <svg x="0px" y="0px" width="22.1px" height="22.1px" viewBox="0 0 22.1 22.1"><circle class="st0" cx="11.1" cy="11.1" r="10.1"></circle><line class="st1" x1="15.3" y1="6.8" x2="6.8" y2="15.3"></line><line class="st1" x1="15.3" y1="15.3" x2="6.8" y2="6.8"></line></svg>\n' +
        '        </button>\n' +
        '        <div class="ks-badge-top">\n' +
        '          <div class="ks-badge-title">\n' + title +
        '          </div>\n' +
        '        </div>\n' +
        '        <div class="ks-badge-bottom">\n' +
        '          <a class="ks-badge-link" target="_blank" href="'+ url +'?utm_medium=badge&amp;utm_source='+ currentUrl +'">\n' +
        '            Enter Giveaway\n' +
        '            <svg x="0px" y="0px" width="6.9px" height="13.9px" viewBox="0 0 6.9 13.9"><path class="st0" d="M0.8,0.8L5.9,7l-5.2,6.2"></path></svg>\n' +
        '          </a>\n' +
        '        </div>\n' +
        '        <a href="https://app.viralrunway.com?utm_medium=badge&amp;utm_source='+ currentUrl +'e" target="_blank" style="color:#ffffff">\n' +
        '          <div class="ks-badge-kslogo-wrapper">\n' +
        '            <img src="'+ brandImage +'" height="16" width="16" alt=""> '+brand+'\n' +
        '          </div>\n' +
        '        </a>\n' +
        '      </div>\n' +
        '    </div>\n' +
        '    <!-- END OF BADGE -->\n' +
        '</div>';
})();
