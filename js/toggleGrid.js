<script>
(function(global){
  'use strict';
  var doc = global.document;
  var body = doc.querySelector('body');
  doc.addEventListener('keydown', function(e) {
    if (e.ctrlKey) { body.classList.toggle('overlay'); }
    if (e.keyCode === 71 && e.shiftKey) {
      body.classList.toggle('show-grid');
    }
  });
})(this);
</script>