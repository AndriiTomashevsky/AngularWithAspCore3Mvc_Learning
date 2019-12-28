import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
let Repository = class Repository {
    constructor(http) {
        this.http = http;
        this.getProduct(1);
    }
    getProduct(id) {
        this.http.get("/api/products/" + id)
            .subscribe(p => this.product = p);
    }
};
Repository = __decorate([
    Injectable()
], Repository);
export { Repository };
//# sourceMappingURL=repository.js.map