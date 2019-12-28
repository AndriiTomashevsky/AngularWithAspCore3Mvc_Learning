import { __decorate } from "tslib";
import { NgModule } from "@angular/core";
import { Repository } from "./repository";
import { HttpClientModule } from '@angular/common/http';
let ModelModule = class ModelModule {
};
ModelModule = __decorate([
    NgModule({
        imports: [HttpClientModule],
        providers: [Repository]
    })
], ModelModule);
export { ModelModule };
//# sourceMappingURL=model.module.js.map