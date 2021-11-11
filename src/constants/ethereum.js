export const ETHEREUM_MAINNET_PARAMS = {
    chainId: '0x1',
    chainName: 'Ethereum',
    nativeCurrency: {
        name: 'Ethereum',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: ['https://main-light.eth.linkpool.io/'],
    blockExplorerUrls: ['https://etherscan.io']
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