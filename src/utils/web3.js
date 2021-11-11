import { ethers } from "ethers";

export const initWeb3 = async (context) => {
    if (window.ethereum) {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
        } catch (e) {
            console.log(e)
        }
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        let network = await provider.getNetwork()
        if (network.chainId !== process.env.VUE_APP_NETWORK) requestNetworkChange(provider.provider)
    
        provider.provider.on('accountsChanged', accounts => {
            context.$store.commit('changeAccounts', accounts[0])
        })
        // force harmony chain
        provider.provider.on('chainChanged', chainId => {
            if (chainId !== process.env.VUE_APP_NETWORK) context.$store.commit('incorrectNetwork', true)
            else context.$store.commit('incorrectNetwork', false)
        })
        context.$store.commit('changeIsConnected', true)
    } else {
        console.log('ethereum is not enabled')
    }
}

export function requestNetworkChange(provider, network) {
    try {
      provider.request({
        method: 'wallet_switchEthereumChain',
        params: [network]
      })
    } catch (e) {
      console.log(e)
    }
}