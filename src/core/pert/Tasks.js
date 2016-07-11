goog.provide('anychart.core.pert.Tasks');

goog.require('anychart.core.pert.PertVisualElements');
goog.require('anychart.core.ui.LabelsFactory');



/**
 * Pert milestones settings collector.
 * @constructor
 * @extends {anychart.core.pert.PertVisualElements}
 */
anychart.core.pert.Tasks = function() {
  anychart.core.pert.Tasks.base(this, 'constructor');

  /**
   * Lower labels.
   * @type {anychart.core.ui.LabelsFactory}
   * @private
   */
  this.lowerLabels_;

  /**
   * Hover lower labels.
   * @type {anychart.core.ui.LabelsFactory}
   * @private
   */
  this.hoverLowerLabels_;

  /**
   * Select labels.
   * @type {anychart.core.ui.LabelsFactory}
   * @private
   */
  this.selectLowerLabels_;


  /**
   * @type {acgraph.vector.Fill}
   * @private
   */
  this.dummyFill_;

  ///**
  // * @type {acgraph.vector.Fill}
  // * @private
  // */
  //this.hoverDummyFill_;
  //
  ///**
  // * @type {acgraph.vector.Fill}
  // * @private
  // */
  //this.selectDummyFill_;

  /**
   * @type {acgraph.vector.Stroke}
   * @private
   */
  this.dummyStroke_;

  ///**
  // * @type {acgraph.vector.Stroke}
  // * @private
  // */
  //this.hoverDummyStroke_;
  //
  ///**
  // * @type {acgraph.vector.Stroke}
  // * @private
  // */
  //this.selectDummyStroke_;
};
goog.inherits(anychart.core.pert.Tasks, anychart.core.pert.PertVisualElements);


/**
 * Supported signals mask.
 * @type {number}
 */
anychart.core.pert.Tasks.prototype.SUPPORTED_SIGNALS =
    anychart.core.pert.PertVisualElements.prototype.SUPPORTED_SIGNALS;


/**
 * Getter/setter for dummy fill.
 * @param {(!acgraph.vector.Fill|!Array.<(acgraph.vector.GradientKey|string)>|null)=} opt_fillOrColorOrKeys .
 * @param {number=} opt_opacityOrAngleOrCx .
 * @param {(number|boolean|!anychart.math.Rect|!{left:number,top:number,width:number,height:number})=} opt_modeOrCy .
 * @param {(number|!anychart.math.Rect|!{left:number,top:number,width:number,height:number}|null)=} opt_opacityOrMode .
 * @param {number=} opt_opacity .
 * @param {number=} opt_fx .
 * @param {number=} opt_fy .
 * @return {acgraph.vector.Fill|anychart.core.pert.Tasks} .
 */
anychart.core.pert.Tasks.prototype.dummyFill = function(opt_fillOrColorOrKeys, opt_opacityOrAngleOrCx, opt_modeOrCy, opt_opacityOrMode, opt_opacity, opt_fx, opt_fy) {
  if (goog.isDef(opt_fillOrColorOrKeys)) {
    var val = acgraph.vector.normalizeFill.apply(null, arguments);
    if (!anychart.color.equals(/** @type {acgraph.vector.Fill} */ (this.dummyFill_), val)) {
      this.dummyFill_ = /** @type {acgraph.vector.Fill} */ (val);
      this.dispatchSignal(anychart.Signal.NEEDS_REDRAW_APPEARANCE);
    }
    return this;
  }
  return this.dummyFill_;
};


///**
// * Getter/setter for hoverDummyFill.
// * @param {(!acgraph.vector.Fill|!Array.<(acgraph.vector.GradientKey|string)>|null)=} opt_fillOrColorOrKeys .
// * @param {number=} opt_opacityOrAngleOrCx .
// * @param {(number|boolean|!anychart.math.Rect|!{left:number,top:number,width:number,height:number})=} opt_modeOrCy .
// * @param {(number|!anychart.math.Rect|!{left:number,top:number,width:number,height:number}|null)=} opt_opacityOrMode .
// * @param {number=} opt_opacity .
// * @param {number=} opt_fx .
// * @param {number=} opt_fy .
// * @return {acgraph.vector.Fill|anychart.core.pert.Tasks} .
// */
//anychart.core.pert.Tasks.prototype.hoverDummyFill = function(opt_fillOrColorOrKeys, opt_opacityOrAngleOrCx, opt_modeOrCy, opt_opacityOrMode, opt_opacity, opt_fx, opt_fy) {
//  if (goog.isDef(opt_fillOrColorOrKeys)) {
//    var val = acgraph.vector.normalizeFill.apply(null, arguments);
//    if (!anychart.color.equals(/** @type {acgraph.vector.Fill} */ (this.hoverDummyFill_), val)) {
//      this.hoverDummyFill_ = /** @type {acgraph.vector.Fill} */ (val);
//      this.dispatchSignal(anychart.Signal.NEEDS_REDRAW_APPEARANCE);
//    }
//    return this;
//  }
//  return this.hoverDummyFill_;
//};
//
//
///**
// * Getter/setter for selectDummyFill.
// * @param {(!acgraph.vector.Fill|!Array.<(acgraph.vector.GradientKey|string)>|null)=} opt_fillOrColorOrKeys .
// * @param {number=} opt_opacityOrAngleOrCx .
// * @param {(number|boolean|!anychart.math.Rect|!{left:number,top:number,width:number,height:number})=} opt_modeOrCy .
// * @param {(number|!anychart.math.Rect|!{left:number,top:number,width:number,height:number}|null)=} opt_opacityOrMode .
// * @param {number=} opt_opacity .
// * @param {number=} opt_fx .
// * @param {number=} opt_fy .
// * @return {acgraph.vector.Fill|anychart.core.pert.Tasks} .
// */
//anychart.core.pert.Tasks.prototype.selectDummyFill = function(opt_fillOrColorOrKeys, opt_opacityOrAngleOrCx, opt_modeOrCy, opt_opacityOrMode, opt_opacity, opt_fx, opt_fy) {
//  if (goog.isDef(opt_fillOrColorOrKeys)) {
//    var val = acgraph.vector.normalizeFill.apply(null, arguments);
//    if (!anychart.color.equals(/** @type {acgraph.vector.Fill} */ (this.selectDummyFill_), val)) {
//      this.selectDummyFill_ = /** @type {acgraph.vector.Fill} */ (val);
//      this.dispatchSignal(anychart.Signal.NEEDS_REDRAW_APPEARANCE);
//    }
//    return this;
//  }
//  return this.selectDummyFill_;
//};


/**
 * Getter/setter for dummy stroke settings.
 * @param {(acgraph.vector.Stroke|acgraph.vector.ColoredFill|string|null)=} opt_strokeOrFill Fill settings
 *    or stroke settings.
 * @param {number=} opt_thickness [1] Line thickness.
 * @param {string=} opt_dashpattern Controls the pattern of dashes and gaps used to stroke paths.
 * @param {acgraph.vector.StrokeLineJoin=} opt_lineJoin Line join style.
 * @param {acgraph.vector.StrokeLineCap=} opt_lineCap Line cap style.
 * @return {anychart.core.pert.Tasks|acgraph.vector.Stroke} .
 */
anychart.core.pert.Tasks.prototype.dummyStroke = function(opt_strokeOrFill, opt_thickness, opt_dashpattern, opt_lineJoin, opt_lineCap) {
  if (goog.isDef(opt_strokeOrFill)) {
    var val = acgraph.vector.normalizeStroke.apply(null, arguments);
    if (!anychart.color.equals(/** @type {acgraph.vector.Stroke} */ (this.dummyStroke_), val)) {
      this.dummyStroke_ = /** @type {acgraph.vector.Stroke} */ (val);
      this.dispatchSignal(anychart.Signal.NEEDS_REDRAW_APPEARANCE);
    }
    return this;
  }
  return this.dummyStroke_;
};


///**
// * Getter/setter for hover dummy stroke settings.
// * @param {(acgraph.vector.Stroke|acgraph.vector.ColoredFill|string|null)=} opt_strokeOrFill Fill settings
// *    or stroke settings.
// * @param {number=} opt_thickness [1] Line thickness.
// * @param {string=} opt_dashpattern Controls the pattern of dashes and gaps used to stroke paths.
// * @param {acgraph.vector.StrokeLineJoin=} opt_lineJoin Line join style.
// * @param {acgraph.vector.StrokeLineCap=} opt_lineCap Line cap style.
// * @return {anychart.core.pert.Tasks|acgraph.vector.Stroke} .
// */
//anychart.core.pert.Tasks.prototype.hoverDummyStroke = function(opt_strokeOrFill, opt_thickness, opt_dashpattern, opt_lineJoin, opt_lineCap) {
//  if (goog.isDef(opt_strokeOrFill)) {
//    var val = acgraph.vector.normalizeStroke.apply(null, arguments);
//    if (!anychart.color.equals(/** @type {acgraph.vector.Stroke} */ (this.hoverDummyStroke_), val)) {
//      this.hoverDummyStroke_ = /** @type {acgraph.vector.Stroke} */ (val);
//      this.dispatchSignal(anychart.Signal.NEEDS_REDRAW_APPEARANCE);
//    }
//    return this;
//  }
//  return this.hoverDummyStroke_;
//};
//
//
///**
// * Getter/setter for select dummy stroke settings.
// * @param {(acgraph.vector.Stroke|acgraph.vector.ColoredFill|string|null)=} opt_strokeOrFill Fill settings
// *    or stroke settings.
// * @param {number=} opt_thickness - Line thickness.
// * @param {string=} opt_dashpattern Controls the pattern of dashes and gaps used to stroke paths.
// * @param {acgraph.vector.StrokeLineJoin=} opt_lineJoin Line join style.
// * @param {acgraph.vector.StrokeLineCap=} opt_lineCap Line cap style.
// * @return {anychart.core.pert.Tasks|acgraph.vector.Stroke} .
// */
//anychart.core.pert.Tasks.prototype.selectDummyStroke = function(opt_strokeOrFill, opt_thickness, opt_dashpattern, opt_lineJoin, opt_lineCap) {
//  if (goog.isDef(opt_strokeOrFill)) {
//    var val = acgraph.vector.normalizeStroke.apply(null, arguments);
//    if (!anychart.color.equals(/** @type {acgraph.vector.Stroke} */ (this.selectDummyStroke_), val)) {
//      this.selectDummyStroke_ = /** @type {acgraph.vector.Stroke} */ (val);
//      this.dispatchSignal(anychart.Signal.NEEDS_REDRAW_APPEARANCE);
//    }
//    return this;
//  }
//  return this.selectDummyStroke_;
//};


/**
 * Gets or sets lower labels settings.
 * @param {(Object|boolean|null)=} opt_value - Labels settings.
 * @return {anychart.core.ui.LabelsFactory|anychart.core.pert.Tasks} - Labels instance or itself for chaining call.
 */
anychart.core.pert.Tasks.prototype.lowerLabels = function(opt_value) {
  if (!this.lowerLabels_) {
    this.lowerLabels_ = new anychart.core.ui.LabelsFactory();
    this.lowerLabels_.listenSignals(this.labelsInvalidated, this);
    this.registerDisposable(this.lowerLabels_);
  }

  if (goog.isDef(opt_value)) {
    if (goog.isObject(opt_value) && !(anychart.opt.ENABLED in opt_value))
      opt_value[anychart.opt.ENABLED] = true;
    this.lowerLabels_.setup(opt_value);
    return this;
  }
  return this.lowerLabels_;
};


/**
 * Gets or sets select lower labels settings.
 * @param {(Object|boolean|null)=} opt_value - Labels settings.
 * @return {anychart.core.ui.LabelsFactory|anychart.core.pert.Tasks} - Labels instance or itself for chaining call.
 */
anychart.core.pert.Tasks.prototype.selectLowerLabels = function(opt_value) {
  if (!this.selectLowerLabels_) {
    this.selectLowerLabels_ = new anychart.core.ui.LabelsFactory();
    this.selectLowerLabels_.listenSignals(this.labelsInvalidated, this);
    this.registerDisposable(this.selectLowerLabels_);
  }

  if (goog.isDef(opt_value)) {
    if (goog.isObject(opt_value) && !(anychart.opt.ENABLED in opt_value))
      opt_value[anychart.opt.ENABLED] = true;
    this.selectLowerLabels_.setup(opt_value);
    return this;
  }
  return this.selectLowerLabels_;
};


/**
 * Gets or sets hover lower labels settings.
 * @param {(Object|boolean|null)=} opt_value - Labels settings.
 * @return {anychart.core.ui.LabelsFactory|anychart.core.pert.Tasks} - Labels instance or itself for chaining call.
 */
anychart.core.pert.Tasks.prototype.hoverLowerLabels = function(opt_value) {
  if (!this.hoverLowerLabels_) {
    this.hoverLowerLabels_ = new anychart.core.ui.LabelsFactory();
    this.hoverLowerLabels_.listenSignals(this.labelsInvalidated, this);
    this.registerDisposable(this.hoverLowerLabels_);
  }

  if (goog.isDef(opt_value)) {
    if (goog.isObject(opt_value) && !(anychart.opt.ENABLED in opt_value))
      opt_value[anychart.opt.ENABLED] = true;
    this.hoverLowerLabels_.setup(opt_value);
    return this;
  }
  return this.hoverLowerLabels_;
};


/**
 * Gets or sets upper labels settings.
 * @param {(Object|boolean|null)=} opt_value - Labels settings.
 * @return {anychart.core.ui.LabelsFactory|anychart.core.pert.Tasks} - Labels instance or itself for chaining call.
 */
anychart.core.pert.Tasks.prototype.upperLabels = function(opt_value) {
  return /** @type {anychart.core.ui.LabelsFactory|anychart.core.pert.Tasks} */ (this.labels(opt_value));
};


/**
 * Gets or sets select upper labels settings.
 * @param {(Object|boolean|null)=} opt_value - Labels settings.
 * @return {anychart.core.ui.LabelsFactory|anychart.core.pert.Tasks} - Labels instance or itself for chaining call.
 */
anychart.core.pert.Tasks.prototype.selectUpperLabels = function(opt_value) {
  return /** @type {anychart.core.ui.LabelsFactory|anychart.core.pert.Tasks} */ (this.selectLabels(opt_value));
};


/**
 * Gets or sets hover labels settings.
 * @param {(Object|boolean|null)=} opt_value - Labels settings.
 * @return {anychart.core.ui.LabelsFactory|anychart.core.pert.Tasks} - Labels instance or itself for chaining call.
 */
anychart.core.pert.Tasks.prototype.hoverUpperLabels = function(opt_value) {
  return /** @type {anychart.core.ui.LabelsFactory|anychart.core.pert.Tasks} */ (this.hoverLabels(opt_value));
};


/**
 * @inheritDoc
 */
anychart.core.pert.Tasks.prototype.labelsContainer = function(opt_value) {
  anychart.core.pert.Tasks.base(this, 'labelsContainer', opt_value);
  var container = anychart.core.pert.Tasks.base(this, 'labelsContainer');
  if (container) this.lowerLabels().container(/** @type {acgraph.vector.ILayer} */ (container));
  return container;
};


/**
 * @inheritDoc
 */
anychart.core.pert.Tasks.prototype.clearLabels = function() {
  this.lowerLabels().clear();
  return anychart.core.pert.Tasks.base(this, 'clearLabels');
};


/** @inheritDoc */
anychart.core.pert.Tasks.prototype.serialize = function() {
  var json = anychart.core.pert.Tasks.base(this, 'serialize');

  json['upperLabels'] = goog.object.clone(json['labels']);
  delete json['labels'];

  json['selectUpperLabels'] = goog.object.clone(json['selectLabels']);
  delete json['selectLabels'];

  json['hoverUpperLabels'] = goog.object.clone(json['hoverLabels']);
  delete json['hoverLabels'];

  json['dummyFill'] = anychart.color.serialize(/** @type {acgraph.vector.Fill}*/(this.dummyFill()));
  //json['hoverDummyFill'] = anychart.color.serialize(/** @type {acgraph.vector.Fill}*/(this.hoverDummyFill()));
  //json['selectDummyFill'] = anychart.color.serialize(/** @type {acgraph.vector.Fill}*/(this.selectDummyFill()));
  json['dummyStroke'] = anychart.color.serialize(/** @type {acgraph.vector.Stroke}*/(this.dummyStroke()));
  //json['hoverDummyStroke'] = anychart.color.serialize(/** @type {acgraph.vector.Stroke}*/(this.hoverDummyStroke()));
  //json['selectDummyStroke'] = anychart.color.serialize(/** @type {acgraph.vector.Stroke}*/(this.selectDummyStroke()));


  json['lowerLabels'] = this.lowerLabels().serialize();
  json['hoverLowerLabels'] = this.hoverLowerLabels().serialize();
  json['selectLowerLabels'] = this.selectLowerLabels().serialize();

  return json;
};


/** @inheritDoc */
anychart.core.pert.Tasks.prototype.setupByJSON = function(config) {
  anychart.core.pert.Tasks.base(this, 'setupByJSON', config);
  this.upperLabels(config['upperLabels']);
  this.selectUpperLabels(config['selectUpperLabels']);
  this.hoverUpperLabels(config['hoverUpperLabels']);
  this.lowerLabels(config['lowerLabels']);
  this.hoverLowerLabels(config['hoverLowerLabels']);
  this.selectLowerLabels(config['selectLowerLabels']);

  this.dummyFill(config['dummyFill']);
  //this.hoverDummyFill(config['hoverDummyFill']);
  //this.selectDummyFill(config['selectDummyFill']);
  this.dummyStroke(config['dummyStroke']);
  //this.hoverDummyStroke(config['hoverDummyStroke']);
  //this.selectDummyStroke(config['selectDummyStroke']);
};


//exports
anychart.core.pert.Tasks.prototype['fill'] = anychart.core.pert.Tasks.prototype.fill;
anychart.core.pert.Tasks.prototype['hoverFill'] = anychart.core.pert.Tasks.prototype.hoverFill;
anychart.core.pert.Tasks.prototype['selectFill'] = anychart.core.pert.Tasks.prototype.selectFill;
anychart.core.pert.Tasks.prototype['stroke'] = anychart.core.pert.Tasks.prototype.stroke;
anychart.core.pert.Tasks.prototype['hoverStroke'] = anychart.core.pert.Tasks.prototype.hoverStroke;
anychart.core.pert.Tasks.prototype['selectStroke'] = anychart.core.pert.Tasks.prototype.selectStroke;

anychart.core.pert.Tasks.prototype['dummyFill'] = anychart.core.pert.Tasks.prototype.dummyFill;
//anychart.core.pert.Tasks.prototype['hoverDummyFill'] = anychart.core.pert.Tasks.prototype.hoverDummyFill;
//anychart.core.pert.Tasks.prototype['selectDummyFill'] = anychart.core.pert.Tasks.prototype.selectDummyFill;
anychart.core.pert.Tasks.prototype['dummyStroke'] = anychart.core.pert.Tasks.prototype.dummyStroke;
//anychart.core.pert.Tasks.prototype['hoverDummyStroke'] = anychart.core.pert.Tasks.prototype.hoverDummyStroke;
//anychart.core.pert.Tasks.prototype['selectDummyStroke'] = anychart.core.pert.Tasks.prototype.selectDummyStroke;

anychart.core.pert.Tasks.prototype['upperLabels'] = anychart.core.pert.Tasks.prototype.upperLabels;
anychart.core.pert.Tasks.prototype['selectUpperLabels'] = anychart.core.pert.Tasks.prototype.selectUpperLabels;
anychart.core.pert.Tasks.prototype['hoverUpperLabels'] = anychart.core.pert.Tasks.prototype.hoverUpperLabels;
anychart.core.pert.Tasks.prototype['tooltip'] = anychart.core.pert.Tasks.prototype.tooltip;
anychart.core.pert.Tasks.prototype['lowerLabels'] = anychart.core.pert.Tasks.prototype.lowerLabels;
anychart.core.pert.Tasks.prototype['hoverLowerLabels'] = anychart.core.pert.Tasks.prototype.hoverLowerLabels;
anychart.core.pert.Tasks.prototype['selectLowerLabels'] = anychart.core.pert.Tasks.prototype.selectLowerLabels;