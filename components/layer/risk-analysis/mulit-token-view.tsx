import { parseTextWithLinks } from "@/util/parseTextWithLinks";

const RiskContent: React.FC<{ title: string; content: string }> = ({
    title,
    content,
}) => (
    <div className="self-stretch flex-col justify-start items-start flex">
        {/* 
        TODO: 
        1. pull list of wrapped BTC options
        2. pull reviews for each wrapped BTC option
        3. add radio buttons to select an option from step 1
        4. render info from step 2 for the selected option 
         */}
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
