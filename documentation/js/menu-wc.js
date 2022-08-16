'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">brasil-burger documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminModule-36df898c9bb7b7d3a0e5a161b22b4e8a043e34c021c9970c0e8eea97d5ec28d5b9e1ae29fac700808f8cd83595a998a61e3d38a12ae0ed4d6e79025969dce461"' : 'data-target="#xs-components-links-module-AdminModule-36df898c9bb7b7d3a0e5a161b22b4e8a043e34c021c9970c0e8eea97d5ec28d5b9e1ae29fac700808f8cd83595a998a61e3d38a12ae0ed4d6e79025969dce461"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-36df898c9bb7b7d3a0e5a161b22b4e8a043e34c021c9970c0e8eea97d5ec28d5b9e1ae29fac700808f8cd83595a998a61e3d38a12ae0ed4d6e79025969dce461"' :
                                            'id="xs-components-links-module-AdminModule-36df898c9bb7b7d3a0e5a161b22b4e8a043e34c021c9970c0e8eea97d5ec28d5b9e1ae29fac700808f8cd83595a998a61e3d38a12ae0ed4d6e79025969dce461"' }>
                                            <li class="link">
                                                <a href="components/AlayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AlayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidemenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidemenuComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminRoutingModule.html" data-type="entity-link" >AdminRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-755c3a4d34edf9ac1cef033b1cbc30693591e9aa5e014352156d8c1d215289168477960caf18a4be8d4a863e78cfb64359fe5a833dac72f80b686398c53413ca"' : 'data-target="#xs-components-links-module-AppModule-755c3a4d34edf9ac1cef033b1cbc30693591e9aa5e014352156d8c1d215289168477960caf18a4be8d4a863e78cfb64359fe5a833dac72f80b686398c53413ca"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-755c3a4d34edf9ac1cef033b1cbc30693591e9aa5e014352156d8c1d215289168477960caf18a4be8d4a863e78cfb64359fe5a833dac72f80b686398c53413ca"' :
                                            'id="xs-components-links-module-AppModule-755c3a4d34edf9ac1cef033b1cbc30693591e9aa5e014352156d8c1d215289168477960caf18a4be8d4a863e78cfb64359fe5a833dac72f80b686398c53413ca"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotFoundErrorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotFoundErrorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-6a5ade98e7f24344716c3f2b6c3c3602b0394862215efd9d394511d889a16393a1e907b051d64c82b66dc94f81472f7977ef4a01c01e2868b210b73197ab427d"' : 'data-target="#xs-components-links-module-AuthModule-6a5ade98e7f24344716c3f2b6c3c3602b0394862215efd9d394511d889a16393a1e907b051d64c82b66dc94f81472f7977ef4a01c01e2868b210b73197ab427d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-6a5ade98e7f24344716c3f2b6c3c3602b0394862215efd9d394511d889a16393a1e907b051d64c82b66dc94f81472f7977ef4a01c01e2868b210b73197ab427d"' :
                                            'id="xs-components-links-module-AuthModule-6a5ade98e7f24344716c3f2b6c3c3602b0394862215efd9d394511d889a16393a1e907b051d64c82b66dc94f81472f7977ef4a01c01e2868b210b73197ab427d"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LogoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LogoutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link" >AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BurgerModule.html" data-type="entity-link" >BurgerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BurgerModule-1e2ffb55747b51c4461293b984a12f01b0be25644cd4446cb8702e118de7abf74cb01149836cd6a58406f4a6790465d7c8ff8103dff81856820e2695a6c9cddd"' : 'data-target="#xs-components-links-module-BurgerModule-1e2ffb55747b51c4461293b984a12f01b0be25644cd4446cb8702e118de7abf74cb01149836cd6a58406f4a6790465d7c8ff8103dff81856820e2695a6c9cddd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BurgerModule-1e2ffb55747b51c4461293b984a12f01b0be25644cd4446cb8702e118de7abf74cb01149836cd6a58406f4a6790465d7c8ff8103dff81856820e2695a6c9cddd"' :
                                            'id="xs-components-links-module-BurgerModule-1e2ffb55747b51c4461293b984a12f01b0be25644cd4446cb8702e118de7abf74cb01149836cd6a58406f4a6790465d7c8ff8103dff81856820e2695a6c9cddd"' }>
                                            <li class="link">
                                                <a href="components/BAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BDeleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BDeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BIndexComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BIndexComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BurgerRoutingModule.html" data-type="entity-link" >BurgerRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ClientModule.html" data-type="entity-link" >ClientModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ClientModule-8d92ed8ded0203e9026855eb36f7833cccfef1dafabf90db953eeb9fb216dd67ebfdd7f4b2696277f06d8560bd3d7beb07f97664abb99cc01dd349bdfa782052"' : 'data-target="#xs-components-links-module-ClientModule-8d92ed8ded0203e9026855eb36f7833cccfef1dafabf90db953eeb9fb216dd67ebfdd7f4b2696277f06d8560bd3d7beb07f97664abb99cc01dd349bdfa782052"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ClientModule-8d92ed8ded0203e9026855eb36f7833cccfef1dafabf90db953eeb9fb216dd67ebfdd7f4b2696277f06d8560bd3d7beb07f97664abb99cc01dd349bdfa782052"' :
                                            'id="xs-components-links-module-ClientModule-8d92ed8ded0203e9026855eb36f7833cccfef1dafabf90db953eeb9fb216dd67ebfdd7f4b2696277f06d8560bd3d7beb07f97664abb99cc01dd349bdfa782052"' }>
                                            <li class="link">
                                                <a href="components/AsideComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AsideComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BouttonQuantityComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BouttonQuantityComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CardTabsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CardTabsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CartStatusComponentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartStatusComponentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CatalogueComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CatalogueComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CfooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CfooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CheaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CheaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ClayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListePanierComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListePanierComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListerComplementsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListerComplementsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PanierComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PanierComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SectionListerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SectionListerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ClientRoutingModule.html" data-type="entity-link" >ClientRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LayoutModule.html" data-type="entity-link" >LayoutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LayoutModule-48c2f054361ed215662f2e87e4ab8e5f64568dfc67f61dd8ba468016cb04985e36db1b87c19c55b352f0dc8a59fa2196ff32448940c9ba1e911e257936a834f3"' : 'data-target="#xs-components-links-module-LayoutModule-48c2f054361ed215662f2e87e4ab8e5f64568dfc67f61dd8ba468016cb04985e36db1b87c19c55b352f0dc8a59fa2196ff32448940c9ba1e911e257936a834f3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LayoutModule-48c2f054361ed215662f2e87e4ab8e5f64568dfc67f61dd8ba468016cb04985e36db1b87c19c55b352f0dc8a59fa2196ff32448940c9ba1e911e257936a834f3"' :
                                            'id="xs-components-links-module-LayoutModule-48c2f054361ed215662f2e87e4ab8e5f64568dfc67f61dd8ba468016cb04985e36db1b87c19c55b352f0dc8a59fa2196ff32448940c9ba1e911e257936a834f3"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UserModule-ad2a7929ffea620f1997fd86ff702e89f9ac65d68f80743e9ecc1e13f438c4d71759db47b1746e1604da8df78e020441b3b0c321b2093c9209b18b8a5e0998d6"' : 'data-target="#xs-components-links-module-UserModule-ad2a7929ffea620f1997fd86ff702e89f9ac65d68f80743e9ecc1e13f438c4d71759db47b1746e1604da8df78e020441b3b0c321b2093c9209b18b8a5e0998d6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserModule-ad2a7929ffea620f1997fd86ff702e89f9ac65d68f80743e9ecc1e13f438c4d71759db47b1746e1604da8df78e020441b3b0c321b2093c9209b18b8a5e0998d6"' :
                                            'id="xs-components-links-module-UserModule-ad2a7929ffea620f1997fd86ff702e89f9ac65d68f80743e9ecc1e13f438c4d71759db47b1746e1604da8df78e020441b3b0c321b2093c9209b18b8a5e0998d6"' }>
                                            <li class="link">
                                                <a href="components/UAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UDeleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UDeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UIndexComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UIndexComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserRoutingModule.html" data-type="entity-link" >UserRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/ListerProduitPanierComponent.html" data-type="entity-link" >ListerProduitPanierComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ListerProduitPanierComponent-1.html" data-type="entity-link" >ListerProduitPanierComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/BurgerApiService.html" data-type="entity-link" >BurgerApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CartBetaService.html" data-type="entity-link" >CartBetaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CartService.html" data-type="entity-link" >CartService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CatalogueService.html" data-type="entity-link" >CatalogueService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DetailService.html" data-type="entity-link" >DetailService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Catalogue.html" data-type="entity-link" >Catalogue</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ItemProduit.html" data-type="entity-link" >ItemProduit</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Produit.html" data-type="entity-link" >Produit</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProduitDetail.html" data-type="entity-link" >ProduitDetail</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});