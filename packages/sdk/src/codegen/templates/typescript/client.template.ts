//language=handlebars
export const handlebarTemplate = `
import { WunderGraphClient, ClientConfig } from '@wundergraph/sdk/client'

export type Role = {{{ roleDefinitions }}};

export const defaultClientConfig: ClientConfig = {
    applicationHash: "{{applicationHash}}",
    applicationPath: "{{applicationPath}}",
    baseURL: "{{baseURL}}",
    sdkVersion: "{{sdkVersion}}",
}

export const createClient = (config: ClientConfig) => {
    return new WunderGraphClient<Role>({
        ...defaultClientConfig,
        ...config
    })
}
`;