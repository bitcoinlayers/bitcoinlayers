import { parseTextWithLinks } from "@/util/parseTextWithLinks";

const RiskContent: React.FC<{
    name?: string;
    title: string;
    content: string;
}> = ({ name, title, content }) => (
    <div className="self-stretch flex-col justify-start items-start flex">
        {name && <div className="body_risksection">{name}</div>}
        <div className="self-stretch justify-between items-end inline-flex">
            <div className="grow shrink basis-0 body_subsection !text-muted-foreground">
                {title}
            </div>
        </div>
        <div className="body_paragraph !text-foreground self-stretch mt-3">
            {parseTextWithLinks(content)}
        </div>
    </div>
);

export default RiskContent;
