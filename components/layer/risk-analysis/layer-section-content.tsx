import { parseTextWithLinks } from "@/util/parseTextWithLinks";
import { SectionAlert } from "@/content/props";
import SectionAlertComponent from "@/components/section-alert";

const RiskContent: React.FC<{
    name?: string;
    title: string;
    content: string;
    alert?: SectionAlert;
}> = ({ name, title, content, alert }) => (
    <div className="self-stretch flex-col justify-start items-start flex">
        {name && (
            <div className="body_risksection !text-foreground">{name}</div>
        )}
        <div className="self-stretch justify-between items-end inline-flex">
            <div className="grow shrink basis-0 body_subsection !text-muted-foreground">
                {title}
            </div>
        </div>
        <div className="body_paragraph !text-foreground self-stretch mt-3">
            {parseTextWithLinks(content)}
        </div>
        {alert && (
            <div className="mt-4">
                <SectionAlertComponent alert={alert} />
            </div>
        )}
    </div>
);

export default RiskContent;
