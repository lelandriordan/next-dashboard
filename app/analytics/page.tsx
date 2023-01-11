import Widget from "../../components/widget";

export default function Page() {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      <Widget title="Performance" className='col-span-2'>
        <p>Placeholder</p>
      </Widget>
      <Widget title="Orders">
        <p>Placeholder</p>
      </Widget>
      <Widget title="Buyers">
        <p>Placeholder</p>
      </Widget>
      <Widget title="Performance">
        <p>Placeholder</p>
      </Widget>
    </div>
  );
}