 (function() {

    this.Modal = function() {

       this.closeButton = null;
       this.modal = null;
       this.overlay = null;

       this.transitionEnd = transitionSelect();

       var defaults = {
          className: 'fade-and-drop',
          closeButton: true,
          content: "",
          maxWidth: 600,
          minWidth: 280,
          overlay: true
       }

      if (arguments[0] && typeof arguments[0] === "object") {
       this.options = extendDefaults(defaults, arguments[0]);
      }


       function extendDefaults(source, properties) {
          var property;
          for (property in properties) {
             if (properties.hasOwnProperty(property)) {
                source[property] = properties[property];
             }
          }
          return source;
       }
    }

    Modal.prototype.close = function() {
       var _ = this;
       this.modal.className = this.modal.className.replace(" scotch-open", "");
       this.overlay.className = this.overlay.className.replace(" scotch-open", "");
       this.modal.addEventListener(this.transitionEnd, function() {
          _.modal.parentNode.removeChild(_.modal);
       });
       this.overlay.addEventListener(this.transitionEnd, function() {
          if(_.overlay.parentNode) _.overlay.parentNode.removeChild(_.overlay);
       });
    }

    Modal.prototype.open = function() {
       buildOut.call(this);
       initializeEvents.call(this);
       window.getComputedStyle(this.modal).height;
       this.modal.className = this.modal.className + (this.modal.offsetHeight > window.innerHeight ?
       " scotch-open scotch-anchored" : " scotch-open");
       this.overlay.className = this.overlay.className + " scotch-open";
    }

    function buildOut() {

       var content, contentHolder, docFrag;

       if (typeof this.options.content === "string") {
          content = this.options.content;
       } else {
          content = this.options.content.innerHTML;
       }

       docFrag = document.createDocumentFragment();

       this.modal = document.createElement("div");
       this.modal.className = "scotch-modal " + this.options.className;
       this.modal.style.minWidth = this.options.minWidth + "px";
       this.modal.style.maxWidth = this.options.maxWidth + "px";

       if (this.options.closeButton === true) {
          this.closeButton = document.createElement("button");
          this.closeButton.className = "scotch-close close-button";
          this.closeButton.innerHTML = "×";
          this.modal.appendChild(this.closeButton);
       }

       if (this.options.overlay === true) {
          this.overlay = document.createElement("div");
          this.overlay.className = "scotch-overlay " + this.options.className;
          docFrag.appendChild(this.overlay);
       }

       contentHolder = document.createElement("div");
       contentHolder.className = "scotch-content";
       contentHolder.innerHTML = content;
       this.modal.appendChild(contentHolder);


       docFrag.appendChild(this.modal);

       document.body.appendChild(docFrag);
    }

    function initializeEvents() {

       if (this.closeButton) {
          this.closeButton.addEventListener('click', this.close.bind(this));
       }

       if (this.overlay) {
          this.overlay.addEventListener('click', this.close.bind(this));
       }
    }

    function transitionSelect() {
       var el = document.createElement("div");
       if (el.style.WebkitTransition) return "webkitTransitionEnd";
       if (el.style.OTransition) return "oTransitionEnd";
       return 'transitionend';
    }

 }());


 var myModal = new Modal({
    content: '<p>Ken Wheeler is strikingly handsome.</p>',
    maxWidth: 600
 });

 myModal.open();

const _Id = function(id) {
   var self = id, id = (typeof id === 'string');
   if (!id === true) { throw 'La fonction _ID requiert un string'; }
   try {

      var el = (document.getElementById(self));
      if (!el) { throw true;}
      
      try {
         let lt = document.querySelectorAll('#'+self).length;
         if (lt > 1) { throw true;}
      } catch(e) {
         console.warn("Attention, plusieurs elements contiennent l'id "+self);
      }
   } catch(e) {
      throw "Erreur : l\'id '#"+self+"' n'existe pas";
   }
   return el;
}

_Id(undo).addEventListener('click', function(e) {
   console.log('test');
});