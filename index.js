listener = {

  init: function () {

    if ("onresize" in window) {
      window.onresize = listener.handleEvent;
      console.log("Added handler for event 'resize' in window");
    } else{
      console.log("There is no event 'resize' in window");
    }

    if ("onorientationchange" in window) {
      // deprecated
      window.onorientationchange = listener.handleEvent;
      console.log("Added handler for event 'orientationchange' in window");
    } else{
      console.log("There is no event 'orientationchange' in window");
    }

    if ("orientation" in screen && "onchange" in screen.orientation) {
      // replacement
      screen.orientation.onchange = listener.handleEvent;
      console.log("Added handler for event 'change' in screen.orientation");
    } else{
      console.log("There is no event 'change' in screen.orientation");
    }

  },

  handleEvent: function (event) {

    const className = event.target.constructor.name;
    const element = document.getElementById(event.type + className);
    const count = (parseInt(element.innerText) || 0) + 1;

    element.innerText = "" + count;
    console.log("Event %s in %s (%s)", event.type, className, count);

  },
};

window.addEventListener("DOMContentLoaded", listener.init);
