define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.printAbc = exports.Abc = void 0;
    class Abc {
        showInfo() {
            console.log("Abc.showInfo");
        }
    }
    exports.Abc = Abc;
    function printAbc() {
        console.log("Abc.printAbc");
    }
    exports.printAbc = printAbc;
});
