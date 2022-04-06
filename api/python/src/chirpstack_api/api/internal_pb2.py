# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: chirpstack-api/api/internal.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2
from google.protobuf import empty_pb2 as google_dot_protobuf_dot_empty__pb2
from chirpstack_api.api import user_pb2 as chirpstack__api_dot_api_dot_user__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n!chirpstack-api/api/internal.proto\x12\x03\x61pi\x1a\x1fgoogle/protobuf/timestamp.proto\x1a\x1bgoogle/protobuf/empty.proto\x1a\x1d\x63hirpstack-api/api/user.proto\"G\n\x06\x41piKey\x12\n\n\x02id\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x10\n\x08is_admin\x18\x03 \x01(\x08\x12\x11\n\ttenant_id\x18\x04 \x01(\t\"3\n\x13\x43reateApiKeyRequest\x12\x1c\n\x07\x61pi_key\x18\x01 \x01(\x0b\x32\x0b.api.ApiKey\"1\n\x14\x43reateApiKeyResponse\x12\n\n\x02id\x18\x01 \x01(\t\x12\r\n\x05token\x18\x02 \x01(\t\"!\n\x13\x44\x65leteApiKeyRequest\x12\n\n\x02id\x18\x01 \x01(\t\"X\n\x12ListApiKeysRequest\x12\r\n\x05limit\x18\x01 \x01(\r\x12\x0e\n\x06offset\x18\x02 \x01(\r\x12\x10\n\x08is_admin\x18\x03 \x01(\x08\x12\x11\n\ttenant_id\x18\x04 \x01(\t\"G\n\x13ListApiKeysResponse\x12\x13\n\x0btotal_count\x18\x01 \x01(\r\x12\x1b\n\x06result\x18\x02 \x03(\x0b\x32\x0b.api.ApiKey\"\xc8\x01\n\x0eUserTenantLink\x12.\n\ncreated_at\x18\x01 \x01(\x0b\x32\x1a.google.protobuf.Timestamp\x12.\n\nupdated_at\x18\x02 \x01(\x0b\x32\x1a.google.protobuf.Timestamp\x12\x11\n\ttenant_id\x18\x03 \x01(\t\x12\x10\n\x08is_admin\x18\x04 \x01(\x08\x12\x17\n\x0fis_device_admin\x18\x05 \x01(\x08\x12\x18\n\x10is_gateway_admin\x18\x06 \x01(\x08\"/\n\x0cLoginRequest\x12\r\n\x05\x65mail\x18\x01 \x01(\t\x12\x10\n\x08password\x18\x02 \x01(\t\"\x1c\n\rLoginResponse\x12\x0b\n\x03jwt\x18\x01 \x01(\t\"P\n\x0fProfileResponse\x12\x17\n\x04user\x18\x01 \x01(\x0b\x32\t.api.User\x12$\n\x07tenants\x18\x03 \x03(\x0b\x32\x13.api.UserTenantLink\"D\n\x13GlobalSearchRequest\x12\x0e\n\x06search\x18\x01 \x01(\t\x12\r\n\x05limit\x18\x02 \x01(\x03\x12\x0e\n\x06offset\x18\x03 \x01(\x03\"?\n\x14GlobalSearchResponse\x12\'\n\x06result\x18\x01 \x03(\x0b\x32\x17.api.GlobalSearchResult\"\xe2\x01\n\x12GlobalSearchResult\x12\x0c\n\x04kind\x18\x01 \x01(\t\x12\r\n\x05score\x18\x02 \x01(\x02\x12\x11\n\ttenant_id\x18\x03 \x01(\t\x12\x13\n\x0btenant_name\x18\x04 \x01(\t\x12\x16\n\x0e\x61pplication_id\x18\x05 \x01(\t\x12\x18\n\x10\x61pplication_name\x18\x06 \x01(\t\x12\x16\n\x0e\x64\x65vice_dev_eui\x18\x07 \x01(\t\x12\x13\n\x0b\x64\x65vice_name\x18\x08 \x01(\t\x12\x12\n\ngateway_id\x18\t \x01(\t\x12\x14\n\x0cgateway_name\x18\n \x01(\t\">\n\x10SettingsResponse\x12*\n\x0eopenid_connect\x18\x01 \x01(\x0b\x32\x12.api.OpenIdConnect\"q\n\rOpenIdConnect\x12\x0f\n\x07\x65nabled\x18\x01 \x01(\x08\x12\x1b\n\tlogin_url\x18\x02 \x01(\tR\x08loginURL\x12\x13\n\x0blogin_label\x18\x03 \x01(\t\x12\x1d\n\nlogout_url\x18\x04 \x01(\tR\tlogoutURL\"8\n\x19OpenIdConnectLoginRequest\x12\x0c\n\x04\x63ode\x18\x01 \x01(\t\x12\r\n\x05state\x18\x02 \x01(\t\"+\n\x1aOpenIdConnectLoginResponse\x12\r\n\x05token\x18\x01 \x01(\t\"-\n\x18GetDevicesSummaryRequest\x12\x11\n\ttenant_id\x18\x01 \x01(\t\"\xd2\x01\n\x19GetDevicesSummaryResponse\x12\x14\n\x0c\x61\x63tive_count\x18\x01 \x01(\r\x12\x16\n\x0einactive_count\x18\x02 \x01(\r\x12=\n\x08\x64r_count\x18\x03 \x03(\x0b\x32+.api.GetDevicesSummaryResponse.DrCountEntry\x12\x18\n\x10never_seen_count\x18\x04 \x01(\r\x1a.\n\x0c\x44rCountEntry\x12\x0b\n\x03key\x18\x01 \x01(\r\x12\r\n\x05value\x18\x02 \x01(\r:\x02\x38\x01\".\n\x19GetGatewaysSummaryRequest\x12\x11\n\ttenant_id\x18\x01 \x01(\t\"d\n\x1aGetGatewaysSummaryResponse\x12\x14\n\x0c\x61\x63tive_count\x18\x01 \x01(\r\x12\x16\n\x0einactive_count\x18\x02 \x01(\r\x12\x18\n\x10never_seen_count\x18\x03 \x01(\r\"\xc7\x01\n\x07LogItem\x12\n\n\x02id\x18\x01 \x01(\t\x12(\n\x04time\x18\x02 \x01(\x0b\x32\x1a.google.protobuf.Timestamp\x12\x13\n\x0b\x64\x65scription\x18\x03 \x01(\t\x12\x0c\n\x04\x62ody\x18\x04 \x01(\t\x12\x30\n\nproperties\x18\x05 \x03(\x0b\x32\x1c.api.LogItem.PropertiesEntry\x1a\x31\n\x0fPropertiesEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"0\n\x1aStreamGatewayFramesRequest\x12\x12\n\ngateway_id\x18\x01 \x01(\t\",\n\x19StreamDeviceFramesRequest\x12\x0f\n\x07\x64\x65v_eui\x18\x01 \x01(\t\",\n\x19StreamDeviceEventsRequest\x12\x0f\n\x07\x64\x65v_eui\x18\x01 \x01(\t2\xb3\x07\n\x0fInternalService\x12\x30\n\x05Login\x12\x11.api.LoginRequest\x1a\x12.api.LoginResponse\"\x00\x12\x39\n\x07Profile\x12\x16.google.protobuf.Empty\x1a\x14.api.ProfileResponse\"\x00\x12\x45\n\x0cGlobalSearch\x12\x18.api.GlobalSearchRequest\x1a\x19.api.GlobalSearchResponse\"\x00\x12\x45\n\x0c\x43reateApiKey\x12\x18.api.CreateApiKeyRequest\x1a\x19.api.CreateApiKeyResponse\"\x00\x12\x42\n\x0c\x44\x65leteApiKey\x12\x18.api.DeleteApiKeyRequest\x1a\x16.google.protobuf.Empty\"\x00\x12\x42\n\x0bListApiKeys\x12\x17.api.ListApiKeysRequest\x1a\x18.api.ListApiKeysResponse\"\x00\x12;\n\x08Settings\x12\x16.google.protobuf.Empty\x1a\x15.api.SettingsResponse\"\x00\x12W\n\x12OpenIdConnectLogin\x12\x1e.api.OpenIdConnectLoginRequest\x1a\x1f.api.OpenIdConnectLoginResponse\"\x00\x12T\n\x11GetDevicesSummary\x12\x1d.api.GetDevicesSummaryRequest\x1a\x1e.api.GetDevicesSummaryResponse\"\x00\x12W\n\x12GetGatewaysSummary\x12\x1e.api.GetGatewaysSummaryRequest\x1a\x1f.api.GetGatewaysSummaryResponse\"\x00\x12H\n\x13StreamGatewayFrames\x12\x1f.api.StreamGatewayFramesRequest\x1a\x0c.api.LogItem\"\x00\x30\x01\x12\x46\n\x12StreamDeviceFrames\x12\x1e.api.StreamDeviceFramesRequest\x1a\x0c.api.LogItem\"\x00\x30\x01\x12\x46\n\x12StreamDeviceEvents\x12\x1e.api.StreamDeviceEventsRequest\x1a\x0c.api.LogItem\"\x00\x30\x01\x42P\n\x11io.chirpstack.apiB\rInternalProtoP\x01Z*github.com/chirpstack/chirpstack/api/go/v4b\x06proto3')



_APIKEY = DESCRIPTOR.message_types_by_name['ApiKey']
_CREATEAPIKEYREQUEST = DESCRIPTOR.message_types_by_name['CreateApiKeyRequest']
_CREATEAPIKEYRESPONSE = DESCRIPTOR.message_types_by_name['CreateApiKeyResponse']
_DELETEAPIKEYREQUEST = DESCRIPTOR.message_types_by_name['DeleteApiKeyRequest']
_LISTAPIKEYSREQUEST = DESCRIPTOR.message_types_by_name['ListApiKeysRequest']
_LISTAPIKEYSRESPONSE = DESCRIPTOR.message_types_by_name['ListApiKeysResponse']
_USERTENANTLINK = DESCRIPTOR.message_types_by_name['UserTenantLink']
_LOGINREQUEST = DESCRIPTOR.message_types_by_name['LoginRequest']
_LOGINRESPONSE = DESCRIPTOR.message_types_by_name['LoginResponse']
_PROFILERESPONSE = DESCRIPTOR.message_types_by_name['ProfileResponse']
_GLOBALSEARCHREQUEST = DESCRIPTOR.message_types_by_name['GlobalSearchRequest']
_GLOBALSEARCHRESPONSE = DESCRIPTOR.message_types_by_name['GlobalSearchResponse']
_GLOBALSEARCHRESULT = DESCRIPTOR.message_types_by_name['GlobalSearchResult']
_SETTINGSRESPONSE = DESCRIPTOR.message_types_by_name['SettingsResponse']
_OPENIDCONNECT = DESCRIPTOR.message_types_by_name['OpenIdConnect']
_OPENIDCONNECTLOGINREQUEST = DESCRIPTOR.message_types_by_name['OpenIdConnectLoginRequest']
_OPENIDCONNECTLOGINRESPONSE = DESCRIPTOR.message_types_by_name['OpenIdConnectLoginResponse']
_GETDEVICESSUMMARYREQUEST = DESCRIPTOR.message_types_by_name['GetDevicesSummaryRequest']
_GETDEVICESSUMMARYRESPONSE = DESCRIPTOR.message_types_by_name['GetDevicesSummaryResponse']
_GETDEVICESSUMMARYRESPONSE_DRCOUNTENTRY = _GETDEVICESSUMMARYRESPONSE.nested_types_by_name['DrCountEntry']
_GETGATEWAYSSUMMARYREQUEST = DESCRIPTOR.message_types_by_name['GetGatewaysSummaryRequest']
_GETGATEWAYSSUMMARYRESPONSE = DESCRIPTOR.message_types_by_name['GetGatewaysSummaryResponse']
_LOGITEM = DESCRIPTOR.message_types_by_name['LogItem']
_LOGITEM_PROPERTIESENTRY = _LOGITEM.nested_types_by_name['PropertiesEntry']
_STREAMGATEWAYFRAMESREQUEST = DESCRIPTOR.message_types_by_name['StreamGatewayFramesRequest']
_STREAMDEVICEFRAMESREQUEST = DESCRIPTOR.message_types_by_name['StreamDeviceFramesRequest']
_STREAMDEVICEEVENTSREQUEST = DESCRIPTOR.message_types_by_name['StreamDeviceEventsRequest']
ApiKey = _reflection.GeneratedProtocolMessageType('ApiKey', (_message.Message,), {
  'DESCRIPTOR' : _APIKEY,
  '__module__' : 'chirpstack_api.api.internal_pb2'
  # @@protoc_insertion_point(class_scope:api.ApiKey)
  })
_sym_db.RegisterMessage(ApiKey)

CreateApiKeyRequest = _reflection.GeneratedProtocolMessageType('CreateApiKeyRequest', (_message.Message,), {
  'DESCRIPTOR' : _CREATEAPIKEYREQUEST,
  '__module__' : 'chirpstack_api.api.internal_pb2'
  # @@protoc_insertion_point(class_scope:api.CreateApiKeyRequest)
  })
_sym_db.RegisterMessage(CreateApiKeyRequest)

CreateApiKeyResponse = _reflection.GeneratedProtocolMessageType('CreateApiKeyResponse', (_message.Message,), {
  'DESCRIPTOR' : _CREATEAPIKEYRESPONSE,
  '__module__' : 'chirpstack_api.api.internal_pb2'
  # @@protoc_insertion_point(class_scope:api.CreateApiKeyResponse)
  })
_sym_db.RegisterMessage(CreateApiKeyResponse)

DeleteApiKeyRequest = _reflection.GeneratedProtocolMessageType('DeleteApiKeyRequest', (_message.Message,), {
  'DESCRIPTOR' : _DELETEAPIKEYREQUEST,
  '__module__' : 'chirpstack_api.api.internal_pb2'
  # @@protoc_insertion_point(class_scope:api.DeleteApiKeyRequest)
  })
_sym_db.RegisterMessage(DeleteApiKeyRequest)

ListApiKeysRequest = _reflection.GeneratedProtocolMessageType('ListApiKeysRequest', (_message.Message,), {
  'DESCRIPTOR' : _LISTAPIKEYSREQUEST,
  '__module__' : 'chirpstack_api.api.internal_pb2'
  # @@protoc_insertion_point(class_scope:api.ListApiKeysRequest)
  })
_sym_db.RegisterMessage(ListApiKeysRequest)

ListApiKeysResponse = _reflection.GeneratedProtocolMessageType('ListApiKeysResponse', (_message.Message,), {
  'DESCRIPTOR' : _LISTAPIKEYSRESPONSE,
  '__module__' : 'chirpstack_api.api.internal_pb2'
  # @@protoc_insertion_point(class_scope:api.ListApiKeysResponse)
  })
_sym_db.RegisterMessage(ListApiKeysResponse)

UserTenantLink = _reflection.GeneratedProtocolMessageType('UserTenantLink', (_message.Message,), {
  'DESCRIPTOR' : _USERTENANTLINK,
  '__module__' : 'chirpstack_api.api.internal_pb2'
  # @@protoc_insertion_point(class_scope:api.UserTenantLink)
  })
_sym_db.RegisterMessage(UserTenantLink)

LoginRequest = _reflection.GeneratedProtocolMessageType('LoginRequest', (_message.Message,), {
  'DESCRIPTOR' : _LOGINREQUEST,
  '__module__' : 'chirpstack_api.api.internal_pb2'
  # @@protoc_insertion_point(class_scope:api.LoginRequest)
  })
_sym_db.RegisterMessage(LoginRequest)

LoginResponse = _reflection.GeneratedProtocolMessageType('LoginResponse', (_message.Message,), {
  'DESCRIPTOR' : _LOGINRESPONSE,
  '__module__' : 'chirpstack_api.api.internal_pb2'
  # @@protoc_insertion_point(class_scope:api.LoginResponse)
  })
_sym_db.RegisterMessage(LoginResponse)

ProfileResponse = _reflection.GeneratedProtocolMessageType('ProfileResponse', (_message.Message,), {
  'DESCRIPTOR' : _PROFILERESPONSE,
  '__module__' : 'chirpstack_api.api.internal_pb2'
  # @@protoc_insertion_point(class_scope:api.ProfileResponse)
  })
_sym_db.RegisterMessage(ProfileResponse)

GlobalSearchRequest = _reflection.GeneratedProtocolMessageType('GlobalSearchRequest', (_message.Message,), {
  'DESCRIPTOR' : _GLOBALSEARCHREQUEST,
  '__module__' : 'chirpstack_api.api.internal_pb2'
  # @@protoc_insertion_point(class_scope:api.GlobalSearchRequest)
  })
_sym_db.RegisterMessage(GlobalSearchRequest)

GlobalSearchResponse = _reflection.GeneratedProtocolMessageType('GlobalSearchResponse', (_message.Message,), {
  'DESCRIPTOR' : _GLOBALSEARCHRESPONSE,
  '__module__' : 'chirpstack_api.api.internal_pb2'
  # @@protoc_insertion_point(class_scope:api.GlobalSearchResponse)
  })
_sym_db.RegisterMessage(GlobalSearchResponse)

GlobalSearchResult = _reflection.GeneratedProtocolMessageType('GlobalSearchResult', (_message.Message,), {
  'DESCRIPTOR' : _GLOBALSEARCHRESULT,
  '__module__' : 'chirpstack_api.api.internal_pb2'
  # @@protoc_insertion_point(class_scope:api.GlobalSearchResult)
  })
_sym_db.RegisterMessage(GlobalSearchResult)

SettingsResponse = _reflection.GeneratedProtocolMessageType('SettingsResponse', (_message.Message,), {
  'DESCRIPTOR' : _SETTINGSRESPONSE,
  '__module__' : 'chirpstack_api.api.internal_pb2'
  # @@protoc_insertion_point(class_scope:api.SettingsResponse)
  })
_sym_db.RegisterMessage(SettingsResponse)

OpenIdConnect = _reflection.GeneratedProtocolMessageType('OpenIdConnect', (_message.Message,), {
  'DESCRIPTOR' : _OPENIDCONNECT,
  '__module__' : 'chirpstack_api.api.internal_pb2'
  # @@protoc_insertion_point(class_scope:api.OpenIdConnect)
  })
_sym_db.RegisterMessage(OpenIdConnect)

OpenIdConnectLoginRequest = _reflection.GeneratedProtocolMessageType('OpenIdConnectLoginRequest', (_message.Message,), {
  'DESCRIPTOR' : _OPENIDCONNECTLOGINREQUEST,
  '__module__' : 'chirpstack_api.api.internal_pb2'
  # @@protoc_insertion_point(class_scope:api.OpenIdConnectLoginRequest)
  })
_sym_db.RegisterMessage(OpenIdConnectLoginRequest)

OpenIdConnectLoginResponse = _reflection.GeneratedProtocolMessageType('OpenIdConnectLoginResponse', (_message.Message,), {
  'DESCRIPTOR' : _OPENIDCONNECTLOGINRESPONSE,
  '__module__' : 'chirpstack_api.api.internal_pb2'
  # @@protoc_insertion_point(class_scope:api.OpenIdConnectLoginResponse)
  })
_sym_db.RegisterMessage(OpenIdConnectLoginResponse)

GetDevicesSummaryRequest = _reflection.GeneratedProtocolMessageType('GetDevicesSummaryRequest', (_message.Message,), {
  'DESCRIPTOR' : _GETDEVICESSUMMARYREQUEST,
  '__module__' : 'chirpstack_api.api.internal_pb2'
  # @@protoc_insertion_point(class_scope:api.GetDevicesSummaryRequest)
  })
_sym_db.RegisterMessage(GetDevicesSummaryRequest)

GetDevicesSummaryResponse = _reflection.GeneratedProtocolMessageType('GetDevicesSummaryResponse', (_message.Message,), {

  'DrCountEntry' : _reflection.GeneratedProtocolMessageType('DrCountEntry', (_message.Message,), {
    'DESCRIPTOR' : _GETDEVICESSUMMARYRESPONSE_DRCOUNTENTRY,
    '__module__' : 'chirpstack_api.api.internal_pb2'
    # @@protoc_insertion_point(class_scope:api.GetDevicesSummaryResponse.DrCountEntry)
    })
  ,
  'DESCRIPTOR' : _GETDEVICESSUMMARYRESPONSE,
  '__module__' : 'chirpstack_api.api.internal_pb2'
  # @@protoc_insertion_point(class_scope:api.GetDevicesSummaryResponse)
  })
_sym_db.RegisterMessage(GetDevicesSummaryResponse)
_sym_db.RegisterMessage(GetDevicesSummaryResponse.DrCountEntry)

GetGatewaysSummaryRequest = _reflection.GeneratedProtocolMessageType('GetGatewaysSummaryRequest', (_message.Message,), {
  'DESCRIPTOR' : _GETGATEWAYSSUMMARYREQUEST,
  '__module__' : 'chirpstack_api.api.internal_pb2'
  # @@protoc_insertion_point(class_scope:api.GetGatewaysSummaryRequest)
  })
_sym_db.RegisterMessage(GetGatewaysSummaryRequest)

GetGatewaysSummaryResponse = _reflection.GeneratedProtocolMessageType('GetGatewaysSummaryResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETGATEWAYSSUMMARYRESPONSE,
  '__module__' : 'chirpstack_api.api.internal_pb2'
  # @@protoc_insertion_point(class_scope:api.GetGatewaysSummaryResponse)
  })
_sym_db.RegisterMessage(GetGatewaysSummaryResponse)

LogItem = _reflection.GeneratedProtocolMessageType('LogItem', (_message.Message,), {

  'PropertiesEntry' : _reflection.GeneratedProtocolMessageType('PropertiesEntry', (_message.Message,), {
    'DESCRIPTOR' : _LOGITEM_PROPERTIESENTRY,
    '__module__' : 'chirpstack_api.api.internal_pb2'
    # @@protoc_insertion_point(class_scope:api.LogItem.PropertiesEntry)
    })
  ,
  'DESCRIPTOR' : _LOGITEM,
  '__module__' : 'chirpstack_api.api.internal_pb2'
  # @@protoc_insertion_point(class_scope:api.LogItem)
  })
_sym_db.RegisterMessage(LogItem)
_sym_db.RegisterMessage(LogItem.PropertiesEntry)

StreamGatewayFramesRequest = _reflection.GeneratedProtocolMessageType('StreamGatewayFramesRequest', (_message.Message,), {
  'DESCRIPTOR' : _STREAMGATEWAYFRAMESREQUEST,
  '__module__' : 'chirpstack_api.api.internal_pb2'
  # @@protoc_insertion_point(class_scope:api.StreamGatewayFramesRequest)
  })
_sym_db.RegisterMessage(StreamGatewayFramesRequest)

StreamDeviceFramesRequest = _reflection.GeneratedProtocolMessageType('StreamDeviceFramesRequest', (_message.Message,), {
  'DESCRIPTOR' : _STREAMDEVICEFRAMESREQUEST,
  '__module__' : 'chirpstack_api.api.internal_pb2'
  # @@protoc_insertion_point(class_scope:api.StreamDeviceFramesRequest)
  })
_sym_db.RegisterMessage(StreamDeviceFramesRequest)

StreamDeviceEventsRequest = _reflection.GeneratedProtocolMessageType('StreamDeviceEventsRequest', (_message.Message,), {
  'DESCRIPTOR' : _STREAMDEVICEEVENTSREQUEST,
  '__module__' : 'chirpstack_api.api.internal_pb2'
  # @@protoc_insertion_point(class_scope:api.StreamDeviceEventsRequest)
  })
_sym_db.RegisterMessage(StreamDeviceEventsRequest)

_INTERNALSERVICE = DESCRIPTOR.services_by_name['InternalService']
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'\n\021io.chirpstack.apiB\rInternalProtoP\001Z*github.com/chirpstack/chirpstack/api/go/v4'
  _GETDEVICESSUMMARYRESPONSE_DRCOUNTENTRY._options = None
  _GETDEVICESSUMMARYRESPONSE_DRCOUNTENTRY._serialized_options = b'8\001'
  _LOGITEM_PROPERTIESENTRY._options = None
  _LOGITEM_PROPERTIESENTRY._serialized_options = b'8\001'
  _APIKEY._serialized_start=135
  _APIKEY._serialized_end=206
  _CREATEAPIKEYREQUEST._serialized_start=208
  _CREATEAPIKEYREQUEST._serialized_end=259
  _CREATEAPIKEYRESPONSE._serialized_start=261
  _CREATEAPIKEYRESPONSE._serialized_end=310
  _DELETEAPIKEYREQUEST._serialized_start=312
  _DELETEAPIKEYREQUEST._serialized_end=345
  _LISTAPIKEYSREQUEST._serialized_start=347
  _LISTAPIKEYSREQUEST._serialized_end=435
  _LISTAPIKEYSRESPONSE._serialized_start=437
  _LISTAPIKEYSRESPONSE._serialized_end=508
  _USERTENANTLINK._serialized_start=511
  _USERTENANTLINK._serialized_end=711
  _LOGINREQUEST._serialized_start=713
  _LOGINREQUEST._serialized_end=760
  _LOGINRESPONSE._serialized_start=762
  _LOGINRESPONSE._serialized_end=790
  _PROFILERESPONSE._serialized_start=792
  _PROFILERESPONSE._serialized_end=872
  _GLOBALSEARCHREQUEST._serialized_start=874
  _GLOBALSEARCHREQUEST._serialized_end=942
  _GLOBALSEARCHRESPONSE._serialized_start=944
  _GLOBALSEARCHRESPONSE._serialized_end=1007
  _GLOBALSEARCHRESULT._serialized_start=1010
  _GLOBALSEARCHRESULT._serialized_end=1236
  _SETTINGSRESPONSE._serialized_start=1238
  _SETTINGSRESPONSE._serialized_end=1300
  _OPENIDCONNECT._serialized_start=1302
  _OPENIDCONNECT._serialized_end=1415
  _OPENIDCONNECTLOGINREQUEST._serialized_start=1417
  _OPENIDCONNECTLOGINREQUEST._serialized_end=1473
  _OPENIDCONNECTLOGINRESPONSE._serialized_start=1475
  _OPENIDCONNECTLOGINRESPONSE._serialized_end=1518
  _GETDEVICESSUMMARYREQUEST._serialized_start=1520
  _GETDEVICESSUMMARYREQUEST._serialized_end=1565
  _GETDEVICESSUMMARYRESPONSE._serialized_start=1568
  _GETDEVICESSUMMARYRESPONSE._serialized_end=1778
  _GETDEVICESSUMMARYRESPONSE_DRCOUNTENTRY._serialized_start=1732
  _GETDEVICESSUMMARYRESPONSE_DRCOUNTENTRY._serialized_end=1778
  _GETGATEWAYSSUMMARYREQUEST._serialized_start=1780
  _GETGATEWAYSSUMMARYREQUEST._serialized_end=1826
  _GETGATEWAYSSUMMARYRESPONSE._serialized_start=1828
  _GETGATEWAYSSUMMARYRESPONSE._serialized_end=1928
  _LOGITEM._serialized_start=1931
  _LOGITEM._serialized_end=2130
  _LOGITEM_PROPERTIESENTRY._serialized_start=2081
  _LOGITEM_PROPERTIESENTRY._serialized_end=2130
  _STREAMGATEWAYFRAMESREQUEST._serialized_start=2132
  _STREAMGATEWAYFRAMESREQUEST._serialized_end=2180
  _STREAMDEVICEFRAMESREQUEST._serialized_start=2182
  _STREAMDEVICEFRAMESREQUEST._serialized_end=2226
  _STREAMDEVICEEVENTSREQUEST._serialized_start=2228
  _STREAMDEVICEEVENTSREQUEST._serialized_end=2272
  _INTERNALSERVICE._serialized_start=2275
  _INTERNALSERVICE._serialized_end=3222
# @@protoc_insertion_point(module_scope)
