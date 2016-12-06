# CDRS [![Build Status](https://travis-ci.org/AlexPikalov/cdrs.svg?branch=master)](https://travis-ci.org/AlexPikalov/cdrs)

**CDRS** is a native Cassandra driver written in [Rust](https://www.rust-lang.org).
The motivation to write it in Rust is a lack of native one.
Existing ones are bindings to C clients.

[Documentation](https://alexpikalov.github.io/cdrs/cdrs/index.html)

CDRS is under active development at the moment, so there is a lack of many
features and API may not be stable (but in case of any breaking changes
we will update a major version of the package in accordance to common practices
of versioning).

At the moment **CDRS** is not an ORM or a client in usual meaning
but rather a kind of quite low level driver which deals with different kind of frames.
It supports 4-th version of [Cassandra protocol](https://github.com/apache/cassandra/blob/trunk/doc/native_protocol_v4.spec).

### Supported features
- [x] lz4 decompression
- [x] snappy decompression
- [x] password authorization

### Frames

#### Request

- [x] STARTUP
- [x] AUTH_RESPONSE
- [x] OPTIONS
- [x] QUERY
- [x] PREPARE
- [x] EXECUTE
- [ ] BATCH
- [ ] REGISTER

#### Response

- [x] ERROR
- [x] READY
- [x] AUTHENTICATE
- [x] SUPPORTED
- [x] RESULT (Void)
- [x] RESULT (Rows)
- [x] RESULT (Set_keyspace)
- [x] RESULT (Prepared)
- [ ] RESULT (Schema_change)
- [ ] EVENT
- [x] AUTH_CHALLENGE
- [x] AUTH_SUCCESS

### Examples

```rust
use cdrs::client::CDRS;

let client = CDRS::new(addr).unwrap();
let use_query = String::from("SELECT * FROM loghub.syslogs;");

// start new session
match client.start() {
    Ok(parsed) => println!("OK: {:?} {:?}", parsed, parsed.get_body()),
    Err(err) => println!("Err: {:?}", err)
}

// this will receive an error because session is already started
match client.start() {
    Ok(parsed) => println!("OK: {:?} {:?}", parsed, parsed.get_body()),
    Err(err) => println!("Err: {:?}", err)
}

// this will execute a query.
match client.query(use_query) {
    Ok(parsed) => println!("OK 3: {:?} {:?}", parsed, parsed.get_body),
    Err(err) => println!("Err 3: {:?}", err)
}

```
