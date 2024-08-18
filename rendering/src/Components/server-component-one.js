import fs from 'fs'
import { ServerComponentTwo } from './server-component-two'

export const ServerComponentOne = () => {
    fs.readFileSync('rendering\src\Components\server-component-one.js', 'utf-8')
    return <>
        <div>Server Component One</div>
        <ServerComponentTwo />
    </>
}