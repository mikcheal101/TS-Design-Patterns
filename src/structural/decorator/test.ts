import HtmlEncodedMessage from "./htmlencodedmessage";
import IMessage from "./imessage";
import TextMessage from "./textmessage";

/**
 *  eg in java:
 *  
 * FileOutputStream fOut = new FileOutputStream("stream.txt");
 * OutputStream os = new BufferedOutputStream(fOut);
 * os.write('x');
 * os.flush();
 * 
 * in ts as above:
 * cont fOut: TextMessage = new TextMessage("<b>free</b> text to see <i>!</i>");
 * let os: IMessage = new HtmlEncodedMessage(fOut);
 * oc.getContent();
 * 
 */
(function main() {
    const text: string = "The Force is <strong>strong</strong> with this one";
    let m: IMessage = new TextMessage(text);

    let decorator: IMessage = new HtmlEncodedMessage(m);
    console.log(decorator.getContent());

    decorator = new 
    console.log(decorator.getContent());
})();