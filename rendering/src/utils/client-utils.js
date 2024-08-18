import "client-only"
export const clientSideFunction = () => {
    console.log(`use window object 
        use localstoage
        use cookies
        use browser storage
        use environment variables`);
    return "Client Result";
}