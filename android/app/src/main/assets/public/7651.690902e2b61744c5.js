"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7651],{7651:(E,c,n)=>{n.r(c),n.d(c,{AuthPageModule:()=>R});var f=n(177),a=n(4341),u=n(4742),m=n(4964),g=n(467),e=n(3953),p=n(7133),v=n(6552),h=n(9381),P=n(3683),A=n(9981);function y(o,s){1&o&&(e.j41(0,"div"),e.EFF(1,"El email es requerido"),e.k0s())}function F(o,s){1&o&&(e.j41(0,"div"),e.EFF(1,"Ingrese un email valido"),e.k0s())}function I(o,s){if(1&o&&(e.j41(0,"div",13),e.DNE(1,y,2,0,"div",14)(2,F,2,0,"div",14),e.k0s()),2&o){const r=e.XpG();e.R7$(),e.Y8G("ngIf",null==r.form.controls.email.errors?null:r.form.controls.email.errors.required),e.R7$(),e.Y8G("ngIf",null==r.form.controls.email.errors?null:r.form.controls.email.errors.email)}}function G(o,s){1&o&&(e.j41(0,"div"),e.EFF(1,"El constrase\xf1a es requerido"),e.k0s())}function S(o,s){if(1&o&&(e.j41(0,"div",13),e.DNE(1,G,2,0,"div",14),e.k0s()),2&o){const r=e.XpG();e.R7$(),e.Y8G("ngIf",null==r.form.controls.password.errors?null:r.form.controls.password.errors.required)}}const b=[{path:"",component:(()=>{var o;class s{constructor(){this.form=new a.gE({email:new a.MJ("",[a.k0.required,a.k0.email]),password:new a.MJ("",[a.k0.required])}),this.firebaseService=(0,e.WQX)(p.f),this.utilsService=(0,e.WQX)(v.T)}ngOnInit(){}submit(){var i=this;return(0,g.A)(function*(){if(i.form.valid){const t=yield i.utilsService.loading();yield t.present(),i.firebaseService.signIn(i.form.value).then(l=>{i.getUserInfo(l.user.uid)}).catch(l=>{console.log(l),i.utilsService.presentToast({message:l.message,duration:2500,color:"primary",position:"middle",icon:"alert-circle-outline"})}).finally(()=>{t.dismiss()})}})()}getUserInfo(i){var t=this;return(0,g.A)(function*(){if(t.form.valid){const l=yield t.utilsService.loading();yield l.present(),t.firebaseService.getDocument(`users/${i}`).then(d=>{t.utilsService.saveInLocalStorage("user",d),t.utilsService.routerLink("/main/scan"),t.form.reset(),t.utilsService.presentToast({message:`Te damos la bienvenida ${d.name}`,duration:1500,color:"primary",position:"middle",icon:"person-circle-outline"})}).catch(d=>{console.log(d),t.utilsService.presentToast({message:d.message,duration:2500,color:"primary",position:"middle",icon:"alert-circle-outline"})}).finally(()=>{l.dismiss()})}})()}}return(o=s).\u0275fac=function(i){return new(i||o)},o.\u0275cmp=e.VBU({type:o,selectors:[["app-auth"]],decls:22,vars:6,consts:[["backButton","/home","title","Iniciar Sesi\xf3n"],[1,"ion-padding"],[1,""],[1,"auth-form",3,"ngSubmit","keypress.enter","formGroup"],[1,"ion-text-center"],["autocomplete","email","icon","mail-outline","type","email","label","Correo",3,"control"],["class","validators",4,"ngIf"],["icon","lock-closed-outline","type","password","label","Contrase\xf1a",3,"control"],["routerLink","forgot-password",1,"ion-text-end"],["expand","block","mode","md","type","submit",1,"auth-submit","ion-margin",3,"disabled"],["slot","end","name","log-in-outline"],["expand","block","routerLink","sign-up","mode","md","fill","outline",1,"auth-submit","ion-margin"],["slot","end","name","person-add-outline"],[1,"validators"],[4,"ngIf"]],template:function(i,t){1&i&&(e.nrm(0,"app-header",0)(1,"br")(2,"br"),e.j41(3,"ion-content",1)(4,"div",2)(5,"form",3),e.bIt("ngSubmit",function(){return t.submit()})("keypress.enter",function(){return t.submit()}),e.j41(6,"div",4),e.nrm(7,"app-logo"),e.k0s(),e.nrm(8,"app-custom-input",5),e.DNE(9,I,3,2,"div",6),e.nrm(10,"app-custom-input",7),e.DNE(11,S,2,1,"div",6),e.j41(12,"p",8),e.EFF(13,"\xbfOlvistaste tu contrase\xf1a?"),e.k0s(),e.nrm(14,"br")(15,"br"),e.j41(16,"ion-button",9),e.EFF(17," Ingresar "),e.nrm(18,"ion-icon",10),e.k0s(),e.j41(19,"ion-button",11),e.EFF(20," Registrate "),e.nrm(21,"ion-icon",12),e.k0s()()()()),2&i&&(e.R7$(5),e.Y8G("formGroup",t.form),e.R7$(3),e.Y8G("control",t.form.controls.email),e.R7$(),e.Y8G("ngIf",t.form.controls.email.errors&&t.form.controls.email.touched),e.R7$(),e.Y8G("control",t.form.controls.password),e.R7$(),e.Y8G("ngIf",t.form.controls.password.errors&&t.form.controls.password.touched),e.R7$(5),e.Y8G("disabled",t.form.invalid))},dependencies:[f.bT,a.qT,a.cb,u.Jm,u.W9,u.iq,u.N7,m.Wk,h.l,P.H,A.Z,a.j4]}),s})()},{path:"sign-up",loadChildren:()=>n.e(2076).then(n.bind(n,920)).then(o=>o.SignUpPageModule)},{path:"forgot-password",loadChildren:()=>n.e(7005).then(n.bind(n,7005)).then(o=>o.ForgotPasswordPageModule)}];let T=(()=>{var o;class s{}return(o=s).\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.$C({type:o}),o.\u0275inj=e.G2t({imports:[m.iI.forChild(b),m.iI]}),s})();var M=n(3887);let R=(()=>{var o;class s{}return(o=s).\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.$C({type:o}),o.\u0275inj=e.G2t({imports:[f.MD,a.YN,u.bv,T,M.G]}),s})()}}]);