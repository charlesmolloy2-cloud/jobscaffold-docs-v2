import Section from "@/components/Section";

export default function FlowContractorPage() {
  return (
    <div>
      <div>Contractor Flow Rev01</div>

      <ol className="nested">
        <li>Navigate to www.jobscaffold.com/.</li>

        <li>
          Click "Register as a Contractor" on the homepage to navigate to
          /register/contractor.
        </li>

        <Section label="Fill out the Contractor Registration form">

          <li>First name</li>
          <li>Last name</li>
          <li>Company name</li>
          <li>Email address</li>
          <li>Password</li>
          <li>Confirm password</li>

        </Section>



        <Section label=" Submit the registration form to create the Contractor account and naviagte to the external payment page.">

          <li>
            Fill out the Stripe payment form using the contractor&apos;s
            preferred payment method.

          </li>
          <li>
            Submit Stripe Checkout to complete the payment, activate the
            Contractor subscription, trigger JobScaffold to send an email containing the Contractor account verification link, and navigate the contractor to /verify/contractor.
          </li>
        </Section>

        <Section label="The Contractor verifies their email">

          <li>
            Confirm warning explaining that the contractor must verify
            their email before continuing.
          </li>

          <li>
            The contractor opens their email and clicks the verification link.
          </li>

          <li>
            Confirm the warning is replaced by a "Complete profile" button. (Note. this requires realtime data).
          </li>

          <li>
            Tap "Complete profile" to naviagte to /contractor/profile.
          </li>
        </Section>

        <Section label="Fill out the Contractor Profile Setup form">
          <li>
            Navigate to /contractor/profile-setup.
          </li>

          <li>
            Next.js file:
            app/(dashboard)/contractor/profile-setup/page.tsx.
          </li>

          <Section label="Required to complete initial Profile Setup">
            <li>Phone number</li>
            <li>Business or physical address</li>
            <li>Service area</li>
            <li>Type of work / service type</li>
          </Section>

          <Section label="Optional — can be added now or later in Settings">
            <li>Company logo</li>
            <li>License information</li>
            <li>Insurance information</li>
          </Section>

          <li>
            Allow the contractor to skip the optional business information.
          </li>

          <li>
            Submit the form to save the Contractor Profile and navigate to
            /welcome/contractor.
          </li>
        </Section>

        <Section label="Welcome to JobScaffold">
          <li>
            Navigate to /welcome/contractor.
          </li>

          <li>
            Next.js file:
            app/(dashboard)/welcome/contractor/page.tsx.
          </li>

          <li>
            Display a short explanation of the basic JobScaffold workflow.
          </li>

          <Section label="Basic Contractor workflow">
            <li>Add a job</li>
            <li>Invite the client</li>
            <li>Share updates as the job progresses</li>
          </Section>

          <li>
            Display "Add My First Job" as the primary action.
          </li>

          <li>
            Display "Go to My Jobs" as the secondary action.
          </li>

          <li>
            Click "Add My First Job" to navigate to
            /contractor/projects/new.
          </li>

          <li>
            Click "Go to My Jobs" to navigate to
            /contractor/projects.
          </li>
        </Section>

        <Section label='Click "Add My First Job" or "+ Add New Job" to create a job'>
          <li>
            Navigate to /contractor/projects/new.
          </li>

          <li>
            Next.js file:
            app/(dashboard)/contractor/projects/new/page.tsx.
          </li>

          <Section label="Required to create the job">
            <li>Job name</li>
            <li>Job address</li>

            <Section label="Job type — select one">
              <li>Remodel</li>
              <li>Addition</li>
              <li>New build</li>
              <li>Repair</li>
              <li>Other</li>
            </Section>

            <li>Client name</li>
          </Section>

          <Section label="Optional — can be added now or edited later">
            <li>Estimated start date</li>
            <li>Estimated completion date</li>
            <li>Description</li>
            <li>Client email address</li>
            <li>Client phone number</li>
            <li>Notes</li>
          </Section>

          <li>
            Display the optional fields after the contractor clicks
            "+ Add more details (optional)".
          </li>

          <li>
            Submit the form to create the job.
          </li>

          <li>
            Confirm "Job Created".
          </li>

          <li>
            Click "Open Job" to navigate to
            /contractor/projects/PROJECT_ID.
          </li>

          <li>
            Click "Back to My Jobs" to navigate to
            /contractor/projects.
          </li>
        </Section>

        <Section label="General My Jobs">
          <li>
            Navigate to /contractor/projects.
          </li>

          <li>
            Next.js file:
            app/(dashboard)/contractor/projects/page.tsx.
          </li>

          <li>
            Display all jobs belonging to the signed-in Contractor.
          </li>

          <Section label="Each Job card displays">
            <li>Job name</li>
            <li>Job address</li>
            <li>Client name</li>
            <li>Estimated dates when provided</li>
            <li>Job status</li>
            <li>Open Job</li>
          </Section>

          <li>
            Display "+ Add New Job" above the Job list.
          </li>

          <li>
            The production application supports multiple jobs.
          </li>

          <li>
            Job 1 is used as the fully built example in the Rev01 Figma.
          </li>

          <Section label="General Contractor navigation">
            <li>My Jobs</li>
            <li>Updates</li>
            <li>Photos</li>
            <li>Messages</li>
            <li>Calendar</li>
            <li>Foreman</li>
            <li>Settings</li>
          </Section>

          <li>
            Click "Open Job" to navigate to
            /contractor/projects/PROJECT_ID.
          </li>
        </Section>

        <Section label="Job Details">
          <li>
            Navigate to /contractor/projects/PROJECT_ID.
          </li>

          <li>
            Next.js file:
            app/(dashboard)/contractor/projects/[projectId]/page.tsx.
          </li>

          <li>
            Display "Back to My Jobs" to navigate back to
            /contractor/projects.
          </li>

          <Section label="Job navigation">
            <li>Details</li>
            <li>Updates</li>
            <li>Photos</li>
            <li>Messages</li>
            <li>Documents</li>
          </Section>

          <Section label="Job information">
            <li>Job name</li>
            <li>Job address</li>
            <li>Job type</li>
            <li>Job status</li>
            <li>Estimated start date if provided</li>
            <li>Estimated completion date if provided</li>
            <li>Description if provided</li>
          </Section>

          <Section label="Client information">
            <li>Client name</li>
            <li>Client email if provided</li>
            <li>Client phone number if provided</li>
            <li>Client connection status</li>
          </Section>

          <li>
            Display upcoming activity for the current job.
          </li>

          <li>
            Display "Edit Job".
          </li>
        </Section>

        <Section label='Click "Edit Job" from Job Details'>
          <li>
            Navigate to /contractor/projects/PROJECT_ID/edit.
          </li>

          <li>
            Next.js file:
            app/(dashboard)/contractor/projects/[projectId]/edit/page.tsx.
          </li>

          <Section label="Job information that can be edited">
            <li>Job name</li>
            <li>Job address</li>
            <li>Client information</li>
            <li>Job type</li>
            <li>Job status</li>
            <li>Estimated start date</li>
            <li>Estimated completion date</li>
            <li>Description</li>
            <li>Other previously entered Job information</li>
          </Section>

          <li>
            Submit the form to update the Job.
          </li>

          <li>
            Confirm "Job Updated".
          </li>

          <li>
            Return to /contractor/projects/PROJECT_ID.
          </li>
        </Section>

        <Section label="Invite the Client">
          <li>
            From Job Details, confirm the Client section displays
            "Client not connected yet".
          </li>

          <li>
            Click "Invite Client" to navigate to
            /contractor/projects/PROJECT_ID/invite.
          </li>

          <li>
            Next.js file:
            app/(dashboard)/contractor/projects/[projectId]/invite/page.tsx.
          </li>

          <li>
            Display the private invitation URL for the current Job.
          </li>

          <li>
            Copy the invitation URL.
          </li>

          <li>
            Confirm "Invite Link Copied".
          </li>

          <li>
            Send the invitation URL to the Client through an external service
            such as text message or email.
          </li>

          <li>
            After the Client accepts the invitation, confirm the Client is
            marked "Connected".
          </li>

          <li>
            Confirm the Contractor receives a notification that the Client
            joined the Job.
          </li>

          <li>
            Display "Message Client" after the Client is connected.
          </li>
        </Section>

        <Section label='Job Updates — tap "Updates" inside a Job'>
          <li>
            Navigate to /contractor/projects/PROJECT_ID/updates.
          </li>

          <li>
            Next.js file:
            app/(dashboard)/contractor/projects/[projectId]/updates/page.tsx.
          </li>

          <li>
            View the chronological list of Updates for the current Job.
          </li>

          <Section label='Click "Post Update" to open the composer'>
            <Section label="Required to post the Update">
              <li>Update</li>
            </Section>

            <Section label="Optional Update information">
              <li>Delays or issues</li>
              <li>Next steps</li>
              <li>Photos</li>
              <li>Photo caption for each photo</li>
            </Section>

            <li>
              Submit the composer to publish the Update.
            </li>

            <li>
              Notify the connected Client about the new Update.
            </li>

            <li>
              Confirm "Update Posted".
            </li>

            <li>
              Confirm the new Update appears in the Job Updates list.
            </li>
          </Section>

          <Section label="Open an Update from the list">
            <li>
              Navigate to
              /contractor/projects/PROJECT_ID/updates/UPDATE_ID.
            </li>

            <li>
              Next.js file:
              app/(dashboard)/contractor/projects/[projectId]/updates/[updateId]/page.tsx.
            </li>

            <li>Confirm the Update is displayed.</li>
            <li>Confirm delays or issues are displayed if provided.</li>
            <li>Confirm next steps are displayed if provided.</li>
            <li>Confirm photos are displayed if provided.</li>
            <li>Confirm photo captions are displayed if provided.</li>
            <li>Tap a photo to expand it.</li>
          </Section>
        </Section>

        <Section label='Job Photos — tap "Photos" inside a Job'>
          <li>
            Navigate to /contractor/projects/PROJECT_ID/photos.
          </li>

          <li>
            Next.js file:
            app/(dashboard)/contractor/projects/[projectId]/photos/page.tsx.
          </li>

          <li>
            View photos for the current Job only.
          </li>

          <li>
            Group photos by the Job Update they belong to when applicable.
          </li>

          <li>
            Display photo captions when provided.
          </li>

          <Section label='Click "Add Photos"'>
            <li>Click "Choose Photos".</li>

            <li>
              Select one or more photos and confirm the selected photos appear.
            </li>

            <Section label="Optional when adding Photos">
              <li>Photo caption</li>
            </Section>

            <li>
              Submit to add the selected photos to the current Job.
            </li>

            <li>
              Confirm "Photos Added".
            </li>
          </Section>
        </Section>

        <Section label='Job Messages — tap "Messages" inside a Job'>
          <li>
            Navigate to /contractor/projects/PROJECT_ID/messages.
          </li>

          <li>
            Next.js file:
            app/(dashboard)/contractor/projects/[projectId]/messages/page.tsx.
          </li>

          <li>
            View the conversation between the Contractor and Client for the
            current Job.
          </li>

          <li>
            Display the sender and timestamp for each message.
          </li>

          <li>
            Display read and unread state when appropriate.
          </li>

          <Section label="Send a Message">
            <Section label="Required to send the Message">
              <li>Message</li>
            </Section>

            <li>
              Enter the Message using the inline composer and click "Send".
            </li>

            <li>
              Confirm the sent Message appears in the conversation.
            </li>

            <li>
              Notify the connected Client about the new Message.
            </li>

            <li>
              Confirm "Message Sent".
            </li>
          </Section>

          <Section label="Receive a Message">
            <li>
              After the Client sends a Message, confirm the Message appears in
              the conversation.
            </li>

            <li>
              Confirm the Contractor receives a notification about the new
              Message.
            </li>

            <li>
              Update the read or unread state when appropriate.
            </li>
          </Section>
        </Section>

        <Section label='Job Documents — tap "Documents" inside a Job'>
          <li>
            Navigate to /contractor/projects/PROJECT_ID/documents.
          </li>

          <li>
            Next.js file:
            app/(dashboard)/contractor/projects/[projectId]/documents/page.tsx.
          </li>

          <li>
            View Documents for the current Job only.
          </li>

          <li>
            Confirm each Document identifies whether it is "Shared with Client"
            or "Internal Only".
          </li>

          <Section label='Click "Add Document" to open the composer'>
            <Section label="Required to add the Document">
              <li>Document name</li>
              <li>Document type</li>
              <li>File</li>
            </Section>

            <Section label="Document type options">
              <li>Contract</li>
              <li>Estimate</li>
              <li>Invoice</li>
              <li>Permit</li>
              <li>Other</li>
            </Section>

            <li>
              Click "Choose File" and confirm the selected file appears.
            </li>

            <Section label="Required Document visibility — select one">
              <li>Share with Client</li>
              <li>Internal Only</li>
            </Section>

            <li>
              Submit the composer to add the Document to the current Job.
            </li>

            <li>
              Confirm "Document Added".
            </li>
          </Section>
        </Section>

        <li>
          Tap "Back to My Jobs" to return to /contractor/projects.
        </li>

        <Section label="General Updates">
          <li>
            Tap "Updates" from the General Contractor navigation to navigate to
            /contractor/updates.
          </li>

          <li>
            Next.js file:
            app/(dashboard)/contractor/updates/page.tsx.
          </li>

          <li>
            View Updates across all of the Contractor&apos;s Jobs.
          </li>

          <li>
            Confirm each Update identifies which Job it belongs to.
          </li>

          <li>
            Tap an Update to navigate into the appropriate Job Update.
          </li>
        </Section>

        <Section label="General Photos">
          <li>
            Tap "Photos" from the General Contractor navigation to navigate to
            /contractor/photos.
          </li>

          <li>
            Next.js file:
            app/(dashboard)/contractor/photos/page.tsx.
          </li>

          <li>
            View Photos across all of the Contractor&apos;s Jobs.
          </li>

          <li>
            Confirm each Photo group identifies which Job it belongs to.
          </li>

          <li>
            Tap a Photo group to navigate into the appropriate Job Photos or
            Job Update page.
          </li>
        </Section>

        <Section label="General Messages">
          <li>
            Tap "Messages" from the General Contractor navigation to navigate
            to /contractor/messages.
          </li>

          <li>
            Next.js file:
            app/(dashboard)/contractor/messages/page.tsx.
          </li>

          <li>
            View conversations across all of the Contractor&apos;s Jobs.
          </li>

          <li>
            Confirm each conversation identifies the Job and Client.
          </li>

          <li>
            Tap a conversation to navigate to
            /contractor/projects/PROJECT_ID/messages.
          </li>
        </Section>

        <Section label="General Calendar">
          <li>
            Tap "Calendar" from the General Contractor navigation to navigate
            to /contractor/calendar.
          </li>

          <li>
            Next.js file:
            app/(dashboard)/contractor/calendar/page.tsx.
          </li>

          <li>
            View Calendar events across all of the Contractor&apos;s Jobs.
          </li>

          <li>
            Confirm each Calendar event is associated with a Job.
          </li>

          <Section label='Click "+ Add Event" to open the composer'>
            <Section label="Required to add the Calendar Event">
              <li>Event title</li>
              <li>Job</li>
              <li>Date</li>
            </Section>

            <Section label="Optional Event information">
              <li>Time</li>
            </Section>

            <Section label="Required Event visibility — select one">
              <li>Shared with Client</li>
              <li>Internal Only</li>
            </Section>

            <li>
              Submit the composer to add the Event.
            </li>

            <li>
              Confirm "Event Added".
            </li>

            <li>
              Confirm the Event appears in the General Calendar.
            </li>
          </Section>
        </Section>

        <Section label="General Foreman">
          <li>
            Tap "Foreman" from the General Contractor navigation to navigate to
            /contractor/ai.
          </li>

          <li>
            Next.js file:
            app/(dashboard)/contractor/ai/page.tsx.
          </li>

          <li>
            Display "Foreman" as the visible name of the JobScaffold AI
            assistant.
          </li>

          <li>
            Display "Your JobScaffold AI assistant."
          </li>

          <li>
            Foreman can assist with information across the Contractor&apos;s
            Jobs.
          </li>

          <Section label="Example Foreman questions">
            <li>What jobs have something due this week?</li>
            <li>Summarize Job 1.</li>
            <li>Which clients need a response?</li>
          </Section>

          <li>
            Use the inline form to ask Foreman a question.
          </li>

          <li>
            Confirm the Foreman response appears on the page.
          </li>
        </Section>

        <Section label="General Contractor Settings">
          <li>
            Tap "Settings" from the General Contractor navigation to navigate
            to /contractor/settings.
          </li>

          <li>
            Next.js file:
            app/(dashboard)/contractor/settings/page.tsx.
          </li>

          <Section label="Settings options">
            <li>Profile</li>
            <li>Company</li>
            <li>Notifications</li>
            <li>Security</li>
            <li>Billing</li>
          </Section>

          <Section label="Profile Settings">
            <li>
              Navigate to /contractor/settings/profile.
            </li>

            <li>
              Next.js file:
              app/(dashboard)/contractor/settings/profile/page.tsx.
            </li>

            <li>Update name.</li>
            <li>Update phone number.</li>
            <li>Update business or physical address.</li>
            <li>Update service area.</li>
            <li>Update type of work / service type.</li>

            <li>
              Submit the form and confirm the Profile was updated.
            </li>
          </Section>

          <Section label="Company Settings">
            <li>
              Navigate to /contractor/settings/company.
            </li>

            <li>
              Next.js file:
              app/(dashboard)/contractor/settings/company/page.tsx.
            </li>

            <li>Update company name.</li>
            <li>Update company logo.</li>
            <li>Update license information.</li>
            <li>Update insurance information.</li>

            <li>
              Submit the form and confirm the Company information was updated.
            </li>
          </Section>

          <Section label="Notification Settings">
            <li>
              Navigate to /contractor/settings/notifications.
            </li>

            <li>
              Next.js file:
              app/(dashboard)/contractor/settings/notifications/page.tsx.
            </li>

            <li>
              Update email and Job notification preferences.
            </li>

            <li>
              Submit the form and confirm the preferences were updated.
            </li>
          </Section>

          <Section label="Security Settings">
            <li>
              Navigate to /contractor/settings/security.
            </li>

            <li>
              Next.js file:
              app/(dashboard)/contractor/settings/security/page.tsx.
            </li>

            <li>Change password.</li>

            <li>
              Confirm the Security information was updated.
            </li>
          </Section>

          <Section label="Billing Settings">
            <li>
              Navigate to /contractor/settings/billing.
            </li>

            <li>
              Next.js file:
              app/(dashboard)/contractor/settings/billing/page.tsx.
            </li>

            <li>Review subscription status.</li>
            <li>Manage payment method.</li>
            <li>Update billing information.</li>
            <li>Review billing history.</li>

            <li>
              Continue to the externally hosted Stripe billing portal when
              needed.
            </li>
          </Section>

          <li>
            Click "Log out".
          </li>

          <li>
            Confirm the Logout.
          </li>

          <li>
            Securely end the Contractor session and navigate to /.
          </li>
        </Section>

        <Section label="Returning Contractor">
          <li>
            From the homepage, click "Already have an account? Sign in" to
            navigate to /login/contractor.
          </li>

          <li>
            Next.js file:
            app/(public)/login/contractor/page.tsx.
          </li>

          <Section label="Required to Sign In">
            <li>Email address</li>
            <li>Password</li>
          </Section>

          <li>
            Allow the Contractor to show or hide the password.
          </li>

          <li>
            Submit the Sign In form.
          </li>

          <li>
            Navigate the Contractor to /contractor/projects.
          </li>
        </Section>

        <Section label="Contractor Forgot Password">
          <li>
            From /login/contractor, click "Forgot password?" to navigate to
            /forgot-password.
          </li>

          <li>
            Next.js file:
            app/(public)/forgot-password/page.tsx.
          </li>

          <Section label="Required to request the Password Reset">
            <li>Email address</li>
          </Section>

          <li>
            Submit the Password Reset request.
          </li>

          <li>
            Send the Contractor a Password Reset email.
          </li>

          <li>
            Confirm the Password Reset email was sent.
          </li>

          <li>
            Allow the Contractor to return to /login/contractor.
          </li>
        </Section>
      </ol>
    </div>
  );
}