// import { clientSideFunction } from "@/utils/client-utils";
import { serverSideFunction } from "@/utils/server-utils"
export default function ServerComponentPage() {
    console.log("ServerComponentPage Rendered")
    const result = serverSideFunction();
    // const result2=clientSideFunction()

    return <>
        <h1>Server component</h1>
        <p>{result}</p>
        {/* <p>{result2}</p> */}
    </>
}