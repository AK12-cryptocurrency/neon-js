import * as C from "../../src/wallet/core";

interface TestAccount {
  address: string;
  publicKey: string;
  privateKey: string;
  scriptHash: string;
  WIF: string;
}

describe.each([
  [
    "NQUSutcttqQyuyrC8kRESekjG5dv95nw5w",
    {
      address: "NQUSutcttqQyuyrC8kRESekjG5dv95nw5w",
      publicKey:
        "02963fc761eb7135c4593bfc6a0af96d8588b70d8f6ef3af8549181e57772181f5",
      privateKey:
        "a7b9775c6b9136bf89f63def7eab0c5f2d3d0c9e85492717f54386420cce5aa1",
      scriptHash: "e09902ac13bffb8eea5932d5d50851c973f50432",
      WIF: "L2qkBc4ogTZERR4Watg4QoQq37w8fxrVZkYrPk7ZZSoRUZsr9yML"
    }
  ],
  [
    "NPsFSn9bThCKn3iycoA4NeEJx1PuMmPYGD",
    {
      address: "NPsFSn9bThCKn3iycoA4NeEJx1PuMmPYGD",
      publicKey:
        "03c663ba46afa8349f020eb9e8f9e1dc1c8e877b9d239e139af699049126e0f321",
      privateKey:
        "4f0d41eda93941d106d4a26cc90b4b4fddc0e03b396ac94eb439c5d9e0cd6548",
      scriptHash: "30fa6b9bba5eb2e5f5f9364bca02f374ddd35c2b",
      WIF: "KysNqEuLb3wmZJ6PsxbA9Bh6ewTybEda4dEiN9X7X48dJPkLWZ5a"
    }
  ],
  [
    "NjDUhEgqvge2h9yfAvPNKbhtWfKjpH11ep",
    {
      address: "NjDUhEgqvge2h9yfAvPNKbhtWfKjpH11ep",
      publicKey:
        "02c1a9b2d0580902a6c2d09a8febd0a7a13518a9a61d08183f09ff929b66ac7c26",
      privateKey:
        "793466a3dfe3935a475d02290e37000a3e835f6740f9733e72e979d6e1166e13",
      scriptHash: "4b557a279dc60cd1431a655003b0a08fbe989aff",
      WIF: "L1HKLWratxFhX94XSn98JEULQYKGhRycf4nREe3Cs8EPQStF5u9E"
    }
  ]
])("Core: %s", (msg: string, data: TestAccount) => {
  test("WIF => privateKey", () => {
    const result = C.getPrivateKeyFromWIF(data.WIF);
    expect(result).toBe(data.privateKey);
  });

  test("privateKey => WIF", () => {
    const result = C.getWIFFromPrivateKey(data.privateKey);
    expect(result).toBe(data.WIF);
  });

  it("privateKey => publicKey", () => {
    const result = C.getPublicKeyFromPrivateKey(data.privateKey);
    expect(result).toBe(data.publicKey);
  });

  it("publicKey => scriptHash", () => {
    const result = C.getScriptHashFromPublicKey(data.publicKey);
    expect(result).toBe(data.scriptHash);
  });

  it("scriptHash => address", () => {
    const result = C.getAddressFromScriptHash(data.scriptHash);
    expect(result).toBe(data.address);
  });

  it("address => scriptHash", () => {
    const result = C.getScriptHashFromAddress(data.address);
    expect(result).toBe(data.scriptHash);
  });
});

describe("generate", () => {
  test("generate a private key", () => {
    const privateKey = C.generatePrivateKey();
    expect(privateKey.length).toBe(64);
  });
});

describe("Public key", () => {
  test("encode", () => {
    const result = C.getPublicKeyEncoded(
      "041d8e1630ce640966967bc6d95223d21f44304133003140c3b52004dc981349c94617303f7408d9abfedfb6fbb00dd07e3e7735d918bbea7a7e2c1895ea1bc9b9"
    );

    expect(result).toBe(
      "031d8e1630ce640966967bc6d95223d21f44304133003140c3b52004dc981349c9"
    );
  });

  test("decode", () => {
    const result = C.getPublicKeyUnencoded(
      "031d8e1630ce640966967bc6d95223d21f44304133003140c3b52004dc981349c9"
    );
    expect(result).toBe(
      "041d8e1630ce640966967bc6d95223d21f44304133003140c3b52004dc981349c94617303f7408d9abfedfb6fbb00dd07e3e7735d918bbea7a7e2c1895ea1bc9b9"
    );
  });
});
