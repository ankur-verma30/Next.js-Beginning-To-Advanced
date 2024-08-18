import fs from 'fs';
export const ServerComponentTwo = () => {
    fs.readFileSync('rendering\src\Components\server-component-two.js', 'utf-8')
    return <div>Server Component Two</div>
}