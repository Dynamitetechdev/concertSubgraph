// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get approved(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class SoulboundTicket extends ethereum.Event {
  get params(): SoulboundTicket__Params {
    return new SoulboundTicket__Params(this);
  }
}

export class SoulboundTicket__Params {
  _event: SoulboundTicket;

  constructor(event: SoulboundTicket) {
    this._event = event;
  }

  get buyersAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get ticketId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class TicketBought extends ethereum.Event {
  get params(): TicketBought__Params {
    return new TicketBought__Params(this);
  }
}

export class TicketBought__Params {
  _event: TicketBought;

  constructor(event: TicketBought) {
    this._event = event;
  }

  get buyersAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get ticketId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class endTimeEvent extends ethereum.Event {
  get params(): endTimeEvent__Params {
    return new endTimeEvent__Params(this);
  }
}

export class endTimeEvent__Params {
  _event: endTimeEvent;

  constructor(event: endTimeEvent) {
    this._event = event;
  }

  get _endTime(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class Contract extends ethereum.SmartContract {
  static bind(address: Address): Contract {
    return new Contract("Contract", address);
  }

  balanceOf(owner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getApproved(tokenId: BigInt): Address {
    let result = super.call("getApproved", "getApproved(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_getApproved(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getApproved",
      "getApproved(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getContractBalance(): BigInt {
    let result = super.call(
      "getContractBalance",
      "getContractBalance():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getContractBalance(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getContractBalance",
      "getContractBalance():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getContractOwner(): Address {
    let result = super.call(
      "getContractOwner",
      "getContractOwner():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_getContractOwner(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getContractOwner",
      "getContractOwner():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getEndTime(): BigInt {
    let result = super.call("getEndTime", "getEndTime():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getEndTime(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getEndTime", "getEndTime():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getMaxSoulNBoundCounter(): i32 {
    let result = super.call(
      "getMaxSoulNBoundCounter",
      "getMaxSoulNBoundCounter():(uint16)",
      []
    );

    return result[0].toI32();
  }

  try_getMaxSoulNBoundCounter(): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "getMaxSoulNBoundCounter",
      "getMaxSoulNBoundCounter():(uint16)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  getMaxSoulNBoundTicket(): i32 {
    let result = super.call(
      "getMaxSoulNBoundTicket",
      "getMaxSoulNBoundTicket():(uint16)",
      []
    );

    return result[0].toI32();
  }

  try_getMaxSoulNBoundTicket(): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "getMaxSoulNBoundTicket",
      "getMaxSoulNBoundTicket():(uint16)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  getMaxTicketAmount(): BigInt {
    let result = super.call(
      "getMaxTicketAmount",
      "getMaxTicketAmount():(uint32)",
      []
    );

    return result[0].toBigInt();
  }

  try_getMaxTicketAmount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getMaxTicketAmount",
      "getMaxTicketAmount():(uint32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getPreSaleCounter(): i32 {
    let result = super.call(
      "getPreSaleCounter",
      "getPreSaleCounter():(uint16)",
      []
    );

    return result[0].toI32();
  }

  try_getPreSaleCounter(): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "getPreSaleCounter",
      "getPreSaleCounter():(uint16)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  getPresaleMaxAmount(): i32 {
    let result = super.call(
      "getPresaleMaxAmount",
      "getPresaleMaxAmount():(uint16)",
      []
    );

    return result[0].toI32();
  }

  try_getPresaleMaxAmount(): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "getPresaleMaxAmount",
      "getPresaleMaxAmount():(uint16)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  getTicketPrice(): BigInt {
    let result = super.call("getTicketPrice", "getTicketPrice():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getTicketPrice(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getTicketPrice",
      "getTicketPrice():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getWhiteListedCount(): i32 {
    let result = super.call(
      "getWhiteListedCount",
      "getWhiteListedCount():(uint8)",
      []
    );

    return result[0].toI32();
  }

  try_getWhiteListedCount(): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "getWhiteListedCount",
      "getWhiteListedCount():(uint8)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  hasSoulBoundToken(owner: Address): boolean {
    let result = super.call(
      "hasSoulBoundToken",
      "hasSoulBoundToken(address):(bool)",
      [ethereum.Value.fromAddress(owner)]
    );

    return result[0].toBoolean();
  }

  try_hasSoulBoundToken(owner: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "hasSoulBoundToken",
      "hasSoulBoundToken(address):(bool)",
      [ethereum.Value.fromAddress(owner)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isApprovedForAll(owner: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    owner: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isWhiteListed(_address: Address): boolean {
    let result = super.call("isWhiteListed", "isWhiteListed(address):(bool)", [
      ethereum.Value.fromAddress(_address)
    ]);

    return result[0].toBoolean();
  }

  try_isWhiteListed(_address: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isWhiteListed",
      "isWhiteListed(address):(bool)",
      [ethereum.Value.fromAddress(_address)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  ownerOf(tokenId: BigInt): Address {
    let result = super.call("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_ownerOf(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokenByIndex(index: BigInt): BigInt {
    let result = super.call("tokenByIndex", "tokenByIndex(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(index)
    ]);

    return result[0].toBigInt();
  }

  try_tokenByIndex(index: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenByIndex",
      "tokenByIndex(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(index)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenOfOwnerByIndex(owner: Address, index: BigInt): BigInt {
    let result = super.call(
      "tokenOfOwnerByIndex",
      "tokenOfOwnerByIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(owner),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );

    return result[0].toBigInt();
  }

  try_tokenOfOwnerByIndex(
    owner: Address,
    index: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenOfOwnerByIndex",
      "tokenOfOwnerByIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(owner),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenURI(tokenId: BigInt): string {
    let result = super.call("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toString();
  }

  try_tokenURI(tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  whiteListedCounter(): i32 {
    let result = super.call(
      "whiteListedCounter",
      "whiteListedCounter():(uint8)",
      []
    );

    return result[0].toI32();
  }

  try_whiteListedCounter(): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "whiteListedCounter",
      "whiteListedCounter():(uint8)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _startTime(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }
}

export class BuyTicketCall extends ethereum.Call {
  get inputs(): BuyTicketCall__Inputs {
    return new BuyTicketCall__Inputs(this);
  }

  get outputs(): BuyTicketCall__Outputs {
    return new BuyTicketCall__Outputs(this);
  }
}

export class BuyTicketCall__Inputs {
  _call: BuyTicketCall;

  constructor(call: BuyTicketCall) {
    this._call = call;
  }
}

export class BuyTicketCall__Outputs {
  _call: BuyTicketCall;

  constructor(call: BuyTicketCall) {
    this._call = call;
  }
}

export class KillContractCall extends ethereum.Call {
  get inputs(): KillContractCall__Inputs {
    return new KillContractCall__Inputs(this);
  }

  get outputs(): KillContractCall__Outputs {
    return new KillContractCall__Outputs(this);
  }
}

export class KillContractCall__Inputs {
  _call: KillContractCall;

  constructor(call: KillContractCall) {
    this._call = call;
  }
}

export class KillContractCall__Outputs {
  _call: KillContractCall;

  constructor(call: KillContractCall) {
    this._call = call;
  }
}

export class RemoveWhiteListedAddressCall extends ethereum.Call {
  get inputs(): RemoveWhiteListedAddressCall__Inputs {
    return new RemoveWhiteListedAddressCall__Inputs(this);
  }

  get outputs(): RemoveWhiteListedAddressCall__Outputs {
    return new RemoveWhiteListedAddressCall__Outputs(this);
  }
}

export class RemoveWhiteListedAddressCall__Inputs {
  _call: RemoveWhiteListedAddressCall;

  constructor(call: RemoveWhiteListedAddressCall) {
    this._call = call;
  }

  get addresses(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }
}

export class RemoveWhiteListedAddressCall__Outputs {
  _call: RemoveWhiteListedAddressCall;

  constructor(call: RemoveWhiteListedAddressCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFrom1Call extends ethereum.Call {
  get inputs(): SafeTransferFrom1Call__Inputs {
    return new SafeTransferFrom1Call__Inputs(this);
  }

  get outputs(): SafeTransferFrom1Call__Outputs {
    return new SafeTransferFrom1Call__Outputs(this);
  }
}

export class SafeTransferFrom1Call__Inputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SafeTransferFrom1Call__Outputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WhiteListAddressCall extends ethereum.Call {
  get inputs(): WhiteListAddressCall__Inputs {
    return new WhiteListAddressCall__Inputs(this);
  }

  get outputs(): WhiteListAddressCall__Outputs {
    return new WhiteListAddressCall__Outputs(this);
  }
}

export class WhiteListAddressCall__Inputs {
  _call: WhiteListAddressCall;

  constructor(call: WhiteListAddressCall) {
    this._call = call;
  }

  get addresses(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }
}

export class WhiteListAddressCall__Outputs {
  _call: WhiteListAddressCall;

  constructor(call: WhiteListAddressCall) {
    this._call = call;
  }
}
