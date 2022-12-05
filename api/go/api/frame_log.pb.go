// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.0
// 	protoc        v3.21.9
// source: api/frame_log.proto

package api

import (
	common "github.com/chirpstack/chirpstack/api/go/v4/common"
	gw "github.com/chirpstack/chirpstack/api/go/v4/gw"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	timestamppb "google.golang.org/protobuf/types/known/timestamppb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type UplinkFrameLog struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// PHYPayload.
	PhyPayload []byte `protobuf:"bytes,1,opt,name=phy_payload,json=phyPayload,proto3" json:"phy_payload,omitempty"`
	// TX meta-data.
	TxInfo *gw.UplinkTxInfo `protobuf:"bytes,2,opt,name=tx_info,json=txInfo,proto3" json:"tx_info,omitempty"`
	// RX meta-data.
	RxInfo []*gw.UplinkRxInfo `protobuf:"bytes,3,rep,name=rx_info,json=rxInfo,proto3" json:"rx_info,omitempty"`
	// Message type.
	MType common.MType `protobuf:"varint,4,opt,name=m_type,json=mType,proto3,enum=common.MType" json:"m_type,omitempty"`
	// Device address (optional).
	DevAddr string `protobuf:"bytes,5,opt,name=dev_addr,json=devAddr,proto3" json:"dev_addr,omitempty"`
	// Device EUI (optional).
	DevEui string `protobuf:"bytes,6,opt,name=dev_eui,json=devEui,proto3" json:"dev_eui,omitempty"`
	// Time.
	Time *timestamppb.Timestamp `protobuf:"bytes,7,opt,name=time,proto3" json:"time,omitempty"`
	// Plaintext mac-commands.
	PlaintextMacCommands bool `protobuf:"varint,8,opt,name=plaintext_mac_commands,json=plaintextMacCommands,proto3" json:"plaintext_mac_commands,omitempty"`
}

func (x *UplinkFrameLog) Reset() {
	*x = UplinkFrameLog{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_frame_log_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UplinkFrameLog) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UplinkFrameLog) ProtoMessage() {}

func (x *UplinkFrameLog) ProtoReflect() protoreflect.Message {
	mi := &file_api_frame_log_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UplinkFrameLog.ProtoReflect.Descriptor instead.
func (*UplinkFrameLog) Descriptor() ([]byte, []int) {
	return file_api_frame_log_proto_rawDescGZIP(), []int{0}
}

func (x *UplinkFrameLog) GetPhyPayload() []byte {
	if x != nil {
		return x.PhyPayload
	}
	return nil
}

func (x *UplinkFrameLog) GetTxInfo() *gw.UplinkTxInfo {
	if x != nil {
		return x.TxInfo
	}
	return nil
}

func (x *UplinkFrameLog) GetRxInfo() []*gw.UplinkRxInfo {
	if x != nil {
		return x.RxInfo
	}
	return nil
}

func (x *UplinkFrameLog) GetMType() common.MType {
	if x != nil {
		return x.MType
	}
	return common.MType(0)
}

func (x *UplinkFrameLog) GetDevAddr() string {
	if x != nil {
		return x.DevAddr
	}
	return ""
}

func (x *UplinkFrameLog) GetDevEui() string {
	if x != nil {
		return x.DevEui
	}
	return ""
}

func (x *UplinkFrameLog) GetTime() *timestamppb.Timestamp {
	if x != nil {
		return x.Time
	}
	return nil
}

func (x *UplinkFrameLog) GetPlaintextMacCommands() bool {
	if x != nil {
		return x.PlaintextMacCommands
	}
	return false
}

type DownlinkFrameLog struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Time.
	Time *timestamppb.Timestamp `protobuf:"bytes,1,opt,name=time,proto3" json:"time,omitempty"`
	// PHYPayload.
	PhyPayload []byte `protobuf:"bytes,2,opt,name=phy_payload,json=phyPayload,proto3" json:"phy_payload,omitempty"`
	// TX meta-data.
	TxInfo *gw.DownlinkTxInfo `protobuf:"bytes,3,opt,name=tx_info,json=txInfo,proto3" json:"tx_info,omitempty"`
	// Downlink ID.
	DownlinkId uint32 `protobuf:"varint,4,opt,name=downlink_id,json=downlinkId,proto3" json:"downlink_id,omitempty"`
	// Gateway ID (EUI64).
	GatewayId string `protobuf:"bytes,5,opt,name=gateway_id,json=gatewayId,proto3" json:"gateway_id,omitempty"`
	// Message type.
	MType common.MType `protobuf:"varint,6,opt,name=m_type,json=mType,proto3,enum=common.MType" json:"m_type,omitempty"`
	// Device address (optional).
	DevAddr string `protobuf:"bytes,7,opt,name=dev_addr,json=devAddr,proto3" json:"dev_addr,omitempty"`
	// Device EUI (optional).
	DevEui string `protobuf:"bytes,8,opt,name=dev_eui,json=devEui,proto3" json:"dev_eui,omitempty"`
	// Plaintext mac-commands.
	PlaintextMacCommands bool `protobuf:"varint,9,opt,name=plaintext_mac_commands,json=plaintextMacCommands,proto3" json:"plaintext_mac_commands,omitempty"`
}

func (x *DownlinkFrameLog) Reset() {
	*x = DownlinkFrameLog{}
	if protoimpl.UnsafeEnabled {
		mi := &file_api_frame_log_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DownlinkFrameLog) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DownlinkFrameLog) ProtoMessage() {}

func (x *DownlinkFrameLog) ProtoReflect() protoreflect.Message {
	mi := &file_api_frame_log_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DownlinkFrameLog.ProtoReflect.Descriptor instead.
func (*DownlinkFrameLog) Descriptor() ([]byte, []int) {
	return file_api_frame_log_proto_rawDescGZIP(), []int{1}
}

func (x *DownlinkFrameLog) GetTime() *timestamppb.Timestamp {
	if x != nil {
		return x.Time
	}
	return nil
}

func (x *DownlinkFrameLog) GetPhyPayload() []byte {
	if x != nil {
		return x.PhyPayload
	}
	return nil
}

func (x *DownlinkFrameLog) GetTxInfo() *gw.DownlinkTxInfo {
	if x != nil {
		return x.TxInfo
	}
	return nil
}

func (x *DownlinkFrameLog) GetDownlinkId() uint32 {
	if x != nil {
		return x.DownlinkId
	}
	return 0
}

func (x *DownlinkFrameLog) GetGatewayId() string {
	if x != nil {
		return x.GatewayId
	}
	return ""
}

func (x *DownlinkFrameLog) GetMType() common.MType {
	if x != nil {
		return x.MType
	}
	return common.MType(0)
}

func (x *DownlinkFrameLog) GetDevAddr() string {
	if x != nil {
		return x.DevAddr
	}
	return ""
}

func (x *DownlinkFrameLog) GetDevEui() string {
	if x != nil {
		return x.DevEui
	}
	return ""
}

func (x *DownlinkFrameLog) GetPlaintextMacCommands() bool {
	if x != nil {
		return x.PlaintextMacCommands
	}
	return false
}

var File_api_frame_log_proto protoreflect.FileDescriptor

var file_api_frame_log_proto_rawDesc = []byte{
	0x0a, 0x13, 0x61, 0x70, 0x69, 0x2f, 0x66, 0x72, 0x61, 0x6d, 0x65, 0x5f, 0x6c, 0x6f, 0x67, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x03, 0x61, 0x70, 0x69, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67,
	0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65,
	0x73, 0x74, 0x61, 0x6d, 0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x13, 0x63, 0x6f, 0x6d,
	0x6d, 0x6f, 0x6e, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x1a, 0x0b, 0x67, 0x77, 0x2f, 0x67, 0x77, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xc7, 0x02,
	0x0a, 0x0e, 0x55, 0x70, 0x6c, 0x69, 0x6e, 0x6b, 0x46, 0x72, 0x61, 0x6d, 0x65, 0x4c, 0x6f, 0x67,
	0x12, 0x1f, 0x0a, 0x0b, 0x70, 0x68, 0x79, 0x5f, 0x70, 0x61, 0x79, 0x6c, 0x6f, 0x61, 0x64, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x0a, 0x70, 0x68, 0x79, 0x50, 0x61, 0x79, 0x6c, 0x6f, 0x61,
	0x64, 0x12, 0x29, 0x0a, 0x07, 0x74, 0x78, 0x5f, 0x69, 0x6e, 0x66, 0x6f, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x10, 0x2e, 0x67, 0x77, 0x2e, 0x55, 0x70, 0x6c, 0x69, 0x6e, 0x6b, 0x54, 0x78,
	0x49, 0x6e, 0x66, 0x6f, 0x52, 0x06, 0x74, 0x78, 0x49, 0x6e, 0x66, 0x6f, 0x12, 0x29, 0x0a, 0x07,
	0x72, 0x78, 0x5f, 0x69, 0x6e, 0x66, 0x6f, 0x18, 0x03, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x10, 0x2e,
	0x67, 0x77, 0x2e, 0x55, 0x70, 0x6c, 0x69, 0x6e, 0x6b, 0x52, 0x78, 0x49, 0x6e, 0x66, 0x6f, 0x52,
	0x06, 0x72, 0x78, 0x49, 0x6e, 0x66, 0x6f, 0x12, 0x24, 0x0a, 0x06, 0x6d, 0x5f, 0x74, 0x79, 0x70,
	0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x0d, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e,
	0x2e, 0x4d, 0x54, 0x79, 0x70, 0x65, 0x52, 0x05, 0x6d, 0x54, 0x79, 0x70, 0x65, 0x12, 0x19, 0x0a,
	0x08, 0x64, 0x65, 0x76, 0x5f, 0x61, 0x64, 0x64, 0x72, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x07, 0x64, 0x65, 0x76, 0x41, 0x64, 0x64, 0x72, 0x12, 0x17, 0x0a, 0x07, 0x64, 0x65, 0x76, 0x5f,
	0x65, 0x75, 0x69, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x64, 0x65, 0x76, 0x45, 0x75,
	0x69, 0x12, 0x2e, 0x0a, 0x04, 0x74, 0x69, 0x6d, 0x65, 0x18, 0x07, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75,
	0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x04, 0x74, 0x69, 0x6d,
	0x65, 0x12, 0x34, 0x0a, 0x16, 0x70, 0x6c, 0x61, 0x69, 0x6e, 0x74, 0x65, 0x78, 0x74, 0x5f, 0x6d,
	0x61, 0x63, 0x5f, 0x63, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x73, 0x18, 0x08, 0x20, 0x01, 0x28,
	0x08, 0x52, 0x14, 0x70, 0x6c, 0x61, 0x69, 0x6e, 0x74, 0x65, 0x78, 0x74, 0x4d, 0x61, 0x63, 0x43,
	0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x73, 0x22, 0xe0, 0x02, 0x0a, 0x10, 0x44, 0x6f, 0x77, 0x6e,
	0x6c, 0x69, 0x6e, 0x6b, 0x46, 0x72, 0x61, 0x6d, 0x65, 0x4c, 0x6f, 0x67, 0x12, 0x2e, 0x0a, 0x04,
	0x74, 0x69, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f,
	0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d,
	0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x04, 0x74, 0x69, 0x6d, 0x65, 0x12, 0x1f, 0x0a, 0x0b,
	0x70, 0x68, 0x79, 0x5f, 0x70, 0x61, 0x79, 0x6c, 0x6f, 0x61, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x0c, 0x52, 0x0a, 0x70, 0x68, 0x79, 0x50, 0x61, 0x79, 0x6c, 0x6f, 0x61, 0x64, 0x12, 0x2b, 0x0a,
	0x07, 0x74, 0x78, 0x5f, 0x69, 0x6e, 0x66, 0x6f, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x12,
	0x2e, 0x67, 0x77, 0x2e, 0x44, 0x6f, 0x77, 0x6e, 0x6c, 0x69, 0x6e, 0x6b, 0x54, 0x78, 0x49, 0x6e,
	0x66, 0x6f, 0x52, 0x06, 0x74, 0x78, 0x49, 0x6e, 0x66, 0x6f, 0x12, 0x1f, 0x0a, 0x0b, 0x64, 0x6f,
	0x77, 0x6e, 0x6c, 0x69, 0x6e, 0x6b, 0x5f, 0x69, 0x64, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0d, 0x52,
	0x0a, 0x64, 0x6f, 0x77, 0x6e, 0x6c, 0x69, 0x6e, 0x6b, 0x49, 0x64, 0x12, 0x1d, 0x0a, 0x0a, 0x67,
	0x61, 0x74, 0x65, 0x77, 0x61, 0x79, 0x5f, 0x69, 0x64, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x09, 0x67, 0x61, 0x74, 0x65, 0x77, 0x61, 0x79, 0x49, 0x64, 0x12, 0x24, 0x0a, 0x06, 0x6d, 0x5f,
	0x74, 0x79, 0x70, 0x65, 0x18, 0x06, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x0d, 0x2e, 0x63, 0x6f, 0x6d,
	0x6d, 0x6f, 0x6e, 0x2e, 0x4d, 0x54, 0x79, 0x70, 0x65, 0x52, 0x05, 0x6d, 0x54, 0x79, 0x70, 0x65,
	0x12, 0x19, 0x0a, 0x08, 0x64, 0x65, 0x76, 0x5f, 0x61, 0x64, 0x64, 0x72, 0x18, 0x07, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x07, 0x64, 0x65, 0x76, 0x41, 0x64, 0x64, 0x72, 0x12, 0x17, 0x0a, 0x07, 0x64,
	0x65, 0x76, 0x5f, 0x65, 0x75, 0x69, 0x18, 0x08, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x64, 0x65,
	0x76, 0x45, 0x75, 0x69, 0x12, 0x34, 0x0a, 0x16, 0x70, 0x6c, 0x61, 0x69, 0x6e, 0x74, 0x65, 0x78,
	0x74, 0x5f, 0x6d, 0x61, 0x63, 0x5f, 0x63, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x73, 0x18, 0x09,
	0x20, 0x01, 0x28, 0x08, 0x52, 0x14, 0x70, 0x6c, 0x61, 0x69, 0x6e, 0x74, 0x65, 0x78, 0x74, 0x4d,
	0x61, 0x63, 0x43, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x73, 0x42, 0x54, 0x0a, 0x11, 0x69, 0x6f,
	0x2e, 0x63, 0x68, 0x69, 0x72, 0x70, 0x73, 0x74, 0x61, 0x63, 0x6b, 0x2e, 0x61, 0x70, 0x69, 0x42,
	0x0d, 0x46, 0x72, 0x61, 0x6d, 0x65, 0x4c, 0x6f, 0x67, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01,
	0x5a, 0x2e, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x63, 0x68, 0x69,
	0x72, 0x70, 0x73, 0x74, 0x61, 0x63, 0x6b, 0x2f, 0x63, 0x68, 0x69, 0x72, 0x70, 0x73, 0x74, 0x61,
	0x63, 0x6b, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x67, 0x6f, 0x2f, 0x76, 0x34, 0x2f, 0x61, 0x70, 0x69,
	0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_api_frame_log_proto_rawDescOnce sync.Once
	file_api_frame_log_proto_rawDescData = file_api_frame_log_proto_rawDesc
)

func file_api_frame_log_proto_rawDescGZIP() []byte {
	file_api_frame_log_proto_rawDescOnce.Do(func() {
		file_api_frame_log_proto_rawDescData = protoimpl.X.CompressGZIP(file_api_frame_log_proto_rawDescData)
	})
	return file_api_frame_log_proto_rawDescData
}

var file_api_frame_log_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_api_frame_log_proto_goTypes = []interface{}{
	(*UplinkFrameLog)(nil),        // 0: api.UplinkFrameLog
	(*DownlinkFrameLog)(nil),      // 1: api.DownlinkFrameLog
	(*gw.UplinkTxInfo)(nil),       // 2: gw.UplinkTxInfo
	(*gw.UplinkRxInfo)(nil),       // 3: gw.UplinkRxInfo
	(common.MType)(0),             // 4: common.MType
	(*timestamppb.Timestamp)(nil), // 5: google.protobuf.Timestamp
	(*gw.DownlinkTxInfo)(nil),     // 6: gw.DownlinkTxInfo
}
var file_api_frame_log_proto_depIdxs = []int32{
	2, // 0: api.UplinkFrameLog.tx_info:type_name -> gw.UplinkTxInfo
	3, // 1: api.UplinkFrameLog.rx_info:type_name -> gw.UplinkRxInfo
	4, // 2: api.UplinkFrameLog.m_type:type_name -> common.MType
	5, // 3: api.UplinkFrameLog.time:type_name -> google.protobuf.Timestamp
	5, // 4: api.DownlinkFrameLog.time:type_name -> google.protobuf.Timestamp
	6, // 5: api.DownlinkFrameLog.tx_info:type_name -> gw.DownlinkTxInfo
	4, // 6: api.DownlinkFrameLog.m_type:type_name -> common.MType
	7, // [7:7] is the sub-list for method output_type
	7, // [7:7] is the sub-list for method input_type
	7, // [7:7] is the sub-list for extension type_name
	7, // [7:7] is the sub-list for extension extendee
	0, // [0:7] is the sub-list for field type_name
}

func init() { file_api_frame_log_proto_init() }
func file_api_frame_log_proto_init() {
	if File_api_frame_log_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_api_frame_log_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UplinkFrameLog); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_api_frame_log_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DownlinkFrameLog); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_api_frame_log_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_api_frame_log_proto_goTypes,
		DependencyIndexes: file_api_frame_log_proto_depIdxs,
		MessageInfos:      file_api_frame_log_proto_msgTypes,
	}.Build()
	File_api_frame_log_proto = out.File
	file_api_frame_log_proto_rawDesc = nil
	file_api_frame_log_proto_goTypes = nil
	file_api_frame_log_proto_depIdxs = nil
}
