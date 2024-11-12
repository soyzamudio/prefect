interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return <h1 className="font-bold text-xl">{title}</h1>;
}
