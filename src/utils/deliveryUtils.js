export const PROVIDER_DATA = {
    "Provider A": { sameDayCutoff: 17, provider: "Provider A" },
    "Provider B": { sameDayCutoff: 9, provider: "Provider B" },
    "General": { provider: "General Partners" },
  };
  
  export function getProviderForPincode(logisticsProvider) {
    return PROVIDER_DATA[logisticsProvider] || PROVIDER_DATA["General"];
  }
  