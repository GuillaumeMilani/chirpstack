/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_api_metric_pb = require('../../google/api/metric_pb.js');
goog.exportSymbol('proto.google.api.Billing', null, global);
goog.exportSymbol('proto.google.api.Billing.BillingDestination', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.api.Billing = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.api.Billing.repeatedFields_, null);
};
goog.inherits(proto.google.api.Billing, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.api.Billing.displayName = 'proto.google.api.Billing';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.api.Billing.repeatedFields_ = [8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.api.Billing.prototype.toObject = function(opt_includeInstance) {
  return proto.google.api.Billing.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.api.Billing} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.api.Billing.toObject = function(includeInstance, msg) {
  var f, obj = {
    consumerDestinationsList: jspb.Message.toObjectList(msg.getConsumerDestinationsList(),
    proto.google.api.Billing.BillingDestination.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.api.Billing}
 */
proto.google.api.Billing.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.api.Billing;
  return proto.google.api.Billing.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.api.Billing} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.api.Billing}
 */
proto.google.api.Billing.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 8:
      var value = new proto.google.api.Billing.BillingDestination;
      reader.readMessage(value,proto.google.api.Billing.BillingDestination.deserializeBinaryFromReader);
      msg.getConsumerDestinationsList().push(value);
      msg.setConsumerDestinationsList(msg.getConsumerDestinationsList());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.google.api.Billing} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.api.Billing.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.api.Billing.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.api.Billing.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getConsumerDestinationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.google.api.Billing.BillingDestination.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.google.api.Billing} The clone.
 */
proto.google.api.Billing.prototype.cloneMessage = function() {
  return /** @type {!proto.google.api.Billing} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated BillingDestination consumer_destinations = 8;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.google.api.Billing.BillingDestination>}
 */
proto.google.api.Billing.prototype.getConsumerDestinationsList = function() {
  return /** @type{!Array.<!proto.google.api.Billing.BillingDestination>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.api.Billing.BillingDestination, 8));
};


/** @param {Array.<!proto.google.api.Billing.BillingDestination>} value  */
proto.google.api.Billing.prototype.setConsumerDestinationsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 8, value);
};


proto.google.api.Billing.prototype.clearConsumerDestinationsList = function() {
  this.setConsumerDestinationsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.api.Billing.BillingDestination = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.api.Billing.BillingDestination.repeatedFields_, null);
};
goog.inherits(proto.google.api.Billing.BillingDestination, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.api.Billing.BillingDestination.displayName = 'proto.google.api.Billing.BillingDestination';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.api.Billing.BillingDestination.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.api.Billing.BillingDestination.prototype.toObject = function(opt_includeInstance) {
  return proto.google.api.Billing.BillingDestination.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.api.Billing.BillingDestination} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.api.Billing.BillingDestination.toObject = function(includeInstance, msg) {
  var f, obj = {
    monitoredResource: msg.getMonitoredResource(),
    metricsList: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.api.Billing.BillingDestination}
 */
proto.google.api.Billing.BillingDestination.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.api.Billing.BillingDestination;
  return proto.google.api.Billing.BillingDestination.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.api.Billing.BillingDestination} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.api.Billing.BillingDestination}
 */
proto.google.api.Billing.BillingDestination.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMonitoredResource(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.getMetricsList().push(value);
      msg.setMetricsList(msg.getMetricsList());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.google.api.Billing.BillingDestination} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.api.Billing.BillingDestination.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.api.Billing.BillingDestination.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.api.Billing.BillingDestination.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getMonitoredResource();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getMetricsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.google.api.Billing.BillingDestination} The clone.
 */
proto.google.api.Billing.BillingDestination.prototype.cloneMessage = function() {
  return /** @type {!proto.google.api.Billing.BillingDestination} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string monitored_resource = 1;
 * @return {string}
 */
proto.google.api.Billing.BillingDestination.prototype.getMonitoredResource = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.google.api.Billing.BillingDestination.prototype.setMonitoredResource = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * repeated string metrics = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<string>}
 */
proto.google.api.Billing.BillingDestination.prototype.getMetricsList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getField(this, 2));
};


/** @param {Array.<string>} value  */
proto.google.api.Billing.BillingDestination.prototype.setMetricsList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


proto.google.api.Billing.BillingDestination.prototype.clearMetricsList = function() {
  jspb.Message.setField(this, 2, []);
};


goog.object.extend(exports, proto.google.api);
