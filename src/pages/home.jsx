import Card from "../components/Card";
import Button from "../components/Button";

export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>
      <Card title="Reusable Components">
        <p>These buttons demonstrate reusability with Tailwind styling:</p>
        <div className="flex gap-3 mt-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
        </div>
      </Card>
    </div>
  );
}
