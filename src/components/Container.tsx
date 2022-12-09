interface Props {
  child: React.ReactNode;
}

export default function Container({ child }: Props) {
  return <div className="mx-auto w-10/12">{child}</div>;
}
