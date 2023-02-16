import { Items } from "../types/itemsTypes";

interface Location {
    latitude: number
    longitude: number
}

export function calculateDistance(from: Location, to: Items,) {
    const R = 6371; // Earth's radius in kilometers
    const lat1 = from.latitude;
    const lon1 = from.longitude;
    const lat2 = to.address.latitude;
    const lon2 = to.address.longitude;
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRadians(lat1)) *
        Math.cos(toRadians(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;
    return d;
}

function toRadians(degrees: number) {
    return (degrees * Math.PI) / 180;
}