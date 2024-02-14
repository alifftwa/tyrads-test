import React from "react";
import {
  Typography,
  Alert,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import AlertCard from "@/widgets/cards/alert-card";
import AlertWithIconCard from "@/widgets/cards/alert-card";

export function Notifications() {
  const [showAlerts, setShowAlerts] = React.useState({
    blue: true,
    green: true,
    orange: true,
    red: true,
  });
  const [showAlertsWithIcon, setShowAlertsWithIcon] = React.useState({
    blue: true,
    green: true,
    orange: true,
    red: true,
  });
  const alerts = ["gray", "green", "orange", "red"];

  return (
    <div className="mx-auto my-20 flex max-w-screen-lg flex-col gap-8">
      {/* Alert Card */}
      <AlertCard title="Alert"/>

      {/* Alert with Icon Card */}
      <AlertCard title="Alert with Icon"/>
    </div>
  );
}

export default Notifications;
