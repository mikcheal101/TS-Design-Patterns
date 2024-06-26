import Swordsman from "./creation/prototype/Swordsman";
import Point3D from "./helpers/prototype/Point3D";

(function main() {

    const swordsman: Swordsman = new Swordsman();
    swordsman.move(new Point3D(-10, 0, 0), 20);
    swordsman.attack();

    console.log(`swordsman: ${swordsman.toString()}`);

    const swordsman2: Swordsman = (swordsman.clone()) as Swordsman;
    console.log(`Cloned swordsman: ${swordsman2.toString()}`);
})();