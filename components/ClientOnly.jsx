import React from "react";
import Loader from "./Loader.jsx";

export default function ClientOnly({ children, ...delegated }) {
    const [hasMounted, setHasMounted] = React.useState(false);
    React.useEffect(() => {
        setHasMounted(true);
    }, []);
    if (!hasMounted) {
        return <Loader />;
    }
    return (
        <div {...delegated}>
            {children}
        </div>
    );
}