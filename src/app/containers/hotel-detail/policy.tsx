interface PolicyProps {
  data: string;
}

export const Policy = ({ data }: PolicyProps) => {
  return (
    <div id="policy">
      <p className="text-lg font-bold mb-2">kebijakan hotel</p>
      <div>{data}</div>
    </div>
  )
};
