export const CalculatorIdl = {
  version: "0.1.0",
  name: "calculator",
  instructions: [
    {
      name: "initialize",
      accounts: [
        {
          name: "account",
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [99, 97, 108, 99, 117, 108, 97, 116, 111, 114], // "calculator"
              },
            ],
          },
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "signer",
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: "initValue",
          type: "u32",
        },
      ],
    },
    {
      name: "add",
      accounts: [
        {
          name: "account",
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [99, 97, 108, 99, 117, 108, 97, 116, 111, 114],
              },
            ],
          },
        },
      ],
      args: [
        {
          name: "val",
          type: "u32",
        },
      ],
    },
    {
      name: "subtract",
      accounts: [
        {
          name: "account",
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [99, 97, 108, 99, 117, 108, 97, 116, 111, 114],
              },
            ],
          },
        },
      ],
      args: [
        {
          name: "val",
          type: "u32",
        },
      ],
    },
    {
      name: "multiply",
      accounts: [
        {
          name: "account",
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [99, 97, 108, 99, 117, 108, 97, 116, 111, 114],
              },
            ],
          },
        },
      ],
      args: [
        {
          name: "val",
          type: "u32",
        },
      ],
    },
    {
      name: "divide",
      accounts: [
        {
          name: "account",
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [99, 97, 108, 99, 117, 108, 97, 116, 111, 114],
              },
            ],
          },
        },
      ],
      args: [
        {
          name: "val",
          type: "u32",
        },
      ],
    },
    {
      name: "double",
      accounts: [
        {
          name: "account",
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [99, 97, 108, 99, 117, 108, 97, 116, 111, 114],
              },
            ],
          },
        },
      ],
      args: [],
    },
    {
      name: "half",
      accounts: [
        {
          name: "account",
          isMut: true,
          isSigner: false,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [99, 97, 108, 99, 117, 108, 97, 116, 111, 114],
              },
            ],
          },
        },
      ],
      args: [],
    },
  ],
  accounts: [
    {
      name: "DataShape",
      type: {
        kind: "struct",
        fields: [
          {
            name: "num",
            type: "u32",
          },
          {
            name: "bump",
            type: "u8",
          },
        ],
      },
    },
  ],
  errors: [
    {
      code: 6000,
      name: "Overflow",
      msg: "Arithmetic overflow occurred.",
    },
    {
      code: 6001,
      name: "Underflow",
      msg: "Arithmetic underflow occurred.",
    },
    {
      code: 6002,
      name: "DivisionByZero",
      msg: "Division by zero is not allowed.",
    },
    {
      code: 6003,
      name: "DivisionError",
      msg: "Division operation failed.",
    },
  ],
  metadata: {
    address: "s8Ey1q88pvKmSUjU4Z1dRUmJp1HS9jHaZvGnLPhVecx",
  },
} as const;
