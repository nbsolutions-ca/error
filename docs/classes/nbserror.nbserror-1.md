[@nbsolutions/error - v0.0.0](../README.md) / [Exports](../modules.md) / [NBSError](../modules/nbserror.md) / NBSError

# Class: NBSError

[NBSError](../modules/nbserror.md).NBSError

## Hierarchy

* *Error*

  ↳ **NBSError**

## Table of contents

### Constructors

- [constructor](nbserror.nbserror-1.md#constructor)

### Properties

- [message](nbserror.nbserror-1.md#message)
- [name](nbserror.nbserror-1.md#name)
- [stack](nbserror.nbserror-1.md#stack)
- [prepareStackTrace](nbserror.nbserror-1.md#preparestacktrace)
- [stackTraceLimit](nbserror.nbserror-1.md#stacktracelimit)

### Methods

- [captureStackTrace](nbserror.nbserror-1.md#capturestacktrace)

## Constructors

### constructor

\+ **new NBSError**(`message`: *string*): [*NBSError*](nbserror.nbserror-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`message` | *string* |

**Returns:** [*NBSError*](nbserror.nbserror-1.md)

Defined in: src/NBSError.ts:2

## Properties

### message

• **message**: *string*

Defined in: node_modules/typescript/lib/lib.es5.d.ts:974

___

### name

• **name**: *string*

Defined in: node_modules/typescript/lib/lib.es5.d.ts:973

___

### stack

• `Optional` **stack**: *string*

Defined in: node_modules/typescript/lib/lib.es5.d.ts:975

___

### prepareStackTrace

▪ `Optional` `Static` **prepareStackTrace**: (`err`: Error, `stackTraces`: CallSite[]) => *any*

Optional override for formatting stack traces

**`see`** https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Type declaration:

▸ (`err`: Error, `stackTraces`: CallSite[]): *any*

#### Parameters:

Name | Type |
:------ | :------ |
`err` | Error |
`stackTraces` | CallSite[] |

**Returns:** *any*

Defined in: node_modules/@types/node/globals.d.ts:11

Defined in: node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: *number*

Defined in: node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static`**captureStackTrace**(`targetObject`: *object*, `constructorOpt?`: Function): *void*

Create .stack property on a target object

#### Parameters:

Name | Type |
:------ | :------ |
`targetObject` | *object* |
`constructorOpt?` | Function |

**Returns:** *void*

Defined in: node_modules/@types/node/globals.d.ts:4
