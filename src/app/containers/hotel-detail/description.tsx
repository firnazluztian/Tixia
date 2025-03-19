interface DescriptionProps {
  data: string;
}

export const Description = ({ data }: DescriptionProps) => {
  return <div id="description">{data}</div>;
};