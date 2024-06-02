import React, { ComponentType } from "react";

const withSharedStyles = <P extends object>(
    Component: ComponentType<P>,
): React.FC<P> => {
    const WithSharedStyles: React.FC<P> = (props) => {
        return (
            <div className="max-w-6xl mx-auto rounged-lg">
                <Component {...(props as P)} />
            </div>
        );
    };

    return WithSharedStyles;
};

export default withSharedStyles;
