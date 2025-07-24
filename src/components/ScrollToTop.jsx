import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Scroll to top of window on route change
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}
