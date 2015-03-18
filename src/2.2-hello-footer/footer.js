// IMPORTS =========================================================================================
let Cycle = require("cyclejs");
let {Rx, h} = Cycle;

// ELEMENTS ========================================================================================
Cycle.registerCustomElement("Footer", DOM => {
  let View = Cycle.createView(() => {
    return {
      vtree$: Rx.Observable.return(
        <div>=== footer ===</div>
      )
    };
  });

  DOM.inject(View);
});