import Section, { BulletGroup } from "@/components/Section";

export default function FlowContractorPage() {
  return (
    <div>
      <div>Contractor Flow</div>

      <ol className="nested">
        <li>Navigate to /.</li>

        <li>
          Click "Register as a Contractor" on the homepage to navigate to
          /register/contractor.
        </li>

        <Section label="Fill out the registration form">
          <li>First name</li>
          <li>Last name</li>
          <li>Company name</li>
          <li>Email</li>
          <li>Password</li>
          <li>Confirm password</li>
        </Section>

        <li>
          Submit the registration form to create the contractor account, log in,
          and navigate to the externally hosted Stripe subscription page.
        </li>

        <li>
          Fill out the Stripe payment form with the contractor&apos;s preferred
          payment method.
        </li>

        <li>
          Submit the Stripe form to complete the payment, trigger the platform
          to send the contractor an email with a verification link, and navigate
          to /welcome/contractor to see the "Please verify your email" warning.
        </li>

        <Section label="The contractor verifies their email">
          <li>
            The contractor opens their email and clicks the verification link.
          </li>

          <li>
            The contractor is navigated to /settings/profile.
          </li>
        </Section>

        <Section label="Fill out the profile form">
          <Section label="Required">
            <BulletGroup>
              <li>Phone number</li>
              <li>Physical address</li>
              <li>Service area (service type)</li>
            </BulletGroup>
          </Section>

          <Section label="Optional">
            <BulletGroup>
              <li>Logo</li>
              <li>License</li>
              <li>Insurance</li>
            </BulletGroup>
          </Section>
        </Section>

        <li>
          Submit the form to update the contractor profile and navigate to
          /projects.
        </li>

        <Section label="Confirm the nav bar is complete.">
          <li>Projects</li>
          <li>Updates</li>
          <li>Messages</li>
          <li>Calendar</li>
          <li>AI</li>
          <li>Settings</li>
          <li>Logout</li>
        </Section>

        <Section label='Tap the "Projects" tab to navigate to /projects'>
          <Section label='Tap "Create New Project" to open the composer'>
            <BulletGroup label="Required">
              <li>Name</li>
              <li>Address</li>
              <li>
                Type
                <ul className="bullet-list">
                  <li>Remodel</li>
                  <li>Addition</li>
                  <li>New build</li>
                  <li>Repair</li>
                  <li>Other</li>
                </ul>
              </li>
              <li>Client name</li>
            </BulletGroup>

            <BulletGroup label="Optional">
              <li>Estimated start date</li>
              <li>Estimated completion date</li>
              <li>Description</li>
              <li>Client email</li>
              <li>Client phone number</li>
              <li>Notes</li>
            </BulletGroup>
          </Section>

          <li>Submit the composer to create the project.</li>

          <li>
            Confirm the project&apos;s name appears in the list below the
            button.
          </li>

          <li>
            Tap the project&apos;s name to navigate to the project overview page at /projects/PROJECT_ID and confirm all the details entered in the composer and an /invites/INVITE_ID URL is displayed .
          </li>

          <li>Click the "Copy URL"  button copy the invite URL.</li>

          <li>
            Send the invite URL to the client through an external service.
          </li>

          <li>
            After the client accepts, confirm the client is marked as connected
            and the contractor received an email. ***
          </li>
        </Section>

        <Section label='Tap the "Updates" tab to navigate to /updates'>
          <Section label='Click "Create Update" to open the composer'>
            <BulletGroup label="Required">
              <li>Project</li>
              <li>Update</li>
            </BulletGroup>

            <BulletGroup label="Optional">
              <li>Delays or issues</li>
              <li>Next steps</li>
              <li>Photos, each with an optional caption</li>
            </BulletGroup>
          </Section>

          <li>
            Submit the composer to send an email to the client about the new
            update.
          </li>

          <li>
            Confirm the project&apos;s name and the update&apos;s date appear in
            the list.
          </li>
          <Section label='Tap the project filter button to open the project filter dialog'>
            <li>
              Tap on a projects name in the dialog to close the dialog.
            </li>
            <li>
              Confirm the update list only shows updates from that project and that a badge showing the project name appears above the list.
            </li>
            <li>
              Tap on the badge to remove it and confirm the list shows all updates regardless of projects.
            </li>
          </Section>
          <Section label="Tap the new update date in the list to navigate to /updates/UPDATE_ID">
            <li>Confirm the infromation entered into the composer is provided the update is displayed</li>
            <li>Tap a photo to expand it</li>
            <li>
              Tap "Download" to download a zip file of the update&apos;s
              photos
            </li>
          </Section>
        </Section>

        <Section label='Tap the "Messages" tab to navigate to /messages'>
          <li>
            Confirm each project has a tab in the conversation list.
          </li>

          <Section label=' Tap the project conversation to navigate to /messages/PROJECT_ID and confirm the conversation history is empty.'>
            <li>
              Use the inline form to send a new message and send an email to the
              client about the new message.
            </li>

            <li>
              Confirm the new message appears unread in the conversation history
              with its timestamp.
            </li>

            <li>
              After the client sends a message, confirm the new message appears
              read in the conversation history with its timestamp and the
              contractor received an email about the new message. ***
            </li>
          </Section>
        </Section>

        {/* 
        <li>Add project milestones.</li>
        <li>Add scheduled work days.</li> OK
        <li>Add inspections.</li> OK
        <li>Add material deliveries.</li> OK
        <li>Add client meetings.</li> OK
        <li>Edit calendar events.</li>
        <li>Delete calendar events.</li>
        <li>Display upcoming milestones on the Project Overview page.</li>
        */}

        <Section label='Tap the "Calendar" tab to navigate to /calendar and confirm the calendar is empty'>
          <Section label='Click "Create Event" to open the composer'>
            <BulletGroup label="Required">
              <li>Project</li>
              <li>Type</li>
              <li>Date</li>
            </BulletGroup>

            <BulletGroup label="Optional">
              <li>Time</li>
              <li>Description</li>
            </BulletGroup>
          </Section>

          <li>
            Submit the composer to send an email to the client about the new
            event.
          </li>

          <li>
            Confirm the event appears in the calendar with the project&apos;s
            name.
          </li>

          <Section label='Tap the project filter button to open the project filter dialog'>
            <li>
              Tap on a projects name in the dialog to close the dialog.
            </li>
            <li>
              Confirm the event list only shows events from that project and that a badge showing the project name appears above the list.
            </li>
            <li>
              Tap on the badge to remove it and confirm the list shows all events regardless of project.
            </li>
          </Section>


          <BulletGroup label="Tap a calendar event to edit it in the composer and confirm the event details are pre filled.">

            <li>Project</li>
            <li>Type</li>
            <li>Date</li>
            <li>Time</li>
            <li>Description</li>

          </BulletGroup>

          <li>
            Submit the composer and confirm the updated details appear in the
            calendar.
          </li>
        </Section>


        <Section label='Tap the "AI" tab to navigate to /ai'>
          <li>
            Comfirm the general tab appears at the top of the conversation list.
          </li>
          <li>
            Confirm each project has its own tab in the conversation list.
          </li>

          <Section label=' Tap a project conversation to navigate to /ai/PROJECT_ID and confirm the conversation history is empty.'>
            <li>
              Use the inline form to send a new message to the
              AI.
            </li>

            <li>
              Confirm the new message appears in the conversation history
              with its timestamp.
            </li>

            <li>
              Confirm the AI's reply is specifically relavant that project and appears in the conversation history with its timestamp.*****
            </li>
          </Section>

          <Section label=' Tap the general conversation to navigate to /ai/general and confirm the conversation history is empty.'>
            <li>
              Use the inline form to send a new message to the
              AI.
            </li>

            <li>
              Confirm the new message appears in the conversation history
              with its timestamp.
            </li>

            <li>
              Confirm the AI's reply is specifically relavant to all projects and appears in the conversation history with its timestamp.*****
            </li>
          </Section>

        </Section>


        <Section label='Tap the "Settings" tab to navigate to /settings'>
          <li>Update contractor profile</li>
          <li>Update company information</li>
          <Section label='Click the "Change password button" to open the dialog'>
            <li>
              Enter the old password in the "Current password" field.
            </li>

            <li>
              Enter the new password in the "New password" field.
            </li>

            <li>
              Enter the new password in the "Confirm password" field.
            </li>
<li> 
  Tap "Change password" to submit the form close the diaglog and update the password. 
</li>
          </Section>


          <li>Tap on the manage stripe button to open the external stripe profile.</li>

        </Section>
        <li> 
          Tap "Logout" in the navbar to close the session.
        </li>
      </ol>
    </div>
  );
}