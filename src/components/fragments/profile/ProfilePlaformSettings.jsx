import {
    Typography,
    Button,
  } from "@material-tailwind/react";

  import { MessageCard } from "@/components/cards";
  import { conversationsData } from "@/data";


const ProfilePlaformSettings = () => {
  return (
    <div>
       <div>
            <Typography variant="h6" color="blue-gray" className="mb-3">
                Platform Settings
              </Typography>
              <ul className="flex flex-col gap-6">
                {conversationsData.map((props) => (
                  <MessageCard
                    key={props.name}
                    {...props}
                    action={
                      <Button variant="text" size="sm">
                        reply
                      </Button>
                    }
                  />
                ))}
              </ul>
            </div>
    </div>
  )
}

export default ProfilePlaformSettings;