import Iterator from "./iterator";
import ThemeColor from "./themecolor";


(function main() {
    const iter: Iterator<ThemeColor> = ThemeColor.getIterator();
    while(iter.hasNext()) {
        console.log(iter.next());
    }
})();





