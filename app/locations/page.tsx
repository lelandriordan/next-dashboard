import PageContainer from '../../components/page-container'
import Widget from '../../components/widget'
import PageHeader from '../../components/page-header'
import { Search, UserPlus, Edit } from 'react-feather'

const Page = () => {
  return (
    <PageContainer
      className="
      grid
      grid-cols-[300px_1fr]
      grid-rows-[minmax(min-content,max-content)_1fr]
      gap-4"
    >
      <PageHeader title="Locations" className="col-span-2">
        <div className="flex gap-6">
          <Search size={20} className='text-indigo-600 dark:text-indigo-400 hover:text-indigo-900 hover:cursor-pointer dark:hover:text-indigo-500' />
          <UserPlus size={20} className='text-indigo-600 dark:text-indigo-400 hover:text-indigo-900 hover:cursor-pointer dark:hover:text-indigo-500' />
          <Edit size={20} className='text-indigo-600 dark:text-indigo-400 hover:text-indigo-900 hover:cursor-pointer dark:hover:text-indigo-500' />
        </div>
      </PageHeader>
      <Widget title="List" className='col-span-1'>
        <p>Placeholder</p>
      </Widget>
      <Widget title="Map" className='col-span-1'>
        <p>Placeholder</p>
      </Widget>
    </PageContainer>
  );
}

export default Page