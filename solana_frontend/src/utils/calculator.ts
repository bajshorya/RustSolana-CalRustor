/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/calculator.json`.
 */
export type Calculator = {
  address: "s8Ey1q88pvKmSUjU4Z1dRUmJp1HS9jHaZvGnLPhVecx";
  metadata: {
    name: "calculator";
    version: "0.1.0";
    spec: "0.1.0";
    description: "Created with Anchor";
  };
  instructions: [
    {
      name: "add";
      discriminator: [41, 249, 249, 146, 197, 111, 56, 181];
      accounts: [
        {
          name: "account";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [99, 97, 108, 99, 117, 108, 97, 116, 111, 114];
              }
            ];
          };
        }
      ];
      args: [
        {
          name: "val";
          type: "u32";
        }
      ];
    },
    {
      name: "divide";
      discriminator: [20, 209, 165, 165, 178, 152, 253, 210];
      accounts: [
        {
          name: "account";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [99, 97, 108, 99, 117, 108, 97, 116, 111, 114];
              }
            ];
          };
        }
      ];
      args: [
        {
          name: "val";
          type: "u32";
        }
      ];
    },
    {
      name: "double";
      discriminator: [162, 214, 74, 72, 133, 109, 203, 102];
      accounts: [
        {
          name: "account";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [99, 97, 108, 99, 117, 108, 97, 116, 111, 114];
              }
            ];
          };
        }
      ];
      args: [];
    },
    {
      name: "half";
      discriminator: [76, 180, 225, 131, 93, 32, 187, 25];
      accounts: [
        {
          name: "account";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [99, 97, 108, 99, 117, 108, 97, 116, 111, 114];
              }
            ];
          };
        }
      ];
      args: [];
    },
    {
      name: "initialize";
      discriminator: [175, 175, 109, 31, 13, 152, 155, 237];
      accounts: [
        {
          name: "account";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [99, 97, 108, 99, 117, 108, 97, 116, 111, 114];
              }
            ];
          };
        },
        {
          name: "systemProgram";
          address: "11111111111111111111111111111111";
        },
        {
          name: "signer";
          writable: true;
          signer: true;
        }
      ];
      args: [
        {
          name: "initValue";
          type: "u32";
        }
      ];
    },
    {
      name: "multiply";
      discriminator: [110, 145, 192, 50, 23, 151, 245, 130];
      accounts: [
        {
          name: "account";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [99, 97, 108, 99, 117, 108, 97, 116, 111, 114];
              }
            ];
          };
        }
      ];
      args: [
        {
          name: "val";
          type: "u32";
        }
      ];
    },
    {
      name: "subtract";
      discriminator: [205, 116, 109, 140, 76, 83, 72, 208];
      accounts: [
        {
          name: "account";
          writable: true;
          pda: {
            seeds: [
              {
                kind: "const";
                value: [99, 97, 108, 99, 117, 108, 97, 116, 111, 114];
              }
            ];
          };
        }
      ];
      args: [
        {
          name: "val";
          type: "u32";
        }
      ];
    }
  ];
  accounts: [
    {
      name: "dataShape";
      discriminator: [53, 175, 45, 58, 248, 207, 235, 106];
    }
  ];
  errors: [
    {
      code: 6000;
      name: "overflow";
      msg: "Arithmetic overflow occurred.";
    },
    {
      code: 6001;
      name: "underflow";
      msg: "Arithmetic underflow occurred.";
    },
    {
      code: 6002;
      name: "divisionByZero";
      msg: "Division by zero is not allowed.";
    },
    {
      code: 6003;
      name: "divisionError";
      msg: "Division operation failed.";
    }
  ];
  types: [
    {
      name: "dataShape";
      type: {
        kind: "struct";
        fields: [
          {
            name: "num";
            type: "u32";
          },
          {
            name: "bump";
            type: "u8";
          }
        ];
      };
    }
  ];
};
