import PageContainer from "../components/page-container"
import PageHeader from "../components/page-header"
import { Search, UserPlus, Edit } from 'react-feather'
import Widget from '../components/widget'

const Page = () => {
  return (
    <PageContainer
      className="
      grid
      grid-cols-1
      grid-rows-[auto_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)]
      md:grid-cols-2
      md:grid-rows-[auto_300px_1fr]
      justify-items-stretch
      gap-4"
    >
      <PageHeader title="Welcome" className="md:col-span-2">
        <div className="flex gap-6">
          <Search size={20} className='text-indigo-600 dark:text-indigo-400 hover:text-indigo-900 hover:cursor-pointer dark:hover:text-indigo-500' />
          <UserPlus size={20} className='text-indigo-600 dark:text-indigo-400 hover:text-indigo-900 hover:cursor-pointer dark:hover:text-indigo-500' />
          <Edit size={20} className='text-indigo-600 dark:text-indigo-400 hover:text-indigo-900 hover:cursor-pointer dark:hover:text-indigo-500' />
        </div>
      </PageHeader>
      <Widget title="Performance" className='md:col-span-2'>
        <p>Placeholder</p>
      </Widget>
      <Widget title="Analytics" href="/analytics">
        <p>Placeholder</p>
      </Widget>
      <Widget title="Locations" href="/locations">
        <p>Placeholder</p>
      </Widget>
    </PageContainer>
  )
}

export default Page