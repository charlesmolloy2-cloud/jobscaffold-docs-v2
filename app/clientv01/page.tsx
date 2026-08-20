import Section, { BulletGroup } from "@/components/Section";

export default function FlowClientPage() {
  return (
    <div>
      <div>Client Flow</div>

      <ol className="nested">
        <li>
          Receive an invitation from the contractor with an invitation URL
          (/projects/PROJECT_ID/client).
        </li>

        <li>
          Click the invitation link to navigate to
          /projects/PROJECT_ID/client.
        </li>

        <Section label="Fill out the registration form">
          <li>First name</li>
          <li>Last name</li>
          <li>Email address</li>
          <li>Password</li>
          <li>Confirm password</li>
        </Section>

        <li>
          Submit the registration form to create the client account and navigate
          to /projects/PROJECT_ID.
        </li>

        <Section label="Confirm the main navigation">
          <li>Project</li>
          <li>Updates</li>
          <li>Messages</li>
          <li>Calendar</li>
          <li>Settings</li>
        </Section>

        <Section
          label='Tap the "Project" tab to navigate to /projects/PROJECT_ID'
        >
          <BulletGroup label="Review the project overview">
            <li>Contractor name</li>
            <li>Contractor phone</li>
            <li>Contractor email</li>
            <li>Project description</li>
            <li>Estimated start date</li>
            <li>Estimated completion date</li>
            <li>Project status</li>
          </BulletGroup>
        </Section>

        <Section
          label='Tap the "Updates" tab to navigate to /projects/PROJECT_ID/updates'
        >
          <li>View the chronological list of update dates.</li>

          <Section label="Tap an update date in the list to navigate to /projects/PROJECT_ID/updates/UPDATE_ID">
            <BulletGroup>
              <li>View the update</li>
              <li>View delays or issues if provided</li>
              <li>View next steps if provided</li>
              <li>View captioned photos if provided</li>
              <li>Tap a photo to expand it</li>
              <li>
                Tap "Download" to download a zip file of the update&apos;s
                photos
              </li>
            </BulletGroup>
          </Section>
        </Section>

        <Section
          label='Tap the "Messages" tab to navigate to /projects/PROJECT_ID/messages'
        >
          <li>
            View the complete conversation history of timestamped messages with
            read/unread indicators.
          </li>

          <li>
            Use the inline form to send a new message to the contractor.
          </li>

          <li>
            Confirm the new message appears unread in the conversation history
            with its timestamp.
          </li>

          <li>Wait for a reply from the contractor.</li>

          <li>
            Receive a notification when the contractor replies. ***
          </li>

          <li>
            Confirm the contractor&apos;s reply appears read in the conversation
            history with its timestamp. ***
          </li>
        </Section>

        <Section
          label='Tap the "Calendar" tab to navigate to /projects/PROJECT_ID/calendar'
        >
          <BulletGroup>
            <li>View upcoming project milestones</li>
            <li>Review inspection dates</li>
            <li>Review scheduled work days</li>
            <li>Review material delivery dates</li>
            <li>Review client meeting dates</li>
            <li>Receive reminders for important events</li>
          </BulletGroup>
        </Section>

        <Section label='Tap the "Settings" tab to navigate to /settings'>
          <Section label="Open Account Settings">
            <BulletGroup>
              <li>Update account information</li>
              <li>Update notification preferences</li>
              <li>Change password</li>
            </BulletGroup>
          </Section>

          <li>Log out securely.</li>
        </Section>
      </ol>
    </div>
  );
}