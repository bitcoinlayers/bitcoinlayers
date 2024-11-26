import { parseTextWithLinks } from "@/util/parseTextWithLinks";

const RiskContent: React.FC<{ title: string; content: string }> = ({
    title,
    content,
}) => (
    <div className="self-stretch flex-col justify-start items-start flex">
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
