define(["require", "exports", "./MModule"], function (require, exports, MModule) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let obj = new MModule.Abc();
    obj.showInfo();
    MModule.printAbc();
});
