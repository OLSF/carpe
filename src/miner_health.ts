import { getCPULoad, getLocalProofs, getTowerChainView } from "./miner_invoke";

export function healthCheck() {
  console.log("healthcheck");
  /// get on chain state
  getTowerChainView();
  // get latest file in local
  getLocalProofs();
  // get cpu usage
  // TODO: CPU load is erratic for both system and process.
  //   getCPULoad();
}