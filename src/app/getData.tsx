export default async function DataRaw() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const jsonData = await response.json()
  return jsonData
}

 