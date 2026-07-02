// Import the dataset
import notifications from "../data/notifications";
// Import the other component
import NotficationCard from "./NotificationCard";

export default function NotificationList() {
    return (
        <div>
            {
                notifications.map((notification, index) => (
                    <NotficationCard
                        key={index}
                        message={notification}
                    />
                )
            )}
        </div>
    );
}
