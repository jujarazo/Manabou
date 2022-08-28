export interface MainCardProps {
  title: string;
  description: string;
  typeDescription: string;
  categoryDescription: string;
}

export const MainCard = (props: MainCardProps) => {
  const { title, description, typeDescription, categoryDescription } = props;

  return (
    <div className="h-64 w-44 rounded-md bg-purple relative group hover:cursor-pointer flex flex-col justify-end">
      <div className="opacity-25 md:opacity-0 bg-black md:group-hover:opacity-25 h-full rounded-r-md flex flex-col justify-end absolute top-0 left-0 w-full"></div>
      <div className="p-4 md:opacity-0 group-hover:opacity-100">
        <p className="text-xl font-semibold">{title}</p>
        <p className="text-base truncate">{description}</p>
        <div className="flex items-center space-x-2 mt-2">
          <span className="text-salmon lowercase text-xs px-2 border-2 border-salmon rounded-xl">
            {typeDescription}
          </span>
          <span className="text-green lowercase text-xs px-2 border-2 border-green rounded-xl">
            {categoryDescription}
          </span>
        </div>
      </div>
    </div>
  );
};
