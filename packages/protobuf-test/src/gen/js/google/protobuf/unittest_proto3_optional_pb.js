// Protocol Buffers - Google's data interchange format
// Copyright 2008 Google Inc.  All rights reserved.
// https://developers.google.com/protocol-buffers/
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//     * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//     * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

// @generated by protoc-gen-es v1.2.0 with parameter "ts_nocheck=false,target=js+dts"
// @generated from file google/protobuf/unittest_proto3_optional.proto (package protobuf_unittest, syntax proto3)
/* eslint-disable */

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message protobuf_unittest.TestProto3Optional
 */
export const TestProto3Optional = proto3.makeMessageType(
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
export const TestProto3Optional_NestedEnum = proto3.makeEnum(
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
export const TestProto3Optional_NestedMessage = proto3.makeMessageType(
  "protobuf_unittest.TestProto3Optional.NestedMessage",
  () => [
    { no: 1, name: "bb", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
  ],
  {localName: "TestProto3Optional_NestedMessage"},
);

/**
 * @generated from message protobuf_unittest.TestProto3OptionalMessage
 */
export const TestProto3OptionalMessage = proto3.makeMessageType(
  "protobuf_unittest.TestProto3OptionalMessage",
  () => [
    { no: 1, name: "nested_message", kind: "message", T: TestProto3OptionalMessage_NestedMessage },
    { no: 2, name: "optional_nested_message", kind: "message", T: TestProto3OptionalMessage_NestedMessage, opt: true },
  ],
);

/**
 * @generated from message protobuf_unittest.TestProto3OptionalMessage.NestedMessage
 */
export const TestProto3OptionalMessage_NestedMessage = proto3.makeMessageType(
  "protobuf_unittest.TestProto3OptionalMessage.NestedMessage",
  () => [
    { no: 1, name: "s", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "TestProto3OptionalMessage_NestedMessage"},
);

/**
 * @generated from message protobuf_unittest.Proto3OptionalExtensions
 */
export const Proto3OptionalExtensions = proto3.makeMessageType(
  "protobuf_unittest.Proto3OptionalExtensions",
  [],
);

