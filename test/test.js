const qitmeer = require('../src')

const network = qitmeer.networks.testnet

const privte = 'd7e11af4918fbefaa21fdc49d531099c6b30cc30e19560fe8a337a467b00ab93'
// !function(){
//     // // 公钥 到 hash 160
//     // const {publicKey} = qitmeer.ec.fromPrivateKey(Buffer.from(privte,'hex'))
//     // console.log ( publicKey.toString('hex') )
//     // const publicKeyHash160 = qitmeer.hash.hash160(publicKey)
//     // console.log ( publicKeyHash160.toString('hex') )

//     // // hash 160  到地址
//     // const p2pkhAddress = qitmeer.address.toBase58Check(publicKeyHash160, network.pubKeyHashAddrId)
//     // console.log ( p2pkhAddress )


//     // // alex's privkey 9af3b7c0b4f19635f90a5fc722defb961ac43508c66ffe5df992e9314f2a2948
//     // const privte = '9af3b7c0b4f19635f90a5fc722defb961ac43508c66ffe5df992e9314f2a2948'
//     // const alex = qitmeer.ec.fromPrivateKey(Buffer.from(privte,'hex'))
//     // // create a new tx-signer
//     const txsnr = qitmeer.txsign.newSigner(network)
    
//     // txsnr.setVersion(1)
//     // // alex's previous transaction output, has 450 qitmeer
//     // txsnr.addInput('5c0dff371fe9c762139570bdfef7d34aca5e84325871e67fd0203f0da8c5e50c', 2)
//     // txsnr.addOutput('RmFskNPMcPLn4KpDqYzkgwBoa5soPS2SDDH', 44000000000)
//     // txsnr.addOutput('RmQNkCr8ehRUzJhmNmgQVByv7VjakuCjc3d', 990000000)

//     // // sign
//     // txsnr.sign(0, alex)



//     //   txsnr.setVersion(1)
//     //   txsnr.addInput('d46a58fced5a05b1dc1f4450e1bdf09696291348a7eccec069ed59343ec35b4d', 2)
//     //   txsnr.addInput('46a6d3d9e1ef552dc9b0eba147ea97e481654a2bccf59fd764652971cb4d9fdd', 2)
//     //   txsnr.addOutput('RmFskNPMcPLn4KpDqYzkgwBoa5soPS2SDDH', 89000000000)
//     //   txsnr.addOutput('RmQNkCr8ehRUzJhmNmgQVByv7VjakuCjc3d', 990000000)
//     //   // (in)90000000000 - (out)89990000000 = (miner fee)10000000
//     //   // sign all index
//     //   txsnr.sign(0, alex)
//     //   txsnr.sign(1, alex)

//         const alex = qitmeer.ec.fromWIF('L2dkArHkWP3oxrGPNVJc21tWnsPWJdZJVuVTX2AgudoSvJB4EE28')
//       txsnr.setVersion(1)
//       txsnr.addInput('54973ad8c0f29f3f9ae8566aaf551fed78b030702594ccebab18a4b0454dc940', 1)
//       txsnr.addInput('5663cd2866ed02e695b90c90bd1fbb4d8fdb6ca818441067828750ff27d78bc3', 1)
//       txsnr.addOutput('TmjCzYVyGbMMRarsnrQKThqbNPAKvsEV5Js', 89000000000)
//       txsnr.addOutput('TmjCzYVyGbMMRarsnrQKThqbNPAKvsEV5Js', 990000000)
//       // (in)90000000000 - (out)89990000000 = (miner fee)10000000
//       // sign all index
//       txsnr.sign(0, alex)
//       txsnr.sign(1, alex)

//     // get raw Tx
//     const rawTx = txsnr.build()//.toBuffer()
//     console.log ( rawTx.getTxHash(), rawTx.toBuffer().toString('hex') )
// // return
//     // const txra = '01000000010ce5c5a80d3f20d07fe6715832845eca4ad3f7febd70951362c7e91f37ff0d5c02000000ffffffff0200b89a3e0a0000001976a91469570a6c1fcb68db1b1c50b34960e714d42c7b9c88ac8033023b000000001976a914c693f8fbfe6836f1fb55579b427cfc4fd201495388ac0000000000000000016a473044022061e957624fc53e9be6217845ed9c7251c04de33fd5143dab84e73c27193effe40220231ba5e6365277af20d41e8e08413147247070b7022f0cbbe9cbb35dc16e24d8012102abb13cd5260d3e9f8bc3db8687147ace7b6e5b63b061afe37d09a8e4550cd174'
//     const txra =  rawTx.toBuffer().toString('hex')
//     console.log (
//         qitmeer.tx.fromBuffer(Buffer(txra,'hex'))
//     )
    
// }();

// qx tx-encode -i 5c0dff371fe9c762139570bdfef7d34aca5e84325871e67fd0203f0da8c5e50c:2 -o RmFskNPMcPLn4KpDqYzkgwBoa5soPS2SDDH:440 -o RmQNkCr8ehRUzJhmNmgQVByv7VjakuCjc3d:9.9
// 01000000010ce5c5a80d3f20d07fe6715832845eca4ad3f7febd70951362c7e91f37ff0d5c02000000ffffffff0200b89a3e0a0000001976a91469570a6c1fcb68db1b1c50b34960e714d42c7b9c88ac8033023b000000001976a914c693f8fbfe6836f1fb55579b427cfc4fd201495388ac00000000000000000100
// 01000000010ce5c5a80d3f20d07fe6715832845eca4ad3f7febd70951362c7e91f37ff0d5c02000000ffffffff0200b89a3e0a0000001976a91469570a6c1fcb68db1b1c50b34960e714d42c7b9c88ac8033023b000000001976a914c693f8fbfe6836f1fb55579b427cfc4fd201495388ac00000000000000000100000000000000000000000000000000020000
// 01000000010ce5c5a80d3f20d07fe6715832845eca4ad3f7febd70951362c7e91f37ff0d5c02000000ffffffff0200b89a3e0a0000001976a91469570a6c1fcb68db1b1c50b34960e714d42c7b9c88ac8033023b000000001976a914c693f8fbfe6836f1fb55579b427cfc4fd201495388ac00000000000000000205


// 01000000010ce5c5a80d3f20d07fe6715832845eca4ad3f7febd70951362c7e91f37ff0d5c02000000ffffffff0200b89a3e0a0000001976a91469570a6c1fcb68db1b1c50b34960e714d42c7b9c88ac8033023b000000001976a914c693f8fbfe6836f1fb55579b427cfc4fd201495388ac0000000000000000016a473044022061e957624fc53e9be6217845ed9c7251c04de33fd5143dab84e73c27193effe40220231ba5e6365277af20d41e8e08413147247070b7022f0cbbe9cbb35dc16e24d8012102abb13cd5260d3e9f8bc3db8687147ace7b6e5b63b061afe37d09a8e4550cd174
// 01000000010ce5c5a80d3f20d07fe6715832845eca4ad3f7febd70951362c7e91f37ff0d5c02000000ffffffff0200b89a3e0a0000001976a91469570a6c1fcb68db1b1c50b34960e714d42c7b9c88ac8033023b000000001976a914c693f8fbfe6836f1fb55579b427cfc4fd201495388ac000000000000000001000000000000000000000000000000006a473044022061e957624fc53e9be6217845ed9c7251c04de33fd5143dab84e73c27193effe40220231ba5e6365277af20d41e8e08413147247070b7022f0cbbe9cbb35dc16e24d8012102abb13cd5260d3e9f8bc3db8687147ace7b6e5b63b061afe37d09a8e4550cd174
// 01000000010ce5c5a80d3f20d07fe6715832845eca4ad3f7febd70951362c7e91f37ff0d5c02000000ffffffff0200b89a3e0a0000001976a91469570a6c1fcb68db1b1c50b34960e714d42c7b9c88ac8033023b000000001976a914c693f8fbfe6836f1fb55579b427cfc4fd201495388ac0000000000000000016a473044022061e957624fc53e9be6217845ed9c7251c04de33fd5143dab84e73c27193effe40220231ba5e6365277af20d41e8e08413147247070b7022f0cbbe9cbb35dc16e24d8012102abb13cd5260d3e9f8bc3db8687147ace7b6e5b63b061afe37d09a8e4550cd174


// qx tx-encode -i d46a58fced5a05b1dc1f4450e1bdf09696291348a7eccec069ed59343ec35b4d:2 -i 46a6d3d9e1ef552dc9b0eba147ea97e481654a2bccf59fd764652971cb4d9fdd:2 -o RmFskNPMcPLn4KpDqYzkgwBoa5soPS2SDDH:890 -o RmQNkCr8ehRUzJhmNmgQVByv7VjakuCjc3d:9.9
// 01000000024d5bc33e3459ed69c0ceeca74813299696f0bde150441fdcb1055aedfc586ad402000000ffffffffdd9f4dcb71296564d79ff5cc2b4a6581e497ea47a1ebb0c92d55efe1d9d3a64602000000ffffffff02003ad0b8140000001976a91469570a6c1fcb68db1b1c50b34960e714d42c7b9c88ac8033023b000000001976a914c693f8fbfe6836f1fb55579b427cfc4fd201495388ac0000000000000000020000
// 01000000024d5bc33e3459ed69c0ceeca74813299696f0bde150441fdcb1055aedfc586ad402000000ffffffffdd9f4dcb71296564d79ff5cc2b4a6581e497ea47a1ebb0c92d55efe1d9d3a64602000000ffffffff02003ad0b8140000001976a91469570a6c1fcb68db1b1c50b34960e714d42c7b9c88ac8033023b000000001976a914c693f8fbfe6836f1fb55579b427cfc4fd201495388ac0000000000000000020000000000000000000000000000000002000000000000000000000000000000000000020000
// 01000000024d5bc33e3459ed69c0ceeca74813299696f0bde150441fdcb1055aedfc586ad402000000ffffffffdd9f4dcb71296564d79ff5cc2b4a6581e497ea47a1ebb0c92d55efe1d9d3a64602000000ffffffff02003ad0b8140000001976a91469570a6c1fcb68db1b1c50b34960e714d42c7b9c88ac8033023b000000001976a914c693f8fbfe6836f1fb55579b427cfc4fd201495388ac0000000000000000000301


// 01000000024d5bc33e3459ed69c0ceeca74813299696f0bde150441fdcb1055aedfc586ad402000000ffffffffdd9f4dcb71296564d79ff5cc2b4a6581e497ea47a1ebb0c92d55efe1d9d3a64602000000ffffffff02003ad0b8140000001976a91469570a6c1fcb68db1b1c50b34960e714d42c7b9c88ac8033023b000000001976a914c693f8fbfe6836f1fb55579b427cfc4fd201495388ac0000000000000000026a473044022005422cf4f7a082fe931509b44aee54c3d3c80b1f0d43ed1483ffeb7248857fe402202b9c050ed0fbb9883c8ff98d8a48c33483b32ad776d6746365f9b8851e6dcda5012102abb13cd5260d3e9f8bc3db8687147ace7b6e5b63b061afe37d09a8e4550cd1746b483045022100be434e16f4c83947b1a19fefbf319b7170b280c9a0d89c0786624a83bda337910220395753153ab55b21d7041705c75f42778d7846a41ca5cbb5b033f875d20a9f15012102abb13cd5260d3e9f8bc3db8687147ace7b6e5b63b061afe37d09a8e4550cd174
// 01000000024d5bc33e3459ed69c0ceeca74813299696f0bde150441fdcb1055aedfc586ad402000000ffffffffdd9f4dcb71296564d79ff5cc2b4a6581e497ea47a1ebb0c92d55efe1d9d3a64602000000ffffffff02003ad0b8140000001976a91469570a6c1fcb68db1b1c50b34960e714d42c7b9c88ac8033023b000000001976a914c693f8fbfe6836f1fb55579b427cfc4fd201495388ac0000000000000000026a473044022005422cf4f7a082fe931509b44aee54c3d3c80b1f0d43ed1483ffeb7248857fe402202b9c050ed0fbb9883c8ff98d8a48c33483b32ad776d6746365f9b8851e6dcda5012102abb13cd5260d3e9f8bc3db8687147ace7b6e5b63b061afe37d09a8e4550cd1746b483045022100be434e16f4c83947b1a19fefbf319b7170b280c9a0d89c0786624a83bda337910220395753153ab55b21d7041705c75f42778d7846a41ca5cbb5b033f875d20a9f15012102abb13cd5260d3e9f8bc3db8687147ace7b6e5b63b061afe37d09a8e4550cd174
!function() {
    const res = [
        {
            TxId: '54973ad8c0f29f3f9ae8566aaf551fed78b030702594ccebab18a4b0454dc940',
            OutIndex: 1,
            Amount: 500000000
        },
        {
            TxId: '5663cd2866ed02e695b90c90bd1fbb4d8fdb6ca818441067828750ff27d78bc3',
            OutIndex: 1,
            Amount: 500000000
        }
    ]
    const value = 4
    const to = 'TmjCzYVyGbMMRarsnrQKThqbNPAKvsEV5Js'
    const from = to
    const keyPair = qitmeer.ec.fromWIF('L2dkArHkWP3oxrGPNVJc21tWnsPWJdZJVuVTX2AgudoSvJB4EE28')
    const txBuilder = new qitmeer.txsign.newSigner(network);
    const fee = 1000
    txBuilder.setVersion(1);

    const fullValue = Math.ceil(parseFloat(value) * 1e8);
    let total = 0, arr = [];
    res.map(function (item, key) {
        if (total < (fee + fullValue)) {
            total += item.Amount;
            arr.push(item);
            txBuilder.addInput(item['TxId'], item['OutIndex'])
        }
    });
    const balance = total - (fullValue + fee);
    if (balance >= 0) {
        txBuilder.addOutput(to, fullValue);
        txBuilder.addOutput(from, balance);
    } else {
        console.log({code: -2}, balance )
        return 
    }

    arr.map(function (item, key) {
        txBuilder.sign(key, keyPair);
    });

    console.log(11 )
    console.log (txBuilder.build().toBuffer().toString("hex") )
    // return {
    //     code: 0,
    //     tx: 
    // };
}()
