import Image from "./image";
import ImageProxy from "./image.proxy";

/**
 * Factory to get image objects
 */
class ImageFactory {

    public static getImage(name: string): Image {
        return new ImageProxy(name);
    }

};

export default ImageFactory;