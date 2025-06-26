export const measurePerformance = () => {
    if (typeof window !== 'undefined') {
        window.addEventListener('load', () => {
            const navigation = performance.getEntriesByType('navigation')[0];
            console.log(`Page Load Time: ${navigation.loadEventEnd}ms`);
        });
    }
};

export const monitorMobilePerformance = () => {
    if ('performance' in window) {
        const observer = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry) => {
                if (entry.entryType === 'largest-contentful-paint') {
                    console.log(`LCP: ${entry.startTime}`);
                }
            });
        });

        observer.observe({ entryTypes: ['largest-contentful-paint'] });
    }
};