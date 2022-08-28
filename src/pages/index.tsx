import type { NextPage } from 'next';
import { requireAuth } from '../commons/requireAuth';
import { MainCard } from '../components/cards/MainCard';
import { trpc } from '../utils/trpc';

type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

export const getServerSideProps = requireAuth(async (ctx) => {
  return { props: {} };
});

const dummyCards = [
  {
    id: 1,
    title: 'Overlord',
    description: 'Placeholder description',
    type: {
      id: 1,
      description: 'Light Novel',
    },
    category: {
      id: 1,
      description: 'Seinen',
    },
  },
];
const Home: NextPage = () => {
  // const hello = trpc.useQuery(['example.hello', { text: 'from tRPC' }]);

  return (
    <>
      <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold">
        Sections
      </h1>
      <div className="flex items-center">
        {dummyCards.map((card) => (
          <MainCard
            key={card.title}
            title={card.title}
            description={card.description}
            categoryDescription={card.category.description}
            typeDescription={card.type.description}
          />
        ))}
      </div>
      <div className="pt-6 text-2xl text-blue-500 flex justify-center items-center w-full">
        {/* {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>} */}
      </div>
    </>
  );
};
export default Home;
