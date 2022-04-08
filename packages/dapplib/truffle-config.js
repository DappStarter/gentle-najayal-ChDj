require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock other sugar fan rescue mad equip just arena army giggle'; 
let testAccounts = [
"0xc54bb18bc3ab516d6d67c8c8b0dba18388106bc402aa79a211b5f7916fb1818d",
"0xc13471cc2a858a7d86b497fdd32124c6067f4f2b2c3d2a05b07a4be026a6423c",
"0x4a93789b071e895585da0f4d29e87ece2ea203a85e0c48008ee1a0cc98e2f29d",
"0x32262000952d914b0d5efe05b165e3644a9e4478adefefc35553a14b43c10b79",
"0xdb1a53714c27747580a264a906610cae1f881adb14e4444009b372fb1d2bcb37",
"0x56014e23901c199bdef945ebd8922b4f1a4d27a0f22bf66f6d98e70323a589ba",
"0xaf8722133f91c74ff762e2e3b01cecf939d647152780b44cc5346a265f9cf00c",
"0xa594688a57262f74c92f5e555f4ae50776c204b3c7843d361349ca6250b1790a",
"0xece67ca6f8320f9a26183615a58b060c35b181d28c915487375ca05e05b780a2",
"0x0bbc68d5a99bb2a778917d5dffb6dff8bb9c7363ba826b418c5b182e249348af"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

