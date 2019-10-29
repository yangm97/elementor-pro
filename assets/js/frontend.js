/*! elementor-pro - v2.7.3 - 28-10-2019 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 85);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_elementorModules$Mod) {
	_inherits(_class, _elementorModules$Mod);

	function _class(settings, document) {
		_classCallCheck(this, _class);

		var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, settings));

		_this.document = document;
		return _this;
	}

	_createClass(_class, [{
		key: 'getTimingSetting',
		value: function getTimingSetting(settingKey) {
			return this.getSettings(this.getName() + '_' + settingKey);
		}
	}]);

	return _class;
}(elementorModules.Module);

exports.default = _class;

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_elementorModules$Mod) {
	_inherits(_class, _elementorModules$Mod);

	function _class(settings, callback) {
		_classCallCheck(this, _class);

		var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, settings));

		_this.callback = callback;
		return _this;
	}

	_createClass(_class, [{
		key: 'getTriggerSetting',
		value: function getTriggerSetting(settingKey) {
			return this.getSettings(this.getName() + '_' + settingKey);
		}
	}]);

	return _class;
}(elementorModules.Module);

exports.default = _class;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = elementorModules.frontend.handlers.Base.extend({
	getSkinPrefix: function getSkinPrefix() {
		return 'classic_';
	},

	bindEvents: function bindEvents() {
		var cid = this.getModelCID();

		elementorFrontend.addListenerOnce(cid, 'resize', this.onWindowResize);
	},

	getClosureMethodsNames: function getClosureMethodsNames() {
		return elementorModules.frontend.handlers.Base.prototype.getClosureMethodsNames.apply(this, arguments).concat(['fitImages', 'onWindowResize', 'runMasonry']);
	},

	getDefaultSettings: function getDefaultSettings() {
		return {
			classes: {
				fitHeight: 'elementor-fit-height',
				hasItemRatio: 'elementor-has-item-ratio'
			},
			selectors: {
				postsContainer: '.elementor-posts-container',
				post: '.elementor-post',
				postThumbnail: '.elementor-post__thumbnail',
				postThumbnailImage: '.elementor-post__thumbnail img'
			}
		};
	},

	getDefaultElements: function getDefaultElements() {
		var selectors = this.getSettings('selectors');

		return {
			$postsContainer: this.$element.find(selectors.postsContainer),
			$posts: this.$element.find(selectors.post)
		};
	},

	fitImage: function fitImage($post) {
		var settings = this.getSettings(),
		    $imageParent = $post.find(settings.selectors.postThumbnail),
		    $image = $imageParent.find('img'),
		    image = $image[0];

		if (!image) {
			return;
		}

		var imageParentRatio = $imageParent.outerHeight() / $imageParent.outerWidth(),
		    imageRatio = image.naturalHeight / image.naturalWidth;

		$imageParent.toggleClass(settings.classes.fitHeight, imageRatio < imageParentRatio);
	},

	fitImages: function fitImages() {
		var $ = jQuery,
		    self = this,
		    itemRatio = getComputedStyle(this.$element[0], ':after').content,
		    settings = this.getSettings();

		this.elements.$postsContainer.toggleClass(settings.classes.hasItemRatio, !!itemRatio.match(/\d/));

		if (self.isMasonryEnabled()) {
			return;
		}

		this.elements.$posts.each(function () {
			var $post = $(this),
			    $image = $post.find(settings.selectors.postThumbnailImage);

			self.fitImage($post);

			$image.on('load', function () {
				self.fitImage($post);
			});
		});
	},

	setColsCountSettings: function setColsCountSettings() {
		var currentDeviceMode = elementorFrontend.getCurrentDeviceMode(),
		    settings = this.getElementSettings(),
		    skinPrefix = this.getSkinPrefix(),
		    colsCount;

		switch (currentDeviceMode) {
			case 'mobile':
				colsCount = settings[skinPrefix + 'columns_mobile'];
				break;
			case 'tablet':
				colsCount = settings[skinPrefix + 'columns_tablet'];
				break;
			default:
				colsCount = settings[skinPrefix + 'columns'];
		}

		this.setSettings('colsCount', colsCount);
	},

	isMasonryEnabled: function isMasonryEnabled() {
		return !!this.getElementSettings(this.getSkinPrefix() + 'masonry');
	},

	initMasonry: function initMasonry() {
		imagesLoaded(this.elements.$posts, this.runMasonry);
	},

	runMasonry: function runMasonry() {
		var elements = this.elements;

		elements.$posts.css({
			marginTop: '',
			transitionDuration: ''
		});

		this.setColsCountSettings();

		var colsCount = this.getSettings('colsCount'),
		    hasMasonry = this.isMasonryEnabled() && colsCount >= 2;

		elements.$postsContainer.toggleClass('elementor-posts-masonry', hasMasonry);

		if (!hasMasonry) {
			elements.$postsContainer.height('');

			return;
		}

		/* The `verticalSpaceBetween` variable is setup in a way that supports older versions of the portfolio widget */

		var verticalSpaceBetween = this.getElementSettings(this.getSkinPrefix() + 'row_gap.size');

		if ('' === this.getSkinPrefix() && '' === verticalSpaceBetween) {
			verticalSpaceBetween = this.getElementSettings(this.getSkinPrefix() + 'item_gap.size');
		}

		var masonry = new elementorModules.utils.Masonry({
			container: elements.$postsContainer,
			items: elements.$posts.filter(':visible'),
			columnsCount: this.getSettings('colsCount'),
			verticalSpaceBetween: verticalSpaceBetween
		});

		masonry.run();
	},

	run: function run() {
		// For slow browsers
		setTimeout(this.fitImages, 0);

		this.initMasonry();
	},

	onInit: function onInit() {
		elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);

		this.bindEvents();

		this.run();
	},

	onWindowResize: function onWindowResize() {
		this.fitImages();

		this.runMasonry();
	},

	onElementChange: function onElementChange() {
		this.fitImages();

		setTimeout(this.runMasonry);
	}
});

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_elementorModules$Vie) {
	_inherits(_class, _elementorModules$Vie);

	function _class() {
		_classCallCheck(this, _class);

		return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	}

	_createClass(_class, [{
		key: '__construct',
		value: function __construct(options) {
			var _this2 = this;

			this.motionFX = options.motionFX;

			this.runImmediately = this.run;

			this.run = function () {
				_this2.animationFrameRequest = requestAnimationFrame(_this2.run.bind(_this2));

				if ('page' === _this2.motionFX.getSettings('range')) {
					_this2.runImmediately();

					return;
				}

				var dimensions = _this2.motionFX.getSettings('dimensions'),
				    elementTopWindowPoint = dimensions.elementTop - pageYOffset,
				    elementEntrancePoint = elementTopWindowPoint - innerHeight,
				    elementExitPoint = elementTopWindowPoint + dimensions.elementHeight;

				if (elementEntrancePoint <= 0 && elementExitPoint >= 0) {
					_this2.runImmediately();
				}
			};
		}
	}, {
		key: 'runCallback',
		value: function runCallback() {
			var callback = this.getSettings('callback');

			callback.apply(undefined, arguments);
		}
	}, {
		key: 'destroy',
		value: function destroy() {
			cancelAnimationFrame(this.animationFrameRequest);
		}
	}, {
		key: 'onInit',
		value: function onInit() {
			_get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'onInit', this).call(this);

			this.run();
		}
	}]);

	return _class;
}(elementorModules.ViewModule);

exports.default = _class;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = elementorModules.frontend.handlers.Base.extend({

	getDefaultSettings: function getDefaultSettings() {
		return {
			selectors: {
				mainSwiper: '.elementor-main-swiper',
				swiperSlide: '.swiper-slide'
			},
			slidesPerView: {
				desktop: 3,
				tablet: 2,
				mobile: 1
			}
		};
	},

	getDefaultElements: function getDefaultElements() {
		var selectors = this.getSettings('selectors');

		var elements = {
			$mainSwiper: this.$element.find(selectors.mainSwiper)
		};

		elements.$mainSwiperSlides = elements.$mainSwiper.find(selectors.swiperSlide);

		return elements;
	},

	getSlidesCount: function getSlidesCount() {
		return this.elements.$mainSwiperSlides.length;
	},

	getInitialSlide: function getInitialSlide() {
		var editSettings = this.getEditSettings();

		return editSettings.activeItemIndex ? editSettings.activeItemIndex - 1 : 0;
	},

	getEffect: function getEffect() {
		return this.getElementSettings('effect');
	},

	getDeviceSlidesPerView: function getDeviceSlidesPerView(device) {
		var slidesPerViewKey = 'slides_per_view' + ('desktop' === device ? '' : '_' + device);

		return Math.min(this.getSlidesCount(), +this.getElementSettings(slidesPerViewKey) || this.getSettings('slidesPerView')[device]);
	},

	getSlidesPerView: function getSlidesPerView(device) {
		if ('slide' === this.getEffect()) {
			return this.getDeviceSlidesPerView(device);
		}

		return 1;
	},

	getDesktopSlidesPerView: function getDesktopSlidesPerView() {
		return this.getSlidesPerView('desktop');
	},

	getTabletSlidesPerView: function getTabletSlidesPerView() {
		return this.getSlidesPerView('tablet');
	},

	getMobileSlidesPerView: function getMobileSlidesPerView() {
		return this.getSlidesPerView('mobile');
	},

	getDeviceSlidesToScroll: function getDeviceSlidesToScroll(device) {
		var slidesToScrollKey = 'slides_to_scroll' + ('desktop' === device ? '' : '_' + device);

		return Math.min(this.getSlidesCount(), +this.getElementSettings(slidesToScrollKey) || 1);
	},

	getSlidesToScroll: function getSlidesToScroll(device) {
		if ('slide' === this.getEffect()) {
			return this.getDeviceSlidesToScroll(device);
		}

		return 1;
	},

	getDesktopSlidesToScroll: function getDesktopSlidesToScroll() {
		return this.getSlidesToScroll('desktop');
	},

	getTabletSlidesToScroll: function getTabletSlidesToScroll() {
		return this.getSlidesToScroll('tablet');
	},

	getMobileSlidesToScroll: function getMobileSlidesToScroll() {
		return this.getSlidesToScroll('mobile');
	},

	getSpaceBetween: function getSpaceBetween(device) {
		var propertyName = 'space_between';

		if (device && 'desktop' !== device) {
			propertyName += '_' + device;
		}

		return this.getElementSettings(propertyName).size || 0;
	},

	getSwiperOptions: function getSwiperOptions() {
		var elementSettings = this.getElementSettings();

		// TODO: Temp migration for old saved values since 2.2.0
		if ('progress' === elementSettings.pagination) {
			elementSettings.pagination = 'progressbar';
		}

		var swiperOptions = {
			grabCursor: true,
			initialSlide: this.getInitialSlide(),
			slidesPerView: this.getDesktopSlidesPerView(),
			slidesPerGroup: this.getDesktopSlidesToScroll(),
			spaceBetween: this.getSpaceBetween(),
			loop: 'yes' === elementSettings.loop,
			speed: elementSettings.speed,
			effect: this.getEffect(),
			preventClicks: false,
			preventClicksPropagation: false,
			slideToClickedSlide: true
		};

		if (elementSettings.show_arrows) {
			swiperOptions.navigation = {
				prevEl: '.elementor-swiper-button-prev',
				nextEl: '.elementor-swiper-button-next'
			};
		}

		if (elementSettings.pagination) {
			swiperOptions.pagination = {
				el: '.swiper-pagination',
				type: elementSettings.pagination,
				clickable: true
			};
		}

		if ('cube' !== this.getEffect()) {
			var breakpointsSettings = {},
			    breakpoints = elementorFrontend.config.breakpoints;

			breakpointsSettings[breakpoints.lg - 1] = {
				slidesPerView: this.getTabletSlidesPerView(),
				slidesPerGroup: this.getTabletSlidesToScroll(),
				spaceBetween: this.getSpaceBetween('tablet')
			};

			breakpointsSettings[breakpoints.md - 1] = {
				slidesPerView: this.getMobileSlidesPerView(),
				slidesPerGroup: this.getMobileSlidesToScroll(),
				spaceBetween: this.getSpaceBetween('mobile')
			};

			swiperOptions.breakpoints = breakpointsSettings;
		}

		if (!this.isEdit && elementSettings.autoplay) {
			swiperOptions.autoplay = {
				delay: elementSettings.autoplay_speed,
				disableOnInteraction: !!elementSettings.pause_on_interaction
			};
		}

		return swiperOptions;
	},

	updateSpaceBetween: function updateSpaceBetween(swiper, propertyName) {
		var deviceMatch = propertyName.match('space_between_(.*)'),
		    device = deviceMatch ? deviceMatch[1] : 'desktop',
		    newSpaceBetween = this.getSpaceBetween(device),
		    breakpoints = elementorFrontend.config.breakpoints;

		if ('desktop' !== device) {
			var breakpointDictionary = {
				tablet: breakpoints.lg - 1,
				mobile: breakpoints.md - 1
			};

			swiper.params.breakpoints[breakpointDictionary[device]].spaceBetween = newSpaceBetween;
		} else {
			swiper.originalParams.spaceBetween = newSpaceBetween;
		}

		swiper.params.spaceBetween = newSpaceBetween;

		swiper.update();
	},

	onInit: function onInit() {
		var _this = this;

		elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);

		var elementSettings = this.getElementSettings();

		this.swipers = {};

		if (1 >= this.getSlidesCount()) {
			return;
		}

		this.swipers.main = new Swiper(this.elements.$mainSwiper, this.getSwiperOptions());

		if (elementSettings.pause_on_hover) {
			this.elements.$mainSwiper.on({
				mouseenter: function mouseenter() {
					_this.swipers.main.autoplay.stop();
				},
				mouseleave: function mouseleave() {
					_this.swipers.main.autoplay.start();
				}
			});
		}
	},

	onElementChange: function onElementChange(propertyName) {
		if (1 >= this.getSlidesCount()) {
			return;
		}

		if (0 === propertyName.indexOf('width')) {
			this.swipers.main.update();
		}

		if (0 === propertyName.indexOf('space_between')) {
			this.updateSpaceBetween(this.swipers.main, propertyName);
		}
	},

	onEditSettingsChange: function onEditSettingsChange(propertyName) {
		if (1 >= this.getSlidesCount()) {
			return;
		}

		if ('activeItemIndex' === propertyName) {
			this.swipers.main.slideToLoop(this.getEditSettings('activeItemIndex') - 1);
		}
	}
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Base = __webpack_require__(9),
    TestimonialCarousel;

TestimonialCarousel = Base.extend({

	getDefaultSettings: function getDefaultSettings() {
		var defaultSettings = Base.prototype.getDefaultSettings.apply(this, arguments);

		defaultSettings.slidesPerView = {
			desktop: 1,
			tablet: 1,
			mobile: 1
		};

		if (defaultSettings.loop) {
			defaultSettings.loopedSlides = this.getSlidesCount();
		}

		return defaultSettings;
	},

	getEffect: function getEffect() {
		return 'slide';
	}
});

module.exports = function ($scope) {
	new TestimonialCarousel({ $element: $scope });
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var FormSender = __webpack_require__(120),
    Form = FormSender.extend();

var RedirectAction = __webpack_require__(121);

module.exports = function ($scope) {
	new Form({ $element: $scope });
	new RedirectAction({ $element: $scope });
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PostsHandler = __webpack_require__(3);

module.exports = PostsHandler.extend({
	getSkinPrefix: function getSkinPrefix() {
		return 'cards_';
	}
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var StickyHandler = elementorModules.frontend.handlers.Base.extend({

	bindEvents: function bindEvents() {
		elementorFrontend.addListenerOnce(this.getUniqueHandlerID() + 'sticky', 'resize', this.run);
	},

	unbindEvents: function unbindEvents() {
		elementorFrontend.removeListeners(this.getUniqueHandlerID() + 'sticky', 'resize', this.run);
	},

	isActive: function isActive() {
		return undefined !== this.$element.data('sticky');
	},

	activate: function activate() {
		var elementSettings = this.getElementSettings(),
		    stickyOptions = {
			to: elementSettings.sticky,
			offset: elementSettings.sticky_offset,
			effectsOffset: elementSettings.sticky_effects_offset,
			classes: {
				sticky: 'elementor-sticky',
				stickyActive: 'elementor-sticky--active elementor-section--handles-inside',
				stickyEffects: 'elementor-sticky--effects',
				spacer: 'elementor-sticky__spacer'
			}
		},
		    $wpAdminBar = elementorFrontend.elements.$wpAdminBar;

		if (elementSettings.sticky_parent) {
			stickyOptions.parent = '.elementor-widget-wrap';
		}

		if ($wpAdminBar.length && 'top' === elementSettings.sticky && 'fixed' === $wpAdminBar.css('position')) {
			stickyOptions.offset += $wpAdminBar.height();
		}

		this.$element.sticky(stickyOptions);
	},

	deactivate: function deactivate() {
		if (!this.isActive()) {
			return;
		}

		this.$element.sticky('destroy');
	},

	run: function run(refresh) {
		if (!this.getElementSettings('sticky')) {
			this.deactivate();

			return;
		}

		var currentDeviceMode = elementorFrontend.getCurrentDeviceMode(),
		    activeDevices = this.getElementSettings('sticky_on');

		if (-1 !== activeDevices.indexOf(currentDeviceMode)) {
			if (true === refresh) {
				this.reactivate();
			} else if (!this.isActive()) {
				this.activate();
			}
		} else {
			this.deactivate();
		}
	},

	reactivate: function reactivate() {
		this.deactivate();

		this.activate();
	},

	onElementChange: function onElementChange(settingKey) {
		if (-1 !== ['sticky', 'sticky_on'].indexOf(settingKey)) {
			this.run(true);
		}

		if (-1 !== ['sticky_offset', 'sticky_effects_offset', 'sticky_parent'].indexOf(settingKey)) {
			this.reactivate();
		}
	},

	onInit: function onInit() {
		elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);

		this.run();
	},

	onDestroy: function onDestroy() {
		elementorModules.frontend.handlers.Base.prototype.onDestroy.apply(this, arguments);

		this.deactivate();
	}
});

module.exports = function ($scope) {
	new StickyHandler({ $element: $scope });
};

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _frontend = __webpack_require__(86);

var _frontend2 = _interopRequireDefault(_frontend);

var _frontend3 = __webpack_require__(87);

var _frontend4 = _interopRequireDefault(_frontend3);

var _frontend5 = __webpack_require__(105);

var _frontend6 = _interopRequireDefault(_frontend5);

var _frontend7 = __webpack_require__(111);

var _frontend8 = _interopRequireDefault(_frontend7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ElementorProFrontend = function (_elementorModules$Vie) {
	_inherits(ElementorProFrontend, _elementorModules$Vie);

	function ElementorProFrontend() {
		_classCallCheck(this, ElementorProFrontend);

		return _possibleConstructorReturn(this, (ElementorProFrontend.__proto__ || Object.getPrototypeOf(ElementorProFrontend)).apply(this, arguments));
	}

	_createClass(ElementorProFrontend, [{
		key: 'onInit',
		value: function onInit() {
			_get(ElementorProFrontend.prototype.__proto__ || Object.getPrototypeOf(ElementorProFrontend.prototype), 'onInit', this).call(this);

			this.config = ElementorProFrontendConfig;

			this.modules = {};
		}
	}, {
		key: 'bindEvents',
		value: function bindEvents() {
			jQuery(window).on('elementor/frontend/init', this.onElementorFrontendInit.bind(this));
		}
	}, {
		key: 'initModules',
		value: function initModules() {
			var _this2 = this;

			var handlers = {
				animatedText: __webpack_require__(113),
				carousel: __webpack_require__(115),
				countdown: __webpack_require__(117),
				form: __webpack_require__(119),
				gallery: _frontend8.default,
				linkActions: _frontend2.default,
				nav_menu: __webpack_require__(125),
				motionFX: _frontend6.default,
				popup: _frontend4.default,
				posts: __webpack_require__(127),
				share_buttons: __webpack_require__(129),
				slides: __webpack_require__(131),
				social: __webpack_require__(133),
				sticky: __webpack_require__(135),
				themeBuilder: __webpack_require__(136),
				themeElements: __webpack_require__(139),
				woocommerce: __webpack_require__(141)
			};

			jQuery.each(handlers, function (moduleName, ModuleClass) {
				_this2.modules[moduleName] = new ModuleClass();
			});
		}
	}, {
		key: 'onElementorFrontendInit',
		value: function onElementorFrontendInit() {
			this.initModules();
		}
	}]);

	return ElementorProFrontend;
}(elementorModules.ViewModule);

window.elementorProFrontend = new ElementorProFrontend();

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_elementorModules$Vie) {
	_inherits(_class, _elementorModules$Vie);

	function _class() {
		_classCallCheck(this, _class);

		return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	}

	_createClass(_class, [{
		key: 'getDefaultSettings',
		value: function getDefaultSettings() {
			return {
				selectors: {
					links: 'a[href^="#elementor-action"]'
				}
			};
		}
	}, {
		key: 'bindEvents',
		value: function bindEvents() {
			elementorFrontend.elements.$document.on('click', this.getSettings('selectors.links'), this.runLinkAction.bind(this));
		}
	}, {
		key: 'initActions',
		value: function initActions() {
			this.actions = {
				lightbox: function lightbox(settings) {
					return elementorFrontend.utils.lightbox.showModal(settings);
				}
			};
		}
	}, {
		key: 'addAction',
		value: function addAction(name, callback) {
			this.actions[name] = callback;
		}
	}, {
		key: 'runAction',
		value: function runAction(url) {
			url = decodeURIComponent(url);

			var actionMatch = url.match(/action=(.+?) /),
			    settingsMatch = url.match(/settings=(.+)/);

			if (!actionMatch) {
				return;
			}

			var action = this.actions[actionMatch[1]];

			if (!action) {
				return;
			}

			var settings = {};

			if (settingsMatch) {
				settings = JSON.parse(atob(settingsMatch[1]));
			}

			for (var _len = arguments.length, restArgs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
				restArgs[_key - 1] = arguments[_key];
			}

			action.apply(undefined, [settings].concat(restArgs));
		}
	}, {
		key: 'runLinkAction',
		value: function runLinkAction(event) {
			event.preventDefault();

			this.runAction(event.currentTarget.hash, event);
		}
	}, {
		key: 'runHashAction',
		value: function runHashAction() {
			if (location.hash) {
				this.runAction(location.hash);
			}
		}
	}, {
		key: 'onInit',
		value: function onInit() {
			_get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'onInit', this).call(this);

			this.initActions();

			// elementorFrontend.on( 'components:init', this.runHashAction.bind( this ) );
		}
	}]);

	return _class;
}(elementorModules.ViewModule);

exports.default = _class;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _document = __webpack_require__(88);

var _document2 = _interopRequireDefault(_document);

var _formsAction = __webpack_require__(104);

var _formsAction2 = _interopRequireDefault(_formsAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_elementorModules$Mod) {
	_inherits(_class, _elementorModules$Mod);

	function _class() {
		_classCallCheck(this, _class);

		var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

		elementorFrontend.hooks.addAction('elementor/frontend/documents-manager/init-classes', _this.addDocumentClass);

		elementorFrontend.hooks.addAction('frontend/element_ready/form.default', _formsAction2.default);

		elementorProFrontend.modules.linkActions.addAction('popup:open', _this.showPopup.bind(_this));

		elementorProFrontend.modules.linkActions.addAction('popup:close', _this.closePopup.bind(_this));

		if (!elementorFrontend.isEditMode() && !elementorFrontend.isWPPreviewMode()) {
			_this.setViewsAndSessions();
		}
		return _this;
	}

	_createClass(_class, [{
		key: 'addDocumentClass',
		value: function addDocumentClass(documentsManager) {
			documentsManager.addDocumentClass('popup', _document2.default);
		}
	}, {
		key: 'setViewsAndSessions',
		value: function setViewsAndSessions() {
			var pageViews = elementorFrontend.storage.get('pageViews') || 0;

			elementorFrontend.storage.set('pageViews', pageViews + 1);

			var activeSession = elementorFrontend.storage.get('activeSession', { session: true });

			if (!activeSession) {
				elementorFrontend.storage.set('activeSession', true, { session: true });

				var sessions = elementorFrontend.storage.get('sessions') || 0;

				elementorFrontend.storage.set('sessions', sessions + 1);
			}
		}
	}, {
		key: 'showPopup',
		value: function showPopup(settings) {
			var popup = elementorFrontend.documentsManager.documents[settings.id];

			if (!popup) {
				return;
			}

			var modal = popup.getModal();

			if (settings.toggle && modal.isVisible()) {
				modal.hide();
			} else {
				popup.showModal();
			}
		}
	}, {
		key: 'closePopup',
		value: function closePopup(settings, event) {
			var popupID = jQuery(event.target).parents('[data-elementor-type="popup"]').data('elementorId');

			if (!popupID) {
				return;
			}

			var document = elementorFrontend.documentsManager.documents[popupID];

			document.getModal().hide();

			if (settings.do_not_show_again) {
				document.disable();
			}
		}
	}]);

	return _class;
}(elementorModules.Module);

exports.default = _class;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _triggers = __webpack_require__(89);

var _triggers2 = _interopRequireDefault(_triggers);

var _timing = __webpack_require__(96);

var _timing2 = _interopRequireDefault(_timing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_elementorModules$fro) {
	_inherits(_class, _elementorModules$fro);

	function _class() {
		_classCallCheck(this, _class);

		return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	}

	_createClass(_class, [{
		key: 'bindEvents',
		value: function bindEvents() {
			var openSelector = this.getDocumentSettings('open_selector');

			if (openSelector) {
				elementorFrontend.elements.$body.on('click', openSelector, this.showModal.bind(this));
			}
		}
	}, {
		key: 'startTiming',
		value: function startTiming() {
			var timing = new _timing2.default(this.getDocumentSettings('timing'), this);

			if (timing.check()) {
				this.initTriggers();
			}
		}
	}, {
		key: 'initTriggers',
		value: function initTriggers() {
			this.triggers = new _triggers2.default(this.getDocumentSettings('triggers'), this);
		}
	}, {
		key: 'showModal',
		value: function showModal(avoidMultiple) {
			var settings = this.getDocumentSettings();

			if (!this.isEdit) {
				if (!elementorFrontend.isWPPreviewMode()) {
					if (this.getStorage('disable')) {
						return;
					}

					if (avoidMultiple && elementorProFrontend.modules.popup.popupPopped && settings.avoid_multiple_popups) {
						return;
					}
				}

				// A clean copy of the element without previous initializations and events
				this.$element = jQuery(this.elementHTML);

				this.elements.$elements = this.$element.find(this.getSettings('selectors.elements'));
			}

			var modal = this.getModal(),
			    $closeButton = modal.getElements('closeButton');

			modal.setMessage(this.$element).show();

			if (!this.isEdit) {
				if (settings.close_button_delay) {
					$closeButton.hide();

					clearTimeout(this.closeButtonTimeout);

					this.closeButtonTimeout = setTimeout(function () {
						return $closeButton.show();
					}, settings.close_button_delay * 1000);
				}

				_get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'runElementsHandlers', this).call(this);
			}

			this.setEntranceAnimation();

			if (!settings.timing || !settings.timing.times_count) {
				this.countTimes();
			}

			elementorProFrontend.modules.popup.popupPopped = true;
		}
	}, {
		key: 'setEntranceAnimation',
		value: function setEntranceAnimation() {
			var $widgetContent = this.getModal().getElements('widgetContent'),
			    settings = this.getDocumentSettings(),
			    newAnimation = elementorFrontend.getCurrentDeviceSetting(settings, 'entrance_animation');

			if (this.currentAnimation) {
				$widgetContent.removeClass(this.currentAnimation);
			}

			this.currentAnimation = newAnimation;

			if (!newAnimation) {
				return;
			}

			var animationDuration = settings.entrance_animation_duration.size;

			$widgetContent.addClass(newAnimation);

			setTimeout(function () {
				return $widgetContent.removeClass(newAnimation);
			}, animationDuration * 1000);
		}
	}, {
		key: 'setExitAnimation',
		value: function setExitAnimation() {
			var _this2 = this;

			var modal = this.getModal(),
			    settings = this.getDocumentSettings(),
			    $widgetContent = modal.getElements('widgetContent'),
			    newAnimation = elementorFrontend.getCurrentDeviceSetting(settings, 'exit_animation'),
			    animationDuration = newAnimation ? settings.entrance_animation_duration.size : 0;

			setTimeout(function () {
				if (newAnimation) {
					$widgetContent.removeClass(newAnimation + ' reverse');
				}

				if (!_this2.isEdit) {
					_this2.$element.remove();

					modal.getElements('widget').hide();
				}
			}, animationDuration * 1000);

			if (newAnimation) {
				$widgetContent.addClass(newAnimation + ' reverse');
			}
		}
	}, {
		key: 'initModal',
		value: function initModal() {
			var _this3 = this;

			var modal = void 0;

			this.getModal = function () {
				if (!modal) {
					var settings = _this3.getDocumentSettings(),
					    id = _this3.getSettings('id'),
					    triggerPopupEvent = function triggerPopupEvent(eventType) {
						return elementorFrontend.elements.$document.trigger('elementor/popup/' + eventType, id, _this3);
					};

					var classes = 'elementor-popup-modal';

					if (settings.classes) {
						classes += ' ' + settings.classes;
					}

					modal = elementorFrontend.getDialogsManager().createWidget('lightbox', {
						id: 'elementor-popup-modal-' + id,
						className: classes,
						closeButton: true,
						closeButtonClass: 'eicon-close',
						preventScroll: settings.prevent_scroll,
						onShow: function onShow() {
							return triggerPopupEvent('show');
						},
						onHide: function onHide() {
							return triggerPopupEvent('hide');
						},
						effects: {
							hide: function hide() {
								if (settings.timing && settings.timing.times_count) {
									_this3.countTimes();
								}

								_this3.setExitAnimation();
							},
							show: 'show'
						},
						hide: {
							auto: !!settings.close_automatically,
							autoDelay: settings.close_automatically * 1000,
							onBackgroundClick: !settings.prevent_close_on_background_click,
							onOutsideClick: !settings.prevent_close_on_background_click,
							onEscKeyPress: !settings.prevent_close_on_esc_key,
							ignore: '.flatpickr-calendar'
						},
						position: {
							enable: false
						}
					});

					modal.getElements('widgetContent').addClass('animated');

					var $closeButton = modal.getElements('closeButton');

					if (_this3.isEdit) {
						$closeButton.off('click');

						modal.hide = function () {};
					}

					_this3.setCloseButtonPosition();
				}

				return modal;
			};
		}
	}, {
		key: 'setCloseButtonPosition',
		value: function setCloseButtonPosition() {
			var modal = this.getModal(),
			    closeButtonPosition = this.getDocumentSettings('close_button_position'),
			    $closeButton = modal.getElements('closeButton');

			$closeButton.appendTo(modal.getElements('outside' === closeButtonPosition ? 'widget' : 'widgetContent'));
		}
	}, {
		key: 'disable',
		value: function disable() {
			this.setStorage('disable', true);
		}
	}, {
		key: 'setStorage',
		value: function setStorage(key, value, options) {
			elementorFrontend.storage.set('popup_' + this.getSettings('id') + '_' + key, value, options);
		}
	}, {
		key: 'getStorage',
		value: function getStorage(key, options) {
			return elementorFrontend.storage.get('popup_' + this.getSettings('id') + '_' + key, options);
		}
	}, {
		key: 'countTimes',
		value: function countTimes() {
			var displayTimes = this.getStorage('times') || 0;

			this.setStorage('times', displayTimes + 1);
		}
	}, {
		key: 'runElementsHandlers',
		value: function runElementsHandlers() {}
	}, {
		key: 'onInit',
		value: function onInit() {
			_get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'onInit', this).call(this);

			this.initModal();

			if (this.isEdit) {
				this.showModal();

				return;
			}

			this.$element.show().remove();

			this.elementHTML = this.$element[0].outerHTML;

			if (elementorFrontend.isEditMode()) {
				return;
			}

			if (elementorFrontend.isWPPreviewMode() && elementorFrontend.config.post.id === this.getSettings('id')) {
				this.showModal();

				return;
			}

			this.startTiming();
		}
	}, {
		key: 'onSettingsChange',
		value: function onSettingsChange(model) {
			var changedKey = Object.keys(model.changed)[0];

			if (-1 !== changedKey.indexOf('entrance_animation')) {
				this.setEntranceAnimation();
			}

			if ('exit_animation' === changedKey) {
				this.setExitAnimation();
			}

			if ('close_button_position' === changedKey) {
				this.setCloseButtonPosition();
			}
		}
	}]);

	return _class;
}(elementorModules.frontend.Document);

exports.default = _class;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pageLoad = __webpack_require__(90);

var _pageLoad2 = _interopRequireDefault(_pageLoad);

var _scrolling = __webpack_require__(91);

var _scrolling2 = _interopRequireDefault(_scrolling);

var _scrollingTo = __webpack_require__(92);

var _scrollingTo2 = _interopRequireDefault(_scrollingTo);

var _click = __webpack_require__(93);

var _click2 = _interopRequireDefault(_click);

var _inactivity = __webpack_require__(94);

var _inactivity2 = _interopRequireDefault(_inactivity);

var _exitIntent = __webpack_require__(95);

var _exitIntent2 = _interopRequireDefault(_exitIntent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_elementorModules$Mod) {
	_inherits(_class, _elementorModules$Mod);

	function _class(settings, document) {
		_classCallCheck(this, _class);

		var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, settings));

		_this.document = document;

		_this.triggers = [];

		_this.triggerClasses = {
			page_load: _pageLoad2.default,
			scrolling: _scrolling2.default,
			scrolling_to: _scrollingTo2.default,
			click: _click2.default,
			inactivity: _inactivity2.default,
			exit_intent: _exitIntent2.default
		};

		_this.runTriggers();
		return _this;
	}

	_createClass(_class, [{
		key: 'runTriggers',
		value: function runTriggers() {
			var _this2 = this;

			var settings = this.getSettings();

			jQuery.each(this.triggerClasses, function (key, TriggerClass) {
				if (!settings[key]) {
					return;
				}

				var trigger = new TriggerClass(settings, function () {
					return _this2.onTriggerFired();
				});

				trigger.run();

				_this2.triggers.push(trigger);
			});
		}
	}, {
		key: 'destroyTriggers',
		value: function destroyTriggers() {
			this.triggers.forEach(function (trigger) {
				return trigger.destroy();
			});

			this.triggers = [];
		}
	}, {
		key: 'onTriggerFired',
		value: function onTriggerFired() {
			this.document.showModal(true);

			this.destroyTriggers();
		}
	}]);

	return _class;
}(elementorModules.Module);

exports.default = _class;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(2);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_BaseTrigger) {
	_inherits(_class, _BaseTrigger);

	function _class() {
		_classCallCheck(this, _class);

		return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	}

	_createClass(_class, [{
		key: 'getName',
		value: function getName() {
			return 'page_load';
		}
	}, {
		key: 'run',
		value: function run() {
			this.timeout = setTimeout(this.callback, this.getTriggerSetting('delay') * 1000);
		}
	}, {
		key: 'destroy',
		value: function destroy() {
			clearTimeout(this.timeout);
		}
	}]);

	return _class;
}(_base2.default);

exports.default = _class;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(2);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_BaseTrigger) {
	_inherits(_class, _BaseTrigger);

	function _class() {
		var _ref;

		_classCallCheck(this, _class);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		var _this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args)));

		_this.checkScroll = _this.checkScroll.bind(_this);

		_this.lastScrollOffset = 0;
		return _this;
	}

	_createClass(_class, [{
		key: 'getName',
		value: function getName() {
			return 'scrolling';
		}
	}, {
		key: 'checkScroll',
		value: function checkScroll() {
			var scrollDirection = scrollY > this.lastScrollOffset ? 'down' : 'up',
			    requestedDirection = this.getTriggerSetting('direction');

			this.lastScrollOffset = scrollY;

			if (scrollDirection !== requestedDirection) {
				return;
			}

			if ('up' === scrollDirection) {
				this.callback();

				return;
			}

			var fullScroll = elementorFrontend.elements.$document.height() - innerHeight,
			    scrollPercent = scrollY / fullScroll * 100;

			if (scrollPercent >= this.getTriggerSetting('offset')) {
				this.callback();
			}
		}
	}, {
		key: 'run',
		value: function run() {
			elementorFrontend.elements.$window.on('scroll', this.checkScroll);
		}
	}, {
		key: 'destroy',
		value: function destroy() {
			elementorFrontend.elements.$window.off('scroll', this.checkScroll);
		}
	}]);

	return _class;
}(_base2.default);

exports.default = _class;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(2);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_BaseTrigger) {
	_inherits(_class, _BaseTrigger);

	function _class() {
		_classCallCheck(this, _class);

		return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	}

	_createClass(_class, [{
		key: 'getName',
		value: function getName() {
			return 'scrolling_to';
		}
	}, {
		key: 'run',
		value: function run() {
			var $targetElement = void 0;

			try {
				$targetElement = jQuery(this.getTriggerSetting('selector'));
			} catch (e) {
				return;
			}

			this.waypointInstance = elementorFrontend.waypoint($targetElement, this.callback)[0];
		}
	}, {
		key: 'destroy',
		value: function destroy() {
			if (this.waypointInstance) {
				this.waypointInstance.destroy();
			}
		}
	}]);

	return _class;
}(_base2.default);

exports.default = _class;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(2);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_BaseTrigger) {
	_inherits(_class, _BaseTrigger);

	function _class() {
		var _ref;

		_classCallCheck(this, _class);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		var _this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args)));

		_this.checkClick = _this.checkClick.bind(_this);

		_this.clicksCount = 0;
		return _this;
	}

	_createClass(_class, [{
		key: 'getName',
		value: function getName() {
			return 'click';
		}
	}, {
		key: 'checkClick',
		value: function checkClick() {
			this.clicksCount++;

			if (this.clicksCount === this.getTriggerSetting('times')) {
				this.callback();
			}
		}
	}, {
		key: 'run',
		value: function run() {
			elementorFrontend.elements.$body.on('click', this.checkClick);
		}
	}, {
		key: 'destroy',
		value: function destroy() {
			elementorFrontend.elements.$body.off('click', this.checkClick);
		}
	}]);

	return _class;
}(_base2.default);

exports.default = _class;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(2);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_BaseTrigger) {
	_inherits(_class, _BaseTrigger);

	function _class() {
		var _ref;

		_classCallCheck(this, _class);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		var _this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args)));

		_this.restartTimer = _this.restartTimer.bind(_this);
		return _this;
	}

	_createClass(_class, [{
		key: 'getName',
		value: function getName() {
			return 'inactivity';
		}
	}, {
		key: 'run',
		value: function run() {
			this.startTimer();

			elementorFrontend.elements.$document.on('keypress mousemove', this.restartTimer);
		}
	}, {
		key: 'startTimer',
		value: function startTimer() {
			this.timeOut = setTimeout(this.callback, this.getTriggerSetting('time') * 1000);
		}
	}, {
		key: 'clearTimer',
		value: function clearTimer() {
			clearTimeout(this.timeOut);
		}
	}, {
		key: 'restartTimer',
		value: function restartTimer() {
			this.clearTimer();

			this.startTimer();
		}
	}, {
		key: 'destroy',
		value: function destroy() {
			this.clearTimer();

			elementorFrontend.elements.$document.off('keypress mousemove', this.restartTimer);
		}
	}]);

	return _class;
}(_base2.default);

exports.default = _class;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(2);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_BaseTrigger) {
	_inherits(_class, _BaseTrigger);

	function _class() {
		var _ref;

		_classCallCheck(this, _class);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		var _this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args)));

		_this.detectExitIntent = _this.detectExitIntent.bind(_this);
		return _this;
	}

	_createClass(_class, [{
		key: 'getName',
		value: function getName() {
			return 'exit_intent';
		}
	}, {
		key: 'detectExitIntent',
		value: function detectExitIntent(event) {
			if (event.clientY <= 0) {
				this.callback();
			}
		}
	}, {
		key: 'run',
		value: function run() {
			elementorFrontend.elements.$window.on('mouseleave', this.detectExitIntent);
		}
	}, {
		key: 'destroy',
		value: function destroy() {
			elementorFrontend.elements.$window.off('mouseleave', this.detectExitIntent);
		}
	}]);

	return _class;
}(_base2.default);

exports.default = _class;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pageViews = __webpack_require__(97);

var _pageViews2 = _interopRequireDefault(_pageViews);

var _sessions = __webpack_require__(98);

var _sessions2 = _interopRequireDefault(_sessions);

var _url = __webpack_require__(99);

var _url2 = _interopRequireDefault(_url);

var _sources = __webpack_require__(100);

var _sources2 = _interopRequireDefault(_sources);

var _loggedIn = __webpack_require__(101);

var _loggedIn2 = _interopRequireDefault(_loggedIn);

var _devices = __webpack_require__(102);

var _devices2 = _interopRequireDefault(_devices);

var _times = __webpack_require__(103);

var _times2 = _interopRequireDefault(_times);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_elementorModules$Mod) {
	_inherits(_class, _elementorModules$Mod);

	function _class(settings, document) {
		_classCallCheck(this, _class);

		var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, settings));

		_this.document = document;

		_this.timingClasses = {
			page_views: _pageViews2.default,
			sessions: _sessions2.default,
			url: _url2.default,
			sources: _sources2.default,
			logged_in: _loggedIn2.default,
			devices: _devices2.default,
			times: _times2.default
		};
		return _this;
	}

	_createClass(_class, [{
		key: 'check',
		value: function check() {
			var _this2 = this;

			var settings = this.getSettings();

			var checkPassed = true;

			jQuery.each(this.timingClasses, function (key, TimingClass) {
				if (!settings[key]) {
					return;
				}

				var timing = new TimingClass(settings, _this2.document);

				if (!timing.check()) {
					checkPassed = false;
				}
			});

			return checkPassed;
		}
	}]);

	return _class;
}(elementorModules.Module);

exports.default = _class;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(0);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_BaseTiming) {
	_inherits(_class, _BaseTiming);

	function _class() {
		_classCallCheck(this, _class);

		return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	}

	_createClass(_class, [{
		key: 'getName',
		value: function getName() {
			return 'page_views';
		}
	}, {
		key: 'check',
		value: function check() {
			var pageViews = elementorFrontend.storage.get('pageViews'),
			    name = this.getName();

			var initialPageViews = this.document.getStorage(name + '_initialPageViews');

			if (!initialPageViews) {
				this.document.setStorage(name + '_initialPageViews', pageViews);

				initialPageViews = pageViews;
			}

			return pageViews - initialPageViews >= this.getTimingSetting('views');
		}
	}]);

	return _class;
}(_base2.default);

exports.default = _class;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(0);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_BaseTiming) {
	_inherits(_class, _BaseTiming);

	function _class() {
		_classCallCheck(this, _class);

		return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	}

	_createClass(_class, [{
		key: 'getName',
		value: function getName() {
			return 'sessions';
		}
	}, {
		key: 'check',
		value: function check() {
			var sessions = elementorFrontend.storage.get('sessions'),
			    name = this.getName();

			var initialSessions = this.document.getStorage(name + '_initialSessions');

			if (!initialSessions) {
				this.document.setStorage(name + '_initialSessions', sessions);

				initialSessions = sessions;
			}

			return sessions - initialSessions >= this.getTimingSetting('sessions');
		}
	}]);

	return _class;
}(_base2.default);

exports.default = _class;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(0);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_BaseTiming) {
	_inherits(_class, _BaseTiming);

	function _class() {
		_classCallCheck(this, _class);

		return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	}

	_createClass(_class, [{
		key: 'getName',
		value: function getName() {
			return 'url';
		}
	}, {
		key: 'check',
		value: function check() {
			var url = this.getTimingSetting('url'),
			    action = this.getTimingSetting('action'),
			    referrer = document.referrer;

			if ('regex' !== action) {
				return 'hide' === action ^ -1 !== referrer.indexOf(url);
			}

			var regexp = void 0;

			try {
				regexp = new RegExp(url);
			} catch (e) {
				return false;
			}

			return regexp.test(referrer);
		}
	}]);

	return _class;
}(_base2.default);

exports.default = _class;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(0);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_BaseTiming) {
	_inherits(_class, _BaseTiming);

	function _class() {
		_classCallCheck(this, _class);

		return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	}

	_createClass(_class, [{
		key: 'getName',
		value: function getName() {
			return 'sources';
		}
	}, {
		key: 'check',
		value: function check() {
			var sources = this.getTimingSetting('sources');

			if (3 === sources.length) {
				return true;
			}

			var referrer = document.referrer.replace(/https?:\/\/(?:www\.)?/, ''),
			    isInternal = 0 === referrer.indexOf(location.host.replace('www.', ''));

			if (isInternal) {
				return -1 !== sources.indexOf('internal');
			}

			if (-1 !== sources.indexOf('external')) {
				return true;
			}

			if (-1 !== sources.indexOf('search')) {
				return (/\.(google|yahoo|bing|yandex|baidu)\./.test(referrer)
				);
			}

			return false;
		}
	}]);

	return _class;
}(_base2.default);

exports.default = _class;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(0);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_BaseTiming) {
	_inherits(_class, _BaseTiming);

	function _class() {
		_classCallCheck(this, _class);

		return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	}

	_createClass(_class, [{
		key: 'getName',
		value: function getName() {
			return 'logged_in';
		}
	}, {
		key: 'check',
		value: function check() {
			var userConfig = elementorFrontend.config.user;

			if (!userConfig) {
				return true;
			}

			if ('all' === this.getTimingSetting('users')) {
				return false;
			}

			var userRolesInHideList = this.getTimingSetting('roles').filter(function (role) {
				return -1 !== userConfig.roles.indexOf(role);
			});

			return !userRolesInHideList.length;
		}
	}]);

	return _class;
}(_base2.default);

exports.default = _class;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(0);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_BaseTiming) {
	_inherits(_class, _BaseTiming);

	function _class() {
		_classCallCheck(this, _class);

		return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	}

	_createClass(_class, [{
		key: 'getName',
		value: function getName() {
			return 'devices';
		}
	}, {
		key: 'check',
		value: function check() {
			return -1 !== this.getTimingSetting('devices').indexOf(elementorFrontend.getCurrentDeviceMode());
		}
	}]);

	return _class;
}(_base2.default);

exports.default = _class;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(0);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_BaseTiming) {
	_inherits(_class, _BaseTiming);

	function _class() {
		_classCallCheck(this, _class);

		return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	}

	_createClass(_class, [{
		key: 'getName',
		value: function getName() {
			return 'times';
		}
	}, {
		key: 'check',
		value: function check() {
			var displayTimes = this.document.getStorage('times') || 0;

			return this.getTimingSetting('times') > displayTimes;
		}
	}]);

	return _class;
}(_base2.default);

exports.default = _class;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PopupFormActions = elementorModules.frontend.handlers.Base.extend({
	getDefaultSettings: function getDefaultSettings() {
		return {
			selectors: {
				form: '.elementor-form'
			}
		};
	},
	getDefaultElements: function getDefaultElements() {
		var selectors = this.getSettings('selectors'),
		    elements = {};

		elements.$form = this.$element.find(selectors.form);

		return elements;
	},
	bindEvents: function bindEvents() {
		this.elements.$form.on('submit_success', this.handleFormAction);
	},
	handleFormAction: function handleFormAction(event, response) {
		if ('undefined' === typeof response.data.popup) {
			return;
		}
		var popupSettings = response.data.popup;
		if ('open' === popupSettings.action) {
			return elementorProFrontend.modules.popup.showPopup(popupSettings);
		}
		setTimeout(function () {
			return elementorProFrontend.modules.popup.closePopup(popupSettings, event);
		}, 1000);
	}
});

module.exports = function ($scope) {
	new PopupFormActions({ $element: $scope });
};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _handler = __webpack_require__(106);

var _handler2 = _interopRequireDefault(_handler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_elementorModules$Mod) {
	_inherits(_class, _elementorModules$Mod);

	function _class() {
		_classCallCheck(this, _class);

		var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

		elementorFrontend.hooks.addAction('frontend/element_ready/global', function ($element) {
			elementorFrontend.elementsHandler.addHandler(_handler2.default, { $element: $element });
		});
		return _this;
	}

	return _class;
}(elementorModules.Module);

exports.default = _class;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _motionFx = __webpack_require__(107);

var _motionFx2 = _interopRequireDefault(_motionFx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_elementorModules$fro) {
	_inherits(_class, _elementorModules$fro);

	function _class() {
		_classCallCheck(this, _class);

		return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	}

	_createClass(_class, [{
		key: '__construct',
		value: function __construct() {
			var _get2;

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			(_get2 = _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), '__construct', this)).call.apply(_get2, [this].concat(args));

			this.toggle = elementorFrontend.debounce(this.toggle, 200);
		}
	}, {
		key: 'bindEvents',
		value: function bindEvents() {
			elementorFrontend.elements.$window.on('resize', this.toggle);
		}
	}, {
		key: 'unbindEvents',
		value: function unbindEvents() {
			elementorFrontend.elements.$window.off('resize', this.toggle);
		}
	}, {
		key: 'initEffects',
		value: function initEffects() {
			this.effects = {
				translateY: {
					interaction: 'scroll',
					actions: ['translateY']
				},
				translateX: {
					interaction: 'scroll',
					actions: ['translateX']
				},
				rotateZ: {
					interaction: 'scroll',
					actions: ['rotateZ']
				},
				scale: {
					interaction: 'scroll',
					actions: ['scale']
				},
				opacity: {
					interaction: 'scroll',
					actions: ['opacity']
				},
				blur: {
					interaction: 'scroll',
					actions: ['blur']
				},
				mouseTrack: {
					interaction: 'mouseMove',
					actions: ['translateXY']
				},
				tilt: {
					interaction: 'mouseMove',
					actions: ['tilt']
				}
			};
		}
	}, {
		key: 'prepareOptions',
		value: function prepareOptions(name) {
			var _this2 = this;

			var elementSettings = this.getElementSettings(),
			    type = 'motion_fx' === name ? 'element' : 'background',
			    interactions = {};

			jQuery.each(elementSettings, function (key, value) {
				var keyRegex = new RegExp('^' + name + '_(.+?)_effect'),
				    keyMatches = key.match(keyRegex);

				if (!keyMatches || !value) {
					return;
				}

				var options = {},
				    effectName = keyMatches[1];

				jQuery.each(elementSettings, function (subKey, subValue) {
					var subKeyRegex = new RegExp(name + '_' + effectName + '_(.+)'),
					    subKeyMatches = subKey.match(subKeyRegex);

					if (!subKeyMatches) {
						return;
					}

					var subFieldName = subKeyMatches[1];

					if ('effect' === subFieldName) {
						return;
					}

					if ('object' === (typeof subValue === 'undefined' ? 'undefined' : _typeof(subValue))) {
						subValue = Object.keys(subValue.sizes).length ? subValue.sizes : subValue.size;
					}

					options[subKeyMatches[1]] = subValue;
				});

				var effect = _this2.effects[effectName],
				    interactionName = effect.interaction;

				if (!interactions[interactionName]) {
					interactions[interactionName] = {};
				}

				effect.actions.forEach(function (action) {
					return interactions[interactionName][action] = options;
				});
			});

			var $element = this.$element,
			    $dimensionsElement = void 0;

			var elementType = this.getElementType();

			if ('element' === type && 'section' !== elementType) {
				$dimensionsElement = $element;

				var childElementSelector = void 0;

				if ('column' === elementType) {
					childElementSelector = '.elementor-column-wrap';
				} else {
					childElementSelector = '.elementor-widget-container';
				}

				$element = $element.find('> ' + childElementSelector);
			}

			var options = {
				type: type,
				interactions: interactions,
				$element: $element,
				$dimensionsElement: $dimensionsElement,
				refreshDimensions: this.isEdit,
				range: elementSettings[name + '_range'],
				classes: {
					element: 'elementor-motion-effects-element',
					parent: 'elementor-motion-effects-parent',
					backgroundType: 'elementor-motion-effects-element-type-background',
					container: 'elementor-motion-effects-container',
					layer: 'elementor-motion-effects-layer',
					perspective: 'elementor-motion-effects-perspective'
				}
			};

			if (!options.range && 'fixed' === this.getCurrentDeviceSetting('_position')) {
				options.range = 'page';
			}

			if ('background' === type && 'column' === this.getElementType()) {
				options.addBackgroundLayerTo = ' > .elementor-element-populated';
			}

			return options;
		}
	}, {
		key: 'activate',
		value: function activate(name) {
			var options = this.prepareOptions(name);

			if (jQuery.isEmptyObject(options.interactions)) {
				return;
			}

			this[name] = new _motionFx2.default(options);
		}
	}, {
		key: 'deactivate',
		value: function deactivate(name) {
			if (this[name]) {
				this[name].destroy();

				delete this[name];
			}
		}
	}, {
		key: 'toggle',
		value: function toggle() {
			var _this3 = this;

			var currentDeviceMode = elementorFrontend.getCurrentDeviceMode(),
			    elementSettings = this.getElementSettings();

			['motion_fx', 'background_motion_fx'].forEach(function (name) {
				var devices = elementSettings[name + '_devices'],
				    isCurrentModeActive = !devices || -1 !== devices.indexOf(currentDeviceMode);

				if (isCurrentModeActive && (elementSettings[name + '_motion_fx_scrolling'] || elementSettings[name + '_motion_fx_mouse'])) {
					if (_this3[name]) {
						_this3.refreshInstance(name);
					} else {
						_this3.activate(name);
					}
				} else {
					_this3.deactivate(name);
				}
			});
		}
	}, {
		key: 'refreshInstance',
		value: function refreshInstance(instanceName) {
			var instance = this[instanceName];

			if (!instance) {
				return;
			}

			var preparedOptions = this.prepareOptions(instanceName);

			instance.setSettings(preparedOptions);

			instance.refresh();
		}
	}, {
		key: 'onInit',
		value: function onInit() {
			_get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'onInit', this).call(this);

			this.initEffects();

			this.toggle();
		}
	}, {
		key: 'onElementChange',
		value: function onElementChange(propertyName) {
			var _this4 = this;

			if (/motion_fx_((scrolling)|(mouse)|(devices))$/.test(propertyName)) {
				this.toggle();

				return;
			}

			var propertyMatches = propertyName.match('.*?motion_fx');

			if (propertyMatches) {
				var instanceName = propertyMatches[0];

				this.refreshInstance(instanceName);

				if (!this[instanceName]) {
					this.activate(instanceName);
				}
			}

			if (/^_position/.test(propertyName)) {
				['motion_fx', 'background_motion_fx'].forEach(function (instanceName) {
					_this4.refreshInstance(instanceName);
				});
			}
		}
	}, {
		key: 'onDestroy',
		value: function onDestroy() {
			var _this5 = this;

			_get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'onDestroy', this).call(this);

			['motion_fx', 'background_motion_fx'].forEach(function (name) {
				_this5.deactivate(name);
			});
		}
	}]);

	return _class;
}(elementorModules.frontend.handlers.Base);

exports.default = _class;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _scroll = __webpack_require__(108);

var _scroll2 = _interopRequireDefault(_scroll);

var _mouseMove = __webpack_require__(109);

var _mouseMove2 = _interopRequireDefault(_mouseMove);

var _actions2 = __webpack_require__(110);

var _actions3 = _interopRequireDefault(_actions2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_elementorModules$Vie) {
	_inherits(_class, _elementorModules$Vie);

	function _class() {
		_classCallCheck(this, _class);

		return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	}

	_createClass(_class, [{
		key: 'getDefaultSettings',
		value: function getDefaultSettings() {
			return {
				type: 'element',
				$element: null,
				$dimensionsElement: null,
				addBackgroundLayerTo: null,
				interactions: {},
				refreshDimensions: false,
				range: 'viewport',
				classes: {
					element: 'motion-fx-element',
					parent: 'motion-fx-parent',
					backgroundType: 'motion-fx-element-type-background',
					container: 'motion-fx-container',
					layer: 'motion-fx-layer',
					perspective: 'motion-fx-perspective'
				}
			};
		}
	}, {
		key: 'bindEvents',
		value: function bindEvents() {
			this.onWindowResize = this.onWindowResize.bind(this);

			elementorFrontend.elements.$window.on('resize', this.onWindowResize);
		}
	}, {
		key: 'unbindEvents',
		value: function unbindEvents() {
			elementorFrontend.elements.$window.off('resize', this.onWindowResize);
		}
	}, {
		key: 'addBackgroundLayer',
		value: function addBackgroundLayer() {
			var settings = this.getSettings();

			this.elements.$motionFXContainer = jQuery('<div>', { class: settings.classes.container });

			this.elements.$motionFXLayer = jQuery('<div>', { class: settings.classes.layer });

			this.updateBackgroundLayerSize();

			this.elements.$motionFXContainer.prepend(this.elements.$motionFXLayer);

			var $addBackgroundLayerTo = settings.addBackgroundLayerTo ? this.$element.find(settings.addBackgroundLayerTo) : this.$element;

			$addBackgroundLayerTo.prepend(this.elements.$motionFXContainer);
		}
	}, {
		key: 'removeBackgroundLayer',
		value: function removeBackgroundLayer() {
			this.elements.$motionFXContainer.remove();
		}
	}, {
		key: 'updateBackgroundLayerSize',
		value: function updateBackgroundLayerSize() {
			var settings = this.getSettings(),
			    speed = {
				x: 0,
				y: 0
			},
			    mouseInteraction = settings.interactions.mouseMove,
			    scrollInteraction = settings.interactions.scroll;

			if (mouseInteraction && mouseInteraction.translateXY) {
				speed.x = mouseInteraction.translateXY.speed * 10;
				speed.y = mouseInteraction.translateXY.speed * 10;
			}

			if (scrollInteraction) {
				if (scrollInteraction.translateX) {
					speed.x = scrollInteraction.translateX.speed * 10;
				}

				if (scrollInteraction.translateY) {
					speed.y = scrollInteraction.translateY.speed * 10;
				}
			}

			this.elements.$motionFXLayer.css({
				width: 100 + speed.x + '%',
				height: 100 + speed.y + '%'
			});
		}
	}, {
		key: 'defineDimensions',
		value: function defineDimensions() {
			var $dimensionsElement = this.getSettings('$dimensionsElement') || this.$element,
			    elementOffset = $dimensionsElement.offset();

			var dimensions = {
				elementHeight: $dimensionsElement.outerHeight(),
				elementWidth: $dimensionsElement.outerWidth(),
				elementTop: elementOffset.top,
				elementLeft: elementOffset.left
			};

			dimensions.elementRange = dimensions.elementHeight + innerHeight;

			this.setSettings('dimensions', dimensions);

			if ('background' === this.getSettings('type')) {
				this.defineBackgroundLayerDimensions();
			}
		}
	}, {
		key: 'defineBackgroundLayerDimensions',
		value: function defineBackgroundLayerDimensions() {
			var dimensions = this.getSettings('dimensions');

			dimensions.layerHeight = this.elements.$motionFXLayer.height();
			dimensions.layerWidth = this.elements.$motionFXLayer.width();
			dimensions.movableX = dimensions.layerWidth - dimensions.elementWidth;
			dimensions.movableY = dimensions.layerHeight - dimensions.elementHeight;

			this.setSettings('dimensions', dimensions);
		}
	}, {
		key: 'initInteractionsTypes',
		value: function initInteractionsTypes() {
			this.interactionsTypes = {
				scroll: _scroll2.default,
				mouseMove: _mouseMove2.default
			};
		}
	}, {
		key: 'prepareSpecialActions',
		value: function prepareSpecialActions() {
			var settings = this.getSettings(),
			    hasTiltEffect = !!(settings.interactions.mouseMove && settings.interactions.mouseMove.tilt);

			this.elements.$parent.toggleClass(settings.classes.perspective, hasTiltEffect);
		}
	}, {
		key: 'cleanSpecialActions',
		value: function cleanSpecialActions() {
			var settings = this.getSettings();

			this.elements.$parent.removeClass(settings.classes.perspective);
		}
	}, {
		key: 'runInteractions',
		value: function runInteractions() {
			var _this2 = this;

			var settings = this.getSettings();

			this.prepareSpecialActions();

			jQuery.each(settings.interactions, function (interactionName, actions) {
				_this2.interactions[interactionName] = new _this2.interactionsTypes[interactionName]({
					motionFX: _this2,
					callback: function callback() {
						for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
							args[_key] = arguments[_key];
						}

						jQuery.each(actions, function (actionName, actionData) {
							var _actions;

							return (_actions = _this2.actions).runAction.apply(_actions, [actionName, actionData].concat(args));
						});
					}
				});

				_this2.interactions[interactionName].runImmediately();
			});
		}
	}, {
		key: 'destroyInteractions',
		value: function destroyInteractions() {
			this.cleanSpecialActions();

			jQuery.each(this.interactions, function (interactionName, interaction) {
				return interaction.destroy();
			});

			this.interactions = {};
		}
	}, {
		key: 'refresh',
		value: function refresh() {
			this.actions.setSettings(this.getSettings());

			if ('background' === this.getSettings('type')) {
				this.updateBackgroundLayerSize();

				this.defineBackgroundLayerDimensions();
			}

			this.actions.refresh();

			this.destroyInteractions();

			this.runInteractions();
		}
	}, {
		key: 'destroy',
		value: function destroy() {
			this.destroyInteractions();

			this.actions.refresh();

			var settings = this.getSettings();

			this.$element.removeClass(settings.classes.element);

			this.elements.$parent.removeClass(settings.classes.parent);

			if ('background' === settings.type) {
				this.$element.removeClass(settings.classes.backgroundType);

				this.removeBackgroundLayer();
			}
		}
	}, {
		key: 'onInit',
		value: function onInit() {
			_get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'onInit', this).call(this);

			var settings = this.getSettings();

			this.$element = settings.$element;

			this.elements.$parent = this.$element.parent();

			this.$element.addClass(settings.classes.element);

			this.elements.$parent = this.$element.parent();

			this.elements.$parent.addClass(settings.classes.parent);

			if ('background' === settings.type) {
				this.$element.addClass(settings.classes.backgroundType);

				this.addBackgroundLayer();
			}

			this.defineDimensions();

			settings.$targetElement = 'element' === settings.type ? this.$element : this.elements.$motionFXLayer;

			this.interactions = {};

			this.actions = new _actions3.default(settings);

			this.initInteractionsTypes();

			this.runInteractions();
		}
	}, {
		key: 'onWindowResize',
		value: function onWindowResize() {
			this.defineDimensions();
		}
	}]);

	return _class;
}(elementorModules.ViewModule);

exports.default = _class;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(8);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_BaseInteraction) {
	_inherits(_class, _BaseInteraction);

	function _class() {
		_classCallCheck(this, _class);

		return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	}

	_createClass(_class, [{
		key: 'run',
		value: function run() {
			if (pageYOffset === this.windowScrollTop) {
				return;
			}

			var motionFXSettings = this.motionFX.getSettings();

			if (motionFXSettings.refreshDimensions) {
				this.motionFX.defineDimensions();
			}

			this.windowScrollTop = pageYOffset;

			var passedRangePercents = void 0;

			if ('page' === this.motionFX.getSettings('range')) {
				passedRangePercents = document.documentElement.scrollTop / (document.body.scrollHeight - innerHeight) * 100;
			} else {
				var dimensions = motionFXSettings.dimensions,
				    elementTopWindowPoint = dimensions.elementTop - pageYOffset,
				    elementEntrancePoint = elementTopWindowPoint - innerHeight;

				passedRangePercents = 100 / dimensions.elementRange * (elementEntrancePoint * -1);
			}

			this.runCallback(passedRangePercents);
		}
	}]);

	return _class;
}(_base2.default);

exports.default = _class;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _base = __webpack_require__(8);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MouseMoveInteraction = function (_BaseInteraction) {
	_inherits(MouseMoveInteraction, _BaseInteraction);

	function MouseMoveInteraction() {
		_classCallCheck(this, MouseMoveInteraction);

		return _possibleConstructorReturn(this, (MouseMoveInteraction.__proto__ || Object.getPrototypeOf(MouseMoveInteraction)).apply(this, arguments));
	}

	_createClass(MouseMoveInteraction, [{
		key: 'bindEvents',
		value: function bindEvents() {
			if (!MouseMoveInteraction.mouseTracked) {
				elementorFrontend.elements.$window.on('mousemove', MouseMoveInteraction.updateMousePosition);

				MouseMoveInteraction.mouseTracked = true;
			}
		}
	}, {
		key: 'run',
		value: function run() {
			var mousePosition = MouseMoveInteraction.mousePosition,
			    oldMousePosition = this.oldMousePosition;

			if (oldMousePosition.x === mousePosition.x && oldMousePosition.y === mousePosition.y) {
				return;
			}

			this.oldMousePosition = {
				x: mousePosition.x,
				y: mousePosition.y
			};

			var passedPercentsX = 100 / innerWidth * mousePosition.x,
			    passedPercentsY = 100 / innerHeight * mousePosition.y;

			this.runCallback(passedPercentsX, passedPercentsY);
		}
	}, {
		key: 'onInit',
		value: function onInit() {
			this.oldMousePosition = {};

			_get(MouseMoveInteraction.prototype.__proto__ || Object.getPrototypeOf(MouseMoveInteraction.prototype), 'onInit', this).call(this);
		}
	}]);

	return MouseMoveInteraction;
}(_base2.default);

exports.default = MouseMoveInteraction;


MouseMoveInteraction.mousePosition = {};

MouseMoveInteraction.updateMousePosition = function (event) {
	MouseMoveInteraction.mousePosition = {
		x: event.clientX,
		y: event.clientY
	};
};

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_elementorModules$Mod) {
	_inherits(_class, _elementorModules$Mod);

	function _class() {
		_classCallCheck(this, _class);

		return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	}

	_createClass(_class, [{
		key: 'getMovePointFromPassedPercents',
		value: function getMovePointFromPassedPercents(movableRange, passedPercents) {
			var movePoint = passedPercents / movableRange * 100;

			return +movePoint.toFixed(2);
		}
	}, {
		key: 'getEffectValueFromMovePoint',
		value: function getEffectValueFromMovePoint(range, movePoint) {
			return range * movePoint / 100;
		}
	}, {
		key: 'getStep',
		value: function getStep(passedPercents, options) {
			if ('element' === this.getSettings('type')) {
				return this.getElementStep(passedPercents, options);
			}

			return this.getBackgroundStep(passedPercents, options);
		}
	}, {
		key: 'getElementStep',
		value: function getElementStep(passedPercents, options) {
			return -(passedPercents - 50) * options.speed;
		}
	}, {
		key: 'getBackgroundStep',
		value: function getBackgroundStep(passedPercents, options) {
			var movableRange = this.getSettings('dimensions.movable' + options.axis.toUpperCase());

			return -this.getEffectValueFromMovePoint(movableRange, passedPercents);
		}
	}, {
		key: 'getDirectionMovePoint',
		value: function getDirectionMovePoint(passedPercents, direction, range) {
			var movePoint = void 0;

			if (passedPercents < range.start) {
				if ('out-in' === direction) {
					movePoint = 0;
				} else if ('in-out' === direction) {
					movePoint = 100;
				} else {
					movePoint = this.getMovePointFromPassedPercents(range.start, passedPercents);

					if ('in-out-in' === direction) {
						movePoint = 100 - movePoint;
					}
				}
			} else if (passedPercents < range.end) {
				if ('in-out-in' === direction) {
					movePoint = 0;
				} else if ('out-in-out' === direction) {
					movePoint = 100;
				} else {
					movePoint = this.getMovePointFromPassedPercents(range.end - range.start, passedPercents - range.start);

					if ('in-out' === direction) {
						movePoint = 100 - movePoint;
					}
				}
			} else if ('in-out' === direction) {
				movePoint = 0;
			} else if ('out-in' === direction) {
				movePoint = 100;
			} else {
				movePoint = this.getMovePointFromPassedPercents(100 - range.end, 100 - passedPercents);

				if ('in-out-in' === direction) {
					movePoint = 100 - movePoint;
				}
			}

			return movePoint;
		}
	}, {
		key: 'translateX',
		value: function translateX(actionData, passedPercents) {
			actionData.axis = 'x';
			actionData.unit = 'px';

			this.transform('translateX', passedPercents, actionData);
		}
	}, {
		key: 'translateY',
		value: function translateY(actionData, passedPercents) {
			actionData.axis = 'y';
			actionData.unit = 'px';

			this.transform('translateY', passedPercents, actionData);
		}
	}, {
		key: 'translateXY',
		value: function translateXY(actionData, passedPercentsX, passedPercentsY) {
			this.translateX(actionData, passedPercentsX);

			this.translateY(actionData, passedPercentsY);
		}
	}, {
		key: 'tilt',
		value: function tilt(actionData, passedPercentsX, passedPercentsY) {
			var options = {
				speed: actionData.speed / 10,
				direction: actionData.direction
			};

			this.rotateX(options, passedPercentsY);

			this.rotateY(options, 100 - passedPercentsX);
		}
	}, {
		key: 'rotateX',
		value: function rotateX(actionData, passedPercents) {
			actionData.axis = 'x';
			actionData.unit = 'deg';

			this.transform('rotateX', passedPercents, actionData);
		}
	}, {
		key: 'rotateY',
		value: function rotateY(actionData, passedPercents) {
			actionData.axis = 'y';
			actionData.unit = 'deg';

			this.transform('rotateY', passedPercents, actionData);
		}
	}, {
		key: 'rotateZ',
		value: function rotateZ(actionData, passedPercents) {
			actionData.unit = 'deg';

			this.transform('rotateZ', passedPercents, actionData);
		}
	}, {
		key: 'scale',
		value: function scale(actionData, passedPercents) {
			var movePoint = this.getDirectionMovePoint(passedPercents, actionData.direction, actionData.range);

			this.updateRulePart('transform', 'scale', 1 + actionData.speed * movePoint / 1000);
		}
	}, {
		key: 'transform',
		value: function transform(action, passedPercents, actionData) {
			if (actionData.direction) {
				passedPercents = 100 - passedPercents;
			}

			this.updateRulePart('transform', action, this.getStep(passedPercents, actionData) + actionData.unit);
		}
	}, {
		key: 'opacity',
		value: function opacity(actionData, passedPercents) {
			var movePoint = this.getDirectionMovePoint(passedPercents, actionData.direction, actionData.range),
			    level = actionData.level / 10,
			    opacity = 1 - level + this.getEffectValueFromMovePoint(level, movePoint);

			this.$element.css('opacity', opacity);
		}
	}, {
		key: 'blur',
		value: function blur(actionData, passedPercents) {
			var movePoint = this.getDirectionMovePoint(passedPercents, actionData.direction, actionData.range),
			    blur = actionData.level - this.getEffectValueFromMovePoint(actionData.level, movePoint);

			this.updateRulePart('filter', 'blur', blur + 'px');
		}
	}, {
		key: 'updateRulePart',
		value: function updateRulePart(ruleName, key, value) {
			if (!this.rulesVariables[ruleName]) {
				this.rulesVariables[ruleName] = {};
			}

			if (!this.rulesVariables[ruleName][key]) {
				this.rulesVariables[ruleName][key] = true;

				this.updateRule(ruleName);
			}

			var cssVarKey = '--' + key;

			this.$element[0].style.setProperty(cssVarKey, value);
		}
	}, {
		key: 'updateRule',
		value: function updateRule(ruleName) {
			var value = '';

			jQuery.each(this.rulesVariables[ruleName], function (variableKey) {
				value += variableKey + '(var(--' + variableKey + '))';
			});

			this.$element.css(ruleName, value);
		}
	}, {
		key: 'runAction',
		value: function runAction(actionName, actionData, passedPercents) {
			if (actionData.affectedRange) {
				if (actionData.affectedRange.start > passedPercents) {
					passedPercents = actionData.affectedRange.start;
				}

				if (actionData.affectedRange.end < passedPercents) {
					passedPercents = actionData.affectedRange.end;
				}
			}

			for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
				args[_key - 3] = arguments[_key];
			}

			this[actionName].apply(this, [actionData, passedPercents].concat(args));
		}
	}, {
		key: 'refresh',
		value: function refresh() {
			this.rulesVariables = {};

			this.$element.css({
				transform: '',
				filter: '',
				opacity: ''
			});
		}
	}, {
		key: 'onInit',
		value: function onInit() {
			this.$element = this.getSettings('$targetElement');

			this.refresh();
		}
	}]);

	return _class;
}(elementorModules.Module);

exports.default = _class;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _handler = __webpack_require__(112);

var _handler2 = _interopRequireDefault(_handler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_elementorModules$Mod) {
	_inherits(_class, _elementorModules$Mod);

	function _class() {
		_classCallCheck(this, _class);

		var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

		elementorFrontend.hooks.addAction('frontend/element_ready/gallery.default', function ($element) {
			elementorFrontend.elementsHandler.addHandler(_handler2.default, { $element: $element });
		});
		return _this;
	}

	return _class;
}(elementorModules.Module);

exports.default = _class;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var galleryHandler = function (_elementorModules$fro) {
	_inherits(galleryHandler, _elementorModules$fro);

	function galleryHandler() {
		_classCallCheck(this, galleryHandler);

		return _possibleConstructorReturn(this, (galleryHandler.__proto__ || Object.getPrototypeOf(galleryHandler)).apply(this, arguments));
	}

	_createClass(galleryHandler, [{
		key: 'getDefaultSettings',
		value: function getDefaultSettings() {
			return {
				selectors: {
					container: '.elementor-gallery__container',
					galleryItems: '.e-gallery-item',
					galleryImages: '.e-gallery-image'
				},
				classes: {
					titles: 'elementor-gallery-title',
					activeTitle: 'elementor-item-active',
					galleryItemOverlayBG: 'elementor-gallery-item__overlay',
					galleryItemOverlayContent: 'elementor-gallery-item__content'
				}
			};
		}
	}, {
		key: 'getDefaultElements',
		value: function getDefaultElements() {
			var handlerSettings = this.getSettings();

			return {
				$container: this.$element.find(handlerSettings.selectors.container),
				$titles: this.$element.find('.' + handlerSettings.classes.titles)
			};
		}
	}, {
		key: 'getGallerySettings',
		value: function getGallerySettings() {
			var settings = this.getElementSettings(),
			    breakpoints = elementorFrontend.config.breakpoints,
			    breakPointSettings = {};

			breakPointSettings[breakpoints.lg - 1] = {
				horizontalGap: elementorFrontend.getDeviceSetting('tablet', settings, 'gap').size,
				verticalGap: elementorFrontend.getDeviceSetting('tablet', settings, 'gap').size,
				columns: elementorFrontend.getDeviceSetting('tablet', settings, 'columns')
			};

			breakPointSettings[breakpoints.md - 1] = {
				horizontalGap: elementorFrontend.getDeviceSetting('mobile', settings, 'gap').size,
				verticalGap: elementorFrontend.getDeviceSetting('mobile', settings, 'gap').size,
				columns: elementorFrontend.getDeviceSetting('mobile', settings, 'columns')
			};

			var desktopIdealRowHeight = elementorFrontend.getDeviceSetting('desktop', settings, 'ideal_row_height'),
			    tabletIdealRowHeight = elementorFrontend.getDeviceSetting('tablet', settings, 'ideal_row_height'),
			    mobileIdealRowHeight = elementorFrontend.getDeviceSetting('mobile', settings, 'ideal_row_height');

			breakPointSettings[breakpoints.lg - 1].idealRowHeight = tabletIdealRowHeight && tabletIdealRowHeight.size ? tabletIdealRowHeight.size : null;
			breakPointSettings[breakpoints.md - 1].idealRowHeight = mobileIdealRowHeight && mobileIdealRowHeight.size ? mobileIdealRowHeight.size : null;

			return {
				type: settings.gallery_layout,
				idealRowHeight: desktopIdealRowHeight && desktopIdealRowHeight.size ? desktopIdealRowHeight.size : null,
				container: this.elements.$container,
				columns: settings.columns,
				aspectRatio: settings.aspect_ratio,
				lastRow: 'normal',
				horizontalGap: elementorFrontend.getDeviceSetting('desktop', settings, 'gap').size,
				verticalGap: elementorFrontend.getDeviceSetting('desktop', settings, 'gap').size,
				animationDuration: settings.content_animation_duration,
				classesPrefix: 'e-gallery-',
				breakpoints: breakPointSettings,
				rtl: elementorFrontend.config.is_rtl
			};
		}
	}, {
		key: 'initGallery',
		value: function initGallery() {
			var gallerySettings = this.getGallerySettings();
			this.gallery = new EGallery(gallerySettings);
			this.appendAnimationClasses('all');
		}
	}, {
		key: 'appendAnimationClasses',
		value: function appendAnimationClasses(settingKey) {
			var settings = this.getElementSettings(),
			    classSettings = this.getSettings();

			if (settings.background_overlay_hover_animation || settings.content_hover_animation || settings.image_hover_animation) {
				this.$element.find(classSettings.selectors.galleryItems).addClass('elementor-animated-content');
			} else {
				this.$element.find(classSettings.selectors.galleryItems).removeClass('elementor-animated-content');
			}

			if ('background_overlay_hover_animation' === settingKey || 'all' === settingKey) {
				var $imageOverlay = this.$element.find('.' + classSettings.classes.galleryItemOverlayBG);

				$imageOverlay.removeClass(function (index, className) {
					return (className.match(/(^|\s)elementor-animated-item-\S+/g) || []).join(' ');
				});

				if ('' !== settings.background_overlay_hover_animation) {
					$imageOverlay.addClass('elementor-animated-item--' + settings.background_overlay_hover_animation);
				}
			}

			if ('content_hover_animation' === settingKey || 'content_sequenced_animation' === settingKey || 'all' === settingKey) {
				if ('yes' === settings.content_sequenced_animation) {
					this.$element.find('.' + classSettings.classes.galleryItemOverlayContent).addClass('elementor-gallery--sequenced-animation');
				} else {
					this.$element.find('.' + classSettings.classes.galleryItemOverlayContent).removeClass('elementor-gallery--sequenced-animation');
				}

				if ('content_sequenced_animation' === settingKey) {
					return;
				}

				var $contentElements = this.$element.find('.' + classSettings.classes.galleryItemOverlayContent).children();

				$contentElements.removeClass(function (index, className) {
					return (className.match(/(^|\s)elementor-animated-item-\S+/g) || []).join(' ');
				});

				if ('' !== settings.content_hover_animation) {
					$contentElements.addClass('elementor-animated-item--' + settings.content_hover_animation);
				}
			}

			if ('image_hover_animation' === settingKey || 'all' === settingKey) {
				var $galleryImages = this.$element.find(classSettings.selectors.galleryImages);

				$galleryImages.removeClass(function (index, className) {
					return (className.match(/(^|\s)elementor-animated-item-\S+/g) || []).join(' ');
				});

				if ('' !== settings.image_hover_animation) {
					$galleryImages.addClass('elementor-animated-item--' + settings.image_hover_animation);
				}
			}
		}
	}, {
		key: 'setGalleryTags',
		value: function setGalleryTags(id) {
			this.gallery.setSettings('tags', 'all' === id ? [] : ['' + id]);
		}
	}, {
		key: 'bindEvents',
		value: function bindEvents() {
			this.elements.$titles.on('click', this.galleriesNavigationListener.bind(this));
		}
	}, {
		key: 'galleriesNavigationListener',
		value: function galleriesNavigationListener(event) {
			var _this2 = this;

			var classes = this.getSettings('classes'),
			    clickedElement = jQuery(event.target);

			// Make sure no other gallery title has an active class
			this.elements.$titles.removeClass(classes.activeTitle);

			// Give the gallery being activated the active class
			clickedElement.addClass(classes.activeTitle);

			this.setGalleryTags(clickedElement.data('gallery-index'));

			var updateLightboxGroup = function updateLightboxGroup() {
				return _this2.setLightboxGalleryIndex(clickedElement.data('gallery-index'));
			};

			// Wait for the gallery to filter before grouping items for the Light-box
			setTimeout(updateLightboxGroup, 1000);
		}
	}, {
		key: 'setLightboxGalleryIndex',
		value: function setLightboxGalleryIndex() {
			var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'all';

			if ('all' === index) {
				return this.$element.find(this.getSettings().selectors.galleryItems).attr('data-elementor-lightbox-slideshow', 'all_' + this.getID());
			}
			this.$element.find(this.getSettings().selectors.galleryItems).not('.gallery-item--hidden').attr('data-elementor-lightbox-slideshow', index + '_' + this.getID());
		}
	}, {
		key: 'onInit',
		value: function onInit() {
			var _get2;

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			(_get2 = _get(galleryHandler.prototype.__proto__ || Object.getPrototypeOf(galleryHandler.prototype), 'onInit', this)).call.apply(_get2, [this].concat(args));

			this.initGallery();

			this.elements.$titles.first().trigger('click');

			if (elementorFrontend.isEditMode() && 1 <= this.$element.find('.elementor-widget-empty-icon').length) {
				this.$element.addClass('elementor-widget-empty');
			}
		}
	}, {
		key: 'onElementChange',
		value: function onElementChange(settingKey) {
			var _this3 = this;

			if (-1 !== ['background_overlay_hover_animation', 'content_hover_animation', 'image_hover_animation', 'content_sequenced_animation'].indexOf(settingKey)) {
				this.appendAnimationClasses(settingKey);
				return;
			}

			var settingsDictionary = {
				columns: ['columns'],
				columns_tablet: ['breakpoints.1024.columns'],
				columns_mobile: ['breakpoints.767.columns'],
				gap: ['horizontalGap', 'verticalGap'],
				gap_tablet: ['breakpoints.1024.horizontalGap', 'breakpoints.1024.verticalGap'],
				gap_mobile: ['breakpoints.767.horizontalGap', 'breakpoints.767.verticalGap'],
				aspect_ratio: ['aspectRatio'],
				ideal_row_height: ['idealRowHeight'],
				ideal_row_height_tablet: ['breakpoints.1024.idealRowHeight'],
				ideal_row_height_mobile: ['breakpoints.767.idealRowHeight']
			};

			var settingsToUpdate = settingsDictionary[settingKey];

			if (settingsToUpdate) {
				var gallerySettings = this.getGallerySettings();
				settingsToUpdate.forEach(function (settingToUpdate) {
					_this3.gallery.setSettings(settingToUpdate, _this3.getItems(gallerySettings, settingToUpdate));
				});
			}
		}
	}, {
		key: 'onDestroy',
		value: function onDestroy() {
			if (this.gallery) {
				this.gallery.destroy();
			}
		}
	}]);

	return galleryHandler;
}(elementorModules.frontend.handlers.Base);

exports.default = galleryHandler;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
    elementorFrontend.hooks.addAction('frontend/element_ready/animated-headline.default', __webpack_require__(114));
};

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var AnimatedHeadlineHandler = elementorModules.frontend.handlers.Base.extend({
	svgPaths: {
		circle: ['M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7'],
		underline_zigzag: ['M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9'],
		x: ['M497.4,23.9C301.6,40,155.9,80.6,4,144.4', 'M14.1,27.6c204.5,20.3,393.8,74,467.3,111.7'],
		strikethrough: ['M3,75h493.5'],
		curly: ['M3,146.1c17.1-8.8,33.5-17.8,51.4-17.8c15.6,0,17.1,18.1,30.2,18.1c22.9,0,36-18.6,53.9-18.6 c17.1,0,21.3,18.5,37.5,18.5c21.3,0,31.8-18.6,49-18.6c22.1,0,18.8,18.8,36.8,18.8c18.8,0,37.5-18.6,49-18.6c20.4,0,17.1,19,36.8,19 c22.9,0,36.8-20.6,54.7-18.6c17.7,1.4,7.1,19.5,33.5,18.8c17.1,0,47.2-6.5,61.1-15.6'],
		diagonal: ['M13.5,15.5c131,13.7,289.3,55.5,475,125.5'],
		double: ['M8.4,143.1c14.2-8,97.6-8.8,200.6-9.2c122.3-0.4,287.5,7.2,287.5,7.2', 'M8,19.4c72.3-5.3,162-7.8,216-7.8c54,0,136.2,0,267,7.8'],
		double_underline: ['M5,125.4c30.5-3.8,137.9-7.6,177.3-7.6c117.2,0,252.2,4.7,312.7,7.6', 'M26.9,143.8c55.1-6.1,126-6.3,162.2-6.1c46.5,0.2,203.9,3.2,268.9,6.4'],
		underline: ['M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7']
	},

	getDefaultSettings: function getDefaultSettings() {
		var settings = {
			animationDelay: 2500,
			//letters effect
			lettersDelay: 50,
			//typing effect
			typeLettersDelay: 150,
			selectionDuration: 500,
			//clip effect
			revealDuration: 600,
			revealAnimationDelay: 1500
		};

		settings.typeAnimationDelay = settings.selectionDuration + 800;

		settings.selectors = {
			headline: '.elementor-headline',
			dynamicWrapper: '.elementor-headline-dynamic-wrapper'
		};

		settings.classes = {
			dynamicText: 'elementor-headline-dynamic-text',
			dynamicLetter: 'elementor-headline-dynamic-letter',
			textActive: 'elementor-headline-text-active',
			textInactive: 'elementor-headline-text-inactive',
			letters: 'elementor-headline-letters',
			animationIn: 'elementor-headline-animation-in',
			typeSelected: 'elementor-headline-typing-selected'
		};

		return settings;
	},

	getDefaultElements: function getDefaultElements() {
		var selectors = this.getSettings('selectors');

		return {
			$headline: this.$element.find(selectors.headline),
			$dynamicWrapper: this.$element.find(selectors.dynamicWrapper)
		};
	},

	getNextWord: function getNextWord($word) {
		return $word.is(':last-child') ? $word.parent().children().eq(0) : $word.next();
	},

	switchWord: function switchWord($oldWord, $newWord) {
		$oldWord.removeClass('elementor-headline-text-active').addClass('elementor-headline-text-inactive');

		$newWord.removeClass('elementor-headline-text-inactive').addClass('elementor-headline-text-active');
	},

	singleLetters: function singleLetters() {
		var classes = this.getSettings('classes');

		this.elements.$dynamicText.each(function () {
			var $word = jQuery(this),
			    letters = $word.text().split(''),
			    isActive = $word.hasClass(classes.textActive);

			$word.empty();

			letters.forEach(function (letter) {
				var $letter = jQuery('<span>', { class: classes.dynamicLetter }).text(letter);

				if (isActive) {
					$letter.addClass(classes.animationIn);
				}

				$word.append($letter);
			});

			$word.css('opacity', 1);
		});
	},

	showLetter: function showLetter($letter, $word, bool, duration) {
		var self = this,
		    classes = this.getSettings('classes');

		$letter.addClass(classes.animationIn);

		if (!$letter.is(':last-child')) {
			setTimeout(function () {
				self.showLetter($letter.next(), $word, bool, duration);
			}, duration);
		} else if (!bool) {
			setTimeout(function () {
				self.hideWord($word);
			}, self.getSettings('animationDelay'));
		}
	},

	hideLetter: function hideLetter($letter, $word, bool, duration) {
		var self = this,
		    settings = this.getSettings();

		$letter.removeClass(settings.classes.animationIn);

		if (!$letter.is(':last-child')) {
			setTimeout(function () {
				self.hideLetter($letter.next(), $word, bool, duration);
			}, duration);
		} else if (bool) {
			setTimeout(function () {
				self.hideWord(self.getNextWord($word));
			}, self.getSettings('animationDelay'));
		}
	},

	showWord: function showWord($word, $duration) {
		var self = this,
		    settings = self.getSettings(),
		    animationType = self.getElementSettings('animation_type');

		if ('typing' === animationType) {
			self.showLetter($word.find('.' + settings.classes.dynamicLetter).eq(0), $word, false, $duration);

			$word.addClass(settings.classes.textActive).removeClass(settings.classes.textInactive);
		} else if ('clip' === animationType) {
			self.elements.$dynamicWrapper.animate({ width: $word.width() + 10 }, settings.revealDuration, function () {
				setTimeout(function () {
					self.hideWord($word);
				}, settings.revealAnimationDelay);
			});
		}
	},

	hideWord: function hideWord($word) {
		var self = this,
		    settings = self.getSettings(),
		    classes = settings.classes,
		    letterSelector = '.' + classes.dynamicLetter,
		    animationType = self.getElementSettings('animation_type'),
		    nextWord = self.getNextWord($word);

		if ('typing' === animationType) {
			self.elements.$dynamicWrapper.addClass(classes.typeSelected);

			setTimeout(function () {
				self.elements.$dynamicWrapper.removeClass(classes.typeSelected);

				$word.addClass(settings.classes.textInactive).removeClass(classes.textActive).children(letterSelector).removeClass(classes.animationIn);
			}, settings.selectionDuration);
			setTimeout(function () {
				self.showWord(nextWord, settings.typeLettersDelay);
			}, settings.typeAnimationDelay);
		} else if (self.elements.$headline.hasClass(classes.letters)) {
			var bool = $word.children(letterSelector).length >= nextWord.children(letterSelector).length;

			self.hideLetter($word.find(letterSelector).eq(0), $word, bool, settings.lettersDelay);

			self.showLetter(nextWord.find(letterSelector).eq(0), nextWord, bool, settings.lettersDelay);
		} else if ('clip' === animationType) {
			self.elements.$dynamicWrapper.animate({ width: '2px' }, settings.revealDuration, function () {
				self.switchWord($word, nextWord);
				self.showWord(nextWord);
			});
		} else {
			self.switchWord($word, nextWord);

			setTimeout(function () {
				self.hideWord(nextWord);
			}, settings.animationDelay);
		}
	},

	animateHeadline: function animateHeadline() {
		var self = this,
		    animationType = self.getElementSettings('animation_type'),
		    $dynamicWrapper = self.elements.$dynamicWrapper;

		if ('clip' === animationType) {
			$dynamicWrapper.width($dynamicWrapper.width() + 10);
		} else if ('typing' !== animationType) {
			//assign to .elementor-headline-dynamic-wrapper the width of its longest word
			var width = 0;

			self.elements.$dynamicText.each(function () {
				var wordWidth = jQuery(this).width();

				if (wordWidth > width) {
					width = wordWidth;
				}
			});

			$dynamicWrapper.css('width', width);
		}

		//trigger animation
		setTimeout(function () {
			self.hideWord(self.elements.$dynamicText.eq(0));
		}, self.getSettings('animationDelay'));
	},

	getSvgPaths: function getSvgPaths(pathName) {
		var pathsInfo = this.svgPaths[pathName],
		    $paths = jQuery();

		pathsInfo.forEach(function (pathInfo) {
			$paths = $paths.add(jQuery('<path>', { d: pathInfo }));
		});

		return $paths;
	},

	fillWords: function fillWords() {
		var elementSettings = this.getElementSettings(),
		    classes = this.getSettings('classes'),
		    $dynamicWrapper = this.elements.$dynamicWrapper;

		if ('rotate' === elementSettings.headline_style) {
			var rotatingText = (elementSettings.rotating_text || '').split('\n');

			rotatingText.forEach(function (word, index) {
				var $dynamicText = jQuery('<span>', { class: classes.dynamicText }).html(word.replace(/ /g, '&nbsp;'));

				if (!index) {
					$dynamicText.addClass(classes.textActive);
				}

				$dynamicWrapper.append($dynamicText);
			});
		} else {
			var $dynamicText = jQuery('<span>', { class: classes.dynamicText + ' ' + classes.textActive }).text(elementSettings.highlighted_text),
			    $svg = jQuery('<svg>', {
				xmlns: 'http://www.w3.org/2000/svg',
				viewBox: '0 0 500 150',
				preserveAspectRatio: 'none'
			}).html(this.getSvgPaths(elementSettings.marker));

			$dynamicWrapper.append($dynamicText, $svg[0].outerHTML);
		}

		this.elements.$dynamicText = $dynamicWrapper.children('.' + classes.dynamicText);
	},

	rotateHeadline: function rotateHeadline() {
		var settings = this.getSettings();

		//insert <span> for each letter of a changing word
		if (this.elements.$headline.hasClass(settings.classes.letters)) {
			this.singleLetters();
		}

		//initialise headline animation
		this.animateHeadline();
	},

	initHeadline: function initHeadline() {
		if ('rotate' === this.getElementSettings('headline_style')) {
			this.rotateHeadline();
		}
	},

	onInit: function onInit() {
		elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);

		this.fillWords();

		this.initHeadline();
	}
});

module.exports = function ($scope) {
	new AnimatedHeadlineHandler({ $element: $scope });
};

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	elementorFrontend.hooks.addAction('frontend/element_ready/media-carousel.default', __webpack_require__(116));
	elementorFrontend.hooks.addAction('frontend/element_ready/testimonial-carousel.default', __webpack_require__(10));
	elementorFrontend.hooks.addAction('frontend/element_ready/reviews.default', __webpack_require__(10));
};

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Base = __webpack_require__(9),
    MediaCarousel;

MediaCarousel = Base.extend({

	slideshowSpecialElementSettings: ['slides_per_view', 'slides_per_view_tablet', 'slides_per_view_mobile'],

	isSlideshow: function isSlideshow() {
		return 'slideshow' === this.getElementSettings('skin');
	},

	getDefaultSettings: function getDefaultSettings() {
		var defaultSettings = Base.prototype.getDefaultSettings.apply(this, arguments);

		if (this.isSlideshow()) {
			defaultSettings.selectors.thumbsSwiper = '.elementor-thumbnails-swiper';

			defaultSettings.slidesPerView = {
				desktop: 5,
				tablet: 4,
				mobile: 3
			};
		}

		return defaultSettings;
	},

	getElementSettings: function getElementSettings(setting) {
		if (-1 !== this.slideshowSpecialElementSettings.indexOf(setting) && this.isSlideshow()) {
			setting = 'slideshow_' + setting;
		}

		return Base.prototype.getElementSettings.call(this, setting);
	},

	getDefaultElements: function getDefaultElements() {
		var selectors = this.getSettings('selectors'),
		    defaultElements = Base.prototype.getDefaultElements.apply(this, arguments);

		if (this.isSlideshow()) {
			defaultElements.$thumbsSwiper = this.$element.find(selectors.thumbsSwiper);
		}

		return defaultElements;
	},

	getEffect: function getEffect() {
		if ('coverflow' === this.getElementSettings('skin')) {
			return 'coverflow';
		}

		return Base.prototype.getEffect.apply(this, arguments);
	},

	getSlidesPerView: function getSlidesPerView(device) {
		if (this.isSlideshow()) {
			return 1;
		}

		if ('coverflow' === this.getElementSettings('skin')) {
			return this.getDeviceSlidesPerView(device);
		}

		return Base.prototype.getSlidesPerView.apply(this, arguments);
	},

	getSwiperOptions: function getSwiperOptions() {
		var options = Base.prototype.getSwiperOptions.apply(this, arguments);

		if (this.isSlideshow()) {
			options.loopedSlides = this.getSlidesCount();

			delete options.pagination;
			delete options.breakpoints;
		}

		return options;
	},

	onInit: function onInit() {
		Base.prototype.onInit.apply(this, arguments);

		var slidesCount = this.getSlidesCount();

		if (!this.isSlideshow() || 1 >= slidesCount) {
			return;
		}

		var elementSettings = this.getElementSettings(),
		    loop = 'yes' === elementSettings.loop,
		    breakpointsSettings = {},
		    breakpoints = elementorFrontend.config.breakpoints,
		    desktopSlidesPerView = this.getDeviceSlidesPerView('desktop');

		breakpointsSettings[breakpoints.lg - 1] = {
			slidesPerView: this.getDeviceSlidesPerView('tablet'),
			spaceBetween: this.getSpaceBetween('tablet')
		};

		breakpointsSettings[breakpoints.md - 1] = {
			slidesPerView: this.getDeviceSlidesPerView('mobile'),
			spaceBetween: this.getSpaceBetween('mobile')
		};

		var thumbsSliderOptions = {
			slidesPerView: desktopSlidesPerView,
			initialSlide: this.getInitialSlide(),
			centeredSlides: elementSettings.centered_slides,
			slideToClickedSlide: true,
			spaceBetween: this.getSpaceBetween(),
			loopedSlides: slidesCount,
			loop: loop,
			breakpoints: breakpointsSettings
		};

		this.swipers.main.controller.control = this.swipers.thumbs = new Swiper(this.elements.$thumbsSwiper, thumbsSliderOptions);

		this.swipers.thumbs.controller.control = this.swipers.main;
	},

	onElementChange: function onElementChange(propertyName) {
		if (1 >= this.getSlidesCount()) {
			return;
		}

		if (!this.isSlideshow()) {
			Base.prototype.onElementChange.apply(this, arguments);

			return;
		}

		if (0 === propertyName.indexOf('width')) {
			this.swipers.main.update();
			this.swipers.thumbs.update();
		}

		if (0 === propertyName.indexOf('space_between')) {
			this.updateSpaceBetween(this.swipers.thumbs, propertyName);
		}
	}
});

module.exports = function ($scope) {
	new MediaCarousel({ $element: $scope });
};

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	elementorFrontend.hooks.addAction('frontend/element_ready/countdown.default', __webpack_require__(118));
};

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CountDown = elementorModules.frontend.handlers.Base.extend({

	cache: null,

	cacheElements: function cacheElements() {
		var $countDown = this.$element.find('.elementor-countdown-wrapper');

		this.cache = {
			$countDown: $countDown,
			timeInterval: null,
			elements: {
				$countdown: $countDown.find('.elementor-countdown-wrapper'),
				$daysSpan: $countDown.find('.elementor-countdown-days'),
				$hoursSpan: $countDown.find('.elementor-countdown-hours'),
				$minutesSpan: $countDown.find('.elementor-countdown-minutes'),
				$secondsSpan: $countDown.find('.elementor-countdown-seconds'),
				$expireMessage: $countDown.parent().find('.elementor-countdown-expire--message')
			},
			data: {
				id: this.$element.data('id'),
				endTime: new Date($countDown.data('date') * 1000),
				actions: $countDown.data('expire-actions'),
				evergreenInterval: $countDown.data('evergreen-interval')
			}
		};
	},

	onInit: function onInit() {
		elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);

		this.cacheElements();

		if (0 < this.cache.data.evergreenInterval) {
			this.cache.data.endTime = this.getEvergreenDate();
		}

		this.initializeClock();
	},

	updateClock: function updateClock() {
		var self = this,
		    timeRemaining = this.getTimeRemaining(this.cache.data.endTime);

		jQuery.each(timeRemaining.parts, function (timePart) {
			var $element = self.cache.elements['$' + timePart + 'Span'];
			var partValue = this.toString();

			if (1 === partValue.length) {
				partValue = 0 + partValue;
			}

			if ($element.length) {
				$element.text(partValue);
			}
		});

		if (timeRemaining.total <= 0) {
			clearInterval(this.cache.timeInterval);
			this.runActions();
		}
	},

	initializeClock: function initializeClock() {
		var self = this;
		this.updateClock();

		this.cache.timeInterval = setInterval(function () {
			self.updateClock();
		}, 1000);
	},

	runActions: function runActions() {
		var self = this;

		// Trigger general event for 3rd patry actions
		self.$element.trigger('countdown_expire', self.$element);

		if (!this.cache.data.actions) {
			return;
		}

		this.cache.data.actions.forEach(function (action) {
			switch (action.type) {
				case 'hide':
					self.cache.$countDown.hide();
					break;
				case 'redirect':
					if (action.redirect_url) {
						window.location.href = action.redirect_url;
					}
					break;
				case 'message':
					self.cache.elements.$expireMessage.show();
					break;
			}
		});
	},

	getTimeRemaining: function getTimeRemaining(endTime) {
		var timeRemaining = endTime - new Date();
		var seconds = Math.floor(timeRemaining / 1000 % 60),
		    minutes = Math.floor(timeRemaining / 1000 / 60 % 60),
		    hours = Math.floor(timeRemaining / (1000 * 60 * 60) % 24),
		    days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

		if (days < 0 || hours < 0 || minutes < 0) {
			seconds = minutes = hours = days = 0;
		}

		return {
			total: timeRemaining,
			parts: {
				days: days,
				hours: hours,
				minutes: minutes,
				seconds: seconds
			}
		};
	},

	getEvergreenDate: function getEvergreenDate() {
		var self = this,
		    id = this.cache.data.id,
		    interval = this.cache.data.evergreenInterval,
		    dueDateKey = id + '-evergreen_due_date',
		    intervalKey = id + '-evergreen_interval',
		    localData = {
			dueDate: localStorage.getItem(dueDateKey),
			interval: localStorage.getItem(intervalKey)
		},
		    initEvergreen = function initEvergreen() {
			var evergreenDueDate = new Date();
			self.cache.data.endTime = evergreenDueDate.setSeconds(evergreenDueDate.getSeconds() + interval);
			localStorage.setItem(dueDateKey, self.cache.data.endTime);
			localStorage.setItem(intervalKey, interval);
			return self.cache.data.endTime;
		};

		if (null === localData.dueDate && null === localData.interval) {
			return initEvergreen();
		}

		if (null !== localData.dueDate && interval !== parseInt(localData.interval, 10)) {
			return initEvergreen();
		}

		if (localData.dueDate > 0 && parseInt(localData.interval, 10) === interval) {
			return localData.dueDate;
		}
	}
});

module.exports = function ($scope) {
	new CountDown({ $element: $scope });
};

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	elementorFrontend.hooks.addAction('frontend/element_ready/form.default', __webpack_require__(11));
	elementorFrontend.hooks.addAction('frontend/element_ready/subscribe.default', __webpack_require__(11));

	elementorFrontend.hooks.addAction('frontend/element_ready/form.default', __webpack_require__(122));

	elementorFrontend.hooks.addAction('frontend/element_ready/form.default', __webpack_require__(123));
	elementorFrontend.hooks.addAction('frontend/element_ready/form.default', __webpack_require__(124));
};

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = elementorModules.frontend.handlers.Base.extend({

	getDefaultSettings: function getDefaultSettings() {
		return {
			selectors: {
				form: '.elementor-form',
				submitButton: '[type="submit"]'
			},
			action: 'elementor_pro_forms_send_form',
			ajaxUrl: elementorProFrontend.config.ajaxurl
		};
	},

	getDefaultElements: function getDefaultElements() {
		var selectors = this.getSettings('selectors'),
		    elements = {};

		elements.$form = this.$element.find(selectors.form);
		elements.$submitButton = elements.$form.find(selectors.submitButton);

		return elements;
	},

	bindEvents: function bindEvents() {
		this.elements.$form.on('submit', this.handleSubmit);
		var $fileInput = this.elements.$form.find('input[type=file]');
		if ($fileInput.length) {
			$fileInput.on('change', this.validateFileSize);
		}
	},

	validateFileSize: function validateFileSize(event) {
		var _this = this;

		var $field = jQuery(event.currentTarget),
		    files = $field[0].files;

		if (!files.length) {
			return;
		}

		var maxSize = parseInt($field.attr('data-maxsize')) * 1024 * 1024,
		    maxSizeMessage = $field.attr('data-maxsize-message');

		var filesArray = Array.prototype.slice.call(files);
		filesArray.forEach(function (file) {
			if (maxSize < file.size) {
				$field.parent().addClass('elementor-error').append('<span class="elementor-message elementor-message-danger elementor-help-inline elementor-form-help-inline" role="alert">' + maxSizeMessage + '</span>').find(':input').attr('aria-invalid', 'true');

				_this.elements.$form.trigger('error');
			}
		});
	},

	beforeSend: function beforeSend() {
		var $form = this.elements.$form;

		$form.animate({
			opacity: '0.45'
		}, 500).addClass('elementor-form-waiting');

		$form.find('.elementor-message').remove();

		$form.find('.elementor-error').removeClass('elementor-error');

		$form.find('div.elementor-field-group').removeClass('error').find('span.elementor-form-help-inline').remove().end().find(':input').attr('aria-invalid', 'false');

		this.elements.$submitButton.attr('disabled', 'disabled').find('> span').prepend('<span class="elementor-button-text elementor-form-spinner"><i class="fa fa-spinner fa-spin"></i>&nbsp;</span>');
	},

	getFormData: function getFormData() {
		var formData = new FormData(this.elements.$form[0]);
		formData.append('action', this.getSettings('action'));
		formData.append('referrer', location.toString());

		return formData;
	},

	onSuccess: function onSuccess(response) {
		var $form = this.elements.$form;

		this.elements.$submitButton.removeAttr('disabled').find('.elementor-form-spinner').remove();

		$form.animate({
			opacity: '1'
		}, 100).removeClass('elementor-form-waiting');

		if (!response.success) {
			if (response.data.errors) {
				jQuery.each(response.data.errors, function (key, title) {
					$form.find('#form-field-' + key).parent().addClass('elementor-error').append('<span class="elementor-message elementor-message-danger elementor-help-inline elementor-form-help-inline" role="alert">' + title + '</span>').find(':input').attr('aria-invalid', 'true');
				});

				$form.trigger('error');
			}
			$form.append('<div class="elementor-message elementor-message-danger" role="alert">' + response.data.message + '</div>');
		} else {
			$form.trigger('submit_success', response.data);

			// For actions like redirect page
			$form.trigger('form_destruct', response.data);

			$form.trigger('reset');

			if ('undefined' !== typeof response.data.message && '' !== response.data.message) {
				$form.append('<div class="elementor-message elementor-message-success" role="alert">' + response.data.message + '</div>');
			}
		}
	},

	onError: function onError(xhr, desc) {
		var $form = this.elements.$form;

		$form.append('<div class="elementor-message elementor-message-danger" role="alert">' + desc + '</div>');

		this.elements.$submitButton.html(this.elements.$submitButton.text()).removeAttr('disabled');

		$form.animate({
			opacity: '1'
		}, 100).removeClass('elementor-form-waiting');

		$form.trigger('error');
	},

	handleSubmit: function handleSubmit(event) {
		var self = this,
		    $form = this.elements.$form;

		event.preventDefault();

		if ($form.hasClass('elementor-form-waiting')) {
			return false;
		}

		this.beforeSend();

		jQuery.ajax({
			url: self.getSettings('ajaxUrl'),
			type: 'POST',
			dataType: 'json',
			data: self.getFormData(),
			processData: false,
			contentType: false,
			success: self.onSuccess,
			error: self.onError
		});
	}
});

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = elementorModules.frontend.handlers.Base.extend({
	getDefaultSettings: function getDefaultSettings() {
		return {
			selectors: {
				form: '.elementor-form'
			}
		};
	},

	getDefaultElements: function getDefaultElements() {
		var selectors = this.getSettings('selectors'),
		    elements = {};

		elements.$form = this.$element.find(selectors.form);

		return elements;
	},

	bindEvents: function bindEvents() {
		this.elements.$form.on('form_destruct', this.handleSubmit);
	},

	handleSubmit: function handleSubmit(event, response) {
		if ('undefined' !== typeof response.data.redirect_url) {
			location.href = response.data.redirect_url;
		}
	}
});

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function ($scope) {
	var $element = $scope.find('.elementor-g-recaptcha:last');
	var captchaIds = [];

	if (!$element.length) {
		return;
	}

	var addRecaptcha = function addRecaptcha($elementRecaptcha) {
		var $form = $elementRecaptcha.parents('form'),
		    settings = $elementRecaptcha.data(),
		    isV2 = 'v3' !== settings.type;

		captchaIds.forEach(function (id) {
			return grecaptcha.reset(id);
		});
		var widgetId = grecaptcha.render($elementRecaptcha[0], settings);
		$form.on('reset error', function () {
			grecaptcha.reset(widgetId);
		});
		if (isV2) {
			$elementRecaptcha.data('widgetId', widgetId);
		} else {
			captchaIds.push(widgetId);
			$form.find('button[type="submit"]').on('click', function (e) {
				e.preventDefault();
				grecaptcha.ready(function () {
					grecaptcha.execute(widgetId, { action: $elementRecaptcha.data('action') }).then(function (token) {
						$form.find('[name="g-recaptcha-response"]').remove();
						$form.append(jQuery('<input>', {
							type: 'hidden',
							value: token,
							name: 'g-recaptcha-response'
						}));
						$form.submit();
					});
				});
			});
		}
	};

	var onRecaptchaApiReady = function onRecaptchaApiReady(callback) {
		if (window.grecaptcha && window.grecaptcha.render) {
			callback();
		} else {
			// If not ready check again by timeout..
			setTimeout(function () {
				onRecaptchaApiReady(callback);
			}, 350);
		}
	};

	onRecaptchaApiReady(function () {
		addRecaptcha($element);
	});
};

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function ($scope, $) {
	var $elements = $scope.find('.elementor-date-field');

	if (!$elements.length) {
		return;
	}

	var addDatePicker = function addDatePicker($element) {
		if ($($element).hasClass('elementor-use-native')) {
			return;
		}
		var options = {
			minDate: $($element).attr('min') || null,
			maxDate: $($element).attr('max') || null,
			allowInput: true
		};
		$element.flatpickr(options);
	};
	$.each($elements, function (i, $element) {
		addDatePicker($element);
	});
};

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function ($scope, $) {
	var $elements = $scope.find('.elementor-time-field');

	if (!$elements.length) {
		return;
	}

	var addTimePicker = function addTimePicker($element) {
		if ($($element).hasClass('elementor-use-native')) {
			return;
		}
		$element.flatpickr({
			noCalendar: true,
			enableTime: true,
			allowInput: true
		});
	};
	$.each($elements, function (i, $element) {
		addTimePicker($element);
	});
};

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	if (jQuery.fn.smartmenus) {
		// Override the default stupid detection
		jQuery.SmartMenus.prototype.isCSSOn = function () {
			return true;
		};

		if (elementorFrontend.config.is_rtl) {
			jQuery.fn.smartmenus.defaults.rightToLeftSubMenus = true;
		}
	}

	elementorFrontend.hooks.addAction('frontend/element_ready/nav-menu.default', __webpack_require__(126));
};

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var MenuHandler = elementorModules.frontend.handlers.Base.extend({

	stretchElement: null,

	getDefaultSettings: function getDefaultSettings() {
		return {
			selectors: {
				menu: '.elementor-nav-menu',
				anchorLink: '.elementor-nav-menu--main .elementor-item-anchor',
				dropdownMenu: '.elementor-nav-menu__container.elementor-nav-menu--dropdown',
				menuToggle: '.elementor-menu-toggle'
			}
		};
	},

	getDefaultElements: function getDefaultElements() {
		var selectors = this.getSettings('selectors'),
		    elements = {};

		elements.$menu = this.$element.find(selectors.menu);
		elements.$anchorLink = this.$element.find(selectors.anchorLink);
		elements.$dropdownMenu = this.$element.find(selectors.dropdownMenu);
		elements.$dropdownMenuFinalItems = elements.$dropdownMenu.find('.menu-item:not(.menu-item-has-children) > a');
		elements.$menuToggle = this.$element.find(selectors.menuToggle);

		return elements;
	},

	bindEvents: function bindEvents() {
		if (!this.elements.$menu.length) {
			return;
		}

		this.elements.$menuToggle.on('click', this.toggleMenu.bind(this));

		if (this.getElementSettings('full_width')) {
			this.elements.$dropdownMenuFinalItems.on('click', this.toggleMenu.bind(this, false));
		}

		elementorFrontend.addListenerOnce(this.$element.data('model-cid'), 'resize', this.stretchMenu);
	},

	initStretchElement: function initStretchElement() {
		this.stretchElement = new elementorModules.frontend.tools.StretchElement({ element: this.elements.$dropdownMenu });
	},

	toggleMenu: function toggleMenu(show) {
		var isDropdownVisible = this.elements.$menuToggle.hasClass('elementor-active');

		if ('boolean' !== typeof show) {
			show = !isDropdownVisible;
		}

		this.elements.$menuToggle.toggleClass('elementor-active', show);

		if (show && this.getElementSettings('full_width')) {
			this.stretchElement.stretch();
		}
	},

	followMenuAnchors: function followMenuAnchors() {
		var self = this;

		self.elements.$anchorLink.each(function () {
			if (location.pathname === this.pathname && '' !== this.hash) {
				self.followMenuAnchor(jQuery(this));
			}
		});
	},

	followMenuAnchor: function followMenuAnchor($element) {
		var anchorSelector = $element[0].hash;

		var offset = -300,
		    $anchor = void 0;

		try {
			// `decodeURIComponent` for UTF8 characters in the hash.
			$anchor = jQuery(decodeURIComponent(anchorSelector));
		} catch (e) {
			return;
		}

		if (!$anchor.length) {
			return;
		}

		if (!$anchor.hasClass('elementor-menu-anchor')) {
			var halfViewport = jQuery(window).height() / 2;
			offset = -$anchor.outerHeight() + halfViewport;
		}

		elementorFrontend.waypoint($anchor, function (direction) {
			if ('down' === direction) {
				$element.addClass('elementor-item-active');
			} else {
				$element.removeClass('elementor-item-active');
			}
		}, { offset: '50%', triggerOnce: false });

		elementorFrontend.waypoint($anchor, function (direction) {
			if ('down' === direction) {
				$element.removeClass('elementor-item-active');
			} else {
				$element.addClass('elementor-item-active');
			}
		}, { offset: offset, triggerOnce: false });
	},

	stretchMenu: function stretchMenu() {
		if (this.getElementSettings('full_width')) {
			this.stretchElement.stretch();

			this.elements.$dropdownMenu.css('top', this.elements.$menuToggle.outerHeight());
		} else {
			this.stretchElement.reset();
		}
	},

	onInit: function onInit() {
		elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);

		if (!this.elements.$menu.length) {
			return;
		}

		this.elements.$menu.smartmenus({
			subIndicatorsText: '<i class="fa"></i>',
			subIndicatorsPos: 'append',
			subMenusMaxWidth: '1000px'
		});

		this.initStretchElement();

		this.stretchMenu();

		if (!elementorFrontend.isEditMode()) {
			this.followMenuAnchors();
		}
	},

	onElementChange: function onElementChange(propertyName) {
		if ('full_width' === propertyName) {
			this.stretchMenu();
		}
	}
});

module.exports = function ($scope) {
	new MenuHandler({ $element: $scope });
};

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	var PostsModule = __webpack_require__(3),
	    CardsModule = __webpack_require__(12),
	    PortfolioModule = __webpack_require__(128);

	elementorFrontend.hooks.addAction('frontend/element_ready/posts.classic', function ($scope) {
		new PostsModule({ $element: $scope });
	});

	elementorFrontend.hooks.addAction('frontend/element_ready/posts.full_content', function ($scope) {
		new PostsModule({ $element: $scope });
	});

	elementorFrontend.hooks.addAction('frontend/element_ready/posts.cards', function ($scope) {
		new CardsModule({ $element: $scope });
	});

	elementorFrontend.hooks.addAction('frontend/element_ready/portfolio.default', function ($scope) {
		if (!$scope.find('.elementor-portfolio').length) {
			return;
		}

		new PortfolioModule({ $element: $scope });
	});
};

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PostsHandler = __webpack_require__(3);

module.exports = PostsHandler.extend({
	getSkinPrefix: function getSkinPrefix() {
		return '';
	},

	getDefaultSettings: function getDefaultSettings() {
		var settings = PostsHandler.prototype.getDefaultSettings.apply(this, arguments);

		settings.transitionDuration = 450;

		jQuery.extend(settings.classes, {
			active: 'elementor-active',
			item: 'elementor-portfolio-item',
			ghostItem: 'elementor-portfolio-ghost-item'
		});

		return settings;
	},

	getDefaultElements: function getDefaultElements() {
		var elements = PostsHandler.prototype.getDefaultElements.apply(this, arguments);

		elements.$filterButtons = this.$element.find('.elementor-portfolio__filter');

		return elements;
	},

	getOffset: function getOffset(itemIndex, itemWidth, itemHeight) {
		var settings = this.getSettings(),
		    itemGap = this.elements.$postsContainer.width() / settings.colsCount - itemWidth;

		itemGap += itemGap / (settings.colsCount - 1);

		return {
			start: (itemWidth + itemGap) * (itemIndex % settings.colsCount),
			top: (itemHeight + itemGap) * Math.floor(itemIndex / settings.colsCount)
		};
	},

	getClosureMethodsNames: function getClosureMethodsNames() {
		var baseClosureMethods = PostsHandler.prototype.getClosureMethodsNames.apply(this, arguments);

		return baseClosureMethods.concat(['onFilterButtonClick']);
	},

	filterItems: function filterItems(term) {
		var $posts = this.elements.$posts,
		    activeClass = this.getSettings('classes.active'),
		    termSelector = '.elementor-filter-' + term;

		if ('__all' === term) {
			$posts.addClass(activeClass);

			return;
		}

		$posts.not(termSelector).removeClass(activeClass);

		$posts.filter(termSelector).addClass(activeClass);
	},

	removeExtraGhostItems: function removeExtraGhostItems() {
		var settings = this.getSettings(),
		    $shownItems = this.elements.$posts.filter(':visible'),
		    emptyColumns = (settings.colsCount - $shownItems.length % settings.colsCount) % settings.colsCount,
		    $ghostItems = this.elements.$postsContainer.find('.' + settings.classes.ghostItem);

		$ghostItems.slice(emptyColumns).remove();
	},

	handleEmptyColumns: function handleEmptyColumns() {
		this.removeExtraGhostItems();

		var settings = this.getSettings(),
		    $shownItems = this.elements.$posts.filter(':visible'),
		    $ghostItems = this.elements.$postsContainer.find('.' + settings.classes.ghostItem),
		    emptyColumns = (settings.colsCount - ($shownItems.length + $ghostItems.length) % settings.colsCount) % settings.colsCount;

		for (var i = 0; i < emptyColumns; i++) {
			this.elements.$postsContainer.append(jQuery('<div>', { class: settings.classes.item + ' ' + settings.classes.ghostItem }));
		}
	},

	showItems: function showItems($activeHiddenItems) {
		$activeHiddenItems.show();

		setTimeout(function () {
			$activeHiddenItems.css({
				opacity: 1
			});
		});
	},

	hideItems: function hideItems($inactiveShownItems) {
		$inactiveShownItems.hide();
	},

	arrangeGrid: function arrangeGrid() {
		var $ = jQuery,
		    self = this,
		    settings = self.getSettings(),
		    $activeItems = self.elements.$posts.filter('.' + settings.classes.active),
		    $inactiveItems = self.elements.$posts.not('.' + settings.classes.active),
		    $shownItems = self.elements.$posts.filter(':visible'),
		    $activeOrShownItems = $activeItems.add($shownItems),
		    $activeShownItems = $activeItems.filter(':visible'),
		    $activeHiddenItems = $activeItems.filter(':hidden'),
		    $inactiveShownItems = $inactiveItems.filter(':visible'),
		    itemWidth = $shownItems.outerWidth(),
		    itemHeight = $shownItems.outerHeight();

		self.elements.$posts.css('transition-duration', settings.transitionDuration + 'ms');

		self.showItems($activeHiddenItems);

		if (self.isEdit) {
			self.fitImages();
		}

		self.handleEmptyColumns();

		if (self.isMasonryEnabled()) {
			self.hideItems($inactiveShownItems);

			self.showItems($activeHiddenItems);

			self.handleEmptyColumns();

			self.runMasonry();

			return;
		}

		$inactiveShownItems.css({
			opacity: 0,
			transform: 'scale3d(0.2, 0.2, 1)'
		});

		$activeShownItems.each(function () {
			var $item = $(this),
			    currentOffset = self.getOffset($activeOrShownItems.index($item), itemWidth, itemHeight),
			    requiredOffset = self.getOffset($shownItems.index($item), itemWidth, itemHeight);

			if (currentOffset.start === requiredOffset.start && currentOffset.top === requiredOffset.top) {
				return;
			}

			requiredOffset.start -= currentOffset.start;

			requiredOffset.top -= currentOffset.top;

			if (elementorFrontend.config.is_rtl) {
				requiredOffset.start *= -1;
			}

			$item.css({
				transitionDuration: '',
				transform: 'translate3d(' + requiredOffset.start + 'px, ' + requiredOffset.top + 'px, 0)'
			});
		});

		setTimeout(function () {
			$activeItems.each(function () {
				var $item = $(this),
				    currentOffset = self.getOffset($activeOrShownItems.index($item), itemWidth, itemHeight),
				    requiredOffset = self.getOffset($activeItems.index($item), itemWidth, itemHeight);

				$item.css({
					transitionDuration: settings.transitionDuration + 'ms'
				});

				requiredOffset.start -= currentOffset.start;

				requiredOffset.top -= currentOffset.top;

				if (elementorFrontend.config.is_rtl) {
					requiredOffset.start *= -1;
				}

				setTimeout(function () {
					$item.css('transform', 'translate3d(' + requiredOffset.start + 'px, ' + requiredOffset.top + 'px, 0)');
				});
			});
		});

		setTimeout(function () {
			self.hideItems($inactiveShownItems);

			$activeItems.css({
				transitionDuration: '',
				transform: 'translate3d(0px, 0px, 0px)'
			});

			self.handleEmptyColumns();
		}, settings.transitionDuration);
	},

	activeFilterButton: function activeFilterButton(filter) {
		var activeClass = this.getSettings('classes.active'),
		    $filterButtons = this.elements.$filterButtons,
		    $button = $filterButtons.filter('[data-filter="' + filter + '"]');

		$filterButtons.removeClass(activeClass);

		$button.addClass(activeClass);
	},

	setFilter: function setFilter(filter) {
		this.activeFilterButton(filter);

		this.filterItems(filter);

		this.arrangeGrid();
	},

	refreshGrid: function refreshGrid() {
		this.setColsCountSettings();

		this.arrangeGrid();
	},

	bindEvents: function bindEvents() {
		PostsHandler.prototype.bindEvents.apply(this, arguments);

		this.elements.$filterButtons.on('click', this.onFilterButtonClick);
	},

	isMasonryEnabled: function isMasonryEnabled() {
		return !!this.getElementSettings('masonry');
	},

	run: function run() {
		PostsHandler.prototype.run.apply(this, arguments);

		this.setColsCountSettings();

		this.setFilter('__all');

		this.handleEmptyColumns();
	},

	onFilterButtonClick: function onFilterButtonClick(event) {
		this.setFilter(jQuery(event.currentTarget).data('filter'));
	},

	onWindowResize: function onWindowResize() {
		PostsHandler.prototype.onWindowResize.apply(this, arguments);

		this.refreshGrid();
	},

	onElementChange: function onElementChange(propertyName) {
		PostsHandler.prototype.onElementChange.apply(this, arguments);

		if ('classic_item_ratio' === propertyName) {
			this.refreshGrid();
		}
	}
});

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	if (!elementorFrontend.isEditMode()) {
		elementorFrontend.hooks.addAction('frontend/element_ready/share-buttons.default', __webpack_require__(130));
	}
};

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ShareButtonsHandler = elementorModules.frontend.handlers.Base.extend({
	onInit: function onInit() {
		elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);

		var elementSettings = this.getElementSettings(),
		    classes = this.getSettings('classes'),
		    isCustomURL = elementSettings.share_url && elementSettings.share_url.url,
		    shareLinkSettings = {
			classPrefix: classes.shareLinkPrefix
		};

		if (isCustomURL) {
			shareLinkSettings.url = elementSettings.share_url.url;
		} else {
			shareLinkSettings.url = location.href;
			shareLinkSettings.title = elementorFrontend.config.post.title;
			shareLinkSettings.text = elementorFrontend.config.post.excerpt;
		}

		/**
   * Ad Blockers may block the share script. (/assets/lib/social-share/social-share.js).
   */
		if (!this.elements.$shareButton.shareLink) {
			return;
		}

		this.elements.$shareButton.shareLink(shareLinkSettings);
	},
	getDefaultSettings: function getDefaultSettings() {
		return {
			selectors: {
				shareButton: '.elementor-share-btn'
			},
			classes: {
				shareLinkPrefix: 'elementor-share-btn_'
			}
		};
	},
	getDefaultElements: function getDefaultElements() {
		var selectors = this.getSettings('selectors');

		return {
			$shareButton: this.$element.find(selectors.shareButton)
		};
	}
});

module.exports = function ($scope) {
	new ShareButtonsHandler({ $element: $scope });
};

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	elementorFrontend.hooks.addAction('frontend/element_ready/slides.default', __webpack_require__(132));
};

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var SlidesHandler = elementorModules.frontend.handlers.Base.extend({
	getDefaultSettings: function getDefaultSettings() {
		return {
			selectors: {
				slider: '.elementor-slides-wrapper',
				slide: '.swiper-slide',
				slideBackground: '.swiper-slide-bg',
				slideInnerContents: '.swiper-slide-contents',
				activeSlide: '.swiper-slide-active',
				activeDuplicate: '.swiper-slide-duplicate-active'
			},
			classes: {
				animated: 'animated',
				kenBurnsActive: 'elementor-ken-burns--active'
			},
			attributes: {
				dataSliderOptions: 'slider_options',
				dataAnimation: 'animation'
			}
		};
	},

	getDefaultElements: function getDefaultElements() {
		var selectors = this.getSettings('selectors');

		var elements = {
			$slider: this.$element.find(selectors.slider)
		};

		elements.$mainSwiperSlides = elements.$slider.find(selectors.slide);

		return elements;
	},

	getSlidesCount: function getSlidesCount() {
		return this.elements.$mainSwiperSlides.length;
	},

	getInitialSlide: function getInitialSlide() {
		var editSettings = this.getEditSettings();

		return editSettings.activeItemIndex ? editSettings.activeItemIndex - 1 : 0;
	},

	getSwiperOptions: function getSwiperOptions() {
		var _this = this;

		var elementSettings = this.getElementSettings();

		var swiperOptions = {
			grabCursor: true,
			initialSlide: this.getInitialSlide(),
			slidesPerView: 1,
			slidesPerGroup: 1,
			loop: 'yes' === elementSettings.infinite,
			speed: elementSettings.transition_speed,
			effect: elementSettings.transition,
			on: {
				slideChange: function slideChange() {
					_this.handleKenBurns();
				}
			}
		};

		var showArrows = 'arrows' === elementSettings.navigation || 'both' === elementSettings.navigation,
		    pagination = 'dots' === elementSettings.navigation || 'both' === elementSettings.navigation;

		if (showArrows) {
			swiperOptions.navigation = {
				prevEl: '.elementor-swiper-button-prev',
				nextEl: '.elementor-swiper-button-next'
			};
		}

		if (pagination) {
			swiperOptions.pagination = {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true
			};
		}

		if (!this.isEdit && elementSettings.autoplay) {
			swiperOptions.autoplay = {
				delay: elementSettings.autoplay_speed,
				disableOnInteraction: !!elementSettings.pause_on_interaction
			};
		}

		if (true === swiperOptions.loop) {
			swiperOptions.loopedSlides = this.getSlidesCount();
		}

		if ('fade' === swiperOptions.effect) {
			swiperOptions.fadeEffect = { crossFade: true };
		}

		return swiperOptions;
	},

	handleKenBurns: function handleKenBurns() {
		var settings = this.getSettings();

		if (this.$activeImageBg) {
			this.$activeImageBg.removeClass(settings.classes.kenBurnsActive);
		}

		this.activeItemIndex = this.swipers.main ? this.swipers.main.activeIndex : this.getInitialSlide();

		if (this.swipers.main) {
			this.$activeImageBg = jQuery(this.swipers.main.slides[this.activeItemIndex]).children(settings.selectors.slideBackground);
		} else {
			this.$activeImageBg = jQuery(this.elements.$mainSwiperSlides[0]).children(settings.selectors.slideBackground);
		}

		this.$activeImageBg.addClass(settings.classes.kenBurnsActive);
	},

	initSlider: function initSlider() {
		var _this2 = this;

		var $slider = this.elements.$slider,
		    settings = this.getSettings(),
		    elementSettings = this.getElementSettings(),
		    animation = $slider.data(settings.attributes.dataAnimation);

		if (!$slider.length) {
			return;
		}

		this.swipers = {};

		if (1 >= this.getSlidesCount()) {
			return;
		}

		this.swipers.main = new Swiper($slider, this.getSwiperOptions());

		if (!animation) {
			return;
		}

		this.handleKenBurns();

		this.swipers.main.on('slideChangeTransitionStart', function () {
			var $sliderContent = $slider.find(settings.selectors.slideInnerContents);

			$sliderContent.removeClass(settings.classes.animated + ' ' + animation).hide();
		});

		this.swipers.main.on('slideChangeTransitionEnd', function () {
			var $currentSlide = $slider.find(settings.selectors.slideInnerContents);

			$currentSlide.show().addClass(settings.classes.animated + ' ' + animation);
		});

		if (elementSettings.pause_on_hover) {
			$slider.on({
				mouseenter: function mouseenter() {
					_this2.swipers.main.autoplay.stop();
				},
				mouseleave: function mouseleave() {
					_this2.swipers.main.autoplay.start();
				}
			});
		}
	},

	onInit: function onInit() {
		elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);

		if (2 > this.getSlidesCount()) {
			return;
		}

		this.initSlider();
	},

	onElementChange: function onElementChange(propertyName) {
		if (1 >= this.getSlidesCount()) {
			return;
		}

		if (0 === propertyName.indexOf('width')) {
			this.swipers.main.update();
		}
	},

	onEditSettingsChange: function onEditSettingsChange(propertyName) {
		if (1 >= this.getSlidesCount()) {
			return;
		}

		if ('activeItemIndex' === propertyName) {
			this.swipers.main.slideToLoop(this.getEditSettings('activeItemIndex') - 1);
		}
	}
});

module.exports = function ($scope) {
	new SlidesHandler({ $element: $scope });
};

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var facebookHandler = __webpack_require__(134);

module.exports = function () {
	elementorFrontend.hooks.addAction('frontend/element_ready/facebook-button.default', facebookHandler);
	elementorFrontend.hooks.addAction('frontend/element_ready/facebook-comments.default', facebookHandler);
	elementorFrontend.hooks.addAction('frontend/element_ready/facebook-embed.default', facebookHandler);
	elementorFrontend.hooks.addAction('frontend/element_ready/facebook-page.default', facebookHandler);
};

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var config = ElementorProFrontendConfig.facebook_sdk,
    loadSDK = function loadSDK() {
	// Don't load in parallel
	if (config.isLoading || config.isLoaded) {
		return;
	}

	config.isLoading = true;

	jQuery.ajax({
		url: 'https://connect.facebook.net/' + config.lang + '/sdk.js',
		dataType: 'script',
		cache: true,
		success: function success() {
			FB.init({
				appId: config.app_id,
				version: 'v2.10',
				xfbml: false
			});
			config.isLoaded = true;
			config.isLoading = false;
			jQuery(document).trigger('fb:sdk:loaded');
		}
	});
};

module.exports = function ($scope) {
	loadSDK();
	// On FB SDK is loaded, parse current element
	var parse = function parse() {
		$scope.find('.elementor-widget-container div').attr('data-width', $scope.width() + 'px');
		FB.XFBML.parse($scope[0]);
	};

	if (config.isLoaded) {
		parse();
	} else {
		jQuery(document).on('fb:sdk:loaded', parse);
	}
};

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
    elementorFrontend.hooks.addAction('frontend/element_ready/section', __webpack_require__(13));
    elementorFrontend.hooks.addAction('frontend/element_ready/widget', __webpack_require__(13));
};

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	var PostsArchiveClassic = __webpack_require__(137),
	    PostsArchiveCards = __webpack_require__(138);

	elementorFrontend.hooks.addAction('frontend/element_ready/archive-posts.archive_classic', function ($scope) {
		new PostsArchiveClassic({ $element: $scope });
	});

	elementorFrontend.hooks.addAction('frontend/element_ready/archive-posts.archive_full_content', function ($scope) {
		new PostsArchiveClassic({ $element: $scope });
	});

	elementorFrontend.hooks.addAction('frontend/element_ready/archive-posts.archive_cards', function ($scope) {
		new PostsArchiveCards({ $element: $scope });
	});

	jQuery(function () {
		// Go to elementor element - if the URL is something like http://domain.com/any-page?preview=true&theme_template_id=6479
		var match = location.search.match(/theme_template_id=(\d*)/),
		    $element = match ? jQuery('.elementor-' + match[1]) : [];
		if ($element.length) {
			jQuery('html, body').animate({
				scrollTop: $element.offset().top - window.innerHeight / 2
			});
		}
	});
};

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PostsClassicHandler = __webpack_require__(3);

module.exports = PostsClassicHandler.extend({
	getSkinPrefix: function getSkinPrefix() {
		return 'archive_classic_';
	}
});

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PostsCardHandler = __webpack_require__(12);

module.exports = PostsCardHandler.extend({
	getSkinPrefix: function getSkinPrefix() {
		return 'archive_cards_';
	}
});

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
    elementorFrontend.hooks.addAction('frontend/element_ready/search-form.default', __webpack_require__(140));
};

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var SearchBerHandler = elementorModules.frontend.handlers.Base.extend({

    getDefaultSettings: function getDefaultSettings() {
        return {
            selectors: {
                wrapper: '.elementor-search-form',
                container: '.elementor-search-form__container',
                icon: '.elementor-search-form__icon',
                input: '.elementor-search-form__input',
                toggle: '.elementor-search-form__toggle',
                submit: '.elementor-search-form__submit',
                closeButton: '.dialog-close-button'
            },
            classes: {
                isFocus: 'elementor-search-form--focus',
                isFullScreen: 'elementor-search-form--full-screen',
                lightbox: 'elementor-lightbox'
            }
        };
    },

    getDefaultElements: function getDefaultElements() {
        var selectors = this.getSettings('selectors'),
            elements = {};

        elements.$wrapper = this.$element.find(selectors.wrapper);
        elements.$container = this.$element.find(selectors.container);
        elements.$input = this.$element.find(selectors.input);
        elements.$icon = this.$element.find(selectors.icon);
        elements.$toggle = this.$element.find(selectors.toggle);
        elements.$submit = this.$element.find(selectors.submit);
        elements.$closeButton = this.$element.find(selectors.closeButton);

        return elements;
    },

    bindEvents: function bindEvents() {
        var self = this,
            $container = self.elements.$container,
            $closeButton = self.elements.$closeButton,
            $input = self.elements.$input,
            $wrapper = self.elements.$wrapper,
            $icon = self.elements.$icon,
            skin = this.getElementSettings('skin'),
            classes = this.getSettings('classes');

        if ('full_screen' === skin) {
            // Activate full-screen mode on click
            self.elements.$toggle.on('click', function () {
                $container.toggleClass(classes.isFullScreen).toggleClass(classes.lightbox);
                $input.focus();
            });

            // Deactivate full-screen mode on click or on esc.
            $container.on('click', function (event) {
                if ($container.hasClass(classes.isFullScreen) && $container[0] === event.target) {
                    $container.removeClass(classes.isFullScreen).removeClass(classes.lightbox);
                }
            });
            $closeButton.on('click', function () {
                $container.removeClass(classes.isFullScreen).removeClass(classes.lightbox);
            });
            elementorFrontend.elements.$document.keyup(function (event) {
                var ESC_KEY = 27;

                if (ESC_KEY === event.keyCode) {
                    if ($container.hasClass(classes.isFullScreen)) {
                        $container.click();
                    }
                }
            });
        } else {
            // Apply focus style on wrapper element when input is focused
            $input.on({
                focus: function focus() {
                    $wrapper.addClass(classes.isFocus);
                },
                blur: function blur() {
                    $wrapper.removeClass(classes.isFocus);
                }
            });
        }

        if ('minimal' === skin) {
            // Apply focus style on wrapper element when icon is clicked in minimal skin
            $icon.on('click', function () {
                $wrapper.addClass(classes.isFocus);
                $input.focus();
            });
        }
    }
});

module.exports = function ($scope) {
    new SearchBerHandler({ $element: $scope });
};

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	elementorFrontend.hooks.addAction('frontend/element_ready/woocommerce-menu-cart.default', __webpack_require__(142));

	if (elementorFrontend.isEditMode()) {
		return;
	}

	jQuery(document.body).on('wc_fragments_loaded wc_fragments_refreshed', function () {
		jQuery('div.elementor-widget-woocommerce-menu-cart').each(function () {
			elementorFrontend.elementsHandler.runReadyTrigger(jQuery(this));
		});
	});
};

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var MiniCartHandler = elementorModules.frontend.handlers.Base.extend({

	getDefaultSettings: function getDefaultSettings() {
		return {
			selectors: {
				container: '.elementor-menu-cart__container',
				toggle: '.elementor-menu-cart__toggle .elementor-button',
				closeButton: '.elementor-menu-cart__close-button',
				cartLink: '#elementor-menu-cart__toggle_button'
			},
			classes: {
				isShown: 'elementor-menu-cart--shown',
				lightbox: 'elementor-lightbox'
			}
		};
	},

	getDefaultElements: function getDefaultElements() {
		var selectors = this.getSettings('selectors'),
		    elements = {};

		elements.$container = this.$element.find(selectors.container);
		elements.$toggle = this.$element.find(selectors.toggle);
		elements.$closeButton = this.$element.find(selectors.closeButton);
		elements.$cartLink = this.$element.find(selectors.cartLink);

		return elements;
	},

	bindEvents: function bindEvents() {
		var _elements = this.elements,
		    $container = _elements.$container,
		    $toggle = _elements.$toggle,
		    $closeButton = _elements.$closeButton,
		    $cartLink = _elements.$cartLink,
		    classes = this.getSettings('classes');

		// Activate full-screen mode on click

		$toggle.on('click', function (event) {
			var currentUrl = window.location.origin + window.location.pathname,
			    isCart = ElementorProFrontendConfig.menu_cart.cart_page_url === currentUrl,
			    isCheckout = ElementorProFrontendConfig.menu_cart.checkout_page_url === currentUrl;

			if (!isCart && !isCheckout) {
				event.preventDefault();
				$container.toggleClass(classes.isShown);
			} else {
				var cartUrl = ElementorProFrontendConfig.menu_cart.cart_page_url;
				$cartLink.attr('href', cartUrl);
				$container.removeClass(classes.isShown);
			}
		});

		// Deactivate full-screen mode on click or on esc.
		$container.on('click', function (event) {
			if ($container.hasClass(classes.isShown) && $container[0] === event.target) {
				$container.removeClass(classes.isShown);
			}
		});

		$closeButton.on('click', function () {
			$container.removeClass(classes.isShown);
		});

		elementorFrontend.elements.$document.keyup(function (event) {
			var ESC_KEY = 27;

			if (ESC_KEY === event.keyCode) {
				if ($container.hasClass(classes.isShown)) {
					$container.click();
				}
			}
		});
	}
});

module.exports = function ($scope) {
	new MiniCartHandler({ $element: $scope });
};

/***/ })
/******/ ]);
//# sourceMappingURL=frontend.js.map