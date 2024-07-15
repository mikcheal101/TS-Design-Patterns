import Slider from "./slider";
import TextBox from "./textbox";
import UIMediator from "./uimediator";


(function main() {
    
    const mediator: UIMediator = new UIMediator();
    const slider: Slider = new Slider(mediator);
    const box: TextBox = new TextBox(mediator);
    

    // copied from java course no ui to test with.
})();





