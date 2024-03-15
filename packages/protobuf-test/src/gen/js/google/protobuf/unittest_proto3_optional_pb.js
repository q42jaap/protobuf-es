// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es v1.8.0 with parameter "ts_nocheck=false,target=js+dts"
// @generated from file google/protobuf/unittest_proto3_optional.proto (package protobuf_unittest, syntax proto3)
/* eslint-disable */

import { MessageOptions, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message protobuf_unittest.TestProto3Optional
 */
export const TestProto3Optional = /*@__PURE__*/ proto3.makeMessageType(
  "protobuf_unittest.TestProto3Optional",
  () => [
    { no: 1, name: "optional_int32", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 2, name: "optional_int64", kind: "scalar", T: 3 /* ScalarType.INT64 */, opt: true },
    { no: 3, name: "optional_uint32", kind: "scalar", T: 13 /* ScalarType.UINT32 */, opt: true },
    { no: 4, name: "optional_uint64", kind: "scalar", T: 4 /* ScalarType.UINT64 */, opt: true },
    { no: 5, name: "optional_sint32", kind: "scalar", T: 17 /* ScalarType.SINT32 */, opt: true },
    { no: 6, name: "optional_sint64", kind: "scalar", T: 18 /* ScalarType.SINT64 */, opt: true },
    { no: 7, name: "optional_fixed32", kind: "scalar", T: 7 /* ScalarType.FIXED32 */, opt: true },
    { no: 8, name: "optional_fixed64", kind: "scalar", T: 6 /* ScalarType.FIXED64 */, opt: true },
    { no: 9, name: "optional_sfixed32", kind: "scalar", T: 15 /* ScalarType.SFIXED32 */, opt: true },
    { no: 10, name: "optional_sfixed64", kind: "scalar", T: 16 /* ScalarType.SFIXED64 */, opt: true },
    { no: 11, name: "optional_float", kind: "scalar", T: 2 /* ScalarType.FLOAT */, opt: true },
    { no: 12, name: "optional_double", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, opt: true },
    { no: 13, name: "optional_bool", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
    { no: 14, name: "optional_string", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 15, name: "optional_bytes", kind: "scalar", T: 12 /* ScalarType.BYTES */, opt: true },
    { no: 16, name: "optional_cord", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 18, name: "optional_nested_message", kind: "message", T: TestProto3Optional_NestedMessage, opt: true },
    { no: 19, name: "lazy_nested_message", kind: "message", T: TestProto3Optional_NestedMessage, opt: true },
    { no: 21, name: "optional_nested_enum", kind: "enum", T: proto3.getEnumType(TestProto3Optional_NestedEnum), opt: true },
    { no: 22, name: "singular_int32", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 23, name: "singular_int64", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from enum protobuf_unittest.TestProto3Optional.NestedEnum
 */
export const TestProto3Optional_NestedEnum = /*@__PURE__*/ proto3.makeEnum(
  "protobuf_unittest.TestProto3Optional.NestedEnum",
  [
    {no: 0, name: "UNSPECIFIED"},
    {no: 1, name: "FOO"},
    {no: 2, name: "BAR"},
    {no: 3, name: "BAZ"},
    {no: -1, name: "NEG"},
  ],
);

/**
 * @generated from message protobuf_unittest.TestProto3Optional.NestedMessage
 */
export const TestProto3Optional_NestedMessage = /*@__PURE__*/ proto3.makeMessageType(
  "protobuf_unittest.TestProto3Optional.NestedMessage",
  () => [
    { no: 1, name: "bb", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
  ],
  {localName: "TestProto3Optional_NestedMessage"},
);

/**
 * @generated from message protobuf_unittest.TestProto3OptionalMessage
 */
export const TestProto3OptionalMessage = /*@__PURE__*/ proto3.makeMessageType(
  "protobuf_unittest.TestProto3OptionalMessage",
  () => [
    { no: 1, name: "nested_message", kind: "message", T: TestProto3OptionalMessage_NestedMessage },
    { no: 2, name: "optional_nested_message", kind: "message", T: TestProto3OptionalMessage_NestedMessage, opt: true },
  ],
);

/**
 * @generated from message protobuf_unittest.TestProto3OptionalMessage.NestedMessage
 */
export const TestProto3OptionalMessage_NestedMessage = /*@__PURE__*/ proto3.makeMessageType(
  "protobuf_unittest.TestProto3OptionalMessage.NestedMessage",
  () => [
    { no: 1, name: "s", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "TestProto3OptionalMessage_NestedMessage"},
);

/**
 * @generated from message protobuf_unittest.Proto3OptionalExtensions
 */
export const Proto3OptionalExtensions = /*@__PURE__*/ proto3.makeMessageType(
  "protobuf_unittest.Proto3OptionalExtensions",
  [],
);

/**
 * @generated from extension: int32 ext_no_optional = 355886728;
 */
export const Proto3OptionalExtensions_ext_no_optional = proto3.makeExtension(
  "protobuf_unittest.Proto3OptionalExtensions.ext_no_optional", 
  MessageOptions, 
  { no: 355886728, kind: "scalar", T: 5 /* ScalarType.INT32 */ },
);

/**
 * @generated from extension: optional int32 ext_with_optional = 355886729;
 */
export const Proto3OptionalExtensions_ext_with_optional = proto3.makeExtension(
  "protobuf_unittest.Proto3OptionalExtensions.ext_with_optional", 
  MessageOptions, 
  { no: 355886729, kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
);

