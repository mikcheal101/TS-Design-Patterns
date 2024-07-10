import Point2D from "../../helpers/prototype/Point2D";
import Image from "./image";
import ImageFactory from "./image.factory";


(function main() {
    const img: Image = ImageFactory.getImage("sample_image.bmp");
    img.setLocation(new Point2D(25, 35));
    console.log(`Image location: ${img.getLocation()}`);
    console.log(`Rendering Image NOW.....`);
    img.render();

})();


