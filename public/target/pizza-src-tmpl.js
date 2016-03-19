angular.module("pizza-app.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("/pizza/form/has-validation.html","<div class=\"has-validation\">\n    <ng-transclude></ng-transclude>\n    <i ng-if=\"icon\"\n        class=\"material-icons md-24 form-control-feedback\"\n        aria-hidden=\"true\" ng-bind-html=\"icon\"></i>\n</div>\n");
$templateCache.put("/pizza/home/create.html","<section class=\"page page-marketing\">\n    <section class=\"section\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <form name=\"newPizza\" class=\"form\" novalidate>\n                    <fieldset ng-disabled=\"newPizza.$processing\">\n                        <div class=\"col-md-7\">\n                            <h2 class=\"display-3\">Create New Pizza</h2>\n                            <div class=\"form-group\" has-validation=\"newPizza.name\">\n                                <label for=\"name\">Pizza Name</label>\n                                <input type=\"text\" class=\"form-control\" name=\"title\" ng-model=\"ctrl.newPizza.name\" placeholder=\"Pizza Name\" required />\n                            </div>\n                            <div class=\"form-group\" has-validation=\"newPizza.description\">\n                                <label for=\"description\">Pizza Description</label>\n                                <textarea class=\"form-control\" name=\"description\" ng-model=\"ctrl.newPizza.description\" placeholder=\"Pizza Description\" required></textarea>\n                            </div>\n                            <button class=\"btn btn-success\" type=\"submit\"\n                                submit=\"newPizza.$processing\"\n                                ng-disabled=\"newPizza.$invalid || newPizza.$processing\"\n                                ng-click=\"ctrl.createPizza(ctrl.newPizza, newPizza)\">\n                                <i class=\"material-icons\">&#xE899;</i>\n                                Save\n                            </button>\n                        </div>\n                    </fieldset>\n                </form>\n            </div>\n        </div>\n    </section>\n</section>\n");
$templateCache.put("/pizza/home/edit.html","<section class=\"page page-marketing\">\n    <section class=\"section\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <h2 class=\"display-2\">Add Toppings to Your Pizza</h2>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <h2 class=\"display-3\">Available Toppings</h2>\n                        <ul class=\"list-unstyled\">\n                            <li style=\"margin: 10px;\">\n                                <div class=\"row\">\n                                    <form name=\"newTopping\" class=\"form\" novalidate>\n                                        <div class=\"col-md-8\">\n                                            <div class=\"form-group\" has-validation=\"newTopping.toppingName\">\n                                                <label for=\"toppingName\">Add New Topping</label>\n                                                <input type=\"text\" name=\"toppingName\" class=\"form-control\" ng-model=\"ctrl.newTopping.name\" placeholder=\"Topping Name\" />\n                                            </div>\n                                        </div>\n                                        <div class=\"col-md-4\">\n                                            <p>\n                                                &nbsp;\n                                            </p>\n                                            <button type=\"submit\" class=\"btn btn-default\" ng-click=\"ctrl.addTopping()\" ng-disabled=\"newTopping.$invalid\">\n                                                <i class=\"material-icons\">&#xE899;</i>\n                                                Save\n                                            </button>\n                                        </div>\n                                    </form>\n                                </div>\n                            </li>\n                            <li ng-repeat=\"topping in ctrl.toppings\"  style=\"margin:10px;\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-4\">\n                                        {{topping.name}}\n                                    </div>\n                                    <div class=\"col-md-4 pull-left\">\n                                        <button class=\"btn btn-default btn-sm\" ng-click=\"ctrl.addToPizza(topping)\">Add</button>\n                                    </div>\n                                </div>\n                            </li>\n                        </ul>\n                </div>\n                <div class=\"col-md-6\">\n                    <h2 class=\"display-3\">Toppings Added</h2>\n                    <p ng-if=\"!ctrl.addedToppings\">\n                        No Toppings Added\n                    </p>\n                    <ul>\n                        <li ng-repeat=\"addedTopping in ctrl.addedToppings\">\n                            <span class=\"\">{{addedTopping.name}}</span>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </section>\n</section>\n");
$templateCache.put("/pizza/home/home.html","<section class=\"page page-marketing\">\n    <section class=\"section\">\n        <div class=\"container\">\n            <div class=\"col-md-7\">\n                <h1 class=\"display-3\">You Create It, We Bake It</h1>\n                <p>Its escape meant the utter ruin of our plan, and in all probability my instant death.  This thought lent wings to my feet; but even at my best I could do no more than hold my own with the leaping thing before me.</p>\n                <p>Of a sudden it turned into an apartment on the right of the corridor, and an instant later as I rushed in I found myself facing two of the Mahars.  The one who had been there when we entered had been occupied with a number of metal vessels, into which had been put powders and liquids as I judged from the array of flasks standing about upon the bench where it had been working.  In an instant I realized what I had stumbled upon.  It was the very room for the finding of which Perry had given me minute directions.  It was the buried chamber in which was hidden the Great Secret of the race of Mahars.  And on the bench beside the flasks lay the skin-bound book which held the only copy of the thing I was to have sought, after dispatching the three Mahars in their sleep.</p>\n                <p>There was no exit from the room other than the doorway in which I now stood facing the two frightful reptiles.  Cornered, I knew that they would fight like demons, and they were well equipped to fight if fight they must.  Together they launched themselves upon me, and though I ran one of them through the heart on the instant, the other fastened its gleaming fangs about my sword arm above the elbow, and then with her sharp talons commenced to rake me about the body, evidently intent upon disemboweling me.  I saw that it was useless to hope that I might release my arm from that powerful, viselike grip which seemed to be severing my arm from my body.  The pain I suffered was intense, but it only served to spur me to greater efforts to overcome my antagonist.</p>\n                <p>Back and forth across the floor we struggled&mdash;the Mahar dealing me terrific, cutting blows with her fore feet, while I attempted to protect my body with my left hand, at the same time watching for an opportunity to transfer my blade from my now useless sword hand to its rapidly weakening mate.  At last I was successful, and with what seemed to me my last ounce of strength I ran the blade through the ugly body of my foe.</p>\n            </div>\n            <div class=\"col-md-5\">\n                <div class=\"home-callout\">\n                    <h4 class=\"display-2 text-center\">Get Started Now!</h4>\n                    <p class=\"text-center\">\n                        <a ui-sref=\"menu.list\" class=\"\">Order One of Ours</a>\n                    </p>\n                    <p class=\"text-center\">OR</p>\n                    <p class=\"text-center\">\n                        <a ui-sref=\"create.pizza\" class=\"\">Create Your Own Masterpiece</a>\n                    </p>\n                </div>\n            </div>\n        </div>\n    </section>\n</section>\n");
$templateCache.put("/pizza/home/menu.html","<section class=\"page page-marketing\">\n    <section class=\"section\">\n        <div class=\"container\">\n            <div class=\"col-md-12\">\n                <h2 class=\"display-3\">Our Own Menu</h2>\n                <hr />\n                <ul class=\"list-unstyled menu-list\">\n                    <li ng-repeat=\"pizza in ctrl.Menu\" ng-if=\"pizza.name\" class=\"menu-list-item\">\n                        <div class=\"container\">\n                            <div class=\"row\">\n                                <div class=\"col-md-4\">\n                                    <span class=\"display-3\">{{pizza.name}}</span>\n                                </div>\n                                <div class=\"col-md-4\">\n                                    <span class=\"display-1\">{{pizza.description}}</span>\n                                </div>\n                                <div class=\"col-md-2\">\n                                    <button class=\"btn btn-default btn-xs\" ng-click=\"ctrl.getToppings(pizza)\">Show Toppings</button>\n                                </div>\n                                <div class=\"col-md-2\">\n                                    <button class=\"btn btn-default btn-xs\" ng-click=\"ctrl.addToppings(pizza)\">Add Toppings</button>\n                                </div>\n                            </div>\n                            <!-- <div class=\"row\" class=\"\">\n                                <div class=\"col-md-12\">\n                                    <ul class=\"list-inline\">\n                                        <li ng-repeat=\"topping in pizza.toppings\">\n                                            <span class=\"\">topping</span>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div> -->\n                        </div>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </section>\n</section>\n");
$templateCache.put("/pizza/home/menu.modal.html","<div class=\"modal-header\">\n    <h2 class=\"display-3\">{{ctrl.pizza.name}} - Toppings</h2>\n</div>\n<div class=\"modal-body\">\n    <ul>\n        <li ng-repeat=\"topping in ctrl.toppings\">\n            {{topping.name}}\n        </li>\n    </ul>\n</div>\n<div class=\"modal-footer\">\n\n</div>\n");
$templateCache.put("/pizza/form/select/custom-select.html","<div\n    class=\"select custom-select select-{{ ctrl.size || \'md\' }}\"\n    auto-close=\"{{ multi ? \'outsideClick\' : \'always\' }}\"\n    on-toggle=\"ctrl.touched = true\"\n    role=\"menu\"\n    uib-keyboard-nav\n    uib-dropdown>\n    <button\n        class=\"btn btn-select btn-block\"\n        uib-dropdown-toggle\n        ng-disabled=\"!options.length || ctrl.disabled\">\n        <span ng-hide=\"value\" class=\"btn-label btn-placeholder\">{{ ctrl.placeholder }}</span>\n        <span ng-show=\"value\" class=\"btn-label\">{{ value }}</span>\n        <i class=\"material-icons md-caret\">&#xE5C5;</i>\n    </button>\n    <ul class=\"dropdown-menu uib-dropdown-menu\" role=\"group\">\n        <li ng-repeat=\"option in options track by $id(option)\" role=\"menuitem\">\n            <a href=\"\" ng-click=\"select(option)\">\n                <span ng-show=\"multi\">\n                    <i class=\"material-icons\" ng-if=\"ctrl.selected.indexOf(option.model) > -1\">&#xE834;</i>\n                    <i class=\"material-icons\" ng-if=\"ctrl.selected.indexOf(option.model) === -1\">&#xE835;</i>\n                </span>\n                {{ option.label }}\n            </a>\n        </li>\n    </ul>\n</div>\n");
$templateCache.put("/pizza/form/submit/submit.html","<span>\n    <span ng-transclude></span>\n    <loading-spinner class=\"spinner-btn\" on=\"ctrl.processing\"></loading-spinner>\n</span>\n");
$templateCache.put("/pizza/form/upload/upload-file.html","<div class=\"upload\">\n    <button class=\"btn btn-upload\" ng-click=\"ctrl.find()\">\n        <i class=\"material-icons md-48\" ng-bind-html=\"ctrl.icon\"></i>\n    </button>\n    <p class=\"label\">{{ ctrl.label }}</p>\n    <input class=\"sr-only\" type=\"file\" ng-model=\"ctrl.file\" />\n</div>\n");
$templateCache.put("/pizza/ui/address/address-link.html","<a ng-href=\"http://maps.google.com/?q={{ ctrl.street1 }} {{ ctrl.city }} {{ ctrl.state }} {{ ctrl.zip }}\" target=\"_blank\">\n    <span ng-if=\"ctrl.street1\">\n        {{ ctrl.street1 }}<span ng-if=\"ctrl.street2\">&nbsp;{{ ctrl.street2 }}</span>,&nbsp;\n    </span>\n    <span ng-if=\"ctrl.city\">\n        {{ ctrl.city }}&nbsp;\n    </span>\n    <span ng-if=\"ctrl.state\">\n        {{ ctrl.state }}&nbsp;\n    </span>\n    <span ng-if=\"ctrl.zip\">\n        {{ ctrl.zip }}\n    </span>\n</a>\n");
$templateCache.put("/pizza/ui/affix/affix-element.html","<div class=\"affix-container\">\n    <ng-transclude></ng-transclude>\n</div>\n");
$templateCache.put("/pizza/ui/alert/alert-container.html","<div class=\"alert-container\">\n    <div vzd-alert\n        class=\"fade\"\n        ng-repeat=\"alert in alertCtrl.alerts | orderBy:predicate:reverse\"\n        vzd-alert-options=\"alert\">\n    </div>\n</div>\n");
$templateCache.put("/pizza/ui/alert/alert.html","<div class=\"alert alert-{{ alert.type }} clearfix\">\n    <div class=\"alert-icon-container pull-left\">\n        <div  ng-switch on=\"alert.icon\">\n            <i class=\"material-icons\" ng-switch-when=\"danger\">&#xE033;</i>\n            <i class=\"material-icons\" ng-switch-when=\"error\">&#xE001;</i>\n            <i class=\"material-icons\" ng-switch-when=\"success\">&#xE86C;</i>\n            <i class=\"material-icons\" ng-switch-when=\"warning\">&#xE002;</i>\n            <i class=\"material-icons\" ng-switch-default>&#xE88E;</i>\n        </div>\n    </div>\n    <div class=\"alert-text pull-left\">\n        <strong class=\"alert-title\" ng-bind=\"alert.title\"></strong>\n        <span class=\"alert-body\" ng-bind=\"alert.body\"></span>\n    </div>\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n        <i class=\"material-icons\">&#xE14C;</i>\n    </button>\n</div>\n");
$templateCache.put("/pizza/ui/dialog/dialog.basic.html","<div class=\"modal-header\">\n    <h2 class=\"display-3\">{{ title }}</h2>\n</div>\n<div class=\"modal-body\" ng-include=\"template\"></div>\n<div class=\"modal-footer\">\n    <button class=\"btn {{ button.class }}\" ng-click=\"$close(\'ok\')\" ng-if=\"!ok\">\n        {{ button.text }}\n    </button>\n    <button class=\"btn {{ button.class }}\" submit=\"ctrl.$processing\" ng-disabled=\"ctrl.$processing\" ng-click=\"ctrl.ok(ok, $close)\" ng-if=\"ok\">\n        {{ button.text }}\n    </button>\n    <button class=\"btn btn-simple btn-dim\" ng-click=\"$dismiss(\'closed\')\" ng-if=\"cancellable\">{{ \'actions.cancel\' | vzdLocalize }}</button>\n</div>\n");
$templateCache.put("/pizza/ui/contact/phone.html","<a ng-href=\"tel: {{ ctrl.number }}\">{{ ctrl.number }}</a>\n");
$templateCache.put("/pizza/ui/dropdown/dropdown-content.html","<div\n    class=\"{{ type }} {{ type }}-{{ ctrl.size || \'md\' }} {{ type }}-content custom-{{ type }} {{ ctrl.direction ? ctrl.direction : \'left\' }} {{ ctrl.up ? \'dropup\' : \'\' }}\"\n    on-toggle=\"ctrl.toggled(open)\"\n    is-open=\"open\"\n    auto-close=\"outsideClick\"\n    uib-dropdown>\n    <button class=\"btn dropdown-toggle\" ng-class=\"{\'btn-link\': type === \'dropdown\', \'btn-select\': type === \'select\'}\" href=\"\" uib-dropdown-toggle>\n        <i class=\"material-icons md-18 pull-left\" ng-if=\"ctrl.icon\">{{ ctrl.icon }}</i>\n        <span class=\"btn-label\" ng-class=\"{\'btn-placeholder\' : type === \'select\'}\">{{ ctrl.text }}</span>\n        <i ng-hide=\"ctrl.hideCaret\" class=\"material-icons md-caret\">&#xE5C5;</i>\n    </button>\n    <div class=\"dropdown-menu uib-dropdown-menu\" ng-transclude></div>\n</div>\n");
$templateCache.put("/pizza/ui/dropdown/dropdown-select.html","<span class=\"dropdown {{ direction }}\" uib-dropdown on-toggle=\"ddCtrl.toggled(open)\">\n    <a href=\"\" class=\"dropdown-toggle\" uib-dropdown-toggle>\n        <span class=\"btn-label\">{{ text }}</span>\n        <i class=\"material-icons md-caret\">&#xE5C5;</i>\n    </a>\n    <ul class=\"dropdown-menu uib-dropdown-menu\">\n        <li ng-repeat=\"option in options track by $id(option)\" ng-class=\"{\'selected\': value === option.model}\">\n            <a href=\"\" ng-click=\"select(option)\">\n                {{ option.label }}\n            </a>\n        </li>\n    </ul>\n</span>\n");
$templateCache.put("/pizza/ui/icon/icon.html","<i class=\"icon material-icons md-36\" ng-bind-html=\"icon\"></i>\n");
$templateCache.put("/pizza/ui/layout/app-layout.html","<div class=\"layout layout-app\">\n    <div navbar></div>\n    <page-loader on=\"loading\"></page-loader>\n    <!--<div class=\"alerts alerts-global\" vzd-alert-container></div>-->\n    <main class=\"application\" ui-view name=\"page\"></main>\n</div>\n");
$templateCache.put("/pizza/ui/layout/beta-layout.html","<div class=\"layout layout-web\">\n    <main ui-view name=\"page\" autoscroll=\"true\"></main>\n    <div footer layout=\"web\"></div>\n</div>\n");
$templateCache.put("/pizza/ui/layout/web-layout.html","<div class=\"layout layout-web\">\n    <header class=\"container main-header\">\n        <nav class=\"container nav\">\n            <div class=\"row\">\n                <div class=\"col-md-7\">\n                    <div id=\"logo-parent\">\n                        <a href=\"/\">\n                            <div id=\"logo\">\n                                <h1 class=\"display-5 text-center\">Flippin\' Pizza</h1>\n                                <h5 class=\"display-2 text-center\">Our Way or Yours</h5>\n                            </div>\n                        </a>\n                    </div>\n                </div>\n                <div class=\"col-md-5\">\n                    <ul class=\"nav-list list-inline pull-right\">\n                        <li>\n                            <a ui-sref=\"menu.list\" class=\"\">Our Menu</a>\n                        </li>\n                        <li>\n                            <a ui-sref=\"create.pizza\" class=\"\">Create Your Own</a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </nav>\n    </header>\n    <main ui-view name=\"page\"></main>\n    <!-- <div footer layout=\"web\"></div> -->\n</div>\n");
$templateCache.put("/pizza/ui/loading/loading-spinner.html","<div ng-show=\"ctrl.show\" class=\"loading-spinner\">\n    <svg viewBox=\"0 0 64 64\">\n        <g>\n            <defs>\n                <linearGradient id=\"sGD\" gradientUnits=\"userSpaceOnUse\" x1=\"55\" y1=\"46\" x2=\"2\" y2=\"46\">\n                    <stop offset=\"0.1\" class=\"stop1\"></stop><stop offset=\"1\" class=\"stop2\"></stop>\n                </linearGradient>\n            </defs>\n            <g stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\" transform=\"rotate(136.472 32 32)\">\n                <path stroke=\"url(#sGD)\" d=\"M4,32 c0,15,12,28,28,28c8,0,16-4,21-9\"></path>\n                <path d=\"M60,32 C60,16,47.464,4,32,4S4,16,4,32\"></path>\n                <animateTransform values=\"0,32,32;360,32,32\" attributeName=\"transform\" type=\"rotate\" repeatCount=\"indefinite\" dur=\"750ms\"></animateTransform>\n            </g>\n        </g>\n    </svg>\n</div>\n");
$templateCache.put("/pizza/ui/loading/page-loader.html","<div class=\"page-loader\" ng-if=\"ctrl.show\">\n    <div class=\"page-loader-container\">\n        <div class=\"page-loader-icon\">\n            <i class=\"material-icons md-36\">&#xE5D3;</i>\n        </div>\n    </div>\n</div>\n");
$templateCache.put("/pizza/ui/map/static.google-map.html","<img ng-src=\"https://maps.googleapis.com/maps/api/staticmap?{{ ctrl.params }}\" ng-class=\"{\'responsive-media\': ctrl.responsive}\" />\n");
$templateCache.put("/pizza/ui/menu/menu.html","<div dropdown on-toggle=\"toggled(open)\">\n    <a href id=\"simple-dropdown\" dropdown-toggle>\n        {{ displayValue }}\n    </a>\n    <ul class=\"dropdown-menu\">\n        <li ng-repeat=\"choice in options.items\" ng-class=\"{\'selected\': choice === selected}\" ng-class=\"{\'disabled\': choice.disabled}\">\n            <a href=\"\" ng-click=\"select(choice)\">{{ choice.label }}</a>\n        </li>\n    </ul>\n</div>\n");
$templateCache.put("/pizza/ui/modal/modal-window.html","<div modal-render=\"{{ $isRendered }}\"\n    tabindex=\"-1\"\n    role=\"dialog\"\n    class=\"modal\"\n    uib-modal-animation-class=\"fade\"\n    modal-in-class=\"in\"\n    ng-style=\"{\'z-index\': 1050 + index * 10, display: \'block\'}\">\n    <div class=\"modal-dialog\" ng-class=\"size ? \'modal-\' + size : \'\'\">\n        <button class=\"close modal-close\" ng-click=\"$parent.$dismiss(\'closed\')\">\n            <i class=\"material-icons\">&#xE14C;</i>\n        </button>\n        <div class=\"modal-content\" uib-modal-transclude></div>\n    </div>\n</div>\n");
$templateCache.put("/pizza/ui/nav/ui-footer.html","<div class=\"footer footer-web\">\n    <div class=\"section section-home\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-6 col-sm-offset-3\">\n                    <ul class=\"list-inline-columns list-col-xs-4\">\n                        <li class=\"text-center\"><a class=\"primary\" ui-sref=\"marketing.contact\">Contact</a></li>\n                        <li class=\"text-center\"><a class=\"primary\" ui-sref=\"marketing.support\">Help &amp; Support</a></li>\n                        <li class=\"text-center\"><a class=\"primary\" ui-sref=\"legal.privacy\">Privacy Policy</a></li>\n                        <li class=\"text-center\"><a class=\"primary\" ui-sref=\"legal.terms\">Terms &amp; Conditions</a></li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-4 col-sm-offset-4\">\n                    <ul class=\"list-inline-columns list-col-xs-4\">\n                        <li class=\"text-center\">\n                            <a href=\"https://twitter.com/pizza\"\n                                target=\"_blank\"\n                                class=\"btn btn-round btn-icon btn-primary\"\n                                uib-tooltip=\"Twitter\">\n                                <i class=\"fa fa-twitter\"></i>\n                            </a>\n                        </li>\n                        <li class=\"text-center\">\n                            <a href=\"https://www.facebook.com/pizza-174737102622035/timeline/\"\n                                target=\"_blank\"\n                                class=\"btn btn-round btn-icon btn-primary btn-twitter\"\n                                uib-tooltip=\"Facebook\">\n                                <i class=\"fa fa-facebook\"></i>\n                            </a>\n                        </li>\n                        <li class=\"text-center\">\n                            <a href=\"https://www.linkedin.com/company/pizza\"\n                                target=\"_blank\"\n                                class=\"btn btn-round btn-icon btn-primary btn-twitter\"\n                                uib-tooltip=\"LinkedIn\">\n                                <i class=\"fa fa-linkedin\"></i>\n                            </a>\n                        </li>\n                        <li class=\"text-center\">\n                            <a href=\"https://www.youtube.com/channel/UCPIOtHry6C93d0WwAMpbAbA\"\n                                target=\"_blank\"\n                                class=\"btn btn-round btn-icon btn-primary btn-twitter\"\n                                uib-tooltip=\"YouTube\">\n                                <i class=\"fa fa-youtube\"></i>\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");
$templateCache.put("/pizza/ui/nav/ui-navbar.html","<nav class=\"navbar navbar-inverse navbar-fixed-top navbar-global\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand\" ui-sref=\"marketing.home\" id=\"pizza\">\n                <img alt=\"pizza\" ng-src=\"/target/asset/image/logo/pizza-icon.svg\">\n            </a>\n        </div>\n        <ul class=\"nav navbar-nav visible-xs-block\" ng-if=\"navbar.session.get(\'isAuthenticated\')\">\n            <li class=\"dropdown\" uib-dropdown>\n                <a href=\"#\" uib-dropdown-toggle class=\"dropdown-toggle\" role=\"button\" aria-expanded=\"false\">\n                    <span class=\"\">{{ \'navbar.menu\' | vzdLocalize }}</span> <i class=\"material-icons md-24\">&#xE5C5;</i>\n                </a>\n                <ul class=\"dropdown-menu uib-dropdown-menu\" role=\"menu\">\n                    <li ui-sref-active-tree=\"{class: \'active\', state: \'dashboard\'}\" is-authorized=\"[\'pizzaProUser\']\">\n                        <a ui-sref=\"dashboard.landing\">\n                            {{ \'navbar.dashboard\' | vzdLocalize }}\n                        </a>\n                    </li>\n                    <li ui-sref-active-tree=\"{class: \'active\', state: \'daily\'}\" is-authorized=\"[\'pizzaProUser\', \'ProjectDailiesUser\', \'DailiesUser\']\">\n                        <a ui-sref=\"daily.list\">\n                            {{ \'navbar.dailies.feed\' | vzdLocalize }}\n                        </a>\n                    </li>\n                    <li ui-sref-active-tree=\"{class: \'active\', state: \'search\'}\" is-authorized=\"[\'pizzaProUser\']\">\n                        <a ui-sref=\"search.property.list\">\n                            {{ \'navbar.prospect\' | vzdLocalize }}\n                        </a>\n                    </li>\n                    <li ui-sref-active-tree=\"{class: \'active\', state: \'contact\'}\" is-authorized=\"[\'pizzaProUser\']\">\n                        <a ui-sref=\"contact.search\">\n                            {{ \'navbar.contacts\' | vzdLocalize }}\n                        </a>\n                    </li>\n                </ul>\n            </li>\n        </ul>\n        <ul class=\"nav navbar-nav hidden-xs\">\n            <li ui-sref-active-tree=\"{class: \'active\', state: \'dashboard\'}\" is-authorized=\"[\'pizzaProUser\']\">\n                <a ui-sref=\"dashboard.landing\">\n                    {{ \'navbar.dashboard\' | vzdLocalize }}\n                </a>\n            </li>\n            <li ui-sref-active-tree=\"{class: \'active\', state: \'daily\'}\" is-authorized=\"[\'pizzaProUser\', \'ProjectDailiesUser\', \'DailiesUser\']\">\n                <a ui-sref=\"daily.list\">\n                    {{ \'navbar.dailies.feed\' | vzdLocalize }}\n                </a>\n            </li>\n            <li ui-sref-active-tree=\"{class: \'active\', state: \'search\'}\" is-authorized=\"[\'pizzaProUser\']\">\n                <a ui-sref=\"search.property.list\">\n                    {{ \'navbar.prospect\' | vzdLocalize }}\n                </a>\n            </li>\n            <li ui-sref-active-tree=\"{class: \'active\', state: \'contact\'}\" is-authorized=\"[\'pizzaProUser\']\">\n                <a ui-sref=\"contact.search\">\n                    {{ \'navbar.contacts\' | vzdLocalize }}\n                </a>\n            </li>\n        </ul>\n        <ul class=\"nav navbar-nav\" ng-if=\"!navbar.session.get(\'isAuthenticated\')\">\n            <li>\n                <a class=\"text-icon\" ui-sref=\"marketing.home\" aria-expanded=\"false\">\n                    {{ \'navbar.home\' | vzdLocalize }}\n                </a>\n            </li>\n        </ul>\n        <ul class=\"nav navbar-nav navbar-right\" ng-if=\"!navbar.session.get(\'isAuthenticated\')\">\n            <li>\n                <a href=\"\" class=\"text-icon\" login-button action=\"register\" aria-expanded=\"false\">\n                    {{ \'actions.register\' | vzdLocalize }}\n                </a>\n            </li>\n        </ul>\n        <ul class=\"nav navbar-nav navbar-right\" ng-if=\"navbar.session.get(\'isAuthenticated\')\">\n            <li class=\"dropdown\" uib-dropdown>\n                <a href=\"#\" uib-dropdown-toggle class=\"dropdown-toggle\" role=\"button\" aria-expanded=\"false\">\n                    <span class=\"\">{{ navbar.session.get(\'firstName\') }} {{ navbar.session.get(\'lastName\') }}</span> <i class=\"material-icons md-24\">&#xE5C5;</i>\n                </a>\n                <ul class=\"dropdown-menu uib-dropdown-menu\" role=\"menu\">\n                    <li ui-sref-active=\"{class: \'active\', state: \'company.list\'}\" is-authorized=\"[\'SuperAdministrator\']\">\n                        <a ui-sref=\"company.list\">{{ \'navbar.companies\' | vzdLocalize }}</a>\n                    </li>\n                    <li ui-sref-active=\"{class: \'active\', state: \'user.list\'}\" is-authorized=\"[\'SuperAdministrator\']\">\n                        <a ui-sref=\"user.list\">{{ \'navbar.users\' | vzdLocalize }}</a>\n                    </li>\n                    <li ui-sref-active=\"{class: \'active\', state: \'blogadmin.list\'}\" is-authorized=\"[\'SuperAdministrator\', \'BlogAuthor\', \'BlogPublisher\']\">\n                        <a ui-sref=\"blogadmin.list\">{{ \'navbar.blogAdmin\' | vzdLocalize }}</a>\n                    </li>\n                    <li ui-sref-active=\"{class: \'active\', state: \'imageadmin.list\'}\" is-authorized=\"[\'SuperAdministrator\', \'BlogAuthor\', \'BlogPublisher\', \'Researcher\']\">\n                        <a ui-sref=\"imageadmin.list\">{{ \'navbar.imageAdmin\' | vzdLocalize }}</a>\n                    </li>\n                    <!--\n                    <li ui-sref-active=\"{class: \'active\', state: \'account.company\'}\" is-authorized=\"[\'CompanyAdministrator\']\" is-not-role=\"[\'SuperAdministrator\']\">\n                        <a ui-sref=\"account.company\">{{ \'navbar.companyPreferences\' | vzdLocalize }}</a>\n                    </li>\n                    -->\n                    <li ui-sref-active=\"{class: \'active\', state: \'account.user\'}\">\n                        <a ui-sref=\"account.user\">{{ \'navbar.userPreferences\' | vzdLocalize }}</a>\n                    </li>\n                    <li>\n                        <a href=\"\" ng-click=\"navbar.logout()\">{{ \'actions.logout\' | vzdLocalize }}</a>\n                    </li>\n                </ul>\n            </li>\n        </ul>\n    </div>\n</nav>\n");
$templateCache.put("/pizza/ui/slideout/slideout-modal.html","<div tabindex=\"-1\" role=\"dialog\" class=\"modal modal-slideout\"\n    modal-render=\"{{ $isRendered }}\"\n    modal-animation-class=\"slideout\"\n    modal-in-class=\"in\"\n    ng-style=\"{\'z-index\': 1050 + index * 10, display: \'block\'}\" ng-click=\"close($event)\">\n    <div class=\"modal-dialog\" ng-class=\"size ? \'modal-\' + size : \'\'\">\n        <div class=\"modal-content\" modal-transclude></div>\n    </div>\n</div>\n");
$templateCache.put("/pizza/ui/status/status-container.html","<div class=\"status-group status-group-{{ ctrl.type }}\" ng-transclude></div>\n");
$templateCache.put("/pizza/ui/status/status-item.html","<div ng-switch=\"ctrl.status\" class=\"status status-{{ ctrl.status | projectStatus }}\">\n    <div class=\"clearfix\">\n        <div class=\"status-marker pull-left\"></div>\n        <div class=\"body-1 status-marker-label\" ng-if=\"ctrl.label\"><strong>{{ ctrl.label }}</strong></div>\n    </div>\n    <div class=\"status-content\" ng-if=\"ctrl.type !== \'mini\'\" ng-transclude></div>\n</div>\n");
$templateCache.put("/pizza/ui/toggle/toggle.html","<button class=\"btn btn-toggle\" ng-class=\"{\'off\' : !value, \'on\': !!value}\" ng-click=\"toggle(value)\">\n    <span class=\"toggle-text\">\n        {{ \'actions.\' + ((!!value) ? \'on\' : \'off\') | vzdLocalize }}\n    </span>\n    <i class=\"material-icons\">&#xE3A6;</i>\n</button>\n");}]);