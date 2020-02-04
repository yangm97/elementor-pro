/*! elementor-pro - v2.8.3 - 01-01-2020 */
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
/******/ 	return __webpack_require__(__webpack_require__.s = 57);
/******/ })
/************************************************************************/
/******/ ({

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var modules = {
	widget_template_edit_button: __webpack_require__(58),
	forms_integrations: __webpack_require__(60),
	AssetsManager: __webpack_require__(62),
	RoleManager: __webpack_require__(70),
	ThemeBuilder: __webpack_require__(72)
};

window.elementorProAdmin = {
	widget_template_edit_button: new modules.widget_template_edit_button(),
	forms_integrations: new modules.forms_integrations(),
	assetsManager: new modules.AssetsManager(),
	roleManager: new modules.RoleManager(),
	themeBuilder: new modules.ThemeBuilder()
};

jQuery(function () {
	elementorProAdmin.assetsManager.fontManager.init();
	elementorProAdmin.roleManager.advancedRoleManager.init();
});

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	var EditButton = __webpack_require__(59);
	this.editButton = new EditButton();
};

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	var self = this;

	self.init = function () {
		jQuery(document).on('change', '.elementor-widget-template-select', function () {
			var $this = jQuery(this),
			    templateID = $this.val(),
			    $editButton = $this.parents('p').find('.elementor-edit-template'),
			    type = $this.find('[value="' + templateID + '"]').data('type');

			if ('page' !== type) {
				// 'widget' is editable only from Elementor page
				$editButton.hide();

				return;
			}

			var editUrl = ElementorProConfig.i18n.home_url + '?p=' + templateID + '&elementor';

			$editButton.prop('href', editUrl).show();
		});
	};

	self.init();
};

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	var ApiValidations = __webpack_require__(61);

	this.dripButton = new ApiValidations('drip_api_token');
	this.getResponse = new ApiValidations('getresponse_api_key');
	this.convertKit = new ApiValidations('convertkit_api_key');
	this.mailChimp = new ApiValidations('mailchimp_api_key');
	this.mailerLite = new ApiValidations('mailerlite_api_key');
	this.activeCcampaign = new ApiValidations('activecampaign_api_key', 'activecampaign_api_url');
};

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (key, fieldID) {
	var self = this;
	self.cacheElements = function () {
		this.cache = {
			$button: jQuery('#elementor_pro_' + key + '_button'),
			$apiKeyField: jQuery('#elementor_pro_' + key),
			$apiUrlField: jQuery('#elementor_pro_' + fieldID)
		};
	};
	self.bindEvents = function () {
		this.cache.$button.on('click', function (event) {
			event.preventDefault();
			self.validateApi();
		});

		this.cache.$apiKeyField.on('change', function () {
			self.setState('clear');
		});
	};
	self.validateApi = function () {
		this.setState('loading');
		var apiKey = this.cache.$apiKeyField.val();

		if ('' === apiKey) {
			this.setState('clear');
			return;
		}

		if (this.cache.$apiUrlField.length && '' === this.cache.$apiUrlField.val()) {
			this.setState('clear');
			return;
		}

		jQuery.post(ajaxurl, {
			action: self.cache.$button.data('action'),
			api_key: apiKey,
			api_url: this.cache.$apiUrlField.val(),
			_nonce: self.cache.$button.data('nonce')
		}).done(function (data) {
			if (data.success) {
				self.setState('success');
			} else {
				self.setState('error');
			}
		}).fail(function () {
			self.setState();
		});
	};
	self.setState = function (type) {
		var classes = ['loading', 'success', 'error'],
		    currentClass,
		    classIndex;

		for (classIndex in classes) {
			currentClass = classes[classIndex];
			if (type === currentClass) {
				this.cache.$button.addClass(currentClass);
			} else {
				this.cache.$button.removeClass(currentClass);
			}
		}
	};
	self.init = function () {
		this.cacheElements();
		this.bindEvents();
	};
	self.init();
};

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	var FontManager = __webpack_require__(63),
	    TypekitAdmin = __webpack_require__(66),
	    CustomIcon = __webpack_require__(67).default,
	    FontAwesomeProAdmin = __webpack_require__(69).default;
	this.fontManager = new FontManager();
	this.typekit = new TypekitAdmin();
	this.fontAwesomePro = new FontAwesomeProAdmin();
	this.customIcons = new CustomIcon();
};

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	var self = this;

	self.fields = {
		upload: __webpack_require__(64),
		repeater: __webpack_require__(65)
	};

	self.selectors = {
		editPageClass: 'post-type-elementor_font',
		title: '#title',
		repeaterBlock: '.repeater-block',
		repeaterTitle: '.repeater-title',
		removeRowBtn: '.remove-repeater-row',
		editRowBtn: '.toggle-repeater-row',
		closeRowBtn: '.close-repeater-row',
		styleInput: '.font_style',
		weightInput: '.font_weight',
		customFontsMetaBox: '#elementor-font-custommetabox',
		closeHandle: 'button.handlediv',
		toolbar: '.elementor-field-toolbar',
		inlinePreview: '.inline-preview',
		fileUrlInput: '.elementor-field-file input[type="text"]'
	};

	self.fontLabelTemplate = '<ul class="row-font-label"><li class="row-font-weight">{{weight}}</li><li class="row-font-style">{{style}}</li><li class="row-font-preview">{{preview}}</li>{{toolbar}}</ul>';

	self.renderTemplate = function (tpl, data) {
		var re = /{{([^}}]+)?}}/g,
		    match;
		while (match = re.exec(tpl)) {
			// eslint-disable-line no-cond-assign
			tpl = tpl.replace(match[0], data[match[1]]);
		}
		return tpl;
	};

	self.ucFirst = function (string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	self.getPreviewStyle = function ($table) {
		var fontFamily = jQuery(self.selectors.title).val(),
		    style = $table.find('select' + self.selectors.styleInput).first().val(),
		    weight = $table.find('select' + self.selectors.weightInput).first().val();

		return {
			style: self.ucFirst(style),
			weight: self.ucFirst(weight),
			styleAttribute: 'font-family: ' + fontFamily + ' ;font-style: ' + style + '; font-weight: ' + weight + ';'
		};
	};

	self.updateRowLabel = function (event, $table) {
		var $block = $table.closest(self.selectors.repeaterBlock),
		    $deleteBtn = $block.find(self.selectors.removeRowBtn).first(),
		    $editBtn = $block.find(self.selectors.editRowBtn).first(),
		    $closeBtn = $block.find(self.selectors.closeRowBtn).first(),
		    $toolbar = $table.find(self.selectors.toolbar).last().clone(),
		    previewStyle = self.getPreviewStyle($table),
		    toolbarHtml;

		if ($editBtn.length > 0) {
			$editBtn.not(self.selectors.toolbar + ' ' + self.selectors.editRowBtn).remove();
		}

		if ($closeBtn.length > 0) {
			$closeBtn.not(self.selectors.toolbar + ' ' + self.selectors.closeRowBtn).remove();
		}

		if ($deleteBtn.length > 0) {
			$deleteBtn.not(self.selectors.toolbar + ' ' + self.selectors.removeRowBtn).remove();
		}

		toolbarHtml = jQuery('<li class="row-font-actions">').append($toolbar)[0].outerHTML;

		return self.renderTemplate(self.fontLabelTemplate, {
			weight: '<span class="label">Weight:</span>' + previewStyle.weight,
			style: '<span class="label">Style:</span>' + previewStyle.style,
			preview: '<span style="' + previewStyle.styleAttribute + '">Elementor is making the web beautiful</span>',
			toolbar: toolbarHtml
		});
	};

	self.onRepeaterToggleVisible = function (event, $btn, $table) {
		var $previewElement = $table.find(self.selectors.inlinePreview),
		    previewStyle = self.getPreviewStyle($table);

		$previewElement.attr('style', previewStyle.styleAttribute);
	};

	self.onRepeaterNewRow = function (event, $btn, $block) {
		$block.find(self.selectors.removeRowBtn).first().remove();
		$block.find(self.selectors.editRowBtn).first().remove();
		$block.find(self.selectors.closeRowBtn).first().remove();
	};

	self.maybeToggle = function (event) {
		event.preventDefault();

		if (jQuery(this).is(':visible') && !jQuery(event.target).hasClass(self.selectors.editRowBtn)) {
			jQuery(this).find(self.selectors.editRowBtn).click();
		}
	};

	self.onInputChange = function (event) {
		var $el = jQuery(event.target).next();

		self.fields.upload.setFields($el);
		self.fields.upload.setLabels($el);
		self.fields.upload.replaceButtonClass($el);
	};

	self.bind = function () {
		jQuery(document).on('repeaterComputedLabel', this.updateRowLabel).on('onRepeaterToggleVisible', this.onRepeaterToggleVisible).on('onRepeaterNewRow', this.onRepeaterNewRow).on('click', this.selectors.repeaterTitle, this.maybeToggle).on('input', this.selectors.fileUrlInput, this.onInputChange.bind(this));
	};

	self.removeCloseHandle = function () {
		jQuery(this.selectors.closeHandle).remove();
		jQuery(this.selectors.customFontsMetaBox).removeClass('closed').removeClass('postbox');
	};

	self.titleRequired = function () {
		jQuery(self.selectors.title).prop('required', true);
	};

	self.init = function () {
		if (!jQuery('body').hasClass(self.selectors.editPageClass)) {
			return;
		}

		this.removeCloseHandle();
		this.titleRequired();
		this.bind();
		this.fields.upload.init();
		this.fields.repeater.init();
	};
};

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

module.exports = {
	$btn: null,
	fileId: null,
	fileUrl: null,
	fileFrame: [],

	selectors: {
		uploadBtnClass: 'elementor-upload-btn',
		clearBtnClass: 'elementor-upload-clear-btn',
		uploadBtn: '.elementor-upload-btn',
		clearBtn: '.elementor-upload-clear-btn',
		inputURLField: '.elementor-field-file input[type="text"]'
	},

	hasValue: function hasValue() {
		return '' !== jQuery(this.fileUrl).val();
	},

	setLabels: function setLabels($el) {
		if (!this.hasValue()) {
			$el.val($el.data('upload_text'));
		} else {
			$el.val($el.data('remove_text'));
		}
	},

	setFields: function setFields(el) {
		var self = this;
		self.fileUrl = jQuery(el).prev();
		self.fileId = jQuery(self.fileUrl).prev();
	},

	setUploadParams: function setUploadParams(ext, name) {
		var uploader = this.fileFrame[name].uploader.uploader;
		uploader.param('uploadType', ext);
		uploader.param('uploadTypeCaller', 'elementor-admin-font-upload');
		uploader.param('post_id', this.getPostId());
	},

	setUploadMimeType: function setUploadMimeType(frame, ext) {
		// Set {ext} as only allowed upload extensions
		var oldExtensions = _wpPluploadSettings.defaults.filters.mime_types[0].extensions,
		    self = this;
		frame.on('ready', function () {
			_wpPluploadSettings.defaults.filters.mime_types[0].extensions = ext;
		});

		frame.on('close', function () {
			// restore allowed upload extensions
			_wpPluploadSettings.defaults.filters.mime_types[0].extensions = oldExtensions;
			self.replaceButtonClass(self.$btn);
		});
	},

	replaceButtonClass: function replaceButtonClass(el) {
		if (this.hasValue()) {
			jQuery(el).removeClass(this.selectors.uploadBtnClass).addClass(this.selectors.clearBtnClass);
		} else {
			jQuery(el).removeClass(this.selectors.clearBtnClass).addClass(this.selectors.uploadBtnClass);
		}
		this.setLabels(el);
	},

	uploadFile: function uploadFile(el) {
		var _this = this;

		var self = this,
		    $el = jQuery(el),
		    mime = $el.attr('data-mime_type') || '',
		    ext = $el.attr('data-ext') || false,
		    name = $el.attr('id');
		// If the media frame already exists, reopen it.
		if ('undefined' !== typeof self.fileFrame[name]) {
			if (ext) {
				self.setUploadParams(ext, name);
			}

			self.fileFrame[name].open();

			return;
		}

		// Create the media frame.
		self.fileFrame[name] = wp.media({
			library: {
				type: [].concat(_toConsumableArray(mime.split(',')), [mime.split(',').join('')])
			},
			title: $el.data('box_title'),
			button: {
				text: $el.data('box_action')
			},
			multiple: false
		});

		// When an file is selected, run a callback.
		self.fileFrame[name].on('select', function () {
			// We set multiple to false so only get one image from the uploader
			var attachment = self.fileFrame[name].state().get('selection').first().toJSON();
			// Do something with attachment.id and/or attachment.url here
			jQuery(self.fileId).val(attachment.id);
			jQuery(self.fileUrl).val(attachment.url);
			self.replaceButtonClass(el);
			self.updatePreview(el);
		});

		self.fileFrame[name].on('open', function () {
			var selectedId = _this.fileId.val();
			if (!selectedId) {
				return;
			}

			var selection = self.fileFrame[name].state().get('selection');
			selection.add(wp.media.attachment(selectedId));
		});

		self.setUploadMimeType(self.fileFrame[name], ext);

		// Finally, open the modal
		self.fileFrame[name].open();
		if (ext) {
			self.setUploadParams(ext, name);
		}
	},

	updatePreview: function updatePreview(el) {
		var self = this,
		    $ul = jQuery(el).parent().find('ul'),
		    $li = jQuery('<li>'),
		    showUrlType = jQuery(el).data('preview_anchor') || 'full';

		$ul.html('');

		if (self.hasValue() && 'none' !== showUrlType) {
			var anchor = jQuery(self.fileUrl).val();
			if ('full' !== showUrlType) {
				anchor = anchor.substring(anchor.lastIndexOf('/') + 1);
			}

			$li.html('<a href="' + jQuery(self.fileUrl).val() + '" download>' + anchor + '</a>');
			$ul.append($li);
		}
	},

	setup: function setup() {
		var self = this;
		jQuery(self.selectors.uploadBtn + ', ' + self.selectors.clearBtn).each(function () {
			self.setFields(jQuery(this));
			self.updatePreview(jQuery(this));
			self.setLabels(jQuery(this));
			self.replaceButtonClass(jQuery(this));
		});
	},

	getPostId: function getPostId() {
		return jQuery('#post_ID').val();
	},
	handleUploadClick: function handleUploadClick(event) {
		event.preventDefault();
		var $element = jQuery(event.target);
		if ('text' === $element.attr('type')) {
			return $element.next().removeClass(this.selectors.clearBtnClass).addClass(this.selectors.uploadBtnClass).click();
		}
		this.$btn = $element;
		this.setFields($element);
		this.uploadFile($element);
	},


	init: function init() {
		var _this2 = this;

		var self = this,
		    _selectors = this.selectors,
		    uploadBtn = _selectors.uploadBtn,
		    inputURLField = _selectors.inputURLField,
		    clearBtn = _selectors.clearBtn,
		    handleUpload = function handleUpload(event) {
			return _this2.handleUploadClick(event);
		};


		jQuery(document).on('click', uploadBtn, handleUpload);
		jQuery(document).on('click', inputURLField, function (event) {
			if ('' !== event.target.value) {
				handleUpload(event);
			}
		});

		jQuery(document).on('click', clearBtn, function (event) {
			event.preventDefault();
			var $element = jQuery(this);
			self.setFields($element);
			jQuery(self.fileUrl).val('');
			jQuery(self.fileId).val('');

			self.updatePreview($element);
			self.replaceButtonClass($element);
		});

		this.setup();

		jQuery(document).on('onRepeaterNewRow', function () {
			self.setup();
		});
	}
};

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = {
	selectors: {
		add: '.add-repeater-row',
		remove: '.remove-repeater-row',
		toggle: '.toggle-repeater-row',
		close: '.close-repeater-row',
		sort: '.sort-repeater-row',
		table: '.form-table',
		block: '.repeater-block',
		repeaterLabel: '.repeater-title',
		repeaterField: '.elementor-field-repeater'
	},

	counters: [],

	trigger: function trigger(eventName, params) {
		jQuery(document).trigger(eventName, params);
	},

	triggerHandler: function triggerHandler(eventName, params) {
		return jQuery(document).triggerHandler(eventName, params);
	},

	countBlocks: function countBlocks($btn) {
		return $btn.closest(this.selectors.repeaterField).find(this.selectors.block).length || 0;
	},

	add: function add(btn) {
		var self = this,
		    $btn = jQuery(btn),
		    id = $btn.data('template-id'),
		    repeaterBlock;
		if (!self.counters.hasOwnProperty(id)) {
			self.counters[id] = self.countBlocks($btn);
		}
		self.counters[id] += 1;
		repeaterBlock = jQuery('#' + id).html();
		repeaterBlock = self.replaceAll('__counter__', self.counters[id], repeaterBlock);
		$btn.before(repeaterBlock);
		self.trigger('onRepeaterNewRow', [$btn, $btn.prev()]);
	},

	remove: function remove(btn) {
		var self = this;
		jQuery(btn).closest(self.selectors.block).remove();
	},

	toggle: function toggle(btn) {
		var self = this,
		    $btn = jQuery(btn),
		    $table = $btn.closest(self.selectors.block).find(self.selectors.table),
		    $toggleLabel = $btn.closest(self.selectors.block).find(self.selectors.repeaterLabel);

		$table.toggle(0, 'none', function () {
			if ($table.is(':visible')) {
				$table.closest(self.selectors.block).addClass('block-visible');
				self.trigger('onRepeaterToggleVisible', [$btn, $table, $toggleLabel]);
			} else {
				$table.closest(self.selectors.block).removeClass('block-visible');
				self.trigger('onRepeaterToggleHidden', [$btn, $table, $toggleLabel]);
			}
		});

		$toggleLabel.toggle();

		// Update row label
		self.updateRowLabel(btn);
	},

	close: function close(btn) {
		var self = this,
		    $btn = jQuery(btn),
		    $table = $btn.closest(self.selectors.block).find(self.selectors.table),
		    $toggleLabel = $btn.closest(self.selectors.block).find(self.selectors.repeaterLabel);

		$table.closest(self.selectors.block).removeClass('block-visible');
		$table.hide();
		self.trigger('onRepeaterToggleHidden', [$btn, $table, $toggleLabel]);
		$toggleLabel.show();
		self.updateRowLabel(btn);
	},

	updateRowLabel: function updateRowLabel(btn) {
		var self = this,
		    $btn = jQuery(btn),
		    $table = $btn.closest(self.selectors.block).find(self.selectors.table),
		    $toggleLabel = $btn.closest(self.selectors.block).find(self.selectors.repeaterLabel);

		var selector = $toggleLabel.data('selector');
		// For some browsers, `attr` is undefined; for others,  `attr` is false.  Check for both.
		if ((typeof selector === 'undefined' ? 'undefined' : _typeof(selector)) !== ( true ? 'undefined' : undefined) && false !== selector) {
			var value = false,
			    std = $toggleLabel.data('default');

			if ($table.find(selector).length) {
				value = $table.find(selector).val();
			}

			//filter hook
			var computedLabel = self.triggerHandler('repeaterComputedLabel', [$table, $toggleLabel, value]);

			// For some browsers, `attr` is undefined; for others,  `attr` is false.  Check for both.
			if (undefined !== computedLabel && false !== computedLabel) {
				value = computedLabel;
			}

			// Fallback to default row label
			if (undefined === value || false === value) {
				value = std;
			}

			$toggleLabel.html(value);
		}
	},

	replaceAll: function replaceAll(search, replace, string) {
		return string.replace(new RegExp(search, 'g'), replace);
	},

	init: function init() {
		var self = this;
		jQuery(document).on('click', this.selectors.add, function (event) {
			event.preventDefault();
			self.add(jQuery(this), event);
		}).on('click', this.selectors.remove, function (event) {
			event.preventDefault();
			var result = confirm(jQuery(this).data('confirm').toString());
			if (!result) {
				return;
			}
			self.remove(jQuery(this), event);
		}).on('click', this.selectors.toggle, function (event) {
			event.preventDefault();
			event.stopPropagation();
			self.toggle(jQuery(this), event);
		}).on('click', this.selectors.close, function (event) {
			event.preventDefault();
			event.stopPropagation();
			self.close(jQuery(this), event);
		});

		jQuery(this.selectors.toggle).each(function () {
			self.updateRowLabel(jQuery(this));
		});

		this.trigger('onRepeaterLoaded', [this]);
	}
};

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	var self = this;
	self.cacheElements = function () {
		this.cache = {
			$button: jQuery('#elementor_pro_typekit_validate_button'),
			$kitIdField: jQuery('#elementor_typekit-kit-id'),
			$dataLabelSpan: jQuery('.elementor-pro-typekit-data')
		};
	};
	self.bindEvents = function () {
		this.cache.$button.on('click', function (event) {
			event.preventDefault();
			self.fetchFonts();
		});

		this.cache.$kitIdField.on('change', function () {
			self.setState('clear');
		});
	};
	self.fetchFonts = function () {
		this.setState('loading');
		this.cache.$dataLabelSpan.addClass('hidden');

		var kitID = this.cache.$kitIdField.val();

		if ('' === kitID) {
			this.setState('clear');
			return;
		}

		jQuery.post(ajaxurl, {
			action: 'elementor_pro_admin_fetch_fonts',
			kit_id: kitID,
			_nonce: self.cache.$button.data('nonce')
		}).done(function (data) {
			if (data.success) {
				var template = self.cache.$button.data('found');
				template = template.replace('{{count}}', data.data.count);
				self.cache.$dataLabelSpan.html(template).removeClass('hidden');
				self.setState('success');
			} else {
				self.setState('error');
			}
		}).fail(function () {
			self.setState();
		});
	};
	self.setState = function (type) {
		var classes = ['loading', 'success', 'error'],
		    currentClass,
		    classIndex;

		for (classIndex in classes) {
			currentClass = classes[classIndex];
			if (type === currentClass) {
				this.cache.$button.addClass(currentClass);
			} else {
				this.cache.$button.removeClass(currentClass);
			}
		}
	};
	self.init = function () {
		this.cacheElements();
		this.bindEvents();
	};
	self.init();
};

/***/ }),

/***/ 67:
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

var CustomIcons = function (_elementorModules$Vie) {
	_inherits(CustomIcons, _elementorModules$Vie);

	function CustomIcons() {
		_classCallCheck(this, CustomIcons);

		return _possibleConstructorReturn(this, (CustomIcons.__proto__ || Object.getPrototypeOf(CustomIcons)).apply(this, arguments));
	}

	_createClass(CustomIcons, [{
		key: 'getDefaultElements',
		value: function getDefaultElements() {
			var elements = {};
			var selectors = this.getSettings('selectors');

			jQuery.each(selectors, function (element, selector) {
				elements['$' + element] = jQuery(selector);
			});

			return elements;
		}
	}, {
		key: 'getDefaultSettings',
		value: function getDefaultSettings() {
			return {
				fields: {
					dropzone: __webpack_require__(68).default
				},
				classes: {
					editPageClass: 'post-type-elementor_icons',
					editPhp: 'edit-php',
					hasIcons: 'elementor--has-icons'
				},
				selectors: {
					editPageClass: 'post-type-elementor_icons',
					title: '#title',
					metaboxContainer: '#elementor-custom-icons-metabox',
					metabox: '.elementor-custom-icons-metabox',
					closeHandle: 'button.handlediv',
					iconsTemplate: '#elementor-icons-template',
					dataInput: '#elementor_custom_icon_set_config',
					dropzone: '.zip_upload',
					submitDelete: '.submitdelete',
					dayInput: '#hidden_jj',
					mmInput: '#hidden_mm',
					yearInput: '#hidden_aa',
					hourInput: '#hidden_hh',
					minuteInput: '#hidden_mn',
					publishButton: '#publish',
					submitMetabox: '#postbox-container-1'
				},
				templates: {
					icon: '<li><div class="icon"><i class="{{icon}}"></i><div class="icon-name">{{label}}</div></div></li>',
					header: jQuery('#elementor-custom-icons-template-header').html(),
					footer: jQuery('#elementor-custom-icons-template-footer').html(),
					duplicatePrefix: jQuery('#elementor-custom-icons-template-duplicate-prefix').html()
				}
			};
		}
	}, {
		key: 'bindEvents',
		value: function bindEvents() {
			var $submitDelete = this.elements.$submitDelete,
			    triggerDelete = function triggerDelete() {
				return $submitDelete[0].click();
			};


			elementorCommon.elements.$document.on('click', '.remove', triggerDelete);

			if ('' !== this.getData()) {
				this.bindOnTitleChange();
			}
		}
	}, {
		key: 'bindOnTitleChange',
		value: function bindOnTitleChange() {
			var _this2 = this;

			var $title = this.elements.$title,
			    onTitleInput = function onTitleInput(event) {
				return _this2.onTitleInput(event);
			};


			$title.on('input change', onTitleInput);
		}
	}, {
		key: 'removeCloseHandle',
		value: function removeCloseHandle() {
			var $metaboxContainer = this.elements.$metaboxContainer;

			$metaboxContainer.find('h2').remove();
			$metaboxContainer.find('button').remove();
			$metaboxContainer.removeClass('closed').removeClass('postbox');
		}
	}, {
		key: 'prepareIconName',
		value: function prepareIconName(icon) {
			var iconName = icon.replace('_', ' ').replace('-', ' ');
			return elementorCommon.helpers.upperCaseWords(iconName);
		}
	}, {
		key: 'getCreatedOn',
		value: function getCreatedOn() {
			var _elements = this.elements,
			    $dayInput = _elements.$dayInput,
			    $mmInput = _elements.$mmInput,
			    $yearInput = _elements.$yearInput,
			    $hourInput = _elements.$hourInput,
			    $minuteInput = _elements.$minuteInput;

			return {
				day: $dayInput.val(),
				mm: $mmInput.val(),
				year: $yearInput.val(),
				hour: $hourInput.val(),
				minute: $minuteInput.val()
			};
		}
	}, {
		key: 'enqueueCSS',
		value: function enqueueCSS(url) {
			if (!elementorCommon.elements.$document.find('link[href="' + url + '"]').length) {
				elementorCommon.elements.$document.find('link:last').after('<link href="' + url + '" rel="stylesheet" type="text/css">');
			}
		}
	}, {
		key: 'setData',
		value: function setData(data) {
			this.elements.$dataInput.val(JSON.stringify(data));
		}
	}, {
		key: 'getData',
		value: function getData() {
			var value = this.elements.$dataInput.val();
			return '' === value ? '' : JSON.parse(value);
		}
	}, {
		key: 'renderIconList',
		value: function renderIconList(config) {
			var _this3 = this;

			var iconTemplate = this.getSettings('templates.icon');
			return config.icons.map(function (icon) {
				var data = {
					icon: config.displayPrefix + ' ' + config.prefix + icon,
					label: _this3.prepareIconName(icon)
				};
				return elementorCommon.compileTemplate(iconTemplate, data);
			}).join('\n');
		}
	}, {
		key: 'renderIcons',
		value: function renderIcons(config) {
			var _elements2 = this.elements,
			    $metaboxContainer = _elements2.$metaboxContainer,
			    $metabox = _elements2.$metabox,
			    $submitMetabox = _elements2.$submitMetabox;

			var _getSettings = this.getSettings('templates'),
			    header = _getSettings.header,
			    footer = _getSettings.footer;

			$metaboxContainer.addClass(this.getSettings('classes.hasIcons'));
			$submitMetabox.show();
			this.setData(config);
			this.enqueueCSS(config.url);
			$metabox.html('');
			$metaboxContainer.prepend(elementorCommon.compileTemplate(header, config));
			$metabox.append('<ul>' + this.renderIconList(config) + '</ul>');
			$metaboxContainer.append(elementorCommon.compileTemplate(footer, this.getCreatedOn()));
		}
	}, {
		key: 'onTitleInput',
		value: function onTitleInput(event) {
			var data = this.getData();
			data.label = event.target.value;
			this.setData(data);
		}
	}, {
		key: 'showAlertDialog',
		value: function showAlertDialog(id, message) {
			var onConfirm = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

			var alertData = {
				id: id,
				message: message
			};
			if (onConfirm) {
				alertData.onConfirm = onConfirm;
			}
			return elementorCommon.dialogsManager.createWidget('alert', alertData).show();
		}
	}, {
		key: 'onSuccess',
		value: function onSuccess(data, dropzoneElement) {
			var _this4 = this;

			if (data.data.errors) {
				var id = void 0,
				    message = void 0;
				jQuery.each(data.data.errors, function (errorId, errorMessage) {
					id = errorId;
					message = errorMessage;
					return false;
				});
				return this.showAlertDialog(id, message);
			}
			if (data.data.config.duplicate_prefix) {
				delete data.data.config.duplicatePrefix;
				return this.showAlertDialog('duplicate-prefix', this.getSettings('templates.duplicatePrefix'), function () {
					return _this4.saveInitialUpload(data.data.config);
				});
			}
			this.saveInitialUpload(data.data.config);
			//
			// this.setData( data.data.config );
			//
			// const { $publishButton, $title } = this.elements;
			// if ( '' === $title.val() ) {
			// 	$title.val( data.data.config.name );
			// }
			// $publishButton.click();
		}
	}, {
		key: 'saveInitialUpload',
		value: function saveInitialUpload(config) {
			this.setData(config);
			var _elements3 = this.elements,
			    $publishButton = _elements3.$publishButton,
			    $title = _elements3.$title,
			    $submitMetabox = _elements3.$submitMetabox;

			$submitMetabox.show();
			if ('' === $title.val()) {
				$title.val(config.name);
			}
			$publishButton.click();
		}
	}, {
		key: 'onInit',
		value: function onInit() {
			var _this5 = this;

			var $body = elementorCommon.elements.$body,
			    _getSettings2 = this.getSettings('classes'),
			    editPageClass = _getSettings2.editPageClass,
			    editPhp = _getSettings2.editPhp;


			if (!$body.hasClass(editPageClass) || $body.hasClass(editPhp)) {
				return;
			}

			_get(CustomIcons.prototype.__proto__ || Object.getPrototypeOf(CustomIcons.prototype), 'onInit', this).call(this);

			this.removeCloseHandle();

			var dropzoneFieldClass = this.getSettings('fields.dropzone'),
			    dropzoneField = new dropzoneFieldClass(),
			    config = this.getData(),
			    _elements4 = this.elements,
			    $dropzone = _elements4.$dropzone,
			    $metaboxContainer = _elements4.$metaboxContainer;


			if ('' === config) {
				$dropzone.show('fast');
				dropzoneField.setSettings('onSuccess', function () {
					return _this5.onSuccess.apply(_this5, arguments);
				});
			} else {
				this.renderIcons(config);
			}
			$metaboxContainer.show('fast');
		}
	}]);

	return CustomIcons;
}(elementorModules.ViewModule);

exports.default = CustomIcons;

/***/ }),

/***/ 68:
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

var DropZoneField = function (_elementorModules$Vie) {
	_inherits(DropZoneField, _elementorModules$Vie);

	function DropZoneField() {
		_classCallCheck(this, DropZoneField);

		return _possibleConstructorReturn(this, (DropZoneField.__proto__ || Object.getPrototypeOf(DropZoneField)).apply(this, arguments));
	}

	_createClass(DropZoneField, [{
		key: 'getDefaultSettings',
		value: function getDefaultSettings() {
			var baseSelector = '.elementor-dropzone-field';
			return {
				droppedFiles: false,
				selectors: {
					dropZone: baseSelector,
					input: baseSelector + ' [type="file"]',
					label: baseSelector + 'label',
					errorMsg: baseSelector + '.box__error span',
					restart: baseSelector + '.box__restart',
					browseButton: baseSelector + ' .elementor--dropzone--upload__browse',
					postId: '#post_ID'
				},
				classes: {
					drag: 'is-dragover',
					error: 'is-error',
					success: 'is-success',
					upload: 'is-uploading'
				},
				onSuccess: null,
				onError: null
			};
		}
	}, {
		key: 'getDefaultElements',
		value: function getDefaultElements() {
			var elements = {};
			var selectors = this.getSettings('selectors');

			jQuery.each(selectors, function (element, selector) {
				elements['$' + element] = jQuery(selector);
			});

			return elements;
		}
	}, {
		key: 'bindEvents',
		value: function bindEvents() {
			var _this2 = this;

			var _elements = this.elements,
			    $dropZone = _elements.$dropZone,
			    $browseButton = _elements.$browseButton,
			    $input = _elements.$input;

			var _getSettings = this.getSettings('classes'),
			    drag = _getSettings.drag;

			$browseButton.on('click', function () {
				return $input.click();
			});
			$dropZone.on('drag dragstart dragend dragover dragenter dragleave drop', function (event) {
				event.preventDefault();
				event.stopPropagation();
			}).on('dragover dragenter', function () {
				$dropZone.addClass(drag);
			}).on('dragleave dragend drop', function () {
				$dropZone.removeClass(drag);
			}).on('drop change', function (event) {
				if ('change' === event.type) {
					_this2.setSettings('droppedFiles', event.originalEvent.target.files);
				} else {
					_this2.setSettings('droppedFiles', event.originalEvent.dataTransfer.files);
				}
				_this2.handleUpload();
			});
		}
	}, {
		key: 'handleUpload',
		value: function handleUpload() {
			var _arguments = arguments;

			var droppedFiles = this.getSettings('droppedFiles');

			if (!droppedFiles) {
				return;
			}

			var _elements2 = this.elements,
			    $input = _elements2.$input,
			    $dropZone = _elements2.$dropZone,
			    $postId = _elements2.$postId,
			    $errorMsg = _elements2.$errorMsg,
			    _getSettings2 = this.getSettings('classes'),
			    error = _getSettings2.error,
			    _success = _getSettings2.success,
			    upload = _getSettings2.upload,
			    _getSettings3 = this.getSettings(),
			    onSuccess = _getSettings3.onSuccess,
			    onError = _getSettings3.onError,
			    ajaxData = new FormData(),
			    fieldName = $input.attr('name'),
			    actionKey = 'pro_assets_manager_custom_icon_upload',
			    self = this;

			Object.entries(droppedFiles).forEach(function (file) {
				ajaxData.append(fieldName, file[1]);
			});

			ajaxData.append('actions', JSON.stringify({
				pro_assets_manager_custom_icon_upload: {
					action: actionKey,
					data: {
						post_id: $postId.val()
					}
				}
			}));

			$dropZone.removeClass(_success).removeClass(error);

			elementorCommon.ajax.send('ajax', {
				data: ajaxData,
				cache: false,
				enctype: 'multipart/form-data',
				contentType: false,
				processData: false,
				xhr: function xhr() {
					var xhr = jQuery.ajaxSettings.xhr();
					//Upload progress
					xhr.upload.onprogress = function (evt) {
						if (evt.lengthComputable) {
							var percentComplete = Math.round(evt.loaded * 100 / evt.total);
							//Do something with upload progress
						}
					};
					return xhr;
				},
				complete: function complete() {
					$dropZone.removeClass(upload);
				},
				success: function success(response) {
					var data = response.responses[actionKey];
					$dropZone.addClass(data.success ? _success : error);
					if (data.success) {
						if (onSuccess) {
							onSuccess(data, self);
						}
					} else {
						$errorMsg.text(data.error);
						if (onError) {
							onError(self, _arguments);
						}
					}
				},
				error: function error() {
					if ('function' === typeof onError) {
						onError(self, _arguments);
					}
				}
			});
		}
	}, {
		key: 'onInit',
		value: function onInit() {
			_get(DropZoneField.prototype.__proto__ || Object.getPrototypeOf(DropZoneField.prototype), 'onInit', this).call(this);
			elementorCommon.elements.$document.trigger('onDropzoneLoaded', [this]);
		}
	}]);

	return DropZoneField;
}(elementorModules.ViewModule);

exports.default = DropZoneField;

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
					button: '#elementor_pro_fa_pro_validate_button',
					kitIdField: '#elementor_font_awesome_pro_kit_id'
				}
			};
		}
	}, {
		key: 'getDefaultElements',
		value: function getDefaultElements() {
			var elements = {};
			var selectors = this.getSettings('selectors');

			jQuery.each(selectors, function (element, selector) {
				elements['$' + element] = jQuery(selector);
			});

			return elements;
		}
	}, {
		key: 'bindEvents',
		value: function bindEvents() {
			var _this2 = this;

			var _elements = this.elements,
			    $button = _elements.$button,
			    $kitIdField = _elements.$kitIdField;

			$button.on('click', function (event) {
				event.preventDefault();
				_this2.testKitUrl();
			});

			$kitIdField.on('change', function () {
				_this2.setState('clear');
			});
		}
	}, {
		key: 'setState',
		value: function setState(type) {
			var classes = ['loading', 'success', 'error'],
			    $button = this.elements.$button;

			var currentClass = void 0,
			    classIndex = void 0;

			for (classIndex in classes) {
				currentClass = classes[classIndex];
				if (type === currentClass) {
					$button.addClass(currentClass);
				} else {
					$button.removeClass(currentClass);
				}
			}
		}
	}, {
		key: 'testKitUrl',
		value: function testKitUrl() {
			this.setState('loading');

			var self = this,
			    kitID = this.elements.$kitIdField.val();

			if ('' === kitID) {
				this.setState('clear');
				return;
			}

			jQuery.ajax({
				url: 'https://kit.fontawesome.com/' + kitID + '.js',
				method: 'GET',
				complete: function complete(xhr) {
					if (200 !== xhr.status) {
						self.setState('error');
					} else {
						self.setState('success');
					}
				}
			});
		}
	}]);

	return _class;
}(elementorModules.ViewModule);

exports.default = _class;

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	var AdvancedRoleManager = __webpack_require__(71);
	this.advancedRoleManager = new AdvancedRoleManager();
};

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	var self = this;
	self.cacheElements = function () {
		this.cache = {
			$checkBox: jQuery('input[name="elementor_exclude_user_roles[]"]'),
			$advanced: jQuery('#elementor_advanced_role_manager')
		};
	};
	self.bindEvents = function () {
		this.cache.$checkBox.on('change', function (event) {
			event.preventDefault();
			self.checkBoxUpdate(jQuery(this));
		});
	};
	self.checkBoxUpdate = function ($element) {
		var role = $element.val();
		if ($element.is(':checked')) {
			self.cache.$advanced.find('div.' + role).addClass('hidden');
		} else {
			self.cache.$advanced.find('div.' + role).removeClass('hidden');
		}
	};
	self.init = function () {
		if (!jQuery('body').hasClass('elementor_page_elementor-role-manager')) {
			return;
		}
		this.cacheElements();
		this.bindEvents();
	};
	self.init();
};

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	var CreateTemplateDialog = __webpack_require__(73);
	this.createTemplateDialog = new CreateTemplateDialog();
};

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	var selectors = {
		templateTypeInput: '#elementor-new-template__form__template-type',
		locationWrapper: '#elementor-new-template__form__location__wrapper',
		postTypeWrapper: '#elementor-new-template__form__post-type__wrapper'
	};

	var elements = {
		$templateTypeInput: null,
		$locationWrapper: null,
		$postTypeWrapper: null
	};

	var setElements = function setElements() {
		jQuery.each(selectors, function (key, selector) {
			key = '$' + key;
			elements[key] = elementorNewTemplate.layout.getModal().getElements('content').find(selector);
		});
	};

	var setLocationFieldVisibility = function setLocationFieldVisibility() {
		elements.$locationWrapper.toggle('section' === elements.$templateTypeInput.val());
		elements.$postTypeWrapper.toggle('single' === elements.$templateTypeInput.val());
	};

	var run = function run() {
		setElements();

		setLocationFieldVisibility();

		elements.$templateTypeInput.change(setLocationFieldVisibility);
	};

	this.init = function () {
		if (!window.elementorNewTemplate) {
			return;
		}

		// Make sure the modal has already been initialized
		elementorNewTemplate.layout.getModal();

		run();
	};

	jQuery(setTimeout.bind(window, this.init));
};

/***/ })

/******/ });
//# sourceMappingURL=admin.js.map