export const measurePerformance = () => {
    if (typeof window !== 'undefined') {
        window.addEventListener('load', () => {
            const navigation = performance.getEntriesByType('navigation')[0];
            console.log(`Page Load Time: ${navigation.loadEventEnd}ms`);
        });
    }
};