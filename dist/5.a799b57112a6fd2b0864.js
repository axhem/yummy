(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/Psm":function(r,n,t){"use strict";t.r(n);var e=t("mrSG"),a=t("CcnG"),i=t("PCNd"),o=t("ZYCi"),c=t("txmh"),l=t("c14U"),d=t("6blF");function s(r){var n=r.error;r.subscriber.error(n)}var u=t("sE5F"),p=t("67Y/"),m=t("9Z1F"),f=t("AytR"),v=function(){function r(r){this.http=r,this.api_url=f.a.api_url,this.charge="checkout"}return r.prototype.getProducts=function(){var r=this;return this.http.get(this.api_url+this.checkout).pipe(Object(p.a)((function(n){return r.result=n.json()})))},r.prototype.checkout=function(r,n){var t=this,e={data:r,cart:n};return this.http.post(this.api_url+this.charge,e).pipe(Object(p.a)((function(r){return t.result=r.json()})),Object(m.a)((function(r){return n=r.json().message,t?new d.a((function(r){return t.schedule(s,0,{error:n,subscriber:r})})):new d.a((function(r){return r.error(n)}));var n,t})))},r=e.b([Object(a.A)({providedIn:"root"}),e.d("design:paramtypes",[u.a])],r)}(),h=t("gIcY"),g=function(r){function n(n,t,e){var a=r.call(this,n)||this;return a.cartService=n,a.checkoutService=t,a.formBuilder=e,a.image_url=f.a.image_url,a.changeQuantity=function(r,n){r.quantity=n,a.cartService.reloadCart(a.cartList)},a}return e.c(n,r),n.prototype.ngOnInit=function(){this.paymentFormGroup=this.formBuilder.group({fullname:[this.fullname,h.d.required],email:[this.email,[h.d.required,h.d.email]],address:[null,h.d.required],city:[null,h.d.required],postal_code:[null,h.d.required],country:[null,h.d.required],phone:[null,h.d.required]})},Object.defineProperty(n.prototype,"f",{get:function(){return this.paymentFormGroup.controls},enumerable:!0,configurable:!0}),n.prototype.onCheckout=function(r){var n={name:this.paymentFormGroup.value.fullname,email:this.paymentFormGroup.value.email,address:this.paymentFormGroup.value.address,city:this.paymentFormGroup.value.city,postal_code:this.paymentFormGroup.value.postal_code,country:this.paymentFormGroup.value.country,phone:this.paymentFormGroup.value.phone};this.checkoutService.checkout(n,r).subscribe({next:function(r){console.log(r)},error:function(r){console.log(r)}})},n=e.b([Object(a.n)({selector:"app-cart-page",template:t("JzPQ"),styles:[t("Q5ef")]}),e.d("design:paramtypes",[l.a,v,h.a])],n)}(c.a),y=[{path:"",component:g}],b=function(){function r(){}return r.prototype.transform=function(r,n){return.92*r},r=e.b([Object(a.T)({name:"convert"})],r)}();t.d(n,"CartPageModule",(function(){return x}));var x=function(){function r(){}return r=e.b([Object(a.I)({imports:[i.a,h.b,h.c,o.c.forChild(y)],declarations:[g,b]})],r)}()},JzPQ:function(r,n){r.exports='<div class="cart-page-container">\r\n  <div class="cart-page-header">\r\n    <h1>Shopping Cart</h1>\r\n  </div>\r\n  <div class="cart-page-content" *ngIf="cartList.length > 0">\r\n    <div class="cart-item-header cart-item-row">\r\n      <div class="cart-item-cell cart-item-product"><span>Product</span></div>\r\n      <div class="cart-item-cell cart-item-quantity"><span>Quantity</span></div>\r\n      <div class="cart-item-cell cart-item-total"><span>Total</span></div>\r\n      <div class="cart-item-cell cart-item-action"><span>Action</span></div>\r\n    </div>\r\n    <div class="cart-item-row" *ngFor="let cart of cartList; let i = index">\r\n      <div class="cart-item-cell cart-item-product">\r\n        <div\r\n          class="cart-item-thumbnail"\r\n          [ngStyle]="{\r\n            \'background-image\': \'url(\' + image_url + cart.product.image + \')\'\r\n          }"\r\n        ></div>\r\n        <div class="cart-item-info">\r\n          <div class="cart-item-brand">Pizza</div>\r\n          <div class="cart-item-title">{{ cart.product.name }}</div>\r\n        </div>\r\n      </div>\r\n      <div class="cart-item-cell cart-item-quantity">\r\n        <quantity-control\r\n          [quantity]="cart.quantity"\r\n          (onChange)="changeQuantity(cart, $event)"\r\n        ></quantity-control>\r\n      </div>\r\n      <div class="cart-item-cell cart-item-total">\r\n        <div class="item-price">\r\n          {{ cart.quantity * cart.product.price | currency: "USD":true }}\r\n        </div>\r\n      </div>\r\n      <div class="cart-item-cell cart-item-action">\r\n        <div class="item-remove" (click)="removeFromCart(i)">X</div>\r\n      </div>\r\n    </div>\r\n    <div class="row cart-total">\r\n      <div class="col-lg-offset-6">\r\n        <div class="cart-total-row row">\r\n          <div class="col-md-6 cart-total-label">\r\n            Cart overview\r\n          </div>\r\n          <div class="col-md-6 cart-total-value"></div>\r\n        </div>\r\n        <div class="cart-total-row row">\r\n          <div class="col-md-6 cart-total-label">\r\n            subtotal\r\n          </div>\r\n          <div class="col-md-6 cart-total-value">\r\n            {{ totalPrice | currency: "USD":true }}\r\n          </div>\r\n        </div>\r\n        <div class="cart-total-row row">\r\n          <div class="col-md-6 cart-total-label">\r\n            delivery cost\r\n          </div>\r\n          <div class="col-md-6 cart-total-value">\r\n            {{ deliveryCost | currency: "USD":true }}\r\n          </div>\r\n        </div>\r\n        <div class="cart-total-row row">\r\n          <div class="col-md-6 cart-total-label">\r\n            total\r\n          </div>\r\n          <div class="col-md-6 cart-total-value cart-total-price">\r\n            {{ totalPrice + deliveryCost | currency: "USD":true }} /{{ totalPrice + deliveryCost |convert | currency: "EUR ":true }}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class="cart-buttons">\r\n      <div class="continue-shopping">\r\n        <a routerLink="/">continue shopping</a>\r\n      </div>\r\n      <div\r\n        data-toggle="modal"\r\n        data-target="#myModal"\r\n        (click)="showModal = true"\r\n        class="checkout-button button button-primary button-large"\r\n      >\r\n        Checkout\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class="cart-page-content" *ngIf="cartList.length == 0">\r\n    <h4>Your cart is empty.</h4>\r\n    <a routerLink="/">Go shopping</a>\r\n  </div>\r\n\r\n  \x3c!-- The Modal --\x3e\r\n  <div class="modal" id="myModal" [ngClass]="{ show: showModal }">\r\n    <div class="modal-dialog modal-lg" style="margin-top: 6%;">\r\n      <div class="modal-content">\r\n        \x3c!-- Modal Header --\x3e\r\n        <div class="modal-header">\r\n          <h4 class="modal-title">Checkout</h4>\r\n          <button\r\n            type="button"\r\n            class="close"\r\n            (click)="showModal = false"\r\n            data-dismiss="modal"\r\n          >\r\n            &times;\r\n          </button>\r\n        </div>\r\n\r\n        \x3c!-- Modal body --\x3e\r\n        <div class="modal-body" style="width: 60%;">\r\n          <form [formGroup]="paymentFormGroup" (ngSubmit)="onCheckout(cartList)">\r\n            <div class="form-group">\r\n              <input\r\n                class="form-control"\r\n                type="text"\r\n                placeholder="Name"\r\n                formControlName="fullname"\r\n              />\r\n              <div\r\n                class="error-required"\r\n                *ngIf="\r\n                  !paymentFormGroup.get(\'fullname\').valid &&\r\n                  paymentFormGroup.get(\'fullname\').touched\r\n                "\r\n              >\r\n                <i class="fa fa-info-circle mr-1" aria-hidden="true"></i>\r\n                Name is required\r\n              </div>\r\n            </div>\r\n            <div class="form-group">\r\n              <input\r\n                class="form-control"\r\n                type="email"\r\n                placeholder="Email"\r\n                formControlName="email"\r\n              />\r\n              <div\r\n                class="error-required"\r\n                *ngIf="\r\n                  !paymentFormGroup.get(\'email\').valid &&\r\n                  paymentFormGroup.get(\'email\').touched\r\n                "\r\n              >\r\n                <i class="fa fa-info-circle mr-1" aria-hidden="true"></i>\r\n                Email is required\r\n              </div>\r\n            </div>\r\n            <div class="form-group">\r\n              <input\r\n                class="form-control"\r\n                type="text"\r\n                placeholder="Address"\r\n                formControlName="address"\r\n              />\r\n              <div\r\n                class="error-required"\r\n                *ngIf="\r\n                  !paymentFormGroup.get(\'address\').valid &&\r\n                  paymentFormGroup.get(\'address\').touched\r\n                "\r\n              >\r\n                <i class="fa fa-info-circle mr-1" aria-hidden="true"></i>\r\n                Address is required\r\n              </div>\r\n            </div>\r\n            <div class="form-group">\r\n              <input\r\n                class="form-control"\r\n                type="text"\r\n                placeholder="City"\r\n                formControlName="city"\r\n              />\r\n              <div\r\n                class="error-required"\r\n                *ngIf="\r\n                  !paymentFormGroup.get(\'city\').valid &&\r\n                  paymentFormGroup.get(\'city\').touched\r\n                "\r\n              >\r\n                <i class="fa fa-info-circle mr-1" aria-hidden="true"></i>\r\n                City is required\r\n              </div>\r\n            </div>\r\n            <div class="form-group">\r\n              <input\r\n                class="form-control"\r\n                type="text"\r\n                placeholder="Post code"\r\n                formControlName="postal_code"\r\n              />\r\n              <div\r\n                class="error-required"\r\n                *ngIf="\r\n                  !paymentFormGroup.get(\'postal_code\').valid &&\r\n                  paymentFormGroup.get(\'postal_code\').touched\r\n                "\r\n              >\r\n                <i class="fa fa-info-circle mr-1" aria-hidden="true"></i>\r\n                Post code is required\r\n              </div>\r\n            </div>\r\n            <div class="form-group">\r\n              <input\r\n                class="form-control"\r\n                type="text"\r\n                placeholder="Country"\r\n                formControlName="country"\r\n              />\r\n              <div\r\n                class="error-required"\r\n                *ngIf="\r\n                  !paymentFormGroup.get(\'country\').valid &&\r\n                  paymentFormGroup.get(\'country\').touched\r\n                "\r\n              >\r\n                <i class="fa fa-info-circle mr-1" aria-hidden="true"></i>\r\n                Country is required\r\n              </div>\r\n            </div>\r\n            <div class="form-group">\r\n              <input\r\n                class="form-control"\r\n                type="text"\r\n                placeholder="Phone"\r\n                formControlName="phone"\r\n              />\r\n              <div\r\n                class="error-required"\r\n                *ngIf="\r\n                  !paymentFormGroup.get(\'phone\').valid &&\r\n                  paymentFormGroup.get(\'phone\').touched\r\n                "\r\n              >\r\n                <i class="fa fa-info-circle mr-1" aria-hidden="true"></i>\r\n                Phone is required\r\n              </div>\r\n            </div>\r\n            <button\r\n              type="submit"\r\n              class="btn btn-primary btn-lg"\r\n              type="submit"\r\n              [disabled]="!paymentFormGroup.valid"\r\n            >\r\n              Confirm Checkout\r\n            </button>\r\n          </form>\r\n        </div>\r\n\r\n        \x3c!-- Modal footer --\x3e\r\n        <div class="modal-footer">\r\n          <button\r\n            type="button"\r\n            class="btn btn-danger"\r\n            (click)="showModal = false"\r\n            data-dismiss="modal"\r\n          >\r\n            Close\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n'},Q5ef:function(r,n){r.exports=':host {\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: auto;\r\n    background-color: #f6f6f6;\r\n    padding-bottom: 70px;\r\n}\r\n.cart-page-container {\r\n    max-width: 1140px;\r\n    text-align: center;\r\n    padding: 0 30px;\r\n    margin: auto;\r\n}\r\n.cart-page-header h1 {\r\n    font-size:50px;\r\n    font-family: "Playfair Display";\r\n    margin: 80px 0;\r\n}\r\n.cart-page-content {\r\n    max-width:940px;\r\n    margin:30px 70px;\r\n    background-color: white;\r\n    padding:60px;\r\n}\r\n.cart-item-cell {\r\n    width: 100%;\r\n}\r\n.cart-total,\r\n.cart-item-row {\r\n    border-bottom: 1px solid #e4e4e4;\r\n}\r\n.cart-item-header .cart-item-cell:first-of-type {\r\n    text-align: left;\r\n}\r\n.cart-item-header .cart-item-cell {\r\n    text-transform: uppercase;\r\n    font-size: 12px;\r\n    letter-spacing: .15em;\r\n    color: #9f9f9f;\r\n    text-align: right;\r\n}\r\n.cart-item-thumbnail {\r\n    float: left;\r\n    width: 120px;\r\n    height: 90px;\r\n    margin-right: 15px;\r\n    vertical-align: middle;\r\n    background-position: 50% 50%;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.cart-item-info {\r\n    float: left;\r\n}\r\n.cart-item-brand {\r\n    display: block;\r\n    margin-bottom: 5px;\r\n    font-size: 12px;\r\n    text-transform: uppercase;\r\n    text-align: left;\r\n    letter-spacing: .05em;\r\n    color: #9f9f9f;\r\n}\r\n.cart-item-title {\r\n    color: #1d1d20;\r\n    max-width: 100%;\r\n    text-transform: uppercase;\r\n    letter-spacing: .1em;\r\n    text-align: left;\r\n}\r\n.item-price {\r\n    color: #9f9f9f;\r\n    font-size:16px;\r\n    font-family: "Playfair Display";\r\n}\r\n.item-remove {\r\n    font-size: 30px;\r\n    color:#9f9f9f;\r\n    cursor:pointer;\r\n}\r\n.item-remove:hover {\r\n    color:black;\r\n}\r\n.cart-total {\r\n    text-transform: uppercase;\r\n    color:#9f9f9f;\r\n    letter-spacing: 2px;\r\n    margin:0;\r\n}\r\n.cart-total-row {\r\n    line-height: 30px;\r\n}\r\n.cart-total-label {\r\n    text-align: left;\r\n}\r\n.cart-total-value {\r\n    text-align: right;\r\n}\r\n.cart-total-price {\r\n    color:black\r\n}\r\n.cart-buttons {\r\n    padding:20px 0;\r\n}\r\n.continue-shopping a {\r\n    text-transform: uppercase;\r\n    color: black;\r\n    float: left;\r\n}\r\n.checkout-button {\r\n    float: right;\r\n    margin-bottom: 20px;\r\n}\r\n@media screen and (min-width: 768px) {\r\n    .cart-item-row {\r\n        display: table;\r\n        width: 100%;\r\n        border-collapse: separate;\r\n        border-spacing: 0 30px;\r\n        box-sizing: border-box;\r\n        table-layout: fixed;\r\n    }\r\n    .cart-item-product {\r\n        width: 320%;\r\n        text-align: left;\r\n    }\r\n    .cart-item-cell {\r\n        display: table-cell;\r\n        vertical-align: top;\r\n        text-align: right;\r\n    }\r\n}\r\n@media screen and (max-width: 820px) {\r\n    .cart-page-content {\r\n        margin:0;\r\n    }\r\n    .cart-page-header h1 {\r\n        margin: 30px 0;\r\n    }\r\n    .cart-item-header {\r\n        display: none;\r\n    }\r\n    .cart-item-product {\r\n        width: 100%;\r\n        float: left;\r\n        margin-left: 0;\r\n        padding-bottom: 15px;\r\n    }\r\n    .cart-item-quantity {\r\n        width: 80%;\r\n        float: left;\r\n        padding-bottom: 15px;\r\n        text-align: left;\r\n    }\r\n    .cart-item-total,\r\n    .cart-item-action {\r\n        text-align: right;\r\n    }\r\n    .cart-total-label {\r\n        float: left;\r\n    }\r\n    .continue-shopping a {\r\n        float: none;\r\n    }\r\n    .checkout-button {\r\n        float: none;\r\n        margin:20px 0 0 0;\r\n    }\r\n}\r\n.modal.show\r\n{\r\n  display: block;\r\n}\r\n'}}]);