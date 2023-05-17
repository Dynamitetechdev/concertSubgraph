import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  SoulboundTicket as SoulboundTicketEvent,
  TicketBought as TicketBoughtEvent,
  Transfer as TransferEvent,
  endTimeEvent as endTimeEventEvent
} from "../generated/Contract/Contract"
import {
  Approval,
  ApprovalForAll,
  OwnershipTransferred,
  SoulboundTicket,
  TicketBought,
  Transfer,
  endTimeEvent
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSoulboundTicket(event: SoulboundTicketEvent): void {
  let entity = new SoulboundTicket(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.buyersAddress = event.params.buyersAddress
  entity.ticketId = event.params.ticketId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTicketBought(event: TicketBoughtEvent): void {
  let entity = new TicketBought(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.buyersAddress = event.params.buyersAddress
  entity.ticketId = event.params.ticketId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleendTimeEvent(event: endTimeEventEvent): void {
  let entity = new endTimeEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._endTime = event.params._endTime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
