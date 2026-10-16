
function DashboardPreview() {
  return (
    <div
      className="dashboard-preview"
      aria-label="Illustration of an AI automation dashboard"
    >
      <div className="dashboard-topbar">
        <span>✦ AutomateX Workspace</span>
        <span className="dashboard-status">
          ● Demo Preview
        </span>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-stat">
          <span>Automated Workflows</span>
          <strong>12</strong>
        </div>

        <div className="dashboard-stat">
          <span>Tasks Processed</span>
          <strong>1,284</strong>
        </div>

        <div className="dashboard-stat">
          <span>Time Saved</span>
          <strong>48h</strong>
        </div>
      </div>

      <div className="dashboard-workflow">
        <h3>Example Automation Workflow</h3>

        <ol className="workflow-steps">
          <li>📩 Inquiry Received</li>
          <li>🤖 AI Categorizes</li>
          <li>🔔 Team Notified</li>
        </ol>

        <p className="workflow-note">
          Illustrative workflow — not live automation.
        </p>
      </div>
    </div>
  );
}

export default DashboardPreview;
