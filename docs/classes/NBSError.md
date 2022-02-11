[@nbsolutions/error - v0.0.0](../README.md) / [Exports](../modules.md) / NBSError

# Class: NBSError<TErrorDetails\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `TErrorDetails` | `void` |

## Hierarchy

- `NBSObject`

  ↳ **`NBSError`**

## Implements

- `Error`
- `INBSError`<`TErrorDetails`\>

## Table of contents

### Constructors

- [constructor](NBSError.md#constructor)

### Properties

- [message](NBSError.md#message)
- [name](NBSError.md#name)
- [stack](NBSError.md#stack)

### Methods

- [\_excludeNBSObjectAutoBindingsFor](NBSError.md#_excludenbsobjectautobindingsfor)
- [\_setMessage](NBSError.md#_setmessage)
- [\_skipNBSObjectAutoBind](NBSError.md#_skipnbsobjectautobind)
- [getClassName](NBSError.md#getclassname)
- [getDetails](NBSError.md#getdetails)
- [getClassName](NBSError.md#getclassname)
- [isVoid](NBSError.md#isvoid)

## Constructors

### constructor

• **new NBSError**<`TErrorDetails`\>(`message`, `details?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TErrorDetails` | `void` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `details?` | `TErrorDetails` |

#### Overrides

NBSObject.constructor

#### Defined in

[src/NBSError.ts:19](https://github.com/nbsolutions-ca/error/blob/fe708ac/src/NBSError.ts#L19)

## Properties

### message

• **message**: `string`

#### Implementation of

Error.message

#### Defined in

[src/NBSError.ts:15](https://github.com/nbsolutions-ca/error/blob/fe708ac/src/NBSError.ts#L15)

___

### name

• **name**: `string`

#### Implementation of

Error.name

#### Defined in

[src/NBSError.ts:14](https://github.com/nbsolutions-ca/error/blob/fe708ac/src/NBSError.ts#L14)

___

### stack

• **stack**: `string`

#### Implementation of

Error.stack

#### Defined in

[src/NBSError.ts:16](https://github.com/nbsolutions-ca/error/blob/fe708ac/src/NBSError.ts#L16)

## Methods

### \_excludeNBSObjectAutoBindingsFor

▸ `Protected` **_excludeNBSObjectAutoBindingsFor**(): `string`[]

#### Returns

`string`[]

#### Inherited from

NBSObject.\_excludeNBSObjectAutoBindingsFor

#### Defined in

node_modules/@nbsolutions/object/types/NBSObject.d.ts:36

___

### \_setMessage

▸ `Protected` **_setMessage**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`void`

#### Defined in

[src/NBSError.ts:37](https://github.com/nbsolutions-ca/error/blob/fe708ac/src/NBSError.ts#L37)

___

### \_skipNBSObjectAutoBind

▸ `Protected` **_skipNBSObjectAutoBind**(): `boolean`

#### Returns

`boolean`

#### Inherited from

NBSObject.\_skipNBSObjectAutoBind

#### Defined in

node_modules/@nbsolutions/object/types/NBSObject.d.ts:34

___

### getClassName

▸ **getClassName**(): `string`

#### Returns

`string`

#### Inherited from

NBSObject.getClassName

#### Defined in

node_modules/@nbsolutions/object/types/NBSObject.d.ts:26

___

### getDetails

▸ **getDetails**(): `TErrorDetails`

#### Returns

`TErrorDetails`

#### Implementation of

INBSError.getDetails

#### Defined in

[src/NBSError.ts:33](https://github.com/nbsolutions-ca/error/blob/fe708ac/src/NBSError.ts#L33)

___

### getClassName

▸ `Static` **getClassName**(`o`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `any` |

#### Returns

`string`

#### Inherited from

NBSObject.getClassName

#### Defined in

node_modules/@nbsolutions/object/types/NBSObject.d.ts:37

___

### isVoid

▸ `Static` **isVoid**<`T`\>(`o`): `boolean`

Returns true if the given value is `null` or `undefined`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `T` | Any value |

#### Returns

`boolean`

#### Inherited from

NBSObject.isVoid

#### Defined in

node_modules/@nbsolutions/object/types/NBSObject.d.ts:33
