const getData = async () => {
  const response = await fetch(
    "https://api.mercadolibre.com/sites/MLA/search?q=:query&limit=4"
  );
  if (!response.ok) {
    throw new Error("failed to fetch API data");
  }
  console.log(response);

  return response.json();
};
export default async function Home() {
  const apiData = await getData();
  return (
    <main>
      <div>{JSON.stringify(apiData)}</div>
    </main>
  );
}
