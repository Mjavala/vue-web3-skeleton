export const ETHEREUM_MAINNET_PARAMS = {
    chainId: '0x1',
}

export const RINKEBY_TESTNET_PARAMS = {
    chainId: '0x4',
    chainName: 'Rinkeby',
    nativeCurrency: {
        name: 'Rinkeby',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: ['https://rinkeby-light.eth.linkpool.io/'],
    blockExplorerUrls: ['https://rinkeby.etherscan.io/']
}