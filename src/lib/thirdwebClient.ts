import { createThirdwebClient,defineChain } from "thirdweb";
import { base } from "thirdweb/chains";
 
const myChainId = base;
import.meta.env
// Replace this with your client ID string
// refer to https://portal.thirdweb.com/typescript/v5/client on how to get a client ID
const clientId = process.env.VITE_PUBLIC_CLIENT_ID;
 

if (!clientId) {
  throw new Error("No client ID provided");
}

export const client = createThirdwebClient({
  clientId: clientId,
});
 
 
export const myChain = defineChain(myChainId);