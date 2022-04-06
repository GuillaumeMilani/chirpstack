/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var common_common_pb = require('../common/common_pb.js');
var gw_gw_pb = require('../gw/gw_pb.js');
goog.exportSymbol('proto.meta.DownlinkMeta', null, global);
goog.exportSymbol('proto.meta.UplinkMeta', null, global);

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
proto.meta.UplinkMeta = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.meta.UplinkMeta.repeatedFields_, null);
};
goog.inherits(proto.meta.UplinkMeta, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.meta.UplinkMeta.displayName = 'proto.meta.UplinkMeta';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.meta.UplinkMeta.repeatedFields_ = [3];



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
proto.meta.UplinkMeta.prototype.toObject = function(opt_includeInstance) {
  return proto.meta.UplinkMeta.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.meta.UplinkMeta} msg The msg instance to transform.
 * @return {!Object}
 */
proto.meta.UplinkMeta.toObject = function(includeInstance, msg) {
  var f, obj = {
    devEui: msg.getDevEui(),
    txInfo: (f = msg.getTxInfo()) && gw_gw_pb.UplinkTXInfo.toObject(includeInstance, f),
    rxInfoList: jspb.Message.toObjectList(msg.getRxInfoList(),
    gw_gw_pb.UplinkRXInfo.toObject, includeInstance),
    phyPayloadByteCount: msg.getPhyPayloadByteCount(),
    macCommandByteCount: msg.getMacCommandByteCount(),
    applicationPayloadByteCount: msg.getApplicationPayloadByteCount(),
    messageType: msg.getMessageType()
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
 * @return {!proto.meta.UplinkMeta}
 */
proto.meta.UplinkMeta.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.meta.UplinkMeta;
  return proto.meta.UplinkMeta.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.meta.UplinkMeta} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.meta.UplinkMeta}
 */
proto.meta.UplinkMeta.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDevEui(value);
      break;
    case 2:
      var value = new gw_gw_pb.UplinkTXInfo;
      reader.readMessage(value,gw_gw_pb.UplinkTXInfo.deserializeBinaryFromReader);
      msg.setTxInfo(value);
      break;
    case 3:
      var value = new gw_gw_pb.UplinkRXInfo;
      reader.readMessage(value,gw_gw_pb.UplinkRXInfo.deserializeBinaryFromReader);
      msg.getRxInfoList().push(value);
      msg.setRxInfoList(msg.getRxInfoList());
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPhyPayloadByteCount(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMacCommandByteCount(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setApplicationPayloadByteCount(value);
      break;
    case 7:
      var value = /** @type {!proto.common.MType} */ (reader.readEnum());
      msg.setMessageType(value);
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
 * @param {!proto.meta.UplinkMeta} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.meta.UplinkMeta.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.meta.UplinkMeta.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.meta.UplinkMeta.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getDevEui();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getTxInfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      gw_gw_pb.UplinkTXInfo.serializeBinaryToWriter
    );
  }
  f = this.getRxInfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      gw_gw_pb.UplinkRXInfo.serializeBinaryToWriter
    );
  }
  f = this.getPhyPayloadByteCount();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = this.getMacCommandByteCount();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = this.getApplicationPayloadByteCount();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = this.getMessageType();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.meta.UplinkMeta} The clone.
 */
proto.meta.UplinkMeta.prototype.cloneMessage = function() {
  return /** @type {!proto.meta.UplinkMeta} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string dev_eui = 1;
 * @return {string}
 */
proto.meta.UplinkMeta.prototype.getDevEui = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.meta.UplinkMeta.prototype.setDevEui = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional gw.UplinkTXInfo tx_info = 2;
 * @return {proto.gw.UplinkTXInfo}
 */
proto.meta.UplinkMeta.prototype.getTxInfo = function() {
  return /** @type{proto.gw.UplinkTXInfo} */ (
    jspb.Message.getWrapperField(this, gw_gw_pb.UplinkTXInfo, 2));
};


/** @param {proto.gw.UplinkTXInfo|undefined} value  */
proto.meta.UplinkMeta.prototype.setTxInfo = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.meta.UplinkMeta.prototype.clearTxInfo = function() {
  this.setTxInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.meta.UplinkMeta.prototype.hasTxInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated gw.UplinkRXInfo rx_info = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.gw.UplinkRXInfo>}
 */
proto.meta.UplinkMeta.prototype.getRxInfoList = function() {
  return /** @type{!Array.<!proto.gw.UplinkRXInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, gw_gw_pb.UplinkRXInfo, 3));
};


/** @param {Array.<!proto.gw.UplinkRXInfo>} value  */
proto.meta.UplinkMeta.prototype.setRxInfoList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


proto.meta.UplinkMeta.prototype.clearRxInfoList = function() {
  this.setRxInfoList([]);
};


/**
 * optional uint32 phy_payload_byte_count = 4;
 * @return {number}
 */
proto.meta.UplinkMeta.prototype.getPhyPayloadByteCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 4, 0));
};


/** @param {number} value  */
proto.meta.UplinkMeta.prototype.setPhyPayloadByteCount = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional uint32 mac_command_byte_count = 5;
 * @return {number}
 */
proto.meta.UplinkMeta.prototype.getMacCommandByteCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 5, 0));
};


/** @param {number} value  */
proto.meta.UplinkMeta.prototype.setMacCommandByteCount = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional uint32 application_payload_byte_count = 6;
 * @return {number}
 */
proto.meta.UplinkMeta.prototype.getApplicationPayloadByteCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 6, 0));
};


/** @param {number} value  */
proto.meta.UplinkMeta.prototype.setApplicationPayloadByteCount = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional common.MType message_type = 7;
 * @return {!proto.common.MType}
 */
proto.meta.UplinkMeta.prototype.getMessageType = function() {
  return /** @type {!proto.common.MType} */ (jspb.Message.getFieldProto3(this, 7, 0));
};


/** @param {!proto.common.MType} value  */
proto.meta.UplinkMeta.prototype.setMessageType = function(value) {
  jspb.Message.setField(this, 7, value);
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
proto.meta.DownlinkMeta = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.meta.DownlinkMeta, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.meta.DownlinkMeta.displayName = 'proto.meta.DownlinkMeta';
}


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
proto.meta.DownlinkMeta.prototype.toObject = function(opt_includeInstance) {
  return proto.meta.DownlinkMeta.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.meta.DownlinkMeta} msg The msg instance to transform.
 * @return {!Object}
 */
proto.meta.DownlinkMeta.toObject = function(includeInstance, msg) {
  var f, obj = {
    devEui: msg.getDevEui(),
    multicastGroupId: msg.getMulticastGroupId(),
    txInfo: (f = msg.getTxInfo()) && gw_gw_pb.DownlinkTXInfo.toObject(includeInstance, f),
    phyPayloadByteCount: msg.getPhyPayloadByteCount(),
    macCommandByteCount: msg.getMacCommandByteCount(),
    applicationPayloadByteCount: msg.getApplicationPayloadByteCount(),
    messageType: msg.getMessageType(),
    gatewayId: msg.getGatewayId()
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
 * @return {!proto.meta.DownlinkMeta}
 */
proto.meta.DownlinkMeta.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.meta.DownlinkMeta;
  return proto.meta.DownlinkMeta.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.meta.DownlinkMeta} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.meta.DownlinkMeta}
 */
proto.meta.DownlinkMeta.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDevEui(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMulticastGroupId(value);
      break;
    case 3:
      var value = new gw_gw_pb.DownlinkTXInfo;
      reader.readMessage(value,gw_gw_pb.DownlinkTXInfo.deserializeBinaryFromReader);
      msg.setTxInfo(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPhyPayloadByteCount(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMacCommandByteCount(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setApplicationPayloadByteCount(value);
      break;
    case 7:
      var value = /** @type {!proto.common.MType} */ (reader.readEnum());
      msg.setMessageType(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setGatewayId(value);
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
 * @param {!proto.meta.DownlinkMeta} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.meta.DownlinkMeta.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.meta.DownlinkMeta.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.meta.DownlinkMeta.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getDevEui();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getMulticastGroupId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getTxInfo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      gw_gw_pb.DownlinkTXInfo.serializeBinaryToWriter
    );
  }
  f = this.getPhyPayloadByteCount();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = this.getMacCommandByteCount();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = this.getApplicationPayloadByteCount();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = this.getMessageType();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = this.getGatewayId();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.meta.DownlinkMeta} The clone.
 */
proto.meta.DownlinkMeta.prototype.cloneMessage = function() {
  return /** @type {!proto.meta.DownlinkMeta} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string dev_eui = 1;
 * @return {string}
 */
proto.meta.DownlinkMeta.prototype.getDevEui = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.meta.DownlinkMeta.prototype.setDevEui = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string multicast_group_id = 2;
 * @return {string}
 */
proto.meta.DownlinkMeta.prototype.getMulticastGroupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
proto.meta.DownlinkMeta.prototype.setMulticastGroupId = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional gw.DownlinkTXInfo tx_info = 3;
 * @return {proto.gw.DownlinkTXInfo}
 */
proto.meta.DownlinkMeta.prototype.getTxInfo = function() {
  return /** @type{proto.gw.DownlinkTXInfo} */ (
    jspb.Message.getWrapperField(this, gw_gw_pb.DownlinkTXInfo, 3));
};


/** @param {proto.gw.DownlinkTXInfo|undefined} value  */
proto.meta.DownlinkMeta.prototype.setTxInfo = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.meta.DownlinkMeta.prototype.clearTxInfo = function() {
  this.setTxInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.meta.DownlinkMeta.prototype.hasTxInfo = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint32 phy_payload_byte_count = 4;
 * @return {number}
 */
proto.meta.DownlinkMeta.prototype.getPhyPayloadByteCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 4, 0));
};


/** @param {number} value  */
proto.meta.DownlinkMeta.prototype.setPhyPayloadByteCount = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional uint32 mac_command_byte_count = 5;
 * @return {number}
 */
proto.meta.DownlinkMeta.prototype.getMacCommandByteCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 5, 0));
};


/** @param {number} value  */
proto.meta.DownlinkMeta.prototype.setMacCommandByteCount = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional uint32 application_payload_byte_count = 6;
 * @return {number}
 */
proto.meta.DownlinkMeta.prototype.getApplicationPayloadByteCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 6, 0));
};


/** @param {number} value  */
proto.meta.DownlinkMeta.prototype.setApplicationPayloadByteCount = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional common.MType message_type = 7;
 * @return {!proto.common.MType}
 */
proto.meta.DownlinkMeta.prototype.getMessageType = function() {
  return /** @type {!proto.common.MType} */ (jspb.Message.getFieldProto3(this, 7, 0));
};


/** @param {!proto.common.MType} value  */
proto.meta.DownlinkMeta.prototype.setMessageType = function(value) {
  jspb.Message.setField(this, 7, value);
};


/**
 * optional string gateway_id = 8;
 * @return {string}
 */
proto.meta.DownlinkMeta.prototype.getGatewayId = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 8, ""));
};


/** @param {string} value  */
proto.meta.DownlinkMeta.prototype.setGatewayId = function(value) {
  jspb.Message.setField(this, 8, value);
};


goog.object.extend(exports, proto.meta);
