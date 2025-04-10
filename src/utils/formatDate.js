export function formatDate(dateString, locale = "en-GB", options = {
    year: "numeric",
    month: "long",
    day: "numeric"
}) {
    if (!dateString) return "";

    try {
        return new Date(dateString).toLocaleDateString(locale, options);
    } catch (error) {
        console.error("Invalid date:", dateString);
        return dateString;
    }
}