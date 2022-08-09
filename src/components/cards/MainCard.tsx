export interface MainCardProps {
  title: string;
  description: string;
  typeDescription: string;
  categoryDescription: string;
}

export const MainCard = (props: MainCardProps) => {
  return (
    <div className="h-64 w-44 rounded-md bg-salmon relative group hover:cursor-pointer">
      <div className="opacity-0 bg-black group-hover:opacity-25 h-full rounded-r-md"></div>
    </div>
  );
};
