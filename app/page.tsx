import Widget from "../components/widget"

export default function Page() {
  return (
    <div
      className="
      grid
      grid-cols-2
      grid-rows-[auto_minmax(min-content,max-content)_minmax(min-content,1fr)]
      gap-6
      p-6"
    >
      <div className="col-span-2">
        <h1 className="text-xl">Welcome Placeholder</h1>
      </div>
      <Widget title="Performance" className='col-span-2 h-[300px]'>
        <p>Placeholder</p>
      </Widget>

      <Widget title="Orders">
        <p>Placeholder</p>
      </Widget>

      <Widget title="Buyers">
        <p>Placeholder</p>
      </Widget>
    </div>
  )
}