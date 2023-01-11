import Widget from "../../components/widget";

export default function Page() {
  return (
    <div className="grid grid-cols-1 grid-rows-1 gap-4 p-4">
      <Widget title="Settings" className='col-span-2'>
        <p>Test</p>
      </Widget>
    </div>
  );
}