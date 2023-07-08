export type Props = {
  name?: string;
};

export default function Hello(props: Props) {
  return (
    <div className="text-red-900">Hello&nbsp;{props.name ?? 'World'}!</div>
  );
}
