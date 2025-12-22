export default function MealsDeatilsPage({ params }) {
  return (
    <>
      <h1>Meals details</h1>
      <p>{params.slug}</p>
    </>
  );
}
