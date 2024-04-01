interface Props {
	title: string;
}

function PageCover({ title }: Props) {
	return <div className="py-28 flex items-center px-5 text-sky-700 font-bold text-2xl bg-slate-200 uppercase">{title}</div>;
}

export default PageCover;
