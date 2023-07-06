export type Props = {
    name?: string;
}

export default function Hello(props: Props) {
    return <div>Hello {props.name ?? 'World'}!</div>
}