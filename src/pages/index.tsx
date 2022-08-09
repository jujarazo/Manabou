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
      <main className="container mx-auto flex flex-col items-center h-screen p-4">
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
      </main>
    </>
  );
};

const TechnologyCard = ({
  name,
  description,
  documentation,
}: TechnologyCardProps) => {
  return (
    <section className="flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105">
      <h2 className="text-lg text-gray-700">{name}</h2>
      <p className="text-sm text-gray-600">{description}</p>
      <a
        className="mt-3 text-sm underline text-green decoration-dotted underline-offset-2"
        href={documentation}
        target="_blank"
        rel="noreferrer"
      >
        Documentation
      </a>
    </section>
  );
};

export default Home;
