import Point3D from "../../helpers/prototype/Point3D";
import Swordsman from "./Swordsman";


(function test() {

    const swordsman: Swordsman = new Swordsman();
    swordsman.move(new Point3D(-10, 0, 0), 20);
    swordsman.attack();

    console.log(swordsman.toString());

    const swordsman2: Swordsman = (swordsman.clone()) as Swordsman;
    console.log(`Cloned swordsman: ${swordsman2.toString()}`);
})();