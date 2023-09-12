import { createReactClient, studioProvider } from "@livepeer/react";

const client = createReactClient({
  provider: studioProvider({ apiKey: "c2fb3108-5c1e-4844-bef7-7eaad45b4a39" }),
});

export default client;
