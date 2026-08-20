import Section from "@/components/Section";

export default function FlowClientPage() {
  return (
    <div>
      <div>Client Flow Rev01</div>

      <ol className="nested">
        <Section label="Client Invitation">
          <li>
            Receive a private JobScaffold invitation link from the Contractor
            for a specific Job.
          </li>

          <li>
            Click the invitation link to navigate to
            /projects/PROJECT_ID/client.
          </li>

          <li>
            Next.js file:
            app/(public)/projects/[projectId]/client/page.tsx.
          </li>

          <li>
            Display the Job and Contractor information associated with the
            invitation.
          </li>

          <li>
            Explain that joining the Job allows the Client to view information
            shared by the Contractor.
          </li>

          <Section label="The Client will have access to">
            <li>Overview</li>
            <li>Updates</li>
            <li>Photos</li>
            <li>Messages</li>
            <li>Shared Calendar events</li>
            <li>Shared Documents</li>
          </Section>

          <li>
            Display "Join Job" as the primary action.
          </li>

          <li>
            Display "Already have an account? Sign in" below the primary
            action.
          </li>

          <li>
            Click "Join Job" to navigate to
            /projects/PROJECT_ID/client/register.
          </li>

          <li>
            Existing Clients can click "Sign in" to navigate to
            /projects/PROJECT_ID/client/sign-in.
          </li>
        </Section>

        <Section label="Client Registration">
          <li>
            Navigate to /projects/PROJECT_ID/client/register.
          </li>

          <li>
            Next.js file:
            app/(public)/projects/[projectId]/client/register/page.tsx.
          </li>

          <Section label="Required to create the Client account">
            <li>First name</li>
            <li>Last name</li>
            <li>Email address</li>
            <li>Password</li>
            <li>Confirm password</li>
          </Section>

          <li>
            Allow the Client to show or hide the password fields.
          </li>

          <li>
            Display "Already have an account? Sign in" for an existing Client.
          </li>

          <li>
            Submit the registration form to create the Client account and
            connect the Client to the invited PROJECT_ID.
          </li>

          <li>
            Navigate the Client to /projects/PROJECT_ID.
          </li>
        </Section>

        <Section label="Existing Client Sign In">
          <li>
            Navigate to /projects/PROJECT_ID/client/sign-in.
          </li>

          <li>
            Next.js file:
            app/(public)/projects/[projectId]/client/sign-in/page.tsx.
          </li>

          <Section label="Required to Sign In">
            <li>Email address</li>
            <li>Password</li>
          </Section>

          <li>
            Allow the Client to show or hide the password.
          </li>

          <li>
            Click "Sign In & Join Job".
          </li>

          <li>
            Authenticate the existing Client account and connect the Client to
            the invited PROJECT_ID if they are not already connected.
          </li>

          <li>
            Navigate the Client to /projects/PROJECT_ID.
          </li>
        </Section>

        <Section label="Client Forgot Password">
          <li>
            From the Client Sign In page, click "Forgot password?" to navigate
            to /forgot-password.
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
            Send the Client a Password Reset email.
          </li>

          <li>
            Confirm the Password Reset email was sent.
          </li>

          <li>
            Allow the Client to return to the Client Sign In page.
          </li>
        </Section>

        <Section label="Job Overview">
          <li>
            Navigate to /projects/PROJECT_ID.
          </li>

          <li>
            Next.js file:
            app/(dashboard)/projects/[projectId]/page.tsx.
          </li>

          <li>
            Display the Overview for the Job the Client joined.
          </li>

          <Section label="Contractor information">
            <li>Contractor name</li>
            <li>Company name</li>
            <li>Contractor phone number</li>
            <li>Contractor email address</li>
          </Section>

          <Section label="Job information">
            <li>Job name</li>
            <li>Job address</li>
            <li>Job description if provided</li>
            <li>Estimated start date if provided</li>
            <li>Estimated completion date if provided</li>
            <li>Job status</li>
          </Section>

          <li>
            Display upcoming Job activity that has been shared with the Client.
          </li>

          <li>
            Display recent Job Updates when available.
          </li>

          <Section label="Client Job navigation">
            <li>Overview</li>
            <li>Updates</li>
            <li>Photos</li>
            <li>Messages</li>
            <li>Calendar</li>
            <li>Documents</li>
          </Section>

          <li>
            Keep Account separate from the Job navigation.
          </li>

          <li>
            Display "Account" separately in the Client experience.
          </li>
        </Section>

        <Section label='Job Updates — tap "Updates"'>
          <li>
            Navigate to /projects/PROJECT_ID/updates.
          </li>

          <li>
            Next.js file:
            app/(dashboard)/projects/[projectId]/updates/page.tsx.
          </li>

          <li>
            View the chronological list of Updates published by the Contractor
            for the current Job.
          </li>

          <li>
            Confirm each Update displays its date or timestamp.
          </li>

          <Section label="Open a Job Update">
            <li>
              Tap an Update to navigate to
              /projects/PROJECT_ID/updates/UPDATE_ID.
            </li>

            <li>
              Next.js file:
              app/(dashboard)/projects/[projectId]/updates/[updateId]/page.tsx.
            </li>

            <li>Review the Update.</li>
            <li>Review delays or issues if provided.</li>
            <li>Review next steps if provided.</li>
            <li>Review attached Photos if provided.</li>
            <li>Review Photo captions if provided.</li>

            <li>
              Tap an individual Photo to expand it.
            </li>

            <li>
              Click "Download Photos" when downloadable Update Photos are
              available.
            </li>

            <li>
              Confirm the Photo download has started.
            </li>
          </Section>
        </Section>

        <Section label='Job Photos — tap "Photos"'>
          <li>
            Navigate to /projects/PROJECT_ID/photos.
          </li>

          <li>
            Next.js file:
            app/(dashboard)/projects/[projectId]/photos/page.tsx.
          </li>

          <li>
            View Photos shared for the current Job.
          </li>

          <li>
            Display Photos chronologically.
          </li>

          <li>
            Group Photos by the Job Update they belong to when applicable.
          </li>

          <li>
            Display the associated Update date or timestamp for each Photo
            group.
          </li>

          <li>
            Display Photo captions when provided.
          </li>

          <li>
            Tap an individual Photo to expand it.
          </li>

          <li>
            Tap an Update date or Photo group to navigate to the associated
            /projects/PROJECT_ID/updates/UPDATE_ID when appropriate.
          </li>

          <li>
            Click "Download All Photos" when downloadable Photos are available.
          </li>

          <li>
            Confirm the Photo download has started.
          </li>
        </Section>

        <Section label='Job Messages — tap "Messages"'>
          <li>
            Navigate to /projects/PROJECT_ID/messages.
          </li>

          <li>
            Next.js file:
            app/(dashboard)/projects/[projectId]/messages/page.tsx.
          </li>

          <li>
            View the conversation between the Client and Contractor for the
            current Job.
          </li>

          <li>
            Display the sender and timestamp for each Message.
          </li>

          <li>
            Display read and unread state when appropriate.
          </li>

          <Section label="Send a Message to the Contractor">
            <Section label="Required to send the Message">
              <li>Message</li>
            </Section>

            <li>
              Enter the Message using the inline composer.
            </li>

            <li>
              Click "Send".
            </li>

            <li>
              Confirm the Client&apos;s Message appears in the conversation.
            </li>

            <li>
              Notify the Contractor about the new Message.
            </li>

            <li>
              Confirm "Message Sent".
            </li>
          </Section>

          <Section label="Receive a Message from the Contractor">
            <li>
              Notify the Client when the Contractor sends a new Message.
            </li>

            <li>
              Confirm the Contractor&apos;s Message appears in the
              conversation.
            </li>

            <li>
              Display the incoming Message as unread until viewed when
              appropriate.
            </li>

            <li>
              Update the Message to read after the Client views it.
            </li>
          </Section>
        </Section>

        <Section label='Job Calendar — tap "Calendar"'>
          <li>
            Navigate to /projects/PROJECT_ID/calendar.
          </li>

          <li>
            Next.js file:
            app/(dashboard)/projects/[projectId]/calendar/page.tsx.
          </li>

          <li>
            View Calendar events for the current Job that the Contractor marked
            "Shared with Client".
          </li>

          <li>
            Confirm Calendar events marked "Internal Only" by the Contractor are
            not visible to the Client.
          </li>

          <li>
            Use the same Calendar events created by the Contractor rather than
            creating a separate Client Calendar dataset.
          </li>

          <Section label="Shared Calendar Event information">
            <li>Event title</li>
            <li>Date</li>
            <li>Time if provided</li>
          </Section>

          <li>
            Receive applicable notifications for shared Calendar events when
            Client notifications are enabled.
          </li>
        </Section>

        <Section label='Job Documents — tap "Documents"'>
          <li>
            Navigate to /projects/PROJECT_ID/documents.
          </li>

          <li>
            Next.js file:
            app/(dashboard)/projects/[projectId]/documents/page.tsx.
          </li>

          <li>
            View Documents for the current Job that the Contractor marked
            "Share with Client".
          </li>

          <li>
            Confirm Documents marked "Internal Only" by the Contractor are not
            visible to the Client.
          </li>

          <Section label="Shared Document information">
            <li>Document name</li>
            <li>Document type</li>
          </Section>

          <Section label="Examples of Documents the Contractor may share">
            <li>Contract</li>
            <li>Estimate</li>
            <li>Invoice</li>
            <li>Permit</li>
            <li>Other shared Documents</li>
          </Section>

          <li>
            Click "Download" on a shared Document.
          </li>

          <li>
            Confirm the Document download has started.
          </li>
        </Section>

        <Section label="Client Notifications">
          <li>
            Notify the Client when the Contractor publishes a new Job Update.
          </li>

          <li>
            Notify the Client when new Job Photos are shared when applicable.
          </li>

          <li>
            Notify the Client when the Contractor sends a new Message.
          </li>

          <li>
            Notify the Client when a new Document is shared.
          </li>

          <li>
            Notify the Client about applicable shared Calendar activity when
            notifications are enabled.
          </li>

          <li>
            Do not notify the Client about Contractor information marked
            "Internal Only".
          </li>
        </Section>

        <Section label="Client Account">
          <li>
            Tap "Account" to navigate to /client/account.
          </li>

          <li>
            Next.js file:
            app/(dashboard)/client/account/page.tsx.
          </li>

          <Section label="Client Account information that can be updated">
            <li>First name</li>
            <li>Last name</li>
            <li>Email address when supported</li>
            <li>Phone number when provided</li>
          </Section>

          <li>
            Update the Client Account information and submit the form.
          </li>

          <li>
            Confirm the Client Account information was updated.
          </li>

          <Section label="Notification Settings">
            <li>
              Review and update Client notification preferences.
            </li>

            <li>
              Save the notification preferences.
            </li>

            <li>
              Confirm the preferences were updated.
            </li>
          </Section>

          <Section label="Security">
            <li>
              Change the Client account password.
            </li>

            <li>
              Confirm the password was updated.
            </li>
          </Section>

          <li>
            Allow the Client to return to the Job Overview.
          </li>
        </Section>

        <Section label="Client Logout">
          <li>
            Click "Log out" from Client Account.
          </li>

          <li>
            Display a simple Logout confirmation.
          </li>

          <li>
            Confirm the Logout.
          </li>

          <li>
            Securely end the Client session.
          </li>

          <li>
            Return the Client to the appropriate JobScaffold Sign In or entry
            page.
          </li>
        </Section>
      </ol>
    </div>
  );
}