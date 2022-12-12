import { NextPage } from 'next';
import Button from '@/components/Button';

const Page: NextPage = () => {
  return (
    <div>
      <h1 className='text-2xl'>Tailwind CSS Test</h1>
      <Button>Hello</Button>
    </div>
  );
};

export default Page;
