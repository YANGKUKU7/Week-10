export async function load() {
    const resonse = await fetch('https://jsonplaceholder.typicode.com/users')
    if(!response.ok) {
        return {success: false}
        const myData = await response.json()
        return { success : true, myData: myData}
    }
}