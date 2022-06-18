// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class NewPlaceEvent extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save NewPlaceEvent entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type NewPlaceEvent must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("NewPlaceEvent", id.toString(), this);
    }
  }

  static load(id: string): NewPlaceEvent | null {
    return changetype<NewPlaceEvent | null>(store.get("NewPlaceEvent", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get index(): BigInt {
    let value = this.get("index");
    return value!.toBigInt();
  }

  set index(value: BigInt) {
    this.set("index", Value.fromBigInt(value));
  }

  get size(): BigInt {
    let value = this.get("size");
    return value!.toBigInt();
  }

  set size(value: BigInt) {
    this.set("size", Value.fromBigInt(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    return value!.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get category(): i32 {
    let value = this.get("category");
    return value!.toI32();
  }

  set category(value: i32) {
    this.set("category", Value.fromI32(value));
  }

  get title(): string {
    let value = this.get("title");
    return value!.toString();
  }

  set title(value: string) {
    this.set("title", Value.fromString(value));
  }

  get description(): string {
    let value = this.get("description");
    return value!.toString();
  }

  set description(value: string) {
    this.set("description", Value.fromString(value));
  }

  get image(): string {
    let value = this.get("image");
    return value!.toString();
  }

  set image(value: string) {
    this.set("image", Value.fromString(value));
  }
}

export class NewRentEvent extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save NewRentEvent entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type NewRentEvent must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("NewRentEvent", id.toString(), this);
    }
  }

  static load(id: string): NewRentEvent | null {
    return changetype<NewRentEvent | null>(store.get("NewRentEvent", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get user(): Bytes {
    let value = this.get("user");
    return value!.toBytes();
  }

  set user(value: Bytes) {
    this.set("user", Value.fromBytes(value));
  }

  get index(): BigInt {
    let value = this.get("index");
    return value!.toBigInt();
  }

  set index(value: BigInt) {
    this.set("index", Value.fromBigInt(value));
  }

  get category(): i32 {
    let value = this.get("category");
    return value!.toI32();
  }

  set category(value: i32) {
    this.set("category", Value.fromI32(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get description(): string {
    let value = this.get("description");
    return value!.toString();
  }

  set description(value: string) {
    this.set("description", Value.fromString(value));
  }
}

export class NewPersonEvent extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save NewPersonEvent entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type NewPersonEvent must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("NewPersonEvent", id.toString(), this);
    }
  }

  static load(id: string): NewPersonEvent | null {
    return changetype<NewPersonEvent | null>(store.get("NewPersonEvent", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get direction(): Bytes {
    let value = this.get("direction");
    return value!.toBytes();
  }

  set direction(value: Bytes) {
    this.set("direction", Value.fromBytes(value));
  }

  get last_name(): string {
    let value = this.get("last_name");
    return value!.toString();
  }

  set last_name(value: string) {
    this.set("last_name", Value.fromString(value));
  }

  get first_name(): string {
    let value = this.get("first_name");
    return value!.toString();
  }

  set first_name(value: string) {
    this.set("first_name", Value.fromString(value));
  }

  get email(): string {
    let value = this.get("email");
    return value!.toString();
  }

  set email(value: string) {
    this.set("email", Value.fromString(value));
  }
}

export class NewCategoryEvent extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save NewCategoryEvent entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type NewCategoryEvent must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("NewCategoryEvent", id.toString(), this);
    }
  }

  static load(id: string): NewCategoryEvent | null {
    return changetype<NewCategoryEvent | null>(
      store.get("NewCategoryEvent", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get index(): BigInt {
    let value = this.get("index");
    return value!.toBigInt();
  }

  set index(value: BigInt) {
    this.set("index", Value.fromBigInt(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get description(): string {
    let value = this.get("description");
    return value!.toString();
  }

  set description(value: string) {
    this.set("description", Value.fromString(value));
  }

  get image(): string {
    let value = this.get("image");
    return value!.toString();
  }

  set image(value: string) {
    this.set("image", Value.fromString(value));
  }
}

export class NewWithdrawEvent extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save NewWithdrawEvent entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type NewWithdrawEvent must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("NewWithdrawEvent", id.toString(), this);
    }
  }

  static load(id: string): NewWithdrawEvent | null {
    return changetype<NewWithdrawEvent | null>(
      store.get("NewWithdrawEvent", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value!.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get balance(): BigInt {
    let value = this.get("balance");
    return value!.toBigInt();
  }

  set balance(value: BigInt) {
    this.set("balance", Value.fromBigInt(value));
  }
}
