[@nbsolutions/error - v0.0.0](../README.md) / [Exports](../modules.md) / [NBSError](../modules/nbserror.md) / NBSError

# Class: NBSError<TErrorDetails\>

[NBSError](../modules/nbserror.md).NBSError

## Type parameters

| Name | Default |
| :------ | :------ |
| `TErrorDetails` | *void* |

## Hierarchy

- *NBSObject*

  ↳ **NBSError**

## Implements

- *Error*
- *INBSError*<TErrorDetails\>

## Table of contents

### Constructors

- [constructor](nbserror.nbserror-1.md#constructor)

### Properties

- [message](nbserror.nbserror-1.md#message)
- [name](nbserror.nbserror-1.md#name)
- [stack](nbserror.nbserror-1.md#stack)

### Methods

- [\_excludeNBSObjectAutoBindingsFor](nbserror.nbserror-1.md#_excludenbsobjectautobindingsfor)
- [\_setMessage](nbserror.nbserror-1.md#_setmessage)
- [\_skipNBSObjectAutoBind](nbserror.nbserror-1.md#_skipnbsobjectautobind)
- [getClassName](nbserror.nbserror-1.md#getclassname)
- [getDetails](nbserror.nbserror-1.md#getdetails)
- [getClassName](nbserror.nbserror-1.md#getclassname)
- [isVoid](nbserror.nbserror-1.md#isvoid)

## Constructors

### constructor

\+ **new NBSError**<TErrorDetails\>(`message`: *string*, `details?`: TErrorDetails): [*NBSError*](nbserror.nbserror-1.md)<TErrorDetails\>

#### Type parameters

| Name | Default |
| :------ | :------ |
| `TErrorDetails` | *void* |

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | *string* |
| `details?` | TErrorDetails |

**Returns:** [*NBSError*](nbserror.nbserror-1.md)<TErrorDetails\>

Overrides: NBSObject.constructor

Defined in: [src/NBSError.ts:17](https://github.com/nbsolutions-ca/error/blob/a7780a2/src/NBSError.ts#L17)

## Properties

### message

• **message**: *string*

Implementation of: Error.message

Defined in: [src/NBSError.ts:15](https://github.com/nbsolutions-ca/error/blob/a7780a2/src/NBSError.ts#L15)

___

### name

• **name**: *string*

Implementation of: Error.name

Defined in: [src/NBSError.ts:14](https://github.com/nbsolutions-ca/error/blob/a7780a2/src/NBSError.ts#L14)

___

### stack

• **stack**: *string*

Implementation of: Error.stack

Defined in: [src/NBSError.ts:16](https://github.com/nbsolutions-ca/error/blob/a7780a2/src/NBSError.ts#L16)

## Methods

### \_excludeNBSObjectAutoBindingsFor

▸ `Protected` **_excludeNBSObjectAutoBindingsFor**(): *string*[]

**Returns:** *string*[]

Inherited from: NBSObject.\_excludeNBSObjectAutoBindingsFor

Defined in: node_modules/@nbsolutions/object/types/NBSObject.d.ts:36

___

### \_setMessage

▸ `Protected` **_setMessage**(`message`: *string*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | *string* |

**Returns:** *void*

Defined in: [src/NBSError.ts:37](https://github.com/nbsolutions-ca/error/blob/a7780a2/src/NBSError.ts#L37)

___

### \_skipNBSObjectAutoBind

▸ `Protected` **_skipNBSObjectAutoBind**(): *boolean*

**Returns:** *boolean*

Inherited from: NBSObject.\_skipNBSObjectAutoBind

Defined in: node_modules/@nbsolutions/object/types/NBSObject.d.ts:34

___

### getClassName

▸ **getClassName**(): *string*

**Returns:** *string*

Inherited from: NBSObject.getClassName

Defined in: node_modules/@nbsolutions/object/types/NBSObject.d.ts:26

___

### getDetails

▸ **getDetails**(): TErrorDetails

**Returns:** TErrorDetails

Implementation of: INBSError.getDetails

Defined in: [src/NBSError.ts:33](https://github.com/nbsolutions-ca/error/blob/a7780a2/src/NBSError.ts#L33)

___

### getClassName

▸ `Static` **getClassName**(`o`: *any*): *string*

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | *any* |

**Returns:** *string*

Inherited from: NBSObject.getClassName

Defined in: node_modules/@nbsolutions/object/types/NBSObject.d.ts:37

___

### isVoid

▸ `Static` **isVoid**<T\>(`o`: T): *boolean*

Returns true if the given value is `null` or `undefined`

#### Type parameters

| Name | Default |
| :------ | :------ |
| `T` | *any* |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | T | Any value |

**Returns:** *boolean*

Inherited from: NBSObject.isVoid

Defined in: node_modules/@nbsolutions/object/types/NBSObject.d.ts:33
